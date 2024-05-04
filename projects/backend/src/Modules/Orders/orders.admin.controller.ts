import { Controller, Get, Query, Logger } from '@nestjs/common';
import { OrdersAdminService } from './orders.admin.service';
import { PaginateList, OrderAdminListItem } from '@lab77store/domain';
import { Auth } from '@Utils/decorators';
import { createPaginationResponse } from '@Utils/functions/createPaginationResponse';
import { ApiTags } from '@nestjs/swagger';
import dayjs from 'dayjs';
import * as ARGS from './orders.args';
import { OrdersService } from './orders.service';

@ApiTags('Orders Admin')
@Controller('orders-admin')
export class OrdersAdminController {
	constructor(
		private readonly logger: Logger,
		private readonly ordersAdminService: OrdersAdminService,
		private readonly ordersService: OrdersService,
	) {
		this.logger.setContext('ProductsController');
	}

	@Auth('Orders.update', 'Orders.create', 'Orders.delete')
	@Get()
	async find(@Query() query: ARGS.ListFilter): Promise<PaginateList<OrderAdminListItem | null>> {
		const { orderId, legacyId, purshaseDate, ...paginate } = query;

		const queryConditions: Record<string, unknown>[] = [];
		let filter = {};
		if (orderId) {
			queryConditions.push({ _id: orderId });
		}
		if (legacyId) {
			queryConditions.push({ legacyId });
		}
		if (purshaseDate) {
			const startDate = dayjs(purshaseDate).format('YYYY-MM-DD HH:mm:ss');
			const endDate = dayjs(purshaseDate).add(1, 'day').format('YYYY-MM-DD HH:mm:ss');

			queryConditions.push({ createdAt: { $gte: startDate, $lt: endDate } });
		}

		if (queryConditions.length) {
			filter = { $or: queryConditions };
		}
		const items = await this.ordersAdminService.find({
			filter,
			paginate,
		});
		const { total } = await this.ordersService.count({ filter });
		return createPaginationResponse({ paginate, items, total });
	}
}
