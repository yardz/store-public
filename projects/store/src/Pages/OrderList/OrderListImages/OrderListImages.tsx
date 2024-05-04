import React, { useMemo } from 'react';
import { Order } from '@lab77store/domain';

import { Image } from '@App/Components/Image';
import uniqBy from 'lodash/uniqBy';

import styles from './OrderListImages.module.scss';

const getImages = (order: Order) => uniqBy(order.items, item => item.variationId).map(item => item.photo);
interface Props {
	order: Order;
	limit: number;
}
export const OrderListImages: React.FC<Props> = ({ order, limit }) => {
	const images = useMemo(() => getImages(order), [order]);
	const list = images.length <= limit ? images : images.slice(0, limit - 1);
	const imgSize = { width: 80, height: 80 };
	return (
		<>
			{list.map((image, key) => (
				<Image size={{ mobile: imgSize, desktop: imgSize }} key={key} image={image} />
			))}
			{images.length > limit && <div className={styles.AppendImage}>+{images.length - (limit - 1)}</div>}
		</>
	);
};
