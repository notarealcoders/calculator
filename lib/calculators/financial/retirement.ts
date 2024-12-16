// Retirement calculation utilities
export const calculateRetirementNeeds = (
  currentAge: number,
  retirementAge: number,
  lifeExpectancy: number,
  annualExpenses: number,
  inflationRate: number,
  returnRate: number,
  currentSavings: number,
  monthlyContribution: number,
  socialSecurity: number
): {
  totalNeeded: number;
  monthlyNeeded: number;
  projectedSavings: number;
  shortfall: number;
} => {
  const yearsUntilRetirement = retirementAge - currentAge;
  const yearsInRetirement = lifeExpectancy - retirementAge;
  
  // Calculate future annual expenses considering inflation
  const futureAnnualExpenses = annualExpenses * 
    Math.pow(1 + inflationRate / 100, yearsUntilRetirement);
  
  // Calculate total needed in retirement
  const totalNeeded = futureAnnualExpenses * yearsInRetirement * 
    (1 - Math.pow(1 + returnRate / 100, -yearsInRetirement)) / 
    (returnRate / 100);
  
  // Calculate projected savings at retirement
  const projectedSavings = currentSavings * 
    Math.pow(1 + returnRate / 100, yearsUntilRetirement) +
    monthlyContribution * 12 * 
    ((Math.pow(1 + returnRate / 100, yearsUntilRetirement) - 1) / 
    (returnRate / 100));
  
  // Calculate monthly savings needed
  const monthlyNeeded = (totalNeeded - projectedSavings) / 
    (yearsUntilRetirement * 12);
  
  // Calculate shortfall
  const shortfall = totalNeeded - projectedSavings - 
    (socialSecurity * 12 * yearsInRetirement);
  
  return {
    totalNeeded,
    monthlyNeeded,
    projectedSavings,
    shortfall
  };
};