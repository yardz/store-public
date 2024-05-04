import { ParentCategory, Category } from '@lab77store/domain';

export const mapperCategoryToParentCategory = ({ category }: { category: Category }): ParentCategory => ({
	_id: category._id,
	name: category.name,
	ref: category.ref,
	sort: 0,
});
