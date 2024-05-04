import { getCategoryFullName } from '@Utils/functions/getCategoryFullName';
import { Category } from '@lab77store/domain';
import { CategorySmartHint } from '../smartHint.types';
import { getCategoryLevel } from './getCategoryLevel';

interface Args {
	category: Category;
	categories: Category[];
}

export const mapCategory = ({ categories, category }: Args): CategorySmartHint => {
	const fullName = getCategoryFullName({ category });
	const level = getCategoryLevel({ category, categories });
	const categorySmartHint: CategorySmartHint = {
		CategoryId: category._id,
		CategoryParentId: category.parent,
		Name: category.name,
		Url: `${process.env.LAB77_SITE_BASE_URL}/categoria/${category.ref}`,
		FullPath: fullName,
		Level: level,
	};
	return categorySmartHint;
};
