import { Module, Logger, Global } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { HttpStrategy } from './http.strategy';

@Global()
@Module({
	imports: [
		PassportModule.register({
			defaultStrategy: 'bearer',
		}),
	],
	providers: [Logger, AuthService, HttpStrategy],
})
export class AuthModule {}
