import { S3_BASE } from './media';

export const ECO_CARDS = [
  {
    img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80',
    alt: 'Fresh harvested vegetables',
    title: 'CSA',
    desc: 'Community Supported Agriculture — fresh organic produce delivered weekly to your family.',
    navPage: 'csa',
  },
  {
    img: `${S3_BASE.replace('/extraimages', '/images')}/9355.jpg`,
    alt: 'Aerial farmland plots',
    title: 'Agri-Land',
    desc: 'Transform your agricultural land into productive, sustainable organic farmland.',
    navPage: 'land',
  },
  {
    img: `${S3_BASE.replace('/extraimages', '/images')}/14786.jpg`,
    alt: 'Farmer using technology',
    title: 'Farmer-Growth',
    desc: 'Empowering farmers with technology, training, and market access for sustainable growth.',
    navPage: 'farmer',
  },
  {
    img: `${S3_BASE.replace('/extraimages', '/images')}/72991.jpg`,
    alt: 'Organized farm layout',
    title: 'Projects',
    desc: 'Explore premium organic farm plots across Tamil Nadu — reserve your dedicated plot today.',
    navPage: 'projects',
  },
];

export const LAND_CARDS = [
  {
    img: `${S3_BASE.replace('/extraimages', '/images')}/2148776818.jpg`,
    alt: 'Land sale consultation',
    title: 'Sell Land',
    navPage: 'contact',
  },
  {
    img: `${S3_BASE.replace('/extraimages', '/images')}/9355.jpg`,
    alt: 'Cultivated farmland',
    title: 'Lease Land',
    navPage: 'land',
  },
  {
    img: `${S3_BASE.replace('/extraimages', '/images')}/7581.jpg`,
    alt: 'Business partnership on farmland',
    title: 'Partner With Us',
    navPage: 'contact',
  },
];

export const FARMER_CARDS = [
  { img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=128&q=80', alt: 'Organic Seeds', title: 'Organic Seeds', desc: 'Certified non-GMO seed distribution' },
  { img: `${S3_BASE.replace('/extraimages', '/images')}/7581.jpg`, alt: 'Organic Manure', title: 'Organic Manure', desc: 'Natural soil enrichment programs' },
  { img: `${S3_BASE}/Gemini_Generated_Image_gcem5xgcem5xgcem.png`, alt: 'Farm Analytics', title: 'Farm Analytics', desc: 'Data-driven crop management' },
  { img: `${S3_BASE}/Gemini_Generated_Image_2j19m82j19m82j19.png`, alt: 'Drone Agriculture', title: 'Drone Agriculture', desc: 'Aerial monitoring & precision farming' },
  { img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=128&q=80', alt: 'Smart Irrigation', title: 'Smart Irrigation', desc: 'Water-efficient automated systems' },
  { img: `${S3_BASE.replace('/extraimages', '/images')}/14786.jpg`, alt: 'Market Access', title: 'Market Access', desc: 'Direct-to-consumer supply chains' },
];

export const HOW_IT_WORKS_STEPS = [
  'Join CHEDI',
  'Membership',
  'Select Plot',
  'Soil Preparation',
  'Seed Distribution',
  'Cultivation',
  'Monitoring',
  'Harvest',
  'Quality Testing',
  'Delivery',
  'Better Health & Income',
];

export const FEATURED_PROJECTS = [
  { img: `${S3_BASE.replace('/extraimages', '/images')}/72991.jpg`, alt: 'Sivaganga-1', name: 'Sivaganga-1', status: 'available' },
  { img: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&q=80', alt: 'Sivaganga-2', name: 'Sivaganga-2', status: 'soon' },
  { img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80', alt: 'Pudukkottai-1', name: 'Pudukkottai-1', status: 'soon' },
  { img: `${S3_BASE}/Gemini_Generated_Image_18grtb18grtb18gr.png`, alt: 'Pudukkottai-2', name: 'Pudukkottai-2', status: 'soon' },
];

export const WELLNESS_CARDS = [
  { emoji: '❤️', title: 'Heart Health' },
  { emoji: '🧠', title: 'Brain Function' },
  { emoji: '🛡', title: 'Immunity' },
  { emoji: '⚡', title: 'Energy' },
  { emoji: '🌱', title: 'Healthy Aging' },
];

export const WHY_CHEDI_CARDS = [
  { title: 'Sustainable Agriculture', desc: 'Restoring soil health and biodiversity through proven organic farming practices.' },
  { title: 'Farmer Empowerment', desc: 'Technology, training, and fair market access that transforms farmer livelihoods.' },
  { title: 'Healthy Food', desc: 'Lab-tested, chemical-free produce delivered fresh from farm to your family.' },
  { title: 'Long-Term Value Creation', desc: 'Agricultural investments that grow in value while building generational wealth.' },
];
