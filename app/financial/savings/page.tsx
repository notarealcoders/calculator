'use client';

import { SavingsCalculator } from '@/components/calculator/financial/SavingsCalculator';

export default function SavingsPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Savings Goal Calculator</h1>
        <p className="text-muted-foreground">
          Plan your savings goals and calculate monthly contributions needed to reach your target.
        </p>
      </div>
      <SavingsCalculator />
    </div>
  );
}