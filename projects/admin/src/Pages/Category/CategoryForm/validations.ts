import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
	name: Yup.string().trim().required('Campo obrigatório'),
	ref: Yup.string().trim().required('Campo obrigatório'),
	sort: Yup.number().min(0, 'A ordem tem que ser igual ou maio que 0').required('Campo obrigatório'),
	parent: Yup.string().trim(),
	seo: Yup.object().shape({
		metaDescription: Yup.string().trim(),
		textSeo: Yup.string().trim(),
	}),
	content: Yup.object().shape({
		slide01: Yup.string().trim(),
		text01: Yup.string().trim(),
		slide02: Yup.string().trim(),
		text02: Yup.string().trim(),
	}),
});
