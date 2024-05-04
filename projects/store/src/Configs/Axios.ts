import axios from 'axios';
import firebase from './firebase';

export const setAxiosToken = async () => {
	const user = firebase.auth().currentUser;
	if (user) {
		const token = await user.getIdToken();
		axios.defaults.headers = {
			Authorization: `Bearer ${token}`,
		};
	}
};

export const clearAxiosToken = async () => {
	axios.defaults.headers = undefined;
};
