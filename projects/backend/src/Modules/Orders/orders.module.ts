import { Module, Logger } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AddressesModule } from '@Modules/Addresses';
import { CartsModule } from '@Modules/Carts';
import { CouponsModule } from '@Modules/Coupons';
import { DeliveriesModule } from '@Modules/Deliveries';
import { LegacyModule } from '@Modules/Legacy';
import { PaymentsModule } from '@Modules/Payments';
import { ProductsModule } from '@Modules/Products';
import { UsersModule } from '@Modules/Users';

import { OrdersController } from './orders.controller';

import { OrderSchema } from './orders.schema';
import { OrdersService } from './orders.service';
import { CreateOrdersService } from './createOrder.service';

import { OrdersAdminController } from './orders.admin.controller';
import { OrdersAdminService } from './orders.admin.service';

@Module({
	imports: [
		MongooseModule.forFeature([{ name: 'Orders', schema: OrderSchema }]),
		LegacyModule,
		ProductsModule,
		UsersModule,
		CartsModule,
		DeliveriesModule,
		CouponsModule,
		PaymentsModule,
		AddressesModule,
	],
	controllers: [OrdersController, OrdersAdminController],
	providers: [Logger, OrdersService, CreateOrdersService, OrdersAdminService],
	exports: [OrdersService],
})
export class OrdersModule {}
