import React, { useState } from 'react';
import classNames from 'classnames';

import styles from './Accordion.module.scss';

interface Props {
	title: string | number | JSX.Element;
	titleClassName?: string;
	children: JSX.Element | JSX.Element[];
	initalize?: 'open' | 'close';
	inverse?: boolean;
	disableClosableIcon?: boolean;
}

export const Accordion: React.FC<Props> = ({ children, title, titleClassName, initalize, inverse, disableClosableIcon }) => {
	const [expanded, setExpanded] = useState(initalize === 'open');

	const titleContent = (
		<div className="col-12">
			<button type="button" className={classNames(styles.btn, titleClassName)} onClick={() => setExpanded(!expanded)}>
				<div className="container-fluid g-0 overflow-hidden">
					<div className="row g-1">
						<div className={classNames({ 'col-11': !disableClosableIcon, 'col-12': disableClosableIcon })}>{title}</div>
						{!disableClosableIcon && (
							<div className="col-1">
								<div className="text-end">{expanded ? '-' : '+'}</div>
							</div>
						)}
					</div>
				</div>
			</button>
		</div>
	);

	return (
		<div className="container-fluid g-0 overflow-hidden" data-testid="Accordion">
			<div className="row g-0">
				{!inverse && titleContent}
				<div className="col-12">
					<div className={classNames({ 'd-none': !expanded })} aria-expanded={expanded}>
						{children}
					</div>
				</div>
				{!!inverse && titleContent}
			</div>
		</div>
	);
};
