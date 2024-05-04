import { InstitutionalPage } from '@lab77store/domain';
import axios from 'axios';

export const getInstitutionalPage = async (_id: string): Promise<InstitutionalPage> => {
	const resp = await axios.get<InstitutionalPage>(`/institutional-pages/${_id}`);
	return resp.data;
};
