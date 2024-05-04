import { Injectable, Logger, InternalServerErrorException } from '@nestjs/common';
import { FilterQuery, Model } from 'mongoose';
import { Pagination, OrderAdminListItem, OrderAdmin } from '@lab77store/domain';
import { OrderDocument } from './orders.schema';
import { InjectModel } from '@nestjs/mongoose';
import { UsersService } from '@Modules/Users/users.service';
import { documentQueryPaginate } from '@Utils/functions/documentQueryPaginate';
import { OrderLegacyService } from '@Modules/Legacy/order.legacy.service';
import dayjs from 'dayjs';

@Injectable()
export class OrdersAdminService {
	constructor(
		@InjectModel('Orders') private ordersModel: Model<OrderDocument>,
		private readonly logger: Logger,
		private readonly usersService: UsersService,
		private readonly orderLegacyService: OrderLegacyService,
	) {
		this.logger.setContext('OrdersAdminService');
	}

	private async orderAdminMapper(order: OrderDocument): Promise<OrderAdminListItem> {
		const { _id, legacyId, createdAt, uid } = order;
		const user = await this.usersService.findOne({ uid });
		const orderLegacy = await this.orderLegacyService.findOne(legacyId);

		if (!user) {
			this.logger.error({ message: 'O usuário não está registrado no mongoDB', uid, orderId: _id });
			throw new InternalServerErrorException('this user does not exist');
		}

		const { email, firstName, lastName } = user.personalData;

		/** @deprecated deve ser removido assim que possível */
		const legacyCupon = orderLegacy?.discount?.code || '';

		return {
			_id: _id.toString(),
			/** @deprecated deve ser removido assim que possível */
			legacyId: legacyId.toString(),
			client: { name: `${firstName} ${lastName}`, email },
			cupon: legacyCupon,
			createdAt: dayjs(createdAt).unix() * 1000,
		};
	}

	async findOne(filter: FilterQuery<OrderDocument>): Promise<OrderAdmin | null> {
		const orderMongoDb = await this.ordersModel.findOne(filter);

		if (!orderMongoDb) {
			return null;
		}

		return this.orderAdminMapper(orderMongoDb);
	}

	async find({ filter, paginate }: { filter: FilterQuery<OrderDocument>; paginate?: Pagination }) {
		let documentQuery = this.ordersModel.find(filter).sort({ _id: -1 });
		if (paginate) {
			documentQuery = documentQueryPaginate(documentQuery, paginate);
		}
		const orders = await documentQuery.exec();
		return Promise.all(orders.map(async (order): Promise<OrderAdminListItem> => this.orderAdminMapper(order)));
	}
}
