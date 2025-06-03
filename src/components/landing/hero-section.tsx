import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 animate-slide-in-from-bottom [animation-delay:0.2s]">
          The Future of AI, <span className="text-primary">Converged</span>.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-slide-in-from-bottom [animation-delay:0.4s]">
          SynapseAI unifies cutting-edge AI technologies into a single, powerful platform. Explore seamless integration of NLP, image recognition, predictive analytics, and more.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12 animate-slide-in-from-bottom [animation-delay:0.6s]">
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
        <div className="relative mt-12 animate-slide-in-from-bottom [animation-delay:0.8s] group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <Image
            src="https://placehold.co/1200x600.png"
            alt="SynapseAI Platform Showcase"
            width={1200}
            height={600}
            className="rounded-xl shadow-2xl relative"
            priority
            data-ai-hint="abstract technology"
          />
        </div>
      </div>
    </section>
  );
}
