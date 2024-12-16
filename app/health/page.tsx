'use client';

import { HealthCalculator } from '@/components/calculator/types/HealthCalculator';

export default function HealthPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <HealthCalculator />
      </div>
    </main>
  );
}