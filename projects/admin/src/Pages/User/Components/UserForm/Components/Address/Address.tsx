import React from 'react';
export const BoxCustomFields: React.FC = () => {
	return null;
};

// import { Input, Button } from 'Components';

// import { states } from 'Utils/states';
// import { Address as IAddress } from '@lab77store/database';
// import { map, cloneDeep } from 'lodash';
// import firebase from 'firebase/app';

// import { UpdateCep } from '../UpdateCep';
// import { FirebaseArray } from 'Types';

// interface Props {
// 	values?: FirebaseArray<IAddress>;
// 	// eslint-disable-next-line
// 	// tslint:disable-next-line: no-any
// 	setField: (field: string, value: any) => void;
// }

// const listFieldName = (name: string) => {
// 	return {
// 		nameZipCode: `adresses.${name}.zipCode`,
// 		nameStreet: `adresses.${name}.street`,
// 		nameNumber: `adresses.${name}.number`,
// 		nameComplement: `adresses.${name}.complement`,
// 		nameNeighborhood: `adresses.${name}.neighborhood`,
// 		nameState: `adresses.${name}.state`,
// 		nameCity: `adresses.${name}.city`,
// 	};
// };

// interface BoxCustomFieldsProps {
// 	name: string;
// 	options: { label: string; value: string }[];
// 	// tslint:disable-next-line: no-any
// 	setField: (field: string, value: any) => void;
// 	values?: FirebaseArray<IAddress>;
// }

// const BoxCustomFields: React.FC<BoxCustomFieldsProps> = ({ name, values, options, setField }) => {
// 	const { nameZipCode, nameStreet, nameNumber, nameComplement, nameNeighborhood, nameState, nameCity } = listFieldName(name);

// 	const listAddress = cloneDeep(values || {});

// 	return (
// 		<div className="col-lg-12">
// 			<UpdateCep
// 				zipCode={listAddress[name].zipCode}
// 				change={setField}
// 				listFieldName={{
// 					state: nameState,
// 					city: nameCity,
// 					neighborhood: nameNeighborhood,
// 					street: nameStreet,
// 				}}
// 			/>
// 			<div className="row">
// 				<div className="col-lg-12 text-right">
// 					<button
// 						className="btn btn-danger"
// 						onClick={() => {
// 							if (values) {
// 								const list = cloneDeep(values);
// 								delete list[name];
// 								setField('adresses', list);
// 							}
// 						}}>
// 						<i className="fa fa-trash" />
// 					</button>
// 				</div>
// 			</div>
// 			<div className="row">
// 				<div className="col-lg-3">
// 					<Input.TextHorizontal label="CEP" placeholder="12345-678" name={nameZipCode} id={nameZipCode} mask="99999-999" />
// 				</div>
// 				<div className="col-lg-9" />
// 			</div>
// 			<div className="row">
// 				<div className="col-lg-6">
// 					<Input.TextHorizontal label="Endereço" placeholder="rua, avenida, vila etc." name={nameStreet} id={nameStreet} />
// 				</div>
// 				<div className="col-lg-2">
// 					<Input.TextHorizontal label="Número" name={nameNumber} id={nameNumber} />
// 				</div>
// 				<div className="col-lg-4">
// 					<Input.TextHorizontal label="Complemento" placeholder="rua, avenida, vila etc." name={nameComplement} id={nameComplement} />
// 				</div>
// 			</div>
// 			<div className="row">
// 				<div className="col-lg-6">
// 					<Input.TextHorizontal label="Bairro" placeholder="Bairro" name={nameNeighborhood} id={nameNeighborhood} />
// 				</div>
// 				<div className="col-lg-3">
// 					<Input.TextHorizontal label="Cidade" placeholder="Cidade" name={nameCity} id={nameCity} />
// 				</div>
// 				<div className="col-lg-3">
// 					<Input.SelectHorizontal
// 						id={nameState}
// 						label="Estado"
// 						name={nameState}
// 						options={[{ label: 'Selecione um estado', value: '' }, ...options]}
// 					/>
// 				</div>
// 			</div>
// 			<hr />
// 		</div>
// 	);
// };

// export const Address: React.FC<Props> = ({ setField, values }) => {
// 	const stateOptions = states.map(option => {
// 		return { value: option.sigla, label: option.name };
// 	});

// 	return (
// 		<div className="tile">
// 			<div className="row">
// 				<div className="col-lg-6">
// 					<h3 className="tile-title">Endereços</h3>
// 				</div>
// 				<div className="col-lg-6 text-right">
// 					<Button
// 						label="Adicionar mais endereço"
// 						type="button"
// 						icon={<i className="fa fa-plus" aria-hidden="true" />}
// 						color="primary"
// 						onClick={() => {
// 							const key =
// 								firebase
// 									.database()
// 									.ref('/users')
// 									.push().key || `${Object.values(values || {}).length}`;
// 							const listAddress = cloneDeep(values || {});
// 							listAddress[key] = {
// 								zipCode: '',
// 								country: '',
// 								state: '',
// 								city: '',
// 								neighborhood: '',
// 								street: '',
// 								complement: '',
// 								number: '',
// 							};

// 							setField('adresses', listAddress);
// 						}}
// 					/>
// 				</div>
// 			</div>
// 			<hr />
// 			<div className="row">
// 				{values &&
// 					map(values, (address, key) => (
// 						<BoxCustomFields key={key} name={key} options={stateOptions} setField={setField} values={values} />
// 					))}
// 			</div>
// 		</div>
// 	);
// tslint:disable-next-line: max-file-line-count
// };
