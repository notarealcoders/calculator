'use client';

import { PensionCalculator } from '@/components/calculator/financial/PensionCalculator';

export default function PensionPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Pension Calculator</h1>
        <p className="text-muted-foreground">
          Calculate expected pension benefits based on salary, years of service, and contribution rates.
        </p>
      </div>
      <PensionCalculator />
    </div>
  );
}