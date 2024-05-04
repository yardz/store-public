import classNames from 'classnames';
import React from 'react';
import { PageItem } from './PageItem';

interface Props {
	page: number;
	lastPage: number;
	goToPage: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({ page, lastPage, goToPage }) => {
	return (
		<ul className="pagination justify-content-end">
			<li className={classNames('page-item', { disabled: page === 1 })}>
				<button className="page-link" onClick={() => goToPage(1)}>
					<i className="fa fa-angle-double-left" aria-hidden="true" />
				</button>
			</li>
			<li className={classNames('page-item', { disabled: page === 1 })}>
				<button className="page-link" onClick={() => goToPage(page - 1)}>
					<i className="fa fa-angle-left" aria-hidden="true" />
				</button>
			</li>

			<PageItem goToPage={goToPage} page={page - 5} />
			<PageItem goToPage={goToPage} page={page - 4} />
			<PageItem goToPage={goToPage} page={page - 3} />
			<PageItem goToPage={goToPage} page={page - 2} />
			<PageItem goToPage={goToPage} page={page - 1} />
			<PageItem goToPage={goToPage} page={page} active />
			{lastPage >= page + 1 && <PageItem goToPage={goToPage} page={page + 1} />}
			{lastPage >= page + 2 && <PageItem goToPage={goToPage} page={page + 2} />}
			{lastPage >= page + 3 && <PageItem goToPage={goToPage} page={page + 3} />}
			{lastPage >= page + 4 && <PageItem goToPage={goToPage} page={page + 4} />}
			{lastPage >= page + 5 && <PageItem goToPage={goToPage} page={page + 5} />}

			<li className={classNames('page-item', { disabled: page === lastPage })}>
				<button className="page-link" onClick={() => goToPage(page + 1)}>
					<i className="fa fa-angle-right" aria-hidden="true" />
				</button>
			</li>
			<li className={classNames('page-item', { disabled: page === lastPage })}>
				<button className="page-link" onClick={() => goToPage(lastPage)}>
					<i className="fa fa-angle-double-right" aria-hidden="true" />
				</button>
			</li>
		</ul>
	);
};
