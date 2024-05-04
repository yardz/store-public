import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

interface Props {
	name: string;
	icon: string;
	path: string;
	alias?: string[];
}

export const MenuItem: React.FC<Props> = ({ name, icon, path, alias }) => {
	const { pathname } = useLocation();
	const paths = alias || [];
	paths.push(path);
	const active = paths.includes(pathname);
	return (
		<Link
			to={path}
			className={classNames({
				'app-menu__item': true,
				active,
			})}>
			<i className={`app-menu__icon fa ${icon}`} />
			<span className="app-menu__label">{name}</span>
		</Link>
	);
};
