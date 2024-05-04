import { toast } from 'react-toastify';

export const error = (errorPhrase: string) =>
	toast.error(errorPhrase, {
		position: 'top-right',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});
