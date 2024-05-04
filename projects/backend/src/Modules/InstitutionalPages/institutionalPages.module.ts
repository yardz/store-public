import { Module, Logger } from '@nestjs/common';
import { InstitutionalPagesService } from './institutionalPages.service';
import { InstitutionalPagesController } from './institutionalPages.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { InstitutionalPageSchema } from './institutionalPages.schema';

@Module({
	imports: [MongooseModule.forFeature([{ name: 'InstitutionalPages', schema: InstitutionalPageSchema }])],
	controllers: [InstitutionalPagesController],
	providers: [Logger, InstitutionalPagesService],
	exports: [InstitutionalPagesService],
})
export class InstitutionalPagesModule {}
