import { InstitutionalPage } from '@lab77store/domain';
import axios from 'axios';

export const saveInstitutionalPage = async ({ _id, ...institutionalPage }: InstitutionalPage): Promise<InstitutionalPage> => {
	if (!!_id) {
		const update = await axios.put<InstitutionalPage>(`/institutional-pages/${_id}`, institutionalPage);
		return update.data;
	}
	const create = await axios.post<InstitutionalPage>('/institutional-pages', institutionalPage);
	return create.data;
};
