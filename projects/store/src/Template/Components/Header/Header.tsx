import React, { useMemo } from 'react';
import classNames from 'classnames';
import { ShowOnDevice } from '@App/Components/ShowOnDevice';
import { Category } from '@lab77store/domain';
import dynamic from 'next/dynamic';
import { HeaderProvider } from './HeaderContext';
import styles from './Header.module.scss';
import { sortBy } from 'lodash';

const MenuMobile = dynamic(() => import('./Components').then(mod => mod.MenuMobile));
const SearchIcon = dynamic(() => import('./Components').then(mod => mod.SearchIcon));
const Logo = dynamic(() => import('./Components').then(mod => mod.Logo));
const LoginIcon = dynamic(() => import('./Components').then(mod => mod.LoginIcon));
const CartIcon = dynamic(() => import('./Components').then(mod => mod.CartIcon));
const MenuDesktop = dynamic(() => import('./Components').then(mod => mod.MenuDesktop));
const SideMenuDesktop = dynamic(() => import('./Components').then(mod => mod.SideMenuDesktop));

interface Props {
	categories: Category[];
}
export const Header: React.FC<Props> = ({ categories }) => {
	const mobileCategories = useMemo(() => {
		const list = categories.filter(category => category.publish.mobile && category.ref !== 'home') || [];
		return sortBy(list, ['sort']);
	}, [categories]);

	const desktopCategories = useMemo(() => {
		const list = categories.filter(category => category.publish.desktop && category.ref !== 'home') || [];
		return sortBy(list, ['sort']);
	}, [categories]);

	return (
		<HeaderProvider>
			<header id="store-template-header" className={classNames(styles.header)}>
				<div className={styles.firstLine}>
					<div className={styles.sideArea}>
						<ShowOnDevice.ShowMobile>
							<MenuMobile categories={mobileCategories} />
						</ShowOnDevice.ShowMobile>
						<ShowOnDevice.ShowDesktop>
							<SideMenuDesktop />
						</ShowOnDevice.ShowDesktop>
						<div>
							<SearchIcon />
						</div>
					</div>

					<div>
						<Logo />
					</div>
					<div className={styles.sideArea}>
						<div>
							<LoginIcon />
						</div>
						<div>
							<CartIcon />
						</div>
					</div>
				</div>
				<ShowOnDevice.ShowDesktop>
					<div className={styles.divider} />
					<MenuDesktop categories={desktopCategories} />
				</ShowOnDevice.ShowDesktop>
			</header>
		</HeaderProvider>
	);
};
