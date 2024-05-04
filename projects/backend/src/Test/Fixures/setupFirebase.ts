// import admin from 'firebase-admin';
import firebase from 'firebase/app';
import 'firebase/auth';

const clientCredentials = {
	apiKey: 'AIzaSyA7rp_VyuTtNdf40zqCBQ_7xUQ-M095zfg',
	authDomain: 'lab77-develop.firebaseapp.com',
	databaseURL: 'https://lab77-develop.firebaseio.com',
	projectId: 'lab77-develop',
	storageBucket: 'lab77-develop.appspot.com',
	messagingSenderId: '682502341213',
	appId: '1:682502341213:web:119044a85e09f273',
};

export const setupFirebase = () => {
	firebase.initializeApp(clientCredentials);
};

export const authFirebase = () => {
	const { user, password } = { user: 'wadge.motta@gmail.com', password: '123456' };
	return firebase.auth().signInWithEmailAndPassword(user, password);
};
