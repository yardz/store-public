import React from 'react';

// import { Input, OptionsList } from 'Components';
import * as Components from './Components';
interface Props {}

export const ProductInfo: React.FC<Props> = () => {
	return (
		<div className="tile">
			<div className="row">
				<div className="col">
					<h3 className="tile-title">Cadastro</h3>
				</div>
			</div>

			<Components.PrimaryInformation />

			{/* <hr />
			<Components.HighlightInformation prefix={`${prefix}.productHighlights`} /> */}

			{/* <hr />
			<Components.WeightAndDimension prefix={`${prefix}.configs`} /> */}

			{/* <hr />
			<div className="row">
				<div className="col-lg-3">
					<Input.TextHorizontal
						type="number"
						label="Tempo de produção"
						placeholder="Tempo de produção"
						name={`${prefix}.configs.productionTime`}
					/>
				</div>
				<div className="col-lg" />
			</div>
			<Components.SaleInformation prefix={`${prefix}.productInfo`} /> */}

			{/* <hr />
			<Components.Flag prefix={`${prefix}.productHighlights`} /> */}
		</div>
	);
};
