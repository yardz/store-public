import { createImageObject } from './createImageObject';

test('Should return an Image', async () => {
	expect(createImageObject({ path: 'path/img.jpg' })).toEqual({
		desktop: {
			file: { asset_id: '', public_id: '', resource_type: '', url: 'https://lab77.s3.sa-east-1.amazonaws.com/path/img.jpg' },
		},
		mobile: {
			file: { asset_id: '', public_id: '', resource_type: '', url: 'https://lab77.s3.sa-east-1.amazonaws.com/path/img.jpg' },
		},
	});
});
