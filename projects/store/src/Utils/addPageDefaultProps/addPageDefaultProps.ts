import { getCategories, getFooterMessages } from '@App/Services';

export const addPageDefaultProps = async <T>(props: T) => {
	const categories = await getCategories();
	const footerMessages = await getFooterMessages();

	return { ...props, categories, footerMessages } as T;
};
