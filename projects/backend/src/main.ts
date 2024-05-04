/* eslint-disable import/first */
if (!process.env.IS_TS_NODE) {
	// eslint-disable-next-line global-require
	require('module-alias/register');
}
import throng from 'throng';

import { Server } from 'http';
import { getServer } from './server';

// desativando concorrencia
// eslint-disable-next-line no-constant-condition
if (process.env.NODE_ENV === 'production' && false) {
	// eslint-disable-next-line @typescript-eslint/no-floating-promises
	throng({
		master: () => {
			// eslint-disable-next-line no-console
			console.log('Started master.');
		},
		worker: async (workerId, disconnect) => {
			// eslint-disable-next-line no-console
			console.log(`Started worker ${workerId}`);

			let startedServer: Server;
			await getServer().then(init => {
				startedServer = init.server.listen(process.env.PORT || 3100);
			});

			const shutdown = () => {
				// eslint-disable-next-line no-console
				console.log(`Worker ${workerId} cleanup.`);
				if (startedServer) startedServer.close();
				disconnect();
			};

			process.once('SIGTERM', shutdown);
			process.once('SIGINT', shutdown);
		},
	});
} else {
	// eslint-disable-next-line @typescript-eslint/no-floating-promises
	getServer().then(init => {
		init.server.listen(process.env.PORT || 3100);
	});
}

// const { CategoryService } = require('./Modules/Categories/category.service');
// const NestContext = require('./context').default;
// const test = async () => {
// 	const nest = await NestContext();
// 	const service = nest.get(CategoryService);
// 	await service.updateDataStructure();
// };
// test().then();
