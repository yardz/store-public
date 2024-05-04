import * as Yup from 'yup';

export const validationLoginForm = Yup.object().shape({
	user: Yup.string().trim().required('Campo obrigatório'),
	password: Yup.string().trim().required('Campo obrigatório').min(6, 'A senha deve conter no mínimo 6 dígitos'),
});
