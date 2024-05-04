import React from 'react';
import { Category } from '@lab77store/domain';
import styles from './MenuMobileCategories.module.scss';
import classNames from 'classnames';

interface Props {
	categories: Category[];
	selectedCategoryId: string;
	selectCategory: (categoryId: string) => void;
}

export const MenuMobileCategories: React.FC<Props> = ({ categories, selectCategory, selectedCategoryId }) => {
	const baseCategories = categories.filter(
		c => (!c.parent && c.name.toLowerCase() === 'masculino') || (!c.parent && c.name.toLowerCase() === 'feminino'),
	);
	return (
		<ul className={styles.MenuMobileCategories}>
			{baseCategories.map(category => (
				<li className={classNames(styles.item, { [styles.selected]: selectedCategoryId === category._id })} key={category._id}>
					<button type="button" onClick={() => selectCategory(category._id)}>
						{category.name}
					</button>
				</li>
			))}
		</ul>
	);
};
