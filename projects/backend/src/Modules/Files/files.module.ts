import { Module, Logger } from '@nestjs/common';

import { CloudinaryModule } from '../Cloudnary';

import { FilesController } from './files.controller';
import { FilesService } from './files.service';

@Module({
	imports: [CloudinaryModule],
	controllers: [FilesController],
	providers: [Logger, FilesService],
	exports: [FilesService],
})
export class FilesModule {}
