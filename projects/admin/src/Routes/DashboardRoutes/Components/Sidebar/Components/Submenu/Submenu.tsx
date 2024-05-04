import React from 'react';
import { useToggle } from 'Hooks/Utils';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { compact, flatten } from 'lodash';

interface SubItem {
	name: string;
	path: string;
	match?: string[];
}

interface Props {
	name: string;
	icon: string;
	itens: SubItem[];
}

export const Submenu: React.FC<Props> = ({ name, icon, itens }) => {
	const [expanded, toggleExpanded] = useToggle();
	const { pathname } = useLocation();
	const paths = itens.map(item => item.path);
	const matchs = flatten(compact(itens.map(item => item.match)));
	const active = paths.includes(pathname) || matchs.filter(match => pathname.includes(match)).length;

	return (
		<li
			className={classNames({
				treeview: true,
				'is-expanded': expanded || active,
			})}>
			<span
				className="app-menu__item link"
				data-toggle="treeview"
				onClick={() => {
					toggleExpanded();
				}}>
				<i className={`app-menu__icon fa ${icon}`} />
				<span className="app-menu__label">{name}</span>
				<i className="treeview-indicator fa fa-angle-right" />
			</span>
			<ul className="treeview-menu">
				{itens.map(item => (
					<li key={`${item.path}-${item.name}`}>
						<Link
							to={item.path}
							className={classNames({
								'treeview-item': true,
								active: item.path === pathname || item?.match?.filter(match => pathname.includes(match)).length,
							})}>
							<i className="icon fa fa-circle-o" /> {item.name}
						</Link>
					</li>
				))}
			</ul>
		</li>
	);
};
