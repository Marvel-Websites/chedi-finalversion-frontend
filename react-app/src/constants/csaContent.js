import { S3_BASE } from './media';

const IMG = S3_BASE.replace('/extraimages', '/images');

export const CSA_FEATURES = [
  { icon: '🌾', label: 'Non-GMO Seeds' },
  { icon: '💧', label: 'Clean Water' },
  { icon: '🌱', label: 'Pesticide Free' },
  { icon: '🧪', label: 'Lab Certified' },
  { icon: '🚚', label: 'Weekly Delivery' },
  { icon: '🤝', label: 'No Middlemen' },
];

export const CSA_STATS = [
  { icon: '🌾', num: '600 sq ft', label: 'Your Dedicated Plot' },
  { icon: '🧪', num: 'Lab Tested', label: 'Form Products' },
  { icon: '🌱', num: '40+', label: 'Seasonal Varieties' },
  { icon: '🚚', num: '7 Days', label: 'Weekly Once – Soil to Doorstep' },
];

export const TOKEN_CHECKS = [
  'Freshly harvested seasonal vegetables',
  'Naturally grown and 100% chemical free',
  'Filled with purity and freshness',
  'Farm-to-home goodness, every week',
];

export const CSA_PLANS = [
  { name: '4 Members Family', price: '₹120000', per: '/ Year · Ideal for 4 people', plotLine: 'Choose 1 plot of 600 sqft', cta: 'Get Started', featured: false },
  { name: '8 Members Family', price: '₹240000', per: '/ Year · Ideal for 8 people', plotLine: 'Choose 2 plots of 600 sqft', cta: 'Join Harvest Plan', featured: true, badge: 'Most Popular' },
  { name: '12 Members Family', price: '₹380000', per: '/ Year · Ideal for 12 people', plotLine: 'Choose 3 plots of 600 sqft', cta: 'Join Community Plan', featured: false },
];

export const PLAN_INCLUDED = [
  '6-8 Vegetable varieties/Week',
  'Weekly Doorstep Delivery',
  'Farm Progress APP Access',
  'Lab Test Certificate Monthly',
];

export const MEMBERSHIP_PROMISE_POINTS = [
  { icon: '🌱', text: '600 sq ft dedicated plot per family' },
  { icon: '🔬', text: 'Lab-certified, chemical-free every batch' },
  { icon: '📱', text: 'Manage everything through our app' },
];

