'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { calculateCreditCardPayoff } from '@/lib/calculators/financial/credit';
import { PaymentForm } from './credit-card/PaymentForm';
import { PaymentResults } from './credit-card/PaymentResults';
import { PaymentSchedule } from './credit-card/PaymentSchedule';

export function CreditCardCalculator() {
  const [balance, setBalance] = useState('');
  const [annualRate, setAnnualRate] = useState('');
  const [minimumPayment, setMinimumPayment] = useState('');
  const [extraPayment, setExtraPayment] = useState('');
  const [results, setResults] = useState<ReturnType<typeof calculateCreditCardPayoff> | null>(null);

  const handleCalculate = () => {
    const balanceValue = parseFloat(balance);
    const rateValue = parseFloat(annualRate);
    const minPaymentValue = parseFloat(minimumPayment);
    const extraPaymentValue = parseFloat(extraPayment) || 0;

    if (balanceValue && rateValue && minPaymentValue) {
      const result = calculateCreditCardPayoff(
        balanceValue,
        rateValue,
        minPaymentValue,
        extraPaymentValue
      );
      setResults(result);
    }
  };

  return (
    <div className="space-y-6">
      <PaymentForm
        balance={balance}
        setBalance={setBalance}
        annualRate={annualRate}
        setAnnualRate={setAnnualRate}
        minimumPayment={minimumPayment}
        setMinimumPayment={setMinimumPayment}
        extraPayment={extraPayment}
        setExtraPayment={setExtraPayment}
      />

      <Button onClick={handleCalculate} className="w-full">
        Calculate Payoff Plan
      </Button>

      {results && (
        <>
          <PaymentResults
            months={results.months}
            totalInterest={results.totalInterest}
            totalPaid={results.totalPaid}
          />
          <PaymentSchedule schedule={results.schedule} />
        </>
      )}
    </div>
  );
}