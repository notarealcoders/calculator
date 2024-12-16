'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface PaymentFormProps {
  balance: string;
  setBalance: (value: string) => void;
  annualRate: string;
  setAnnualRate: (value: string) => void;
  minimumPayment: string;
  setMinimumPayment: (value: string) => void;
  extraPayment: string;
  setExtraPayment: (value: string) => void;
}

export function PaymentForm({
  balance,
  setBalance,
  annualRate,
  setAnnualRate,
  minimumPayment,
  setMinimumPayment,
  extraPayment,
  setExtraPayment,
}: PaymentFormProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="balance">Current Balance ($)</Label>
        <Input
          id="balance"
          type="number"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
          placeholder="Enter current balance"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="rate">Annual Interest Rate (%)</Label>
        <Input
          id="rate"
          type="number"
          value={annualRate}
          onChange={(e) => setAnnualRate(e.target.value)}
          placeholder="Enter APR"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="minimum">Minimum Payment ($)</Label>
        <Input
          id="minimum"
          type="number"
          value={minimumPayment}
          onChange={(e) => setMinimumPayment(e.target.value)}
          placeholder="Enter minimum payment"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="extra">Extra Monthly Payment ($)</Label>
        <Input
          id="extra"
          type="number"
          value={extraPayment}
          onChange={(e) => setExtraPayment(e.target.value)}
          placeholder="Enter extra payment"
        />
      </div>
    </div>
  );
}