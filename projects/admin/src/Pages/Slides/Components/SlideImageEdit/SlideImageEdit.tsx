import React from 'react';

import { PageTitle } from 'Components';
import { SlideImageForm } from '../SlideImageForm';
import { SlideImage } from '@lab77store/domain';
import { Link, useParams } from 'react-router-dom';

import { RouteNames } from 'Routes/RouteNames';
import useSWR from 'swr';
import { slidesService } from 'Services/slidesService';

export const SlideImageEdit: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const image = useSWR<SlideImage>(['slide-images', id], (...keys) => slidesService.getImage(keys[1]));

	if (image.error) return <div>failed to load</div>;
	if (!image.error && !image.data) return <div>loading...</div>;

	return (
		<>
			<PageTitle title="Imagem" subtitle="Edite e gerencie as suas imagens de slide e banner" />
			<div className="row">
				<div className="col-md-12">
					<div className="tile">
						<div className="row">
							<div className="col">
								<h3 className="tile-title">Editar</h3>
							</div>
							<div className="col text-right">
								<Link to={RouteNames.slide.imagesList} className="btn btn-primary">
									<i className="fa fa-long-arrow-left" aria-hidden="true" /> Voltar
								</Link>
							</div>
						</div>
						{image.data && (
							<SlideImageForm
								onSuccess={() => {
									image.mutate().then().catch();
								}}
								initialValues={image.data}
							/>
						)}
					</div>
				</div>
			</div>
		</>
	);
};
