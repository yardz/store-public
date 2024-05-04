import { Controller, Post, Logger } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SmartHintService } from './smartHint.service';

@ApiTags('SmartHint')
@Controller('smart-hint')
export class SmartHintController {
	constructor(private readonly logger: Logger, private readonly smartHintService: SmartHintService) {
		this.logger.setContext('SmartHintController');
	}

	@Post('/')
	async save() {
		await this.smartHintService.categoryList();
		await this.smartHintService.productList();
	}
}
