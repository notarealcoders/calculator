'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { calculateWork, calculateStress, calculateStrain } from '@/lib/calculators/engineering';

export function MechanicsCalculator() {
  const [force, setForce] = useState('');
  const [distance, setDistance] = useState('');
  const [area, setArea] = useState('');
  const [deformation, setDeformation] = useState('');
  const [originalLength, setOriginalLength] = useState('');
  const [results, setResults] = useState<{
    work?: number;
    stress?: number;
    strain?: number;
  }>({});

  const handleCalculate = () => {
    const forceValue = parseFloat(force);
    const distanceValue = parseFloat(distance);
    const areaValue = parseFloat(area);
    const deformationValue = parseFloat(deformation);
    const originalLengthValue = parseFloat(originalLength);

    const newResults = { ...results };

    if (!isNaN(forceValue) && !isNaN(distanceValue)) {
      newResults.work = calculateWork(forceValue, distanceValue);
    }

    if (!isNaN(forceValue) && !isNaN(areaValue)) {
      newResults.stress = calculateStress(forceValue, areaValue);
    }

    if (!isNaN(deformationValue) && !isNaN(originalLengthValue)) {
      newResults.strain = calculateStrain(deformationValue, originalLengthValue);
    }

    setResults(newResults);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="force">Force (N)</Label>
          <Input
            id="force"
            type="number"
            value={force}
            onChange={(e) => setForce(e.target.value)}
            placeholder="Enter force"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="distance">Distance (m)</Label>
          <Input
            id="distance"
            type="number"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            placeholder="Enter distance"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="area">Cross-sectional Area (m²)</Label>
          <Input
            id="area"
            type="number"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="Enter area"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="deformation">Deformation (m)</Label>
          <Input
            id="deformation"
            type="number"
            value={deformation}
            onChange={(e) => setDeformation(e.target.value)}
            placeholder="Enter deformation"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="originalLength">Original Length (m)</Label>
          <Input
            id="originalLength"
            type="number"
            value={originalLength}
            onChange={(e) => setOriginalLength(e.target.value)}
            placeholder="Enter original length"
          />
        </div>
      </div>

      <Button onClick={handleCalculate} className="w-full">
        Calculate
      </Button>

      {Object.keys(results).length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {results.work !== undefined && (
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">Work Done</h3>
              <p className="text-2xl font-bold">{results.work.toFixed(2)} J</p>
            </div>
          )}
          {results.stress !== undefined && (
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">Stress</h3>
              <p className="text-2xl font-bold">{results.stress.toFixed(2)} Pa</p>
            </div>
          )}
          {results.strain !== undefined && (
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">Strain</h3>
              <p className="text-2xl font-bold">{results.strain.toFixed(4)}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}