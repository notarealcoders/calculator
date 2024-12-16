'use client';

import { EngineeringCalculator } from '@/components/calculator/types/EngineeringCalculator';

export default function EngineeringPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Engineering Calculator</h1>
          <p className="text-muted-foreground">
            Specialized calculator for engineering calculations including mechanics, electrical circuits, and power calculations.
            Essential tool for engineers and technical professionals.
          </p>
        </div>
        <EngineeringCalculator />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <InfoCard
            title="Mechanics"
            description="Calculate work, stress, strain, and other mechanical properties"
          />
          <InfoCard
            title="Electrical"
            description="Power calculations for electrical systems and components"
          />
          <InfoCard
            title="Circuits"
            description="Analyze circuits using Ohm's law and related principles"
          />
        </div>
      </div>
    </main>
  );
}

function InfoCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 bg-card rounded-lg border">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}