
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { coreTechnologies } from '@/config/features';
import Image from 'next/image';
import { PlaySquare } from 'lucide-react';

export function InteractiveDemosSection() {
  const demoFeatures = coreTechnologies.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">
            Experience AI in <span className="text-accent">Action</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:100ms]">
            Try our interactive demos to experience the true power and responsiveness of SynapseAI firsthand. Explore how our diverse AI technologies perform in real-time scenarios and envision their impact on your operations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demoFeatures.map((feature, index) => (
            <div 
              key={feature.slug} 
              className="animate-slide-in-from-bottom"
              style={{ animationDelay: `${200 + index * 150}ms` }}
            >
              <Card className="flex flex-col overflow-hidden transform hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-1 h-full">
                <CardHeader className="p-0">
                  <div className="relative aspect-video">
                    <Image 
                      src={feature.imagePath || "https://placehold.co/400x225.png"} 
                      alt={`${feature.title} Demo`} 
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint={feature.dataAiHint || "technology interface"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <PlaySquare className="absolute top-4 right-4 h-8 w-8 text-white/80" />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow pt-6">
                  <CardTitle className="text-lg font-headline mb-2">{feature.title} Demo</CardTitle>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    Explore interactive {feature.title.toLowerCase()} capabilities. {feature.description.split('.')[0]}.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href={feature.interactiveDemoPath || `/demos/${feature.slug}`} passHref className="w-full">
                    <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent/10 hover:text-accent transition-transform hover:scale-105">
                      Launch Demo
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 animate-fade-in [animation-delay:500ms]">
          <Link href="/demos" passHref>
            <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground transition-transform hover:scale-105">View All Demos</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
