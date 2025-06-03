import { platformCapabilities } from '@/config/features';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export function FeatureHighlightsSection() {
  const unifiedPlatformFeature = platformCapabilities[0]; // Assuming the first one is 'Unified Integration'

  if (!unifiedPlatformFeature) {
    return null; // Or some fallback UI
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Key Capability</span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              {unifiedPlatformFeature.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {unifiedPlatformFeature.longDescription}
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                Develop complex, multi-faceted AI solutions.
              </li>
              <li className="flex items-center text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                Automate intricate processes with synergistic AI.
              </li>
              <li className="flex items-center text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                Build next-generation applications with ease.
              </li>
            </ul>
            <Link href={`/features/${unifiedPlatformFeature.slug}`} passHref>
              <Button size="lg" variant="outline" className="text-primary border-primary hover:bg-primary/10">
                Discover Platform Synergy
              </Button>
            </Link>
          </div>
          <div className="order-1 md:order-2 group">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse animation-delay-500"></div>
              <Image
                src={unifiedPlatformFeature.imagePath || "https://placehold.co/600x500.png"}
                alt={unifiedPlatformFeature.title}
                width={600}
                height={500}
                className="rounded-xl shadow-xl relative"
                data-ai-hint={unifiedPlatformFeature.dataAiHint || "technology abstract"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
