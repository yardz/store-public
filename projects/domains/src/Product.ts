import { Variation } from './Variation';
import { ImageBothRequired, File } from './Image';
import { Attribute, AttributeType } from './Attribute';
import { Seo } from './Seo';

interface PreSale {
	btnPreSale?: string;
	textPreSale?: string;
	additionalDaysDelivery: number;
	price: number;
}

export interface ProductAttributes {
	_id: string;
	name: string;
	type: AttributeType;
	options: Attribute[];
}

export type ProductHintIcons = 'model' | 'featured' | 'wash' | 'personalize';

export interface ProductHint {
	icon: ProductHintIcons;
	hint: string;
}
export interface Product {
	_id: string;
	ref: string;
	name: string;

	content: {
		description?: string;
		hints?: ProductHint[];
		measuresTable: ImageBothRequired;
		sustainability?: string;
	};

	seo?: Seo;

	oldPrice?: number;
	price: number;

	options: ProductAttributes[];

	photos: ImageBothRequired[];
	cart: ImageBothRequired;

	categories: string[];
	variations: Variation[];

	preSale?: PreSale;
}

interface ProductListItemImage {
	cover: ImageBothRequired;
	hover?: ImageBothRequired;
}

export interface ProductCatalogImages {
	default: ProductListItemImage;
	male?: ProductListItemImage;
	female?: ProductListItemImage;
}
export interface ProductListItem {
	_id: string;
	ref: string;
	name: string;

	oldPrice?: number;
	price: number;

	flags: string[];

	catalogImages: ProductCatalogImages;
}
export interface ProductAdmin {
	_id: string;
	name: string;
	ref: string;
	order: number;
	categories: string[];
	active: boolean;
	variations: {
		_id: string;
	}[];
	catalogImages: ProductCatalogImages;
}

export interface ProductAdminSort {
	_id: string;
	name: string;
	order: number;
	active: boolean;
	image: ImageBothRequired;
}

export interface ProductAdminFilter {
	name?: string;
	ref?: string;
	order?: number;
	active?: boolean;
}
