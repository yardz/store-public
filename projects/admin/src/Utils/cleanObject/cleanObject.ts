import cleanDeep from 'clean-deep';
export const cleanObject = <T>(obj: T): T => {
	return cleanDeep(obj) as T;
};
