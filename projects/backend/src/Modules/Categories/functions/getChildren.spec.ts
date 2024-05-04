import { Category } from '@lab77store/domain';
import { getChildren } from './getChildren';

const categories = [
	{ _id: '1' },
	{ _id: '2' },
	{ _id: '3', parent: '2' },
	{ _id: '4' },
	{ _id: '5', parent: '4' },
	{ _id: '6', parent: '5' },
] as Category[];

test('Should return the search id, even when it is not in the list', async () => {
	const children = getChildren({ categoriesIdList: ['-1', '0'], categories });
	expect(children).toEqual(['-1', '0']);
});

test('Should return the search id, when it is in the list', async () => {
	const children = getChildren({ categoriesIdList: ['1'], categories });
	expect(children).toEqual(['1']);
});

test('Should return direct children', async () => {
	const children = getChildren({ categoriesIdList: ['2'], categories });
	expect(children).toEqual(['2', '3']);
});

test('Should return direct inderect children', async () => {
	const children = getChildren({ categoriesIdList: ['4'], categories });
	expect(children).toEqual(['4', '5', '6']);
});
