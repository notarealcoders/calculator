'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { calculatorRoutes } from '@/lib/routes';

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Universal Calculator
          </Link>
          <div className="flex space-x-4 overflow-x-auto">
            {calculatorRoutes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === route.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-accent"
                )}
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}