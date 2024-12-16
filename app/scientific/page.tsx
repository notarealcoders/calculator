'use client';

import { ScientificCalculator } from '@/components/calculator/types/ScientificCalculator';

export default function ScientificPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <ScientificCalculator />
      </div>
    </main>
  );
}