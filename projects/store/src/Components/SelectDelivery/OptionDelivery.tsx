import React from 'react';
import { Delivery } from '@lab77store/domain';
import { useDispatch, useSelector } from 'react-redux';
import { orderActions, orderSelector } from '@App/Store/Reducers/OrderReducer';
import { formatMoney, deliveryToOrderDelivery } from '@App/Utils';
import sortBy from 'lodash/sortBy';
import { DeliveryTip } from './DeliveryTip';
import { FakeRadio } from '../FakeRadio';
import classNames from 'classnames';
import style from './OptionDelivery.module.scss';
import { ApplicationHooksSelectDelivery } from '@App/Plugins/ApplicationHooks/ApplicationHooksSelectDelivery';

interface Props {
	delivery: Delivery;
}

export const OptionDelivery: React.FC<Props> = ({ delivery }) => {
	const dispatch = useDispatch();
	const deliveryOrder = useSelector(orderSelector.delivery);
	const selected = delivery._id === deliveryOrder?._id;
	const tips = sortBy(delivery.alerts, ['order']);

	const deliveryPrice = delivery.price === 0 ? 'Grátis' : formatMoney(delivery.price);

	const dispatchDelivery = () => {
		ApplicationHooksSelectDelivery({ delivery });
		dispatch(orderActions.setDelivery({ delivery: deliveryToOrderDelivery({ delivery }) }));
	};

	return (
		<div className={style.optionDelivery}>
			<div className="container-fluid g-0 overflow-hidden">
				<div className="row">
					<div className="col-9">
						<div className={style.content}>
							<FakeRadio className={style.fakeRadio} size={15} active={selected} onClick={dispatchDelivery} />
							<label className={style.label} htmlFor={delivery._id}>
								<input className="d-none" id={delivery._id} type="radio" checked={selected} onChange={dispatchDelivery} />
								<span className={style.method}>{delivery.method}</span>
								<span className={style.time}>
									(Entrega em até {delivery.deliveryTime} {delivery.deliveryTime > 1 ? 'úteis' : 'útil'})
								</span>
							</label>
						</div>
					</div>
					<div className="col-3">
						<div className={classNames('text-end', style.deliveryPrice)} onClick={dispatchDelivery}>
							{deliveryPrice}
						</div>
					</div>
				</div>
				{selected && tips?.map(tip => <DeliveryTip key={tip.order} tip={tip} />)}
			</div>
		</div>
	);
};
