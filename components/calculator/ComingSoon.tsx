'use client';

import { CalculatorType } from '@/lib/types';

interface ComingSoonProps {
  type: CalculatorType | string;
}

export function ComingSoon({ type }: ComingSoonProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <h2 className="text-2xl font-bold mb-4">{type} Calculator</h2>
      <p className="text-muted-foreground">
        This calculator type is coming soon! We're working hard to bring you the best {type.toLowerCase()} calculation experience.
      </p>
    </div>
  );
}