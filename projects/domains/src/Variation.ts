import { Attribute, AttributeType } from './Attribute';
import { ImageBothRequired } from './Image';
import { Stock } from './Stock';

export interface VariationAttribute {
	_id: string;
	name: string;
	type: AttributeType;
	option: Attribute;
}

export interface Variation {
	_id: string;
	name: string;
	attributes: VariationAttribute[];
	additionalPrice: number;
	cart?: ImageBothRequired;
	stock: Stock;
}
