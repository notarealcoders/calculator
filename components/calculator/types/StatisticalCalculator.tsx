'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Statistics {
  mean: number;
  median: number;
  mode: number[];
  variance: number;
  stdDev: number;
  min: number;
  max: number;
  count: number;
}

export function StatisticalCalculator() {
  const [data, setData] = useState<string>('');
  const [stats, setStats] = useState<Statistics | null>(null);

  const calculateStatistics = () => {
    const numbers = data
      .split(/[,\s]+/)
      .map(Number)
      .filter(n => !isNaN(n));

    if (numbers.length === 0) return;

    // Calculate mean
    const mean = numbers.reduce((a, b) => a + b) / numbers.length;

    // Calculate median
    const sorted = [...numbers].sort((a, b) => a - b);
    const median = sorted.length % 2 === 0
      ? (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2
      : sorted[Math.floor(sorted.length / 2)];

    // Calculate mode
    const frequency: { [key: number]: number } = {};
    numbers.forEach(n => frequency[n] = (frequency[n] || 0) + 1);
    const maxFreq = Math.max(...Object.values(frequency));
    const mode = Object.entries(frequency)
      .filter(([_, freq]) => freq === maxFreq)
      .map(([num]) => Number(num));

    // Calculate variance and standard deviation
    const variance = numbers.reduce((acc, n) => acc + Math.pow(n - mean, 2), 0) / numbers.length;
    const stdDev = Math.sqrt(variance);

    setStats({
      mean,
      median,
      mode,
      variance,
      stdDev,
      min: Math.min(...numbers),
      max: Math.max(...numbers),
      count: numbers.length
    });
  };

  return (
    <Card className="p-6">
      <Tabs defaultValue="data" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="data">Data Input</TabsTrigger>
          <TabsTrigger value="results">Results</TabsTrigger>
        </TabsList>

        <TabsContent value="data" className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="data">Enter Numbers (separated by commas or spaces)</Label>
              <Input
                id="data"
                value={data}
                onChange={(e) => setData(e.target.value)}
                placeholder="e.g., 1, 2, 3, 4, 5"
              />
            </div>
            <Button onClick={calculateStatistics} className="w-full">
              Calculate Statistics
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="results">
          {stats ? (
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <StatItem label="Mean" value={stats.mean.toFixed(2)} />
                <StatItem label="Median" value={stats.median.toFixed(2)} />
                <StatItem label="Mode" value={stats.mode.join(', ')} />
                <StatItem label="Count" value={stats.count.toString()} />
                <StatItem label="Minimum" value={stats.min.toFixed(2)} />
                <StatItem label="Maximum" value={stats.max.toFixed(2)} />
                <StatItem label="Variance" value={stats.variance.toFixed(2)} />
                <StatItem label="Standard Deviation" value={stats.stdDev.toFixed(2)} />
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              Enter data and calculate statistics to see results
            </div>
          )}
        </TabsContent>
      </Tabs>
    </Card>
  );
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-4 bg-muted rounded-lg">
      <div className="text-sm text-muted-foreground">{label}</div>
      <div className="text-lg font-semibold mt-1">{value}</div>
    </div>
  );
}