export const formatCpf = (cpf: string) => {
	let masked = cpf.replace(/\D+/g, '');
	if (masked.length !== 11) return;
	const insertAt = (str: string, sub: string, pos: number) => `${str.slice(0, pos)}${sub}${str.slice(pos)}`;
	masked = insertAt(masked, '.', 3);
	masked = insertAt(masked, '.', 7);
	masked = insertAt(masked, '-', 11);
	return masked;
};
