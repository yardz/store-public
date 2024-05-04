import React from 'react';

import { PageTitle } from 'Components';

export const Dashboard: React.FC = () => {
	return (
		<>
			<PageTitle
				icon={<i className="fa fa-dashboard" />}
				title="Dashboard"
				subtitle="Aqui virá alguns resumos e informações de dashboard"
			/>
			<div className="row">
				<div className="col-md-12">
					<div className="tile">
						<div className="tile-body">Ainda precisamos decidir isso!</div>
					</div>
				</div>
			</div>
		</>
	);
};
