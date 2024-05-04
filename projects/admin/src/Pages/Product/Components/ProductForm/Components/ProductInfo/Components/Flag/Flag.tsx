import React from 'react';
export const Flag: React.FC = () => {
	return null;
};

// import { Flag as Flags } from '@lab77store/database';
// import { Input } from 'Components';
// import React from 'react';
// import { useSelectFieldOptions } from 'Hooks';

// interface Props {
// 	prefix: string;
// }

// export const Flag: React.FC<Props> = ({ prefix }) => {
// 	const flagOptions = useSelectFieldOptions<Flags>('/flags');

// 	return (
// 		<>
// 			<div className="row">
// 				<div className="col-lg-12">
// 					<Input.SelectHorizontal
// 						label="Bandeirinha"
// 						name={`${prefix}.flag`}
// 						placeholder="Selecione uma banderinha"
// 						options={flagOptions}
// 					/>
// 				</div>
// 			</div>
// 			<div className="row">
// 				<div className="col-lg-12">
// 					<Input.TextHorizontal label="Label do botão" placeholder="Insira o texto do botão" name={`${prefix}.buttonLabel`} />
// 				</div>
// 			</div>
// 			<div className="row">
// 				<div className="col-lg-12">
// 					<Input.TextHorizontal
// 						label="Frase do botão"
// 						placeholder="Insira a frase que será exibida abaixo do botão"
// 						name={`${prefix}.buttonText`}
// 					/>
// 				</div>
// 			</div>
// 		</>
// 	);
// };
