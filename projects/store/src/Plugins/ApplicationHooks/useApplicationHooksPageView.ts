/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { SmartHintSetPage } from '@App/Plugins/SmartHint/SmartHintSetPage';
import { useIsActiveSmartHint } from '@App/Plugins/SmartHint/useIsActiveSmartHint';
import { GoogleTagManagerViewProduct } from '@App/Plugins/GoogleTagManager/GoogleTagManagerViewProduct';
import { GoogleTagManagerViewItemsList } from '@App/Plugins/GoogleTagManager/GoogleTagManagerViewItemsList';
import { GoogleTagManagerPageView } from '@App/Plugins/GoogleTagManager/GoogleTagManagerPageView';
import { Product, ProductListItem } from '@lab77store/domain';

interface PageProps {
	categoryFullName?: string;
	_id?: string;
	product?: Product;
	products?: ProductListItem[];
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const useApplicationHooksPageView = (pageProps: PageProps) => {
	const router = useRouter();
	const isActiveSmartHint = useIsActiveSmartHint();

	useEffect(() => {
		if (router.isFallback) return;
		GoogleTagManagerPageView();
	}, [router.asPath, router.isFallback]);

	const smartHintReady = !router.isFallback && isActiveSmartHint;
	useEffect(() => {
		if (!smartHintReady) return;
		switch (router.route) {
			case '/':
				SmartHintSetPage({ page: 'home' });
				break;
			case '/categoria/[ref]/[page]':
			case '/categoria/[ref]':
				SmartHintSetPage({ page: 'category', data: { content: pageProps.categoryFullName } });
				break;
			case '/produto/[ref]':
				SmartHintSetPage({ page: 'product' });
				break;
			case '/carrinho':
				SmartHintSetPage({ page: 'cart' });
				break;
			case '/pagamento':
				SmartHintSetPage({ page: 'checkout' });
				break;
			case '/compra-finalizada/[orderId]':
				SmartHintSetPage({ page: 'checkout' });
				break;
			default:
				break;
		}
	}, [smartHintReady, router.route, router.asPath]);

	const isPageViewReady = router.isFallback;
	useEffect(() => {
		if (router.isFallback) return;
		switch (router.route) {
			case '/':
				if (pageProps.products) {
					GoogleTagManagerViewItemsList({ products: pageProps.products, category: { name: 'Home', _id: '0' } });
				}
				break;
			case '/categoria/[ref]/[page]':
			case '/categoria/[ref]':
				if (pageProps._id && pageProps.products && pageProps.categoryFullName) {
					GoogleTagManagerViewItemsList({
						products: pageProps.products,
						category: { name: pageProps.categoryFullName, _id: pageProps._id },
					});
				}
				break;
			case '/produto/[ref]':
				if (pageProps.product) {
					GoogleTagManagerViewProduct({ product: pageProps.product });
				}
				break;
			default:
				break;
		}
	}, [isPageViewReady, router.route, router.asPath]);
};
