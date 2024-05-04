import React, { useMemo, useState } from 'react';
import { Category } from '@lab77store/domain';
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import styles from './MenuMobileSubcategories.module.scss';

const MenuMobileLink = dynamic(() => import('./MenuMobileLink').then(mod => mod.MenuMobileLink));

interface Props {
	category: Category;
	categories: Category[];
	deep?: number;
}

export const MenuMobileSubcategories: React.FC<Props> = ({ category, categories, deep = 0 }) => {
	const [open, setOpen] = useState(false);
	const subCategories: Category[] = useMemo(() => categories.filter(c => c.parent === category._id), [categories, category._id]);

	if (!subCategories.length) {
		return (
			<li className={styles.MenuMobileItem} key={category._id}>
				<MenuMobileLink text={category.name} href={`/categoria/${category.ref}`} deep={deep} />
			</li>
		);
	}

	return (
		<li className={styles.MenuMobileItem} key={category._id}>
			<button type="button" className={styles.link} style={{ paddingLeft: `${deep + 1}rem` }} onClick={() => setOpen(!open)}>
				<span>{category.name}</span>
				<span className={styles.icon}>
					<FontAwesomeIcon icon={open ? faAngleDown : faAngleRight} />
				</span>
			</button>

			{open && (
				<ul className={styles.list}>
					<li>
						<MenuMobileLink text={`TODOS EM ${category.name}`} href={`/categoria/${category.ref}`} deep={deep + 1} />
					</li>
					{subCategories.map(subCategory => (
						<MenuMobileSubcategories key={subCategory._id} category={subCategory} categories={categories} deep={deep + 1} />
					))}
				</ul>
			)}
		</li>
	);
};
