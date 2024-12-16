'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  calculateMonthlyPayment,
  calculateTotalInterest,
  calculateAmortizationSchedule,
} from '@/lib/calculators/financial/loan';

export function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [results, setResults] = useState<{
    monthlyPayment: number;
    totalInterest: number;
    schedule: ReturnType<typeof calculateAmortizationSchedule>;
  } | null>(null);

  const handleCalculate = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate);
    const years = parseFloat(loanTerm);

    if (principal && rate && years) {
      const monthlyPayment = calculateMonthlyPayment(principal, rate, years);
      const totalInterest = calculateTotalInterest(monthlyPayment, principal, years);
      const schedule = calculateAmortizationSchedule(principal, rate, years);

      setResults({ monthlyPayment, totalInterest, schedule });
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="loanAmount">Loan Amount</Label>
          <Input
            id="loanAmount"
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="Enter loan amount"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="interestRate">Annual Interest Rate (%)</Label>
          <Input
            id="interestRate"
            type="number"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="Enter interest rate"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="loanTerm">Loan Term (Years)</Label>
          <Input
            id="loanTerm"
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            placeholder="Enter loan term"
          />
        </div>

        <Button onClick={handleCalculate}>Calculate</Button>
      </div>

      {results && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">Monthly Payment</h3>
              <p className="text-2xl font-bold">
                ${results.monthlyPayment.toFixed(2)}
              </p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">Total Interest</h3>
              <p className="text-2xl font-bold">
                ${results.totalInterest.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="rounded-lg border">
            <div className="p-4 border-b bg-muted">
              <h3 className="font-semibold">Amortization Schedule</h3>
            </div>
            <div className="p-4 max-h-60 overflow-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left">Payment</th>
                    <th className="text-right">Principal</th>
                    <th className="text-right">Interest</th>
                    <th className="text-right">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {results.schedule.map((row) => (
                    <tr key={row.payment} className="border-t">
                      <td className="py-2">{row.payment}</td>
                      <td className="text-right">${row.principal.toFixed(2)}</td>
                      <td className="text-right">${row.interest.toFixed(2)}</td>
                      <td className="text-right">${row.balance.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}