'use client';

interface SavingsSummaryProps {
  monthlyNeeded: number;
  totalContributions: number;
  totalInterest: number;
  finalBalance: number;
}

export function SavingsSummary({
  monthlyNeeded,
  totalContributions,
  totalInterest,
  finalBalance,
}: SavingsSummaryProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="p-4 bg-muted rounded-lg">
        <h3 className="font-semibold mb-2">Monthly Needed</h3>
        <p className="text-2xl font-bold">${monthlyNeeded.toFixed(2)}</p>
      </div>

      <div className="p-4 bg-muted rounded-lg">
        <h3 className="font-semibold mb-2">Total Contributions</h3>
        <p className="text-2xl font-bold">${totalContributions.toFixed(2)}</p>
      </div>

      <div className="p-4 bg-muted rounded-lg">
        <h3 className="font-semibold mb-2">Total Interest</h3>
        <p className="text-2xl font-bold">${totalInterest.toFixed(2)}</p>
      </div>

      <div className="p-4 bg-muted rounded-lg">
        <h3 className="font-semibold mb-2">Final Balance</h3>
        <p className="text-2xl font-bold">${finalBalance.toFixed(2)}</p>
      </div>
    </div>
  );
}