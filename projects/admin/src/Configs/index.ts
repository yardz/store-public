import { setupAxios } from './Axios';
import { AuthConfig } from './Auth';

export const Setup = () => {
	setupAxios();
	AuthConfig();
};
