import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { FeatureConfig } from '@/config/features';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  feature: FeatureConfig;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;
  return (
    <Card className="flex flex-col h-full transform hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-1">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-4">
        <div className="bg-accent/10 p-3 rounded-lg">
          <Icon className="w-8 h-8 text-accent" />
        </div>
        <div className="flex-1">
          <CardTitle className="text-lg font-headline">{feature.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <CardDescription className="text-sm mb-4 flex-grow">
          {feature.description}
        </CardDescription>
        <Link href={`/features/${feature.slug}`} passHref>
          <Button variant="ghost" size="sm" className="text-primary hover:text-primary/90 p-0 h-auto">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
