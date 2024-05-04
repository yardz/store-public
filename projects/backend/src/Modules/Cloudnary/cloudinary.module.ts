import { Module, Logger } from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';

@Module({
	providers: [Logger, CloudinaryService],
	exports: [CloudinaryService],
})
export class CloudinaryModule {}
