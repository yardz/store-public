import React, { useContext, useEffect, useState } from 'react';
import { Product } from '@lab77store/domain';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { cartActions } from '@App/Store/Reducers/CartReducer';
import { Button } from '@App/Components';
import { useRouter } from 'next/router';
import { createCartItem } from './createCartItem';
import { ProductMessage, SelectProductContext } from '../SelectProductContext';
import isEqual from 'lodash/isEqual';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { errorLogger } from '@App/Utils/logger';

interface Props {
	title: string;
	color: 'success' | 'primary';
	product: Product;
	goToCart?: boolean;
}

const updateMessage: ProductMessage = {
	type: 'danger',
	message: 'Selecione todas as opções do produto',
};

export const BuyButtonAction: React.FC<Props> = ({ color, title, product, goToCart }) => {
	const { selectProductOptions, variation, messages, setMessages } = useContext(SelectProductContext);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const router = useRouter();

	useEffect(() => {
		const update = messages.filter(msg => !isEqual(updateMessage, msg));
		if (!!variation && !isEqual(update, messages)) {
			setMessages(update);
		}
	}, [messages, variation, setMessages]);

	const addVariacao = () => {
		if (!variation) return;
		if (variation.stock.free < 1) {
			toast.error('Ops, essa variação não está em estoque :(');
			return;
		}
		setLoading(true);
		const cartItem = createCartItem({ variation, product });
		const callback = () => {
			if (goToCart) {
				router.push('/carrinho').catch(errorLogger);
				return;
			}
			setLoading(false);
			toast.success('Produto adicionado na sacola');
		};

		dispatch(cartActions.addItem({ item: cartItem, callback }));
	};

	const focusOnOptions = () => {
		const container = document.getElementById('SelectProduct');
		const header = document.getElementById('store-template-header');
		if (container && header) {
			window.scrollTo({ top: container.offsetTop - (header.offsetHeight + 20), behavior: 'smooth' });
		}
	};

	const addMessageError = () => {
		const hasMsg = !!messages.find(msg => isEqual(msg, updateMessage));
		if (!hasMsg) {
			setMessages([...messages, updateMessage]);
		}
	};

	return (
		<Button
			color={color}
			fullWidth
			onClick={() => {
				if (loading) return;
				if (!selectProductOptions.completed) {
					focusOnOptions();
					addMessageError();
					return;
				}
				addVariacao();
			}}>
			{!loading ? title : <FontAwesomeIcon icon={faSpinner} pulse />}
		</Button>
	);
};
