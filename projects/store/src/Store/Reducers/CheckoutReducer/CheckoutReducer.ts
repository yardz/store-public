/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@App/Store';

export interface CreditCard {
	method: 'credit card';
	cardNumber: string;
	holderName: string;
	expirationMonth: number;
	expirationYear: number;
	securityCode: string;
	installments: number;
}

interface Checkout {
	step: number;
	creditCard?: CreditCard;
}
const initialState: Checkout = {
	step: 1,
};

export const checkoutSlice = createSlice({
	name: 'checkout',
	initialState,
	reducers: {
		init: () => initialState,
		gotToStep: (state, action: PayloadAction<{ step: number }>) => {
			if (action.payload.step >= 1) {
				state.step = action.payload.step;
			}
		},
		setCreditCard: (state, action?: PayloadAction<{ creditCard: CreditCard }>) => {
			state.creditCard = action?.payload.creditCard;
		},
		finish: () => initialState,
	},
});

export const checkoutActions = { ...checkoutSlice.actions };
export const checkoutSelector = {
	step: (state: RootState) => state.checkout.step,
	creditCard: (state: RootState) => state.checkout.creditCard,
};
