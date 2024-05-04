export interface CategorySmartHint {
	CategoryId: string;
	CategoryParentId?: string;
	Name: string;
	Url: string;
	FullPath: string;
	Level: number;
}

export interface VariationSmartHint {
	NameId?: string;
	Name?: string;
	ValueId?: string;
	Value?: string;
}

export interface ProductSmartHint {
	ProductId: string;
	Mpn?: string;
	Sku?: string;
	Link: string;
	Title: string;
	Description?: string;
	ImageLink: string;
	AdicionalImageLink?: string[];
	Brand?: string;
	ProductType: string;
	Categories?: string[];
	Price: number;
	SalePrice?: number;
	BankSlipPrice?: number;
	Condition: 'new' | 'old';
	Availability: 'in stock' | 'out of stock';
	CreatedDate: string;
	ItemGroupId?: string;
	Installments?: {
		Months?: number;
		Amount?: number;
	};
	Variations?: VariationSmartHint[];
	Tags?: string[];
	// aditionalfeatures?: any;
}
