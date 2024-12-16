'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { calculateMoles } from '@/lib/calculators/chemistry';

export function MolesCalculator() {
  const [mass, setMass] = useState('');
  const [molarMass, setMolarMass] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const massValue = parseFloat(mass);
    const molarMassValue = parseFloat(molarMass);
    
    if (!isNaN(massValue) && !isNaN(molarMassValue) && molarMassValue !== 0) {
      setResult(calculateMoles(massValue, molarMassValue));
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="mass">Mass (g)</Label>
          <Input
            id="mass"
            type="number"
            value={mass}
            onChange={(e) => setMass(e.target.value)}
            placeholder="Enter mass"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="molarMass">Molar Mass (g/mol)</Label>
          <Input
            id="molarMass"
            type="number"
            value={molarMass}
            onChange={(e) => setMolarMass(e.target.value)}
            placeholder="Enter molar mass"
          />
        </div>
      </div>
      <Button onClick={handleCalculate} className="w-full">
        Calculate Moles
      </Button>
      {result !== null && (
        <div className="p-4 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">Number of Moles</h3>
          <p className="text-2xl font-bold">{result.toFixed(4)} moles</p>
        </div>
      )}
    </div>
  );
}