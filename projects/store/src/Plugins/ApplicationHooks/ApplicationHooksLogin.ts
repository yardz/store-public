import { User } from '@lab77store/domain';
import { GoogleTagManagerLogin } from '@App/Plugins/GoogleTagManager/GoogleTagManagerLogin';
import { getAddresses } from '@App/Services/getAddresses';

export const ApplicationHooksLogin = async ({ user }: { user: User }) => {
	const userAddresses = await getAddresses();
	GoogleTagManagerLogin({ user, userAdress: userAddresses[0] });
};
