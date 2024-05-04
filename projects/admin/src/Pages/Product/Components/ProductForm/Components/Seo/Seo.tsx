import React from 'react';
import { FormFields } from 'Components';
import { FacebookCard } from './FacebookCard';
import { TwitterCard } from './TwitterCard';

interface Props {
	prefix: string;
}

export const Seo: React.FC<Props> = ({ prefix }) => {
	return (
		<div className="tile">
			<div className="row">
				<div className="col">
					<h3 className="tile-title">SEO</h3>
				</div>
				<div className="text-right col-6 col-sm-6 col-lg-6">
					<FormFields.Input.Toggle id={`${prefix}.pinterest`} label="Compartilhar no Pinterest" name={`${prefix}.pinterest`} large />
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12">
					<FormFields.Input.TextHorizontal label="Title" placeholder="Title" name={`${prefix}.title`} id="productSEO-title" />
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12">
					<FormFields.TextArea
						id={`${prefix}.meta`}
						name={`${prefix}.meta`}
						label="Meta description"
						rows={5}
						placeholder="Meta description"
					/>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-12">
					<FormFields.Input.TextHorizontal
						label="Keywords"
						placeholder="Insira as palavras chaves do produto"
						name={`${prefix}.keyWords`}
						id={`${prefix}.keyWords`}
					/>
				</div>
			</div>
			<hr />
			<TwitterCard prefix={`${prefix}.twitter`} />
			<hr />
			<FacebookCard prefix={`${prefix}.facebook`} />
		</div>
	);
};
