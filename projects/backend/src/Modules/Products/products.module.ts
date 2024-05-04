import {
	Module,
	Logger,
	// CacheModule
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsAdminService } from './products.admin.service';
import { ProductsController } from './products.controller';
import { ProductsAdminController } from './products.admin.controller';
import { LegacyModule } from '@Modules/Legacy';
import { CategoriesModule } from '@Modules/Categories';
import { FilesModule } from '@Modules/Files';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './products.schema';

@Module({
	imports: [
		// CacheModule.register({
		// 	ttl: process.env.NODE_ENV !== 'production' ? 0.0001 : 30, // seconds
		// }),
		MongooseModule.forFeature([{ name: 'Products', schema: ProductSchema }]),
		LegacyModule,
		CategoriesModule,
		FilesModule,
	],
	controllers: [ProductsController, ProductsAdminController],
	providers: [Logger, ProductsService, ProductsAdminService],
	exports: [ProductsService],
})
export class ProductsModule {}
