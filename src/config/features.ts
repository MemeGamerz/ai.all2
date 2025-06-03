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
    description: 'Understand, interpret, and generate human language with advanced NLP models.',
    longDescription: 'Our NLP capabilities allow SynapseAI to process and understand text and speech with remarkable accuracy. From sentiment analysis and text summarization to language translation and chatbot interactions, unlock the power of human language data. This technology forms the backbone of intelligent customer service, content creation, and data analysis applications.',
    category: 'Core Technology',
    interactiveDemoPath: '/demos/nlp',
    imagePath: 'https://placehold.co/600x400.png',
    dataAiHint: 'natural language'
  },
  {
    slug: 'image-recognition',
    icon: ImagePlay,
    title: 'Image Recognition',
    description: 'Identify objects, scenes, and faces within images and videos with high precision.',
    longDescription: 'SynapseAI\'s image recognition technology can analyze visual data to detect and classify elements with speed and precision. Applications range from automated content moderation and medical image analysis to retail inventory management and security surveillance. Leverage cutting-edge computer vision to gain insights from your visual assets.',
    category: 'Core Technology',
    interactiveDemoPath: '/demos/image-recognition',
    imagePath: 'https://placehold.co/600x400.png',
    dataAiHint: 'image recognition'
  },
  {
    slug: 'predictive-analytics',
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'Forecast future trends and outcomes based on historical data patterns.',
    longDescription: 'Utilize SynapseAI\'s predictive analytics to make data-driven decisions. By identifying patterns and trends in your historical data, our platform can forecast future outcomes, helping you optimize operations, anticipate market changes, and mitigate risks. Ideal for financial forecasting, demand planning, and personalized recommendations.',
    category: 'Core Technology',
    interactiveDemoPath: '/demos/predictive-analytics',
    imagePath: 'https://placehold.co/600x400.png',
    dataAiHint: 'data analytics'
  },
  {
    slug: 'voice-recognition',
    icon: Mic2,
    title: 'Voice Recognition',
    description: 'Transcribe spoken language into text and enable voice-controlled interactions.',
    longDescription: 'Integrate seamless voice interactions into your applications with SynapseAI. Our robust voice recognition technology accurately converts speech to text, enabling voice commands, dictation, and automated customer support via voice. Enhance accessibility and user experience with intuitive voice interfaces.',
    category: 'Core Technology',
    interactiveDemoPath: '/demos/voice-recognition',
    imagePath: 'https://placehold.co/600x400.png',
    dataAiHint: 'voice assistant'
  },
  {
    slug: 'code-generation',
    icon: Code2,
    title: 'Code Generation',
    description: 'Automate software development tasks by generating code snippets and entire modules.',
    longDescription: 'Accelerate your development cycles with SynapseAI\'s code generation capabilities. Describe your requirements in natural language or through specifications, and let our AI assist in writing, debugging, and optimizing code. Boost developer productivity and reduce time-to-market for new software.',
    category: 'Core Technology',
    interactiveDemoPath: '/demos/code-generation',
    imagePath: 'https://placehold.co/600x400.png',
    dataAiHint: 'coding programming'
  },
  {
    slug: 'emotion-analysis',
    icon: Users, // Using Users as SmilePlus might be too playful. More abstract could be BrainCircuit.
    title: 'Emotion Analysis',
    description: 'Detect and interpret human emotions from text, voice, or facial expressions.',
    longDescription: 'Gain deeper understanding of user sentiment and feedback with SynapseAI\'s emotion analysis. By analyzing text, voice tonality, or facial cues, our platform can identify underlying emotions, providing valuable insights for customer experience enhancement, market research, and mental well-being applications.',
    category: 'Core Technology',
    interactiveDemoPath: '/demos/emotion-analysis',
    imagePath: 'https://placehold.co/600x400.png',
    dataAiHint: 'facial expression'
  },
  {
    slug: 'unified-platform',
    icon: Zap,
    title: 'Unified Integration',
    description: 'Seamlessly combine multiple AI capabilities within a single, powerful platform.',
    longDescription: 'SynapseAI is not just a collection of AI tools; it\'s a fully integrated platform where different AI technologies work in concert. This synergy allows for the creation of sophisticated, multi-faceted AI solutions that are more powerful than the sum of their parts. Develop complex workflows, automate intricate processes, and build next-generation applications with ease.',
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
