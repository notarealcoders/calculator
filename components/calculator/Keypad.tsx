'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { KEYS } from '@/lib/calculators/basic/constants';

interface KeypadProps {
  onKeyPress: (key: string) => void;
  className?: string;
}

const keyLayout = [
  ['7', '8', '9', '÷'],
  ['4', '5', '6', '×'],
  ['1', '2', '3', '-'],
  ['0', '.', '=', '+'],
  ['C', '(', ')', '⌫']
];

export function Keypad({ onKeyPress, className }: KeypadProps) {
  const getKeyVariant = (key: string) => {
    if (key === KEYS.EQUALS) return 'default';
    if (key === KEYS.CLEAR) return 'destructive';
    if (key === KEYS.DELETE) return 'secondary';
    if (KEYS.OPERATORS.includes(key)) return 'secondary';
    return 'outline';
  };

  const getKeyClassName = (key: string) => {
    return cn(
      "h-14 text-lg font-medium",
      key === KEYS.EQUALS && "bg-primary text-primary-foreground hover:bg-primary/90",
      key === KEYS.CLEAR && "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      key === KEYS.DELETE && "text-destructive"
    );
  };

  return (
    <div className={cn("grid grid-cols-4 gap-2", className)}>
      {keyLayout.map((row, rowIndex) =>
        row.map((key, colIndex) => (
          <Button
            key={`${rowIndex}-${colIndex}`}
            variant={getKeyVariant(key)}
            className={getKeyClassName(key)}
            onClick={() => onKeyPress(key)}
          >
            {key}
          </Button>
        ))
      )}
    </div>
  );
}