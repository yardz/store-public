import { OrderItem, Product, Variation } from '@lab77store/domain';
import { flatten } from 'lodash';
import NP from 'number-precision';

interface Args {
	cartItems: { product: Product; variation: Variation; quantity: number }[];
}

export const mapCartItemsToOrderItems = ({ cartItems }: Args): OrderItem[] => {
	// isso pq na ordem cada item vira um "OrderItem". Então caso o usuário compre duas camisas iguais, teremos dois "OrderItem" dentro da compra
	const itemsList = flatten(cartItems.map(({ quantity, ...i }) => Array(quantity).fill(i)));
	const orderItems: OrderItem[] = itemsList.map(({ product, variation }) => {
		const originalPrice = NP.plus(product.price, variation.additionalPrice);
		return {
			productId: product._id.toString(),
			variationId: variation._id.toString(),
			name: product.name,
			originalPrice,
			price: originalPrice,
			attributes: variation.attributes,
			photo: variation.cart || product.cart,
		};
	});

	return orderItems;
};
