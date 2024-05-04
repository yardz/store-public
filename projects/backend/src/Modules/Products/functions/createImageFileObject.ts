import { File } from '@lab77store/domain';

interface Input {
	path?: string;
}

/** @deprecated deve ser removido assim que possível */
export const createImageFileObject = ({ path }: Input): File => ({
	asset_id: '',
	public_id: '',
	resource_type: '',
	url: path || '',
});
