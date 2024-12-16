'use client';

import { LoanCalculator } from '@/components/calculator/financial/LoanCalculator';

export default function LoanPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Loan & Mortgage Calculator</h1>
        <p className="text-muted-foreground">
          Calculate monthly payments, total interest, and view detailed amortization schedules for loans and mortgages.
        </p>
      </div>
      <LoanCalculator />
    </div>
  );
}