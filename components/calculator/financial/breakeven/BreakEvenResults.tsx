'use client';

interface BreakEvenResultsProps {
  breakEvenUnits: number;
  breakEvenRevenue: number;
  contributionMargin: number;
  contributionMarginRatio: number;
}

export function BreakEvenResults({
  breakEvenUnits,
  breakEvenRevenue,
  contributionMargin,
  contributionMarginRatio,
}: BreakEvenResultsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="p-4 bg-muted rounded-lg">
        <h3 className="font-semibold mb-2">Break-Even Units</h3>
        <p className="text-2xl font-bold">{Math.ceil(breakEvenUnits)}</p>
      </div>

      <div className="p-4 bg-muted rounded-lg">
        <h3 className="font-semibold mb-2">Break-Even Revenue</h3>
        <p className="text-2xl font-bold">${breakEvenRevenue.toFixed(2)}</p>
      </div>

      <div className="p-4 bg-muted rounded-lg">
        <h3 className="font-semibold mb-2">Contribution Margin</h3>
        <p className="text-2xl font-bold">${contributionMargin.toFixed(2)}</p>
      </div>

      <div className="p-4 bg-muted rounded-lg">
        <h3 className="font-semibold mb-2">CM Ratio</h3>
        <p className="text-2xl font-bold">{(contributionMarginRatio * 100).toFixed(1)}%</p>
      </div>
    </div>
  );
}