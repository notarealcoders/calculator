import { Token, ParsedExpression } from './types';

export function tokenize(expression: string): ParsedExpression {
  const tokens: Token[] = [];
  let current = '';
  
  // Replace × and ÷ with * and / for internal processing
  const sanitized = expression
    .replace(/\s/g, '')
    .replace(/×/g, '*')
    .replace(/÷/g, '/');

  // Validate characters
  if (!/^[0-9+\-*/.()%]+$/.test(sanitized)) {
    return { tokens: [], error: 'Invalid characters in expression' };
  }

  // Handle negative numbers at the start or after operators/parentheses
  const normalized = sanitized.replace(/(?<=^|\(|\+|-|\*|\/|%)(-\d)/g, '(0$1)');

  for (let i = 0; i < normalized.length; i++) {
    const char = normalized[i];

    if ('0123456789.'.includes(char)) {
      current += char;
    } else {
      if (current) {
        // Validate number format
        if (!/^\d*\.?\d*$/.test(current) || current.split('.').length > 2) {
          return { tokens: [], error: 'Invalid number format' };
        }
        tokens.push({ type: 'number', value: current });
        current = '';
      }

      if ('+-*/%'.includes(char)) {
        // Prevent consecutive operators
        if (tokens.length > 0 && tokens[tokens.length - 1].type === 'operator') {
          return { tokens: [], error: 'Invalid operator sequence' };
        }
        tokens.push({ type: 'operator', value: char });
      } else if ('()'.includes(char)) {
        tokens.push({ type: 'parenthesis', value: char });
      }
    }
  }

  if (current) {
    if (!/^\d*\.?\d*$/.test(current) || current.split('.').length > 2) {
      return { tokens: [], error: 'Invalid number format' };
    }
    tokens.push({ type: 'number', value: current });
  }

  // Validate parentheses matching
  let parenCount = 0;
  for (const token of tokens) {
    if (token.value === '(') parenCount++;
    if (token.value === ')') parenCount--;
    if (parenCount < 0) return { tokens: [], error: 'Mismatched parentheses' };
  }
  if (parenCount !== 0) return { tokens: [], error: 'Mismatched parentheses' };

  return { tokens };
}