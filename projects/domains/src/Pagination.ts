export interface Pagination {
	perPage: number;
	page: number;
}

export interface PaginateList<T> {
	items: T[];
	total: number;
	perPage: number;
	currentPage: number;
	lastPage: number;
	from: number;
	to: number;
}
