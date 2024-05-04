import { setup, defaultClient, Contracts } from 'applicationinsights';

function telemetryStartup(token: string) {
	setup(token)
		.setAutoCollectRequests(true)
		.setAutoCollectPerformance(true, true)
		.setAutoCollectExceptions(true)
		.setAutoCollectHeartbeat(true)
		.setAutoCollectConsole(true)
		.setSendLiveMetrics(true)
		.start();

	defaultClient.addTelemetryProcessor((envelope, context) => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const httpRequest = context['http.ServerRequest'];
		const { baseData } = envelope.data;
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		if (httpRequest && Contracts.domainSupportsProperties(baseData)) {
			if (httpRequest.method === 'POST') {
				baseData.properties.bodyRequest = JSON.stringify(httpRequest.body);
			}
		}
		return true;
	});
}

export { telemetryStartup };
