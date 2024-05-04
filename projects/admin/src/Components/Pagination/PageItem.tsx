import React from 'react';
import classNames from 'classnames';

interface Props {
	page: number;
	goToPage: (page: number) => void;
	active?: boolean;
}

export const PageItem: React.FC<Props> = ({ page, goToPage, active }) => {
	if (page < 1) return null;
	return (
		<li className={classNames('page-item', { active })}>
			<button className="page-link" onClick={() => goToPage(page)}>
				{page}
			</button>
		</li>
	);
};
