import { Module, Logger } from '@nestjs/common';
import { LegacyModule } from '@Modules/Legacy';
import { CouponsService } from './coupons.service';
import { CouponsController } from './coupons.controller';

@Module({
	imports: [LegacyModule],
	controllers: [CouponsController],
	providers: [Logger, CouponsService],
	exports: [CouponsService],
})
export class CouponsModule {}
