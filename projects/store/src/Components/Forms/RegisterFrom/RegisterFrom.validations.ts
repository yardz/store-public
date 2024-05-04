import * as Yup from 'yup';
import { personalDataValidation } from '../SharedFields';

export const validationRegisterForm = Yup.object().shape({
	password: Yup.string().trim().min(6, 'Senha deve conter no mínimo 6 caracteres').required('Campo obrigatório'),
	confirmPassword: Yup.string()
		.trim()
		.required('Campo obrigatório')
		.oneOf([Yup.ref('password'), null], 'A senha e confirmação de senha não são iguais'),
	personalData: personalDataValidation,
});
