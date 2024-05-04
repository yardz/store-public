import React from 'react';
import { Input } from '../Input';

interface Props {
	name: string;
	disabled?: boolean;
}
export const Stock: React.FC<Props> = ({ name, disabled }) => {
	return (
		<div className="row">
			<div className="col-lg-4">
				<Input.TextHorizontal type="number" label="Qtd Disponível" name={`${name}.free`} id="free" required disabled={disabled} />
			</div>
			<div className="col-lg-4">
				<Input.TextHorizontal type="number" label="Qtd Utilizada" name={`${name}.locked`} id="stock.locked" disabled required />
			</div>
			<div className="col-lg-4">
				<Input.TextHorizontal type="number" label="Qtd Total" name={`${name}.total`} id="total" disabled required />
			</div>
		</div>
	);
};
