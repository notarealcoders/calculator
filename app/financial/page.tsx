import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const calculators = [
  {
    title: 'Loan & Mortgage',
    description: 'Calculate monthly payments, amortization schedules, and total interest for loans.',
    path: '/financial/loan'
  },
  {
    title: 'Investment',
    description: 'Analyze investment returns, compound interest, and portfolio performance.',
    path: '/financial/investment'
  },
  {
    title: 'Savings Goals',
    description: 'Plan and track your savings goals with customizable targets and timelines.',
    path: '/financial/savings'
  },
  {
    title: 'Retirement Planning',
    description: 'Estimate retirement savings needs and analyze different scenarios.',
    path: '/financial/retirement'
  },
  {
    title: 'Debt Payoff',
    description: 'Create strategies for paying off multiple debts using snowball or avalanche methods.',
    path: '/financial/debt'
  },
  {
    title: 'Tax Calculator',
    description: 'Estimate income tax based on current tax brackets and deductions.',
    path: '/financial/tax'
  }
];

export default function FinancialOverviewPage() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Financial Calculators</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comprehensive suite of financial calculators to help you make informed decisions about loans,
          investments, savings, retirement, and more.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {calculators.map((calc) => (
          <Link key={calc.path} href={calc.path}>
            <Card className="p-6 h-full hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold">{calc.title}</h3>
                  <ArrowRight className="h-4 w-4" />
                </div>
                <p className="text-sm text-muted-foreground">{calc.description}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}