import { Controller, Get, NotFoundException, Param, Logger } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CouponsService } from './coupons.service';

import * as ARGS from './coupons.args';

@ApiTags('Coupons')
@Controller('coupons')
export class CouponsController {
	constructor(private readonly logger: Logger, private readonly couponsService: CouponsService) {
		this.logger.setContext('CouponsController');
	}

	@Get('/:coupon')
	async getDeliveryOptions(@Param() { coupon }: ARGS.GetCoupon) {
		const doc = await this.couponsService.getCoupon({ coupon });
		if (!doc) {
			throw new NotFoundException();
		}
		return doc;
	}
}
