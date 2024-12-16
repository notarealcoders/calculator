// Debt calculation utilities
interface Debt {
  name: string;
  balance: number;
  interestRate: number;
  minimumPayment: number;
}

export const calculateDebtPayoff = (
  debts: Debt[],
  extraPayment: number,
  method: 'snowball' | 'avalanche'
): Array<{
  month: number;
  payments: Array<{ debtName: string; amount: number; remainingBalance: number }>;
  totalPaid: number;
}> => {
  // Sort debts based on method
  const sortedDebts = [...debts].sort((a, b) => 
    method === 'snowball' 
      ? a.balance - b.balance 
      : b.interestRate - a.interestRate
  );
  
  let currentDebts = sortedDebts.map(debt => ({
    ...debt,
    remainingBalance: debt.balance
  }));
  
  const schedule = [];
  let month = 1;
  let extraAvailable = extraPayment;
  
  while (currentDebts.some(debt => debt.remainingBalance > 0)) {
    const monthPayments = [];
    let totalPaid = 0;
    
    for (const debt of currentDebts) {
      if (debt.remainingBalance <= 0) continue;
      
      const payment = debt.minimumPayment + 
        (debt === currentDebts[0] ? extraAvailable : 0);
      const interest = (debt.remainingBalance * debt.interestRate) / 1200;
      const principal = Math.min(payment, debt.remainingBalance + interest);
      
      debt.remainingBalance = Math.max(
        0, 
        debt.remainingBalance + interest - principal
      );
      
      monthPayments.push({
        debtName: debt.name,
        amount: principal,
        remainingBalance: debt.remainingBalance
      });
      
      totalPaid += principal;
    }
    
    schedule.push({
      month,
      payments: monthPayments,
      totalPaid
    });
    
    month++;
  }
  
  return schedule;
};