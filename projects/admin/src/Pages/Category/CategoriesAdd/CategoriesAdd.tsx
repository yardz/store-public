import React from 'react';

import { PageTitle } from 'Components';
import { CategoryForm, initialValues } from '../CategoryForm';
import { useCategories, useSlidePositions } from 'Hooks';

export const CategoriesAdd: React.FC = () => {
	const categories = useCategories();
	const positions = useSlidePositions();
	if (categories.error) return <div>failed to load</div>;
	if (categories.isLoading) return <div>loading...</div>;
	if (positions.error) return <div>failed to load</div>;
	if (positions.isLoading) return <div>loading...</div>;

	return (
		<>
			<PageTitle title="Categorias" subtitle="Adicione e gerencie suas categorias" />
			<div className="row">
				<div className="col-md-12">
					<CategoryForm
						initialValues={initialValues}
						categories={categories.data || []}
						positions={positions.data || []}
						onSuccess={() => {
							categories.mutate().then().catch();
						}}
					/>
				</div>
			</div>
		</>
	);
};
