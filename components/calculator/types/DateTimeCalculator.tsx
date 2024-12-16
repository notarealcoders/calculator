'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { addDays, addMonths, addYears, differenceInDays, differenceInMonths, differenceInYears, format } from 'date-fns';

export function DateTimeCalculator() {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [unit, setUnit] = useState<string>('days');
  const [result, setResult] = useState<string>('');

  const calculateDifference = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) return;

    const days = differenceInDays(end, start);
    const months = differenceInMonths(end, start);
    const years = differenceInYears(end, start);

    setResult(`
      ${years} years
      ${months % 12} months
      ${days % 30} days
    `);
  };

  const calculateAddSubtract = () => {
    const start = new Date(startDate);
    const amountNum = parseInt(amount);

    if (isNaN(start.getTime()) || isNaN(amountNum)) return;

    let resultDate: Date;
    switch (unit) {
      case 'days':
        resultDate = addDays(start, amountNum);
        break;
      case 'months':
        resultDate = addMonths(start, amountNum);
        break;
      case 'years':
        resultDate = addYears(start, amountNum);
        break;
      default:
        return;
    }

    setResult(format(resultDate, 'PPP'));
  };

  return (
    <Card className="p-6">
      <Tabs defaultValue="difference" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="difference">Date Difference</TabsTrigger>
          <TabsTrigger value="addsubtract">Add/Subtract</TabsTrigger>
        </TabsList>

        <TabsContent value="difference" className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="startDate1">Start Date</Label>
              <Input
                id="startDate1"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="endDate">End Date</Label>
              <Input
                id="endDate"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>

            <Button onClick={calculateDifference} className="w-full">
              Calculate Difference
            </Button>

            {result && (
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Result</h3>
                <p className="whitespace-pre-line">{result}</p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="addsubtract" className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="startDate2">Start Date</Label>
              <Input
                id="startDate2"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <Input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="unit">Unit</Label>
                <Select value={unit} onValueChange={setUnit}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="days">Days</SelectItem>
                    <SelectItem value="months">Months</SelectItem>
                    <SelectItem value="years">Years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button onClick={calculateAddSubtract} className="w-full">
              Calculate Result
            </Button>

            {result && (
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Result</h3>
                <p>{result}</p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
}