import React from 'react';
import classNames from 'classnames';

import { RouteNames } from 'Routes/RouteNames';

import { RouteComponentProps } from 'react-router-dom';

import { ForgetPasswordForm, LoginForm } from './Components';

interface Props extends RouteComponentProps {}

export const Login: React.FC<Props> = ({ history, location: { pathname } }) => {
	const flipped = pathname !== RouteNames.login;
	return (
		<>
			<section className="material-half-bg">
				<div className="cover" />
			</section>
			<section className="login-content">
				<div className="logo">
					<h1>&nbsp;</h1>
				</div>
				<div className={classNames({ 'login-box': true, flipped })}>
					<LoginForm />
					<ForgetPasswordForm />
				</div>
			</section>
		</>
	);
};
