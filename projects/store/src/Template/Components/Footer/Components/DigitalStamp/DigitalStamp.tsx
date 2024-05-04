/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import { ShowOnDevice } from '@App/Components/ShowOnDevice';

import img from '../../../../../../public/images/img-selo-cinza.png';

import styles from './DigitalStamp.module.scss';

interface Props {}
export const DigitalStamp: React.FC<Props> = () => (
	<div className={styles.digitalStamp}>
		<a href="https://alias.eureciclo.com.br/" target="_new" title="eu reciclo">
			<ShowOnDevice.ShowDesktop>
				<Image src={img} alt="eu reciclo" height={80} width={80} />
			</ShowOnDevice.ShowDesktop>
			<ShowOnDevice.ShowMobile>
				<Image src={img} alt="eu reciclo" height={60} width={60} />
			</ShowOnDevice.ShowMobile>
		</a>
	</div>
);
