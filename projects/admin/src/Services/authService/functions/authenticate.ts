import firebase from 'firebase/app';

export const authenticate = async (login: string, passwod: string, persistence?: boolean) => {
	return firebase.auth().signInWithEmailAndPassword(login, passwod);
};
