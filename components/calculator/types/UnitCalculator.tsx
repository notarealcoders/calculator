'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type UnitType = 'length' | 'weight' | 'temperature';

const unitOptions = {
  length: ['meters', 'kilometers', 'miles', 'feet', 'inches'],
  weight: ['kilograms', 'grams', 'pounds', 'ounces'],
  temperature: ['celsius', 'fahrenheit', 'kelvin'],
};

export function UnitCalculator() {
  const [unitType, setUnitType] = useState<UnitType>('length');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [value, setValue] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const convert = () => {
    const inputValue = parseFloat(value);
    if (isNaN(inputValue)) return;

    let converted: number;

    // Basic conversion logic (to be expanded)
    if (unitType === 'length') {
      // Convert everything to meters first
      let inMeters = inputValue;
      switch (fromUnit) {
        case 'kilometers':
          inMeters = inputValue * 1000;
          break;
        case 'miles':
          inMeters = inputValue * 1609.34;
          break;
        case 'feet':
          inMeters = inputValue * 0.3048;
          break;
        case 'inches':
          inMeters = inputValue * 0.0254;
          break;
      }

      // Convert from meters to target unit
      switch (toUnit) {
        case 'kilometers':
          converted = inMeters / 1000;
          break;
        case 'miles':
          converted = inMeters / 1609.34;
          break;
        case 'feet':
          converted = inMeters / 0.3048;
          break;
        case 'inches':
          converted = inMeters / 0.0254;
          break;
        default:
          converted = inMeters;
      }
    } else {
      converted = inputValue; // Placeholder for other conversions
    }

    setResult(converted);
  };

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="space-y-2">
          <Label>Unit Type</Label>
          <Select
            value={unitType}
            onValueChange={(value: UnitType) => {
              setUnitType(value);
              setFromUnit('');
              setToUnit('');
              setResult(null);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select unit type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="length">Length</SelectItem>
              <SelectItem value="weight">Weight</SelectItem>
              <SelectItem value="temperature">Temperature</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>From</Label>
            <Select value={fromUnit} onValueChange={setFromUnit}>
              <SelectTrigger>
                <SelectValue placeholder="Select unit" />
              </SelectTrigger>
              <SelectContent>
                {unitOptions[unitType].map((unit) => (
                  <SelectItem key={unit} value={unit}>
                    {unit}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>To</Label>
            <Select value={toUnit} onValueChange={setToUnit}>
              <SelectTrigger>
                <SelectValue placeholder="Select unit" />
              </SelectTrigger>
              <SelectContent>
                {unitOptions[unitType].map((unit) => (
                  <SelectItem key={unit} value={unit}>
                    {unit}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Value</Label>
          <Input
            type="number"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              convert();
            }}
            placeholder="Enter value to convert"
          />
        </div>

        {result !== null && (
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Result</h3>
            <p className="text-2xl font-bold">
              {result.toFixed(4)} {toUnit}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}