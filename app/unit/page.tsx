'use client';

import { UnitCalculator } from '@/components/calculator/types/UnitCalculator';

export default function UnitPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <UnitCalculator />
      </div>
    </main>
  );
}