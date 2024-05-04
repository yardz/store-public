import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ProductAdminSort } from '@lab77store/domain';
import { Row } from 'react-table';
import classNames from 'classnames';

const DND_ITEM_TYPE = 'row';

export interface RowItem extends ProductAdminSort {
	id: string;
}

interface Props extends React.HTMLAttributes<HTMLTableRowElement> {
	index: number;
	row: Row<RowItem>;
	moveRow: (dragIndex: number, hoverIndex: number) => void;
}
export const ProductSortRow: React.FC<Props> = ({ row, index, moveRow, ...rowsProps }) => {
	const dropRef = React.useRef<HTMLTableRowElement>(null);
	const dragRef = React.useRef<HTMLTableDataCellElement>(null);

	const [, drop] = useDrop({
		accept: DND_ITEM_TYPE,
		hover(item: { index: number; type: string }, monitor) {
			if (!dropRef.current) {
				return;
			}
			const dragIndex = item.index;
			const hoverIndex = index;
			if (dragIndex === hoverIndex) {
				return;
			}
			const hoverBoundingRect = dropRef.current.getBoundingClientRect();
			const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
			const clientOffset = monitor.getClientOffset();
			if (!clientOffset) {
				return;
			}
			const hoverClientY = clientOffset.y - hoverBoundingRect.top;
			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return;
			}
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return;
			}
			moveRow(dragIndex, hoverIndex);
			item.index = hoverIndex;
		},
	});

	const [{ isDragging }, drag, preview] = useDrag({
		type: DND_ITEM_TYPE,
		item: { type: DND_ITEM_TYPE, index },
		collect: monitor => ({
			isDragging: monitor.isDragging(),
		}),
	});

	const opacity = isDragging ? 0 : 1;

	preview(drop(dropRef));
	drag(dragRef);

	return (
		<tr
			{...rowsProps}
			ref={dropRef}
			className={classNames(rowsProps.className, { 'table-warning': !row.original.active })}
			style={{ opacity }}>
			<td ref={dragRef}>
				<i className="fa fa-sort" aria-hidden="true" />
			</td>
			{row.cells.map(cell => {
				const style = cell.column.id === 'image' ? { width: 124 } : undefined;
				return (
					<td {...cell.getCellProps()} style={style}>
						{cell.render('Cell')}
					</td>
				);
			})}
		</tr>
	);
};
