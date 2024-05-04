import { Controller, Post, Body, Logger } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import * as ARGS from './emails.args';
import { EmailsService } from './emails.service';

@ApiTags('Emails')
@Controller('emails')
export class EmailsController {
	constructor(private readonly logger: Logger, private readonly emailsService: EmailsService) {
		this.logger.setContext('EmailsController');
	}

	@Post('/contact')
	async sendContactEmail(@Body() payload: ARGS.ContactMessage) {
		await this.emailsService.sendContactMessage({
			name: payload.name,
			subject: payload.subject,
			email: payload.email,
			message: payload.message,
		});
	}
}
