import React from 'react';

export const CouponGrid: React.FC = () => {
	return null;
};

// import { Coupon } from '@lab77store/database';
// import { DatabaseServices } from 'Services';

// import { Grid } from 'Components';
// import { map } from 'lodash';
// import { formatMoney } from 'Utils';

// const header = ['Código', 'Valor Fixo', 'Valor %', 'Frete', 'Disponivel', 'Qtd', 'Usado', ''];

// interface Props {
// 	selectCoupon: (couponId: string) => void;
// 	items: { [id: string]: Coupon };
// }

// const onDelete = async (id: string) => {
// 	return DatabaseServices.Coupon.delete(id)
// 		.then()
// 		.catch(() => {
// 			alert('Erro!');
// 		});
// };

// const customValueFreight = (value: 'free' | 'normal') => (value === 'free' ? 'Frete grátis' : 'Normal');

// export const CouponGrid: React.FC<Props> = ({ selectCoupon, items }) => {
// 	const body = map(items, (coupon, key) => {
// 		return {
// 			id: key,
// 			values: [
// 				coupon.code,
// 				formatMoney(coupon.value),
// 				coupon.percent,
// 				customValueFreight(coupon.shipping),
// 				coupon.stock.free,
// 				coupon.stock.locked,
// 				coupon.stock.total,
// 			],
// 		};
// 	});

// 	return (
// 		<Grid
// 			header={header}
// 			items={body}
// 			onDelete={onDelete}
// 			onEdit={async id => {
// 				selectCoupon(id);
// 			}}
// 		/>
// 	);
// };
