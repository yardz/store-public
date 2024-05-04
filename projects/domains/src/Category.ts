import { Publish } from './Publish';
import { Seo } from './Seo';

interface CategoryContent {
	slide01?: string;
	text01?: string;
	slide02?: string;
	text02?: string;
	slideFooter?: string;
}

export interface ParentCategory {
	_id: string;
	name: string;
	ref: string;
	sort: number;
}

export interface Category {
	_id: string;
	name: string;
	sort: number;
	ref: string;
	publish: Publish;
	seo?: Seo;
	content?: CategoryContent;
	parent?: string;
	parents?: ParentCategory[];
	password?: string;
}
