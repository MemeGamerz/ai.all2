import { HeroSection } from '@/components/landing/hero-section';
import { PlatformOverviewSection } from '@/components/landing/platform-overview-section';
import { FeatureHighlightsSection } from '@/components/landing/feature-highlights-section';
import { InteractiveDemosSection } from '@/components/landing/interactive-demos-section';
import { IndustryApplicationsSection } from '@/components/landing/industry-applications-section';
import { CTASection } from '@/components/landing/cta-section';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <PlatformOverviewSection />
      <FeatureHighlightsSection />
      {/* @ts-expect-error Server Component */}
      <IndustryApplicationsSection />
      <InteractiveDemosSection />
      <CTASection />
    </div>
  );
}
