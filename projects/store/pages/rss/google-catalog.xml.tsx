import { RssGoogleCatalog } from '@lab77store/domain';
import axios from 'axios';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import xmlescape from 'xml-escape';

dayjs.extend(utc);

export const getServerSideProps = async ({ res }) => {
	const baseUrl = {
		development: 'http://localhost:3000',
		production: 'http://lab77.com.br',
	}[process.env.NODE_ENV];

	const response = await axios.get<RssGoogleCatalog>(`/rss/google-catalog`);
	const { products } = response.data;
	const items = products
		.map(
			product => `
	            <item>
	                <g:id>${product.productId}</g:id>
                    <g:title>${xmlescape(product.name)}</g:title>
	                <g:description>${xmlescape(product.description)}</g:description>
	                <g:link>${baseUrl}/produto/${product.ref}</g:link>
                    <g:image_link>${product.image}</g:image_link>
	                <g:condition>new</g:condition>
	                <g:availability>${product.availability ? 'in stock' : 'out of stock'}</g:availability>
	                <g:price>${product.price} BRL</g:price>
	                <g:brand>Lab77</g:brand>
	                <g:google_product_category />
                    <g:gender>unisex</g:gender>
                    <g:age_group>adult</g:age_group>
					${product.color ? `<g:color>${product.color}</g:color>` : ''}
					${product.size ? `<g:size>${product.size}</g:size>` : ''}
	            </item>
	            `,
		)
		.join('');

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
					<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
                        <channel>
                            <title>Lab77</title>
                            <link>${baseUrl}/rss/google-catalog.xml</link>
                            <description>Feed de Produtos da Lab77</description>
                            ${items}
                        </channel>
					</rss>
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
