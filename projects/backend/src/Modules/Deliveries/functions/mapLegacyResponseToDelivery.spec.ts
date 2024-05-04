import { mapLegacyResponseToDelivery } from './mapLegacyResponseToDelivery';
import { Address } from '@lab77store/domain';

test('Should delivery type with all alerts', async () => {
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
	const alerts = mapLegacyResponseToDelivery({ legacyResponse, address: { zipCode: '11111-111' } as Address, preOrderAdditionalTime: 6 });
	expect(alerts).toEqual({
		_id: '00003',
		address: { zipCode: '11111-111' },
		alerts: [
			{ content: 'content-1', order: 1, type: 'danger' },
			{ content: 'content-6', order: 2, type: 'tip' },
			{ content: 'content-2', order: 3, type: 'danger' },
			{
				content:
					'Um dos itens do seu carrinho será confeccionado para você e por isso precisamos adicionar 6 dias no prazo de entrega para produzi-lo, somado ao tempo do frete o prazo total será de 11 dias.',
				order: 4,
				type: 'tip',
			},
			{ content: 'content-4', order: 5, type: 'tip' },
			{ content: 'content-5', order: 6, type: 'tip' },
		],
		deliveryTime: 11,
		method: 'Retirar na loja',
		price: 0,
	});
});

test('Should delivery type with some alerts', async () => {
	const legacyResponse = {
		codigo: '00003',
		metodo: 'Retirar na loja',
		prazo: 5,
		valor: '00,00',
		valor_sem_adicionais: '00,00',
		aviso: 'content-1',
		aviso_5: '',
	};
	const alerts = mapLegacyResponseToDelivery({ legacyResponse, address: { zipCode: '11111-111' } as Address });
	expect(alerts).toEqual({
		_id: '00003',
		address: { zipCode: '11111-111' },
		alerts: [{ content: 'content-1', order: 1, type: 'danger' }],
		deliveryTime: 5,
		method: 'Retirar na loja',
		price: 0,
	});
});
