
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Logo } from '@/components/shared/logo';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'Demos', href: '/demos' },
  { label: 'Applications', href: '/applications' },
  { label: 'Pricing', href: '/pricing' },
];

export function Header() {
  const pathname = usePathname();

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    navItems.map((item) => (
      <Link
        key={item.label}
        href={item.href}
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === item.href ? "text-primary" : "text-muted-foreground",
          mobile && "block py-2 text-lg"
        )}
      >
        {item.label}
      </Link>
    ))
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-fade-in">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-8 w-8 text-primary" />
          <span className="font-headline text-xl font-bold text-foreground">ai.all</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <NavLinks />
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact" passHref>
            <Button variant="outline" size="sm" className="hidden md:inline-flex transition-transform hover:scale-105">
              Contact Sales
            </Button>
          </Link>
          <Link href="/features" passHref>
            <Button size="sm" className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground transition-transform hover:scale-105">
              Get Started
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 p-6">
                <Link href="/" className="flex items-center gap-2 mb-4">
                   <Logo className="h-8 w-8 text-primary" />
                   <span className="font-headline text-xl font-bold text-foreground">ai.all</span>
                </Link>
                <nav className="flex flex-col space-y-4">
                  <NavLinks mobile />
                </nav>
                <Link href="/contact" passHref className="w-full">
                   <Button variant="outline" className="w-full">
                    Contact Sales
                  </Button>
                </Link>
                <Link href="/features" passHref className="w-full">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Get Started
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
