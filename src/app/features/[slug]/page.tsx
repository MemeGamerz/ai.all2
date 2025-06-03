
import { getFeatureBySlug, features as allFeatures, FeatureConfig } from '@/config/features';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, PlayCircle, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';

interface FeaturePageProps {
  params: {
    slug: string;
  };
}

// Pre-defined benefits for specific features
// This can be expanded or moved to a more structured configuration if needed
const featureSpecificBenefits: Record<string, string[]> = {
  'natural-language-processing': [
    'Enhanced Customer Engagement: Automate responses, personalize interactions, and understand customer needs at scale.',
    'Streamlined Content Workflows: Accelerate content creation, summarization, and translation with AI assistance.',
    'Actionable Data Insights: Extract valuable information from unstructured text data to inform strategic decisions.',
  ],
  'image-recognition': [
    'Automated Visual Inspection: Improve quality control and defect detection in manufacturing processes.',
    'Enhanced Security Systems: Power intelligent surveillance and access control with real-time object and facial recognition.',
    'Interactive Media Experiences: Create engaging applications by identifying and tagging content within images and videos.',
  ],
  'predictive-analytics': [
    'Optimized Resource Allocation: Forecast demand and allocate resources efficiently to reduce waste and improve ROI.',
    'Proactive Risk Management: Identify potential risks and anomalies before they impact your business operations.',
    'Personalized Customer Journeys: Predict customer behavior and preferences to deliver tailored experiences and offers.',
  ],
  'voice-recognition': [
    'Hands-Free Device Control: Enable intuitive voice commands for applications and IoT devices.',
    'Improved Accessibility: Make digital products more accessible to users with disabilities.',
    'Efficient Data Entry: Allow users to dictate notes, messages, and commands, speeding up workflows.',
  ],
  'code-generation': [
    'Accelerated Prototyping: Rapidly create functional prototypes and MVPs to test ideas quickly.',
    'Reduced Repetitive Tasks: Automate the generation of boilerplate code and common software patterns.',
    'Enhanced Code Quality: Leverage AI to suggest optimizations and ensure adherence to best practices.',
  ],
  'emotion-analysis': [
    'Improved Customer Service: Understand customer emotions in real-time to provide more empathetic support.',
    'Enhanced Product Development: Gather nuanced feedback on user sentiment towards products and features.',
    'Personalized Content Delivery: Adapt content and recommendations based on the user\'s emotional state.',
  ],
   'unified-platform': [
    'Simplified Development: Access diverse AI tools through a single, consistent API and interface.',
    'Synergistic AI Solutions: Combine multiple AI capabilities to solve complex problems in novel ways.',
    'Scalable Infrastructure: Build and deploy AI applications that can grow with your business needs.',
  ]
};

const defaultBenefits = (featureTitle: string) => [
  `Drive innovation with advanced ${featureTitle.toLowerCase()} capabilities.`,
  `Increase operational efficiency and reduce manual effort.`,
  `Gain a competitive edge through deeper insights and automation.`,
];


export async function generateStaticParams() {
  return allFeatures.map((feature) => ({
    slug: feature.slug,
  }));
}

export async function generateMetadata({ params }: FeaturePageProps) {
  const feature = getFeatureBySlug(params.slug);
  if (!feature) {
    return { title: 'Feature Not Found' };
  }
  return {
    title: `${feature.title} - SynapseAI Feature`,
    description: feature.description,
  };
}

export default function FeaturePage({ params }: FeaturePageProps) {
  const feature = getFeatureBySlug(params.slug);

  if (!feature) {
    notFound();
  }

  const Icon = feature.icon;
  const benefits = featureSpecificBenefits[feature.slug] || defaultBenefits(feature.title);

  const relatedFeatures = allFeatures
    .filter(f => f.slug !== feature.slug && f.category === feature.category)
    .slice(0, 2);

  return (
    <div className="max-w-5xl mx-auto py-8 md:py-12 px-4">
      <Link href="/features" className="inline-flex items-center text-sm text-primary hover:underline mb-8 group">
        <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
        Back to All Features
      </Link>

      <article>
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

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {feature.imagePath && (
              <div className="mb-8 rounded-lg overflow-hidden shadow-lg aspect-video relative">
                <Image
                  src={feature.imagePath}
                  alt={feature.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                  data-ai-hint={feature.dataAiHint || "technology concept"}
                />
              </div>
            )}

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
          </div>

          <aside className="md:col-span-1 space-y-8">
            {feature.interactiveDemoPath && (
              <Card className="bg-primary/5 border-primary/20 shadow-lg">
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
            )}

            {relatedFeatures.length > 0 && (
              <div>
                <h3 className="font-headline text-xl font-semibold mb-4 text-foreground">Related Features</h3>
                <div className="space-y-4">
                  {relatedFeatures.map(related => {
                    const RelatedIcon = related.icon;
                    return (
                    <Link key={related.slug} href={`/features/${related.slug}`} className="block group">
                      <Card className="hover:border-primary/50 transition-colors hover:shadow-md">
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
            )}
          </aside>
        </div>
        
        <Separator className="my-12" />

        <div className="text-center">
            <h3 className="font-headline text-2xl font-semibold mb-4 text-foreground">Ready to integrate {feature.title}?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Learn how SynapseAI can elevate your business with our powerful {feature.title.toLowerCase()} capabilities. Our experts are ready to help.
            </p>
            <Link href="/contact" passHref>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground transition-transform hover:scale-105">
                  Request a Consultation
              </Button>
            </Link>
        </div>

      </article>
    </div>
  );
}
