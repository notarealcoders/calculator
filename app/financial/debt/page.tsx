'use client';

import { DebtCalculator } from '@/components/calculator/financial/DebtCalculator';

export default function DebtPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Debt Payoff Calculator</h1>
        <p className="text-muted-foreground">
          Create a debt payoff strategy using the snowball or avalanche method.
        </p>
      </div>
      <DebtCalculator />
    </div>
  );
}