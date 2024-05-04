import { createImageFileObject } from './createImageFileObject';

test('Should return an File', async () => {
	expect(createImageFileObject({ path: 'path/img.jpg' })).toEqual({ asset_id: '', public_id: '', resource_type: '', url: 'path/img.jpg' });
});

test('Should return an File when path is empty', async () => {
	expect(createImageFileObject({})).toEqual({ asset_id: '', public_id: '', resource_type: '', url: '' });
});
