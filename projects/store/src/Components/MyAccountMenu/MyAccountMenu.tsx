import Link from 'next/link';
import React from 'react';
import { Button } from '../Button';
import firebase from '@App/Configs/firebase';
import { MyAccountMenuItem } from './MyAccountMenuItem';
import styles from './MyAccountMenu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faUserAlt, faHome, faLock } from '@fortawesome/free-solid-svg-icons';
import { errorLogger } from '@App/Utils/logger';

interface Props {}

export const MyAccountMenu: React.FC<Props> = () => (
	<div className="container-fluid g-0 overflow-hidden">
		<div className="row">
			<div className="col-12">
				<ul className={styles.ul}>
					<li className={styles.MenuItem}>
						<Link href="/minha-conta/meus-pedidos/">
							<a className={styles.link}>
								<MyAccountMenuItem icon={<FontAwesomeIcon icon={faBox} />} name="Meus pedidos" description="Rastreie pedidos" />
							</a>
						</Link>
					</li>
					<li className={styles.MenuItem}>
						<Link href="/minha-conta/meus-dados">
							<a className={styles.link}>
								<MyAccountMenuItem icon={<FontAwesomeIcon icon={faUserAlt} />} name="Meus dados" description="Veja suas informações" />
							</a>
						</Link>
					</li>
					<li className={styles.MenuItem}>
						<Link href="/minha-conta/meus-enderecos">
							<a className={styles.link}>
								<MyAccountMenuItem icon={<FontAwesomeIcon icon={faHome} />} name="Meus endereços" description="Veja seus endereços" />
							</a>
						</Link>
					</li>
					<li className={styles.MenuItem}>
						<Link href="/minha-conta/alterar-senha">
							<a className={styles.link}>
								<MyAccountMenuItem icon={<FontAwesomeIcon icon={faLock} />} name="Alterar senha" description="Altere sua senha" />
							</a>
						</Link>
					</li>
				</ul>
			</div>

			<div className="col-12">
				<Button
					fullWidth
					color="primary"
					onClick={() => {
						firebase.auth().signOut().catch(errorLogger);
					}}>
					Sair
				</Button>
			</div>
		</div>
	</div>
);
