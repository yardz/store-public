import { ConflictException, Injectable, Logger } from '@nestjs/common';
import { UsersService } from '@Modules/Users/users.service';
import { UserAddress } from '@lab77store/domain';

import { AddressLegacyService } from '@Modules/Legacy/address.legacy.service';
import { CustumerLegacyService } from '@Modules/Legacy/custumer.legacy.service';
import { AddressDocument, addressMapper } from './addresses.schema';

import { Model, ObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import to from 'await-to-js';

@Injectable()
export class AddressesService {
	constructor(
		@InjectModel('Addresses') private addressModel: Model<AddressDocument>,
		private readonly logger: Logger,
		private readonly custumerLegacyService: CustumerLegacyService,
		private readonly addressLegacyService: AddressLegacyService,
		private readonly usersService: UsersService,
	) {
		this.logger.setContext('AddressesService');
	}

	async createAddress({ address, uid }: { address: Omit<UserAddress, '_id'>; uid: string }) {
		const legacyId = await this.addressLegacyService.create(address);
		const [err, res] = await to(new this.addressModel({ ...address, uid, legacyId }).save());
		if (err || !res) {
			throw new ConflictException(err?.message);
		}
		return addressMapper(res);
	}

	async update({ address, uid, _id }: { _id: string | ObjectId; address: Omit<UserAddress, '_id'>; uid: string }) {
		const doc = await this.addressModel.findOneAndUpdate({ _id, uid }, address);
		if (doc) {
			await this.addressLegacyService.update({ id: doc.legacyId, address });
			return addressMapper(doc);
		}
	}

	async delete({ _id, uid }: { _id: string | ObjectId; uid: string }): Promise<UserAddress | void> {
		await this.addressModel.deleteOne({ _id, uid });
	}

	async find({ uid }: { uid: string }): Promise<UserAddress[]> {
		const documents = await this.addressModel.find({ uid });
		return documents.map(doc => addressMapper(doc));
	}

	async findOne({ uid, _id }: { _id: string | ObjectId; uid: string }): Promise<UserAddress | void> {
		const document = await this.addressModel.findOne({ uid, _id });
		if (document) {
			return addressMapper(document);
		}
	}
}
