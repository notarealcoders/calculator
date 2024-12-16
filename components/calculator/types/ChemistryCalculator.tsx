'use client';

import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MolesCalculator } from '@/components/calculator/chemistry/MolesCalculator';
import { PHCalculator } from '@/components/calculator/chemistry/PHCalculator';
import { MolarityCalculator } from '@/components/calculator/chemistry/MolarityCalculator';
import { RedoxCalculator } from '@/components/calculator/chemistry/RedoxCalculator';

export function ChemistryCalculator() {
  return (
    <Card className="p-6">
      <Tabs defaultValue="moles" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="moles">Moles</TabsTrigger>
          <TabsTrigger value="molarity">Molarity</TabsTrigger>
          <TabsTrigger value="ph">pH/pOH</TabsTrigger>
          <TabsTrigger value="redox">Redox</TabsTrigger>
        </TabsList>

        <TabsContent value="moles">
          <MolesCalculator />
        </TabsContent>

        <TabsContent value="molarity">
          <MolarityCalculator />
        </TabsContent>

        <TabsContent value="ph">
          <PHCalculator />
        </TabsContent>

        <TabsContent value="redox">
          <RedoxCalculator />
        </TabsContent>
      </Tabs>
    </Card>
  );
}