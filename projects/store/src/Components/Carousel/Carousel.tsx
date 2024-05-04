import React from 'react';

interface Props {
	_id: string;
	items: JSX.Element[];
}

export const Carousel: React.FC<Props> = ({ _id, items }) => {
	if (items.length === 0) {
		return null;
	}
	if (items.length === 1) {
		return items[0];
	}
	return (
		<div id={_id} className="carousel slide" data-bs-ride="carousel">
			<div className="carousel-inner">
				{items.map((item, key) => (
					<div key={key} className={`carousel-item ${key === 0 ? 'active' : ''}`}>
						{item}
					</div>
				))}
			</div>
			<a className="carousel-control-prev" href={`#${_id}`} role="button" data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true" />
				<span className="visually-hidden">Previous</span>
			</a>
			<a className="carousel-control-next" href={`#${_id}`} role="button" data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true" />
				<span className="visually-hidden">Next</span>
			</a>
		</div>
	);
};
