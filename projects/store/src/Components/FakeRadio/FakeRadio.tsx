import React from 'react';
import classNames from 'classnames';

import styles from './FakeRadio.module.scss';

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	size: number; // size é a altura e larguda da bolinha
	active?: boolean;
}

// Quando recebe a prop "active" mostra a bolinha marcada, caso não receba a prop a bolinha fica desmarcada

export const FakeRadio: React.FC<Props> = ({ size, className, active, style, ...props }) => (
	<button {...props} style={{ ...style, height: size, width: size }} className={classNames(className, styles.radioStyle)} type="button">
		<div className={classNames(styles.inner, { [styles.active]: active })} />
	</button>
);
