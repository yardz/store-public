import * as Yup from 'yup';
import { personalDataValidation } from '../SharedFields';

export const validationPersonalDataForm = Yup.object().shape({
	personalData: personalDataValidation,
});
