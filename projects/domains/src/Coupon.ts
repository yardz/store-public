import { Stock } from './Stock';

export interface Coupon {
	code: string;
	value?: number;
	percent?: number;
	shipping: 'free' | 'normal';
	stock: Stock;
	active: boolean;
}
