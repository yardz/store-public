import React from 'react';

import Link from 'next/link';

import styles from './MenuMobileLink.module.scss';

interface Props {
	deep?: number;
	text: string;
	href: string;
	target?: string;
}

export const MenuMobileLink: React.FC<Props> = ({ text, href, deep = 0, target }) => (
	<Link href={href}>
		<a className={styles.MenuMobileLink} style={{ paddingLeft: `${deep + 1}rem` }} target={target}>
			{text}
		</a>
	</Link>
);
