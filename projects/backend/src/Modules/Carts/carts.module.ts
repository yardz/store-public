import { Module, Logger } from '@nestjs/common';
import { CartsService } from './carts.service';
import { ProductsModule } from '@Modules/Products';
import { CartsController } from './carts.controller';

@Module({
	imports: [ProductsModule],
	providers: [Logger, CartsService],
	controllers: [CartsController],
	exports: [CartsService],
})
export class CartsModule {}
