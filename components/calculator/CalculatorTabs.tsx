'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BasicCalculator } from '@/components/calculator/types/BasicCalculator';
import { CalculatorType } from '@/lib/types';

const calculatorTypes: { value: CalculatorType; label: string }[] = [
  { value: 'basic', label: 'Basic' },
  { value: 'scientific', label: 'Scientific' },
  { value: 'programmer', label: 'Programmer' },
  { value: 'financial', label: 'Financial' },
  { value: 'unit', label: 'Unit' },
  { value: 'statistical', label: 'Statistical' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'chemistry', label: 'Chemistry' },
  { value: 'health', label: 'Health' },
  { value: 'datetime', label: 'Date/Time' },
];

export function CalculatorTabs() {
  return (
    <Tabs defaultValue="basic" className="w-full">
      <TabsList className="grid grid-cols-5 mb-4">
        {calculatorTypes.map((type) => (
          <TabsTrigger key={type.value} value={type.value}>
            {type.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="basic">
        <BasicCalculator />
      </TabsContent>
      {/* Other calculator types will be implemented progressively */}
    </Tabs>
  );
}