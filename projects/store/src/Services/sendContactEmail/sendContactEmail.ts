import axios from 'axios';

interface SendContactEmail {
	name: string;
	subject: string;
	message: string;
	email: string;
}

export const sendContactEmail = async ({ name, subject, message, email }: SendContactEmail) => {
	await axios.post('/emails/contact', { name, subject, message, email });
};
