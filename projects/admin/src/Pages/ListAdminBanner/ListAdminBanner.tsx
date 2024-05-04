import React from 'react';

import { PageTitle, Button, Table, FormFields, IconButton, Loading } from 'Components';
const InputSelectForm = FormFields.Input.Select;

interface Props {}

export const ListAdminBanner: React.FC<Props> = () => {
	const ButtonsActions = () => {
		return (
			<>
				<IconButton
					onClick={() => {
						// Sem ação
					}}
					icon={<i className="fa fa-pencil" />}
				/>
				<IconButton
					onClick={() => {
						// Sem ação
					}}
					icon={<i className="fa fa-trash" />}
				/>
			</>
		);
	};

	const Images = (src: string) => {
		return <img src={src} alt="" height={84} />;
	};

	const header = ['Thumbnail', 'Título', 'Posição', 'Publicado', 'Tamanho', ''];
	const body = [
		[
			Images('https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png'),
			'Título',
			'Posição',
			'Publicado',
			'Tamanho',
			ButtonsActions(),
		],
	];
	return (
		<>
			<PageTitle icon={<i className="fa fa-dashboard" />} title="Banner" subtitle="Adicione e gerencie seus banners" />
			<div className="tile p-4">
				<div className="row">
					<div className="d-flex justify-content-between col-md-12">
						<div>
							<h1>Banners Cadastrados</h1>
						</div>
						<div>
							<Button label="Adicionar" color="primary" icon={<i className="fa fa-plus" />} />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="mt-2 mb-4 col-md-12">
						<div className="float-right">
							<InputSelectForm
								name="filter-position"
								label="Filtrar por posição"
								placeholder="Filtrar por posição"
								options={[
									{ value: 1, label: 'posição 1' },
									{ value: 2, label: 'posição 2' },
									{ value: 3, label: 'posição 3' },
								]}
							/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<Table header={header} body={body} id="table-list-banner" striped hover />
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 d-flex justify-content-center">
						<Button
							label="Carregar mais"
							color="primary"
							onClick={() => {
								// Sem ação
							}}
							icon={<i className="fa fa-plus" />}
						/>
					</div>
					<div className="col-md-12 mb-3">
						<Loading label="Carregando" />
					</div>
				</div>
			</div>
		</>
	);
};
