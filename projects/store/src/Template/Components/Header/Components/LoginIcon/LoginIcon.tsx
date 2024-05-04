import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

import styles from './LoginIcon.module.scss';
import { useRouter } from 'next/router';
import classNames from 'classnames';

export const LoginIcon: React.FC = () => {
	const { pathname } = useRouter();
	return (
		<Link href="/minha-conta">
			<a>
				<div className={classNames(styles.loginContent, { [styles.active]: pathname.includes('/minha-conta') })}>
					<FontAwesomeIcon className={styles.icon} icon={faUserAlt} />
				</div>
			</a>
		</Link>
	);
};
