import React from 'react';
import Link from 'next/link';
import { ShowOnDevice } from '@App/Components/ShowOnDevice';

import styles from './Logo.module.scss';

import dynamic from 'next/dynamic';

const LogoLabMb = dynamic(() => import('@App/Assets/images/LogoLabMb').then(mod => mod.LogoLabMb));
const LogoLabDesk = dynamic(() => import('@App/Assets/images/LogoLabDesk').then(mod => mod.LogoLabDesk));

export const Logo: React.FC = () => (
	<Link href="/">
		<a>
			<div className={styles.logo}>
				<ShowOnDevice.ShowDesktop>
					<LogoLabDesk />
				</ShowOnDevice.ShowDesktop>
				<ShowOnDevice.ShowMobile>
					<LogoLabMb />
				</ShowOnDevice.ShowMobile>
			</div>
		</a>
	</Link>
);
