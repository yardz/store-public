import { ConflictException, Injectable, NotFoundException, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import firebase from 'firebase-admin';
import dayjs from 'dayjs';
import to from 'await-to-js';
import { Model } from 'mongoose';
import { PersonalData } from '@lab77store/domain';
import { CustumerLegacyService } from '@Modules/Legacy/custumer.legacy.service';
import { UserDocument } from './users.schema';
import { UsersService } from './users.service';

@Injectable()
export class UsersPersonalService {
	constructor(
		private readonly logger: Logger,
		private readonly usersService: UsersService,
		private readonly custumerLegacyService: CustumerLegacyService,
		@InjectModel('Users') private usersModel: Model<UserDocument>,
	) {
		this.logger.setContext('UsersPersonalService');
	}

	/** @deprecated deve ser removido assim que possível */
	private async getValidUserLegacy(uid: string) {
		const userMongoDb = await this.usersModel.findOne({ uid }).select(['legacyId']);
		if (!userMongoDb) {
			this.logger.error({ message: 'O usuário não encontrado no mongoDB', uid });
			throw new NotFoundException('User not exists');
		}
		const userLegacy = await this.custumerLegacyService.findOne({ id: userMongoDb.legacyId });
		if (!userLegacy) {
			this.logger.error({ message: 'O usuário não encontrado no mysql', uid, legacyId: userMongoDb.legacyId });
			throw new NotFoundException('User not exists');
		}
		return userLegacy;
	}

	async updatePersonalData({ uid, personalData }: { uid: string; personalData: PersonalData }) {
		const userLegacy = await this.getValidUserLegacy(uid);

		// Somente troca o e-mail no firebase se o novo e-mail for diferente do atual
		const { email } = userLegacy;
		if (email !== personalData.email) {
			const [err] = await to(firebase.auth().updateUser(uid, { email: personalData.email }));
			if (err) {
				this.logger.error({
					message: 'Usuário tentou alterar para um e-mail inválido',
					uid,
					currentEmail: email,
					invalidEmail: personalData.email,
				});
				throw new ConflictException('Invalid email!');
			}
		}

		await this.custumerLegacyService.update({
			id: userLegacy.id,
			user: {
				name: personalData.firstName,
				lastName: personalData.lastName,
				email: personalData.email,
				cellphone: personalData.phone,
				cpf: personalData.document,
				birthday: dayjs(personalData.birthday).format('YYYY-MM-DD HH:mm:ss'),
				// eslint-disable-next-line no-nested-ternary
				sex: personalData.sex ? (personalData.sex === 'male' ? 'M' : 'F') : 'M',
			},
		});

		await this.usersModel.updateOne(
			{ uid },
			{ personalData: { email: personalData.email, document: personalData.document } },
			{ upsert: false },
		);

		return this.usersService.findOne({ uid });
	}
}
