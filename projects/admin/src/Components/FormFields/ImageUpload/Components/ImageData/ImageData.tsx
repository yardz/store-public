import React, { useEffect, useState } from 'react';

import styles from './ImageData.module.scss';

function humanFileSize(size: number, si: boolean = false, dp: number = 1) {
	let bytes = size;
	const thresh = si ? 1000 : 1024;
	if (Math.abs(bytes) < thresh) {
		return bytes + ' B';
	}
	const units = si ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
	let u = -1;
	const r = 10 ** dp;
	do {
		bytes /= thresh;
		++u;
	} while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);
	return bytes.toFixed(dp) + ' ' + units[u];
}

interface Props {
	file: File | '';
}

export const ImageData: React.FC<Props> = ({ file }) => {
	const [size, setSize] = useState({ width: 0, height: 0 });
	useEffect(() => {
		if (file !== '') {
			const u = URL.createObjectURL(file);
			const img = new Image();
			img.onload = function () {
				const imgSize = { width: img.width, height: img.height };
				setSize(imgSize);
			};
			img.src = u;
		}
	}, [file]);

	if (file === '') {
		return null;
	}

	return (
		<>
			<div className="row">
				<div className="col">
					<span className={styles.label}>Nome:&nbsp;</span>
					<span className={styles.value}>{file.name}</span>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<span className={styles.label}>Tamanho:&nbsp;</span>
					<span className={styles.value}>{humanFileSize(file.size)}</span>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<span className={styles.label}>Resolução:&nbsp;</span>
					<span className={styles.value}>
						{size.width}x{size.height}
					</span>
				</div>
			</div>
		</>
	);
};
