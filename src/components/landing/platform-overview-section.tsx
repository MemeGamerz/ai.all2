
'use client'; // Made client component to use AppearOnScroll

import { coreTechnologies } from '@/config/features';
import { FeatureCard } from '@/components/shared/feature-card';
import { AppearOnScroll } from '@/components/shared/AppearOnScroll';

export function PlatformOverviewSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <AppearOnScroll animationClassName="animate-fade-in" className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
            One Platform, <span className="text-primary">Infinite Possibilities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ai.all integrates a comprehensive suite of advanced AI capabilities. Discover how our core technologies, working in synergy, can empower your most ambitious innovations and drive transformative results.
          </p>
        </AppearOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreTechnologies.map((feature, index) => (
            <AppearOnScroll
              key={feature.slug}
              animationClassName="animate-slide-in-from-bottom"
              delay={`[animation-delay:${100 + index * 150}ms]`}
            >
              <FeatureCard feature={feature} />
            </AppearOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
