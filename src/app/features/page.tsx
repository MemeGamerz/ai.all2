
import Link from 'next/link';
import { features, FeatureConfig } from '@/config/features';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, LayoutGrid } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: 'AI Features - SynapseAI',
  description: 'Explore the diverse range of AI capabilities offered by the SynapseAI platform.',
};

const FeatureGridCard = ({ feature }: { feature: FeatureConfig }) => {
  const Icon = feature.icon;
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="p-2.5 bg-primary/10 rounded-md">
            <Icon className="h-7 w-7 text-primary" />
          </div>
          <Badge variant="outline" className="border-primary/50 text-primary/80 text-xs">{feature.category}</Badge>
        </div>
        <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm line-clamp-3">{feature.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link href={`/features/${feature.slug}`} passHref className="w-full">
          <Button variant="outline" className="w-full text-primary border-primary hover:bg-primary/10 transition-transform hover:scale-105">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default function FeaturesListPage() {
  const coreTech = features.filter(f => f.category === 'Core Technology');
  const platformCaps = features.filter(f => f.category === 'Platform Capability');

  return (
    <div className="py-8 md:py-12">
      <header className="text-center mb-12 md:mb-16">
        <LayoutGrid className="h-12 w-12 text-primary mx-auto mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
          Explore SynapseAI Features
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
          Dive deep into the specifics of each cutting-edge AI capability seamlessly integrated into the SynapseAI unified platform. Understand how these technologies can empower your business.
        </p>
      </header>

      {platformCaps.length > 0 && (
        <section className="mb-12 md:mb-16">
          <h2 className="font-headline text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center md:text-left">Platform Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {platformCaps.map((feature) => (
              <FeatureGridCard key={feature.slug} feature={feature} />
            ))}
          </div>
        </section>
      )}

      {coreTech.length > 0 && (
         <section>
          <h2 className="font-headline text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center md:text-left">Core AI Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {coreTech.map((feature) => (
              <FeatureGridCard key={feature.slug} feature={feature} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
