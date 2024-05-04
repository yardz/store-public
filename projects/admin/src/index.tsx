import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import { Setup } from 'Configs';
import App from './App';
import { persistor, store } from './Store';

import reportWebVitals from './reportWebVitals';

const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE || '');
firebase.initializeApp(firebaseConfig);

// firebase.auth().onAuthStateChanged(async user => {
// 	if (user) {
// 		const token = await user.getIdToken();
// 	}
// });

Setup();

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<Router>
				<App />
			</Router>
		</PersistGate>
	</Provider>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
