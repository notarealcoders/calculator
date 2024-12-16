'use client';

import { useState } from 'react';
import { Display } from '@/components/calculator/Display';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

export function ProgrammerCalculator() {
  const [display, setDisplay] = useState('0');
  const [base, setBase] = useState<'hex' | 'dec' | 'oct' | 'bin'>('dec');

  const numberKeys = [
    ['D', 'E', 'F', 'AC'],
    ['A', 'B', 'C', '⌫'],
    ['7', '8', '9', '÷'],
    ['4', '5', '6', '×'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
  ];

  const bitwiseKeys = [
    ['AND', 'OR', 'XOR', 'NOT'],
    ['<<', '>>', 'ROL', 'ROR'],
  ];

  return (
    <Card className="p-6 space-y-6">
      <Tabs defaultValue="dec" onValueChange={(v) => setBase(v as any)}>
        <TabsList className="grid grid-cols-4">
          <TabsTrigger value="hex">HEX</TabsTrigger>
          <TabsTrigger value="dec">DEC</TabsTrigger>
          <TabsTrigger value="oct">OCT</TabsTrigger>
          <TabsTrigger value="bin">BIN</TabsTrigger>
        </TabsList>
      </Tabs>

      <Display value={display} />

      <div className="space-y-2">
        <div className="grid grid-cols-4 gap-2">
          {bitwiseKeys.map((row, rowIndex) =>
            row.map((key, colIndex) => (
              <Button
                key={`${rowIndex}-${colIndex}`}
                variant="secondary"
                className="h-10 text-sm"
              >
                {key}
              </Button>
            ))
          )}
        </div>

        <div className="grid grid-cols-4 gap-2">
          {numberKeys.map((row, rowIndex) =>
            row.map((key, colIndex) => (
              <Button
                key={`${rowIndex}-${colIndex}`}
                variant={['=', 'AC'].includes(key) ? 'default' : 'outline'}
                className={cn(
                  "h-14 text-sm font-medium",
                  key === '=' && "bg-primary text-primary-foreground hover:bg-primary/90",
                  key === 'AC' && "bg-destructive text-destructive-foreground hover:bg-destructive/90"
                )}
                disabled={
                  base === 'bin' && !['0', '1', 'AC', '⌫', '='].includes(key) ||
                  base === 'oct' && parseInt(key) >= 8 && !['AC', '⌫', '='].includes(key) ||
                  base === 'dec' && ['A', 'B', 'C', 'D', 'E', 'F'].includes(key)
                }
              >
                {key}
              </Button>
            ))
          )}
        </div>
      </div>
    </Card>
  );
}