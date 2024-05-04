import React from 'react';
export const HighlightInformation: React.FC = () => {
	return null;
};

// import { MeasuresTable } from '@lab77store/database';
// import { Input } from 'Components';
// import { useSelectFieldOptions } from 'Hooks';
// interface Props {
// 	prefix: string;
// }

// export const HighlightInformation: React.FC<Props> = ({ prefix }) => {
// 	const measuresTableOptions = useSelectFieldOptions<MeasuresTable>('/measuresTable');

// 	return (
// 		<>
// 			<div className="row">
// 				<div className="col-lg-12">
// 					<Input.TextHorizontal
// 						label="Informações de destaque"
// 						placeholder="Informações de destaque"
// 						name={`${prefix}.hightlightText`}
// 						id={`${prefix}.hightlightText`}
// 					/>
// 				</div>
// 			</div>
// 			<div className="row">
// 				<div className="col-lg-12">
// 					<Input.SelectHorizontal
// 						label="Tabela de medidas"
// 						id={`${prefix}.measuresTable`}
// 						name={`${prefix}.measuresTable`}
// 						placeholder="Selecione uma tabela de medida"
// 						options={measuresTableOptions}
// 					/>
// 				</div>
// 			</div>
// 			<div className="row">
// 				<div className="col-lg-12">
// 					<Input.TextHorizontal label="Modelo" placeholder="Modelo" name={`${prefix}.modelText`} id={`${prefix}.modelText`} />
// 				</div>
// 			</div>
// 			<div className="row">
// 				<div className="col-lg-12">
// 					<Input.TextHorizontal
// 						label="Tipo de lavagem"
// 						placeholder="Tipo de lavagem"
// 						name={`${prefix}.washText`}
// 						id={`${prefix}.washText`}
// 					/>
// 				</div>
// 			</div>
// 		</>
// 	);
// };
