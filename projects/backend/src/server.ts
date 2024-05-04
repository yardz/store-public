import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { NestApplicationOptions, ValidationPipe } from '@nestjs/common';
import {
	WinstonLoggerExtended,
	injectMeta,
	LoggerInterceptor,
	LoggerFilter,
	requestIdHandler,
	createExpressWinstonHandler,
	httpContextMiddleware,
} from '@Utils/Logger';
import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import bodyParser from 'body-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { utilities as nestWinstonModuleUtilities } from 'nest-winston';
import * as winston from 'winston';
import DatadogTransport from '@shelf/winston-datadog-logs-transport';
import { telemetryStartup } from './Utils/Logger/azureApplicationInsihts';

const transports: winston.transport[] = [];

if (process.env?.NODE_ENV === 'development') {
	transports.push(
		new winston.transports.Console({
			format: winston.format.combine(nestWinstonModuleUtilities.format.nestLike()),
		}),
	);
}
if (process.env?.NODE_ENV !== 'development') {
	transports.push(
		new winston.transports.Console({
			format: winston.format.simple(),
			debugStdout: true,
		}),
	);
}

transports.push(
	new DatadogTransport({
		apiKey: process.env.DD_API_KEY,
		// port: 443, // optional port, 443 is for EU region secure port
		// host: 'tcp-intake.logs.datadoghq.eu', // optinal host, 'tcp-intake.logs.datadoghq.eu' is for EU region host
		// metadata: {
		// 	environment: process.env.LOG_ENVIRONMENT,
		// },
	}),
);

const logger = new WinstonLoggerExtended(
	winston.createLogger({
		level: process.env?.NODE_ENV === 'development' ? 'debug' : 'debug', // 'info',
		exitOnError: false,
		transports,
		format: winston.format.combine(injectMeta(), winston.format.timestamp(), winston.format.ms()),
		defaultMeta: {
			environment: process.env.LOG_ENVIRONMENT || process.env?.NODE_ENV,
		},
	}),
);

const configs: NestApplicationOptions = {
	cors: true,
	logger,
};

export const getServer = async () => {
	telemetryStartup(process.env.AZURE_APPLICATION_INSIHTS || '');
	const server = express();

	// Esse plugin gera o monitor para verificar o status do server
	// eslint-disable-next-line global-require
	server.use(require('express-status-monitor')());

	// eslint-disable-next-line global-require
	server.use(require('connect-datadog')({ tags: ['express'] }));

	const app = await NestFactory.create(AppModule, new ExpressAdapter(server), configs);
	const { httpAdapter } = app.get(HttpAdapterHost);
	app.enableCors();
	app.useGlobalFilters(new LoggerFilter(httpAdapter));
	app.useGlobalInterceptors(new LoggerInterceptor());
	app.use(helmet());
	app.use(bodyParser.json());
	// app.use(expressRequestId());

	// Use express-winston for logging request information
	const expressWinstonHandler = createExpressWinstonHandler(logger.getWinstonLogger());
	app.use(expressWinstonHandler);

	// Use express-http-context for context injection (request id)
	app.use(httpContextMiddleware);
	app.use(requestIdHandler);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const RateLimit: any = rateLimit;
	app.use(
		new RateLimit({
			windowMs: 1 * 60 * 1000,
			max: 1000,
		}),
	);
	app.useGlobalPipes(
		new ValidationPipe({
			transform: true,
			whitelist: true,
			forbidNonWhitelisted: true,
		}),
	);

	if (process.env?.NODE_ENV === 'development') {
		const options = new DocumentBuilder()
			.setTitle('Lab77 - API Docs')
			.setDescription('Documentação para a API da LAB77')
			.setVersion('1.0')
			.build();
		const document = SwaggerModule.createDocument(app, options);
		SwaggerModule.setup('docs', app, document);
	}

	await app.init();

	return { server, app };
};
