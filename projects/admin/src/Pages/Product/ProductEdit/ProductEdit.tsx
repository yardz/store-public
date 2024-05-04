import React from 'react';

import { PageTitle } from 'Components';
import { ProductForm } from '../Components';
import { useProduct } from 'Hooks';
import { useParams } from 'react-router-dom';

export const ProductEdit: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const product = useProduct(id);
	if (product.error) return <div>failed to load product</div>;
	if (product.isLoading) return <div>loading...</div>;

	return (
		<>
			<PageTitle title="Produtos" subtitle="Adicione e gerencie seus produtos" />
			<div className="row">
				<div className="col-md-12">
					{product.data && (
						<ProductForm
							initialValues={product.data}
							onSuccess={() => {
								product.mutate().then().catch();
							}}
						/>
					)}
				</div>
			</div>
		</>
	);
};
