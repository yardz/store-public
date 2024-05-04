import React from 'react';
import { Product } from '@lab77store/domain';
import classNames from 'classnames';
import { Accordion, TextContent } from '@App/Components';
import { MeasuresTable } from './MeasuresTable';
import { Hint } from './Hint';

import styles from './ProductDetails.module.scss';

interface Props {
	product: Product;
}

export const ProductDetails: React.FC<Props> = ({ product }) => (
	<section id="ProductDetails" data-testid="ProductDetails" className={styles.ProductDetails}>
		<MeasuresTable className={classNames(styles.title, { [styles.last]: !product.content.hints })} image={product.content.measuresTable} />
		{product.content.description && (
			<Accordion initalize="open" titleClassName={styles.title} title={<span>Detalhes do produto</span>}>
				<TextContent className={styles.content} text={product.content.description} />
			</Accordion>
		)}

		{product.content.sustainability && (
			<Accordion initalize="close" titleClassName={styles.title} title={<span>Sustentabilidade</span>}>
				<TextContent className={styles.content} text={product.content.sustainability} />
			</Accordion>
		)}

		{product.content.hints && (
			<Accordion initalize="open" titleClassName={classNames(styles.title, styles.last)} title={<span>Destaques</span>}>
				<div className={classNames(styles.content, styles.last)}>
					{product.content.hints.map(hint => (
						<Hint key={hint.hint} text={hint.hint} icon={hint.icon} />
					))}
				</div>
			</Accordion>
		)}
	</section>
);
