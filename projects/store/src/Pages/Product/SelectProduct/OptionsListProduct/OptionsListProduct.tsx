import React, { useContext } from 'react';
import { SelectProductContext } from '../SelectProductContext';
import { AttributeOptions } from './AttributeOptions';

interface Props {}

export const OptionsListProduct: React.FC<Props> = () => {
	const { selectProductOptions, dispatchSelectProductOptions } = useContext(SelectProductContext);
	return (
		<section id="OptionsListProduct">
			{selectProductOptions.attributes.map(productAttributes => (
				<AttributeOptions
					key={productAttributes._id}
					productAttributes={productAttributes}
					attributeId={selectProductOptions.selected[productAttributes._id]}
					selectOption={(attributeId: string) =>
						dispatchSelectProductOptions({ type: 'select-prop', productAttributeId: productAttributes._id, attributeId })
					}
				/>
			))}
		</section>
	);
};
