/* eslint-disable max-lines */
import { ConflictException, Injectable, Logger } from '@nestjs/common';
import { BodyMeasurements, PersonalData, User } from '@lab77store/domain';
import { CustumerLegacyService } from '@Modules/Legacy/custumer.legacy.service';
import { InjectModel } from '@nestjs/mongoose';
import to from 'await-to-js';
import dayjs from 'dayjs';
import firebase from 'firebase-admin';
import { FilterQuery, Model } from 'mongoose';
import { cpf } from 'cpf-cnpj-validator';
import * as queryString from 'query-string';
import { EmailsService } from '@Modules/Emails/emails.service';
import { UserDocument } from './users.schema';

@Injectable()
export class UsersService {
	constructor(
		private readonly logger: Logger,
		private readonly custumerLegacyService: CustumerLegacyService,
		private readonly emailsService: EmailsService,
		@InjectModel('Users') private usersModel: Model<UserDocument>,
	) {
		this.logger.setContext('UsersService');
	}

	/** @deprecated deve ser removido assim que possível */
	private async hydratedUser(user: UserDocument): Promise<User> {
		const custumers = await this.custumerLegacyService.findAll({ id: user.legacyId });
		const costumer = custumers[0];

		const hydratedUser: User = {
			uid: user.uid,
			personalData: {
				...user.personalData,
				firstName: costumer.name,
				lastName: costumer.lastName,
				phone: costumer.cellphone || costumer.phone,
				birthday: dayjs(costumer.birthday).unix() * 1000,
				sex: costumer.sex === 'M' ? 'male' : 'female',
				newsletter: costumer.newsletter,
				email: costumer.email,
			},
		};

		return hydratedUser;
	}

	async findOne(filter: FilterQuery<UserDocument>): Promise<User | undefined> {
		const user = await this.usersModel.findOne(filter);
		if (user) {
			return this.hydratedUser(user);
		}
	}

	async getEmailDocument({ document }: { document: string }): Promise<{ email: string } | undefined> {
		const user = await this.usersModel.findOne({ 'personalData.document': document });
		if (user) {
			return { email: user.personalData.email };
		}
	}

	/** @deprecated deve ser removido assim que possível */
	async getLegacyId({ uid }: { uid: string }): Promise<number | undefined> {
		const user = await this.usersModel.findOne({ uid });
		if (user) {
			return user.legacyId;
		}
	}

	async register({ personalData, password }: { personalData: PersonalData; password: string }) {
		const logInfo = {
			email: personalData.email,
			document: personalData.document,
			uid: '',
			legacyId: 0,
			_id: '',
		};
		this.logger.log({ message: 'Cadastrando novo', ...logInfo, personalData });

		const [err, user] = await to(firebase.auth().createUser({ email: personalData.email, password }));
		if (err || !user) {
			this.logger.warn({
				message: 'erro ao tentar cadastrar usuário no firebase',
				...logInfo,
				err,
			});
			throw new ConflictException({
				message: 'User already exists - firebase',
				displayMessage: 'Esse usuário já está cadastrado em nosso sistema',
			});
		}

		logInfo.uid = user.uid;

		this.logger.log({ message: 'Novo usuário cadastrado no firebase', ...logInfo });
		const [legacyErr, legacyId] = await to(
			this.custumerLegacyService.create({
				user: {
					name: personalData.firstName,
					lastName: personalData.lastName,
					email: personalData.email,
					cellphone: personalData.phone,
					cpf: cpf.format(personalData.document),
					birthday: dayjs(personalData.birthday).format('YYYY-MM-DD HH:mm:ss'),
					// eslint-disable-next-line no-nested-ternary
					sex: personalData.sex ? (personalData.sex === 'male' ? 'M' : 'F') : 'M',
					newsletter: personalData.newsletter,
				},
			}),
		);
		if (legacyErr || !legacyId) {
			this.logger.error({
				message: 'erro ao tentar cadastrar usuário no mysql',
				...logInfo,
				legacyErr,
			});
			// apaga o usuário do firebase em caso de erro
			await firebase.auth().deleteUser(user.uid);
			throw new ConflictException({
				message: 'User already exists - legacy',
				displayMessage: 'Esse usuário já está cadastrado em nosso sistema',
			});
		}
		logInfo.legacyId = legacyId;
		this.logger.log({ message: 'Novo usuário cadastrado no mysql', ...logInfo });
		const [mongoErr, mongoUser] = await to(
			new this.usersModel({ uid: user.uid, personalData: { email: personalData.email, document: personalData.document }, legacyId }).save(),
		);
		if (mongoErr || !legacyId || !mongoUser) {
			this.logger.error({
				message: 'erro ao tentar cadastrar usuário no mongodb',
				...logInfo,
				mongoErr,
			});
			// apaga o usuário do firebase em caso de erro
			await firebase.auth().deleteUser(user.uid);
			if (legacyId) await this.custumerLegacyService.delete({ id: legacyId });
			throw new ConflictException({
				message: 'User already exists - mongo',
				displayMessage: 'Esse usuário já está cadastrado em nosso sistema',
			});
		}

		logInfo._id = mongoUser._id.toString();
		this.logger.log({ message: 'Novo usuário cadastrado no mongo', ...logInfo });
		return this.findOne({ uid: user.uid });
	}

	async saveBodyMeasurements({ uid }: { uid: string; bodyMeasurements: BodyMeasurements }) {
		// no futuro será usado para salvar as medidas do corpo
		return this.findOne({ uid });
	}

	async sendEmailResetPassword({ uid, email }: { email: string; uid: string }): Promise<string | undefined> {
		const user = await this.findOne({ uid });
		if (!user) return undefined;
		const link = await firebase.auth().generatePasswordResetLink(user.personalData.email);
		const token = queryString.parse(link)?.oobCode?.toString() || '';

		if (!token) return undefined;

		await this.emailsService.sendResetPassword({
			email,
			token,
			name: `${user.personalData.firstName} ${user.personalData.lastName}`,
		});

		return email;
	}
}
