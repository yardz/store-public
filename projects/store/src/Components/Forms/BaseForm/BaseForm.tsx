import React from 'react';
import { Button } from '@App/Components';
import { Form, Formik } from 'formik';
import cloneDeep from 'lodash/cloneDeep';
import { AnyObjectSchema } from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './BaseForm.module.scss';
import { errorLogger } from '@App/Utils/logger';

export interface Props<T> {
	initialValues: T;
	action: (data: T) => Promise<void>;
	actionLabel: string | JSX.Element;
	validationSchema: AnyObjectSchema;
	validateOnMount?: boolean;
	children: JSX.Element | JSX.Element[];
}
export function BaseForm<T>({ initialValues, validationSchema, children, action, actionLabel, validateOnMount = true }: Props<T>) {
	return (
		<Formik
			initialValues={cloneDeep(initialValues)}
			validationSchema={validationSchema}
			validateOnMount={validateOnMount}
			onSubmit={async (data, actions) => {
				actions.setSubmitting(true);
				await action(data).catch(errorLogger);
			}}>
			{({ isSubmitting, isValid }) => (
				<Form>
					{children}
					<div className="container-fluid g-0 overflow-hidden">
						<div className="row">
							<div className="col-12">
								<div className={styles.space}>
									<Button disabled={isSubmitting || !isValid} color={isValid ? 'success' : 'primary'} type="submit" fullWidth>
										{isSubmitting ? <FontAwesomeIcon icon={faSpinner} pulse /> : actionLabel}
									</Button>
								</div>
							</div>
						</div>
					</div>
				</Form>
			)}
		</Formik>
	);
}
