// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Category } from '@lab77store/domain';
import { store } from '@App/Store';
import { Template } from '@App/Template';
import { utilsActions, utilsSelector } from '@App/Store/Reducers/UtilsReducer';
import { LoadingPage } from '@App/Pages/Loading';
import { ToastContainer } from 'react-toastify';
import { Provider, useSelector } from 'react-redux';
import axios from 'axios';
import { Router, useRouter } from 'next/router';
import { CloudinaryContext } from 'cloudinary-react';
import { AuthConfig } from '@App/Configs/Auth';
import { CartConfig } from '@App/Configs/Cart';

import { useApplicationHooksPageView } from '@App/Plugins/ApplicationHooks/useApplicationHooksPageView';
import { useApplicationHooksUpdateCartItems } from '@App/Plugins/ApplicationHooks/useApplicationHooksUpdateCartItems';
import { useReduxOrderEffect } from '@App/Hooks/useReduxOrderEffect';
import { useReduxCartEffect } from '@App/Hooks/useReduxCartEffect';

import '@App/Assets/bootstrap/bootstrap.scss';
import '@App/Assets/menukit/menukit.scss';
import '@App/Assets/stylesheets/store.scss';
import 'react-toastify/dist/ReactToastify.css';

Router.events.on('routeChangeStart', () => {
	store.dispatch(utilsActions.setPageLoading({ pageLoading: true }));
});
Router.events.on('routeChangeComplete', () => {
	store.dispatch(utilsActions.setPageLoading({ pageLoading: false }));
});
Router.events.on('routeChangeError', () => {
	store.dispatch(utilsActions.setPageLoading({ pageLoading: true }));
});

AuthConfig();
CartConfig();

const baseUrl: string = process.env.NEXT_PUBLIC_APP_API || '';
const TIMEOUT = 60 * 1000;
axios.defaults.timeout = TIMEOUT;
axios.defaults.baseURL = baseUrl;

// eslint-disable-next-line @typescript-eslint/ban-types
const InitEffects = (pageProps: object) => {
	useReduxCartEffect();
	useReduxOrderEffect();
	useApplicationHooksPageView(pageProps);
	useApplicationHooksUpdateCartItems();
	return null;
};

interface Props {
	Component: React.FC;
	pageProps: {
		categories?: Category[];
	};
}

const IsPageLoading: React.FC = ({ children }) => {
	const isPageLoading = useSelector(utilsSelector.pageLoading);
	if (isPageLoading) return <LoadingPage />;
	return <>{children}</>;
};

const MyApp: React.FC<Props> = ({ Component, pageProps }) => {
	const router = useRouter();
	const { categories, ...props } = pageProps;
	const compact = [
		'/produto/[ref]',
		'/categoria/[ref]',
		'/categoria/[ref]/[page]',
		'/pagamento',
		'/carrinho',
		'/contato',
		'/a-loja',
		'/condicoes-gerais',
		'/a-marca',
		'/',
	].includes(router.route);

	return (
		<Provider store={store}>
			<CloudinaryContext cloudName="lab77" quality="auto" fetchFormat="auto">
				<Template categories={categories || []} compact={compact}>
					<InitEffects {...props} />
					<IsPageLoading>
						<Component {...props} />
					</IsPageLoading>
				</Template>
				<ToastContainer />
			</CloudinaryContext>
		</Provider>
	);
};

export default MyApp;
