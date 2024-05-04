import React from 'react';

interface Props {
	children: JSX.Element | JSX.Element[];
}

export const CheckoutContainer: React.FC<Props> = ({ children }) => (
	<div className="container-fluid g-0 overflow-hidden">
		<div className="row justify-content-center">
			<div className="col-12 col-lg-10">{children}</div>
		</div>
	</div>
);
