import { generateIndustryApplications } from '@/ai/flows/generate-industry-applications';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Leaf, Landmark, Stethoscope, School, AlertTriangle, Loader2, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Industry {
  name: string;
  icon: LucideIcon;
  description: string;
  themeColor: string; // Tailwind color class e.g., 'text-blue-500'
}

const industries: Industry[] = [
  { name: 'Healthcare', icon: Stethoscope, description: 'Revolutionizing patient care, diagnostics, and medical research.', themeColor: 'text-sky-500' },
  { name: 'Finance', icon: Landmark, description: 'Transforming banking, investment strategies, and fraud detection.', themeColor: 'text-emerald-500' },
  { name: 'Agriculture', icon: Leaf, description: 'Optimizing crop yields, resource management, and sustainability.', themeColor: 'text-lime-600' },
  { name: 'Education', icon: School, description: 'Personalizing learning experiences and administrative efficiency.', themeColor: 'text-indigo-500' },
];

async function ApplicationsList({ industryName }: { industryName: string }) {
  try {
    const result = await generateIndustryApplications({ industries: [industryName] });
    if (!result || !result.applications || result.applications.length === 0) {
      return <p className="text-sm text-muted-foreground">No specific applications generated for {industryName} at this time.</p>;
    }
    return (
      <ul className="space-y-3 pl-6">
        {result.applications.map((app, index) => (
          <li key={index} className="flex items-start text-sm">
            <Sparkles className="h-4 w-4 mr-3 mt-1 text-primary/70 flex-shrink-0" />
            <span>{app}</span>
          </li>
        ))}
      </ul>
    );
  } catch (error) {
    console.error(`Error fetching applications for ${industryName}:`, error);
    return (
      <Alert variant="destructive" className="mt-4">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Could not load applications for {industryName}. Please try again later.</AlertDescription>
      </Alert>
    );
  }
}


export async function IndustryApplicationsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
            Transforming Industries with <span className="text-primary">SynapseAI</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover real-world examples of how SynapseAI is driving innovation and efficiency across diverse sectors.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {industries.map((industry, index) => (
            <AccordionItem value={`item-${index}`} key={industry.name} className="bg-card border border-border/70 rounded-lg shadow-sm transition-shadow hover:shadow-md">
              <AccordionTrigger className="p-6 text-left hover:no-underline">
                <div className="flex items-center space-x-4">
                  <industry.icon className={`w-8 h-8 ${industry.themeColor}`} />
                  <div>
                    <h3 className="text-lg font-headline font-semibold text-foreground">{industry.name}</h3>
                    <p className="text-sm text-muted-foreground">{industry.description}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0">
                <div className="border-t border-border/70 pt-4">
                  <React.Suspense fallback={<div className="flex items-center space-x-2 text-sm text-muted-foreground"><Loader2 className="h-4 w-4 animate-spin" /> <span>Loading applications...</span></div>}>
                    {/* @ts-expect-error Server Component */}
                    <ApplicationsList industryName={industry.name} />
                  </React.Suspense>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

// Add React import for Suspense
import React from 'react';
