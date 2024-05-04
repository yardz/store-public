import { authenticate } from './functions/authenticate';
import { hasAbilitie } from './functions/hasAbilitie';
import { getCurrentUser } from './functions/getCurrentUser';

export const authService = {
	authenticate,
	hasAbilitie,
	getCurrentUser,
};
