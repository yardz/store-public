import { Category, ParentCategory } from '@lab77store/domain';
import { mapperCategoryToParentCategory } from './mapperCategoryToParentCategory';

interface Args {
	category: Category;
	categories: Category[];
}
export const getParentsList = ({ category, categories }: Args): ParentCategory[] | undefined => {
	if (!category.parent) return;
	const parent = categories.find(c => c._id === category.parent);
	if (!parent) return;
	const list = !!parent.parents && parent.parents.length ? parent.parents : getParentsList({ category: parent, categories });
	const parentsList = list || [];
	const parents: ParentCategory[] = [...parentsList, mapperCategoryToParentCategory({ category: parent })].map((p, sort) => ({
		...p,
		sort,
	}));

	return parents;
};
