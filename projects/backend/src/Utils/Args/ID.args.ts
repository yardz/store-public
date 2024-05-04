import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsMongoId } from 'class-validator';

export class ID {
	@ApiProperty({
		description: '_id for resource',
	})
	@IsString()
	@IsMongoId()
	@IsNotEmpty()
	_id: string;
}
