import { MailerService } from '@nestjs-modules/mailer';
import { BadGatewayException, Injectable, Logger } from '@nestjs/common';
import to from 'await-to-js';
import fs from 'fs';
import handlebars from 'handlebars';
import path from 'path';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type HandlebarsTemplateDelegate = any;

@Injectable()
export class EmailsService {
	private resetPasswordTemplate: HandlebarsTemplateDelegate;
	private contactMessageTemplate: HandlebarsTemplateDelegate;
	private automacticMessageTemplate: HandlebarsTemplateDelegate;

	constructor(private readonly logger: Logger, private readonly mailerService: MailerService) {
		this.logger.setContext('EmailsService');
	}

	private async sendMail({ mailTo, subject, content }: { mailTo: string; subject: string; content: string }) {
		return this.mailerService.sendMail({
			to: mailTo,
			subject,
			template: './template',
			context: {
				content,
			},
		});
	}

	private async sendAutomaticMessage({ name, email, message }: { name: string; email: string; message: string }) {
		if (!this.automacticMessageTemplate) {
			const html = fs.readFileSync(path.join(__dirname, 'Templates', 'automaticMessage.hbs'), { encoding: 'utf-8' });
			this.automacticMessageTemplate = handlebars.compile(html);
		}
		const content = this.automacticMessageTemplate({ name, message });
		const [error] = await to(this.sendMail({ mailTo: email, subject: 'Contato Lab77', content }));
		if (error) {
			this.logger.error({ message: 'Não foi possível enviar o e-mail automático', error, email, templateMessage: message });
			throw new BadGatewayException();
		}
	}

	async sendResetPassword({ email, name, token }: { email: string; name: string; token: string }) {
		if (!this.resetPasswordTemplate) {
			const html = fs.readFileSync(path.join(__dirname, 'Templates', 'resetPassword.hbs'), { encoding: 'utf-8' });
			this.resetPasswordTemplate = handlebars.compile(html);
		}

		const linkResetPassword = `${process.env.LAB77_SITE_BASE_URL}/resetar-senha?code=${token}`;
		const content = this.resetPasswordTemplate({ name, linkResetPassword });

		const [error] = await to(this.sendMail({ mailTo: email, subject: 'Resetar senha', content }));
		if (error) {
			this.logger.error({ message: 'Não foi possível enviar o e-mail de recuperar senha', email, error });
			throw new BadGatewayException();
		}
	}

	async sendContactMessage({ name, subject, email, message }: { name: string; subject: string; email: string; message: string }) {
		if (!this.contactMessageTemplate) {
			const html = fs.readFileSync(path.join(__dirname, 'Templates', 'contactMessage.hbs'), { encoding: 'utf-8' });
			this.contactMessageTemplate = handlebars.compile(html);
		}

		const content = this.contactMessageTemplate({
			name,
			email,
			message,
			subjectContact: subject,
		});

		const [error] = await to(this.sendMail({ mailTo: process.env.LAB77_EMAIL_CONTACT_ADDRESS || '', subject, content }));

		if (error) {
			this.logger.error({
				message: 'Não foi possível enviar o e-mail de contato para contato@lab77.com.br',
				email,
				name,
				emailMessage: message,
				lab77Email: process.env.LAB77_EMAIL_CONTACT_ADDRESS,
				error,
			});
			throw new BadGatewayException();
		}

		await to(
			this.sendAutomaticMessage({
				name,
				email,
				message: 'Recebemos sua solicitação, em breve alguém da nossa equipe vai entrar em contato.',
			}),
		);
	}
}
