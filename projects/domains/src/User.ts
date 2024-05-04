import { Address } from './Address';

export interface UserAddress extends Address {
	_id: string;
	name: string;
	recipientName: string;
}

export interface PersonalData {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	document: string;
	birthday: number;
	sex?: 'male' | 'female';
	newsletter?: boolean;
}

export interface BodyMeasurements {
	openShoulders?: string;
	waistline?: string;
	collar?: string;
	bust?: string;
	hip?: string;
	sleeveLength?: string;
	chest?: string;
	crotchStrap?: string;
	shirtLength?: string;
}
export interface User {
	uid: string;
	personalData: PersonalData;
	note?: string;
}

export interface UserAdmin {
	uid: string;
	personalData: {
		email: string;
		document: string;
	};
	legacyId: number;
	createdAt: string;
	updatedAt: string;
}

export interface UserAdminListItem {
	uid: string;
	personalData: {
		email: string;
		firstName: string;
		lastName: string;
		document: string;
	};
}

export interface UserAdminFilter {
	email: string;
	document: string;
	uid: string;
}
