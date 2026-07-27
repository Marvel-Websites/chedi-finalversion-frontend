import { S3_BASE } from './media';

const IMG = S3_BASE.replace('/extraimages', '/images');

export const ABOUT_TAGS = [
  'Land Development',
  'Farmer Empowerment',
  'Smart Agri-Tech',
  'Sustainable Models',
  'Community Agriculture',
];

export const MISSION_PILLARS = [
  { img: `${IMG}/2148224020.jpg`, alt: 'Soil health', icon: '🌍', title: 'Restore Soil Health', desc: 'Rebuild depleted land using natural, chemical-free restoration methods for long-term fertility.' },
  { img: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=1200&q=80&auto=format&fit=crop', alt: 'Farmer income', icon: '💰', title: 'Increase Farmer Income', desc: 'Create structured pathways for farmers to earn more through fair partnerships and market access.' },
  { img: 'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=1200&q=80&auto=format&fit=crop', alt: 'Healthy food', icon: '🥗', title: 'Produce Healthier Food', desc: 'Grow nutrient-rich, lab-tested, chemical-free produce for communities that care about quality.' },
  { img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80&auto=format&fit=crop', alt: 'Scale', icon: '📈', title: 'Build Scalable Systems', desc: 'Develop farming models that can be replicated, scaled, and sustained across multiple regions.' },
];

export const REVENUE_STREAMS = [
  { img: `${IMG}/photorealistic-flock-goats-nature.jpg`, alt: 'Farming', title: 'Shared Farming Revenue', desc: 'Income from Model 1 farming partnerships' },
  { img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80&auto=format&fit=crop', alt: 'Land', title: 'Land Development & Leasing', desc: 'Revenue from land partnerships and managed programs' },
  { img: 'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=1200&q=80&auto=format&fit=crop', alt: 'Produce', title: 'Produce Sales', desc: 'Sale of high-quality agricultural produce via CSA' },
  { img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80&auto=format&fit=crop', alt: 'Technology', title: 'Technology Enablement', desc: 'Agri-tech integration and smart farming systems' },
  { img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80&auto=format&fit=crop', alt: 'Training', title: 'Training Programs', desc: 'Educational and farmer training ecosystem' },
];

export const CARBON_POINTS = [
  { title: '🌱 Soil Carbon', desc: 'Sequestration through regenerative practices' },
  { title: '🌿 Regen Credits', desc: 'Verified regenerative agriculture credits' },
  { title: '🦋 Biodiversity', desc: 'Measurable ecosystem improvement' },
  { title: '🌍 Land Restoration', desc: 'Sustainable land restoration metrics' },
];

export const WHY_CARDS = [
  { img: `${IMG}/2151294239.jpg`, alt: 'Soil', title: 'Declining Soil Fertility', desc: 'Decades of chemical farming have depleted the nutrient capacity of millions of acres of farmland.' },
  { img: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=1200&q=80&auto=format&fit=crop', alt: 'Farmer', title: 'Farmer Income Instability', desc: 'Farmers face uncertain incomes, market exploitation, and limited access to technology and resources.' },
  { img: 'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=1200&q=80&auto=format&fit=crop', alt: 'Food quality', title: 'Poor Food Quality', desc: 'Rising chemical residues and declining nutritional value are directly impacting public health.' },
  { img: `${IMG}/2152020405.jpg`, alt: 'Sustainability', title: 'Unsustainable Systems', desc: 'Current farming practices deplete resources faster than they can regenerate, threatening future food security.' },
];

export const VISION_IMPACT = [
  { icon: '🌍', num: '500+', label: 'Acres Restored' },
  { icon: '👨‍🌾', num: '2,000+', label: 'Farmers Empowered' },
  { icon: '🔬', num: '↑ 40%', label: 'Soil Health Improved' },
  { icon: '🌿', num: 'Carbon+', label: 'Impact Generated' },
  { icon: '💰', num: '3×', label: 'Income Growth' },
];
