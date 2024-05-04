import { InstitutionalPage } from '@lab77store/domain';
import axios from 'axios';

export const getInstitutionalPages = async (): Promise<InstitutionalPage[]> => {
	const resp = await axios.get<InstitutionalPage[]>('/institutional-pages');
	return resp.data;
};
