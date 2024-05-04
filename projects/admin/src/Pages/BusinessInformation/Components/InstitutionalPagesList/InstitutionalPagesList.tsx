import React from 'react';
import { InstitutionalPage } from '@lab77store/domain';
import { Button, Grid, PageTitle } from 'Components';
import { Link, useHistory } from 'react-router-dom';
import { RouteNames } from 'Routes/RouteNames';
import { institutionalPagesService } from 'Services';
import { Notifications } from 'Utils';
import useSWR from 'swr';

export const InstitutionalPagesList: React.FC = () => {
	const pages = useSWR<InstitutionalPage[]>('get-institutional-pages', () => institutionalPagesService.getInstitutionalPages());
	const history = useHistory();

	if (pages.error) return <div>failed to load</div>;
	if (!pages.error && pages.data === undefined) return <div>loading...</div>;

	const list = pages.data?.map(item => ({ id: item._id, values: [item.name, item.ref] })) || [];

	const icon = (): JSX.Element => <i className="fa fa-plus" aria-hidden="true" />;
	return (
		<>
			<PageTitle title="Páginas Institucionais" subtitle="Adicione e gerencie suas páginas institucionais" />
			<div className="row">
				<div className="col-md-12">
					<div className="tile">
						<div className="row">
							<div className="col">
								<h3 className="tile-title">Lista de Páginas Institucionais</h3>
							</div>
							<div className="col text-right">
								<Link to={RouteNames.businessInformation.institutionalPages.add}>
									<Button label="Cadastrar" icon={icon()} color="primary">
										Cadastrar
									</Button>
								</Link>
							</div>
						</div>
						<Grid
							header={['Nome', 'Ref', '']}
							items={list}
							onDelete={async id => {
								await institutionalPagesService.deleteInstitutionalPage(id);
								await pages.mutate();
								Notifications.warning('Item removido');
							}}
							onEdit={async id => {
								history.push(RouteNames.businessInformation.institutionalPages.edit.replace(':id', id));
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
};
