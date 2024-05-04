import { CategorySchema } from '@Modules/Categories/categories.schema';
import { OrderSchema } from '@Modules/Orders/orders.schema';
import { PaymentSchema } from '@Modules/Payments/payments.schema';
import { ProductSchema } from '@Modules/Products/products.schema';
import { UserSchema } from '@Modules/Users/users.schema';
import { Module, Logger } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LegacyModule } from '../Legacy';
import { ImportationController } from './importation.controller';
import * as Services from './services';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: 'Products', schema: ProductSchema },
			{ name: 'Orders', schema: OrderSchema },
			{ name: 'Users', schema: UserSchema },
			{ name: 'Payments', schema: PaymentSchema },
			{ name: 'Categories', schema: CategorySchema },
		]),
		LegacyModule,
	],
	controllers: [ImportationController],
	providers: [Logger, ...Object.values(Services)],
	exports: [],
})
export class ImportationModule {}
