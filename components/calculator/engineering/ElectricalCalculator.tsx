'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { calculatePower } from '@/lib/calculators/engineering';

export function ElectricalCalculator() {
  const [voltage, setVoltage] = useState('');
  const [current, setCurrent] = useState('');
  const [power, setPower] = useState<number | null>(null);

  const handleCalculate = () => {
    const voltageValue = parseFloat(voltage);
    const currentValue = parseFloat(current);
    
    if (!isNaN(voltageValue) && !isNaN(currentValue)) {
      setPower(calculatePower(voltageValue, currentValue));
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
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
      </div>
      <Button onClick={handleCalculate} className="w-full">
        Calculate Power
      </Button>
      {power !== null && (
        <div className="p-4 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">Electrical Power</h3>
          <p className="text-2xl font-bold">{power.toFixed(2)} W</p>
        </div>
      )}
    </div>
  );
}