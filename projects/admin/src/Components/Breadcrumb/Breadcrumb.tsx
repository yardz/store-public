import React from 'react';
import { Link } from 'react-router-dom';

export interface BreadcrumbPage {
	path: string;
	name: string;
}
interface Props {
	pages?: BreadcrumbPage[];
}

export const Breadcrumb: React.FC<Props> = ({ pages }) => {
	return (
		<ul className="app-breadcrumb breadcrumb">
			<li className="breadcrumb-item">
				<i className="fa fa-home fa-lg" />
			</li>
			{!!pages &&
				pages.map(page => (
					<li className="breadcrumb-item">
						<Link to={page.path}>{page.name}</Link>
					</li>
				))}
		</ul>
	);
};
