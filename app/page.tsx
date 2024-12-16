import { BasicCalculator } from '@/components/calculator/types/BasicCalculator';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <BasicCalculator />
      </div>
    </main>
  );
}