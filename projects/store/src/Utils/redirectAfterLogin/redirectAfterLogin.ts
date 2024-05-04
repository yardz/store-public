import { NextRouter } from 'next/router';

interface Args {
	router: NextRouter;
}
export const redirectAfterLogin = async ({ router }: Args) => {
	if (router.query?.redirect && typeof router.query.redirect === 'string') {
		return router.push(router.query.redirect);
	}
	return router.push('/minha-conta');
};
