'use client';

import { ProgrammerCalculator } from '@/components/calculator/types/ProgrammerCalculator';

export default function ProgrammerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <ProgrammerCalculator />
      </div>
    </main>
  );
}