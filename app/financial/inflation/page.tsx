'use client';

import { InflationCalculator } from '@/components/calculator/financial/InflationCalculator';

export default function InflationPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Inflation Calculator</h1>
        <p className="text-muted-foreground">
          Calculate the impact of inflation on purchasing power over time.
        </p>
      </div>
      <InflationCalculator />
    </div>
  );
}