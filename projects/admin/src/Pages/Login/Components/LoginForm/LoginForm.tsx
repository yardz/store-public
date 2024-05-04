import React from 'react';
import { Link } from 'react-router-dom';
import { RouteNames } from 'Routes/RouteNames';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Input } from '../Input';

import { Notifications } from 'Utils/index';

import { cloneDeep } from 'lodash';
import { authService } from 'Services';
const validationSchema = Yup.object().shape({
	email: Yup.string().trim().email('Esse campo deve ser um e-mail válido').required('Campo obrigatório'),
	password: Yup.string().trim().min(6, 'Minimo de 6 caracteres').required('Campo obrigatório'),
});

interface LoginProperties {
	email: string;
	password: string;
}

// valores para usuário de teste
const initialValues: LoginProperties = {
	email: '',
	password: '',
};

const login = async (userProperties: LoginProperties) => {
	const { email, password } = userProperties;
	return authService.authenticate(email, password);
};

export const LoginForm = () => {
	return (
		<Formik
			initialValues={cloneDeep(initialValues)}
			validationSchema={validationSchema}
			onSubmit={(values, actions) => {
				actions.setSubmitting(true);
				login(values)
					.finally(() => {
						actions.setSubmitting(false);
					})
					.catch(() => Notifications.error('Usuário e/ou senha inválido(s)'));
			}}>
			{() => (
				<Form className="login-form">
					<h3 className="login-head">
						<i className="fa fa-lg fa-fw fa-user" />
						Login
					</h3>

					<Input name="email" id="email" type="email" label="Email" placeholder="Email" />
					<Input name="password" id="password" type="password" label="Senha" placeholder="Senha" />

					<div className="form-group">
						<div className="utility">
							<div className="animated-checkbox">
								<label>
									<input type="checkbox" />
									<span className="label-text">Mantenha-me conectado</span>
								</label>
							</div>
						</div>
					</div>
					<div className="form-group btn-container">
						<button type="submit" className="btn btn-primary btn-block">
							<i className="fa fa-sign-in fa-lg fa-fw" />
							Entrar
						</button>
					</div>
					<br />
					<div>
						<p className="semibold-text mb-2 text-center">
							<Link to={RouteNames.forgotPassword}>Esqueci minha senha</Link>
						</p>
					</div>
				</Form>
			)}
		</Formik>
	);
};
