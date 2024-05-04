import React from 'react';
import styles from './FromLinkDivider.module.scss';
import Link from 'next/link';

interface Action {
	title: string;
	path: string;
}

interface Props {
	actions: Action[];
}
export const FromLinkDivider: React.FC<Props> = ({ actions }) => (
	<div className={styles.linksWrapper}>
		{actions.map(action => (
			<React.Fragment key={action.path}>
				<Link href={action.path}>
					<a title={action.title} className={styles.link}>
						{action.title}
					</a>
				</Link>
				<p className={styles.linkDivider}>&nbsp;</p>
			</React.Fragment>
		))}
	</div>
);
