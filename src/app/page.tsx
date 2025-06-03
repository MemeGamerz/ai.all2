
import { HeroSection } from '@/components/landing/hero-section';
import { PlatformOverviewSection } from '@/components/landing/platform-overview-section';
import { FeatureHighlightsSection } from '@/components/landing/feature-highlights-section';
import { InteractiveDemosSection } from '@/components/landing/interactive-demos-section';
import { IndustryApplicationsSection } from '@/components/landing/industry-applications-section';
import { CTASection } from '@/components/landing/cta-section';

// HomePage can remain a Server Component if its children handle their own client-side animations.

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection /> {/* Now a client component using AppearOnScroll internally */}
      <PlatformOverviewSection /> {/* Now a client component */}
      <FeatureHighlightsSection /> {/* Now a client component */}
      <IndustryApplicationsSection /> {/* Now a client component, handling Genkit call */}
      <InteractiveDemosSection /> {/* Can be updated similarly if scroll animations are desired */}
      <CTASection /> {/* Can be updated similarly */}
    </div>
  );
}
