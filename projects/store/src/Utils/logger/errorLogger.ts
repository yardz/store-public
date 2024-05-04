import { toast } from 'react-toastify';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const errorLogger = (error: any, message?: string) => {
	/* eslint-disable-next-line no-console */
	console.log('errorLogger: ', error);

	if (error?.response?.data?.displayMessage) {
		toast.error(error.response.data.displayMessage);
		return;
	}
	toast.error(message);
};
