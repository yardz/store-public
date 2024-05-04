import { useEffect } from 'react';
import { useState } from '../useState';
import { Pagination } from '@lab77store/domain';

export const usePagination = (perPage: number): [Pagination, (page: number) => void] => {
	const [pagination, setPagination] = useState<Pagination>({ page: 1, perPage });
	const goToPage = (page: number) => {
		if (page >= 1) {
			setPagination({ ...pagination, page });
		}
	};

	useEffect(() => {
		if (pagination.perPage !== perPage) {
			setPagination({ page: 1, perPage });
		}
	}, [perPage, pagination]);

	return [pagination, goToPage];
};
