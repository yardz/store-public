import { Controller, Get, NotFoundException, Param, Logger } from '@nestjs/common';
import { PaymentsService } from './payments.service';

import * as ARGS from './payments.args';
import { Auth, Uid } from '@App/Utils/decorators';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Payments')
@Controller('Payments')
export class PaymentsController {
	constructor(private readonly logger: Logger, private readonly paymentsService: PaymentsService) {
		this.logger.setContext('PaymentsController');
	}

	@Auth()
	@Get('/order/:order')
	async findOne(@Param() { order }: ARGS.GetPayments, @Uid() uid: string) {
		const doc = await this.paymentsService.findOne({ order, uid });
		if (!doc) {
			throw new NotFoundException();
		}
		return doc;
	}
}
