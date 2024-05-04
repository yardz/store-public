import React from 'react';
import { Category } from '@lab77store/domain';

import styles from './MenuDesktop.module.scss';
import { MenuDesktopItem } from './MenuDesktopItem';

interface Props {
	categories: Category[];
}
export const MenuDesktop: React.FC<Props> = ({ categories }) => {
	const baseCategories = categories.filter(category => !category.parent);

	return (
		<div className={styles.MenuDesktop}>
			<nav className="navbar navbar-expand-lg navbar-dark" role="navigation">
				<div className="container-fluid">
					<div className="collapse navbar-collapse justify-content-center" id="main_nav">
						<ul className="navbar-nav">
							{baseCategories.map(category => (
								<MenuDesktopItem key={category._id} category={category} categories={categories} />
							))}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};
