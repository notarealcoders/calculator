export const calculateIncomeTax = (
  income: number,
  taxBrackets: Array<{ threshold: number; rate: number }>
): number => {
  let tax = 0;
  let remainingIncome = income;

  for (let i = 0; i < taxBrackets.length; i++) {
    const currentBracket = taxBrackets[i];
    const nextBracket = taxBrackets[i + 1];
    const taxableAmount = nextBracket
      ? Math.min(nextBracket.threshold - currentBracket.threshold, remainingIncome)
      : remainingIncome;

    tax += taxableAmount * (currentBracket.rate / 100);
    remainingIncome -= taxableAmount;

    if (remainingIncome <= 0) break;
  }

  return tax;
};

export const calculateEffectiveTaxRate = (
  income: number,
  totalTax: number
): number => {
  return (totalTax / income) * 100;
};