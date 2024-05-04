export type AttributeType = 'small' | 'tag' | 'tag-with-description';

export interface Attribute {
	_id: string;
	label: string; // "P/B" 			| #fff 		| pp
	value: string; // "Preto e Branco" 	| "Branco"	| Pequeno
	description?: string;
}
