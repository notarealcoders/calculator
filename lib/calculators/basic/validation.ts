import { KEYS } from './constants';

export function isValidDecimalAddition(display: string, key: string): boolean {
  if (key !== KEYS.DECIMAL) return true;
  
  // Split by operators to get the current number
  const numbers = display.split(new RegExp(`[${KEYS.OPERATORS}]`));
  const currentNumber = numbers[numbers.length - 1];
  
  return !currentNumber.includes(KEYS.DECIMAL);
}

export function isValidOperatorAddition(display: string, key: string): boolean {
  if (!KEYS.OPERATORS.includes(key)) return true;
  return !KEYS.OPERATORS.includes(display.slice(-1));
}