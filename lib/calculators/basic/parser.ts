import { Token, Operator } from './types';

const precedence: Record<Operator, number> = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2,
  '%': 2
};

export function parseToRPN(tokens: Token[]): Token[] {
  const output: Token[] = [];
  const operators: Token[] = [];

  for (const token of tokens) {
    if (token.type === 'number') {
      output.push(token);
    } else if (token.type === 'operator') {
      while (
        operators.length > 0 &&
        operators[operators.length - 1].type === 'operator' &&
        operators[operators.length - 1].value !== '(' &&
        precedence[operators[operators.length - 1].value as Operator] >= 
        precedence[token.value as Operator]
      ) {
        const op = operators.pop();
        if (op) output.push(op);
      }
      operators.push(token);
    } else if (token.value === '(') {
      operators.push(token);
    } else if (token.value === ')') {
      while (
        operators.length > 0 &&
        operators[operators.length - 1].value !== '('
      ) {
        const op = operators.pop();
        if (op) output.push(op);
      }
      operators.pop(); // Remove '('
    }
  }

  while (operators.length > 0) {
    const op = operators.pop();
    if (op) output.push(op);
  }

  return output;
}