import { emailMask } from './maskEmail';

test('masking an email with "."', () => {
	const email = 'my.test.email@gmail.com';
	const mask = emailMask(email);
	expect(mask).toBe('my.****.**ail@gmail.com');
});

test('masking an email with "_"', () => {
	const email = 'my_test_email@gmail.com';
	const mask = emailMask(email);
	expect(mask).toBe('my_****_**ail@gmail.com');
});

test('masking an email with "-"', () => {
	const email = 'my-test-email@gmail.com';
	const mask = emailMask(email);
	expect(mask).toBe('my-****-**ail@gmail.com');
});

test('masking an email with "." and "_" and "-"', () => {
	const email = 'my.complete_test-email@gmail.com';
	const mask = emailMask(email);
	expect(mask).toBe('my.********_****-**ail@gmail.com');
});

test('masking a very large email', () => {
	const email = 'mycompletetestemail@gmail.com';
	const mask = emailMask(email);
	expect(mask).toBe('myc*************ail@gmail.com');
});

test('masking a short email (length 9)', () => {
	const emailLeng7 = '123456789@gmail.com';
	expect(emailMask(emailLeng7)).toBe('12*****89@gmail.com');
});

test('masking a short email (length 6)', () => {
	const emailLeng7 = '123456@gmail.com';
	expect(emailMask(emailLeng7)).toBe('1****6@gmail.com');
});

test('masking a short email (length 4)', () => {
	const emailLeng7 = '1234@gmail.com';
	expect(emailMask(emailLeng7)).toBe('1**4@gmail.com');
});
