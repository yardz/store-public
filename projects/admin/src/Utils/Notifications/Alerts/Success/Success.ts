import { toast } from 'react-toastify';

export const success = (successPhrase: string) =>
	toast.success(successPhrase, {
		position: 'top-right',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});
