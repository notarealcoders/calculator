'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { calculatePH, calculatepOH } from '@/lib/calculators/chemistry';

export function PHCalculator() {
  const [concentration, setConcentration] = useState('');
  const [type, setType] = useState<'pH' | 'pOH'>('pH');
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const value = parseFloat(concentration);
    if (!isNaN(value) && value > 0) {
      setResult(type === 'pH' ? calculatePH(value) : calculatepOH(value));
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="concentration">
          {type === 'pH' ? '[H+]' : '[OH-]'} Concentration (mol/L)
        </Label>
        <Input
          id="concentration"
          type="number"
          value={concentration}
          onChange={(e) => setConcentration(e.target.value)}
          placeholder="Enter concentration"
        />
      </div>
      <div className="flex gap-2">
        <Button
          variant={type === 'pH' ? 'default' : 'outline'}
          onClick={() => setType('pH')}
          className="flex-1"
        >
          Calculate pH
        </Button>
        <Button
          variant={type === 'pOH' ? 'default' : 'outline'}
          onClick={() => setType('pOH')}
          className="flex-1"
        >
          Calculate pOH
        </Button>
      </div>
      <Button onClick={handleCalculate} className="w-full">
        Calculate
      </Button>
      {result !== null && (
        <div className="p-4 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">{type.toUpperCase()} Value</h3>
          <p className="text-2xl font-bold">{result.toFixed(2)}</p>
          <p className="text-sm text-muted-foreground mt-2">
            {result < 7 ? 'Acidic' : result > 7 ? 'Basic' : 'Neutral'}
          </p>
        </div>
      )}
    </div>
  );
}