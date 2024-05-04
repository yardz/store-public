import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Logger } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Auth, Uid } from '@App/Utils/decorators';
import { AddressesService } from './addresses.service';

import * as ARGS from './addresses.args';

@ApiTags('Addresses')
@Controller('addresses')
export class AddressesController {
	constructor(private readonly logger: Logger, private readonly addressesService: AddressesService) {
		this.logger.setContext('UsersController');
	}

	@Auth()
	@Get('/')
	async getAdresses(@Uid() uid: string) {
		return this.addressesService.find({ uid });
	}

	@Auth()
	@Get('/:_id')
	async getAdress(@Param() { _id }: ARGS.ID, @Uid() uid: string) {
		const doc = await this.addressesService.findOne({ _id, uid });
		if (!doc) {
			throw new NotFoundException();
		}
		return doc;
	}

	@Auth()
	@Post('/')
	async createAdresses(@Body() { address }: ARGS.SaveAddress, @Uid() uid: string) {
		return this.addressesService.createAddress({ uid, address });
	}

	@Auth()
	@Put('/:_id')
	async updateAdresses(@Param() { _id }: ARGS.ID, @Body() { address }: ARGS.SaveAddress, @Uid() uid: string) {
		const doc = this.addressesService.update({ uid, address, _id });

		return doc;
	}

	@Auth()
	@Delete('/:_id')
	async deleteAdresses(@Param() { _id }: ARGS.ID, @Uid() uid: string) {
		return this.addressesService.delete({ uid, _id });
	}
}
