'use client';

import { OptionsCalculator } from '@/components/calculator/financial/OptionsCalculator';

export default function OptionsPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Stock Options Calculator</h1>
        <p className="text-muted-foreground">
          Calculate potential profits and losses from stock options trading, including call and put options.
        </p>
      </div>
      <OptionsCalculator />
    </div>
  );
}