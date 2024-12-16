'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { calculateResistance, calculateVoltage, calculateCurrent } from '@/lib/calculators/engineering';

export function CircuitCalculator() {
  const [voltage, setVoltage] = useState('');
  const [current, setCurrent] = useState('');
  const [resistance, setResistance] = useState('');
  const [target, setTarget] = useState<'voltage' | 'current' | 'resistance'>('voltage');
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const V = parseFloat(voltage);
    const I = parseFloat(current);
    const R = parseFloat(resistance);

    switch (target) {
      case 'voltage':
        if (!isNaN(I) && !isNaN(R)) {
          setResult(calculateVoltage(I, R));
        }
        break;
      case 'current':
        if (!isNaN(V) && !isNaN(R) && R !== 0) {
          setResult(calculateCurrent(V, R));
        }
        break;
      case 'resistance':
        if (!isNaN(V) && !isNaN(I) && I !== 0) {
          setResult(calculateResistance(V, I));
        }
        break;
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Calculate</Label>
        <Select value={target} onValueChange={(value: 'voltage' | 'current' | 'resistance') => setTarget(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select what to calculate" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="voltage">Voltage (V)</SelectItem>
            <SelectItem value="current">Current (A)</SelectItem>
            <SelectItem value="resistance">Resistance (Ω)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {target !== 'voltage' && (
          <div className="space-y-2">
            <Label htmlFor="voltage">Voltage (V)</Label>
            <Input
              id="voltage"
              type="number"
              value={voltage}
              onChange={(e) => setVoltage(e.target.value)}
              placeholder="Enter voltage"
            />
          </div>
        )}
        {target !== 'current' && (
          <div className="space-y-2">
            <Label htmlFor="current">Current (A)</Label>
            <Input
              id="current"
              type="number"
              value={current}
              onChange={(e) => setCurrent(e.target.value)}
              placeholder="Enter current"
            />
          </div>
        )}
        {target !== 'resistance' && (
          <div className="space-y-2">
            <Label htmlFor="resistance">Resistance (Ω)</Label>
            <Input
              id="resistance"
              type="number"
              value={resistance}
              onChange={(e) => setResistance(e.target.value)}
              placeholder="Enter resistance"
            />
          </div>
        )}
      </div>

      <Button onClick={handleCalculate} className="w-full">
        Calculate {target.charAt(0).toUpperCase() + target.slice(1)}
      </Button>

      {result !== null && (
        <div className="p-4 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">{target.charAt(0).toUpperCase() + target.slice(1)}</h3>
          <p className="text-2xl font-bold">
            {result.toFixed(2)} {target === 'voltage' ? 'V' : target === 'current' ? 'A' : 'Ω'}
          </p>
        </div>
      )}
    </div>
  );
}