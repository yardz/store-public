import { HttpModule, Module, Logger } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LegacyModule } from '@Modules/Legacy';
import { PaymentSchema } from './payments.schema';
import { PaymentsService } from './payments.service';
import { PaymentsCheckoutService } from './payments.checkout.service';
import { PaymentsController } from './payments.controller';

@Module({
	imports: [MongooseModule.forFeature([{ name: 'Payments', schema: PaymentSchema }]), LegacyModule, HttpModule],
	controllers: [PaymentsController],
	providers: [Logger, PaymentsService, PaymentsCheckoutService],
	exports: [PaymentsCheckoutService],
})
export class PaymentsModule {}
