import { getTotalItemsValue } from './getTotalItemsValue';

test('Should get total value with 1 item', async () => {
	const items = [{ price: 100 }];
	const totalValue = getTotalItemsValue({ items });
	expect(totalValue).toEqual(100);
});

test('Should get total value with 2 items', async () => {
	const items = [{ price: 0.3 }, { price: 0.6 }];
	const totalValue = getTotalItemsValue({ items });
	expect(totalValue).toEqual(0.9);
});

test('Should get total value with 1 items and quantity:2', async () => {
	const items = [{ price: 100, quantity: 2 }];
	const totalValue = getTotalItemsValue({ items });
	expect(totalValue).toEqual(200);
});

test('Should get total value with 2 items and quantity:2 and 3', async () => {
	const items = [
		{ price: 50, quantity: 2 },
		{ price: 50, quantity: 3 },
	];
	const totalValue = getTotalItemsValue({ items });
	expect(totalValue).toEqual(250);
});
