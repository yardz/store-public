import React from 'react';
export const Coupon: React.FC = () => {
	return null;
};

// import firebase from 'firebase/app';

// import { PageTitle, Button } from 'Components';
// import { useState } from 'Hooks';
// import { CouponForm } from './Components/CouponForm';
// import { Coupon as ICoupon } from '@lab77store/database';

// import { CouponGrid } from './Components/CouponGrid';
// import { useObjectVal } from 'react-firebase-hooks/database';

// const initialValues: ICoupon = {
// 	code: '',
// 	value: 0,
// 	percent: 0,
// 	shipping: 'normal',
// 	stock: { free: 0, locked: 0, total: 0 },
// 	active: false,
// };

// export const Coupon: React.FC = () => {
// 	const [form, setForm] = useState({ open: false, selected: '' });
// 	const [couponList, loading, error] = useObjectVal<{ [id: string]: ICoupon }>(firebase.database().ref('/coupons'));

// 	if (loading || !!error) {
// 		// console.log({ error });
// 		return null;
// 	}

// 	const selectedCoupon = couponList && !!form.selected ? couponList[form.selected] : initialValues;
// 	const icon = (): JSX.Element => <i className="fa fa-plus" aria-hidden="true" />;

// 	return (
// 		<>
// 			<PageTitle title="Cupom" subtitle="Adicione e gerencie seus cupons" />
// 			<div className="row">
// 				<div className="col-md-12">
// 					<div className="tile">
// 						<div className="row">
// 							<div className="col">
// 								<h3 className="tile-title">Lista de cupons</h3>
// 							</div>
// 							<div className="col text-right">
// 								<Button
// 									label="Cadastrar"
// 									icon={icon()}
// 									color="primary"
// 									onClick={() => {
// 										setForm({ open: true, selected: '' });
// 									}}>
// 									Cadastrar
// 								</Button>
// 							</div>
// 						</div>
// 						<CouponForm
// 							initialValues={selectedCoupon}
// 							showModal={form.open}
// 							id={form.selected}
// 							closeModal={() => {
// 								setForm({ open: false, selected: '' });
// 							}}
// 						/>
// 						<CouponGrid
// 							items={couponList || {}}
// 							selectCoupon={id => {
// 								setForm({ open: true, selected: id });
// 							}}
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };
