import React, { useContext } from 'react';
import { Product } from '@lab77store/domain';
import { ProductMessage as IProductMessage, SelectProductContext } from '../SelectProductContext';
import { ProductMessage } from './ProductMessage';

interface Props {
	product: Product;
	className?: string;
}

export const ProductMessages: React.FC<Props> = ({ product, className }) => {
	const { selectProductOptions, variation, messages } = useContext(SelectProductContext);
	if (!!messages.length) {
		return (
			<>
				{messages.map(msg => (
					<ProductMessage key={msg.message} message={msg} className={className} />
				))}
			</>
		);
	}
	let message: IProductMessage | undefined;
	if (product.preSale?.additionalDaysDelivery && !!variation) {
		message = {
			type: 'success',
			message: `Esse produto é feito sob encomenda no nosso laboratório de estilo. Será acrescentado ${
				product.preSale.additionalDaysDelivery
			} ${product.preSale.additionalDaysDelivery === 1 ? 'dia' : 'dias'} no tempo de entrega para o corte e a costura de sua peça, ok?`,
		};
	}
	if (variation && variation.stock.free <= 0) {
		message = {
			type: 'danger',
			message: `Produto não está disponível`,
		};
	}

	if (selectProductOptions.completed && !variation) {
		message = {
			type: 'danger',
			message: `variação não existe`,
		};
	}

	if (!message) return null;
	return <ProductMessage message={message} className={className} />;
};
