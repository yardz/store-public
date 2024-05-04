import React, { CSSProperties } from 'react';

import { Button } from 'Components/Button';
import { ThemeColors } from 'Types';

type Size = 'small' | 'medium' | 'large' | 'extra-large';

interface ModalButton {
	text?: string;
	onClick: () => void;
	type?: 'button' | 'submit' | 'reset';
	color?: ThemeColors;
	disabled?: boolean;
}
interface Props {
	title?: string;
	size?: Size;
	close: ModalButton;
	confirm?: ModalButton;
	visible: boolean;
}

const style: CSSProperties = {
	position: 'fixed',
	top: 0,
	right: 0,
	left: 0,
	bottom: 0,
	zIndex: 1070,
	display: 'block',
};

const sizeModal = (size: Size) => {
	switch (size) {
		case 'small':
			return {
				contentSize: 'col-md-3 col-sm-12',
				dialogSize: 'modal-dialog modal-sm',
			};
		case 'medium':
			return {
				contentSize: 'col-md-6 col-sm-12',
				dialogSize: 'modal-dialog',
			};
		case 'large':
			return {
				contentSize: 'col-md-8 col-sm-12 col-lg-6',
				dialogSize: 'modal-dialog modal-lg',
			};
		case 'extra-large':
			return {
				contentSize: 'col-md-12 col-md-12 col-lg-8',
				dialogSize: 'modal-dialog modal-xl',
			};
	}
};

export const Modal: React.FC<Props> = ({ title, close, confirm, size = 'medium', visible, children }) => {
	if (!visible) {
		return null;
	}

	const { contentSize, dialogSize } = sizeModal(size);

	return (
		<div className={contentSize}>
			<div className="modal-backdrop fade show" />
			<div className="modal" style={style}>
				<div className={dialogSize} role="document">
					<div className="modal-content">
						{!!title && (
							<div className="modal-header">
								<h5 className="modal-title">{title}</h5>
								<button className="close" type="button" data-dismiss="modal" aria-label="Close" onClick={close.onClick}>
									<span aria-hidden="true">×</span>
								</button>
							</div>
						)}
						<div className="modal-body" style={{ maxHeight: '70vh', overflow: 'scroll' }}>
							{children}
						</div>

						<div className="modal-footer">
							<Button
								className="border-primary"
								type={close.type ? close.type : 'button'}
								onClick={close.onClick}
								color={close.color ? close.color : 'white'}
								label={!!close.text ? close.text : 'Cancelar'}
								disabled={close.disabled}
							/>
							{!!confirm && (
								<Button
									type={close.type ? close.type : 'button'}
									onClick={confirm.onClick}
									color={confirm.color ? confirm.color : 'primary'}
									label={!!confirm.text ? confirm.text : 'Confirmar'}
									disabled={confirm.disabled}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
