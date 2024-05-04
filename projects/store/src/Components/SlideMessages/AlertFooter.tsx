import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './AlertFooter.module.scss';

import dynamic from 'next/dynamic';

const CloseIcoSvg = dynamic(() => import('@App/Assets/images/CloseIcoSvg').then(mod => mod.CloseIcoSvg));

interface Props {
	messages?: string[];
	time?: number;
}

export const AlertFooter: React.FC<Props> = ({ messages, time }) => {
	const DEFAULT_INTERVAL_TIME = 10000;
	const [closed, setClosed] = useState(false);
	const [counter, setCounter] = useState(0);

	const intervalTime = time ?? DEFAULT_INTERVAL_TIME;

	const onCloseBtn = () => {
		setClosed(!closed);
	};

	useEffect(() => {
		const lastItem = messages ? messages.length - 1 : 0;

		const interval = window.setInterval(() => {
			if (counter === lastItem) {
				setCounter(0);
			} else {
				setCounter(prevCounter => prevCounter + 1);
			}
		}, intervalTime);

		return () => window.clearInterval(interval);
	}, [messages, counter, intervalTime]);

	if (!messages || messages.length === 0) {
		return null;
	}

	if (closed) {
		return null;
	}

	return (
		<section className={classNames(styles.alertFooter)}>
			<p className={styles.text}>{messages[counter]}</p>
			<button type="button" onClick={onCloseBtn} className={styles.btn}>
				<CloseIcoSvg />
			</button>
		</section>
	);
};
