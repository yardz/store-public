import { IsActiveSmartHint } from './IsActiveSmartHint';

export const SmartHintCartItems = ({ cartItems }: { cartItems: number }) => {
	const isActive = IsActiveSmartHint();
	if (!isActive) return;
	window.SmartHint.Call('setProductCart', { empty: cartItems > 0 });
};
