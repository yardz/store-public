import firebase from '@App/Configs/firebase';
import { authSelector } from '@App/Store/Reducers/AuthReducer';
import { errorLogger, updateStore } from '@App/Utils';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

export const useReduxCartEffect = () => {
	const uid = useSelector(authSelector.uid);
	const database = useRef<firebase.database.Reference | undefined>();

	useEffect(() => {
		if (uid) {
			if (!database.current) {
				database.current = firebase.database().ref(`carts/${uid}`);
			}
			updateStore(database.current).catch(errorLogger);
		} else {
			if (database.current) {
				database.current.off();
			}
			database.current = undefined;
		}
	}, [uid]);
};
