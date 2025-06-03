
'use client';
import { InteractiveDemoCard } from "@/components/shared/interactive-demo-card";
import { coreTechnologies } from "@/config/features";
import { PlaySquare } from "lucide-react";
import { AppearOnScroll } from "@/components/shared/AppearOnScroll";

export const metadata = {
  title: 'Interactive Demos - ai.all',
  description: 'Experience the power of ai.all through interactive demonstrations of our core AI technologies.',
};

export default function DemosPage() {
  return (
    <div className="py-8 md:py-12">
      <AppearOnScroll animationClassName="animate-slide-in-from-bottom">
        <header className="text-center mb-12 md:mb-16">
          <PlaySquare className="h-12 w-12 text-accent mx-auto mb-4" />
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
            Interactive AI Demos
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
            Get truly hands-on with the capabilities of ai.all. Explore the power and versatility of our platform by interacting directly with these live demonstrations of our core AI technologies.
          </p>
        </header>
      </AppearOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coreTechnologies.map((feature, index) => (
          <AppearOnScroll 
            key={feature.slug}
            animationClassName="animate-slide-in-from-bottom"
            delay={`[animation-delay:${200 + index * 100}ms]`}
          >
            <InteractiveDemoCard
              title={`${feature.title} Demo`}
              description={`Explore interactive ${feature.title.toLowerCase()} capabilities. ${feature.description.split('.')[0]}.`}
              thumbnailUrl={feature.imagePath || `https://placehold.co/400x300.png?text=${feature.title.replace(" ", "+")}+Demo`}
              demoLink={feature.interactiveDemoPath || `/demos/${feature.slug}`}
              dataAiHint={feature.dataAiHint || "technology interface"}
            />
          </AppearOnScroll>
        ))}
      </div>

      <AppearOnScroll animationClassName="animate-fade-in" delay="[animation-delay:400ms]">
         <div className="mt-16 text-center p-8 bg-secondary/30 rounded-lg">
          <h3 className="font-headline text-2xl font-semibold text-foreground mb-4">More Demos Coming Soon!</h3>
          <p className="text-muted-foreground max-w-lg mx-auto">
            We are constantly expanding our demo library to showcase the latest advancements in ai.all. Check back regularly for new interactive experiences.
          </p>
        </div>
      </AppearOnScroll>
    </div>
  );
}
