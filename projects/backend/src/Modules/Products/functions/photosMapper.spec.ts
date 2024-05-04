import { photosMapper } from './photosMapper';

test('Should return Image[]', async () => {
	expect(
		photosMapper({
			photosUrl: ['photosUrl-1', 'photosUrl-2'],
			mainPhoto: 'mainPhoto',
		}),
	).toEqual([
		{
			desktop: {
				file: { asset_id: '', public_id: '', resource_type: '', url: 'https://lab77.s3.sa-east-1.amazonaws.com/mainPhoto' },
			},
			mobile: {
				file: { asset_id: '', public_id: '', resource_type: '', url: 'https://lab77.s3.sa-east-1.amazonaws.com/mainPhoto' },
			},
		},
		{
			desktop: {
				file: { asset_id: '', public_id: '', resource_type: '', url: 'https://lab77.s3.sa-east-1.amazonaws.com/photosUrl-1' },
			},
			mobile: {
				file: { asset_id: '', public_id: '', resource_type: '', url: 'https://lab77.s3.sa-east-1.amazonaws.com/photosUrl-1' },
			},
		},
		{
			desktop: {
				file: { asset_id: '', public_id: '', resource_type: '', url: 'https://lab77.s3.sa-east-1.amazonaws.com/photosUrl-2' },
			},
			mobile: {
				file: { asset_id: '', public_id: '', resource_type: '', url: 'https://lab77.s3.sa-east-1.amazonaws.com/photosUrl-2' },
			},
		},
	]);
});
