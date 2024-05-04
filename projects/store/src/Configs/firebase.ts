/* eslint-disable import/no-extraneous-dependencies */
// Por algum motivo o lint parou de reconhecer o firebase, então precisei colocar esse comando aqui
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/analytics';
// import 'firebase/performance'; // If you need it

const clientCredentials = JSON.parse(process.env.NEXT_PUBLIC_APP_FIREBASE || '');

if (!firebase.apps.length) {
	firebase.initializeApp(clientCredentials);
	// if (typeof window !== 'undefined') {
	// 	// Enable analytics. https://firebase.google.com/docs/analytics/get-started
	// 	if ('measurementId' in clientCredentials) {
	// 		firebase.analytics();
	// 		// firebase.performance();
	// 	}
	// }
}

export default firebase;
