import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

exports.default = async () => {
	const app = await NestFactory.createApplicationContext(AppModule);
	return app;
};
