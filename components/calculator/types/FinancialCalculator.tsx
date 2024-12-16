'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export function FinancialCalculator() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const calculateMonthlyPayment = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const months = parseFloat(loanTerm) * 12;

    if (principal && rate && months) {
      const payment = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
      setMonthlyPayment(payment);
    }
  };

  return (
    <Card className="p-6">
      <Tabs defaultValue="loan" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="loan">Loan Calculator</TabsTrigger>
          <TabsTrigger value="investment">Investment</TabsTrigger>
          <TabsTrigger value="currency">Currency</TabsTrigger>
        </TabsList>

        <TabsContent value="loan" className="space-y-6">
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="loanAmount">Loan Amount</Label>
              <Input
                id="loanAmount"
                type="number"
                placeholder="Enter loan amount"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="interestRate">Annual Interest Rate (%)</Label>
              <Input
                id="interestRate"
                type="number"
                step="0.1"
                placeholder="Enter interest rate"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="loanTerm">Loan Term (Years)</Label>
              <Input
                id="loanTerm"
                type="number"
                placeholder="Enter loan term"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
              />
            </div>

            <Button onClick={calculateMonthlyPayment} className="w-full">
              Calculate
            </Button>

            {monthlyPayment !== null && (
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Monthly Payment</h3>
                <p className="text-2xl font-bold">
                  ${monthlyPayment.toFixed(2)}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Total Payment: ${(monthlyPayment * parseFloat(loanTerm) * 12).toFixed(2)}
                </p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="investment">
          {/* Investment calculator will be implemented in the next iteration */}
          <div className="text-center py-8 text-muted-foreground">
            Investment calculator coming in the next update
          </div>
        </TabsContent>

        <TabsContent value="currency">
          {/* Currency converter will be implemented in the next iteration */}
          <div className="text-center py-8 text-muted-foreground">
            Currency converter coming in the next update
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
}