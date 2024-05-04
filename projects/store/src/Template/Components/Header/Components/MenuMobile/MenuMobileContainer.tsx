import React, { useContext, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import { Category } from '@lab77store/domain';
import styles from './MenuMobileContainer.module.scss';
import dynamic from 'next/dynamic';
import { HeaderContext } from '@App/Template/Components/Header/HeaderContext';

const MenuMobileSubcategories = dynamic(() => import('./MenuMobileSubcategories').then(mod => mod.MenuMobileSubcategories));
const MenuMobileCategories = dynamic(() => import('./MenuMobileCategories').then(mod => mod.MenuMobileCategories));
const MenuMobileLink = dynamic(() => import('./MenuMobileLink').then(mod => mod.MenuMobileLink));

interface Props {
	categories: Category[];
}

export const MenuMobileContainer: React.FC<Props> = ({ categories }) => {
	const {
		menu: { mobile },
	} = useContext(HeaderContext);

	const [selectedCategoryId, setSelectedCategoryId] = useState('');
	const subCategories: Category[] = useMemo(() => {
		if (!selectedCategoryId) return [];
		return categories.filter(c => c.parent === selectedCategoryId);
	}, [selectedCategoryId, categories]);

	const selectedCategory: Category | undefined = useMemo(() => {
		if (!selectedCategoryId) return undefined;
		return categories.find(c => c._id === selectedCategoryId);
	}, [selectedCategoryId, categories]);

	const baseCategories: Category[] = useMemo(() => categories.filter(c => !['novidades', 'mais-vendidos'].includes(c.ref)), [categories]);
	const dynamicCategories = categories.filter(
		c => !c.parent && c.name.toLowerCase() !== 'masculino' && c.name.toLowerCase() !== 'feminino',
	);
	useEffect(() => {
		if (mobile) setSelectedCategoryId('');
	}, [mobile]);

	return (
		<div className={classNames(styles.MenuMobileContainer, { [styles.show]: mobile })}>
			<MenuMobileCategories categories={baseCategories} selectedCategoryId={selectedCategoryId} selectCategory={setSelectedCategoryId} />

			<div className={styles.menuItem}>&nbsp;</div>

			{!!selectedCategory && (
				<>
					<ul className={styles.menuList}>
						<li>
							<MenuMobileLink text={`TODOS EM ${selectedCategory.name}`} href={`/categoria/${selectedCategory.ref}`} />
						</li>
						{subCategories.map(subCategory => (
							<MenuMobileSubcategories key={subCategory._id} category={subCategory} categories={categories} />
						))}
					</ul>
					<div className={styles.menuItem}>&nbsp;</div>
				</>
			)}

			<ul className={styles.menuList}>
				{dynamicCategories.map(subCategory => (
					<MenuMobileSubcategories key={subCategory._id} category={subCategory} categories={categories} />
				))}
			</ul>
			<div className={styles.menuItem}>&nbsp;</div>
			<ul className={styles.menuList}>
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
};
