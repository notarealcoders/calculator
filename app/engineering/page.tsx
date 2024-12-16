'use client';

import { EngineeringCalculator } from '@/components/calculator/types/EngineeringCalculator';

export default function EngineeringPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <EngineeringCalculator />
      </div>
    </main>
  );
}