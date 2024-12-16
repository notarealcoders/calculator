'use client';

import { useState } from 'react';
import { Display } from '@/components/calculator/Display';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function ScientificCalculator() {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [isNewCalculation, setIsNewCalculation] = useState(true);

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

  const handleKeyPress = (key: string) => {
    // Implementation will be added in the next iteration
    console.log(key);
  };

  return (
    <Card className="p-6 space-y-6">
      <Display value={display} expression={expression} />
      <div className="grid grid-cols-4 gap-2">
        {scientificKeys.map((row, rowIndex) =>
          row.map((key, colIndex) => (
            <Button
              key={`${rowIndex}-${colIndex}`}
              variant={['=', 'C'].includes(key) ? 'default' : 'outline'}
              className={cn(
                "h-14 text-sm font-medium",
                key === '=' && "bg-primary text-primary-foreground hover:bg-primary/90",
                key === 'C' && "bg-destructive text-destructive-foreground hover:bg-destructive/90"
              )}
              onClick={() => handleKeyPress(key)}
            >
              {key}
            </Button>
          ))
        )}
      </div>
    </Card>
  );
}