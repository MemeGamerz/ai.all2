
'use client';
import type { ReactNode } from 'react';
import { useRef } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface AppearOnScrollProps {
  children: ReactNode;
  animationClassName: string; // e.g., 'animate-slide-in-from-bottom'
  initialOpacity?: boolean; // If true, start with opacity-0
  delay?: string; // Tailwind animation delay class e.g. '[animation-delay:300ms]'
  threshold?: number;
  rootMargin?: string; // e.g., '0px 0px -50px 0px' to trigger 50px before fully in view from bottom
  className?: string; // For additional layout classes on the wrapper div
  as?: keyof JSX.IntrinsicElements; // To render as a different HTML element
}

export function AppearOnScroll({
  children,
  animationClassName,
  initialOpacity = true,
  delay = '',
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  className,
  as: Tag = 'div',
}: AppearOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, { threshold, rootMargin, freezeOnceVisible: true });
  const isVisible = !!entry?.isIntersecting;

  return (
    <Tag
      ref={ref}
      className={cn(
        className,
        // If not visible and initialOpacity is true, set opacity to 0.
        // The animationClassName itself is expected to handle the transition to opacity 1.
        !isVisible && initialOpacity ? 'opacity-0' : '',
        // Apply the main animation class and its delay only when the element is visible.
        isVisible ? animationClassName : '',
        isVisible ? delay : ''
      )}
    >
      {children}
    </Tag>
  );
}
