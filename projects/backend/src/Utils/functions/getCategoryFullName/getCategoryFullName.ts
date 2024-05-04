import { Category } from '@lab77store/domain';
import cloneDeep from 'lodash/cloneDeep';

interface Args {
	category: Category;
}

export const getCategoryFullName = ({ category }: Args): string => {
	if (!category.parents) return `/${category.name}`;
	const parents = cloneDeep(category.parents);
	parents.sort((a, b) => a.sort - b.sort);
	const prefix = parents.map(parent => parent.name).join('/');
	return `/${prefix}/${category.name}`;
};
