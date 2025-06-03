import { IndustryApplicationsSection } from '@/components/landing/industry-applications-section';
import { Briefcase } from 'lucide-react';

export const metadata = {
  title: 'Industry Applications - SynapseAI',
  description: 'Discover how SynapseAI is applied across various industries to drive innovation and solve real-world problems.',
};

export default function ApplicationsPage() {
  return (
    <div className="py-8 md:py-12">
      <header className="text-center mb-12 md:mb-16">
        <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
          AI in Action: Industry Applications
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
          SynapseAI provides versatile solutions tailored for diverse sectors. See how our platform is making an impact.
        </p>
      </header>
      
      {/* @ts-expect-error Server Component */}
      <IndustryApplicationsSection />

      <div className="mt-16 text-center p-8 bg-secondary/30 rounded-lg">
        <h3 className="font-headline text-2xl font-semibold text-foreground mb-4">Custom Solutions for Your Industry</h3>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Don't see your industry? SynapseAI's flexible architecture can be adapted to meet unique challenges. Contact us to learn how we can help your business.
        </p>
        <a href="/contact">
          <button className="mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-primary/90 transition-colors">
            Contact Us
          </button>
        </a>
      </div>
    </div>
  );
}
