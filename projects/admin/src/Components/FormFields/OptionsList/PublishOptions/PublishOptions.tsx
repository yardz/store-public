import React from 'react';
import classNames from 'classnames';

import { useField } from 'formik';

import styles from './PublishOptions.module.scss';

type OptionAllowed = 'mobile' | 'desktop' | 'store';

const iconStyle = (option: OptionAllowed) => {
	switch (option) {
		case 'desktop':
			return styles.iconDesktop;
		case 'mobile':
			return styles.iconMobile;
		case 'store':
			return styles.iconStore;
		default:
			return '';
	}
};

const Option = ({ option, prefix }: { option: OptionAllowed; prefix: string | undefined }) => {
	const name = `${prefix ? prefix + '.' : ''}publish.${option}`;
	const type = 'checkbox';
	const [field] = useField({ name, type });

	return (
		<div
			className={classNames({
				'form-check': true,
				'form-check-inline': true,
			})}>
			<label className="form-check-label">
				<input className={styles.inputOption} {...field} type={type} />
				<i
					className={classNames(iconStyle(option), {
						'fa fa-desktop': option === 'desktop',
						'fa fa-home': option === 'store',
						'fa fa-mobile': option === 'mobile',
						'text-primary': field.value,
					})}
				/>
			</label>
		</div>
	);
};

interface Props {
	prefix?: string;
	label?: {
		size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
		name: string;
	};
}
export const PublishOptions: React.FC<Props> = ({ label, prefix }) => {
	return (
		<div className="form-group row">
			{!!label && <label className={`col-sm-${label.size} col-form-label`}>{label.name}</label>}
			<div className={!!label ? `col-sm-${12 - label.size}` : `col-sm-12`}>
				<Option option="store" prefix={prefix} />
				<Option option="mobile" prefix={prefix} />
				<Option option="desktop" prefix={prefix} />
			</div>
		</div>
	);
};
