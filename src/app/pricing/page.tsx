
'use client';
import { CheckCircle, Zap, Rocket, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { AppearOnScroll } from '@/components/shared/AppearOnScroll';

export const metadata = {
  title: 'Pricing Plans - ai.all',
  description: 'Choose the perfect ai.all plan for your needs, from startups to enterprise solutions.',
};

const pricingTiers = [
  {
    name: 'Starter',
    icon: Zap,
    price: '$49',
    frequency: '/month',
    description: 'For individuals and small teams getting started with AI on the ai.all platform.',
    features: [
      'Access to Core AI Models',
      'Limited API Usage',
      'Basic Analytics Dashboard',
      'Community Support',
    ],
    cta: 'Get Started Free',
    ctaLink: '/contact?plan=starter',
    popular: false,
  },
  {
    name: 'Pro',
    icon: Rocket,
    price: '$199',
    frequency: '/month',
    description: 'For growing businesses needing more power and features from ai.all.',
    features: [
      'All Starter Features',
      'Increased API Usage Limits',
      'Advanced Analytics & Reporting',
      'Priority Email Support',
      'Early Access to New Features',
    ],
    cta: 'Choose Pro',
    ctaLink: '/contact?plan=pro',
    popular: true,
  },
  {
    name: 'Enterprise',
    icon: Building,
    price: 'Custom',
    frequency: '',
    description: 'Tailored ai.all solutions for large organizations with specific needs.',
    features: [
      'All Pro Features',
      'Unlimited API Usage (Fair Use)',
      'Custom Model Training',
      'Dedicated Account Manager',
      '24/7 Premium Support & SLA',
      'On-premise Deployment Option',
    ],
    cta: 'Contact Sales',
    ctaLink: '/contact?plan=enterprise',
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="py-12 md:py-16">
      <AppearOnScroll animationClassName="animate-slide-in-from-bottom">
        <header className="text-center mb-12 md:mb-16">
          <Rocket className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
            Flexible Pricing for Every Scale
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
            Find the ai.all plan that perfectly aligns with your project's scope and ambition. All plans are designed for growth and innovation.
          </p>
        </header>
      </AppearOnScroll>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingTiers.map((tier, index) => {
          const TierIcon = tier.icon;
          return (
            <AppearOnScroll 
              key={tier.name}
              animationClassName="animate-slide-in-from-bottom"
              delay={`[animation-delay:${200 + index * 100}ms]`}
            >
              <Card 
                className={`flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 ease-out h-full ${tier.popular ? 'border-2 border-primary relative overflow-hidden hover:-translate-y-1' : 'border border-transparent hover:border-primary/30 hover:-translate-y-1'}`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 transform translate-x-1/4 -translate-y-1/4 rotate-45">
                    Popular
                  </div>
                )}
                <CardHeader className="items-center text-center">
                  <div className={`p-3 rounded-full mb-4 ${tier.popular ? 'bg-primary/10' : 'bg-accent/10'}`}>
                    <TierIcon className={`h-10 w-10 ${tier.popular ? 'text-primary' : 'text-accent'}`} />
                  </div>
                  <CardTitle className="font-headline text-2xl text-foreground">{tier.name}</CardTitle>
                  <CardDescription className="text-muted-foreground h-12">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    {tier.frequency && <span className="text-muted-foreground">{tier.frequency}</span>}
                  </div>
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href={tier.ctaLink} passHref className="w-full">
                    <Button 
                      className={`w-full transition-transform hover:scale-105 ${tier.popular ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-accent hover:bg-accent/90 text-accent-foreground'}`}
                      variant={tier.popular ? 'default' : 'default'}
                    >
                      {tier.cta}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </AppearOnScroll>
          );
        })}
      </div>

      <AppearOnScroll animationClassName="animate-fade-in" delay="[animation-delay:400ms]">
        <div className="mt-16 text-center p-8 bg-secondary/30 rounded-lg max-w-3xl mx-auto">
          <h3 className="font-headline text-2xl font-semibold text-foreground mb-4">Not Sure Which Plan is Right?</h3>
          <p className="text-muted-foreground max-w-lg mx-auto mb-6">
            Our team can help you assess your needs and recommend the best ai.all solution for your specific use case.
          </p>
          <Link href="/contact" passHref>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground transition-transform hover:scale-105">
              Talk to an Expert
            </Button>
          </Link>
        </div>
      </AppearOnScroll>
    </div>
  );
}
