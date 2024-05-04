// função apra fazer o javascript esperar - útil pra debug
export const sleep = (ms: number) => {
	const start = new Date().getTime();
	const expire = start + ms;
	while (new Date().getTime() < expire) {
		// não faz nada
	}
};
