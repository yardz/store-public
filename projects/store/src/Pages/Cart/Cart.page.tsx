import React, { useState } from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import {
	SelectDelivery,
	CouponForm,
	RestrictedContent,
	SlideAfterScreenPosition,
	ShowOnDevice,
	SliderRecommendation,
} from '@App/Components';
import { Delivery } from '@lab77store/domain';
import { cartSelector } from '@App/Store/Reducers/CartReducer';
import { ApplicationHooksViewCartItems } from '@App/Plugins/ApplicationHooks/ApplicationHooksViewCartItems';
import { GoToCheckout } from './GoToCheckout';

import dynamic from 'next/dynamic';

import styles from './Cart.module.scss';
import { useCartItemsUpdate, useComponentDidMount } from '@App/Hooks';

const CartEmpty = dynamic(() => import('./CartEmpty').then(mod => mod.CartEmpty), { ssr: false });
const CartItem = dynamic(() => import('./CartItem').then(mod => mod.CartItem), { ssr: false });
const DeliveryForm = dynamic(() => import('./DeliveryForm').then(mod => mod.DeliveryForm), { ssr: false });

const ViewCartEffects = () => {
	const items = useSelector(cartSelector.items);
	useComponentDidMount(() => {
		ApplicationHooksViewCartItems({ items });
	});
	return null;
};

export interface CartPageProps {}
export const CartPage: React.FC<CartPageProps> = () => {
	const items = useSelector(cartSelector.items);
	const [deliveryOptions, setDeliveryOptions] = useState<Delivery[]>([]);
	useCartItemsUpdate();

	return (
		<>
			<Head>
				<meta name="description" content="carrinho" data-rh="true" />
			</Head>
			<RestrictedContent>
				<section className="container-fluid g-0 overflow-hidden">
					<div className="row">
						<div className="col">
							<SliderRecommendation position={1} />
						</div>
					</div>
				</section>
				<>{!items.length && <CartEmpty />}</>
				<>
					{!!items.length && (
						<>
							{/* Esse componente deve ficar aqui, pois só deve ser visivel quando existir itens no carrinho */}
							<ViewCartEffects />
							<section id="containerCardPageMaster" className={styles.cartPage}>
								<section className="container g-0">
									<div className="row justify-content-lg-between col-12">
										<div className="col-12">
											<h1 className={styles.title}>Sacola</h1>
										</div>
										<div className="col-12 col-lg-8">
											{items.map(item => (
												<CartItem key={item.variationId} item={item} />
											))}
											<section className="container-fluid g-0 overflow-hidden">
												<div className="row">
													<div className="col">
														<SliderRecommendation position={2} />
													</div>
												</div>
											</section>
										</div>
										<div className="col col-lg-4">
											<ShowOnDevice.ShowDesktop>
												<SlideAfterScreenPosition id="GoToCheckoutDesktop" parentId="containerCardPageMaster" top={100}>
													<GoToCheckout.GoToCheckoutDesktop />
												</SlideAfterScreenPosition>
											</ShowOnDevice.ShowDesktop>
										</div>
									</div>
								</section>
								<section className="container-fluid g-0 overflow-hidden">
									<div className="row">
										<div className="col">
											<SliderRecommendation position={3} />
										</div>
									</div>
								</section>
								<section className="mt-5">
									<div className="container overflow-hidden">
										<div className="row">
											<div className="col-12 col-lg-8">
												<div className="container-fluid g-0 overflow-hidden">
													<div className="row g-0">
														<div className="col-12 offset-lg-3 col-lg-9">
															<DeliveryForm setOptions={options => setDeliveryOptions(options)} />
															<div className="mb-4 mt-4">
																<SelectDelivery options={deliveryOptions} />
															</div>
															<CouponForm />
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</section>
								<section className="container-fluid g-0 overflow-hidden">
									<div className="row">
										<div className="col">
											<SliderRecommendation position={4} />
										</div>
									</div>
								</section>

								<ShowOnDevice.ShowMobile>
									<div className={styles.spaceFooter} />
								</ShowOnDevice.ShowMobile>

								<GoToCheckout.GoToCheckoutMobile />
							</section>
						</>
					)}
				</>
			</RestrictedContent>
		</>
	);
};
