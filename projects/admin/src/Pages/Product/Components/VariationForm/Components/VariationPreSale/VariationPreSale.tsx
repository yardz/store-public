import React from 'react';

export const VariationPreSale: React.FC = () => {
	return null;
};

// import { Input, Stock } from 'Components';
// import { useField } from 'formik';
// interface Props {
// 	prefix: string;
// 	config: string;
// }

// export const VariationPreSale: React.FC<Props> = ({ prefix, config }) => {
// 	const [configField] = useField({ name: config });
// 	return (
// 		<>
// 			<div className="row">
// 				<div className="col">
// 					<h3 className="tile-title">Pré-Venda</h3>
// 				</div>
// 				<div className="col-lg-1">
// 					<Input.Toggle id={config} label="" name={config} large />
// 				</div>
// 			</div>
// 			<div className="row">
// 				<div className="col">
// 					<Stock name={`${prefix}.stock`} disabled={!configField.value} />
// 				</div>
// 			</div>
// 			<div className="row">
// 				<div className="col-lg-4">
// 					<Input.TextHorizontal
// 						type="date"
// 						label="Data inicial"
// 						placeholder="Data inicial"
// 						name={`${prefix}.start`}
// 						disabled={!configField.value}
// 					/>
// 				</div>
// 				<div className="col-lg-4">
// 					<Input.TextHorizontal
// 						type="date"
// 						label="Data final"
// 						placeholder="Data final"
// 						name={`${prefix}.end`}
// 						disabled={!configField.value}
// 					/>
// 				</div>
// 				<div className="col-lg-4">
// 					<Input.TextHorizontal type="number" label="Valor" placeholder="R$ 00,00" name={`${prefix}.price`} disabled={!configField.value} />
// 				</div>
// 			</div>
// 		</>
// 	);
// };
