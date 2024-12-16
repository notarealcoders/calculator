export type CalculatorType = 
  | 'basic'
  | 'scientific'
  | 'programmer'
  | 'financial'
  | 'unit'
  | 'statistical'
  | 'engineering'
  | 'chemistry'
  | 'health'
  | 'datetime';

export interface CalculationHistory {
  type: CalculatorType;
  expression: string;
  result: string;
  timestamp: Date;
}