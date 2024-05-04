import { EnforceDocument, QueryWithHelpers } from 'mongoose';
import { Pagination } from '@lab77store/domain';

export const documentQueryPaginate = <T>(
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	documentQuery: QueryWithHelpers<Array<EnforceDocument<T, any>>, EnforceDocument<T, any>, any>,
	paginate: Pagination,
) => documentQuery.limit(paginate.perPage).skip((paginate.page - 1) * paginate.perPage);
