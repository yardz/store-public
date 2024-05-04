import React from 'react';

import { PageTitle } from 'Components';
import { CategoryForm } from '../CategoryForm';
import { Category } from '@lab77store/domain';
import { useCategories, useSlidePositions } from 'Hooks';
import { useParams } from 'react-router-dom';
import { categoriesService } from 'Services/categoriesService';
import useSWR from 'swr';

export const CategoriesEdit: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const categories = useCategories();
	const positions = useSlidePositions();
	const cateogory = useSWR<Category>(['category', id], (...keys) => categoriesService.getCategory(keys[1]));
	if (categories.error) return <div>failed to load</div>;
	if (categories.isLoading) return <div>loading...</div>;
	if (positions.error) return <div>failed to load</div>;
	if (positions.isLoading) return <div>loading...</div>;

	return (
		<>
			<PageTitle title="Categorias" subtitle="Edite e gerencie suas categorias" />
			<div className="row">
				<div className="col-md-12">
					{cateogory.data && (
						<CategoryForm
							initialValues={cateogory.data}
							categories={categories.data || []}
							positions={positions.data || []}
							onSuccess={() => {
								categories.mutate().then().catch();
								cateogory.mutate().then().catch();
							}}
						/>
					)}
				</div>
			</div>
		</>
	);
};
