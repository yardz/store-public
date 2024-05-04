import React from 'react';
import { NotFound as PageNotFound, Button } from 'Components';
import { ReactComponent as Logo } from 'Images/logo.svg';

const buttonBack = (): JSX.Element => {
	return <Button label="Voltar" icon={<i className="fa fa-arrow-left" aria-hidden="true" />} color="primary" />;
};

export const NotFound: React.FC = () => <PageNotFound button={buttonBack()} img={<Logo />} />;
