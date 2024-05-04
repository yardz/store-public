export const maxInstallments = ({ discountItemsPrice }: { discountItemsPrice: number }) => {
	// eslint-disable-next-line no-plusplus
	for (let installments = 6; installments > 1; installments--) {
		if (discountItemsPrice / installments >= 40) return installments;
	}
	return 1;
};
