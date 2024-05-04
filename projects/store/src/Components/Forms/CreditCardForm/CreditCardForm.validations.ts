import * as Yup from 'yup';
import { validateCreditCard } from '@App/Utils';
import dayjs from 'dayjs';

export const validationCreditCardForm = Yup.object().shape({
	cardNumber: Yup.string()
		.trim()
		.required('Campo obrigatório')
		.test('cardNumber', 'Digite um cartão de crédito válido', (cardNumber: string) => {
			if (!cardNumber) return false;
			return validateCreditCard({ cardNumber });
		}),
	holderName: Yup.string().trim().required('Campo obrigatório'),
	expirationMonth: Yup.number()
		.required('Campo obrigatório')
		.min(1, 'Mês de expiração não pode ser menor que 1')
		.max(12, 'Mês de expiração não pode ser maior que 12'),
	expirationYear: Yup.number()
		.required('Campo obrigatório')
		.min(Number(dayjs().format('YYYY')), 'Ano da validade não pode ser menor que o ano atual')
		.max(Number(dayjs().format('YYYY')) + 10, `Ano da validade não pode ser maior que ${Number(dayjs().format('YYYY')) + 10}`),
	securityCode: Yup.string().trim().required('Campo obrigatório'),
	installments: Yup.number().required('Campo obrigatório').max(12, 'Máximo de 12 parcelas'),
});
