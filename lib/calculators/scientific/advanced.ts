export const calculateFactorial = (n: number): number => {
  if (n < 0) throw new Error('Factorial is not defined for negative numbers');
  if (n === 0 || n === 1) return 1;
  return n * calculateFactorial(n - 1);
};

export const calculatePower = (base: number, exponent: number): number => {
  return Math.pow(base, exponent);
};

export const calculateRoot = (number: number, n: number = 2): number => {
  return Math.pow(number, 1 / n);
};

export const calculateLogarithm = (number: number, base: number = 10): number => {
  return Math.log(number) / Math.log(base);
};

export const calculateNaturalLog = (number: number): number => {
  return Math.log(number);
};

export const calculateExponential = (x: number): number => {
  return Math.exp(x);
};