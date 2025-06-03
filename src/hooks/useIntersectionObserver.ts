
'use client';
import type { RefObject } from 'react';
import { useEffect, useState, useMemo } from 'react';

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

function useIntersectionObserver(
  elementRef: RefObject<Element>,
  {
    threshold = 0.1,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = true,
  }: Args,
): IntersectionObserverEntry | undefined {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const observerParams = useMemo(() => ({ threshold, root, rootMargin }), [threshold, root, rootMargin]);

  useEffect(() => {
    const node = elementRef?.current; 
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observer = new IntersectionObserver(([entry]) => setEntry(entry), observerParams);
    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef, observerParams, frozen]);

  return entry;
}

export default useIntersectionObserver;
