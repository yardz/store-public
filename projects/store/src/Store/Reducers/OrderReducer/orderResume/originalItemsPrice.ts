interface Args {
	items: {
		quantity: number;
		price: number;
	};
}
export const originalItemsPrice = ({ items }: Args) => items.price;
