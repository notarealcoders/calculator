'use client';

interface Payment {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  remainingBalance: number;
}

interface PaymentScheduleProps {
  schedule: Payment[];
}

export function PaymentSchedule({ schedule }: PaymentScheduleProps) {
  return (
    <div className="rounded-lg border">
      <div className="p-4 border-b bg-muted">
        <h3 className="font-semibold">Payment Schedule</h3>
      </div>
      <div className="p-4 max-h-96 overflow-auto">
        <table className="w-full">
          <thead className="sticky top-0 bg-background">
            <tr>
              <th className="text-left">Month</th>
              <th className="text-right">Payment</th>
              <th className="text-right">Principal</th>
              <th className="text-right">Interest</th>
              <th className="text-right">Balance</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((payment) => (
              <tr key={payment.month} className="border-t">
                <td className="py-2">{payment.month}</td>
                <td className="text-right">${payment.payment.toFixed(2)}</td>
                <td className="text-right">${payment.principal.toFixed(2)}</td>
                <td className="text-right">${payment.interest.toFixed(2)}</td>
                <td className="text-right">${payment.remainingBalance.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}