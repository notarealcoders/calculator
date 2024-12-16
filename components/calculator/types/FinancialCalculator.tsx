'use client';

import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LoanCalculator } from '@/components/calculator/financial/LoanCalculator';
import { InvestmentCalculator } from '@/components/calculator/financial/InvestmentCalculator';
import { TaxCalculator } from '@/components/calculator/financial/TaxCalculator';

export function FinancialCalculator() {
  return (
    <Card className="p-6">
      <Tabs defaultValue="loan" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="loan">Loan</TabsTrigger>
          <TabsTrigger value="investment">Investment</TabsTrigger>
          <TabsTrigger value="tax">Tax</TabsTrigger>
        </TabsList>

        <TabsContent value="loan">
          <LoanCalculator />
        </TabsContent>

        <TabsContent value="investment">
          <InvestmentCalculator />
        </TabsContent>

        <TabsContent value="tax">
          <TaxCalculator />
        </TabsContent>
      </Tabs>
    </Card>
  );
}