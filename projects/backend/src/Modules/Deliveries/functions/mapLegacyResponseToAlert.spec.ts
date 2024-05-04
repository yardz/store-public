import { mapLegacyResponseToAlert } from './mapLegacyResponseToAlert';

test('Should return all alerts', async () => {
	const legacyResponse = {
		codigo: '00003',
		metodo: 'Retirar na loja',
		prazo: 5,
		valor: '00,00',
		valor_sem_adicionais: '00,00',
		aviso: 'content-1',
		aviso_2: 'content-2',
		aviso_4: 'content-4',
		aviso_5: 'content-5',
		aviso_6: 'content-6',
	};
	const alerts = mapLegacyResponseToAlert({ legacyResponse, deliveryTime: 11, preOrderAdditionalTime: 5 });
	expect(alerts).toEqual([
		{ content: 'content-1', order: 1, type: 'danger' },
		{ content: 'content-6', order: 2, type: 'tip' },
		{ content: 'content-2', order: 3, type: 'danger' },
		{
			content:
				'Um dos itens do seu carrinho será confeccionado para você e por isso precisamos adicionar 5 dias no prazo de entrega para produzi-lo, somado ao tempo do frete o prazo total será de 11 dias.',
			order: 4,
			type: 'tip',
		},
		{ content: 'content-4', order: 5, type: 'tip' },
		{ content: 'content-5', order: 6, type: 'tip' },
	]);
});

test('Should return only alerts that have a message ', async () => {
	const legacyResponse = {
		codigo: '00003',
		metodo: 'Retirar na loja',
		prazo: 5,
		valor: '00,00',
		valor_sem_adicionais: '00,00',
		aviso: 'content-1',
		aviso_5: '',
		aviso_6: 'content-6',
	};
	const alerts = mapLegacyResponseToAlert({ legacyResponse, deliveryTime: 10 });
	expect(alerts).toEqual([
		{ content: 'content-1', order: 1, type: 'danger' },
		{ content: 'content-6', order: 2, type: 'tip' },
	]);
});
