import React, { useEffect } from 'react';
import { useAddresses } from '@App/Hooks';
import { Address, PersonalData } from '@App/Components';
import { useDispatch, useSelector } from 'react-redux';
import { orderActions, orderSelector } from '@App/Store/Reducers/OrderReducer';
import isEqual from 'lodash/isEqual';
import { userAddressToAddress } from '@App/Utils';
import { LoadingPage } from '@App/Pages/Loading';
import { SelectAddresses } from './SelectAddresses';
import Link from 'next/link';

import styles from './PersonalDataStep.module.scss';

interface Props {}

export const PersonalDataStep: React.FC<Props> = () => {
	const address = useSelector(orderSelector.address);
	const addresses = useAddresses();
	const dispatch = useDispatch();

	useEffect(() => {
		if (addresses.data?.length === 1) {
			const addressSelected = userAddressToAddress({ userAddress: addresses.data[0] });
			if (!isEqual(addressSelected, address)) {
				dispatch(orderActions.setAddress({ address: addresses.data[0] }));
			}
		}
	}, [dispatch, addresses, address]);

	if (addresses.isLoading) return <LoadingPage />;
	const selected = addresses.data?.find(ad => address && ad.zipCode === address.zipCode && ad.number === address.number)?._id;

	return (
		<>
			<section className={styles.PersonalDataStep}>
				<div className="container-fluid g-0 overflow-hidden">
					<div className="row">
						<div className="col-12">
							<SelectAddresses
								addresses={addresses.data || []}
								refresh={async () => {
									await addresses.mutate();
								}}
							/>
						</div>
					</div>
				</div>
				<div className="container-fluid g-0 overflow-hidden">
					<div className="row">
						<div className="col-12">
							<PersonalData />
							{address && (
								<>
									<Address address={address} className={styles.darkText} />
									<Link href={`/minha-conta/meus-enderecos/editar/${selected}?redirect=/pagamento`}>
										<a className="btn btn-outline-primary">Editar</a>
									</Link>
								</>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
