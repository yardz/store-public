import { Category } from '@lab77store/domain';
import { uniq } from 'lodash';

interface Args {
	categoriesIdList: string[];
	categories: Category[];
}

export const getChildren = ({ categoriesIdList, categories }: Args): string[] => {
	const children = categories.filter(c => categoriesIdList.includes(c.parent || '')).map(c => c._id);
	const list = uniq([...categoriesIdList, ...children]);
	if (list.length === categoriesIdList.length) {
		return categoriesIdList;
	}
	return getChildren({ categoriesIdList: list, categories });
};
