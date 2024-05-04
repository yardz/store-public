import { VariationAttribute } from './Variation';

export interface RssVariation {
	_id: string;
	price: number;
	attributes: VariationAttribute[];
}

export interface RssProduct {
	_id: string;
	name: string;
	ref: string;
	description: string;
	availability: boolean;
	oldPrice?: number;
	price: number;
	image: string;
	photos: string[];
	createdAt: number;
	updatedAt: number;
	variations: RssVariation[];
}

export interface FacebookCatalogProduct {
	variationId: string;
	productId: string;
	name: string;
	ref: string;
	description: string;
	availability: boolean;
	oldPrice?: number;
	price: number;
	image: string;
	photos: string[];
	color?: string;
	size?: string;
}

export interface RssFacebookCatalog {
	products: FacebookCatalogProduct[];
}

export interface GoogleCatalogProduct {
	productId: string;
	name: string;
	ref: string;
	description: string;
	image: string;
	availability: boolean;
	price: number;
	color?: string[];
	size?: string[];
}

export interface RssGoogleCatalog {
	products: GoogleCatalogProduct[];
}
