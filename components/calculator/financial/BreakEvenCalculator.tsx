'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { BreakEvenForm } from './breakeven/BreakEvenForm';
import { BreakEvenResults } from './breakeven/BreakEvenResults';
import { BreakEvenChart } from './breakeven/BreakEvenChart';

export function BreakEvenCalculator() {
  const [fixedCosts, setFixedCosts] = useState('');
  const [pricePerUnit, setPricePerUnit] = useState('');
  const [costPerUnit, setCostPerUnit] = useState('');
  const [results, setResults] = useState<{
    breakEvenUnits: number;
    breakEvenRevenue: number;
    contributionMargin: number;
    contributionMarginRatio: number;
  } | null>(null);

  const calculateBreakEven = () => {
    const fixed = parseFloat(fixedCosts);
    const price = parseFloat(pricePerUnit);
    const cost = parseFloat(costPerUnit);

    if (fixed && price && cost && price > cost) {
      const contributionMargin = price - cost;
      const contributionMarginRatio = contributionMargin / price;
      const breakEvenUnits = fixed / contributionMargin;
      const breakEvenRevenue = breakEvenUnits * price;

      setResults({
        breakEvenUnits,
        breakEvenRevenue,
        contributionMargin,
        contributionMarginRatio,
      });
    }
  };

  return (
    <div className="space-y-6">
      <BreakEvenForm
        fixedCosts={fixedCosts}
        setFixedCosts={setFixedCosts}
        pricePerUnit={pricePerUnit}
        setPricePerUnit={setPricePerUnit}
        costPerUnit={costPerUnit}
        setCostPerUnit={setCostPerUnit}
      />

      <Button onClick={calculateBreakEven} className="w-full">
        Calculate Break-Even Point
      </Button>

      {results && (
        <>
          <BreakEvenResults {...results} />
          <BreakEvenChart
            breakEvenUnits={results.breakEvenUnits}
            fixedCosts={parseFloat(fixedCosts)}
            pricePerUnit={parseFloat(pricePerUnit)}
            costPerUnit={parseFloat(costPerUnit)}
          />
        </>
      )}
    </div>
  );
}