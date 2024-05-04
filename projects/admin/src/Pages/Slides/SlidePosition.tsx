import React from 'react';

import { PageTitle, Button, Grid } from 'Components';
import { useSlidePositions, useState } from 'Hooks';
import { SlidePositionForm } from './Components/SlidePositionForm';
import { SlidePosition as ISlidePosition } from '@lab77store/domain';

import { slidesService } from 'Services/slidesService';
import { Notifications } from 'Utils';

const initialValues: ISlidePosition = { _id: '', name: '', type: 'banner', rows: { mobile: 1, desktop: 1 } };

export const SlidePosition: React.FC = () => {
	const [form, setForm] = useState({ open: false, selected: '' });
	const positions = useSlidePositions();

	if (positions.error) return <div>failed to load</div>;
	if (positions.isLoading) return <div>loading...</div>;

	const selectedPlace = positions.data?.find(i => i._id === form.selected) || initialValues;
	const icon = (): JSX.Element => <i className="fa fa-plus" aria-hidden="true" />;

	return (
		<>
			<PageTitle title="Posições" subtitle="Adicione e gerencie os seus banners e slides" />
			<div className="row">
				<div className="col-md-12">
					<div className="tile">
						<div className="row">
							<div className="col">
								<h3 className="tile-title">Lista de Posições</h3>
							</div>
							<div className="col text-right">
								<Button
									label="Cadastrar"
									icon={icon()}
									color="primary"
									onClick={() => {
										setForm({ open: true, selected: '' });
									}}>
									Cadastrar
								</Button>
							</div>
						</div>
						<SlidePositionForm
							initialValues={selectedPlace}
							showModal={form.open}
							closeModal={() => {
								setForm({ open: false, selected: '' });
								positions.mutate().then().catch();
							}}
						/>
						<Grid
							header={['Nome', 'Tipo', 'Fotos por linha mobile', 'Fotos por linha desktop', '']}
							items={
								positions.data?.map(item => ({
									id: item._id,
									values: [item.name, item.type.toUpperCase(), item.rows.mobile, item.rows.desktop],
								})) || []
							}
							onDelete={async (id: string) => {
								await slidesService.deletePosition(id);
								await positions.mutate();
								Notifications.warning('Item removido');
							}}
							onEdit={async selected => {
								setForm({ open: true, selected });
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
};
