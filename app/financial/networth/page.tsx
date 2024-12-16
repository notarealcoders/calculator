'use client';

import { NetWorthCalculator } from '@/components/calculator/financial/NetWorthCalculator';

export default function NetWorthPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Net Worth Calculator</h1>
        <p className="text-muted-foreground">
          Track your assets and liabilities to calculate your total net worth.
        </p>
      </div>
      <NetWorthCalculator />
    </div>
  );
}