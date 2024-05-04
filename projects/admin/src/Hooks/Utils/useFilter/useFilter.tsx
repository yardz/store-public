import React from 'react';
import { useState } from '../useState';
interface Option {
	value: string | number;
	label?: string;
}

export interface Filter {
	field: JSX.Element;
	value: string;
}
// Talvez formatar este?
// não use os inputs que existem na pasta de componentes pois eles estão atrelados ao formik. Esse aqui vamos usar inputs aqui dentro mesmo
export const useFilter = (placeholder: string, options?: Option[]): Filter => {
	const [value, setState] = useState('');
	const field = !!options ? (
		<select onChange={e => setState(e.target.value)}>
			<option value="">{placeholder}</option>
			{options.map(option => (
				<option key={option.value} value={option.value}>
					{option.label || option.value}
				</option>
			))}
		</select>
	) : (
		<input placeholder={placeholder} onChange={e => setState(e.target.value)} />
	);
	return { field, value };
};
