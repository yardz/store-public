import * as Yup from 'yup';

export const validationContactForm = Yup.object().shape({
	name: Yup.string().trim().required('Campo obrigatório').min(3, 'O seu nome deve conter, no mínimo, 3 caracteres'),
	subject: Yup.string().trim().required('Campo obrigatório').min(3, 'O assunto deve conter, no mínimo, 5 caracteres'),
	email: Yup.string().trim().required('Campo obrigatório').email('Digite um e-mail válido'),
	message: Yup.string().trim().required('Campo obrigatório').min(20, 'A mensagem deve conter, no mínimo, 20 caracteres'),
});
