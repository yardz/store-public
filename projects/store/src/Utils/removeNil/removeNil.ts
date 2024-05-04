import cleanDeep from 'clean-deep';

export const removeNil = <T>(obj: T): T => cleanDeep(obj, { emptyArrays: false, emptyObjects: true, emptyStrings: false }) as T;
