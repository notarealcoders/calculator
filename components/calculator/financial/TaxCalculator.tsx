'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { calculateIncomeTax, calculateEffectiveTaxRate } from '@/lib/calculators/financial/tax';

const DEFAULT_TAX_BRACKETS = [
  { threshold: 0, rate: 10 },
  { threshold: 11000, rate: 12 },
  { threshold: 44725, rate: 22 },
  { threshold: 95375, rate: 24 },
  { threshold: 182100, rate: 32 },
  { threshold: 231250, rate: 35 },
  { threshold: 578125, rate: 37 },
];

export function TaxCalculator() {
  const [income, setIncome] = useState('');
  const [results, setResults] = useState<{
    tax: number;
    effectiveRate: number;
  } | null>(null);

  const handleCalculate = () => {
    const annualIncome = parseFloat(income);
    
    if (annualIncome) {
      const tax = calculateIncomeTax(annualIncome, DEFAULT_TAX_BRACKETS);
      const effectiveRate = calculateEffectiveTaxRate(annualIncome, tax);
      setResults({ tax, effectiveRate });
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Annual Income</Label>
          <Input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            placeholder="Enter annual income"
          />
        </div>

        <Button onClick={handleCalculate} className="w-full">
          Calculate Tax
        </Button>

        {results && (
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">Estimated Tax</h3>
              <p className="text-2xl font-bold">${results.tax.toFixed(2)}</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">Effective Tax Rate</h3>
              <p className="text-2xl font-bold">{results.effectiveRate.toFixed(2)}%</p>
            </div>
          </div>
        )}

        <div className="rounded-lg border">
          <div className="p-4 border-b bg-muted">
            <h3 className="font-semibold">2024 Tax Brackets</h3>
          </div>
          <div className="p-4">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left">Income Range</th>
                  <th className="text-right">Tax Rate</th>
                </tr>
              </thead>
              <tbody>
                {DEFAULT_TAX_BRACKETS.map((bracket, index) => {
                  const nextBracket = DEFAULT_TAX_BRACKETS[index + 1];
                  const range = nextBracket
                    ? `$${bracket.threshold.toLocaleString()} - $${(nextBracket.threshold - 1).toLocaleString()}`
                    : `$${bracket.threshold.toLocaleString()}+`;
                  
                  return (
                    <tr key={bracket.threshold} className="border-t">
                      <td className="py-2">{range}</td>
                      <td className="text-right">{bracket.rate}%</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}