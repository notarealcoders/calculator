// Stock options calculation utilities
interface OptionParams {
  strikePrice: number;
  currentPrice: number;
  premium: number;
  quantity: number;
}

export const calculateCallOptionProfit = ({
  strikePrice,
  currentPrice,
  premium,
  quantity
}: OptionParams): {
  profit: number;
  breakEven: number;
  returnOnInvestment: number;
} => {
  const totalPremium = premium * quantity * 100; // Each option contract is for 100 shares
  const profit = currentPrice > strikePrice
    ? ((currentPrice - strikePrice) * quantity * 100) - totalPremium
    : -totalPremium;
  
  return {
    profit,
    breakEven: strikePrice + premium,
    returnOnInvestment: (profit / totalPremium) * 100
  };
};

export const calculatePutOptionProfit = ({
  strikePrice,
  currentPrice,
  premium,
  quantity
}: OptionParams): {
  profit: number;
  breakEven: number;
  returnOnInvestment: number;
} => {
  const totalPremium = premium * quantity * 100;
  const profit = currentPrice < strikePrice
    ? ((strikePrice - currentPrice) * quantity * 100) - totalPremium
    : -totalPremium;
  
  return {
    profit,
    breakEven: strikePrice - premium,
    returnOnInvestment: (profit / totalPremium) * 100
  };
};