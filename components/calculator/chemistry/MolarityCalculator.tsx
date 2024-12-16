'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { calculateMolarity } from '@/lib/calculators/chemistry';

export function MolarityCalculator() {
  const [moles, setMoles] = useState('');
  const [volume, setVolume] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const molesValue = parseFloat(moles);
    const volumeValue = parseFloat(volume);
    
    if (!isNaN(molesValue) && !isNaN(volumeValue) && volumeValue !== 0) {
      setResult(calculateMolarity(molesValue, volumeValue));
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="moles">Number of Moles (mol)</Label>
          <Input
            id="moles"
            type="number"
            value={moles}
            onChange={(e) => setMoles(e.target.value)}
            placeholder="Enter moles"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="volume">Volume (L)</Label>
          <Input
            id="volume"
            type="number"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            placeholder="Enter volume"
          />
        </div>
      </div>
      <Button onClick={handleCalculate} className="w-full">
        Calculate Molarity
      </Button>
      {result !== null && (
        <div className="p-4 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">Molarity</h3>
          <p className="text-2xl font-bold">{result.toFixed(4)} M</p>
        </div>
      )}
    </div>
  );
}