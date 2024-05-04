import React from 'react';
import { Category } from '@lab77store/domain';
import Link from 'next/link';

import styles from './MenuDesktopSubItem.module.scss';
import classNames from 'classnames';

interface Props {
	category: Category;
	categories: Category[];
}

export const MenuDesktopSubItem: React.FC<Props> = ({ category, categories }) => {
	const subategories = categories.filter(cat => cat.parent === category._id);
	if (subategories.length === 0) {
		return (
			<li>
				<Link href={`/categoria/${category.ref}`}>
					<a className="dropdown-item">{category.name}</a>
				</Link>
			</li>
		);
	}
	return (
		<li>
			<Link href={`/categoria/${category.ref}`}>
				<a className="dropdown-item">
					{category.name} <i className="icon-arrow" />
				</a>
			</Link>
			<ul className={classNames(styles.MenuDesktopSubItem, 'submenu', 'dropdown-menu')}>
				{subategories.map(cat => (
					<MenuDesktopSubItem key={cat._id} category={cat} categories={categories} />
				))}
			</ul>
		</li>
	);
};
