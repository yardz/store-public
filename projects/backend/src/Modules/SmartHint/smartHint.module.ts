import { HttpModule, Module, Logger } from '@nestjs/common';
import { CategoriesModule } from '@Modules/Categories';
import { ProductsModule } from '@Modules/Products';
import { SmartHintService } from './smartHint.service';
import { SmartHintController } from './smartHint.controller';

@Module({
	imports: [HttpModule, CategoriesModule, ProductsModule],
	controllers: [SmartHintController],
	providers: [Logger, SmartHintService],
	exports: [SmartHintService],
})
export class SmartHintModule {}
