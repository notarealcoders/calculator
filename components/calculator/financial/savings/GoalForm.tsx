'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface GoalFormProps {
  goal: string;
  setGoal: (value: string) => void;
  currentSavings: string;
  setCurrentSavings: (value: string) => void;
  annualRate: string;
  setAnnualRate: (value: string) => void;
  years: string;
  setYears: (value: string) => void;
  monthlyContribution: string;
  setMonthlyContribution: (value: string) => void;
}

export function GoalForm({
  goal,
  setGoal,
  currentSavings,
  setCurrentSavings,
  annualRate,
  setAnnualRate,
  years,
  setYears,
  monthlyContribution,
  setMonthlyContribution,
}: GoalFormProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="goal">Savings Goal ($)</Label>
        <Input
          id="goal"
          type="number"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="Enter target amount"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="current">Current Savings ($)</Label>
        <Input
          id="current"
          type="number"
          value={currentSavings}
          onChange={(e) => setCurrentSavings(e.target.value)}
          placeholder="Enter current savings"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="rate">Annual Interest Rate (%)</Label>
        <Input
          id="rate"
          type="number"
          value={annualRate}
          onChange={(e) => setAnnualRate(e.target.value)}
          placeholder="Enter interest rate"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="years">Time Period (Years)</Label>
        <Input
          id="years"
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          placeholder="Enter number of years"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="monthly">Monthly Contribution ($)</Label>
        <Input
          id="monthly"
          type="number"
          value={monthlyContribution}
          onChange={(e) => setMonthlyContribution(e.target.value)}
          placeholder="Enter monthly contribution"
        />
      </div>
    </div>
  );
}