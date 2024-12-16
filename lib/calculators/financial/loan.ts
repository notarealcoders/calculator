export const calculateMonthlyPayment = (
  principal: number,
  annualRate: number,
  years: number
): number => {
  const monthlyRate = annualRate / 100 / 12;
  const months = years * 12;
  return (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
         (Math.pow(1 + monthlyRate, months) - 1);
};

export const calculateTotalInterest = (
  monthlyPayment: number,
  principal: number,
  years: number
): number => {
  return monthlyPayment * years * 12 - principal;
};

export const calculateAmortizationSchedule = (
  principal: number,
  annualRate: number,
  years: number
): Array<{
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}> => {
  const monthlyRate = annualRate / 100 / 12;
  const monthlyPayment = calculateMonthlyPayment(principal, annualRate, years);
  const schedule = [];
  let balance = principal;

  for (let i = 1; i <= years * 12; i++) {
    const interest = balance * monthlyRate;
    const principalPaid = monthlyPayment - interest;
    balance -= principalPaid;

    schedule.push({
      payment: i,
      principal: principalPaid,
      interest,
      balance: Math.max(0, balance)
    });
  }

  return schedule;
};