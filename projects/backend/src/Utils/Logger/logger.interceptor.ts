import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
// import * as firebaseLogger from 'firebase-functions/lib/logger';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
	private logger: Logger;

	constructor() {
		this.logger = new Logger();
		this.logger.setContext('API Request');
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		return next.handle().pipe(
			tap(() =>
				this.logger.log({
					message: 'Request completed',
				}),
			),
		);
	}
}
