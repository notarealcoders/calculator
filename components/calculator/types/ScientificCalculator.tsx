'use client';

import { useState } from 'react';
import { Display } from '@/components/calculator/Display';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import * as Trig from '@/lib/calculators/scientific/trigonometry';
import * as Advanced from '@/lib/calculators/scientific/advanced';

export function ScientificCalculator() {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [isDegrees, setIsDegrees] = useState(true);
  const [angle, setAngle] = useState('');
  const [base, setBase] = useState('');
  const [exponent, setExponent] = useState('');

  const scientificKeys = [
    ['sin', 'cos', 'tan', 'π'],
    ['asin', 'acos', 'atan', 'e'],
    ['log', 'ln', 'x²', '√'],
    ['(', ')', '^', '!'],
    ['7', '8', '9', '÷'],
    ['4', '5', '6', '×'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
    ['C', 'DEG', 'RAD', '%'],
  ];

  const handleTrigFunction = (func: string) => {
    const angleValue = parseFloat(angle);
    if (isNaN(angleValue)) return;

    let result: number;
    switch (func) {
      case 'sin':
        result = Trig.calculateSin(angleValue, isDegrees);
        break;
      case 'cos':
        result = Trig.calculateCos(angleValue, isDegrees);
        break;
      case 'tan':
        result = Trig.calculateTan(angleValue, isDegrees);
        break;
      default:
        return;
    }
    setDisplay(result.toFixed(8));
  };

  const handleAdvancedFunction = (func: string) => {
    const baseValue = parseFloat(base);
    const expValue = parseFloat(exponent);
    
    if (isNaN(baseValue)) return;

    let result: number;
    switch (func) {
      case 'power':
        if (isNaN(expValue)) return;
        result = Advanced.calculatePower(baseValue, expValue);
        break;
      case 'root':
        result = Advanced.calculateRoot(baseValue, expValue || 2);
        break;
      case 'factorial':
        result = Advanced.calculateFactorial(baseValue);
        break;
      case 'log':
        result = Advanced.calculateLogarithm(baseValue, expValue || 10);
        break;
      case 'ln':
        result = Advanced.calculateNaturalLog(baseValue);
        break;
      default:
        return;
    }
    setDisplay(result.toFixed(8));
  };

  return (
    <Card className="p-6">
      <Tabs defaultValue="basic" className="space-y-4">
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="basic">Basic</TabsTrigger>
          <TabsTrigger value="trigonometry">Trigonometry</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="basic">
          <Display value={display} expression={expression} />
          <div className="grid grid-cols-4 gap-2 mt-4">
            {scientificKeys.map((row, i) =>
              row.map((key, j) => (
                <Button
                  key={`${i}-${j}`}
                  variant={['=', 'C'].includes(key) ? 'default' : 'outline'}
                  className={cn(
                    "h-14 text-sm font-medium",
                    key === '=' && "bg-primary text-primary-foreground hover:bg-primary/90",
                    key === 'C' && "bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  )}
                >
                  {key}
                </Button>
              ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="trigonometry" className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>Angle Mode</Label>
            <div className="flex items-center space-x-2">
              <Label>DEG</Label>
              <Switch
                checked={!isDegrees}
                onCheckedChange={(checked) => setIsDegrees(!checked)}
              />
              <Label>RAD</Label>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Angle</Label>
              <Input
                type="number"
                value={angle}
                onChange={(e) => setAngle(e.target.value)}
                placeholder={`Enter angle in ${isDegrees ? 'degrees' : 'radians'}`}
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <Button onClick={() => handleTrigFunction('sin')}>sin</Button>
              <Button onClick={() => handleTrigFunction('cos')}>cos</Button>
              <Button onClick={() => handleTrigFunction('tan')}>tan</Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Base Number</Label>
              <Input
                type="number"
                value={base}
                onChange={(e) => setBase(e.target.value)}
                placeholder="Enter base number"
              />
            </div>
            <div className="space-y-2">
              <Label>Exponent/Root</Label>
              <Input
                type="number"
                value={exponent}
                onChange={(e) => setExponent(e.target.value)}
                placeholder="Enter exponent or root"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button onClick={() => handleAdvancedFunction('power')}>Power</Button>
              <Button onClick={() => handleAdvancedFunction('root')}>Root</Button>
              <Button onClick={() => handleAdvancedFunction('log')}>Log</Button>
              <Button onClick={() => handleAdvancedFunction('ln')}>Ln</Button>
              <Button onClick={() => handleAdvancedFunction('factorial')}>Factorial</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
}