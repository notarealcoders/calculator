'use client';

import { ChemistryCalculator } from '@/components/calculator/types/ChemistryCalculator';

export default function ChemistryPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <ChemistryCalculator />
      </div>
    </main>
  );
}