import { Product, ProductAttributes } from '@lab77store/domain';
import React, { Reducer, useMemo, useReducer } from 'react';

export interface SelectProductOptions {
	attributes: ProductAttributes[];
	selected: { [productAttributeId: string]: string };
	completed: boolean;
}

interface ActionSelectProductOptions {
	type: 'select-prop';
	productAttributeId: string;
	attributeId: string;
}
type Actios = ActionSelectProductOptions;
export type SelectProductOptionsActions = React.Dispatch<Actios>;

const updateCompelted = (state: SelectProductOptions): SelectProductOptions => {
	const completed = state.attributes.reduce((status, atribute) => {
		if (!status) return status;
		if (state.selected[atribute._id] === undefined) return false;
		return true;
	}, true);
	return { ...state, completed };
};

const selectProductOptionsReducer: Reducer<SelectProductOptions, Actios> = (state, action) => {
	switch (action.type) {
		case 'select-prop':
			return updateCompelted({ ...state, selected: { ...state.selected, [action.productAttributeId]: action.attributeId } });
		default:
			return state;
	}
};

interface Args {
	product: Product;
}

export const useSelectProductOptions = ({ product }: Args) => {
	const [selected, completed] = useMemo(() => {
		const attrInitialSelected = {};
		product.options.forEach(atribute => {
			if (atribute.options.length === 1) {
				attrInitialSelected[atribute._id] = atribute.options[0]._id;
			}
		});
		const allSelected = Object.keys(attrInitialSelected).length === product.options.length;
		return [attrInitialSelected, allSelected];
	}, [product]);

	return useReducer(selectProductOptionsReducer, { attributes: product.options, selected, completed });
};
