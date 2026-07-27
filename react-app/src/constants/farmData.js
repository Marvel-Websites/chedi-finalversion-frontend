export const FARM_CATEGORIES = {
  'farm-1': {
    id: 'farm-1',
    name: 'Farm 1',
    crop: 'Mullai',
    village: 'Periyakulam',
    district: 'Theni',
    tagline: 'Fresh crops. Direct from farm to your table.',
    banner: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1400&q=85',
    bannerLabel: 'Community Supported Agriculture',
  },
  'farm-2': {
    id: 'farm-2',
    name: 'Farm 2',
    crop: 'Kurinji',
    village: 'Kodaikanal',
    district: 'Dindigul',
    tagline: 'Hill-grown produce from the Western Ghats.',
    banner: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1400&q=85',
    bannerLabel: 'Kurinji Hill Farms',
  },
  'farm-3': {
    id: 'farm-3',
    name: 'Farm 3',
    crop: 'Neithal',
    village: 'Mudukulathur',
    district: 'Ramanathapuram',
    tagline: 'Coastal farms rooted in Tamil tradition.',
    banner: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1400&q=85',
    bannerLabel: 'Neithal Coastal Agriculture',
  },
  'farm-4': {
    id: 'farm-4',
    name: 'Farm 4',
    crop: 'Marudam',
    village: 'Natham',
    district: 'Dindigul',
    tagline: 'Fertile plains cultivated for generations.',
    banner: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1400&q=85',
    bannerLabel: 'Marudam Plains Farming',
  },
};

