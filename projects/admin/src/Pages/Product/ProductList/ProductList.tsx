import React, { useState } from 'react';

import { PageTitle, Button, Grid, ToggleButton, Pagination } from 'Components';
import { Link, useHistory } from 'react-router-dom';

import { RouteNames } from 'Routes/RouteNames';
import { usePagination, useProducts } from 'Hooks';
import { cloneDeep } from 'lodash';
import { productsService } from 'Services/productsService';
import { Notifications } from 'Utils';

import { ProductAdminFilter } from '@lab77store/domain';

export const ProductList: React.FC = () => {
	const [pagination, goToPage] = usePagination(20);
	const [filter, setFilter] = useState<ProductAdminFilter>({ ref: '', name: '', active: undefined });
	const products = useProducts(pagination, filter);
	const history = useHistory();

	if (products.error) return <div>failed to load</div>;
	if (products.isLoading) return <div>loading...</div>;

	const updateActivation = async ({ _id }: { _id: string }) => {
		const find = products.data?.items.find(c => c._id === _id);
		if (!find) throw Error('Product does not exist');
		const update = cloneDeep(find);
		update.active = !update.active;
		await productsService.saveProduct(update);
		await products.mutate();
	};

	const list =
		products.data?.items.map(item => ({
			id: item._id,
			values: [
				item.name,
				item.ref,
				item.order,
				<ToggleButton
					name={`active-${item._id}`}
					checked={item.active}
					onChange={() => {
						updateActivation({ _id: item._id }).catch(() => {
							Notifications.error(`Erro ao tentar ${item.active ? 'desativar' : 'ativar'} o produto`);
						});
					}}
				/>,
			],
		})) || [];

	const icon = (): JSX.Element => <i className="fa fa-plus" aria-hidden="true" />;
	return (
		<>
			<PageTitle title="Produtos" subtitle="Adicione e seus produtos" />
			<div className="row">
				<div className="col-md-12">
					<div className="tile">
						<div className="row">
							<div className="col">
								<h3 className="tile-title">Lista de Produtos</h3>
							</div>
							<div className="col text-right">
								<Link to={RouteNames.product.add}>
									<Button label="Cadastrar" disabled icon={icon()} color="primary">
										Cadastrar
									</Button>
								</Link>
							</div>
						</div>

						<Grid
							header={['Nome', 'Ref', 'Ordem', 'Ativo', '']}
							items={list}
							onDelete={async id => {
								await productsService.deleteProduct(id);
								await products.mutate();
								Notifications.warning('Item removido');
							}}
							onEdit={async id => {
								history.push(RouteNames.product.edit.replace(':id', id));
							}}
							filter={{ fields: [{ name: 'name' }, { name: 'ref' }, undefined, undefined], filter, setFilter }}
						/>

						<div className="row">
							<div className="col">
								{products.data && <Pagination page={pagination.page} goToPage={goToPage} lastPage={products.data.lastPage} />}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
