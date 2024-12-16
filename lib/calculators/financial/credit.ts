// Credit card calculation utilities
export const calculateCreditCardPayoff = (
  balance: number,
  annualRate: number,
  minimumPayment: number,
  extraPayment: number = 0
): {
  months: number;
  totalInterest: number;
  totalPaid: number;
  schedule: Array<{
    month: number;
    payment: number;
    principal: number;
    interest: number;
    remainingBalance: number;
  }>;
} => {
  const monthlyRate = annualRate / 100 / 12;
  const schedule = [];
  let remainingBalance = balance;
  let month = 1;
  let totalInterest = 0;
  let totalPaid = 0;
  
  while (remainingBalance > 0) {
    const interest = remainingBalance * monthlyRate;
    const minRequired = Math.min(
      minimumPayment,
      remainingBalance + interest
    );
    const payment = Math.min(
      minRequired + extraPayment,
      remainingBalance + interest
    );
    const principal = payment - interest;
    
    remainingBalance = Math.max(0, remainingBalance - principal);
    totalInterest += interest;
    totalPaid += payment;
    
    schedule.push({
      month,
      payment,
      principal,
      interest,
      remainingBalance
    });
    
    month++;
  }
  
  return {
    months: month - 1,
    totalInterest,
    totalPaid,
    schedule
  };
};