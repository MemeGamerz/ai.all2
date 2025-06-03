
import type { LucideIcon } from 'lucide-react';
import { BrainCog, ScanSearch, BarChart3, Mic2, TerminalSquare, SmilePlus, BotMessageSquare, ImagePlay, TrendingUp, Zap, Code2, Users } from 'lucide-react';

export interface FeatureConfig {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  longDescription: string;
  category: 'Core Technology' | 'Platform Capability';
  interactiveDemoPath?: string;
  imagePath?: string;
  dataAiHint?: string;
}

export const features: FeatureConfig[] = [
  {
    slug: 'natural-language-processing',
    icon: BotMessageSquare,
    title: 'Natural Language Processing',
    description: 'Understand, interpret, and generate human language with advanced NLP models from ai.all.',
    longDescription: "Our NLP capabilities allow ai.all to process and understand text and speech with unparalleled accuracy. From advanced sentiment analysis and contextual text summarization to nuanced language translation and sophisticated chatbot interactions, unlock the full potential of your language data. This technology is the cornerstone of intelligent customer service automation, dynamic content generation, and insightful data analysis applications, driving efficiency and deeper understanding.",
    category: 'Core Technology',
    interactiveDemoPath: '/demos/nlp',
    imagePath: 'https://placehold.co/600x400.png',
    dataAiHint: 'natural language'
  },
  {
    slug: 'image-recognition',
    icon: ImagePlay,
    title: 'Image Recognition',
    description: 'Identify objects, scenes, and faces within images and videos with high precision using ai.all.',
    longDescription: "ai.all's state-of-the-art image recognition technology can analyze visual data to detect, classify, and interpret elements with exceptional speed and precision. Applications span from automated content moderation and detailed medical image analysis to intelligent retail inventory management and proactive security surveillance. Leverage cutting-edge computer vision to extract actionable insights from your visual assets and automate visual tasks.",
    category: 'Core Technology',
    interactiveDemoPath: '/demos/image-recognition',
    imagePath: 'https://placehold.co/600x400.png',
    dataAiHint: 'image recognition'
  },
  {
    slug: 'predictive-analytics',
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'Forecast future trends and outcomes based on historical data patterns with ai.all.',
    longDescription: "Empower your organization with ai.all's predictive analytics to make proactive, data-driven decisions. By identifying complex patterns and subtle trends in your historical and real-time data, our platform forecasts future outcomes with high confidence. This is crucial for strategic financial forecasting, optimizing supply chains, personalizing customer experiences, and identifying emerging market opportunities or potential risks.",
    category: 'Core Technology',
    interactiveDemoPath: '/demos/predictive-analytics',
    imagePath: 'https://placehold.co/600x400.png',
    dataAiHint: 'data analytics'
  },
  {
    slug: 'voice-recognition',
    icon: Mic2,
    title: 'Voice Recognition',
    description: 'Transcribe spoken language into text and enable voice-controlled interactions via ai.all.',
    longDescription: "Integrate natural and seamless voice interactions into your applications and services with ai.all. Our robust voice recognition technology accurately transcribes speech to text in multiple languages and accents, enabling sophisticated voice commands, hands-free dictation, and automated, intelligent customer support via voice. Enhance accessibility and user engagement with intuitive, responsive voice interfaces.",
    category: 'Core Technology',
    interactiveDemoPath: '/demos/voice-recognition',
    imagePath: 'https://placehold.co/600x400.png',
    dataAiHint: 'voice assistant'
  },
  {
    slug: 'code-generation',
    icon: Code2,
    title: 'Code Generation',
    description: 'Automate software development tasks by generating code snippets and entire modules with ai.all.',
    longDescription: "Revolutionize your development workflows with ai.all's intelligent code generation. Describe your software requirements in natural language or through high-level specifications, and let our AI assist in writing clean, efficient, and maintainable code snippets or entire modules across various programming languages. Significantly boost developer productivity, reduce human error, and accelerate your time-to-market for new software solutions and updates.",
    category: 'Core Technology',
    interactiveDemoPath: '/demos/code-generation',
    imagePath: 'https://placehold.co/600x400.png',
    dataAiHint: 'coding programming'
  },
  {
    slug: 'emotion-analysis',
    icon: Users,
    title: 'Emotion Analysis',
    description: 'Detect and interpret human emotions from text, voice, or facial expressions using ai.all.',
    longDescription: "Gain profound insights into user and customer sentiment with ai.all's advanced emotion analysis. By meticulously analyzing text, voice tonality, or facial expressions, our platform identifies and interprets a wide spectrum of human emotions. These invaluable insights can transform customer experience strategies, refine market research, personalize digital interactions, and support innovative mental well-being applications.",
    category: 'Core Technology',
    interactiveDemoPath: '/demos/emotion-analysis',
    imagePath: 'https://placehold.co/600x400.png',
    dataAiHint: 'facial expression'
  },
  {
    slug: 'unified-platform',
    icon: Zap,
    title: 'Unified Integration',
    description: 'Seamlessly combine multiple AI capabilities within ai.all, a single, powerful platform.',
    longDescription: "ai.all is more than a suite of AI tools; it's a cohesively integrated ecosystem where diverse AI technologies converge and collaborate. This unique synergy enables the creation of highly sophisticated, multi-modal AI solutions that are significantly more powerful and versatile than the sum of their individual parts. Effortlessly develop complex, cross-functional workflows, automate intricate end-to-end processes, and pioneer next-generation intelligent applications with our unified platform.",
    category: 'Platform Capability',
    imagePath: 'https://placehold.co/600x400.png',
    dataAiHint: 'connected network'
  },
];

export const coreTechnologies = features.filter(f => f.category === 'Core Technology');
export const platformCapabilities = features.filter(f => f.category === 'Platform Capability');

export const getFeatureBySlug = (slug: string): FeatureConfig | undefined => {
  return features.find(feature => feature.slug === slug);
};
