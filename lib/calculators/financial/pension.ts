// Pension calculation utilities
export const calculatePensionBenefit = (
  salary: number,
  yearsOfService: number,
  accrualRate: number,
  employerContribution: number
): {
  monthlyBenefit: number;
  totalContributions: number;
  employerTotal: number;
} => {
  const annualBenefit = salary * (yearsOfService * (accrualRate / 100));
  const monthlyBenefit = annualBenefit / 12;
  const totalContributions = salary * (yearsOfService * 0.05); // Assuming 5% employee contribution
  const employerTotal = salary * (yearsOfService * (employerContribution / 100));
  
  return {
    monthlyBenefit,
    totalContributions,
    employerTotal
  };
};