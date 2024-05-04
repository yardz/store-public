import React from 'react';
import { ProductAttributes } from '@lab77store/domain';
import classNames from 'classnames';
import styles from './AttributeOptions.module.scss';
import { Accordion } from '@App/Components';

interface Props {
	productAttributes: ProductAttributes;
	selectOption: (attributeId: string) => void;
	attributeId?: string;
}

export const AttributeOptions: React.FC<Props> = ({ productAttributes, attributeId, selectOption }) => {
	if (productAttributes.options.length <= 1) {
		return null;
	}
	return (
		<Accordion initalize="open" titleClassName={styles.title} title={<span>{productAttributes.name}</span>}>
			<div
				className={classNames(styles.AttributeOptions, {
					[styles.tagWithDescription]: productAttributes.type === 'tag-with-description',
					[styles.tag]: productAttributes.type === 'tag',
					[styles.small]: productAttributes.type === 'small',
				})}>
				{productAttributes.options.map(attribute => (
					<button
						type="button"
						key={attribute._id}
						onClick={() => selectOption(attribute._id)}
						className={classNames(styles.btnTag, {
							[styles.selected]: attribute._id === attributeId,
						})}>
						<div className={styles.value}>{attribute.label}</div>
						<div className={styles.description}>{attribute.description}</div>
					</button>
				))}
			</div>
		</Accordion>
	);
};
