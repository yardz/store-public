import { FormFields } from 'Components';
import React from 'react';

interface Props {
	prefix: string;
}

export const TwitterCard: React.FC<Props> = ({ prefix }) => {
	return (
		<>
			<div className="row">
				<div className="col">
					<h3 className="tile-title">Twitter Card</h3>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12">
					<FormFields.Input.TextHorizontal label="Title" placeholder="Title" name={`${prefix}.title`} id={`${prefix}.title`} />
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12">
					<FormFields.TextArea id={`${prefix}.description`} name={`${prefix}.description`} label="Description" rows={5} />
				</div>
			</div>
			<div>IMAGEM TWITTER</div>
		</>
	);
};
