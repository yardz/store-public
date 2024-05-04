import React from 'react';
import { getThumb } from 'Utils/getThumb';
import { PageTitle, Button, Grid, GridPublish } from 'Components';
import { SlideImage } from '@lab77store/domain';
import { Link, useHistory } from 'react-router-dom';

import { RouteNames } from 'Routes/RouteNames';
import { slidesService } from 'Services/slidesService';
import useSWR from 'swr';
import { Notifications } from 'Utils';
import { useSlidePositions } from 'Hooks/Utils/useSlidePositions';
import { cloneDeep } from 'lodash';

export const SlideImageList: React.FC = () => {
	const history = useHistory();
	const images = useSWR<SlideImage[]>('slide-images', () => slidesService.getImages());
	const positions = useSlidePositions();

	const editPublish = async ({ _id, field }: { _id: string; field: 'mobile' | 'desktop' | 'store' }) => {
		const find = images.data?.find(c => c._id === _id);
		if (!find) throw Error('Category does not exist');
		const update = cloneDeep(find);
		update.publish[field] = !find.publish[field];
		await slidesService.saveImage(update);
		await images.mutate();
	};

	if (images.error) return <div>failed to load</div>;
	if (!images.error && !images.data) return <div>loading...</div>;

	const icon = (): JSX.Element => <i className="fa fa-plus" aria-hidden="true" />;

	return (
		<>
			<PageTitle title="Imagens" subtitle="Adicione e gerencie seus imagens de slide e banners" />
			<div className="row">
				<div className="col-md-12">
					<div className="tile">
						<div className="row">
							<div className="col">
								<h3 className="tile-title">Lista de images de Slide</h3>
							</div>
							<div className="col text-right">
								<Link to={RouteNames.slide.imagesAdd}>
									<Button label="Cadastrar" icon={icon()} color="primary">
										Cadastrar
									</Button>
								</Link>
							</div>
						</div>
						<Grid
							header={['Thumbnail', 'Titulo', 'Posição', 'Publicado', '']}
							items={
								images.data?.map(item => ({
									id: item._id,
									values: [
										getThumb(item.image),
										item.name,
										positions.data?.find(p => p._id === item.slidePosition)?.name,
										<GridPublish publish={item.publish} _id={item._id} edit={editPublish} />,
									],
								})) || []
							}
							onDelete={async (id: string) => {
								await slidesService.deleteImage(id);
								await images.mutate();
								Notifications.warning('Item removido');
							}}
							onEdit={async id => {
								history.push(`/slide-images/edit/${id}`);
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
};
