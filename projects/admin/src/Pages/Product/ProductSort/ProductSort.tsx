import React, { useState, useMemo, useEffect } from 'react';
import { PageTitle } from 'Components';
import { Column, useTable } from 'react-table';
import { ProductAdminSort } from '@lab77store/domain';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ProductSortRow, RowItem } from './ProductSortRow';
import classNames from 'classnames';
import update from 'immutability-helper';
import { getThumb, Notifications } from 'Utils';
import { productsService } from 'Services';
import { ProductSortFooter } from './ProductSortFooter';
import { ProductSortRangeForm } from './ProductSortRangeForm';

export const ProductSort: React.FC = () => {
	const initialRange = { start: 0, end: 100 };
	const [range, setRange] = useState(initialRange);
	const [dataTable, setDataTable] = useState<RowItem[]>([]);

	const columns: Column<ProductAdminSort>[] = useMemo(() => {
		return [
			{
				Header: 'Foto',
				accessor: 'image',
				Cell: ({ cell: { value } }) => getThumb(value),
			},
			{
				Header: 'Nome',
				accessor: 'name',
			},
			{
				Header: 'Ordem',
				accessor: 'order',
			},
		];
	}, []);

	useEffect(() => {
		productsService
			.getSortList(range)
			.then(products => {
				const rowItems: RowItem[] = products.map(i => ({ ...i, id: i._id }));
				setDataTable(rowItems);
			})
			.catch(() => {
				Notifications.error('Ocorreu um erro ao tentar carregar os produtos');
			});
	}, [range]);

	const getRowId = React.useCallback(row => {
		return row.id;
	}, []);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
		data: dataTable,
		columns,
		getRowId,
	});

	const moveRow = (dragIndex: number, hoverIndex: number) => {
		const dragRecord = dataTable[dragIndex];
		const updateList = update(dataTable, {
			$splice: [
				[dragIndex, 1],
				[hoverIndex, 0, dragRecord],
			],
		});

		setDataTable(updateList.map((i, index) => ({ ...i, order: index + range.start })));
	};

	return (
		<>
			<PageTitle title="Produtos" subtitle="Adicione e seus produtos" />
			<div className="row">
				<div className="col-md-12">
					<div className="tile">
						<div className="row">
							<div className="col">
								<h3 className="tile-title">Ordenar Produtos</h3>
							</div>
						</div>

						<div className="row">
							<div className="col">
								<ProductSortRangeForm range={range} setRange={setRange} />
							</div>
						</div>

						<DndProvider backend={HTML5Backend}>
							<table
								className={classNames({
									table: true,
									'table-striped': true,
									'table-bordered': true,
								})}
								{...getTableProps()}>
								<thead>
									{headerGroups.map(headerGroup => (
										<tr {...headerGroup.getHeaderGroupProps()}>
											<th />
											{headerGroup.headers.map(column => (
												<th {...column.getHeaderProps()}>{column.render('Header')}</th>
											))}
										</tr>
									))}
								</thead>
								<tbody {...getTableBodyProps()}>
									{rows.map((row, index) => {
										prepareRow(row);
										return <ProductSortRow index={index} row={row} moveRow={moveRow} {...row.getRowProps()} />;
									})}
								</tbody>
							</table>
						</DndProvider>
					</div>

					<ProductSortFooter items={dataTable} setRange={setRange} initialRange={initialRange} />
				</div>
			</div>
		</>
	);
};
