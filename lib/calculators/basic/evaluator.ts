import { Token } from './types';

export function evaluateRPN(tokens: Token[]): number {
  const stack: number[] = [];

  for (const token of tokens) {
    if (token.type === 'number') {
      const num = parseFloat(token.value);
      if (isNaN(num)) {
        throw new Error('Invalid number');
      }
      stack.push(num);
    } else if (token.type === 'operator') {
      if (stack.length < 2) {
        throw new Error('Invalid expression');
      }

      const b = stack.pop()!;
      const a = stack.pop()!;

      let result: number;
      switch (token.value) {
        case '+':
          result = a + b;
          break;
        case '-':
          result = a - b;
          break;
        case '*':
          result = a * b;
          break;
        case '/':
          if (Math.abs(b) < Number.EPSILON) {
            throw new Error('Division by zero');
          }
          result = a / b;
          break;
        case '%':
          if (Math.abs(b) < Number.EPSILON) {
            throw new Error('Modulo by zero');
          }
          result = a % b;
          break;
        default:
          throw new Error('Unknown operator');
      }

      if (!isFinite(result)) {
        throw new Error('Result is not a finite number');
      }

      stack.push(result);
    }
  }

  if (stack.length !== 1) {
    throw new Error('Invalid expression');
  }

  return stack[0];
}