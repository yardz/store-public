import React, { useMemo, useState } from 'react';
import { Product } from '@lab77store/domain';
import { ProductMessage, SelectProductContext } from './SelectProductContext';
import { useSelectProductOptions } from './useSelectProductOptions';
import { findVariation } from './findVariation';

interface Props {
	product: Product;
}
export const SelectProductProvider: React.FC<Props> = ({ children, product }) => {
	const [messages, setMessages] = useState<ProductMessage[]>([]);
	const [selectProductOptions, dispatchSelectProductOptions] = useSelectProductOptions({ product });
	const variation = useMemo(() => findVariation({ product, selectProductOptions }), [product, selectProductOptions]);

	return (
		<SelectProductContext.Provider value={{ messages, setMessages, selectProductOptions, dispatchSelectProductOptions, variation }}>
			{children}
		</SelectProductContext.Provider>
	);
};
