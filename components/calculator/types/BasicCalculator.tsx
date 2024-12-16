'use client';

import { useState } from 'react';
import { Display } from '@/components/calculator/Display';
import { Keypad } from '@/components/calculator/Keypad';
import { evaluateBasicExpression, formatNumber } from '@/lib/calculators/basic';
import { Card } from '@/components/ui/card';

export function BasicCalculator() {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [isNewCalculation, setIsNewCalculation] = useState(true);

  const handleKeyPress = (key: string) => {
    if (key === 'C') {
      setDisplay('0');
      setExpression('');
      setIsNewCalculation(true);
      return;
    }

    if (key === '=') {
      try {
        const result = evaluateBasicExpression(expression);
        setDisplay(formatNumber(result));
        setExpression(`${expression} = ${formatNumber(result)}`);
        setIsNewCalculation(true);
      } catch (error) {
        setDisplay('Error');
        setIsNewCalculation(true);
      }
      return;
    }

    if (isNewCalculation) {
      setExpression(key === '.' ? '0.' : key);
      setDisplay(key === '.' ? '0.' : key);
      setIsNewCalculation(false);
    } else {
      const newExpression = expression + key;
      setExpression(newExpression);
      setDisplay(newExpression);
    }
  };

  return (
    <Card className="p-6 space-y-6">
      <Display value={display} expression={expression} />
      <Keypad onKeyPress={handleKeyPress} />
    </Card>
  );
}