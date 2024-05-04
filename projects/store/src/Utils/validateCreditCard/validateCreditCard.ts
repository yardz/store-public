import cardValidator from 'card-validator';

export const validateCreditCard = ({ cardNumber }: { cardNumber: string }) => cardValidator.number(cardNumber).isValid;
