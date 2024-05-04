/* eslint-disable max-lines */
import { Injectable, Logger } from '@nestjs/common';
import { UserAdminListItem, UserAdmin, Pagination } from '@lab77store/domain';
import { CustumerLegacyService } from '@Modules/Legacy/custumer.legacy.service';
import { InjectModel } from '@nestjs/mongoose';
import dayjs from 'dayjs';
import { FilterQuery, Model } from 'mongoose';
import { UserDocument } from './users.schema';
import { documentQueryPaginate } from '@Utils/functions/documentQueryPaginate';

@Injectable()
export class UsersAdminService {
	constructor(
		private readonly logger: Logger,
		private readonly custumerLegacyService: CustumerLegacyService,
		@InjectModel('Users') private usersModel: Model<UserDocument>,
	) {
		this.logger.setContext('UsersService');
	}

	/** @deprecated deve ser removido assim que possível */
	private async hydratedUserList(user: UserDocument): Promise<UserAdminListItem> {
		const custumers = await this.custumerLegacyService.findAll({ id: user.legacyId });
		const costumer = custumers[0];

		const hydratedUser: UserAdminListItem = {
			uid: user.uid,
			personalData: {
				email: costumer.email,
				firstName: costumer.name,
				lastName: costumer.lastName,
				document: costumer.cpf,
			},
		};

		return hydratedUser;
	}

	/** @deprecated deve ser removido assim que possível */
	private async hydratedUser(user: UserDocument): Promise<UserAdmin> {
		const custumers = await this.custumerLegacyService.findAll({ id: user.legacyId });
		const costumer = custumers[0];

		const hydratedUser: UserAdmin = {
			uid: user.uid,
			personalData: {
				email: costumer.email,
				document: costumer.cpf,
			},
			legacyId: user.legacyId,
			createdAt: dayjs(user.createdAt).format('YYYY-MM-DD HH:mm:ss'),
			updatedAt: dayjs(user.updatedAt).format('YYYY-MM-DD HH:mm:ss'),
		};

		return hydratedUser;
	}

	async findOne(filter: FilterQuery<UserDocument>): Promise<UserAdmin | undefined> {
		const user = await this.usersModel.findOne(filter);
		if (!user) {
			return undefined;
		}

		return this.hydratedUser(user);
	}

	async find({ filter, paginate }: { filter: FilterQuery<UserDocument>; paginate?: Pagination }) {
		let documentQuery = this.usersModel.find(filter).sort({ legacyId: -1, _id: 1 });
		if (paginate) {
			documentQuery = documentQueryPaginate(documentQuery, paginate);
		}
		const users = await documentQuery.exec();
		return Promise.all(users.map(async (user): Promise<UserAdminListItem> => this.hydratedUserList(user)));
	}

	async count({ filter }: { filter: FilterQuery<UserDocument> }): Promise<{ total: number }> {
		const total = await this.usersModel.countDocuments(filter);
		return { total };
	}
}
