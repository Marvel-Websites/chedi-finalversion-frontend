import { S3_BASE } from './media';

const IMG = S3_BASE.replace('/extraimages', '/images');

export const LAND_PILLS = [
  'Unused land brought into cultivation',
  'Improve soil fertility',
  'Native seed distribution',
  'Increase farmer income',
];

export const SELL_BENEFITS = [
  'Fair and Competitive Pricing',
  'Transparent Documentation Process',
  'Quick Evaluation and Approval',
  'Professional Legal Assistance',
  'Long-Term Agricultural Development',
  'Sustainable Land Utilization',
];

export const LEASE_BENEFITS = [
  'Attractive Lease Returns',
  'Retain Land Ownership',
  'Soil Fertility Improvement',
  'Organic Farming Practices',
  'Professional Farm Management',
  'Long-Term Land Enhancement',
];

export const LEASE_PROCESS = [
  'Land Evaluation',
  'Lease Agreement',
  'Soil Restoration',
  'Organic Cultivation',
  'Harvest & Marketing',
];

export const PARTNERSHIP_STEPS = [
  { title: 'Land Contribution', desc: 'Landowner contributes agricultural land.' },
  { title: 'Land Development', desc: 'We restore soil health and improve productivity.' },
  { title: 'Organic Cultivation', desc: 'Farmers cultivate crops using sustainable methods.' },
  { title: 'Harvest & Sales', desc: 'Produce is marketed through B2B and B2C channels.' },
  { title: 'Revenue Sharing', desc: 'Benefits are shared transparently among stakeholders.' },
];

export const PARTNERSHIP_BENEFITS = [
  'Land Remains Under Productive Use',
  'Shared Revenue Opportunities',
  'Professional Farm Management',
  'Soil Health Improvement',
  'Local Farmer Employment',
  'Long-Term Asset Appreciation',
];

export const INCOME_STREAMS = [
  {
    modifier: 'primary',
    img: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=1200&q=80&auto=format&fit=crop',
    title: 'Agri-Product Sales',
    lead: 'Cultivation and selling of agricultural products through specialized agri buy-and-sell platforms.',
    items: [
      'Direct market access eliminates middlemen',
      'Consistent, stable revenue streams',
      'Premium pricing through quality assurance',
      'Farm-to-market transparency',
    ],
  },
  {
    modifier: 'accent',
    img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80&auto=format&fit=crop',
    title: 'Carbon Credits',
    lead: 'Implementation of sustainable farming practices generates verified carbon credits.',
    items: [
      'Environmental impact monetization',
      'Supports ESG-conscious investors',
      'Contributes to global climate action',
      'Aligns agriculture with environmental responsibility',
    ],
  },
  {
    modifier: 'primary',
    img: `${IMG}/4656.jpg`,
    title: 'Agri-Tourism',
    lead: 'Farm-based experiential tourism activities that connect people with sustainable agriculture.',
    items: [
      'Educational farm visits & workshops',
      'Farmer community engagement programs',
      'Sustainable income diversification',
      'Cultural & agricultural heritage promotion',
      'Farm-stay experiences',
    ],
  },
  {
    modifier: 'solar',
    img: `${IMG}/26.jpg`,
    title: 'Solar Power Generation',
    subLead: 'Agrivoltaics Model',
    lead: 'Dual-use land combining agriculture and renewable energy for maximum efficiency.',
    items: [
      'Solar panels integrated with farming',
      'Revenue from power generation & sale',
      'Reduced carbon footprint',
      'Shade management for specific crops',
    ],
  },
];

export const ADDITIONAL_INCOME = [
  { icon: '📦', text: 'Value-added agricultural products (processing, packaging)' },
  { icon: '🎓', text: 'Farmer training & consulting programs' },
  { icon: '💻', text: 'Agri-tech solutions & software licensing' },
  { icon: '🚜', text: 'Equipment rental services' },
  { icon: '🔗', text: 'Supply chain consulting' },
  { icon: '🌱', text: 'Other emerging opportunities' },
];

export const INCOME_STATS = [
  { num: '5+', label: 'Revenue Streams' },
  { num: '100%', label: 'Sustainable Sources' },
  { num: '3x', label: 'Income Multiplier' },
  { num: '0', label: 'Carbon Debt' },
];

export const SUSTAIN_ICONS = [
  { icon: '🌱', label: 'Soil Protection' },
  { icon: '💧', label: 'Clean Water' },
  { icon: '🦋', label: 'Biodiversity' },
  { icon: '☀️', label: 'Renewable Energy' },
  { icon: '♻️', label: 'Zero Waste' },
];
