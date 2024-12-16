'use client';

import { FinancialCalculator } from '@/components/calculator/types/FinancialCalculator';

export default function FinancialPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <FinancialCalculator />
      </div>
    </main>
  );
}