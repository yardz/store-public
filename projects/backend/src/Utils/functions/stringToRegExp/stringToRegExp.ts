export const stringToRegExp = (search: string): RegExp => new RegExp(search.trim(), 'i');
