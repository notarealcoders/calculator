export type TokenType = 'number' | 'operator' | 'parenthesis';

export type Token = {
  type: TokenType;
  value: string;
};

export type Operator = '+' | '-' | '×' | '÷' | '%';

export interface ParsedExpression {
  tokens: Token[];
  error?: string;
}