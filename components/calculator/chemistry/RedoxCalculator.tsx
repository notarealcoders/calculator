'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { balanceRedoxEquation } from '@/lib/calculators/chemistry';

export function RedoxCalculator() {
  const [oxidationNumber1, setOxidationNumber1] = useState('');
  const [oxidationNumber2, setOxidationNumber2] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const value1 = parseFloat(oxidationNumber1);
    const value2 = parseFloat(oxidationNumber2);
    
    if (!isNaN(value1) && !isNaN(value2)) {
      setResult(balanceRedoxEquation(value1, value2));
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="oxidation1">Initial Oxidation Number</Label>
          <Input
            id="oxidation1"
            type="number"
            value={oxidationNumber1}
            onChange={(e) => setOxidationNumber1(e.target.value)}
            placeholder="Enter oxidation number"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="oxidation2">Final Oxidation Number</Label>
          <Input
            id="oxidation2"
            type="number"
            value={oxidationNumber2}
            onChange={(e) => setOxidationNumber2(e.target.value)}
            placeholder="Enter oxidation number"
          />
        </div>
      </div>
      <Button onClick={handleCalculate} className="w-full">
        Balance Redox Equation
      </Button>
      {result !== null && (
        <div className="p-4 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">Number of Electrons Transferred</h3>
          <p className="text-2xl font-bold">{result} e⁻</p>
        </div>
      )}
    </div>
  );
}