/* eslint-disable import/first */
/* eslint-disable @typescript-eslint/no-var-requires */
if (!process.env.IS_TS_NODE) {
	// eslint-disable-next-line global-require
	require('module-alias/register');
}

import { Express } from 'express';
import * as functions from 'firebase-functions';
import { getServer } from './server';
import firebase from 'firebase-admin';

const function_name = process.env.FUNCTION_NAME || process.env.FUNCTION_TARGET || process.env.K_SERVICE;

firebase.initializeApp();

const runtimeOpts: functions.RuntimeOptions = {
	timeoutSeconds: 60,
	memory: '256MB',
};
let server: Express;

if (!function_name || function_name === 'api') {
	exports.api = functions.runWith(runtimeOpts).https.onRequest((req, res) => {
		if (!server) {
			getServer()
				.then(init => {
					server = init.server;
					server(req, res);
				})
				.catch(e => {
					throw e;
				});
		} else {
			server(req, res);
		}
	});
}
