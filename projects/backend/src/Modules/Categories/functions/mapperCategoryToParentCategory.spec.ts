/* eslint-disable max-lines */
import { Category } from '@lab77store/domain';
import { mapperCategoryToParentCategory } from './mapperCategoryToParentCategory';

const category: Category = {
	_id: '60ef78257e73f9002190c9dc',
	name: 'SOCIAL',
	ref: 'social',
	publish: {
		desktop: false,
		mobile: false,
		store: true,
	},
	content: {
		slide01: '61211fc618a78a0021217743',
		slide02: '61211fce18a78a0021217746',
		slideFooter: '60ef79a17e73f9002190cb5f',
		text01:
			'<p>&nbsp;</p>\n<h6><strong>SUSTENTABILIDADE</strong></h6>\n<h1>APOIO A COMUNIDADE</h1>\n<h1>LOCAL</h1>\n<p>&nbsp;</p>\n<p>N&oacute;s apoiamos projetos socioambientais direcionando uma porcentagem do lucro com as vendas de cole&ccedil;&otilde;es especiais para causas que n&oacute;s acreditamos.</p>\n<p>&nbsp;</p>',
		text02:
			'<p>&nbsp;</p>\n<p>Al&eacute;m de projetos especiais com a CUFA, SOS Amazaonia e Exercito da Salva&ccedil;&atilde;o, a Garra Animal e o SOSLagoas s&atilde;o agentes locais com quem temos parceria fixas. A venda de todos os produtos da categoria Sustentabilidade revertem fundos para esses projetos. A ONG Garra trabalha com o resgate de animais dom&eacute;sticos abandonados ou em situa&ccedil;&atilde;o de risco e o SOS Lagoas realiza a&ccedil;&otilde;es de limpeza e conscientiza&ccedil;&atilde;o ambiental para a recupera&ccedil;&atilde;o das lagoas da Barra da Tijuca e Jacar&eacute;pagua que ficam no entorno da nossa loja Matriz.</p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>',
	},
	sort: 31,
};

test('Should return the correct list', async () => {
	const parentCategory = mapperCategoryToParentCategory({ category });
	expect(parentCategory).toEqual({ _id: '60ef78257e73f9002190c9dc', name: 'SOCIAL', ref: 'social', sort: 0 });
});
