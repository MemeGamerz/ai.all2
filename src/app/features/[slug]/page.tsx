
import { getFeatureBySlug, features as allFeatures, FeatureConfig } from '@/config/features';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import FeatureContent from './feature-content';

interface FeaturePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return allFeatures.map((feature) => ({
    slug: feature.slug,
  }));
}

export async function generateMetadata({ params }: FeaturePageProps): Promise<Metadata> {
  const feature = getFeatureBySlug(params.slug);
  if (!feature) {
    return {
      title: 'Feature Not Found - ai.all',
      description: 'The requested feature could not be found.',
    };
  }
  return {
    title: `${feature.title} - ai.all Feature`,
    description: feature.description,
  };
}

export default async function FeaturePage({ params }: FeaturePageProps) {
  const feature = getFeatureBySlug(params.slug);

  if (!feature) {
    notFound();
  }

  const relatedFeatures = allFeatures
    .filter(f => f.slug !== feature.slug && f.category === feature.category)
    .slice(0, 2);

  return <FeatureContent feature={feature} relatedFeatures={relatedFeatures} />;
}
