import { Reflector } from '@nestjs/core';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import firebase from 'firebase-admin';

import { AuthUser } from '@Modules/Auth/auth.types';

@Injectable()
export class RolesGuard implements CanActivate {
	constructor(private reflector: Reflector) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const roles = this.reflector.get<string[]>('roles', context.getHandler());
		if (!roles || roles.length === 0) {
			return true;
		}
		const request = context.switchToHttp().getRequest();
		// eslint-disable-next-line prefer-destructuring
		const user: AuthUser = request.user;
		const permissions = (await firebase.database().ref(`/employees/abilities/${user.uid}`).once('value')).val();

		for (const role of roles) {
			const [model, ability] = role.split('.');
			if (permissions?.[model]?.[ability]) return true;
		}
		return false;
	}
}
