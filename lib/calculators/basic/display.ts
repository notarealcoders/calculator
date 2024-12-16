import { OPERATOR_MAPPINGS } from './constants';

export function prepareExpressionForCalculation(expression: string): string {
  return Object.entries(OPERATOR_MAPPINGS).reduce(
    (expr, [display, calc]) => expr.replace(new RegExp(display, 'g'), calc),
    expression
  );
}

export function removeLastCharacter(value: string): string {
  if (value.length <= 1) return '0';
  return value.slice(0, -1);
}

export function shouldResetDisplay(
  isNewCalculation: boolean,
  key: string,
  lastResult: string | null,
  currentDisplay: string
): boolean {
  if (!isNewCalculation) return false;
  if (key === '.') return false;
  if (key === '⌫') return false;
  return true;
}