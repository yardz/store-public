/* eslint-disable no-console */
import { User } from '@lab77store/domain';
import { GoogleTagManagerUserRegister } from '@App/Plugins/GoogleTagManager/GoogleTagManagerUserRegister';

export const ApplicationHooksUserRegister = ({ user }: { user: User }) => {
	GoogleTagManagerUserRegister({ user });
};
