import { BasicCalculator } from '@/components/calculator/types/BasicCalculator';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Universal Calculator</h1>
          <p className="text-muted-foreground">
            A comprehensive calculator suite for all your computational needs. Choose from multiple specialized calculators or use the basic calculator below.
          </p>
        </div>
        <BasicCalculator />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <FeatureCard
            title="Multiple Calculator Types"
            description="Access specialized calculators for scientific, financial, engineering, and more calculations."
          />
          <FeatureCard
            title="Real-time Calculations"
            description="Get instant results as you type with our responsive calculation engine."
          />
          <FeatureCard
            title="User-friendly Interface"
            description="Clean and intuitive design makes complex calculations simple."
          />
          <FeatureCard
            title="Comprehensive Tools"
            description="From basic arithmetic to advanced scientific computations, we've got you covered."
          />
        </div>
      </div>
    </main>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 bg-card rounded-lg border">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}