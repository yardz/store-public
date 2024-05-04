import React from 'react';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './TitleBack.module.scss';
import Link from 'next/link';

type ActionFunction = () => void;
interface Props {
	title: string;
	action: string | ActionFunction;
}

export const TitleBack: React.FC<Props> = ({ action, title }) => {
	const component = (
		<>
			<span className={styles.icon}>
				<FontAwesomeIcon icon={faCaretLeft} />
			</span>
			<h1 className={styles.title}>{title}</h1>
		</>
	);

	if (typeof action === 'string') {
		return (
			<Link href={action}>
				<a className={styles.TitleBack}>{component}</a>
			</Link>
		);
	}

	return (
		<button type="button" className={styles.TitleBack} onClick={action}>
			{component}
		</button>
	);
};
