import firebase from '@App/Configs/firebase';
import to from 'await-to-js';
import axios from 'axios';
import { cpf } from 'cpf-cnpj-validator';

export const authUser = async ({ user, password }: { user: string; password: string }) => {
	let userAuth: string;
	if (cpf.isValid(user)) {
		const [, requset] = await to(
			axios.post<{ email: string }>('/users/auth-document', { document: cpf.format(user) }),
		);
		userAuth = requset?.data?.email || '';
	} else {
		userAuth = user;
	}
	await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
	const [err] = await to(firebase.auth().signInWithEmailAndPassword(userAuth, password));
	if (err) {
		throw err;
	}
};
