import { Category } from '@lab77store/domain';
export const initialValues: Category = {
	_id: '',
	parent: '',
	name: '',
	ref: '',
	sort: 0,
	publish: {
		desktop: false,
		mobile: false,
		store: false,
	},
	seo: {
		metaDescription: '',
		textSeo: '',
	},
	content: {
		slide01: '',
		text01: '',
		slide02: '',
		text02: '',
		slideFooter: '',
	},
	password: '',
};