const LISTING_TEMPLATES = {
  'farm-1': [
    { name: 'Mullai Meadow Farm', village: 'Periyakulam', district: 'Theni', image: 'https://chediwebsite.s3.us-east-1.amazonaws.com/images/72991.jpg', available: true },
    { name: 'Periyakulam Greens', village: 'Bodi', district: 'Theni', image: 'https://chediwebsite.s3.us-east-1.amazonaws.com/extraimages/Gemini_Generated_Image_1kwlgf1kwlgf1kwl.png' },
    { name: 'Theni Valley Harvest', village: 'Theni', district: 'Theni', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80' },
    { name: 'Marutha Nadu Farm', village: 'Uthamapalayam', district: 'Theni', image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=600&q=80' },
    { name: 'Vaigai River Fields', village: 'Cumbum', district: 'Theni', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80' },
    { name: 'Silver Hills Organic', village: 'Chinnamanur', district: 'Theni', image: 'https://chediwebsite.s3.us-east-1.amazonaws.com/extraimages/Gemini_Generated_Image_gcem5xgcem5xgcem.png' },
    { name: 'Chinnamanur Greens', village: 'Chinnamanur', district: 'Theni', image: 'https://chediwebsite.s3.us-east-1.amazonaws.com/extraimages/1356.jpg' },
    { name: 'Bodinayakanur Fields', village: 'Bodinayakanur', district: 'Theni', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80' },
    { name: 'Uthamapalayam Farm', village: 'Uthamapalayam', district: 'Theni', image: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=600&q=80' },
    { name: 'Cumbum Valley Plot', village: 'Cumbum', district: 'Theni', image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=600&q=80' },
  ],
  'farm-2': [
    { name: 'Kurinji Heights Farm', village: 'Kodaikanal', district: 'Dindigul', image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&q=80' },
    { name: 'Kodaikanal Bloom Fields', village: 'Kodaikanal', district: 'Dindigul', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80' },
    { name: 'Palani Hills Greens', village: 'Palani', district: 'Dindigul', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80' },
    { name: 'Mannavanur Meadows', village: 'Mannavanur', district: 'Dindigul', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80' },
    { name: 'Poombarai Valley Farm', village: 'Poombarai', district: 'Dindigul', image: 'https://chediwebsite.s3.us-east-1.amazonaws.com/extraimages/2148248872.jpg' },
    { name: 'Berijam Lake Fields', village: 'Berijam', district: 'Dindigul', image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&q=80' },
    { name: 'Vattakanal Organic', village: 'Vattakanal', district: 'Dindigul', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80' },
    { name: 'Guna Caves Plot', village: 'Poombarai', district: 'Dindigul', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80' },
    { name: 'Shenbaganur Hills Farm', village: 'Shenbaganur', district: 'Dindigul', image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80' },
    { name: "Dolphin's Nose Fields", village: 'Kodaikanal', district: 'Dindigul', image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&q=80' },
  ],
  'farm-3': [
    { name: 'Neithal Coastal Farm', village: 'Mudukulathur', district: 'Ramanathapuram', image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80' },
    { name: 'Mandapam Shore Fields', village: 'Mandapam', district: 'Ramanathapuram', image: 'https://chediwebsite.s3.us-east-1.amazonaws.com/extraimages/Gemini_Generated_Image_2j19m82j19m82j19.png' },
    { name: 'Rameswaram Greens', village: 'Rameswaram', district: 'Ramanathapuram', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80' },
    { name: 'Mudukulathur Organic', village: 'Mudukulathur', district: 'Ramanathapuram', image: 'https://chediwebsite.s3.us-east-1.amazonaws.com/extraimages/Gemini_Generated_Image_9337ai9337ai9337.png' },
    { name: 'Devipattinam Farm', village: 'Devipattinam', district: 'Ramanathapuram', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80' },
    { name: 'Thondi Coastal Plot', village: 'Thondi', district: 'Ramanathapuram', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80' },
    { name: 'Kilakarai Fields', village: 'Kilakarai', district: 'Ramanathapuram', image: 'https://chediwebsite.s3.us-east-1.amazonaws.com/extraimages/Gemini_Generated_Image_dlpxzpdlpxzpdlpx.png' },
    { name: 'Pamban Island Farm', village: 'Pamban', district: 'Ramanathapuram', image: 'https://chediwebsite.s3.us-east-1.amazonaws.com/extraimages/Gemini_Generated_Image_te2c66te2c66te2c.png' },
    { name: 'Karaikudi Neithal', village: 'Karaikudi', district: 'Sivaganga', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80' },
    { name: 'Chidambaram Coastal', village: 'Chidambaram', district: 'Cuddalore', image: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=600&q=80' },
  ],
  'farm-4': [
    { name: 'Marudam Plains Farm', village: 'Natham', district: 'Dindigul', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80' },
    { name: 'Natham Valley Fields', village: 'Natham', district: 'Dindigul', image: 'https://chediwebsite.s3.us-east-1.amazonaws.com/extraimages/Gemini_Generated_Image_s691d0s691d0s691.png' },
    { name: 'Athoor Organic Plot', village: 'Athoor', district: 'Dindigul', image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=600&q=80' },
    { name: 'Oddanchatram Greens', village: 'Oddanchatram', district: 'Dindigul', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80' },
    { name: 'Vedasandur Farm', village: 'Vedasandur', district: 'Dindigul', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80' },
    { name: 'Sirumalai Hills Fields', village: 'Sirumalai', district: 'Dindigul', image: 'https://chediwebsite.s3.us-east-1.amazonaws.com/extraimages/Gemini_Generated_Image_lyfkk9lyfkk9lyfk.png' },
    { name: 'Kodaikanal Road Farm', village: 'Batlagundu', district: 'Dindigul', image: 'https://chediwebsite.s3.us-east-1.amazonaws.com/extraimages/Gemini_Generated_Image_2j19m82j19m82j19.png' },
    { name: 'Reddiarchatram Plot', village: 'Reddiarchatram', district: 'Dindigul', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80' },
    { name: 'Sembatti Meadows', village: 'Sembatti', district: 'Dindigul', image: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=600&q=80' },
    { name: 'Thadikombu Valley Farm', village: 'Thadikombu', district: 'Dindigul', image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=600&q=80' },
  ],
};

const DEFAULT_FARM_LOCATION = { village: 'Panavayal', district: 'Sivaganga', state: 'Tamil Nadu' };

const PLOT_STATS = [
  { total: 70, booked: 11, available: 59 },
  { total: 40, booked: 28, available: 12 },
  { total: 60, booked: 41, available: 19 },
  { total: 45, booked: 30, available: 15 },
  { total: 55, booked: 38, available: 17 },
  { total: 35, booked: 22, available: 13 },
  { total: 48, booked: 31, available: 17 },
  { total: 42, booked: 27, available: 15 },
  { total: 52, booked: 35, available: 17 },
  { total: 38, booked: 24, available: 14 },
];

function buildFarmProjects() {
  const projects = {};
  Object.keys(LISTING_TEMPLATES).forEach((categoryId) => {
    const category = FARM_CATEGORIES[categoryId];
    const templates = LISTING_TEMPLATES[categoryId];

    templates.forEach((tpl, index) => {
      const id = `${categoryId}-${String(index + 1).padStart(2, '0')}`;
      const stats = PLOT_STATS[index];
      const isAvailable = tpl.available === true || (tpl.available !== false && index === 0);

      projects[id] = {
        id,
        categoryId,
        name: tpl.name,
        crop: category.crop,
        village: DEFAULT_FARM_LOCATION.village,
        district: DEFAULT_FARM_LOCATION.district,
        state: DEFAULT_FARM_LOCATION.state,
        status: isAvailable ? 'Available' : 'Coming Soon',
        available: isAvailable,
        image: tpl.image,
        totalPlots: stats.total,
        bookedPlots: stats.booked,
        availablePlots: stats.available,
        plotArea: 600,
        annualReturnPerPlot: 120000,
      };
    });
  });
  return projects;
}

export const FARM_PROJECTS = buildFarmProjects();

export const PLOT_PLANS = [
  { plots: 1, label: '1 Plot' },
  { plots: 2, label: '2 Plots' },
  { plots: 3, label: '3 Plots' },
];

export function formatINR(amount) {
  return `₹${amount.toLocaleString('en-IN')}`;
}

export function formatPlotCountText(plotCount, areaEach) {
  if (plotCount === 1) return `1 plot of ${areaEach} sq ft`;
  return `${plotCount} plots of ${areaEach} sq ft each`;
}

export function getPlanDetails(farm, plotCount) {
  return {
    plots: plotCount,
    label: `${plotCount} ${plotCount === 1 ? 'Plot' : 'Plots'}`,
    areaEach: farm.plotArea,
    totalArea: farm.plotArea * plotCount,
    annualReturn: farm.annualReturnPerPlot * plotCount,
  };
}

export function validateMobile(value) {
  return /^[6-9]\d{9}$/.test(value.replace(/\s/g, ''));
}

export function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function validatePin(value) {
  return /^\d{6}$/.test(value);
}

export function getFarmsByCategory(categoryId) {
  return Object.values(FARM_PROJECTS).filter((f) => f.categoryId === categoryId);
}
