import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { coreTechnologies } from '@/config/features';
import Image from 'next/image';
import { PlaySquare } from 'lucide-react';

export function InteractiveDemosSection() {
  const demoFeatures = coreTechnologies.slice(0, 3); // Show demos for first 3 core techs

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience AI in <span className="text-accent">Action</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Try our interactive demos to see the power of SynapseAI firsthand. Explore how our technologies perform in real-time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demoFeatures.map((feature) => (
            <Card key={feature.slug} className="flex flex-col overflow-hidden transform hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-1">
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
                <Link href={feature.interactiveDemoPath || '#'} passHref className="w-full">
                  <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent/10 hover:text-accent">
                    Launch Demo
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/demos" passHref>
            <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">View All Demos</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
