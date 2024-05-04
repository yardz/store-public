import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { WhereOptions } from 'sequelize';
import { AddressLegacyService } from './address.legacy.service';
import { CustumerLegacyModel as Custumer } from './custumer.legacy.types';

interface CustumerLegacy {
	name: string;
	lastName: string;
	email: string;
	phone?: string;
	cellphone: string;
	cpf: string;
	sex: 'M' | 'F';
	birthday: string;
	newsletter?: boolean;
}

@Injectable()
export class CustumerLegacyService {
	constructor(
		@InjectModel(Custumer)
		private readonly custumerLegacyModel: typeof Custumer,
		private readonly addressLegacyService: AddressLegacyService,
		private readonly logger: Logger,
	) {
		this.logger.setContext('CustumerLegacyService');
	}

	/** @deprecated deve ser removido assim que possível */
	findOne(where: WhereOptions) {
		return this.custumerLegacyModel.findOne({ where });
	}

	/** @deprecated deve ser removido assim que possível */
	findAll(where?: WhereOptions, limit?: number) {
		return this.custumerLegacyModel.findAll({ where, limit });
	}

	/** @deprecated deve ser removido assim que possível */
	async create({ user }: { user: CustumerLegacy }) {
		const addressId = await this.addressLegacyService.create({
			city: '',
			zipCode: '',
			neighborhood: '',
			number: '',
			state: '',
			street: '',
		});
		return (await this.custumerLegacyModel.create({ password: 'sem-senha', addressId, ...user })).id;
	}

	/** @deprecated deve ser removido assim que possível */
	update({ id, user }: { id: number; user: CustumerLegacy }) {
		return this.custumerLegacyModel.update({ ...user }, { where: { id } });
	}

	/** @deprecated deve ser removido assim que possível */
	updateAddress({ id, addressId }: { id: number; addressId: number }) {
		return this.custumerLegacyModel.update({ addressId }, { where: { id } });
	}

	/** @deprecated deve ser removido assim que possível */
	async delete({ id }: { id: number }) {
		const user = await this.custumerLegacyModel.findOne({ where: { id } });
		if (!!user) {
			this.logger.warn({ message: 'Deletando usuário', ...user });
			await this.custumerLegacyModel.destroy({ where: { id } });
			await this.addressLegacyService.delete({ id: user.addressId });
		}
	}
}
