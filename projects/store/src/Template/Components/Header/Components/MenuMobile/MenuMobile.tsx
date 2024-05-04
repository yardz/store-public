import React, { useContext, useEffect } from 'react';
import { HeaderContext } from '@App/Template/Components/Header/HeaderContext';
import { Category } from '@lab77store/domain';
import styles from './MenuMobile.module.scss';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const MenuIconButton = dynamic(() => import('./MenuIconButton').then(mod => mod.MenuIconButton));
const MenuMobileContainer = dynamic(() => import('./MenuMobileContainer').then(mod => mod.MenuMobileContainer));
interface Props {
	categories: Category[];
}
export const MenuMobile: React.FC<Props> = ({ categories }) => {
	const { menu, setMenu } = useContext(HeaderContext);
	const router = useRouter();

	useEffect(() => {
		setMenu({ mobile: false, search: false });
	}, [router, setMenu]);
	return (
		<div className={styles.MenuMobile}>
			<MenuIconButton onClick={() => setMenu({ mobile: !menu.mobile, search: false })} />
			<MenuMobileContainer categories={categories} />
		</div>
	);
};