export const MEMBERSHIP_STEPS_TOP = [
  { img: 'https://d3epw9xjpezjqk.cloudfront.net/photo-1512941937669-90a1b58e7e9c.webp', alt: 'Download App', label: 'MEMBERSHIP', title: 'Be a Member', desc: 'Download the app and pay for membership to join our Farm Club community.' },
  { img: 'https://d3epw9xjpezjqk.cloudfront.net/photo-1450101499163-c8848c66ca85.webp', alt: 'Subscription', label: 'SUBSCRIPTION', title: 'Make Subscription', desc: 'Subscribe to receive a continuous organic vegetable supply from your dedicated plot.' },
  { img: 'https://d3epw9xjpezjqk.cloudfront.net/photo-1560493676-04071c5f467b.webp', alt: 'Choose Plot', label: 'FARM', title: 'Choose a Plot', desc: "Select your preferred 600 sq ft plot for your family's farming needs." },
  { img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80&auto=format&fit=crop', alt: 'Continuous Subscription', label: 'CONTINUOUS', title: 'Continuous Subscription', desc: 'Maintain continuous membership to keep your leased plot farm active year-round.' },
];

export const MEMBERSHIP_STEPS_BOTTOM = [
  { img: `${IMG}/2148579733.webp`, alt: 'Expert Cultivation', label: 'CULTIVATE', title: 'We Cultivate for You', desc: 'Our expert farmers cultivate organic vegetables on your leased plot using natural farming methods.' },
  { img: 'https://d3epw9xjpezjqk.cloudfront.net/photo-1540420773420-3366772f4999.webp', alt: 'Fresh Vegetables', label: 'FRESH VEGETABLES', title: 'Fresh Harvest', desc: 'Enjoy fresh, chemical-free organic vegetables grown naturally on your dedicated leased plot.' },
  { img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&auto=format&fit=crop', alt: 'Delivery', label: 'DELIVERY', title: 'Farm-to-Doorstep Weekly', desc: 'Fresh vegetables delivered directly from your farm to your home every week — maximum freshness guaranteed.' },
];

export const PLOT_BENEFITS = [
  { icon: '🌾', title: 'Fully Managed Farming', desc: "You don't have to do anything. Our expert farmers handle every stage of cultivation for you.", checks: ['Seeds & planting', 'Soil care & nutrition', 'Natural pest control', 'Weeding & upkeep', 'Harvesting at peak ripeness'] },
  { icon: '📐', title: 'Plot Size', desc: "Choose the right plot size that suits your family's weekly nutritional needs perfectly.", checks: ['600 sq ft → farm plot family of 4 members. The vegetables grown on the farm will be supplied to support two additional members of your family.', 'Seasonal & real crop cycles', 'Pre-planted plots ready immediately', 'Natural growing environment', 'Certified organic soil'] },
  { icon: '📱', title: 'App Control Center', desc: 'Manage everything through the app — your complete control center for the entire farming journey.', checks: ['Be a Member', 'Book Your Farm Plot', 'Manage Subscription & Payments', 'Lab-Tested Farm Products', 'Schedule & Manage Delivery'] },
];

export const BASKET_STATS = [
  { num: '8+', label: 'Weekly Staples' },
  { num: '10+', label: 'Seasonal Vegs' },
  { num: '100%', label: 'Chemical Free' },
  { num: '0', label: 'Pesticides' },
];

export const WEEKLY_STAPLES = [
  { img: `${IMG}/5453.webp`, name: 'Onion' },
  { img: `${IMG}/2148799550.webp`, name: 'Ginger' },
  { img: 'https://d3epw9xjpezjqk.cloudfront.net/photo-1607305387299-a3d9611cd469.webp', name: 'Tomato' },
  { img: `${IMG}/771.webp`, name: 'Green Chilli' },
  { img: `${IMG}/65072.webp`, name: 'Coriander' },
  { img: `${IMG}/1519.webp`, name: 'Garlic' },
  { img: `${IMG}/42386.webp`, name: 'Mint' },
  { img: `${IMG}/1869.webp`, name: 'Curry Leaves' },
];

export const SEASONAL_VEGETABLES = [
  { img: `${IMG}/49496.webp`, name: '🍆 Brinjal' },
  { img: `${S3_BASE}/Gemini_Generated_Image_3xrjyb3xrjyb3xrj.webp`, name: "🌿 Lady's Fingers" },
  { img: 'https://d3epw9xjpezjqk.cloudfront.net/photo-1598170845058-32b9d6a5da37.webp', name: 'Carrot' },
  { img: `${IMG}/72924.webp`, name: 'Beetroot' },
  { img: `${IMG}/2104.webp`, name: 'Cabbage' },
  { img: `${IMG}/66303.webp`, name: 'Cauliflower' },
  { img: 'https://d3epw9xjpezjqk.cloudfront.net/photo-1563565375-f3fdfdbefa83.webp', name: 'Capsicum' },
  { img: `${IMG}/35354.webp`, name: 'Bitter Gourd' },
];

export const DELIVERY_FLOAT_IMAGES = [
  { img: `${S3_BASE}/chediimages1.webp`, alt: 'Fresh harvest basket' },
  { img: `${S3_BASE}/chediimages3.webp`, alt: 'Eco-friendly packaging' },
  { img: `${S3_BASE}/delivery-man-wearing-face-mask-holding-box-with-vegetables.webp`, alt: 'Delivery transportation' },
];

export const DELIVERY_FEATURES = [
  { icon: '🌱', title: 'Harvested Fresh Daily', desc: 'Vegetables are carefully harvested at peak ripeness and delivered within 24 hours of harvest for maximum freshness and nutrients.' },
  { icon: '♻️', title: 'Safe Eco Packaging', desc: 'All deliveries use recyclable kraft paper and eco-friendly packaging materials. No plastics, just nature-friendly solutions.' },
  { icon: '🚚', title: 'Direct Home Delivery', desc: 'Reliable weekly delivery to your doorstep with real-time tracking and flexible scheduling options for your convenience.' },
];

export const FEE_INCLUDES = [
  'Complimentary seasonal vegetable sample box',
  'Experience quality firsthand before subscribing',
  'Full app access — browse subscriptions, track deliveries',
  'Plot leasing access and payment management',
  'Farm Club membership card',
];

export const APP_STEPS = [
  { title: 'Membership & Setup', desc: 'Create your Farm Club membership account and set up your profile in the app.' },
  { title: 'Choose Your Soil', desc: 'Browse and lease available soil plots, choose your subscription period.' },
  { title: 'Guided Confirmation', desc: 'Review and confirm your subscription details with complete transparency.' },
  { title: 'Expert Cultivation Begins', desc: 'Experienced farmers begin cultivation on your leased plot using natural methods.' },
  { title: 'Weekly Fresh Harvest', desc: 'Enjoy harvests planned and scheduled for weekly delivery straight to your doorstep.' },
  { title: 'Seasonal Flexibility', desc: 'Subscription periods are adjusted for climatic impacts — you always receive full value.' },
];

export const COMING_SOON = [
  { img: 'https://d3epw9xjpezjqk.cloudfront.net/photo-1619566636858-adf3ef46400b.webp', title: '🍎 Fruits' },
  { img: `${S3_BASE}/chediimages12.webp`, title: '🛒 Groceries' },
];

export const OUR_STORY_FEATURES = [
  { icon: '🌍', title: 'Living Fertile Soil', desc: 'We build soil health over years using natural compost and microbial communities — never synthetic inputs.' },
  { icon: '💧', title: 'Pure Clean Water', desc: 'Irrigation from tested groundwater springs, free from agricultural contamination.' },
  { icon: '🌱', title: 'Native Non-GMO Seeds', desc: 'Traditional Indian varieties selected for climate resilience and nutritional density.' },
  { icon: '🔬', title: 'Lab-Certified Every Batch', desc: 'Every harvest tested for 200+ pesticide residues, heavy metals, and microbial safety.' },
];

export const SUSTAINABILITY_STATS = [
  { num: '0', label: 'Synthetic Chemicals Used' },
  { num: '100%', label: 'Natural Pest Management' },
];

export const SUSTAINABILITY_FEATURES = [
  { title: 'Carbon Neutral Farming', text: 'Our sustainable practices actively reduce carbon footprint while building soil that sequesters carbon naturally.' },
  { title: 'Biodiversity Preservation', text: 'We actively protect beneficial insects, pollinators, and wildlife. Our farms are ecosystems, not just crop factories.' },
  { title: 'Water Conservation', text: 'Intelligent irrigation and natural soil retention reduce water waste while maintaining crop health and soil vitality.' },
  { title: 'Soil Regeneration', text: "Each season, our soil gets healthier and more fertile. We're not depleting — we're regenerating." },
];

export const HEALTH_BENEFITS = [
  { img: `${S3_BASE}/chediimages7.webp`, alt: 'Healthy organic soil with sprouting plants', title: 'Soil Health', desc: 'Living organic soil is rich with microorganisms and nutrients. We build soil fertility naturally, creating the perfect foundation for nutritious crops.', points: ['Increased organic matter', 'Rich microbial communities', 'Natural nutrient cycling'] },
  { img: `${S3_BASE}/Gemini_Generated_Image_xbze7vxbze7vxbze.webp`, alt: 'Clean pure water in organic farming', title: 'Water Quality', desc: 'Crystal-clear, chemical-free irrigation from tested groundwater springs. No pesticide or fertilizer runoff — just pure, clean water.', points: ['Zero chemical contamination', 'Tested groundwater sources', 'Protected water ecosystems'] },
  { img: `${S3_BASE}/chediimages11.webp`, alt: 'Natural organic seeds close-up', title: 'Seed Quality', desc: 'We use traditional, non-GMO organic seeds that have been grown for generations. These seeds carry the wisdom of nature.', points: ['Traditional heritage varieties', 'Non-GMO natural seeds', 'Genetic diversity preserved'] },
  { img: `${S3_BASE}/Gemini_Generated_Image_kh3qsqkh3qsqkh3q.webp`, alt: 'Organic compost and natural fertilizer', title: 'Natural Fertilizer', desc: 'Only organic compost and natural manure. No synthetic chemicals that leave harmful residues in the soil or food.', points: ['100% organic compost', 'Natural animal manure', 'No synthetic chemicals'] },
  { img: `${S3_BASE}/Screenshot+2026-06-06+6.52.27+PM.png`, alt: 'Healthy green leaves with natural pest control', title: 'Natural Pest Control', desc: 'Beneficial insects, companion planting, and natural herbal solutions keep pests away without harmful chemicals.', points: ['Beneficial insect ecosystems', 'Herbal pest solutions', 'Chemical-free crops'] },
  { img: `${S3_BASE}/chediimages4.webp`, alt: 'Healthy family with fresh organic vegetables', title: 'Maximum Nutrition', desc: 'Higher mineral content, stronger immune support, and authentic flavor. Organic produce is genuinely more nutritious.', points: ['Higher vitamin content', 'Rich mineral density', 'Superior taste & freshness'] },
];
