import { stringToRegExp } from './stringToRegExp';

test('Regexing an normal string uppercase', () => {
	const string = 'Camiseta';
	const regex = stringToRegExp(string).toString();
	expect(regex).toBe('/Camiseta/i');
});

test('Regexing an normal string lowercase', () => {
	const string = 'camiseta';
	const regex = stringToRegExp(string).toString();
	expect(regex).toBe('/camiseta/i');
});

test('Regexing an string with righ space', () => {
	const string = 'Camiseta ';
	const regex = stringToRegExp(string).toString();
	expect(regex).toBe('/Camiseta/i');
});
test('Regexing an string with left space', () => {
	const string = ' Camiseta';
	const regex = stringToRegExp(string).toString();
	expect(regex).toBe('/Camiseta/i');
});
test('Regexing an string with both side space', () => {
	const string = ' Camiseta ';
	const regex = stringToRegExp(string).toString();
	expect(regex).toBe('/Camiseta/i');
});
