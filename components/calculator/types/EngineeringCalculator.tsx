'use client';

import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MechanicsCalculator } from '@/components/calculator/engineering/MechanicsCalculator';
import { ElectricalCalculator } from '@/components/calculator/engineering/ElectricalCalculator';
import { CircuitCalculator } from '@/components/calculator/engineering/CircuitCalculator';

export function EngineeringCalculator() {
  return (
    <Card className="p-6">
      <Tabs defaultValue="mechanics" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="mechanics">Mechanics</TabsTrigger>
          <TabsTrigger value="electrical">Power</TabsTrigger>
          <TabsTrigger value="circuit">Circuits</TabsTrigger>
        </TabsList>

        <TabsContent value="mechanics">
          <MechanicsCalculator />
        </TabsContent>

        <TabsContent value="electrical">
          <ElectricalCalculator />
        </TabsContent>

        <TabsContent value="circuit">
          <CircuitCalculator />
        </TabsContent>
      </Tabs>
    </Card>
  );
}