'use client';

import { CreditCardCalculator } from '@/components/calculator/financial/CreditCardCalculator';

export default function CreditCardPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Credit Card Payoff Calculator</h1>
        <p className="text-muted-foreground">
          Plan your credit card debt payoff strategy and see how extra payments can save you money.
        </p>
      </div>
      <CreditCardCalculator />
    </div>
  );
}