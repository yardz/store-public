/* eslint-disable max-lines */
import { CustumerLegacyService } from '@Modules/Legacy/custumer.legacy.service';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import to from 'await-to-js';
import firebase from 'firebase-admin';
import { chunk } from 'lodash';
import { Model } from 'mongoose';
import { generate } from 'randomstring';
import { UserDocument } from '@Modules/Users/users.schema';
import { Op } from 'sequelize';

@Injectable()
export class CustumersImportationService {
	constructor(
		@InjectModel('Users') private usersModel: Model<UserDocument>,
		private readonly custumerLegacyService: CustumerLegacyService,
	) {}

	private async saveUsers(
		users: {
			legacyId: number;
			uid: string;
			email: string;
			document: string;
			passwordHash: Buffer;
		}[],
	) {
		const response = await firebase.auth().importUsers(
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			users.map(({ legacyId, ...u }) => u),
			{
				hash: {
					algorithm: 'BCRYPT',
				},
			},
		);
		const errosIndex = response.errors.map(e => e.index);
		const savedUsers: { uid: string; legacyId: number; personalData: { email: string; document: string } }[] = [];
		for (const index in users) {
			if (!errosIndex.includes(Number(index))) {
				savedUsers.push({
					uid: users[index].uid,
					legacyId: users[index].legacyId,
					personalData: { email: users[index].email, document: users[index].document },
				});
			}
		}
		return { response, savedUsers };
	}

	/*
	 * O processo acontece em paralelo tornando muito mais rapido a importação de todos os clientes.
	 */
	async importCustumers() {
		const usersMongoDb = await this.usersModel.find().select('legacyId');
		const existingUsers = usersMongoDb.map(u => u.legacyId);
		const limit = 100000;
		const allUsers = (
			await this.custumerLegacyService.findAll(
				{
					id: {
						[Op.notIn]: existingUsers,
					},
				},
				limit,
			)
		).map(u => ({
			legacyId: u.id,
			uid: generate(28), // gera um uid para o usuário, parecido com o nativo do firebase
			email: u.email.trim(),
			document: u.cpf.trim(),
			passwordHash: Buffer.from(u.password),
		}));

		const chunkUsers = chunk(allUsers, 1000);

		const result = await Promise.all(chunkUsers.map(list => this.saveUsers(list)));
		let users: {
			uid: string;
			legacyId: number;
		}[] = [];
		result.forEach(r => {
			users = [...users, ...r.savedUsers];
		});
		await this.usersModel.insertMany(users);
		return result.map(r => r.response);
	}

	async updatePersonalData() {
		const usersMongoDb = await this.usersModel.find();

		const chunkUsers = chunk(usersMongoDb, 1000);
		let count = 0;
		for (const users of chunkUsers) {
			const promises = users
				.map(async user => {
					const userLegacy = await this.custumerLegacyService.findOne({ id: user.legacyId });
					if (!userLegacy) return;
					return this.usersModel.updateOne(
						{ legacyId: user.legacyId },
						{ personalData: { email: userLegacy.email, document: userLegacy.cpf } },
						{ upsert: false },
					);
				})
				.filter(u => !!u);
			// eslint-disable-next-line no-await-in-loop
			await Promise.all(promises);
			count += users.length;
		}

		return count;
	}

	/**
	 * Método implementado para remover todos os usuários do firebase, o processo não acontece em paralelo,
	 * por este motivo pode demorar um pouco(+- 1min) porque cada "pageToken" possui 1000 custumers.
	 * Quando esse processo acontece em paralelo, ocorre um problemas de "Exceeded quota".
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	async removeAllCustumers(nextPageToken?: any): Promise<string> {
		return firebase
			.auth()
			.listUsers(1000, nextPageToken)
			.then(async listUsersResult => {
				const allUsersUID = listUsersResult.users.map(user => user.uid);
				if (listUsersResult.pageToken) {
					await to(firebase.auth().deleteUsers(allUsersUID));
					await this.removeAllCustumers(listUsersResult.pageToken);

					return 'In Process';
				}
				await to(firebase.auth().deleteUsers(allUsersUID));

				return 'Finished Process';
			})
			.then(() => 'Os dados foram removidos!!');
	}

	async resetAllCustumersPassword(): Promise<string> {
		await this.removeAllCustumers();
		const usersMongoDb = await this.usersModel.find();
		const existingUsers = usersMongoDb.map(u => u.legacyId);
		const limit = 100000;
		const allUsers = (
			await this.custumerLegacyService.findAll(
				{
					id: {
						[Op.in]: existingUsers,
					},
				},
				limit,
			)
		).map(u => ({
			legacyId: u.id,
			uid: usersMongoDb.find(m => m.legacyId === u.id)?.uid || generate(28), // gera um uid para o usuário, parecido com o nativo do firebase
			email: u.email.trim(),
			document: u.cpf.trim(),
			passwordHash: Buffer.from(u.password),
		}));

		const chunkUsers = chunk(allUsers, 1000);

		await Promise.all(chunkUsers.map(list => this.saveUsers(list)));
		return 'done!';
	}
}
