interface Args {
	delivery?: {
		price: number;
	};
}
export const deliveryPrice = ({ delivery }: Args) => delivery?.price || 0;
