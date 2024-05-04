import { Module, Logger } from '@nestjs/common';
import { CategoriesModule } from '@Modules/Categories';
import { ProductsModule } from '@Modules/Products';
import { RssController } from './rss.controller';

@Module({
	imports: [ProductsModule, CategoriesModule],
	controllers: [RssController],
	providers: [Logger],
})
export class RssModule {}
