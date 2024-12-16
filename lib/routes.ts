import { CalculatorType } from './types';

interface Route {
  path: string;
  label: string;
  type: CalculatorType;
}

export const calculatorRoutes: Route[] = [
  { path: '/', label: 'Basic', type: 'basic' },
  { path: '/scientific', label: 'Scientific', type: 'scientific' },
  { path: '/programmer', label: 'Programmer', type: 'programmer' },
  { path: '/financial', label: 'Financial', type: 'financial' },
  { path: '/unit', label: 'Unit', type: 'unit' },
  { path: '/statistical', label: 'Statistical', type: 'statistical' },
  { path: '/engineering', label: 'Engineering', type: 'engineering' },
  { path: '/chemistry', label: 'Chemistry', type: 'chemistry' },
  { path: '/health', label: 'Health', type: 'health' },
  { path: '/datetime', label: 'Date/Time', type: 'datetime' },
];