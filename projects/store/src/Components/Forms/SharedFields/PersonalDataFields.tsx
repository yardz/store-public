import React from 'react';
import { FormFields } from '@App/Components';
import * as Yup from 'yup';
import { cpf } from 'cpf-cnpj-validator';
import { onlyNumbers } from '@App/Utils';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export const personalDataValidation = Yup.object().shape({
	firstName: Yup.string().trim().required('Campo obrigatório').min(3, 'Seu nome deve conter, no mínimo, 3 letras'),
	lastName: Yup.string().trim().required('Campo obrigatório').min(3, 'Seu sobrenome deve conter, no mínimo, 3 letras'),
	email: Yup.string().trim().email('Deve ser um e-mail válido').required('Campo obrigatório'),
	phone: Yup.string()
		.trim()
		.required('Campo obrigatório')
		.test('phone', 'Digite um telefone válido', (value?: string) => !!value && onlyNumbers(value).length === 11),
	document: Yup.string()
		.trim()
		.required('Campo obrigatório')
		.test('document', 'O CPF digitado não é válido', (value: string) => cpf.isValid(value)),
	birthday: Yup.string()
		.trim()
		.required('Campo obrigatório')
		.test('birthday', 'Idade inválida', value => {
			if (Number(value) === 0) return false;
			const date = dayjs.unix(Number(value) / 1000);
			const date2 = dayjs();
			const age = date2.diff(date, 'year', true);
			return age > 12 && age < 100;
		}),
	sex: Yup.string().trim().required('Campo obrigatório'),
});

interface Props {}
export const PersonalDataFields: React.FC<Props> = () => (
	<div className="container-fluid g-0 overflow-hidden">
		<div className="row">
			<div className="col-lg-12">
				<FormFields.Input.Text required placeholder="Nome" name="personalData.firstName" id="name" />
			</div>
			<div className="col-lg-12">
				<FormFields.Input.Text required placeholder="Sobrenome" name="personalData.lastName" id="lastName" />
			</div>
			<div className="col-lg-12">
				<FormFields.Input.Text required placeholder="E-mail" name="personalData.email" id="email" />
			</div>
			<div className="col-lg-12">
				<FormFields.Input.Text required placeholder="CPF" name="personalData.document" id="document" mask="999.999.999-99" />
			</div>
			<div className="col-lg-12">
				<FormFields.Input.Text type="date" required placeholder="Data de Nascimento" name="personalData.birthday" id="birthday" />
			</div>
			<div className="col-lg-12">
				<FormFields.Input.Text required placeholder="Celular" name="personalData.phone" id="phone" mask="(99)99999-9999" />
			</div>
			<div className="col-lg-12">
				<FormFields.Input.Select
					required
					placeholder="Sexo"
					name="personalData.sex"
					id="sex"
					options={[
						{ value: 'famale', label: 'Feminino' },
						{ value: 'male', label: 'Masculino' },
					]}
				/>
			</div>
		</div>
	</div>
);
