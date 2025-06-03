
'use client'; // Made client component to use AppearOnScroll

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';
import Image from 'next/image';
import { AppearOnScroll } from '@/components/shared/AppearOnScroll';

export function HeroSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <AppearOnScroll animationClassName="animate-slide-in-from-bottom" delay="[animation-delay:0.2s]">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            The Future of AI, <span className="text-primary">Converged</span>.
          </h1>
        </AppearOnScroll>
        <AppearOnScroll animationClassName="animate-slide-in-from-bottom" delay="[animation-delay:0.4s]">
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            ai.all seamlessly unifies cutting-edge AI technologies—NLP, image recognition, predictive analytics, and more—into a single, extraordinarily powerful, and developer-friendly platform.
          </p>
        </AppearOnScroll>
        <AppearOnScroll animationClassName="animate-slide-in-from-bottom" delay="[animation-delay:0.6s]">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <Link href="/features" passHref>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105 animate-subtle-beat">
                Explore Features <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/demos" passHref>
              <Button variant="outline" size="lg" className="shadow-lg transition-transform hover:scale-105">
                <PlayCircle className="mr-2 h-5 w-5 text-accent" />
                See Demos
              </Button>
            </Link>
          </div>
        </AppearOnScroll>
        <AppearOnScroll animationClassName="animate-slide-in-from-bottom" delay="[animation-delay:0.8s]" className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <Image
            src="https://placehold.co/1200x600.png"
            alt="ai.all Platform Showcase"
            width={1200}
            height={600}
            className="rounded-xl shadow-2xl relative"
            priority
            data-ai-hint="abstract technology"
          />
        </AppearOnScroll>
      </div>
    </section>
  );
}
