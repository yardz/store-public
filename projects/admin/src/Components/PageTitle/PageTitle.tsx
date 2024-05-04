import React from 'react';
import { Breadcrumb, BreadcrumbPage } from '../Breadcrumb';

interface Props {
	icon?: JSX.Element;
	title: string;
	subtitle: string;
	pages?: BreadcrumbPage[];
}

export const PageTitle: React.FC<Props> = ({ icon, title, subtitle, pages }) => {
	return (
		<div className="app-title">
			<div>
				<h1 className="font-weight-bold">
					{icon} {title}
				</h1>
				<p>{subtitle}</p>
			</div>
			<Breadcrumb pages={pages} />
		</div>
	);
};
