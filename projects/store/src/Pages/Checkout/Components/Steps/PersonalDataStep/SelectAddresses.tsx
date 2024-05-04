import React from 'react';
import { UserAddress } from '@lab77store/domain';
import { useToggle } from '@App/Hooks';
import { saveAddress } from '@App/Services';
import { toast } from 'react-toastify';
import to from 'await-to-js';
import dynamic from 'next/dynamic';

import styles from './SelectAddresses.module.scss';
import { InputSelect } from '@App/Components';
import { orderActions, orderSelector } from '@App/Store/Reducers/OrderReducer';
import { useDispatch, useSelector } from 'react-redux';
import { isEqualAddress } from '@App/Utils';

const AddressForm = dynamic(() => import('@App/Components').then(mod => mod.Forms.AddressForm));
const Button = dynamic(() => import('@App/Components').then(mod => mod.Button));

const initialValues: UserAddress = {
	_id: '',
	name: '',
	recipientName: '',
	zipCode: '',
	country: '',
	state: '',
	city: '',
	neighborhood: '',
	street: '',
	number: '',
	complement: '',
};

interface Props {
	addresses: UserAddress[];
	refresh: () => Promise<void>;
}

export const SelectAddresses: React.FC<Props> = ({ addresses, refresh }) => {
	const address = useSelector(orderSelector.address);
	const dispatch = useDispatch();
	const [open, setOpen] = useToggle(false);

	const save = async (formAddress: UserAddress) => {
		const [err, newAddress] = await to(saveAddress(formAddress));
		if (err || !newAddress) {
			toast.error('Ocorreu um erro ao tentar salvar o endereço');
			return;
		}
		toast.success('Endereço salvo com sucesso!');
		dispatch(orderActions.setAddress({ address: newAddress }));
		await refresh();
		setOpen(false);
	};

	const form = (
		<>
			{open && (
				<>
					<AddressForm initialValues={initialValues} action={save} actionLabel="Entregar neste endereço" />
					<div className={styles.space} />
				</>
			)}
		</>
	);

	if (addresses.length === 0) {
		if (open) {
			return <>{form}</>;
		}
		return (
			<>
				<Button color="success" onClick={() => setOpen()} fullWidth>
					INFORME ENDEREÇO DE ENTREGA
				</Button>
				<div className={styles.space} />
			</>
		);
	}

	return (
		<>
			<div className="container-fluid g-0 overflow-hidden">
				<div className="row">
					<div className="col-12">{form}</div>
					<div className="col-12">
						<div className={styles.spaceSmall}>
							<InputSelect
								label=""
								value={(!!address && addresses.find(option => isEqualAddress(option, address))?._id) || ''}
								onChange={event => {
									if (event.target.value === '__create__') {
										setOpen(true);
										return;
									}
									setOpen(false);
									const selected = addresses.find(option => option._id === event.target.value);
									if (selected) {
										dispatch(orderActions.setAddress({ address: selected }));
									}
								}}>
								{!address && <option value="">Informe o endereço de entrega</option>}
								{addresses.map(option => (
									<option key={option._id} value={option._id}>
										Entregar neste endereço: {option.name}
									</option>
								))}
								<option value="__create__">Cadastrar novo endereço</option>
							</InputSelect>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.space} />
		</>
	);
};
