import to from 'await-to-js';

export const resolveOrUndefined = async <T>(promise: Promise<T>): Promise<T | undefined> => {
	const [, res] = await to(promise);
	if (res) return res;
};
