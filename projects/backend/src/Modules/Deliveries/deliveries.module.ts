import { HttpModule, Module, Logger } from '@nestjs/common';
import { CouponsModule } from '@Modules/Coupons';
import { CartsModule } from '@Modules/Carts';
import { DeliveriesController } from './deliveries.controller';
import { DeliveriesService } from './deliveries.service';

@Module({
	imports: [CouponsModule, HttpModule, CartsModule],
	controllers: [DeliveriesController],
	providers: [Logger, DeliveriesService],
	exports: [DeliveriesService],
})
export class DeliveriesModule {}
