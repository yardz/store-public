import { PaginateList, Pagination } from '@lab77store/domain';

interface Args<ItemType> {
	paginate: Pagination;
	items: ItemType[];
	total: number;
}

export const createPaginationResponse = <T>({ items, total, paginate }: Args<T>): PaginateList<T> => {
	const skiped = (paginate.page - 1) * paginate.perPage;
	const add = skiped === 0 && total === 0 ? 0 : 1;
	let from = skiped > total ? total : skiped;
	from += add;
	const to = from + items.length;
	const lastPage = Math.max(1, Math.ceil(total / paginate.perPage));
	return { items, total, perPage: paginate.perPage, currentPage: paginate.page, lastPage, from, to };
};
