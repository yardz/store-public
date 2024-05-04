import React from 'react';

import { map } from 'lodash';
import { Filter } from 'Hooks';

type Item = string | number | null | undefined | JSX.Element;

interface Props {
	filter: { [id: string]: Filter };
	// tslint:disable-next-line: no-any
	items: { [id: string]: any };
	children: (data: Item[][], filter: Item[]) => JSX.Element;
}

export const DataFilter: React.FC<Props> = ({ filter, items, children }) => {
	const DataFiltered: Object[] = map(items, (item, key) => {
		return {
			...item,
		};
	}).filter(item =>
		Object.entries(filter).every(([filterProp, filterValue]) => {
			const value = item[filterProp].trim().toLowerCase();
			const queryFilter = filterValue.value.trim().toLowerCase();
			return value.indexOf(queryFilter) > -1;
		}),
	);

	const newData: Item[][] = map(DataFiltered, item => Object.values(item));
	const fields = Object.values(filter).map(filterItem => (!!filterItem ? filterItem.field : null));

	return <>{children(newData, fields)}</>;
};
