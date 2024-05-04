import { IsBoolean, IsNotEmpty } from 'class-validator';
import { Publish as IPublish } from '@lab77store/domain';

export class Publish implements IPublish {
	@IsBoolean()
	@IsNotEmpty()
	mobile: boolean;

	@IsBoolean()
	@IsNotEmpty()
	desktop: boolean;

	@IsBoolean()
	@IsNotEmpty()
	store: boolean;
}
