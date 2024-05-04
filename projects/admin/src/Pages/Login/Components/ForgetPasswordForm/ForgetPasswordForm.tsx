import React from 'react';
import { RouteNames } from 'Routes/RouteNames';
import { Link } from 'react-router-dom';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Input } from '../Input';

import firebase from 'firebase/app';

import { Notifications } from 'Utils/index';
import { cloneDeep } from 'lodash';

const validationSchema = Yup.object().shape({
	email: Yup.string().trim().email('Esse campo deve ser um e-mail válido').required('Campo obrigatório'),
});

interface ResetPasswordProperties {
	email: string;
}
const initialValues: ResetPasswordProperties = {
	email: '',
};

const resetPassword = async (reset: ResetPasswordProperties) => {
	return firebase.auth().sendPasswordResetEmail(reset.email);
};

const sendedEmailNotification = () =>
	Notifications.success('Se o usuário for válido você receberá um email com instruções de redefinição de senha');

export const ForgetPasswordForm = () => {
	return (
		<Formik
			initialValues={cloneDeep(initialValues)}
			validationSchema={validationSchema}
			onSubmit={(values, actions) => {
				actions.setSubmitting(true);
				resetPassword(values)
					.finally(() => {
						actions.setSubmitting(false);
					})
					.then(() => sendedEmailNotification())
					.catch(() => sendedEmailNotification());
			}}>
			{() => (
				<Form className="forget-form">
					<h3 className="login-head">
						<i className="fa fa-lg fa-fw fa-lock" />
						Esqueceu a senha?
					</h3>
					<Input name="email" id="emailReset" type="email" label="Email" placeholder="Email" />
					<div className="form-group btn-container">
						<button type="submit" className="btn btn-primary btn-block">
							<i className="fa fa-unlock fa-lg fa-fw" />
							Resetar
						</button>
					</div>
					<div className="form-group mt-3">
						<p className="semibold-text mb-0">
							<Link to={RouteNames.login}>
								<i className="fa fa-angle-left fa-fw" /> Voltar para Login
							</Link>
						</p>
					</div>
				</Form>
			)}
		</Formik>
	);
};
