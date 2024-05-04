import React from 'react';

import { Click } from 'Types';
interface Item {
	label: string;
	value?: string | number;
	icon?: JSX.Element;
	content?: string;
	link?: string;
	disable?: boolean;
}
interface Props {
	id?: string;
	items: Item[];
	value?: string | number;
	onClick: Click;
	type: 'ListDefault' | 'Active' | 'ListItems';
}

export const List: React.FC<Props> = ({ id, items, value, onClick, type }) => {
	const listElements = () => {
		switch (type) {
			case 'ListDefault':
				return items.map(item => (
					<div className="list-group-item" key={item.label}>
						{!!item.icon && <span>{item.icon} </span>}
						{item.label}
					</div>
				));
			case 'Active':
				return items.map(item => (
					<span
						key={item.value}
						onClick={onClick}
						className={`list-group-item list-group-item-action link ${value === item.value ? 'active' : ''} 
						${!!item.disable ? 'disabled' : ''}`}>
						{item.label}
					</span>
				));
			case 'ListItems':
				return items.map((item, index) => (
					<span
						key={index}
						className={`list-group-item list-group-item-action link ${!!value && value === item.value ? 'active' : ''}`}
						onClick={onClick}>
						{!!item.label && <h4 className="list-group-item-heading">{item.label}</h4>}
						<p className="list-group-item-text">{item.content}</p>
					</span>
				));

			default:
				return;
		}
	};

	return (
		<div className="list-group w-100" id={!!id ? id : ''}>
			{listElements()}
		</div>
	);
};
