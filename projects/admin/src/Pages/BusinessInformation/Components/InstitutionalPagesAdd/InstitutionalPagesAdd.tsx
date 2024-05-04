import React from 'react';

import { PageTitle } from 'Components';
import { InstitutionalPagesForm } from '../InstitutionalPagesForm';
import { InstitutionalPage } from '@lab77store/domain';
import { useSlidePositions } from 'Hooks';

const initialValues: InstitutionalPage = {
	_id: '',
	name: '',
	ref: '',
	content: {
		text01: '',
		slide01: '',
		text02: '',
		slide02: '',
		text03: '',
		slide03: '',
	},
	seo: {
		metaDescription: '',
		textSeo: '',
	},
};

export const InstitutionalPagesAdd: React.FC = () => {
	const positions = useSlidePositions();
	if (positions.error) return <div>failed to load</div>;
	if (positions.isLoading) return <div>loading...</div>;

	return (
		<>
			<PageTitle title="Categorias" subtitle="Adicione e gerencie suas categorias" />
			<div className="row">
				<div className="col-md-12">
					<InstitutionalPagesForm initialValues={initialValues} positions={positions.data || []} />
				</div>
			</div>
		</>
	);
};
