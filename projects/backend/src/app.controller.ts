import { Controller, Get, Logger } from '@nestjs/common';

@Controller()
export class AppController {
	constructor(private readonly logger: Logger) {
		this.logger.setContext(`AppController`);
	}

	@Get('/health')
	health() {
		return { status: 'ok' };
	}

	// Esse endpoint é para criar algum teste
	@Get('/test')
	async test() {
		const obj = { uid: '__uid__', item: '__item_2__', subCampo: { name: 'teste', value: 'valor' } };
		this.logger.error('this.logger.error');
		this.logger.log('this.logger.log');
		this.logger.warn('this.logger.warn');
		this.logger.debug({ message: 'this.logger.debug', ...obj });
		this.logger.verbose('this.logger.verbose');
		return { status: 'ok' };
	}
}
