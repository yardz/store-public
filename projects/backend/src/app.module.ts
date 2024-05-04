import { Module, Logger } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import * as Modules from './Modules';

import { MongooseModule } from '@nestjs/mongoose';
import { SequelizeModule } from '@nestjs/sequelize';

import firebase from 'firebase-admin';
import { AppController } from './app.controller';

@Module({
	imports: [
		ConfigModule.forRoot({ envFilePath: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env' }),
		MongooseModule.forRoot(process.env.MONGO_CONNECTION_CONFIG || '', { useCreateIndex: true, poolSize: 4 }),
		SequelizeModule.forRoot({
			dialect: 'mysql',
			autoLoadModels: true,
			synchronize: false,
			define: {
				timestamps: false,
			},
			logging: false,
			...JSON.parse(process.env.MYSQL_CONNECTION_CONFIG || '{}'),
		}),
		...Object.values(Modules),
	],
	providers: [Logger],
	controllers: [AppController],
})
export class AppModule {
	onApplicationBootstrap() {
		const credential = process.env.LAB77_FIREBASE_ADMIN || '';
		if (credential) {
			firebase.initializeApp({
				credential: firebase.credential.cert(JSON.parse(credential)),
				databaseURL: 'https://store-lab77-default-rtdb.firebaseio.com',
			});
		} else {
			firebase.initializeApp({
				databaseURL: 'https://store-lab77-default-rtdb.firebaseio.com',
			});
		}
	}
}
