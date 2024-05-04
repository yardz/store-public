import React from 'react';
import dynamic from 'next/dynamic';

import styles from './SideMenuDesktop.module.scss';

const MenuMobileLink = dynamic(() => import('./SideMenuDesktopLink').then(mod => mod.MenuMobileLink));

export const SideMenuDesktop: React.FC = () => (
	<div className={styles.SideMenuDesktop}>
		<a className={styles.linkSideMenu} href="#" data-bs-toggle="dropdown" aria-expanded="false">
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fas"
				data-icon="bars"
				className="svg-inline--fa fa-bars fa-w-14 "
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 448 512">
				<path
					fill="currentColor"
					d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
				/>
			</svg>
		</a>
		<ul className="dropdown-menu">
			<li>
				<MenuMobileLink text="A Loja" href="/a-loja" />
			</li>
			<li>
				<MenuMobileLink text="A Marca" href="/a-marca" />
			</li>
			<li>
				<MenuMobileLink text="Contato" href="/contato" />
			</li>
			<li>
				<MenuMobileLink text="Condições Gerais" href="/condicoes-gerais" />
			</li>
			<li>
				<MenuMobileLink text="Blog" href="https://labsetesete.tumblr.com/" target="_blank" />
			</li>
		</ul>
	</div>
);
