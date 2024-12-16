'use client';

import { TaxCalculator } from '@/components/calculator/financial/TaxCalculator';

export default function TaxPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Tax Calculator</h1>
        <p className="text-muted-foreground">
          Estimate your income tax based on current tax brackets, including deductions and credits.
        </p>
      </div>
      <TaxCalculator />
    </div>
  );
}