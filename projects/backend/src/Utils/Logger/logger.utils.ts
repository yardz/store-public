/* eslint-disable max-lines */
import { NextFunction, Request, Response } from 'express';
import * as httpContext from 'express-http-context';
import * as expressWinston from 'express-winston';
import { v4 as uuidv4 } from 'uuid';
import { format, Logger } from 'winston';

function sanitizeHeaders(req: Request, propName: string) {
	if (propName === 'headers') {
		// The 'if-none-match' header can break logstash JSON format
		if ('if-none-match' in req.headers) req.headers['if-none-match'] = 'EXCLUDED';
		// The 'authorization' header has the plaintext jwt token, we should never log it
		if (req.headers.authorization) req.headers.authorization = 'Bearer [REDACTED]';
		// The 'cookie' header could contain jwt tokens
		if (req.headers.cookie) {
			const cookies = req.headers.cookie.split('; ');
			req.headers.cookie = cookies
				.map(cookie => {
					if (cookie.startsWith('AccessToken=')) {
						return 'AccessToken=REDACTED';
					}
					if (cookie.startsWith('RefreshToken=')) {
						return 'RefreshToken=REDACTED';
					}
					return cookie;
				})
				.join('; ');
		}
	}
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return (req as any)[propName];
}

export const httpContextMiddleware = httpContext.middleware;

export const requestIdHandler = (_: Request, __: Response, next: NextFunction) => {
	httpContext.set('requestId', uuidv4());
	next();
};

export const getRequestIdContext = () => {
	const requestId: string | undefined = httpContext.get('requestId');
	return requestId;
};

export const injectMeta = format(info => {
	info.requestId = getRequestIdContext();
	return info;
});

export function createExpressWinstonHandler(logger: Logger) {
	return expressWinston.logger({
		winstonInstance: logger,
		meta: true,
		metaField: 'express',
		msg: '{{req.method}} {{req.url}}',
		expressFormat: false,
		colorize: process.env.NODE_ENV === 'development',
		requestFilter: sanitizeHeaders,
		headerBlacklist: ['cookie'],
		ignoreRoute: () => false,
	});
}
