/* eslint-disable max-lines */
import React from 'react';
import { Form, Formik } from 'formik';
import { FormFields } from '@App/Components/FormFields';
import classNames from 'classnames';
import styles from './LockCategory.module.scss';
import Image from 'next/image';
import { ShowOnDevice } from '@App/Components/ShowOnDevice';

import lockImgTop from '../../../public/images/lockpage_top.png';
import lockImgBotton from '../../../public/images/lockpage_botton.png';

import * as Yup from 'yup';
import { Button } from '@App/Components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

interface Props {
	unLock: (key: string) => void;
}
const validationSchema = Yup.object().shape({
	lockpass: Yup.string().trim().required('Senha obrigatória'),
});
export const LockCategory: React.FC<Props> = ({ unLock }) => {
	// basta criar a página que vai ocupar a tela toda.
	// Nessa página, temos um input + um botão. Ao clicar no botão vai chamar a função "unLock" que vai destravar a página, caso a senha esteja correta
	// Essa página não precisa fazer mais nada, apenas chamar a função
	if (!unLock) return null; // esse código aqui foi só pro lint
	return (
		<section className="container-fluid g-0 overflow-hidden">
			<div className="row g-0">
				<Formik
					initialValues={{ lockpass: '' }}
					validationSchema={validationSchema}
					onSubmit={({ lockpass }, actions) => {
						actions.setSubmitting(true);
						unLock(lockpass);
						actions.setSubmitting(false);
					}}>
					{({ isSubmitting, isValid }) => (
						<Form>
							<div className={styles.LockerPage}>
								<div className="container-fluid g-0 overflow-hidden">
									<div className="row justify-content-center">
										<div className="col-12">
											<div className={classNames('col-12', styles.lokpageBG)}>
												<div className="text-center">
													<ShowOnDevice.ShowDesktop>
														<Image src={lockImgTop} alt="eu reciclo" height={260} width={250} />
													</ShowOnDevice.ShowDesktop>
													<ShowOnDevice.ShowMobile>
														<Image src={lockImgTop} alt="eu reciclo" height={270} width={265} />
													</ShowOnDevice.ShowMobile>
												</div>
												<div className={styles.inputSection}>
													<FormFields.Input.Text type="text" placeholder="Senha:" aria-label="Senha" name="lockpass" />
													<Button disabled={isSubmitting || !isValid} color={isValid ? 'success' : 'primary'} type="submit" fullWidth>
														{isSubmitting ? <FontAwesomeIcon icon={faSpinner} pulse /> : 'Entrar'}
													</Button>
												</div>
												<div className="text-center">
													<Image src={lockImgBotton} alt="eu reciclo" height={115} width={280} />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</section>
	);
};
