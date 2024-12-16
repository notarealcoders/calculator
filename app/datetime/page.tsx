'use client';

import { DateTimeCalculator } from '@/components/calculator/types/DateTimeCalculator';

export default function DateTimePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <DateTimeCalculator />
      </div>
    </main>
  );
}