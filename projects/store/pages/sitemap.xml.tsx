import { SiemapItem } from '@lab77store/domain';
import axios from 'axios';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
// import fs from 'fs';

dayjs.extend(utc);

export const getServerSideProps = async ({ res }) => {
	const baseUrl = {
		development: 'https://localhost:3000',
		production: 'https://lab77.com.br',
	}[process.env.NODE_ENV];

	const response = await axios.get<{ products: SiemapItem[]; categories: SiemapItem[] }>(`/rss/sitemap`);
	const { categories, products } = response.data;

	const staticPages = [
		'a-loja',
		'a-marca',
		'condicoes-gerais',
		'contato',
		'esqueci-minha-senha',
		'login',
		'pagamento',
		'registrar',
		'resetar-senha',
	];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
					<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
					<url>
						<loc>${baseUrl}</loc>
						<lastmod>${dayjs().toISOString()}</lastmod>
						<priority>1.00</priority>
					</url>
					${staticPages
						.map(staticPagePath => `${baseUrl}/${staticPagePath}`)
						.map(
							url => `
								<url>
								<loc>${url}</loc>
								<lastmod>${dayjs().toISOString()}</lastmod>
								<changefreq>hourly</changefreq>
								<priority>1.0</priority>
								</url>`,
						)
						.join('')}
					${categories
						.map(
							item => `
								<url>
								<loc>${baseUrl}/categoria/${item.ref}</loc>
								<lastmod>${dayjs(item.updatedAt).toISOString()}</lastmod>
								<changefreq>daily</changefreq>
								<priority>1.0</priority>
								</url>`,
						)
						.join('')}
					${products
						.map(
							item => `
								<url>
								<loc>${baseUrl}/produto/${item.ref}</loc>
								<lastmod>${dayjs(item.updatedAt).toISOString()}</lastmod>
								<changefreq>hourly</changefreq>
								<priority>1.0</priority>
								</url>`,
						)
						.join('')}
					</urlset>
					`;

	res.setHeader('Content-Type', 'text/xml');
	res.write(sitemap);
	res.end();

	return {
		props: {},
	};
};

const XmlPage = () => null;
export default XmlPage;
