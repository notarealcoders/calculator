'use client';

import { InvestmentCalculator } from '@/components/calculator/financial/InvestmentCalculator';

export default function InvestmentPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Investment Calculator</h1>
        <p className="text-muted-foreground">
          Analyze investment returns, calculate compound interest, and plan your investment strategy.
        </p>
      </div>
      <InvestmentCalculator />
    </div>
  );
}