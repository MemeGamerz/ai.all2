import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlayCircle } from 'lucide-react';

interface InteractiveDemoCardProps {
  title: string;
  description: string;
  thumbnailUrl: string;
  demoLink: string;
  dataAiHint?: string;
}

export function InteractiveDemoCard({ title, description, thumbnailUrl, demoLink, dataAiHint }: InteractiveDemoCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full transform hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-1">
      <CardHeader className="p-0 relative aspect-video">
        <Image 
            src={thumbnailUrl} 
            alt={title} 
            layout="fill" 
            objectFit="cover" 
            data-ai-hint={dataAiHint || "abstract ui"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
           <PlayCircle className="h-10 w-10 text-white opacity-80" />
        </div>
      </CardHeader>
      <CardContent className="pt-6 flex-grow">
        <CardTitle className="font-headline text-xl mb-2">{title}</CardTitle>
        <CardDescription className="text-sm line-clamp-3">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link href={demoLink} passHref className="w-full">
          <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent/10 hover:text-accent">
            Try Demo
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
