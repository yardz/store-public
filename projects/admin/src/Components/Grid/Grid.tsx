import React from 'react';
import { Table, Modal, FormFields } from 'Components';
import { useState } from 'Hooks';
import { cloneDeep } from 'lodash';
import { Form, Formik } from 'formik';

import { Notifications } from 'Utils/';

type Value = string | number | null | undefined | JSX.Element;
type Action = (id: string) => void;
type ActionPromise = (id: string) => Promise<void>;

interface FilterField {
	name: string;
	placeholder?: string;
	type?: 'text' | 'date';
}
interface Filter<T extends object> {
	fields: (FilterField | undefined)[];
	filter: T;
	setFilter: (filter: T) => void;
}
interface Item {
	id: string;
	values: Value[];
}

interface Props {
	items: Item[];
	header: Value[];
	/* tslint:disable-next-line */
	filter?: Filter<any>;
	onDelete: ActionPromise;
	onEdit: ActionPromise;
}

const actionButton = ({ id, selectItem, onEdit }: { id: string; selectItem: Action; onEdit: Action }) => {
	return (
		<>
			<span
				className="h5"
				onClick={() => {
					onEdit(id);
				}}>
				<i className="fa fa-pencil" />
			</span>
			&nbsp; &nbsp;
			<span
				className="h5"
				onClick={() => {
					selectItem(id);
				}}>
				<i className="fa fa-trash" />
			</span>
		</>
	);
};

export const Grid: React.FC<Props> = ({ items, header, onDelete, onEdit, filter }) => {
	const [selectedToDelete, setSelectedToDelete] = useState('');

	const body = items.map(item => {
		return [...item.values, actionButton({ id: item.id, selectItem: setSelectedToDelete, onEdit })];
	});

	return (
		<>
			<Modal
				title="Remover o item escolhido?"
				confirm={{
					text: 'Remover',
					onClick: () => {
						onDelete(selectedToDelete)
							.then(() => {
								setSelectedToDelete('');
							})
							.catch(() => {
								Notifications.error('Ocorreu um erro ao tentar excluir este item');
							});
					},
				}}
				close={{
					text: 'Cancelar',
					onClick: () => {
						setSelectedToDelete('');
					},
				}}
				size="medium"
				visible={!!selectedToDelete}>
				No momento em que você remover esse item ele deverá perder sua referência na aplicação.
			</Modal>
			<Formik
				initialValues={filter ? cloneDeep({ ...filter.filter }) : {}}
				validationSchema=""
				enableReinitialize
				validateOnMount
				validateOnChange
				onSubmit={value => {
					filter?.setFilter(value);
				}}>
				{({ isValid, values }) => {
					const filterFields = filter?.fields.map(field => {
						if (!field) return undefined;
						return <FormFields.Input.TextHorizontal type={field.type} label={''} {...field} />;
					});
					if (filterFields) {
						filterFields.push(
							<button disabled={!isValid} className="btn btn-outline-secondary" type="submit">
								Buscar
							</button>,
						);
					}
					return (
						<Form>
							<Table header={header} body={body} filter={filterFields} />
						</Form>
					);
				}}
			</Formik>
		</>
	);
};
