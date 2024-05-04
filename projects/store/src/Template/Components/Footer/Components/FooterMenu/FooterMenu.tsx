import React from 'react';
import styles from './FooterMenu.module.scss';
import Link from 'next/link';

export const FooterMenu: React.FC = () => (
	<section className={styles.footerMenu}>
		<ul className={styles.menu}>
			<li className={styles.item}>
				<Link href="/a-marca">
					<a title="A Marca">A Marca</a>
				</Link>
			</li>
			<li className={styles.item}>
				<Link href="/a-loja">
					<a title="A LOJA">A LOJA</a>
				</Link>
			</li>
			<li className={styles.item}>
				<Link href="/contato">
					<a title="CONTATO">CONTATO</a>
				</Link>
			</li>
			<li className={styles.item}>
				<Link href="/condicoes-gerais">
					<a title="CONDIÇÕES  GERAIS">CONDIÇÕES GERAIS</a>
				</Link>
			</li>
		</ul>
	</section>
);
