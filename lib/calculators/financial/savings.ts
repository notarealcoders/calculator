// Savings calculation utilities
export const calculateMonthlyContribution = (
  goal: number,
  currentSavings: number,
  annualRate: number,
  years: number
): number => {
  const monthlyRate = annualRate / 100 / 12;
  const months = years * 12;
  const futureValue = goal;
  const presentValue = currentSavings;

  return (
    (futureValue - presentValue * Math.pow(1 + monthlyRate, months)) *
    (monthlyRate / (Math.pow(1 + monthlyRate, months) - 1))
  );
};

export const calculateTimeToReachGoal = (
  goal: number,
  currentSavings: number,
  monthlyContribution: number,
  annualRate: number
): number => {
  const monthlyRate = annualRate / 100 / 12;
  
  return Math.log(
    (goal * monthlyRate + monthlyContribution) /
    (currentSavings * monthlyRate + monthlyContribution)
  ) / Math.log(1 + monthlyRate) / 12;
};