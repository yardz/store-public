import React from 'react';
import classNames from 'classnames';

import styles from './WeightAndDimension.module.scss';

import { FormFields } from 'Components';

interface Props {
	prefix: string;
}

export const WeightAndDimension: React.FunctionComponent<Props> = ({ prefix }) => {
	return (
		<div>
			<div className="row">
				<div className="col">
					<h3 className="tile-title">Peso e Dimensões</h3>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-5">
					<FormFields.Input.TextHorizontal type="number" label="Altura" placeholder="Altura" name={`${prefix}.height`} />
				</div>
				<div className={classNames(styles.centerText, { 'col-lg-1': true })}>cm</div>
				<div className="col-lg-5">
					<FormFields.Input.TextHorizontal type="number" label="Largura" placeholder="Largura" name={`${prefix}.width`} />
				</div>
				<div className={classNames(styles.centerText, { 'col-lg-1': true })}>cm</div>
			</div>
			<div className="row">
				<div className="col-lg-5">
					<FormFields.Input.TextHorizontal type="number" label="Profundidade" placeholder="Profundidade" name={`${prefix}.depth`} />
				</div>
				<div className={classNames(styles.centerText, { 'col-lg-1': true })}>cm</div>
				<div className="col-lg-5">
					<FormFields.Input.TextHorizontal type="number" label="Peso" placeholder="Peso" name={`${prefix}.weight`} />
				</div>
				<div className={classNames(styles.centerText, { 'col-lg-1': true })}>kg</div>
			</div>
		</div>
	);
};
