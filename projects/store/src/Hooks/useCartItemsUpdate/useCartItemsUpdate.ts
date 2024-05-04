import { useEffect } from 'react';
import { authSelector } from '@App/Store/Reducers/AuthReducer';
import { updateCart } from '@App/Services/updateCart';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { formatMoney } from '@App/Utils/formatMoney';
import { errorLogger } from '@App/Utils/logger';

export const useCartItemsUpdate = () => {
	const auth = useSelector(authSelector.auth);
	useEffect(() => {
		if (auth === 'authenticated') {
			updateCart()
				.then(({ update, removed }) => {
					update.forEach(item => {
						toast.warning(`${item.name} teve seu valor atualizado para ${formatMoney(item.price)}`);
					});
					removed.forEach(item => {
						toast.warning(`${item.name} foi não está mais disponível, e por isso foi removido do carrinho`);
					});
				})
				.catch(errorLogger);
		}
	}, [auth]);
};
