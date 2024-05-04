import { File as IFile } from '@lab77store/domain';
import axios from 'axios';

export const uploadFile = async (file: File | '', folder: string): Promise<IFile | undefined> => {
	if (!file) {
		return undefined;
	}

	const formData = new FormData();
	formData.append('file', file);
	formData.append('folder', folder);
	const response = await axios.post<IFile>('files', formData, {
		headers: {
			'Content-Type': 'multipart/form-data',
			...axios.defaults.headers,
		},
	});
	return response.data;
};
