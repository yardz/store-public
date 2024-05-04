import to from 'await-to-js';
import firebase from 'firebase/app';

export const hasAbilitie = async (uid: string, abilitie: string): Promise<boolean> => {
	const [error, has] = await to(firebase.database().ref(`abilities/${uid}/${abilitie}`).once('value'));
	if (!!error || !has) {
		return false;
	}
	return !!has.val();
};
