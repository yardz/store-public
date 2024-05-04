import { Product } from '@lab77store/domain';
import { ObjectId } from 'mongodb';
import { CategorySmartHint, ProductSmartHint } from '../smartHint.types';

interface Args {
	categories: CategorySmartHint[];
	product: Product;
}

export const mapProduct = ({ categories, product }: Args): ProductSmartHint => {
	const listImages: string[] = [];
	product.photos.forEach((photo, index) => {
		if (index !== 0) {
			listImages.push(photo.desktop.file.url);
		}
	});
	const id = new ObjectId(product._id);

	const variations = product.variations.map(variation => ({
		NameId: variation._id,
	}));
	const variationCategories = categories.filter(category => product.categories.includes(category.CategoryId));

	return {
		ProductId: product._id,
		Link: `${process.env.LAB77_SITE_BASE_URL}/produto/${product.ref}`,
		Title: product.name,
		Description: product.content.description || '',
		ImageLink: product.photos[0].desktop.file.url,
		AdicionalImageLink: listImages,
		Brand: 'Lab77',
		ProductType: variationCategories[0]?.FullPath || 'Camisetas',
		Categories: variationCategories.map(category => category.FullPath),
		Price: product.oldPrice || product.price,
		SalePrice: product.price,
		Condition: 'new',
		Availability: product.variations.find(variation => variation.stock.free > 0) ? 'in stock' : 'out of stock',
		CreatedDate: id.getTimestamp().toISOString(),
		Variations: variations,
	};
};
