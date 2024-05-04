import { Category } from '@lab77store/domain';

type CatalogStyle = 'default' | 'male' | 'female';
interface Args {
	category: Category;
}
export const getCatalogStyle = ({ category }: Args): CatalogStyle => {
	if (category.ref === 'masculino') return 'male';
	if (category.ref === 'feminino') return 'female';
	if (!category.parents) return 'default';
	const parentsRef = category.parents.map(c => c.ref);
	if (parentsRef.includes('masculino')) return 'male';
	if (parentsRef.includes('feminino')) return 'female';
	return 'default';
};
