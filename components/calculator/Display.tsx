'use client';

import { cn } from '@/lib/utils';

interface DisplayProps {
  value: string;
  expression?: string;
  className?: string;
}

export function Display({ value, expression, className }: DisplayProps) {
  return (
    <div className={cn("w-full bg-card p-4 rounded-lg space-y-2", className)}>
      {expression && (
        <div className="text-sm text-muted-foreground text-right overflow-x-auto">
          {expression}
        </div>
      )}
      <div className="text-3xl font-bold text-right overflow-x-auto">
        {value}
      </div>
    </div>
  );
}