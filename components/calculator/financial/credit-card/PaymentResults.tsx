'use client';

interface PaymentResultsProps {
  months: number;
  totalInterest: number;
  totalPaid: number;
}

export function PaymentResults({ months, totalInterest, totalPaid }: PaymentResultsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="p-4 bg-muted rounded-lg">
        <h3 className="font-semibold mb-2">Time to Pay Off</h3>
        <p className="text-2xl font-bold">
          {months} {months === 1 ? 'month' : 'months'}
        </p>
      </div>

      <div className="p-4 bg-muted rounded-lg">
        <h3 className="font-semibold mb-2">Total Interest</h3>
        <p className="text-2xl font-bold">${totalInterest.toFixed(2)}</p>
      </div>

      <div className="p-4 bg-muted rounded-lg">
        <h3 className="font-semibold mb-2">Total Amount Paid</h3>
        <p className="text-2xl font-bold">${totalPaid.toFixed(2)}</p>
      </div>
    </div>
  );
}