'use client';

import { StatisticalCalculator } from '@/components/calculator/types/StatisticalCalculator';

export default function StatisticalPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <StatisticalCalculator />
      </div>
    </main>
  );
}