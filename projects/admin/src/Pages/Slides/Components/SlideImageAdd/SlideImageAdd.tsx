import React from 'react';

import { PageTitle } from 'Components';
import { SlideImageForm } from '../SlideImageForm';
import { SlideImage } from '@lab77store/domain';
import { Link } from 'react-router-dom';

import { RouteNames } from 'Routes/RouteNames';

const initialValues: SlideImage = {
	_id: '',
	name: '',
	image: {
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
	url: '',
	slidePosition: '',
	publish: {
		desktop: false,
		mobile: false,
		store: false,
	},
};

export const SlideImageAdd: React.FC = () => {
	return (
		<>
			<PageTitle title="Imagem" subtitle="Adicione e gerencie as suas imagens de slide e banner" />
			<div className="row">
				<div className="col-md-12">
					<div className="tile">
						<div className="row">
							<div className="col">
								<h3 className="tile-title">Adicionar</h3>
							</div>
							<div className="col text-right">
								<Link to={RouteNames.slide.imagesList} className="btn btn-primary">
									<i className="fa fa-long-arrow-left" aria-hidden="true" /> Voltar
								</Link>
							</div>
						</div>
						<SlideImageForm initialValues={initialValues} />
					</div>
				</div>
			</div>
		</>
	);
};
