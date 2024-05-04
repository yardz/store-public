import { ProductListItem } from '@lab77store/domain';
import { dataLayer } from './dataLayer';

export const GoogleTagManagerViewItemsList = ({
	products,
	category,
}: {
	products: ProductListItem[];
	category: { name: string; _id: string };
}) => {
	if (products.length === 0) return;
	const impressions = products.map((product, index) => ({
		name: product.name,
		id: product._id,
		price: product.price,
		list: category.name,
		position: index,
	}));
	const event = {
		event: 'view_item_list',
		ecommerce: {
			currencyCode: 'BRL',
			impressions,
		},
	};

	dataLayer(event);
};
