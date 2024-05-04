import React from 'react';
import { FormFields } from 'Components';
interface Props {
	prefix: string;
}

export const SaleInformation: React.FC<Props> = ({ prefix }) => {
	return (
		<>
			<div className="row">
				<div className="col-lg-6">
					<FormFields.Input.TextHorizontal type="number" label="Preço antigo" placeholder="Preço antigo" name={`${prefix}.oldPrice`} />
				</div>
				<div className="col-lg-6">
					<FormFields.Input.TextHorizontal type="number" label="Preço atual" placeholder="Preço atual" name={`${prefix}.price`} />
				</div>
			</div>
		</>
	);
};
