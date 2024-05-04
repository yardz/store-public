import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { WhereOptions } from 'sequelize';
import { AddressLegacyModel } from './address.legacy.types';
import dayjs from 'dayjs';

export interface LegacyAddress {
	zipCode: string;
	state: string;
	city: string;
	neighborhood: string;
	street: string;
	number: string;
	complement?: string;
}

@Injectable()
export class AddressLegacyService {
	constructor(
		@InjectModel(AddressLegacyModel)
		private readonly addressLegacyModel: typeof AddressLegacyModel,
	) {}

	/** @deprecated deve ser removido assim que possível */
	findOne(where?: WhereOptions) {
		return this.addressLegacyModel.findOne({ where });
	}

	/** @deprecated deve ser removido assim que possível */
	findAll(where?: WhereOptions) {
		return this.addressLegacyModel.findAll({ where });
	}

	/** @deprecated deve ser removido assim que possível */
	async create(address: LegacyAddress) {
		return (
			await this.addressLegacyModel.create({
				...address,
				createdAt: dayjs().format('YYYY-MM-DD HH:mm:ss'),
				updatedAt: dayjs().format('YYYY-MM-DD HH:mm:ss'),
			})
		).id;
	}

	/** @deprecated deve ser removido assim que possível */
	async update({ id, address }: { id: number; address: LegacyAddress }) {
		return this.addressLegacyModel.update({ ...address, updatedAt: dayjs().format('YYYY-MM-DD HH:mm:ss') }, { where: { id } });
	}

	/** @deprecated deve ser removido assim que possível */
	async delete({ id }: { id: number }) {
		return this.addressLegacyModel.destroy({ where: { id } });
	}
}
