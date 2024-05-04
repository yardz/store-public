const { format } = new Intl.NumberFormat('pt-BR', {
	style: 'currency',
	currency: 'BRL',
});

export const formatMoney = (value: number) => {
	return format(value);
};
