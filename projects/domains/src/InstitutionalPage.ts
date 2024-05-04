import { Seo } from './Seo';

export interface InstitutionalPage {
	_id: string;
	name: string;
	ref: string;
	seo?: Seo;
	content?: {
		text01?: string;
		slide01?: string;
		text02?: string;
		slide02?: string;
		text03?: string;
		slide03?: string;
	};
}
