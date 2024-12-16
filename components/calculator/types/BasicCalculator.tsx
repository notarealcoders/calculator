'use client';

import { useState } from 'react';
import { Display } from '@/components/calculator/Display';
import { Keypad } from '@/components/calculator/Keypad';
import { evaluateBasicExpression, formatNumber } from '@/lib/calculators/basic';
import { Card } from '@/components/ui/card';
import { KEYS } from '@/lib/calculators/basic/constants';
import { prepareExpressionForCalculation, removeLastCharacter, shouldResetDisplay } from '@/lib/calculators/basic/display';
import { isValidDecimalAddition, isValidOperatorAddition } from '@/lib/calculators/basic/validation';

export function BasicCalculator() {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [isNewCalculation, setIsNewCalculation] = useState(true);
  const [lastResult, setLastResult] = useState<string | null>(null);

  const handleClear = () => {
    setDisplay('0');
    setExpression('');
    setIsNewCalculation(true);
    setLastResult(null);
  };

  const handleDelete = () => {
    if (isNewCalculation) return;
    setDisplay(removeLastCharacter(display));
  };

  const handleEquals = () => {
    try {
      const calcExpression = prepareExpressionForCalculation(display);
      const result = evaluateBasicExpression(calcExpression);
      const formattedResult = formatNumber(result);
      
      setDisplay(formattedResult);
      setExpression(`${display} = ${formattedResult}`);
      setLastResult(formattedResult);
      setIsNewCalculation(true);
    } catch (error) {
      setDisplay('Error');
      setExpression('');
      setIsNewCalculation(true);
    }
  };

  const handleKeyPress = (key: string) => {
    if (key === KEYS.CLEAR) {
      handleClear();
      return;
    }

    if (key === KEYS.DELETE) {
      handleDelete();
      return;
    }

    if (key === KEYS.EQUALS) {
      handleEquals();
      return;
    }

    // Handle starting a new calculation
    if (shouldResetDisplay(isNewCalculation, key, lastResult, display)) {
      if (KEYS.NUMBERS.includes(key)) {
        setDisplay(key);
        setExpression('');
      } else if (KEYS.OPERATORS.includes(key) && lastResult) {
        setDisplay(lastResult + key);
        setExpression('');
      } else {
        setDisplay('0');
        setExpression('');
      }
      setIsNewCalculation(false);
    } else {
      // Continue building the expression
      if (display === '0' && key !== KEYS.DECIMAL) {
        setDisplay(key);
      } else {
        // Validate decimal and operator additions
        if (!isValidDecimalAddition(display, key)) return;
        if (!isValidOperatorAddition(display, key)) {
          setDisplay(display.slice(0, -1) + key);
          return;
        }
        
        setDisplay(display + key);
      }
    }
  };

  return (
    <Card className="p-6 space-y-6">
      <Display value={display} expression={expression} />
      <Keypad onKeyPress={handleKeyPress} />
    </Card>
  );
}