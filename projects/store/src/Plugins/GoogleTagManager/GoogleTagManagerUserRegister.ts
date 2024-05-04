import { dataLayer } from './dataLayer';
import { User } from '@lab77store/domain';
// import axios from 'axios';

// const getIPv4 = async (): Promise<string> => {
// 	const res = await axios.get('https://geolocation-db.com/json/');
// 	return res.data.IPv4;
// };

export const GoogleTagManagerUserRegister = ({ user }: { user: User }) => {
	// const client_ip_address = await getIPv4();
	const event = {
		event: 'login',
		user: {
			uid: user.uid,
			email: user.personalData.email,
			phone: user.personalData.phone,
			firstName: user.personalData.firstName,
			lastName: user.personalData.lastName,
			sex: user.personalData.sex,
		},
		// Por hora eu removi esses items. Caso seja necessário é só voltar com eles
		// connection: {
		// 	external_id: user.uid,
		// 	client_user_agent: navigator.userAgent,
		// 	client_ip_address,
		// },
	};
	dataLayer(event);
};
