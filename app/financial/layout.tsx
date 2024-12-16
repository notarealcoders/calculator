'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const financialRoutes = [
  { path: '/financial', label: 'Overview' },
  { path: '/financial/loan', label: 'Loan & Mortgage' },
  { path: '/financial/investment', label: 'Investment' },
  { path: '/financial/savings', label: 'Savings' },
  { path: '/financial/retirement', label: 'Retirement' },
  { path: '/financial/debt', label: 'Debt Payoff' },
  { path: '/financial/tax', label: 'Tax' },
  { path: '/financial/breakeven', label: 'Break-Even' },
  { path: '/financial/inflation', label: 'Inflation' },
  { path: '/financial/networth', label: 'Net Worth' },
  { path: '/financial/options', label: 'Stock Options' },
  { path: '/financial/credit', label: 'Credit Card' },
  { path: '/financial/pension', label: 'Pension' },
];

export default function FinancialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-8">
        <div className="flex flex-wrap gap-2">
          {financialRoutes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                pathname === route.path
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80"
              )}
            >
              {route.label}
            </Link>
          ))}
        </div>
        {children}
      </div>
    </div>
  );
}