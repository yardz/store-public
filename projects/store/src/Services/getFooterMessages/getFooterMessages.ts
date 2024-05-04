import { FooterMessages } from '@lab77store/domain';

export const getFooterMessages = async (): Promise<FooterMessages> => {
	// implementar service
	const desktop = ['FRETE GRÁTIS EM TODAS AS COMPRAS ACIMA DE R$ 300,00', '1 TROCA GRÁTIS', 'TODOS OS PEDIDOS EMBALADOS PARA PRESENTE'];
	const mobile = ['FRETE GRÁTIS ACIMA DE R$300,00 EM COMPRAS.', '1 TROCA GRÁTIS', 'PEDIDOS ENVIADOS NA LATINHA'];
	return {
		desktop,
		mobile,
	};
};
