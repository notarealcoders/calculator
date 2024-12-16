'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function HealthCalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [bmi, setBmi] = useState<number | null>(null);
  const [calories, setCalories] = useState<number | null>(null);

  const calculateBMI = () => {
    const heightM = parseFloat(height) / 100; // convert cm to m
    const weightKg = parseFloat(weight);

    if (heightM && weightKg) {
      const bmiValue = weightKg / (heightM * heightM);
      setBmi(bmiValue);
    }
  };

  const calculateCalories = () => {
    const weightKg = parseFloat(weight);
    const heightCm = parseFloat(height);
    const ageYears = parseFloat(age);

    if (weightKg && heightCm && ageYears) {
      // Harris-Benedict equation
      let bmr;
      if (gender === 'male') {
        bmr = 88.362 + (13.397 * weightKg) + (4.799 * heightCm) - (5.677 * ageYears);
      } else {
        bmr = 447.593 + (9.247 * weightKg) + (3.098 * heightCm) - (4.330 * ageYears);
      }

      // Activity multipliers
      const multipliers = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725,
        veryActive: 1.9
      };

      setCalories(bmr * multipliers[activityLevel as keyof typeof multipliers]);
    }
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal weight';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  };

  return (
    <Card className="p-6">
      <Tabs defaultValue="bmi" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="bmi">BMI Calculator</TabsTrigger>
          <TabsTrigger value="calories">Calorie Calculator</TabsTrigger>
        </TabsList>

        <TabsContent value="bmi" className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="height">Height (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Enter height"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Enter weight"
                />
              </div>
            </div>

            <Button onClick={calculateBMI} className="w-full">
              Calculate BMI
            </Button>

            {bmi !== null && (
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Your BMI</h3>
                <p className="text-2xl font-bold">{bmi.toFixed(1)}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Category: {getBMICategory(bmi)}
                </p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="calories" className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Enter age"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select value={gender} onValueChange={setGender}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="activityLevel">Activity Level</Label>
              <Select value={activityLevel} onValueChange={setActivityLevel}>
                <SelectTrigger>
                  <SelectValue placeholder="Select activity level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
                  <SelectItem value="light">Light (exercise 1-3 times/week)</SelectItem>
                  <SelectItem value="moderate">Moderate (exercise 4-5 times/week)</SelectItem>
                  <SelectItem value="active">Active (daily exercise)</SelectItem>
                  <SelectItem value="veryActive">Very Active (intense exercise)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button onClick={calculateCalories} className="w-full">
              Calculate Daily Calories
            </Button>

            {calories !== null && (
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Daily Calorie Needs</h3>
                <p className="text-2xl font-bold">{Math.round(calories)} calories</p>
                <p className="text-sm text-muted-foreground mt-2">
                  This is your estimated daily caloric need to maintain your current weight
                </p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
}