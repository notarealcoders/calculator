'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export function InflationCalculator() {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculateInflation = () => {
    const initialAmount = parseFloat(amount);
    const inflationRate = parseFloat(rate) / 100;
    const numYears = parseFloat(years);

    if (initialAmount && inflationRate && numYears) {
      const futureAmount = initialAmount * Math.pow(1 + inflationRate, numYears);
      setResult(futureAmount);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="amount">Initial Amount ($)</Label>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="rate">Annual Inflation Rate (%)</Label>
          <Input
            id="rate"
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="Enter rate"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="years">Number of Years</Label>
          <Input
            id="years"
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            placeholder="Enter years"
          />
        </div>
      </div>

      <Button onClick={calculateInflation} className="w-full">
        Calculate Future Value
      </Button>

      {result !== null && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Initial Amount</h3>
            <p className="text-2xl font-bold">${parseFloat(amount).toFixed(2)}</p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Future Value</h3>
            <p className="text-2xl font-bold">${result.toFixed(2)}</p>
            <p className="text-sm text-muted-foreground mt-2">
              Loss of purchasing power: ${(result - parseFloat(amount)).toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}