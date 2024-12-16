import { tokenize } from './basic/tokenizer';
import { parseToRPN } from './basic/parser';
import { evaluateRPN } from './basic/evaluator';
export { formatNumber } from './basic/formatter';

export function evaluateBasicExpression(expression: string): number {
  try {
    const { tokens, error } = tokenize(expression);
    if (error) throw new Error(error);
    
    const rpn = parseToRPN(tokens);
    const result = evaluateRPN(rpn);
    
    if (!isFinite(result)) {
      throw new Error('Result is not a finite number');
    }
    
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Calculation error: ${error.message}`);
    }
    throw new Error('Invalid expression');
  }
}