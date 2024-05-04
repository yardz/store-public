import { BadRequestException, Body, Controller, Get, Post, Put, Logger, Param, Query, NotFoundException } from '@nestjs/common';
import { Auth, Uid } from '@App/Utils/decorators';
import { ApiTags } from '@nestjs/swagger';
import * as ARGS from './users.args';
import { UsersService } from './users.service';
import { UsersAdminService } from './users.admin.service';
import { emailMask } from '@Utils/functions/maskEmail';
import { formatCpf } from '@Utils/functions/formatCpf';
import { stringToRegExp } from '@App/Utils/functions/stringToRegExp';
import { UsersPersonalService } from './users.personalData.service';
import { UserAdminListItem, UserAdmin, PaginateList } from '@lab77store/domain';
import { createPaginationResponse } from '@Utils/functions/createPaginationResponse';
// import firebase from 'firebase';

@ApiTags('Users')
@Controller('users')
export class UsersController {
	constructor(
		private readonly logger: Logger,
		private readonly usersService: UsersService,
		private readonly usersAdminService: UsersAdminService,
		private readonly usersPersonalService: UsersPersonalService,
	) {
		this.logger.setContext('UsersController');
	}

	@Auth()
	@Get('/me')
	async me(@Uid() uid: string) {
		return this.usersService.findOne({ uid });
	}

	@Post('/auth-document')
	async authDocument(@Body() { document }: ARGS.AuthDocument) {
		return this.usersService.getEmailDocument({ document });
	}

	@Post('/register')
	async register(@Body() { password, personalData }: ARGS.RegisterUser) {
		return this.usersService.register({ personalData, password });
	}

	@Post('/forgot-password')
	async resetPassword(@Body() { emailOrCpf }: ARGS.ResetPassword) {
		const user = await this.usersService.findOne({
			$or: [{ 'personalData.email': emailOrCpf }, { 'personalData.document': formatCpf(emailOrCpf) }],
		});
		if (!user) {
			this.logger.error({ message: 'Ocorreu uma tentativa de recuperar senha com dados inválidos', emailOrCpf });
			throw new BadRequestException();
		}
		const email = await this.usersService.sendEmailResetPassword({ uid: user.uid, email: user.personalData.email });
		if (!email) {
			this.logger.error({ message: 'Ocorreu uma erro ao tentar recuperar a senha do usuário', user });
			throw new BadRequestException();
		}
		const maskedEmail = emailMask(email);
		return { email: maskedEmail };
	}

	@Auth()
	@Put('/personal-data')
	async update(@Uid() uid: string, @Body() { personalData }: ARGS.SaveUserPersonalData) {
		return this.usersPersonalService.updatePersonalData({ uid, personalData });
	}

	@Auth()
	@Put('/body-measurements')
	async saveBodyMeasurements(@Body() { bodyMeasurements }: ARGS.SaveBodyMeasurements, @Uid() uid: string) {
		return this.usersService.saveBodyMeasurements({ uid, bodyMeasurements });
	}

	@Auth('Users.create', 'Users.update', 'Users.delete')
	@Get('/admin-users')
	async find(@Query() query: ARGS.ListFilter): Promise<PaginateList<UserAdminListItem | null>> {
		const { uid, document, email, ...paginate } = query;

		const queryConditions: Record<string, unknown>[] = [];
		let filter = {};

		const formatedDocument = formatCpf(document || '');
		if (formatedDocument) {
			queryConditions.push({ 'personalData.document': stringToRegExp(formatedDocument) });
		}

		if (uid) {
			queryConditions.push({ uid: stringToRegExp(uid) });
		}
		if (email) {
			queryConditions.push({ 'personalData.email': stringToRegExp(email) });
		}

		if (queryConditions.length) {
			filter = { $or: queryConditions };
		}

		const items = await this.usersAdminService.find({ filter, paginate });
		const { total } = await this.usersAdminService.count({ filter });
		return createPaginationResponse({ paginate, items, total });
	}

	@Auth('Users.create', 'Users.update', 'Users.delete')
	@Get('/admin-users/:uid')
	async adminUser(@Param() { uid }: ARGS.UID): Promise<UserAdmin | undefined> {
		const doc = await this.usersAdminService.findOne({ uid });
		if (!doc) {
			throw new NotFoundException();
		}
		return doc;
	}

	@Auth('Users.create', 'Users.update', 'Users.delete')
	@Post('/forgot-password/:uid')
	async resetPasswordAdmin(@Param() { uid }: ARGS.UID, @Body() { email }: ARGS.ResetPasswordAdmin) {
		const sendedTo = await this.usersService.sendEmailResetPassword({ uid, email });
		if (!sendedTo) {
			this.logger.error({ message: `Ocorreu um erro ao tentar enviar e-mail de recuperação de senha`, uid, email });
			throw new BadRequestException();
		}
		return { email: sendedTo };
	}
}
