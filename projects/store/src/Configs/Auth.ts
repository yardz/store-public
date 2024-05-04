import firebase from './firebase';
import { store } from '@App/Store';
import { authActions } from '@App/Store/Reducers/AuthReducer';
import { getCurrentUser } from '@App/Services';
import { clearAxiosToken, setAxiosToken } from './Axios';
import { errorLogger } from '@App/Utils/logger';
import { ApplicationHooksLogin } from '@App/Plugins/ApplicationHooks/ApplicationHooksLogin';
import { isEmpty } from 'lodash';

let renewToken: NodeJS.Timeout | undefined;
const updateAuth = async (firebaseUser: firebase.User | null) => {
	// let analytics: firebase.analytics.Analytics | undefined;
	if (renewToken) clearInterval(renewToken);
	if (typeof window !== 'undefined') {
		// analytics = firebase.analytics();
	}
	if (!firebaseUser) {
		// Implamentar aqui as configs do analytics
		// firebase.analytics().setUserProperties({ uid: '', email: '' });
		await clearAxiosToken();
		store.dispatch(authActions.setUser(null));
	} else {
		if (typeof window !== 'undefined') {
			renewToken = setInterval(() => {
				setAxiosToken().catch(errorLogger);
			}, 5 * 60 * 1000);
		}

		// Implamentar aqui as configs do analytics
		// firebase.analytics().setUserProperties({ uid: user.uid, email: user.email });
		await setAxiosToken();
		const user = await getCurrentUser();
		if (!isEmpty(user)) {
			await ApplicationHooksLogin({ user });
			store.dispatch(authActions.setUser({ user }));
		}
	}
};

export const AuthConfig = () => {
	firebase.auth().onAuthStateChanged(user => {
		updateAuth(user).then().catch(errorLogger);
	});
};
