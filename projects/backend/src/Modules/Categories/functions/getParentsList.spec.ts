/* eslint-disable max-lines */
import { Category } from '@lab77store/domain';
import { getParentsList } from './getParentsList';

test('Should return the correct list whitch no parents', async () => {
	const categories: Category[] = [
		{
			_id: '60db8be19b0c2b28eecdb5e5',
			name: 'MASCULINO',
			ref: 'masculino',
			publish: { mobile: true, desktop: true, store: true },
			seo: {
				metaDescription:
					'Categoria masculina de roupas . Aqui na lab77 você encontra calças, camisetas, camisas, bermudas, shorts e acessórios masculinos.',
			},
			parents: [],
			sort: 0,
		},
		{
			_id: '60db8be19b0c2b28eecdb5fe',
			name: 'CAMISETA ESTAMPADAS',
			ref: 'camiseta-estampadas-masculino',
			publish: { mobile: true, desktop: true, store: true },
			parent: '60db8be19b0c2b28eecdb5e5',
			parents: [],
			sort: 0,
		},
	];
	const category: Category = {
		_id: '60db8be29b0c2b28eecdb619',
		name: 'DA PRAIA',
		ref: 'da-praia-camiseta-estampadas-masculino',
		publish: { mobile: true, desktop: true, store: true },
		parent: '60db8be19b0c2b28eecdb5fe',
		sort: 0,
	};
	const children = getParentsList({ category, categories });
	expect(children).toEqual([
		{
			_id: '60db8be19b0c2b28eecdb5e5',
			name: 'MASCULINO',
			ref: 'masculino',
			sort: 0,
		},
		{
			_id: '60db8be19b0c2b28eecdb5fe',
			name: 'CAMISETA ESTAMPADAS',
			ref: 'camiseta-estampadas-masculino',
			sort: 1,
		},
	]);
});

test('Should return the correct list whitch parents', async () => {
	const categories: Category[] = [
		{
			_id: '60db8be19b0c2b28eecdb5fe',
			name: 'CAMISETA ESTAMPADAS',
			ref: 'camiseta-estampadas-masculino',
			publish: { mobile: true, desktop: true, store: true },
			parent: '60db8be19b0c2b28eecdb5e5',
			parents: [{ _id: '60db8be19b0c2b28eecdb5e5', name: 'MASCULINO', ref: 'masculino', sort: 0 }],
			sort: 0,
		},
	];
	const category: Category = {
		_id: '60db8be29b0c2b28eecdb619',
		name: 'DA PRAIA',
		ref: 'da-praia-camiseta-estampadas-masculino',
		publish: { mobile: true, desktop: true, store: true },
		parent: '60db8be19b0c2b28eecdb5fe',
		sort: 0,
	};
	const children = getParentsList({ category, categories });
	expect(children).toEqual([
		{
			_id: '60db8be19b0c2b28eecdb5e5',
			name: 'MASCULINO',
			ref: 'masculino',
			sort: 0,
		},
		{
			_id: '60db8be19b0c2b28eecdb5fe',
			name: 'CAMISETA ESTAMPADAS',
			ref: 'camiseta-estampadas-masculino',
			sort: 1,
		},
	]);
});
