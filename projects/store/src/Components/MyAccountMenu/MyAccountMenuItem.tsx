import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import styles from './MyAccountMenuItem.module.scss';

interface Props {
	icon: JSX.Element;
	name: string;
	description: string;
}

export const MyAccountMenuItem: React.FC<Props> = ({ icon, name, description }) => (
	<div className="container-fluid g-0 overflow-hidden">
		<div className="row">
			<div className="col">
				<div className={styles.content}>
					<div className={styles.icon}>{icon}</div>

					<div className={styles.info}>
						<p className={styles.name}>{name}</p>
						<p className={styles.description}>{description}</p>
					</div>
				</div>
			</div>
			<div className="col-2 col-md-2">
				<div className={styles.iconAccess}>
					<FontAwesomeIcon icon={faCaretRight} />
				</div>
			</div>
		</div>
	</div>
);
