'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { calculatePensionBenefit } from '@/lib/calculators/financial/pension';

export function PensionCalculator() {
  const [salary, setSalary] = useState('');
  const [yearsOfService, setYearsOfService] = useState('');
  const [accrualRate, setAccrualRate] = useState('');
  const [employerContribution, setEmployerContribution] = useState('');
  const [results, setResults] = useState<{
    monthlyBenefit: number;
    totalContributions: number;
    employerTotal: number;
  } | null>(null);

  const handleCalculate = () => {
    const salaryValue = parseFloat(salary);
    const yearsValue = parseFloat(yearsOfService);
    const accrualValue = parseFloat(accrualRate);
    const employerValue = parseFloat(employerContribution);

    if (salaryValue && yearsValue && accrualValue && employerValue) {
      const result = calculatePensionBenefit(
        salaryValue,
        yearsValue,
        accrualValue,
        employerValue
      );
      setResults(result);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="salary">Annual Salary</Label>
          <Input
            id="salary"
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="Enter annual salary"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="years">Years of Service</Label>
          <Input
            id="years"
            type="number"
            value={yearsOfService}
            onChange={(e) => setYearsOfService(e.target.value)}
            placeholder="Enter years of service"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="accrual">Accrual Rate (%)</Label>
          <Input
            id="accrual"
            type="number"
            value={accrualRate}
            onChange={(e) => setAccrualRate(e.target.value)}
            placeholder="Enter accrual rate"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="employer">Employer Contribution (%)</Label>
          <Input
            id="employer"
            type="number"
            value={employerContribution}
            onChange={(e) => setEmployerContribution(e.target.value)}
            placeholder="Enter employer contribution"
          />
        </div>
      </div>

      <Button onClick={handleCalculate} className="w-full">
        Calculate Pension Benefits
      </Button>

      {results && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Monthly Benefit</h3>
            <p className="text-2xl font-bold">
              ${results.monthlyBenefit.toFixed(2)}
            </p>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Your Total Contributions</h3>
            <p className="text-2xl font-bold">
              ${results.totalContributions.toFixed(2)}
            </p>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Employer Total Contributions</h3>
            <p className="text-2xl font-bold">
              ${results.employerTotal.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}