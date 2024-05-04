import { Module, Logger } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersPersonalService } from './users.personalData.service';
import { UsersAdminService } from './users.admin.service';
import { LegacyModule } from '@Modules/Legacy';
import { EmailsModule } from '@Modules/Emails';
import { UserSchema } from './users.schema';
import { UsersController } from './users.controller';

@Module({
	imports: [MongooseModule.forFeature([{ name: 'Users', schema: UserSchema }]), LegacyModule, EmailsModule],
	controllers: [UsersController],
	providers: [Logger, UsersService, UsersPersonalService, UsersAdminService],
	exports: [UsersService],
})
export class UsersModule {}
