import { Catch, ArgumentsHost, Logger, HttpServer } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class LoggerFilter extends BaseExceptionFilter {
	private logger: Logger;

	constructor(applicationRef?: HttpServer) {
		super(applicationRef);
		this.logger = new Logger();
		this.logger.setContext('LoggerFilter');
	}

	catch(exception: unknown, host: ArgumentsHost) {
		this.logger.error(exception);
		super.catch(exception, host);
		this.logger.log('End Request');
	}
}
