import * as Yup from 'yup';

export const validationForgotPasswordForm = Yup.object().shape({
	emailOrCpf: Yup.string().trim().required('Campo obrigatório'),
});
