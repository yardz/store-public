import { Module, Logger } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

import { EmailsService } from './emails.service';
import path from 'path';
import { EmailsController } from './emails.controller';

@Module({
	imports: [
		ConfigModule.forRoot({ envFilePath: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env' }),
		MailerModule.forRoot({
			transport: {
				secure: false,
				host: 'smtp.gmail.com',
				port: 587, // 465,
				auth: JSON.parse(process.env.LAB77_EMAIL_AUTH || ''),
			},
			defaults: {
				from: `"Lab77" <${JSON.parse(process.env.LAB77_EMAIL_AUTH || '').user}>`,
			},
			template: {
				dir: path.join(__dirname, 'Templates'),
				adapter: new HandlebarsAdapter(),
				options: {
					strict: true,
				},
			},
		}),
	],
	providers: [Logger, EmailsService],
	controllers: [EmailsController],
	exports: [EmailsService],
})
export class EmailsModule {}
