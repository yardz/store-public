import { ImageBothRequired } from '@lab77store/domain';
import React, { useState } from 'react';
import { Image } from '@App/Components';

import styles from './MeasuresTable.module.scss';

interface Props {
	image: ImageBothRequired;
	className?: string;
}

export const MeasuresTable: React.FC<Props> = ({ image, className }) => {
	const [showTable, setShowTable] = useState(false);

	return (
		<>
			<button type="button" className={className} onClick={() => setShowTable(true)}>
				<span>Guia de medidas</span> +
			</button>
			{showTable && (
				<div className={styles.lightBoxImg} onClick={() => setShowTable(false)}>
					<div>
						<Image image={image} />
					</div>
				</div>
			)}
		</>
	);
};
