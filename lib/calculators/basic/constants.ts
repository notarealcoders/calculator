export const KEYS = {
  NUMBERS: '0123456789',
  OPERATORS: '×÷+-',
  DECIMAL: '.',
  EQUALS: '=',
  CLEAR: 'C',
  DELETE: '⌫',
  PARENTHESES: '()',
} as const;

export const OPERATOR_MAPPINGS = {
  '×': '*',
  '÷': '/',
} as const;