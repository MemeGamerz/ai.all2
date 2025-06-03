
'use client';
import { IndustryApplicationsSection } from '@/components/landing/industry-applications-section';
import { Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AppearOnScroll } from '@/components/shared/AppearOnScroll';


export const metadata = {
  title: 'Industry Applications - ai.all',
  description: 'Discover how ai.all is applied across various industries to drive innovation and solve real-world problems.',
};

export default function ApplicationsPage() {
  return (
    <div className="py-8 md:py-12">
      <AppearOnScroll animationClassName="animate-slide-in-from-bottom">
        <header className="text-center mb-12 md:mb-16">
          <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
            AI in Action: Industry Applications
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
            ai.all delivers versatile and adaptive AI solutions meticulously tailored for diverse sectors. Explore how our converged platform is actively driving innovation, optimizing operations, and solving complex real-world challenges across industries.
          </p>
        </header>
      </AppearOnScroll>
      
      <IndustryApplicationsSection />

      <AppearOnScroll animationClassName="animate-fade-in" delay="[animation-delay:400ms]">
        <div className="mt-16 text-center p-8 bg-secondary/30 rounded-lg">
          <h3 className="font-headline text-2xl font-semibold text-foreground mb-4">Custom Solutions for Your Industry</h3>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Don't see your specific industry listed? ai.all's inherently flexible and modular architecture can be rapidly adapted to address unique challenges and opportunities in any field. Contact our specialists to explore how we can co-create powerful, bespoke AI solutions for your business.
          </p>
          <Link href="/contact" passHref>
            <Button className="mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-primary/90 transition-colors transition-transform hover:scale-105">
              Contact Us
            </Button>
          </Link>
        </div>
      </AppearOnScroll>
    </div>
  );
}
