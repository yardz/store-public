/* eslint-disable @next/next/no-sync-scripts */
import React from 'react';
import Head from 'next/head';
import { Category } from '@lab77store/domain';
import styles from './Template.module.scss';
import classNames from 'classnames';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import { useDispatch } from 'react-redux';
import { pluginsActions } from '@App/Store/Reducers/PluginsReducer';

const Footer = dynamic(() => import('./Components').then(mod => mod.Footer));
const Header = dynamic(() => import('./Components').then(mod => mod.Header));
const SliderRecommendation = dynamic(() => import('@App/Components').then(mod => mod.SliderRecommendation));

interface Props {
	categories: Category[];
	children: JSX.Element | JSX.Element[];
	compact?: boolean;
}
export const Template: React.FC<Props> = ({ children, categories, compact }) => {
	const dispatch = useDispatch();
	const enableSmartHint = true; // essa variavel é para desligar a smarthint para teste (issue #299)
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="theme-color" content="#000000" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="A Lab Sete Sete é uma marca de roupa sustentável com raízes na cultura urbana de praia." />
				<title>Moda Sustentável - Produção Sob Encomenda | Lab 77</title>
			</Head>
			<Header categories={categories} />
			<div className={classNames(styles.body, { [styles.compact]: compact })}>{children}</div>
			<div className="container-fluid g-0 overflow-hidden">
				<SliderRecommendation position={5} />
			</div>
			<Footer />

			{enableSmartHint && (
				<Script
					src="/js/smartHint.js"
					onLoad={() => {
						dispatch(pluginsActions.active({ plugin: 'smartHint' }));
					}}
				/>
			)}
			<Script src="/js/bootstrap.bundle.min.js" />
			<Script src="/js/menukit.js" />
		</>
	);
};
