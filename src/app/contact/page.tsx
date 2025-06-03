
'use client';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { AppearOnScroll } from '@/components/shared/AppearOnScroll';

// Removed metadata export

export default function ContactPage() {
  return (
    <div className="py-12 md:py-16">
      <AppearOnScroll animationClassName="animate-slide-in-from-bottom">
        <header className="text-center mb-12 md:mb-16">
          <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
            We're here to answer your questions, discuss your projects, or explore partnership opportunities with ai.all. Reach out to us!
          </p>
        </header>
      </AppearOnScroll>

      <div className="grid md:grid-cols-2 gap-10 md:gap-16 max-w-5xl mx-auto">
        <AppearOnScroll animationClassName="animate-slide-in-from-left" delay="[animation-delay:200ms]">
          <div className="space-y-8">
            <Card className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">Contact Form</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Full Name</label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email Address</label>
                  <Input type="email" id="email" placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">Subject</label>
                  <Input id="subject" placeholder="Inquiry about..." />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
                  <Textarea id="message" placeholder="Your message..." rows={5} />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-transform hover:scale-105">Send Message</Button>
              </CardContent>
            </Card>
          </div>
        </AppearOnScroll>

        <AppearOnScroll animationClassName="animate-slide-in-from-right" delay="[animation-delay:400ms]">
          <div className="space-y-8">
            <Card className="shadow-md hover:shadow-accent/20 transition-shadow duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-accent">Our Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Mail className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Email Us</h3>
                    <p className="text-muted-foreground">contact@ai.all.example.com</p>
                    <p className="text-muted-foreground">support@ai.all.example.com</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Call Us</h3>
                    <p className="text-muted-foreground">Sales: +1 (555) 123-4567</p>
                    <p className="text-muted-foreground">Support: +1 (555) 765-4321</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Visit Us</h3>
                    <p className="text-muted-foreground">123 AI Avenue, Tech City, TX 75001</p>
                    <p className="text-muted-foreground">Open Mon-Fri, 9 AM - 5 PM CST</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <p className="text-sm text-muted-foreground text-center">We typically respond to inquiries within 24-48 business hours.</p>
          </div>
        </AppearOnScroll>
      </div>
    </div>
  );
}
