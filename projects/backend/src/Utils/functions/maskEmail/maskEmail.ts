export const emailMask = (email: string) => {
	const [user, provider] = email.split('@');
	let size = 3;
	if (user.length < 10) {
		size = 2;
	}
	if (user.length < 7) {
		size = 1;
	}
	const mask = user
		.split('')
		.map((letter, index, letters) => {
			if (index < size) return letter;
			if (index > letters.length - (size + 1)) return letter;
			if (['.', '_', '-'].includes(letter)) return letter;
			return '*';
		})
		.join('');
	return `${mask}@${provider}`;
};
