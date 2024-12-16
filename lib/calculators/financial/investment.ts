export const calculateCompoundInterest = (
  principal: number,
  rate: number,
  years: number,
  compoundingFrequency: number = 12
): number => {
  const r = rate / 100;
  return principal * Math.pow(1 + r / compoundingFrequency, compoundingFrequency * years);
};

export const calculateReturnOnInvestment = (
  initialInvestment: number,
  finalValue: number
): number => {
  return ((finalValue - initialInvestment) / initialInvestment) * 100;
};

export const calculateBreakEvenPoint = (
  fixedCosts: number,
  pricePerUnit: number,
  costPerUnit: number
): number => {
  return fixedCosts / (pricePerUnit - costPerUnit);
};