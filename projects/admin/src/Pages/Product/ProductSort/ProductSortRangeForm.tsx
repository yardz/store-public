import React from 'react';
import { cloneDeep } from 'lodash';
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';

const validationSchemaRange = Yup.object().shape({
	start: Yup.number().min(0, 'valor mínimo é 0').required('Campo obrigatório'),
	end: Yup.number().min(0, 'valor mínimo é 0').required('Campo obrigatório'),
});

interface Range {
	start: number;
	end: number;
}

interface Props {
	range: Range;
	setRange: (range: Range) => void;
}

export const ProductSortRangeForm: React.FC<Props> = ({ range, setRange }) => {
	return (
		<>
			<Formik
				initialValues={cloneDeep(range)}
				validationSchema={validationSchemaRange}
				enableReinitialize
				validateOnMount
				validateOnChange
				onSubmit={updateRange => {
					setRange(updateRange);
				}}>
				{({ isValid }) => (
					<Form>
						<div className="input-group mb-3">
							<Field type="number" className="form-control" placeholder="Mínimo" name="start" />
							<Field type="number" className="form-control" placeholder="Máximo" name="end" />
							<button disabled={!isValid} className="btn btn-outline-secondary" type="submit">
								Button
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</>
	);
};
