import React from 'react';
import { Button } from 'Components';
import { productsService } from 'Services';
import { Notifications } from 'Utils';
import { RowItem } from './ProductSortRow';

interface Range {
	start: number;
	end: number;
}

interface Props {
	items: RowItem[];
	initialRange: Range;
	setRange: (range: Range) => void;
}

export const ProductSortFooter: React.FC<Props> = ({ items, initialRange, setRange }) => {
	return (
		<>
			<div className="tile">
				<div className="form-group row">
					<div className="col">
						<div className="text-right">
							<Button
								color="primary"
								label="Cancelar"
								type="button"
								outline
								onClick={() => {
									setRange(initialRange);
								}}
							/>
							&nbsp;&nbsp;&nbsp;
							<Button
								color="primary"
								label="Salvar ordenação"
								onClick={() => {
									productsService
										.saveProductOrderList(items.map(({ _id, order }) => ({ _id, order })))
										.then(() => {
											Notifications.success('Ordenação atualizada');
										})
										.catch(() => {
											Notifications.error('Ocorreu um erro ao tentar salvar a nova ordenação');
										});
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
