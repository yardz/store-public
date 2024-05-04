import { InstitutionalPage } from '@lab77store/domain';
import axios from 'axios';

export const deleteInstitutionalPage = async (_id: string): Promise<InstitutionalPage> => {
	const del = await axios.delete<InstitutionalPage>(`/institutional-pages/${_id}`);
	return del.data;
};
