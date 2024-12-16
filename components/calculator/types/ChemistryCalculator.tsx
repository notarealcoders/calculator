'use client';

import { Card } from '@/components/ui/card';
import { ComingSoon } from '@/components/calculator/ComingSoon';

export function ChemistryCalculator() {
  return (
    <Card className="p-6">
      <ComingSoon type="Chemistry" />
    </Card>
  );
}