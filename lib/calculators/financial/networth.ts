// Net worth calculation utilities
interface Asset {
  name: string;
  value: number;
  category: string;
  appreciationRate?: number;
}

interface Liability {
  name: string;
  amount: number;
  category: string;
  interestRate?: number;
}

export const calculateNetWorth = (
  assets: Asset[],
  liabilities: Liability[]
): {
  totalAssets: number;
  totalLiabilities: number;
  netWorth: number;
  breakdown: {
    assetsByCategory: { [key: string]: number };
    liabilitiesByCategory: { [key: string]: number };
  };
} => {
  const totalAssets = assets.reduce((sum, asset) => sum + asset.value, 0);
  const totalLiabilities = liabilities.reduce((sum, liability) => sum + liability.amount, 0);
  
  const assetsByCategory = assets.reduce((acc, asset) => {
    acc[asset.category] = (acc[asset.category] || 0) + asset.value;
    return acc;
  }, {} as { [key: string]: number });
  
  const liabilitiesByCategory = liabilities.reduce((acc, liability) => {
    acc[liability.category] = (acc[liability.category] || 0) + liability.amount;
    return acc;
  }, {} as { [key: string]: number });
  
  return {
    totalAssets,
    totalLiabilities,
    netWorth: totalAssets - totalLiabilities,
    breakdown: {
      assetsByCategory,
      liabilitiesByCategory
    }
  };
};