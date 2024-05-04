import { AttributeItemCart, CartItem } from '@lab77store/database';
import { Product, Variation } from '@lab77store/domain';

export const createCartItem = ({ variation, product }: { variation: Variation; product: Product }): CartItem => {
	const vartImage = variation.cart || product.cart;
	const attributes: { [key: string]: AttributeItemCart } = {};
	variation.attributes.forEach((attribute, index) => {
		const attributeItemCart = { name: attribute.name, value: attribute.option.label };
		attributes[`${index}`] = attributeItemCart;
	});
	return {
		ref: product.ref,
		name: product.name,
		productId: product._id,
		variationId: variation._id,
		price: product.price + variation.additionalPrice,
		attributes,
		quantity: 1,
		stock: variation.stock.total,
		image: vartImage,
	};
};
