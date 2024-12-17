'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { calculateDebtPayoff } from '@/lib/calculators/financial/debt';

interface Debt {
  name: string;
  balance: number;
  interestRate: number;
  minimumPayment: number;
}

export function DebtCalculator() {
  const [debts, setDebts] = useState<Debt[]>([]);
  const [extraPayment, setExtraPayment] = useState('');
  const [method, setMethod] = useState<'snowball' | 'avalanche'>('snowball');
  const [payoffSchedule, setPayoffSchedule] = useState<ReturnType<typeof calculateDebtPayoff> | null>(null);

  const addDebt = () => {
    setDebts([...debts, {
      name: `Debt ${debts.length + 1}`,
      balance: 0,
      interestRate: 0,
      minimumPayment: 0
    }]);
  };

  const updateDebt = (index: number, field: keyof Debt, value: string) => {
    const newDebts = [...debts];
    newDebts[index] = {
      ...newDebts[index],
      [field]: field === 'name' ? value : parseFloat(value) || 0
    };
    setDebts(newDebts);
  };

  const removeDebt = (index: number) => {
    setDebts(debts.filter((_, i) => i !== index));
  };

  const calculatePayoff = () => {
    if (debts.length === 0) return;
    const schedule = calculateDebtPayoff(
      debts,
      parseFloat(extraPayment) || 0,
      method
    );
    setPayoffSchedule(schedule);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {debts.map((debt, index) => (
          <div key={index} className="grid grid-cols-5 gap-4 p-4 bg-muted rounded-lg">
            <div className="space-y-2">
              <Label>Debt Name</Label>
              <Input
                value={debt.name}
                onChange={(e) => updateDebt(index, 'name', e.target.value)}
                placeholder="Enter debt name"
              />
            </div>
            <div className="space-y-2">
              <Label>Balance</Label>
              <Input
                type="number"
                value={debt.balance || ''}
                onChange={(e) => updateDebt(index, 'balance', e.target.value)}
                placeholder="Enter balance"
              />
            </div>
            <div className="space-y-2">
              <Label>Interest Rate (%)</Label>
              <Input
                type="number"
                value={debt.interestRate || ''}
                onChange={(e) => updateDebt(index, 'interestRate', e.target.value)}
                placeholder="Enter rate"
              />
            </div>
            <div className="space-y-2">
              <Label>Minimum Payment</Label>
              <Input
                type="number"
                value={debt.minimumPayment || ''}
                onChange={(e) => updateDebt(index, 'minimumPayment', e.target.value)}
                placeholder="Enter payment"
              />
            </div>
            <div className="flex items-end">
              <Button
                variant="destructive"
                onClick={() => removeDebt(index)}
                className="w-full"
              >
                Remove
              </Button>
            </div>
          </div>
        ))}

        <Button onClick={addDebt} className="w-full">
          Add Debt
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Extra Monthly Payment</Label>
          <Input
            type="number"
            value={extraPayment}
            onChange={(e) => setExtraPayment(e.target.value)}
            placeholder="Enter extra payment"
          />
        </div>

        <div className="space-y-2">
          <Label>Payoff Method</Label>
          <Select value={method} onValueChange={(value: 'snowball' | 'avalanche') => setMethod(value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="snowball">Snowball (Smallest Balance First)</SelectItem>
              <SelectItem value="avalanche">Avalanche (Highest Interest First)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button onClick={calculatePayoff} className="w-full">
        Calculate Payoff Plan
      </Button>

      {payoffSchedule && (
        <div className="rounded-lg border">
          <div className="p-4 border-b bg-muted">
            <h3 className="font-semibold">Payoff Schedule</h3>
          </div>
          <div className="p-4 max-h-96 overflow-auto">
            <table className="w-full">
              <thead className="sticky top-0 bg-background">
                <tr>
                  <th className="text-left">Month</th>
                  {debts.map((debt) => (
                    <th key={debt.name} className="text-right">{debt.name}</th>
                  ))}
                  <th className="text-right">Total Paid</th>
                </tr>
              </thead>
              <tbody>
                {payoffSchedule.map((month) => (
                  <tr key={month.month} className="border-t">
                    <td className="py-2">{month.month}</td>
                    {month.payments.map((payment) => (
                      <td key={payment.debtName} className="text-right">
                        ${payment.amount.toFixed(2)}
                        <br />
                        <span className="text-xs text-muted-foreground">
                          Balance: ${payment.remainingBalance.toFixed(2)}
                        </span>
                      </td>
                    ))}
                    <td className="text-right font-semibold">
                      ${month.totalPaid.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}