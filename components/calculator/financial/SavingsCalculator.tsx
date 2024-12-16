'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { calculateMonthlyContribution, calculateTimeToReachGoal } from '@/lib/calculators/financial/savings';
import { GoalForm } from './savings/GoalForm';
import { ProjectionChart } from './savings/ProjectionChart';
import { SavingsSummary } from './savings/SavingsSummary';

interface ProjectionData {
  year: number;
  balance: number;
  contributions: number;
  interest: number;
}

export function SavingsCalculator() {
  const [goal, setGoal] = useState('');
  const [currentSavings, setCurrentSavings] = useState('');
  const [annualRate, setAnnualRate] = useState('');
  const [years, setYears] = useState('');
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [projectionData, setProjectionData] = useState<ProjectionData[]>([]);
  const [results, setResults] = useState<{
    monthlyNeeded: number;
    totalContributions: number;
    totalInterest: number;
    finalBalance: number;
  } | null>(null);

  const calculateProjection = () => {
    const goalAmount = parseFloat(goal);
    const current = parseFloat(currentSavings);
    const rate = parseFloat(annualRate);
    const period = parseFloat(years);
    const monthly = parseFloat(monthlyContribution);

    if (goalAmount && current && rate && period) {
      const monthlyRate = rate / 100 / 12;
      const data: ProjectionData[] = [];
      let balance = current;
      let totalContributions = current;
      let totalInterest = 0;

      for (let year = 0; year <= period; year++) {
        data.push({
          year,
          balance,
          contributions: totalContributions,
          interest: totalInterest,
        });

        for (let month = 0; month < 12; month++) {
          const interest = balance * monthlyRate;
          balance += interest + monthly;
          totalContributions += monthly;
          totalInterest += interest;
        }
      }

      setProjectionData(data);
      setResults({
        monthlyNeeded: monthly,
        totalContributions,
        totalInterest,
        finalBalance: balance,
      });
    }
  };

  const calculateNeededContribution = () => {
    const goalAmount = parseFloat(goal);
    const current = parseFloat(currentSavings);
    const rate = parseFloat(annualRate);
    const period = parseFloat(years);

    if (goalAmount && current && rate && period) {
      const monthly = calculateMonthlyContribution(goalAmount, current, rate, period);
      setMonthlyContribution(monthly.toFixed(2));
      calculateProjection();
    }
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="calculate" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="calculate">Calculate Contribution</TabsTrigger>
          <TabsTrigger value="project">Project Growth</TabsTrigger>
        </TabsList>

        <TabsContent value="calculate" className="space-y-6">
          <GoalForm
            goal={goal}
            setGoal={setGoal}
            currentSavings={currentSavings}
            setCurrentSavings={setCurrentSavings}
            annualRate={annualRate}
            setAnnualRate={setAnnualRate}
            years={years}
            setYears={setYears}
            monthlyContribution={monthlyContribution}
            setMonthlyContribution={setMonthlyContribution}
          />

          <Button onClick={calculateNeededContribution} className="w-full">
            Calculate Required Monthly Contribution
          </Button>

          {results && <SavingsSummary {...results} />}
        </TabsContent>

        <TabsContent value="project" className="space-y-6">
          <GoalForm
            goal={goal}
            setGoal={setGoal}
            currentSavings={currentSavings}
            setCurrentSavings={setCurrentSavings}
            annualRate={annualRate}
            setAnnualRate={setAnnualRate}
            years={years}
            setYears={setYears}
            monthlyContribution={monthlyContribution}
            setMonthlyContribution={setMonthlyContribution}
          />

          <Button onClick={calculateProjection} className="w-full">
            Calculate Projection
          </Button>

          {projectionData.length > 0 && (
            <>
              <ProjectionChart data={projectionData} />
              {results && <SavingsSummary {...results} />}
            </>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}