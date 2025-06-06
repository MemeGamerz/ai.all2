
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/80 via-primary to-purple-700 text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <Zap className="h-16 w-16 mx-auto mb-6 opacity-80 animate-fade-in" />
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6 animate-fade-in [animation-delay:100ms]">
          Ready to Transform Your Enterprise with Converged AI?
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90 animate-fade-in [animation-delay:200ms]">
          Unlock unprecedented operational insights, drive innovation, and achieve superior efficiency with SynapseAI. Our enterprise-grade, converged AI platform is engineered to scale with your ambitions and integrate fluidly into your existing workflows.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in [animation-delay:300ms]">
          <Link href="/contact" passHref>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground hover:border-primary-foreground/90 transition-transform hover:scale-105 shadow-lg animate-subtle-beat"
            >
              Request a Demo
            </Button>
          </Link>
          <Link href="/pricing" passHref>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground transition-transform hover:scale-105 shadow-lg"
            >
              View Pricing Plans <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
