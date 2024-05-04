import React from 'react';
import { Category } from '@lab77store/domain';
import Link from 'next/link';

import { MenuDesktopSubItem } from './MenuDesktopSubItem';

interface Props {
	category: Category;
	categories: Category[];
}

export const MenuDesktopItem: React.FC<Props> = ({ category, categories }) => {
	const subategories = categories.filter(cat => cat.parent === category._id);
	if (subategories.length === 0) {
		return (
			<li className="nav-item">
				<Link href={`/categoria/${category.ref}`}>
					<a className="nav-link">{category.name}</a>
				</Link>
			</li>
		);
	}
	return (
		<li className="nav-item dropdown hover">
			<a className="nav-link" href="#" data-bs-toggle="dropdown">
				{category.name}
			</a>

			<ul className="dropdown-menu">
				<li>
					<Link href={`/categoria/${category.ref}`}>
						<a className="dropdown-item">TODOS</a>
					</Link>
				</li>
				{subategories.map(cat => (
					<MenuDesktopSubItem key={cat._id} category={cat} categories={categories} />
				))}
			</ul>
		</li>
	);
};
