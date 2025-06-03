
'use client';
import type { FeatureConfig } from '@/config/features';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, PlayCircle, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AppearOnScroll } from '@/components/shared/AppearOnScroll';

interface FeatureContentProps {
  feature: FeatureConfig;
  relatedFeatures: FeatureConfig[];
}

const featureSpecificBenefits: Record<string, string[]> = {
  'natural-language-processing': [
    'Enhanced Customer Engagement: Automate responses, personalize interactions, and understand customer needs at scale with ai.all.',
    'Streamlined Content Workflows: Accelerate content creation, summarization, and translation with AI assistance from ai.all.',
    'Actionable Data Insights: Extract valuable information from unstructured text data to inform strategic decisions using ai.all.',
  ],
  'image-recognition': [
    'Automated Visual Inspection: Improve quality control and defect detection in manufacturing processes with ai.all.',
    'Enhanced Security Systems: Power intelligent surveillance and access control with real-time object and facial recognition by ai.all.',
    'Interactive Media Experiences: Create engaging applications by identifying and tagging content within images and videos via ai.all.',
  ],
  'predictive-analytics': [
    'Optimized Resource Allocation: Forecast demand and allocate resources efficiently to reduce waste and improve ROI with ai.all.',
    'Proactive Risk Management: Identify potential risks and anomalies before they impact your business operations using ai.all.',
    'Personalized Customer Journeys: Predict customer behavior and preferences to deliver tailored experiences and offers through ai.all.',
  ],
  'voice-recognition': [
    'Hands-Free Device Control: Enable intuitive voice commands for applications and IoT devices with ai.all.',
    'Improved Accessibility: Make digital products more accessible to users with disabilities using ai.all.',
    'Efficient Data Entry: Allow users to dictate notes, messages, and commands, speeding up workflows via ai.all.',
  ],
  'code-generation': [
    'Accelerated Prototyping: Rapidly create functional prototypes and MVPs to test ideas quickly with ai.all.',
    'Reduced Repetitive Tasks: Automate the generation of boilerplate code and common software patterns using ai.all.',
    'Enhanced Code Quality: Leverage AI from ai.all to suggest optimizations and ensure adherence to best practices.',
  ],
  'emotion-analysis': [
    'Improved Customer Service: Understand customer emotions in real-time to provide more empathetic support with ai.all.',
    'Enhanced Product Development: Gather nuanced feedback on user sentiment towards products and features using ai.all.',
    'Personalized Content Delivery: Adapt content and recommendations based on the user\'s emotional state via ai.all.',
  ],
   'unified-platform': [
    'Simplified Development: Access diverse AI tools through a single, consistent API and interface from ai.all.',
    'Synergistic AI Solutions: Combine multiple AI capabilities to solve complex problems in novel ways on the ai.all platform.',
    'Scalable Infrastructure: Build and deploy AI applications that can grow with your business needs on the ai.all platform.',
  ]
};

const defaultBenefits = (featureTitle: string) => [
  `Drive innovation with advanced ${featureTitle.toLowerCase()} capabilities from ai.all.`,
  `Increase operational efficiency and reduce manual effort using ai.all.`,
  `Gain a competitive edge through deeper insights and automation with ai.all.`,
];

export default function FeatureContent({ feature, relatedFeatures }: FeatureContentProps) {
  const Icon = feature.icon;
  const benefits = featureSpecificBenefits[feature.slug] || defaultBenefits(feature.title);

  return (
    <div className="max-w-5xl mx-auto py-8 md:py-12 px-4">
      <AppearOnScroll animationClassName="animate-fade-in">
        <Link href="/features" className="inline-flex items-center text-sm text-primary hover:underline mb-8 group">
          <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to All Features
        </Link>
      </AppearOnScroll>

      <article>
        <AppearOnScroll animationClassName="animate-slide-in-from-bottom">
          <header className="mb-10">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Icon className="h-10 w-10 text-primary" />
              </div>
              <div>
                <Badge variant="outline" className="mb-2 border-primary text-primary">{feature.category}</Badge>
                <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
                  {feature.title}
                </h1>
              </div>
            </div>
            <p className="text-xl text-muted-foreground mt-3">
              {feature.description}
            </p>
          </header>
        </AppearOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {feature.imagePath && (
              <AppearOnScroll animationClassName="animate-slide-in-from-left" delay="[animation-delay:200ms]">
                <div className="mb-8 rounded-lg overflow-hidden shadow-lg aspect-video relative group">
                  <Image
                    src={feature.imagePath}
                    alt={feature.title}
                    fill // Changed from layout="fill" objectFit="cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={feature.dataAiHint || "technology concept"}
                  />
                </div>
              </AppearOnScroll>
            )}
            <AppearOnScroll animationClassName="animate-slide-in-from-left" delay="[animation-delay:300ms]">
              <div className="prose prose-lg max-w-none text-foreground dark:prose-invert prose-p:text-muted-foreground prose-headings:text-foreground prose-strong:text-foreground">
                <h2 className="font-headline text-2xl font-semibold mb-4">In-depth Overview</h2>
                <p>{feature.longDescription}</p>

                <h3 className="font-headline text-xl font-semibold mt-8 mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AppearOnScroll>
          </div>

          <aside className="md:col-span-1 space-y-8">
            {feature.interactiveDemoPath && (
              <AppearOnScroll animationClassName="animate-slide-in-from-right" delay="[animation-delay:400ms]">
                <Card className="bg-primary/5 border-primary/20 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <h3 className="font-headline text-xl font-semibold mb-3 text-primary">Try it Out!</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Experience {feature.title} live with our interactive demo.
                    </p>
                    <Link href={feature.interactiveDemoPath} passHref>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-transform hover:scale-105">
                        <PlayCircle className="mr-2 h-5 w-5" />
                        Launch Demo
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </AppearOnScroll>
            )}

            {relatedFeatures.length > 0 && (
               <AppearOnScroll animationClassName="animate-slide-in-from-right" delay="[animation-delay:500ms]">
                <div>
                  <h3 className="font-headline text-xl font-semibold mb-4 text-foreground">Related Features</h3>
                  <div className="space-y-4">
                    {relatedFeatures.map(related => {
                      const RelatedIcon = related.icon;
                      return (
                      <Link key={related.slug} href={`/features/${related.slug}`} className="block group">
                        <Card className="hover:border-primary/50 transition-colors hover:shadow-md duration-300 hover:-translate-y-1">
                          <CardContent className="p-4 flex items-center space-x-3">
                            <RelatedIcon className="h-6 w-6 text-primary/70 group-hover:text-primary transition-colors" />
                            <div>
                              <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{related.title}</p>
                              <p className="text-xs text-muted-foreground line-clamp-1">{related.description}</p>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    )})}
                  </div>
                </div>
              </AppearOnScroll>
            )}
          </aside>
        </div>
        
        <Separator className="my-12" />

        <AppearOnScroll animationClassName="animate-fade-in" delay="[animation-delay:600ms]">
          <div className="text-center">
              <h3 className="font-headline text-2xl font-semibold mb-4 text-foreground">Ready to integrate {feature.title}?</h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Learn how ai.all can elevate your business with our powerful {feature.title.toLowerCase()} capabilities. Our experts are ready to help.
              </p>
              <Link href="/contact" passHref>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground transition-transform hover:scale-105">
                    Request a Consultation
                </Button>
              </Link>
          </div>
        </AppearOnScroll>
      </article>
    </div>
  );
}
