'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface BreakEvenFormProps {
  fixedCosts: string;
  setFixedCosts: (value: string) => void;
  pricePerUnit: string;
  setPricePerUnit: (value: string) => void;
  costPerUnit: string;
  setCostPerUnit: (value: string) => void;
}

export function BreakEvenForm({
  fixedCosts,
  setFixedCosts,
  pricePerUnit,
  setPricePerUnit,
  costPerUnit,
  setCostPerUnit,
}: BreakEvenFormProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="space-y-2">
        <Label htmlFor="fixedCosts">Fixed Costs</Label>
        <Input
          id="fixedCosts"
          type="number"
          value={fixedCosts}
          onChange={(e) => setFixedCosts(e.target.value)}
          placeholder="Enter fixed costs"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="pricePerUnit">Price per Unit</Label>
        <Input
          id="pricePerUnit"
          type="number"
          value={pricePerUnit}
          onChange={(e) => setPricePerUnit(e.target.value)}
          placeholder="Enter price per unit"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="costPerUnit">Cost per Unit</Label>
        <Input
          id="costPerUnit"
          type="number"
          value={costPerUnit}
          onChange={(e) => setCostPerUnit(e.target.value)}
          placeholder="Enter cost per unit"
        />
      </div>
    </div>
  );
}