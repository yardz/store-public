import React from 'react';
import { InstitutionalPage } from '@lab77store/domain';
import { PageTitle } from 'Components';
import { useSlidePositions } from 'Hooks';
import { useParams } from 'react-router-dom';
import { institutionalPagesService } from 'Services/institutionalPagesService';
import { InstitutionalPagesForm } from '../InstitutionalPagesForm';
import useSWR from 'swr';

export const InstitutionalPagesEdit: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const institutionalPage = useSWR<InstitutionalPage>(['get-institutional-pages', id], (...keys) =>
		institutionalPagesService.getInstitutionalPage(keys[1]),
	);
	const positions = useSlidePositions();

	if (positions.error) return <div>failed to load</div>;
	if (positions.isLoading) return <div>loading...</div>;

	return (
		<>
			<PageTitle title="Categorias" subtitle="Adicione e gerencie suas categorias" />
			<div className="row">
				<div className="col-md-12">
					{institutionalPage.data && <InstitutionalPagesForm initialValues={institutionalPage.data} positions={positions.data || []} />}
				</div>
			</div>
		</>
	);
};
