import { Module, Logger, CacheModule } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from './categories.schema';

@Module({
	imports: [
		CacheModule.register({
			ttl: process.env.NODE_ENV !== 'production' ? 0.0001 : 30, // seconds
		}),
		MongooseModule.forFeature([{ name: 'Categories', schema: CategorySchema }]),
	],
	controllers: [CategoriesController],
	providers: [Logger, CategoriesService],
	exports: [CategoriesService],
})
export class CategoriesModule {}
