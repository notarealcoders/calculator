'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface KeypadProps {
  onKeyPress: (key: string) => void;
  className?: string;
}

export function Keypad({ onKeyPress, className }: KeypadProps) {
  const keys = [
    '7', '8', '9', '÷',
    '4', '5', '6', '×',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C', '(', ')', '%'
  ];

  return (
    <div className={cn("grid grid-cols-4 gap-2", className)}>
      {keys.map((key) => (
        <Button
          key={key}
          variant={['=', 'C'].includes(key) ? 'default' : 'outline'}
          className={cn(
            "h-14 text-lg font-medium",
            key === '=' && "bg-primary text-primary-foreground hover:bg-primary/90",
            key === 'C' && "bg-destructive text-destructive-foreground hover:bg-destructive/90"
          )}
          onClick={() => onKeyPress(key)}
        >
          {key}
        </Button>
      ))}
    </div>
  );
}