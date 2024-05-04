import React from 'react';
import { validationContactForm } from './ContactForm.validations';
import { FormFields } from '@App/Components';
import { BaseForm } from '../BaseForm';

interface Contact {
	name: string;
	subject: string;
	email: string;
	message: string;
}

interface Props {
	initialValues: Contact;
	action: (contact: Contact) => Promise<void>;
}
export const ContactForm: React.FC<Props> = props => (
	<BaseForm {...props} actionLabel="Enviar" validationSchema={validationContactForm}>
		<div className="container-fluid g-0 overflow-hidden">
			<div className="row">
				<div className="col-12">
					<FormFields.Input.Text type="text" required placeholder="Nome" name="name" id="name" />
				</div>
				<div className="col-12">
					<FormFields.Input.Text required type="text" placeholder="Assunto" name="subject" id="subject" />
				</div>
				<div className="col-12">
					<FormFields.Input.Text required type="email" placeholder="Email" name="email" id="email" />
				</div>
				<div className="col-12">
					<FormFields.TextArea required placeholder="Mensagem" name="message" id="message" rows={6} />
				</div>
			</div>
		</div>
	</BaseForm>
);
