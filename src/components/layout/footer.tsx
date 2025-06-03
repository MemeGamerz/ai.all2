import Link from 'next/link';
import { Logo } from '@/components/shared/logo';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-fade-in">
      <div className="container py-8 text-center text-sm text-muted-foreground md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="animate-slide-in-from-bottom [animation-delay:100ms]">
            <Link href="/" className="flex items-center gap-2 mb-2 justify-center md:justify-start">
              <Logo className="h-7 w-7 text-primary" />
              <span className="font-headline text-lg font-bold text-foreground">ai.all</span>
            </Link>
            <p className="text-xs">
              Unifying AI for a smarter future.
            </p>
          </div>
          
          <div className="animate-slide-in-from-bottom [animation-delay:200ms]">
            <h4 className="font-semibold text-foreground mb-2">Quick Links</h4>
            <ul className="space-y-1 text-xs">
              <li><Link href="/features" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="/demos" className="hover:text-primary transition-colors">Demos</Link></li>
              <li><Link href="/applications" className="hover:text-primary transition-colors">Applications</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div className="animate-slide-in-from-bottom [animation-delay:300ms]">
            <h4 className="font-semibold text-foreground mb-2">Connect</h4>
            <div className="flex space-x-3 justify-center md:justify-start">
              <Link href="#" aria-label="Twitter" className="hover:text-primary transition-colors"><Twitter size={18} /></Link>
              <Link href="#" aria-label="GitHub" className="hover:text-primary transition-colors"><Github size={18} /></Link>
              <Link href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors"><Linkedin size={18} /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/40">
          <p>&copy; {currentYear} ai.all. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
