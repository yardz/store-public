/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
/* eslint @typescript-eslint/explicit-module-boundary-types: 'off' */
import { Logger } from 'winston';
import { LoggerService } from '@nestjs/common';

export class WinstonLoggerExtended implements LoggerService {
	private context?: string;

	constructor(private readonly logger: Logger) {}

	public setContext(context: string) {
		this.context = context;
	}

	public log(message: any, context?: string): any {
		context = context || this.context;

		if (typeof message === 'object') {
			const { message: msg, ...meta } = message;

			return this.logger.info(msg as string, { context, ...meta });
		}

		return this.logger.info(message, { context });
	}

	public error(message: any, trace?: string, context?: string): any {
		context = context || this.context;

		if (message instanceof Error) {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const { message: msg, name, stack, ...meta } = message;

			return this.logger.error(msg, { context, stack: [trace || message.stack], ...meta });
		}

		if (typeof message === 'object') {
			const { message: msg, ...meta } = message;

			return this.logger.error(msg as string, { context, stack: [trace], ...meta });
		}

		return this.logger.error(message, { context, stack: [trace] });
	}

	public warn(message: any, context?: string): any {
		context = context || this.context;

		if (typeof message === 'object') {
			const { message: msg, ...meta } = message;

			return this.logger.warn(msg as string, { context, ...meta });
		}

		return this.logger.warn(message, { context });
	}

	public debug?(message: any, context?: string): any {
		context = context || this.context;

		if (typeof message === 'object') {
			const { message: msg, ...meta } = message;

			return this.logger.debug(msg as string, { context, ...meta });
		}

		return this.logger.debug(message, { context });
	}

	public verbose?(message: any, context?: string): any {
		context = context || this.context;

		if (typeof message === 'object') {
			const { message: msg, ...meta } = message;

			return this.logger.verbose(msg as string, { context, ...meta });
		}

		return this.logger.verbose(message, { context });
	}

	public getWinstonLogger(): Logger {
		return this.logger;
	}
}
