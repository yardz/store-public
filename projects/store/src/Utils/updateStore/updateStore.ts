import { synchronizeStore } from './synchronizeStore';
import { mergeStore } from './mergeStore';
import firebase from '@App/Configs/firebase';

export const updateStore = async (cartRef: firebase.database.Reference) => {
	await mergeStore(cartRef);
	synchronizeStore(cartRef);
};
