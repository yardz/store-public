import React from 'react';

import { PageTitle } from 'Components';
import { ProductForm } from '../Components';
import { ProductAdmin } from '@lab77store/domain';

const initialValues: ProductAdmin = {
	_id: '',
	name: '',
	ref: '',
	order: 0,
	categories: [],
	active: true,
	variations: [],
	catalogImages: {
		default: {
			cover: {
				desktop: {
					file: {
						asset_id: '',
						public_id: '',
						resource_type: '',
						url: '',
					},
					alt: '',
				},
				mobile: {
					file: {
						asset_id: '',
						public_id: '',
						resource_type: '',
						url: '',
					},
					alt: '',
				},
			},
		},
	},
};

export const ProductAdd: React.FC = () => {
	return (
		<>
			<PageTitle title="Produtos" subtitle="Adicione e gerencie seus produtos" />
			<div className="row">
				<div className="col-md-12">
					<ProductForm initialValues={initialValues} />
				</div>
			</div>
		</>
	);
};
