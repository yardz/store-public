import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
	name: Yup.string().trim().required('Campo obrigatório'),
	time: Yup.number().min(0, 'Valor deve ser positivo').required('Campo obrigatório'),
	multiplier: Yup.string().trim().required('Campo obrigatório'),
	icon: Yup.string().trim().required('Campo obrigatório'),
});
