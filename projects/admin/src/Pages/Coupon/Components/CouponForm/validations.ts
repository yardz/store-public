import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
	code: Yup.string().trim().required('Campo obrigatório'),
	value: Yup.number().required('Campo obrigatório'),
	percent: Yup.number().required('Campo obrigatório'),
	shipping: Yup.string().trim().required('Campo obrigatório'),
});
