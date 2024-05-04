import React, { useContext } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { HeaderContext } from '@App/Template/Components/Header/HeaderContext';
import styles from './MenuIconButton.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const MenuIconButton: React.FC<Props> = props => {
	const {
		menu: { mobile },
	} = useContext(HeaderContext);
	const { className, ...btnProps } = props;
	return (
		<button type="button" className={classNames(styles.HeaderMenuMobile, className, { [styles.open]: mobile })} {...btnProps}>
			<FontAwesomeIcon icon={faBars} />
		</button>
	);
};
