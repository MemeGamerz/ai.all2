
import { coreTechnologies } from '@/config/features';
import { FeatureCard } from '@/components/shared/feature-card';

export function PlatformOverviewSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">
            One Platform, <span className="text-primary">Infinite Possibilities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:100ms]">
            SynapseAI integrates a comprehensive suite of advanced AI capabilities. Discover how our core technologies, working in synergy, can empower your most ambitious innovations and drive transformative results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreTechnologies.map((feature, index) => (
            <div 
              key={feature.slug} 
              className="animate-slide-in-from-bottom"
              style={{ animationDelay: `${200 + index * 150}ms` }}
            >
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
