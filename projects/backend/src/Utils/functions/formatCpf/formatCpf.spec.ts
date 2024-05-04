import { formatCpf } from './formatCpf';

test('masking an cpf with mask', () => {
	const cpf = '111.111.111-11';
	const mask = formatCpf(cpf);
	expect(mask).toBe('111.111.111-11');
});

test('masking an cpf with no mask', () => {
	const cpf = '11111111111';
	const mask = formatCpf(cpf);
	expect(mask).toBe('111.111.111-11');
});

test('masking an cpf with wrong mask', () => {
	const cpf = '111.111.111.11';
	const mask = formatCpf(cpf);
	expect(mask).toBe('111.111.111-11');
});

test('masking an random string', () => {
	const cpf = 'lucita.07.lasombra@saba.com';
	const mask = formatCpf(cpf);
	expect(mask).toBeUndefined();
});

test('masking an invalid cpf (less then 14 numbers)', () => {
	const cpf = '111111';
	const mask = formatCpf(cpf);
	expect(mask).toBeUndefined();
});
