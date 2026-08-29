import { S3_BASE } from './media';

const IMG = S3_BASE.replace('/extraimages', '/images');

export const MODEL1 = {
  id: 'model1',
  badge: 'MODEL 1',
  bgClass: 'model-1-bg',
  heroImg: `${IMG}/2151969837+(1).webp`,
  heroAlt: 'Shared farming',
  titleLine1: 'Supported Farming',
  titleLine2Prefix: 'with',
  titleHighlight: 'Shared Income',
  heroDesc:
    'We provide everything you need. You focus on farming. Together we grow — and share the outcome fairly.',
  secondaryCta: 'Learn How It Works',
  stepsLabel: 'HOW IT WORKS',
  steps: [
    'We provide land with strong, healthy soil',
    'We provide seeds, tools, and farming apps',
    'We guide you throughout the crop cycle',
    'You manage daily farm work',
    'We help sell the final produce',
    'Final income is shared fairly & transparently',
  ],
  stripImages: [
    { src: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&q=80&auto=format&fit=crop', alt: 'Farming' },
    { src: `${IMG}/4648.webp`, alt: 'Farmers' },
    { src: `${IMG}/african-people-harvesting-vegetables.webp`, alt: 'Harvest' },
  ],
  benefits: [
    { icon: '🛡️', title: 'Zero Investment Risk', desc: 'Get started with support systems designed to reduce early farming burden.' },
    { icon: '🏷️', title: 'Guaranteed Buyback', desc: 'A structured pathway to market access after every harvest.' },
    { icon: '👨‍🏫', title: 'Expert Support', desc: 'Guidance from farming professionals through every stage of the cycle.' },
    { icon: '💰', title: 'Fair Shared Income', desc: 'Transparent income calculation with no hidden costs or deductions.' },
  ],
  bestFor: ['New Farmers', 'Farmers Needing Support', 'Small-Scale Farmers'],
  ctaImg: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&q=80&auto=format&fit=crop',
  ctaAlt: 'Farming',
  ctaTitle: 'Ready to Grow with Model 1?',
  ctaSub: 'Join a farming system built on support, fairness, and shared growth.',
};

export const MODEL2 = {
  id: 'model2',
  badge: 'MODEL 2',
  bgClass: 'model-2-bg',
  heroImg: `${S3_BASE}/7120.webp`,
  heroAlt: 'Independent farming',
  titleLine1: 'Independent Farming',
  titleLine2Prefix: 'with',
  titleHighlight: 'Full Control',
  heroDesc:
    'You invest in your farm. You make the decisions. We provide expert guidance and assured buyback to help you grow better.',
  secondaryCta: 'See How It Works',
  stepsLabel: 'YOUR JOURNEY',
  steps: [
    'You invest in your farming operations',
    'You manage cultivation on your land',
    'We provide expert training & guidance',
    'You harvest and sell at market price',
    'Assured buyback ensures market access',
  ],
  stripImages: [
    { src: `${IMG}/2151450427.webp`, alt: 'Farmer' },
    { src: `${IMG}/land-morning.webp`, alt: 'Crops' },
    { src: 'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?w=1200&q=80&auto=format&fit=crop', alt: 'Harvest' },
  ],
  benefits: [
    { icon: '🎯', title: 'Full Control', desc: 'You make every farming and business decision yourself with complete independence.' },
    { icon: '🏪', title: 'Market Freedom', desc: 'Sell where you want, when you want, at the best available market rate.' },
    { icon: '👨‍🏫', title: 'Expert Support', desc: 'Get guidance from experienced farming professionals whenever you need it.' },
    { icon: '📈', title: 'Better Earnings', desc: 'Market-based earnings with assured buyback for security and confidence.' },
  ],
  bestFor: ['Experienced Farmers', 'Self-Funded Farmers', 'Farmers Wanting Independence'],
  ctaImg: 'https://d3epw9xjpezjqk.cloudfront.net/photo-1625246333195-78d9c38ad449.webp',
  ctaAlt: 'Independent farming',
  ctaTitle: 'Take Control of Your Farming Future',
  ctaSub: 'Farm independently with expert support by your side.',
};
