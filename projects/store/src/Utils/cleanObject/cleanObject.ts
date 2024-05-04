import cleanDeep from 'clean-deep';

export const cleanObject = <T>(obj: T): T => cleanDeep(obj) as T;
