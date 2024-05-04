import React, { useState } from 'react';
import classNames from 'classnames';

import styles from './SlideAfterScreenPosition.module.scss';
import { useComponentDidMount } from '@App/Hooks';

interface Props extends Omit<React.InputHTMLAttributes<HTMLDivElement>, 'id'> {
	id: string;
	top: number;
	parentId?: string;
}

const getWidth = (id: string) => {
	if (typeof document === 'undefined') return 0;
	const element = document.getElementById(id);
	return element?.getBoundingClientRect().width || 0;
};

export const SlideAfterScreenPosition: React.FC<Props> = ({ children, className, id, top, parentId, ...props }) => {
	const [offset, setOffset] = useState<'top' | 'slide' | 'fixedBottom'>('top');

	const contentId = `SlideAfterScreenPosition-container-${id}`;
	let width: string | number = '100%';
	let header = 0;

	if (typeof document !== 'undefined') {
		width = getWidth(id) || '100%';
		header = document.getElementById('store-template-header')?.getBoundingClientRect().height || 0;
	}
	const [elementTop, setElementTop] = useState(header + top);

	useComponentDidMount(() => {
		const scroll = () => {
			const defaultTop = header + top;
			const container = document.getElementById(id);
			const content = document.getElementById(contentId);

			if (!container || !content) return;
			const distance = container.getBoundingClientRect().top;

			/* Bloco destinado para elementos que precisam remover o Position: fixed
			   em uma determinada altura
			 */
			const parentElement = document.getElementById(parentId || '');
			let parentElementHeight = 0;
			if (parentElement) {
				parentElementHeight = parentElement.getBoundingClientRect().height;
			}
			const contentHeight = content.getBoundingClientRect().height;
			/* ---Fim do bloco---*/

			if (distance <= defaultTop) {
				if (parentElementHeight > 0 && distance < 0 && Math.abs(distance) >= parentElementHeight - (defaultTop + contentHeight + 90)) {
					setElementTop(parentElementHeight - (defaultTop + 10));
					setOffset('fixedBottom');
				} else {
					setOffset('slide');
					setElementTop(defaultTop);
				}
			} else {
				setOffset('top');
			}
		};

		window.addEventListener('scroll', scroll);
		return () => window.removeEventListener('scroll', scroll);
	});

	return (
		<div id={id} {...props} className={classNames(styles.SlideAfterScreenPosition, className)}>
			<div
				id={contentId}
				style={{ top: elementTop, width }}
				className={classNames({ [styles.fixed]: offset === 'slide' }, { [styles.fixedBottom]: offset === 'fixedBottom' })}>
				{children}
			</div>
		</div>
	);
};
