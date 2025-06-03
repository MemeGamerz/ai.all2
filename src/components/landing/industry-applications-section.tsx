
'use client'; // Made client component to use AppearOnScroll and for Accordion client features

import { generateIndustryApplications } from '@/ai/flows/generate-industry-applications';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Leaf, Landmark, Stethoscope, School, AlertTriangle, Loader2, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import React from 'react'; 
import { AppearOnScroll } from '@/components/shared/AppearOnScroll';

interface Industry {
  name: string;
  icon: LucideIcon;
  description: string;
  themeColor: string; 
}

const industries: Industry[] = [
  { name: 'Healthcare', icon: Stethoscope, description: 'Revolutionizing patient care, diagnostics, and medical research.', themeColor: 'text-sky-500' },
  { name: 'Finance', icon: Landmark, description: 'Transforming banking, investment strategies, and fraud detection.', themeColor: 'text-emerald-500' },
  { name: 'Agriculture', icon: Leaf, description: 'Optimizing crop yields, resource management, and sustainability.', themeColor: 'text-lime-600' },
  { name: 'Education', icon: School, description: 'Personalizing learning experiences and administrative efficiency.', themeColor: 'text-indigo-500' },
];

// ApplicationsList remains a Server Component if called correctly, but must be async.
// However, since its parent IndustryApplicationsSection is now 'use client',
// we need to adjust how we render it or make it a client component too.
// For simplicity here, we'll assume it's okay to call an async function from a client component,
// though typically you'd use useEffect for data fetching.
// Let's make ApplicationsList a regular async function called within a client component context.

async function fetchApplications(industryName: string) {
  try {
    const result = await generateIndustryApplications({ industries: [industryName] });
    if (!result || !result.applications || result.applications.length === 0) {
      return { data: null, error: `No specific applications generated for ${industryName} at this time.` };
    }
    return { data: result.applications, error: null };
  } catch (error) {
    console.error(`Error fetching applications for ${industryName}:`, error);
    return { data: null, error: `Could not load applications for ${industryName}. Please try again later.` };
  }
}

function ApplicationsDisplay({ industryName }: { industryName: string }) {
  const [applications, setApplications] = React.useState<string[] | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadData() {
      setLoading(true);
      const result = await fetchApplications(industryName);
      setApplications(result.data);
      setError(result.error);
      setLoading(false);
    }
    loadData();
  }, [industryName]);

  if (loading) {
    return <div className="flex items-center space-x-2 text-sm text-muted-foreground"><Loader2 className="h-4 w-4 animate-spin" /> <span>Loading applications...</span></div>;
  }

  if (error && !applications) { // Show error only if no data
     return (
      <Alert variant="destructive" className="mt-4">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }
  
  if (!applications || applications.length === 0) {
     return <p className="text-sm text-muted-foreground">No specific applications generated for {industryName} at this time.</p>;
  }

  return (
    <ul className="space-y-3 pl-6">
      {applications.map((app, index) => (
        <li key={index} className="flex items-start text-sm">
          <Sparkles className="h-4 w-4 mr-3 mt-1 text-primary/70 flex-shrink-0" />
          <span>{app}</span>
        </li>
      ))}
    </ul>
  );
}


export function IndustryApplicationsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <AppearOnScroll animationClassName="animate-fade-in" className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
            Transforming Industries with <span className="text-primary">ai.all</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover real-world examples of how ai.all is driving innovation and efficiency across diverse sectors.
          </p>
        </AppearOnScroll>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {industries.map((industry, index) => (
            <AppearOnScroll 
              animationClassName="animate-slide-in-from-bottom" 
              delay={`[animation-delay:${100 + index * 100}ms]`}
              key={industry.name}
              as={AccordionItem}
              // @ts-ignore AppearOnScroll 'as' prop doesn't perfectly type match AccordionItem props like 'value'
              // This is a common issue with polymorphic 'as' props in TypeScript.
              // We'll pass 'value' directly to AccordionItem when rendered by AppearOnScroll's Tag.
              value={`item-${index}`} 
              className="bg-card border border-border/70 rounded-lg shadow-sm transition-shadow hover:shadow-md"
            >
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
                  <ApplicationsDisplay industryName={industry.name} />
                </div>
              </AccordionContent>
            </AppearOnScroll>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

