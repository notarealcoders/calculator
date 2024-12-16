'use client';

import { ChemistryCalculator } from '@/components/calculator/types/ChemistryCalculator';

export default function ChemistryPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Chemistry Calculator</h1>
          <p className="text-muted-foreground">
            Comprehensive chemistry calculator suite featuring tools for molarity, pH calculations, and redox reactions.
            Perfect for chemistry students and professionals.
          </p>
        </div>
        <ChemistryCalculator />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <CalculatorInfo
            title="Moles & Molarity"
            description="Convert between mass, moles, and concentration with ease"
          />
          <CalculatorInfo
            title="pH & pOH"
            description="Calculate pH, pOH, and hydrogen ion concentrations"
          />
          <CalculatorInfo
            title="Redox Reactions"
            description="Balance redox equations and calculate electron transfer"
          />
          <CalculatorInfo
            title="Solution Chemistry"
            description="Handle solution concentrations and dilution calculations"
          />
        </div>
      </div>
    </main>
  );
}

function CalculatorInfo({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 bg-card rounded-lg border">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}