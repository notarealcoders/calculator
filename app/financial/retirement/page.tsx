'use client';

import { RetirementCalculator } from '@/components/calculator/financial/RetirementCalculator';

export default function RetirementPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Retirement Calculator</h1>
        <p className="text-muted-foreground">
          Plan for retirement by calculating needed savings and analyzing different scenarios.
        </p>
      </div>
      <RetirementCalculator />
    </div>
  );
}