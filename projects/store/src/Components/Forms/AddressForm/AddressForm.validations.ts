import * as Yup from 'yup';
import { onlyNumbers } from '@App/Utils';

export const validationSchemaAddressForm = Yup.object().shape({
	name: Yup.string().trim().required('Campo obrigatório').min(3, 'O nome deve ter, no mínimo 3, caracteres'),
	recipientName: Yup.string().trim().required('Campo obrigatório').min(3, 'O nome deve ter, no mínimo 3, caracteres'),
	zipCode: Yup.string()
		.trim()
		.required('Campo obrigatório')
		.test('zipCode', 'Digite um CEP válido', (value?: string) => !!value && onlyNumbers(value).length === 8),
	country: Yup.string().trim().required('Campo obrigatório'),
	state: Yup.string().trim().required('Campo obrigatório').length(2),
	city: Yup.string().trim().required('Campo obrigatório'),
	neighborhood: Yup.string().trim().required('Campo obrigatório'),
	street: Yup.string().trim().required('Campo obrigatório'),
	number: Yup.string().trim().required('Campo obrigatório'),
	complement: Yup.string().trim(),
});
