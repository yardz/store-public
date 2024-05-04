import React, { useMemo } from 'react';

import { PageTitle, Button, Grid, GridPublish } from 'Components';
import { Link, useHistory } from 'react-router-dom';

import { RouteNames } from 'Routes/RouteNames';
import { useCategories } from 'Hooks';
import { cloneDeep, sortBy } from 'lodash';
import { categoriesService } from 'Services/categoriesService';
import { getCategoryFullName, Notifications } from 'Utils';

export const CategoriesList: React.FC = () => {
	const categories = useCategories();
	const history = useHistory();

	const sortItems = useMemo(() => {
		const list = cloneDeep(categories.data || []).map(item => ({
			...item,
			_id: item._id,
			name: item.name,
			fullName: getCategoryFullName({ category: item }),
			sort: item.sort,
			publish: item.publish,
		}));
		return sortBy(list, [
			i => {
				const prefix = i.fullName.split('/');
				if (prefix.length === 1) return prefix[0];
				prefix.pop();
				return prefix.join('/');
			},
			'sort',
		]);
	}, [categories.data]);

	if (categories.error) return <div>failed to load</div>;
	if (categories.isLoading) return <div>loading...</div>;

	const editPublish = async ({ _id, field }: { _id: string; field: 'mobile' | 'desktop' | 'store' }) => {
		const find = categories.data?.find(c => c._id === _id);
		if (!find) throw Error('Category does not exist');
		const update = cloneDeep(find);
		update.publish[field] = !find.publish[field];
		await categoriesService.saveCategory(update);
		await categories.mutate();
	};

	const categoriesList = sortItems.map(item => ({
		id: item._id,
		values: [item.name, item.fullName, item.sort, <GridPublish publish={item.publish} _id={item._id} edit={editPublish} />],
	}));

	const icon = (): JSX.Element => <i className="fa fa-plus" aria-hidden="true" />;
	return (
		<>
			<PageTitle title="Categorias" subtitle="Adicione e gerencie suas categorias" />
			<div className="row">
				<div className="col-md-12">
					<div className="tile">
						<div className="row">
							<div className="col">
								<h3 className="tile-title">Lista de Categorias</h3>
							</div>
							<div className="col text-right">
								<Link to={RouteNames.category.add}>
									<Button label="Cadastrar" icon={icon()} color="primary">
										Cadastrar
									</Button>
								</Link>
							</div>
						</div>
						<Grid
							header={['Categorias Cadastradas', 'Caminho Completo', 'Ordem', 'Exibir', '']}
							items={categoriesList}
							onDelete={async id => {
								await categoriesService.deleteCategory(id);
								await categories.mutate();
								Notifications.warning('Item removido');
							}}
							onEdit={async id => {
								history.push(RouteNames.category.edit.replace(':id', id));
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
};
