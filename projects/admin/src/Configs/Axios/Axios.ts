import axios from 'axios';
import * as firebase from 'firebase/app';

const baseUrl: string = process.env.REACT_APP_API || '';
const TIMEOUT = 60 * 1000;

export const setupAxios = () => {
	axios.defaults.timeout = TIMEOUT;
	axios.defaults.baseURL = baseUrl;

	firebase.auth().onAuthStateChanged(async user => {
		if (user) {
			const token = await user.getIdToken();
			axios.defaults.headers = {
				Authorization: `Bearer ${token}`,
			};
		}
	});
};
