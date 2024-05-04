import React from 'react';
import { useDevice } from '@App/Hooks';
import { useDispatch, useSelector } from 'react-redux';
import { checkoutActions, checkoutSelector } from '@App/Store/Reducers/CheckoutReducer';
import { TitleBack } from '@App/Components';
import classNames from 'classnames';
import { errorLogger } from '@App/Utils';
import { useRouter } from 'next/router';

import styles from './PageStep.module.scss';

interface Props {
	disabled: boolean;
	title: string;
	children: JSX.Element | JSX.Element[];
	className?: string;
}

export const PageStep: React.FC<Props> = ({ disabled, children, title, className }) => {
	const router = useRouter();
	const device = useDevice();
	const step = useSelector(checkoutSelector.step);
	const dispatch = useDispatch();

	if (device === 'mobile' && disabled) {
		return null;
	}

	return (
		<div className={classNames(className, styles.container, disabled && styles.disabled)}>
			<div className={styles.title}>
				<TitleBack
					title={title}
					action={() => {
						if (step === 1) {
							router.push('/carrinho').catch(errorLogger);
							return;
						}
						dispatch(checkoutActions.gotToStep({ step: step - 1 }));
					}}
				/>
			</div>
			{children}
			{device === 'desktop' && disabled && <div className={styles.disabled} />}
		</div>
	);
};
