import firebase from 'firebase/app';
import { Permissions } from '@lab77store/database';
import { authService } from 'Services/authService';
import { store } from 'Store';
import { authActions } from 'Store/AuthReducer';
import { Notifications } from 'Utils';
import to from 'await-to-js';

let employeesRef: firebase.database.Reference | null = null;
let permissionsRef: firebase.database.Reference | null = null;

export const AuthConfig = () => {
	firebase.auth().onAuthStateChanged(user => {
		if (!!employeesRef) {
			employeesRef.off();
			employeesRef = null;
		}
		if (!!permissionsRef) {
			permissionsRef.off();
			permissionsRef = null;
		}
		if (!user) {
			store.dispatch(authActions.logout());
		} else {
			employeesRef = firebase.database().ref(`/employees/list/${user.uid}`);
			employeesRef.on('value', async snapShot => {
				const [err, current] = await to(authService.getCurrentUser());
				const authorization: boolean = snapShot.val();
				if (!authorization || err || !current) {
					Notifications.error('Usuário não autorizado');
					return firebase.auth().signOut();
				}

				store.dispatch(authActions.setUser({ email: current.personalData.email, uid: current.uid, user: current }));
			});
			permissionsRef = firebase.database().ref(`/employees/abilities/${user.uid}`);
			permissionsRef.on('value', snapShot => {
				const permissions: Permissions = snapShot.val();
				store.dispatch(authActions.setPermissions({ permissions }));
			});
		}
	});
};
