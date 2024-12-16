'use client';

import { ScientificCalculator } from '@/components/calculator/types/ScientificCalculator';

export default function ScientificPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Scientific Calculator</h1>
          <p className="text-muted-foreground">
            Advanced scientific calculator with trigonometric functions, logarithms, and complex mathematical operations.
            Perfect for students, engineers, and scientists.
          </p>
        </div>
        <ScientificCalculator />
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Available Functions</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <FunctionCard title="Trigonometry" items={['sin', 'cos', 'tan', 'inverse functions']} />
            <FunctionCard title="Logarithms" items={['log', 'ln', 'exponentials']} />
            <FunctionCard title="Advanced" items={['powers', 'roots', 'factorials']} />
          </div>
        </div>
      </div>
    </main>
  );
}

function FunctionCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="p-4 bg-card rounded-lg border">
      <h3 className="font-semibold mb-2">{title}</h3>
      <ul className="text-sm text-muted-foreground space-y-1">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}