'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  calculateEquilibriumConstant,
  calculateDissociationConstant,
  calculateBufferPH
} from '@/lib/calculators/chemistry/equilibrium';

export function EquilibriumCalculator() {
  const [productConc, setProductConc] = useState(['']);
  const [reactantConc, setReactantConc] = useState(['']);
  const [productCoef, setProductCoef] = useState(['']);
  const [reactantCoef, setReactantCoef] = useState(['']);
  const [result, setResult] = useState<number | null>(null);

  const [acidConc, setAcidConc] = useState('');
  const [hPlusConc, setHPlusConc] = useState('');
  const [ka, setKa] = useState('');
  const [saltConc, setSaltConc] = useState('');

  const handleCalculateKeq = () => {
    const products = productConc.map(Number).filter(n => !isNaN(n));
    const reactants = reactantConc.map(Number).filter(n => !isNaN(n));
    const pCoef = productCoef.map(Number).filter(n => !isNaN(n));
    const rCoef = reactantCoef.map(Number).filter(n => !isNaN(n));

    if (products.length && reactants.length && pCoef.length && rCoef.length) {
      setResult(calculateEquilibriumConstant(products, reactants, pCoef, rCoef));
    }
  };

  const handleCalculateKa = () => {
    const acid = parseFloat(acidConc);
    const hPlus = parseFloat(hPlusConc);
    
    if (!isNaN(acid) && !isNaN(hPlus)) {
      setResult(calculateDissociationConstant(acid, hPlus));
    }
  };

  const handleCalculateBufferPH = () => {
    const acid = parseFloat(acidConc);
    const salt = parseFloat(saltConc);
    const kaValue = parseFloat(ka);
    
    if (!isNaN(acid) && !isNaN(salt) && !isNaN(kaValue)) {
      setResult(calculateBufferPH(acid, salt, kaValue));
    }
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="keq">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="keq">Equilibrium Constant</TabsTrigger>
          <TabsTrigger value="ka">Dissociation Constant</TabsTrigger>
          <TabsTrigger value="buffer">Buffer pH</TabsTrigger>
        </TabsList>

        <TabsContent value="keq" className="space-y-4">
          {/* Equilibrium Constant Calculator UI */}
          <Button onClick={handleCalculateKeq}>Calculate Keq</Button>
        </TabsContent>

        <TabsContent value="ka" className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Acid Concentration (M)</Label>
              <Input
                type="number"
                value={acidConc}
                onChange={(e) => setAcidConc(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>H+ Concentration (M)</Label>
              <Input
                type="number"
                value={hPlusConc}
                onChange={(e) => setHPlusConc(e.target.value)}
              />
            </div>
          </div>
          <Button onClick={handleCalculateKa} className="w-full">
            Calculate Ka
          </Button>
        </TabsContent>

        <TabsContent value="buffer" className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Acid Concentration (M)</Label>
              <Input
                type="number"
                value={acidConc}
                onChange={(e) => setAcidConc(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Salt Concentration (M)</Label>
              <Input
                type="number"
                value={saltConc}
                onChange={(e) => setSaltConc(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Ka Value</Label>
              <Input
                type="number"
                value={ka}
                onChange={(e) => setKa(e.target.value)}
              />
            </div>
          </div>
          <Button onClick={handleCalculateBufferPH} className="w-full">
            Calculate Buffer pH
          </Button>
        </TabsContent>
      </Tabs>

      {result !== null && (
        <div className="p-4 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">Result</h3>
          <p className="text-2xl font-bold">{result.toExponential(4)}</p>
        </div>
      )}
    </div>
  );
}