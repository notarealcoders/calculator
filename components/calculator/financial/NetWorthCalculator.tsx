'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { calculateNetWorth } from '@/lib/calculators/financial/networth';

interface Asset {
  name: string;
  value: number;
  category: string;
}

interface Liability {
  name: string;
  amount: number;
  category: string;
}

export function NetWorthCalculator() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [liabilities, setLiabilities] = useState<Liability[]>([]);
  const [results, setResults] = useState<ReturnType<typeof calculateNetWorth> | null>(null);

  const addAsset = () => {
    setAssets([...assets, { name: '', value: 0, category: 'Cash' }]);
  };

  const addLiability = () => {
    setLiabilities([...liabilities, { name: '', amount: 0, category: 'Debt' }]);
  };

  const updateAsset = (index: number, field: keyof Asset, value: string) => {
    const newAssets = [...assets];
    newAssets[index] = {
      ...newAssets[index],
      [field]: field === 'value' ? parseFloat(value) || 0 : value,
    };
    setAssets(newAssets);
  };

  const updateLiability = (index: number, field: keyof Liability, value: string) => {
    const newLiabilities = [...liabilities];
    newLiabilities[index] = {
      ...newLiabilities[index],
      [field]: field === 'amount' ? parseFloat(value) || 0 : value,
    };
    setLiabilities(newLiabilities);
  };

  const calculateTotal = () => {
    const result = calculateNetWorth(assets, liabilities);
    setResults(result);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-semibold">Assets</h3>
        {assets.map((asset, index) => (
          <div key={index} className="grid grid-cols-3 gap-4 p-4 bg-muted rounded-lg">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input
                value={asset.name}
                onChange={(e) => updateAsset(index, 'name', e.target.value)}
                placeholder="Asset name"
              />
            </div>
            <div className="space-y-2">
              <Label>Value</Label>
              <Input
                type="number"
                value={asset.value || ''}
                onChange={(e) => updateAsset(index, 'value', e.target.value)}
                placeholder="Value"
              />
            </div>
            <div className="space-y-2">
              <Label>Category</Label>
              <Input
                value={asset.category}
                onChange={(e) => updateAsset(index, 'category', e.target.value)}
                placeholder="Category"
              />
            </div>
          </div>
        ))}
        <Button onClick={addAsset} variant="outline" className="w-full">
          Add Asset
        </Button>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold">Liabilities</h3>
        {liabilities.map((liability, index) => (
          <div key={index} className="grid grid-cols-3 gap-4 p-4 bg-muted rounded-lg">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input
                value={liability.name}
                onChange={(e) => updateLiability(index, 'name', e.target.value)}
                placeholder="Liability name"
              />
            </div>
            <div className="space-y-2">
              <Label>Amount</Label>
              <Input
                type="number"
                value={liability.amount || ''}
                onChange={(e) => updateLiability(index, 'amount', e.target.value)}
                placeholder="Amount"
              />
            </div>
            <div className="space-y-2">
              <Label>Category</Label>
              <Input
                value={liability.category}
                onChange={(e) => updateLiability(index, 'category', e.target.value)}
                placeholder="Category"
              />
            </div>
          </div>
        ))}
        <Button onClick={addLiability} variant="outline" className="w-full">
          Add Liability
        </Button>
      </div>

      <Button onClick={calculateTotal} className="w-full">
        Calculate Net Worth
      </Button>

      {results && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Total Assets</h3>
            <p className="text-2xl font-bold">${results.totalAssets.toFixed(2)}</p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Total Liabilities</h3>
            <p className="text-2xl font-bold">${results.totalLiabilities.toFixed(2)}</p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Net Worth</h3>
            <p className="text-2xl font-bold">${results.netWorth.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
}