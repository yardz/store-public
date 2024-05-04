import { Injectable, UnauthorizedException } from '@nestjs/common';
import firebase from 'firebase-admin';
import to from 'await-to-js';
import { AuthUser } from './auth.types';

@Injectable()
export class AuthService {
	async validateUser(token: string) {
		const [err, user] = await to(firebase.auth().verifyIdToken(token));
		if (err || !user) {
			throw new UnauthorizedException(err?.message);
		}
		const authUSer: AuthUser = {
			uid: user.uid,
		};
		return authUSer;
	}
}
