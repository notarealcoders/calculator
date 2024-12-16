'use client';

import { BreakEvenCalculator } from '@/components/calculator/financial/BreakEvenCalculator';

export default function BreakEvenPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Break-Even Analysis</h1>
        <p className="text-muted-foreground">
          Calculate your break-even point considering fixed costs, variable costs, and pricing.
        </p>
      </div>
      <BreakEvenCalculator />
    </div>
  );
}