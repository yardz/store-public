import { Category } from '@lab77store/domain';

interface Args {
	category: Category;
	categories: Category[];
	level?: number;
}

export const getCategoryLevel = ({ category, categories, level = 0 }: Args): number => {
	if (!category.parent) return level;
	const parent = categories.find(c => c._id === category.parent);
	if (!parent) return level;
	return getCategoryLevel({ category: parent, categories, level: level + 1 });
};
