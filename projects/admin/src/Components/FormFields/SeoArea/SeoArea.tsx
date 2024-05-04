import { TextArea } from '../TextArea';
import { TextEditor } from '../TextEditor';

import React from 'react';

interface Props {
	prefix?: string;
}

export const SeoArea: React.FC<Props> = ({ prefix }) => {
	const name = prefix ? `${prefix}.prefix` : 'seo';
	return (
		<div className="col-md-12">
			<div className="tile">
				<div className="row">
					<div className="col">
						<h3 className="tile-title">SEO</h3>
					</div>
					<div className="col-lg-12">
						<TextArea
							id="textarea-categorie-meta-description"
							name={`${name}.metaDescription`}
							label="Meta-description"
							rows={5}
							placeholder="Meta-description"
						/>
					</div>
					<div className="col-lg-12">
						<TextEditor id="text-02" name={`${name}.textSeo`} label="Texto para SEO" height={300} />
					</div>
				</div>
			</div>
		</div>
	);
};
