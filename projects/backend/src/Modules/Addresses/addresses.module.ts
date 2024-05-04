import { Module, Logger } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AddressesService } from './addresses.service';
import { LegacyModule } from '@Modules/Legacy';
import { UsersModule } from '@Modules/Users';
import { AddressSchema } from './addresses.schema';
import { AddressesController } from './addresses.controller';

@Module({
	imports: [MongooseModule.forFeature([{ name: 'Addresses', schema: AddressSchema }]), UsersModule, LegacyModule],
	controllers: [AddressesController],
	providers: [Logger, AddressesService],
	exports: [AddressesService],
})
export class AddressesModule {}
