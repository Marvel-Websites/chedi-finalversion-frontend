import { S3_BASE } from './media';

export const LNG_PILLS = [
  { title: 'Age Reversal', sub: 'Stay Young, Stay Vital' },
  { title: 'Everlasting Health', sub: 'Wellness for Life' },
  { title: 'Strong Immunity', sub: 'Protect & Strengthen' },
  { title: 'Healthy Living', sub: 'Balanced Lifestyle' },
  { title: 'Exploding Energy', sub: 'Power • Stamina • Vitality' },
];

export const LNG_HERO_IMAGES = [
  { img: 'https://d3epw9xjpezjqk.cloudfront.net/photo-1544367567-0f2fcb009e0b.webp', alt: 'Longevity lifestyle', label: 'Age Reversal' },
  { img: 'https://d3epw9xjpezjqk.cloudfront.net/photo-1512621776951-a57141f2eefd.webp', alt: 'Healthy nutrition', label: 'True Wellness' },
  { img: `${S3_BASE}/Gemini_Generated_Image_owdqymowdqymowdq.webp`, alt: 'Strong immunity', label: 'Strong Immunity' },
];

export const LNG_CARE_CARDS = [
  { img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80&auto=format&fit=crop', alt: 'Individuals', name: 'Individuals', desc: 'Personal health journeys, tailored wellness paths' },
  { img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=700&q=80&auto=format&fit=crop', alt: 'Parents', name: 'Parents', desc: 'Strength to guide and nourish the whole family' },
  { img: `${S3_BASE.replace('/extraimages', '/images')}/2884.webp`, alt: 'Families', name: 'Families', desc: 'Together healthier, stronger, and more vibrant' },
  { img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=700&q=80&auto=format&fit=crop', alt: 'Children', name: 'Children', desc: 'Foundations for lifelong growth and immunity' },
  { img: `${S3_BASE.replace('/extraimages', '/images')}/2147997420.webp`, alt: 'Next Generation', name: 'Next Generation', desc: 'A healthier world for those who come after us' },
];

export const LNG_HOLISTIC_CARDS = [
  { img: `${S3_BASE.replace('/extraimages', '/images')}/2148254589.webp`, alt: 'Mind Wellness', title: 'Mind Wellness', sub: 'Emotional Balance & Clarity' },
  { img: 'https://d3epw9xjpezjqk.cloudfront.net/photo-1534438327276-14e5300c3a48.webp', alt: 'Physical Fitness', title: 'Physical Fitness', sub: 'Strength & Endurance' },
  { img: 'https://d3epw9xjpezjqk.cloudfront.net/photo-1512621776951-a57141f2eefd.webp', alt: 'Nutrition', title: 'Nutrition', sub: 'Foundation of True Wellness' },
  { img: 'https://d3epw9xjpezjqk.cloudfront.net/photo-1584308666744-24d5c474f2ae.webp', alt: 'Vitamins & Supplements', title: 'Vitamins & Supplements', sub: 'Essential Nutrients' },
];

export const LNG_PILLARS = [
  { modifier: 'lifestyle', img: 'https://d3epw9xjpezjqk.cloudfront.net/photo-1521737711867-e3b97375f902.webp', alt: 'Modern Lifestyle', title: 'Modern Lifestyle', items: ['Processed Food', 'Low Nutrients', 'Early Aging', 'Weak Immunity', 'Diseases'] },
  { modifier: 'affects', img: 'https://d3epw9xjpezjqk.cloudfront.net/photo-1498579150354-977475b7ea0b.webp', alt: 'Nutrition Affects', title: 'Nutrition Affects', items: ['Cells', 'Gut Health', 'Brain Function', 'Energy Levels', 'Aging Speed'] },
  { modifier: 'solution', img: 'https://d3epw9xjpezjqk.cloudfront.net/photo-1488459716781-31db52582fe9.webp', alt: 'Solution', title: 'Solution', items: ['Whole Foods', 'Balanced Diet', 'Metabolic Balance', 'Performance Support'] },
];

export const LNG_IMPACT_STAGES = [
  { img: `${S3_BASE}/Gemini_Generated_Image_47f3kq47f3kq47f3.webp`, alt: 'Children', label: 'Stage 01', name: 'Children', items: ['Brain Development', 'Immunity Boost', 'Healthy Growth'] },
  { img: 'https://d3epw9xjpezjqk.cloudfront.net/photo-1571019614242-c5c5dee9f50b.webp', alt: 'Adults', label: 'Stage 02', name: 'Adults', items: ['Peak Energy', 'Stress Balance', 'Metabolic Health'] },
  { img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=700&q=80&auto=format&fit=crop', alt: 'Parents', label: 'Stage 03', name: 'Parents', items: ['Muscle Preservation', 'Cognitive Support', 'Healthy Aging'] },
];

export const LNG_TIERS = [
  {
    badge: 't1',
    label: 'Tier 1',
    title: 'Survival & Core Health (Top Priority)',
    gridSize: 'four',
    conditions: [
      { img: `${S3_BASE}/Gemini_Generated_Image_5p77ij5p77ij5p77.webp`, alt: 'Heart Health', num: 1, title: 'Heart Health Issues', deficiency: 'Poor lipid balance', need: 'Omega-3, Antioxidants', eat: 'Fish, Flax seeds, Garlic' },
      { img: `${S3_BASE}/Gemini_Generated_Image_4ffqbm4ffqbm4ffq.webp`, alt: 'Blood Sugar', num: 2, title: 'Blood Sugar Imbalance', deficiency: 'Poor insulin sensitivity', need: 'Fiber, Inulin', eat: 'Fenugreek, Millets, Greens' },
      { img: 'https://d3epw9xjpezjqk.cloudfront.net/photo-1540420773420-3366772f4999.webp', alt: 'Thyroid', num: 3, title: 'Thyroid Imbalance', deficiency: 'Low iodine / selenium', need: 'Iodine, Selenium', eat: 'Spinach, Nuts, Seeds' },
      { img: `${S3_BASE}/Gemini_Generated_Image_te2c66te2c66te2c.webp`, alt: 'Immunity', num: 4, title: 'Weak Immunity / Stress', deficiency: 'Low immunity, high stress', need: 'Vitamin C, Zinc', eat: 'Amla, Tulsi, Citrus fruits' },
    ],
  },
  {
    badge: 't2',
    label: 'Tier 2',
    title: 'Brain, Energy & Hormones',
    gridSize: 'three',
    conditions: [
      { img: `${S3_BASE}/2151975634.webp`, alt: 'Brain Fog', num: 5, title: 'Brain Fog / Low Focus', deficiency: 'Poor brain nutrition', need: 'Antioxidants, Adaptogens', eat: 'Brahmi, Ginseng, Nuts' },
      { img: `${S3_BASE}/Gemini_Generated_Image_3znfjt3znfjt3znf.webp`, alt: 'Low Energy', num: 6, title: 'Low Energy / Fatigue', deficiency: 'Poor nutrient density', need: 'Iron, Vitamins', eat: 'Moringa, Greens, Dates' },
      { img: `${S3_BASE}/40261.webp`, alt: 'Hormonal', num: 7, title: 'Hormonal Imbalance (PCOS)', deficiency: 'Hormonal imbalance', need: 'Hormone-balancing nutrients', eat: 'Flax seeds, Spearmint' },
    ],
  },
  {
    badge: 't4',
    label: 'Tier 3',
    title: 'Appearance',
    gridSize: 'four',
    conditions: [
      { img: `${S3_BASE}/Gemini_Generated_Image_n7pxrxn7pxrxn7px.webp`, alt: 'Hair Loss', num: 8, title: 'Hair Loss', deficiency: 'Nutrient gaps (zinc, fats)', need: 'Healthy fats, Minerals', eat: 'Pumpkin seeds, Nuts' },
      { img: `${S3_BASE}/Gemini_Generated_Image_uxexjsuxexjsuxex.webp`, alt: 'Hair Fall', num: 9, title: 'Hair Fall / Weak Roots', deficiency: 'Poor scalp nutrition', need: 'Omega fats, Fiber', eat: 'Flax seeds, Walnuts' },
      { img: `${S3_BASE}/Gemini_Generated_Image_6lalub6lalub6lal.webp`, alt: 'Gray Hair', num: 10, title: 'Premature Gray Hair', deficiency: 'Low micronutrients', need: 'Copper, Antioxidants', eat: 'Sesame seeds, Amla' },
      { img: 'https://d3epw9xjpezjqk.cloudfront.net/photo-1607305387299-a3d9611cd469.webp', alt: 'Skin Health', num: 11, title: 'Skin Health', deficiency: 'Low collagen / dull skin', need: 'Protein, Amino acids', eat: 'Paneer, Curd, Dal, Nuts' },
    ],
  },
];
