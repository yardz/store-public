import { Controller, Post, Logger } from '@nestjs/common';
import { Auth, Uid } from '@App/Utils/decorators';
import { ApiTags } from '@nestjs/swagger';
import { CartsService } from './carts.service';

@ApiTags('Carts')
@Controller('carts')
export class CartsController {
	constructor(private readonly logger: Logger, private readonly cartsService: CartsService) {
		this.logger.setContext('CartsController');
	}

	@Auth()
	@Post('/update')
	async updateCartItems(@Uid() uid: string) {
		return this.cartsService.updateCartItems({ uid });
	}
}
