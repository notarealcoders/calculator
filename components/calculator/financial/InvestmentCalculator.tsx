'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  calculateCompoundInterest,
  calculateReturnOnInvestment,
  calculateBreakEvenPoint,
} from '@/lib/calculators/financial/investment';

export function InvestmentCalculator() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [compoundingFrequency, setCompoundingFrequency] = useState('12');
  const [finalValue, setFinalValue] = useState('');
  const [fixedCosts, setFixedCosts] = useState('');
  const [pricePerUnit, setPricePerUnit] = useState('');
  const [costPerUnit, setCostPerUnit] = useState('');
  const [results, setResults] = useState<{
    futureValue?: number;
    roi?: number;
    breakEvenUnits?: number;
  }>({});

  const handleCalculateInvestment = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const y = parseFloat(years);
    const freq = parseFloat(compoundingFrequency);

    if (p && r && y && freq) {
      const futureValue = calculateCompoundInterest(p, r, y, freq);
      setResults({ ...results, futureValue });
    }
  };

  const handleCalculateROI = () => {
    const initial = parseFloat(principal);
    const final = parseFloat(finalValue);

    if (initial && final) {
      const roi = calculateReturnOnInvestment(initial, final);
      setResults({ ...results, roi });
    }
  };

  const handleCalculateBreakEven = () => {
    const fixed = parseFloat(fixedCosts);
    const price = parseFloat(pricePerUnit);
    const cost = parseFloat(costPerUnit);

    if (fixed && price && cost) {
      const breakEvenUnits = calculateBreakEvenPoint(fixed, price, cost);
      setResults({ ...results, breakEvenUnits });
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-6">
        {/* Compound Interest Calculator */}
        <div className="space-y-4">
          <h3 className="font-semibold">Compound Interest</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Principal Amount</Label>
              <Input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Annual Interest Rate (%)</Label>
              <Input
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Time (Years)</Label>
              <Input
                type="number"
                value={years}
                onChange={(e) => setYears(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Compounding Frequency</Label>
              <Select value={compoundingFrequency} onValueChange={setCompoundingFrequency}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Annually</SelectItem>
                  <SelectItem value="2">Semi-annually</SelectItem>
                  <SelectItem value="4">Quarterly</SelectItem>
                  <SelectItem value="12">Monthly</SelectItem>
                  <SelectItem value="365">Daily</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button onClick={handleCalculateInvestment} className="w-full">
            Calculate Future Value
          </Button>
          {results.futureValue && (
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Future Value</h4>
              <p className="text-2xl font-bold">
                ${results.futureValue.toFixed(2)}
              </p>
            </div>
          )}
        </div>

        {/* ROI Calculator */}
        <div className="space-y-4">
          <h3 className="font-semibold">Return on Investment</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Initial Investment</Label>
              <Input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Final Value</Label>
              <Input
                type="number"
                value={finalValue}
                onChange={(e) => setFinalValue(e.target.value)}
              />
            </div>
          </div>
          <Button onClick={handleCalculateROI} className="w-full">
            Calculate ROI
          </Button>
          {results.roi !== undefined && (
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Return on Investment</h4>
              <p className="text-2xl font-bold">{results.roi.toFixed(2)}%</p>
            </div>
          )}
        </div>

        {/* Break-even Analysis */}
        <div className="space-y-4">
          <h3 className="font-semibold">Break-even Analysis</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Fixed Costs</Label>
              <Input
                type="number"
                value={fixedCosts}
                onChange={(e) => setFixedCosts(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Price per Unit</Label>
              <Input
                type="number"
                value={pricePerUnit}
                onChange={(e) => setPricePerUnit(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Cost per Unit</Label>
              <Input
                type="number"
                value={costPerUnit}
                onChange={(e) => setCostPerUnit(e.target.value)}
              />
            </div>
          </div>
          <Button onClick={handleCalculateBreakEven} className="w-full">
            Calculate Break-even Point
          </Button>
          {results.breakEvenUnits !== undefined && (
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Break-even Point</h4>
              <p className="text-2xl font-bold">
                {Math.ceil(results.breakEvenUnits)} units
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}