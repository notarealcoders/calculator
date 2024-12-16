export const evaluateBasicExpression = (expression: string): number => {
  try {
    // Remove any unsafe characters
    const sanitizedExpression = expression.replace(/[^0-9+\-*/().%]/g, '');
    return Function(`'use strict'; return (${sanitizedExpression})`)();
  } catch (error) {
    throw new Error('Invalid expression');
  }
};

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 8,
    minimumFractionDigits: 0,
  }).format(num);
};