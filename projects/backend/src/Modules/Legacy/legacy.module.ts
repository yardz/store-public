import { HttpModule, Module, Logger } from '@nestjs/common';
import { ProductLegacyService } from './product.legacy.service';
import { OrderLegacyService } from './order.legacy.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductLegacyModel, ProductSubcategoriesLegacyModel } from './product.legacy.types';
import { VariationLegacyModel } from './variations.legacy.types';
import { SizeLegacyModel } from './size.legacy.types';
import { ModelLegacyModel } from './model.legacy.types';
import { ColorLegacyModel } from './color.legacy.types';
import { MatrixLegacyModel } from './matrix.legacy.types';
import { ImageCartLegacyModel } from './image-cart.legacy.types';
import { OrderLegacyModel } from './order.legacy.types';
import { CustumerLegacyModel } from './custumer.legacy.types';
import { StatusLegacyModel } from './status.legacy.types';
import { DeliveryLegacyModel } from './delivery.legacy.types';
import { PaymentLegacyModel } from './payment.legacy.types';
import { AddressLegacyModel } from './address.legacy.types';
import { OrderItemsLegacyModel } from './order-items.legacy.types';
import { DiscountsLegacyModel } from './discounts.legacy.types';
import { CustumerLegacyService } from './custumer.legacy.service';
import { PaymentLegacyService } from './payment.legacy.service';
import { CategoriesLegacyModel } from './categories.legacy.types';
import { SubcategoriesLegacyModel } from './subcategories.legacy.types';
import { CategoryLegacyService } from './category.legacy.service';
import { CategoryImagesLegacyModel } from './categoryImages.legacy.types';
import { AddressLegacyService } from './address.legacy.service';
import { DiscountsLegacyService } from './discounts.legacy.service';
import { MeasureTableLegacyModel } from './measureTable.legacy.types';

const providers = [
	ProductLegacyService,
	OrderLegacyService,
	CustumerLegacyService,
	PaymentLegacyService,
	CategoryLegacyService,
	AddressLegacyService,
	DiscountsLegacyService,
];

@Module({
	imports: [
		SequelizeModule.forFeature([
			ProductLegacyModel,
			ProductSubcategoriesLegacyModel,
			VariationLegacyModel,
			MatrixLegacyModel,
			SizeLegacyModel,
			ModelLegacyModel,
			ColorLegacyModel,
			ImageCartLegacyModel,
			OrderLegacyModel,
			CustumerLegacyModel,
			StatusLegacyModel,
			DeliveryLegacyModel,
			PaymentLegacyModel,
			AddressLegacyModel,
			StatusLegacyModel,
			OrderItemsLegacyModel,
			DiscountsLegacyModel,
			CategoriesLegacyModel,
			SubcategoriesLegacyModel,
			CategoryImagesLegacyModel,
			MeasureTableLegacyModel,
		]),
		HttpModule,
	],
	providers: [...providers, Logger],
	exports: providers,
})
export class LegacyModule {}
