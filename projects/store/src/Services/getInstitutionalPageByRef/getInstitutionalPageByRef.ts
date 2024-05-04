import { InstitutionalPage } from '@lab77store/domain';
import axios from 'axios';

export const getInstitutionalPageByRef = async ({ ref }: { ref: string }): Promise<InstitutionalPage[]> => {
	const response = await axios.get<InstitutionalPage[]>('/institutional-pages', { params: { ref } });
	return response.data;
};
