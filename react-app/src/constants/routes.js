export const ROUTES = {
  HOME: '/',
  CSA: '/csa',
  LAND: '/agri-land',
  FARMER: '/farmer-growth',
  MODEL1: '/model-1',
  MODEL2: '/model-2',
  ABOUT: '/about',
  PROJECTS: '/projects',
  FARM_LISTING: '/farm-listing/:categoryId',
  PROJECT_DETAILS: '/project-details/:farmId',
  CONTACT: '/contact',
  TERMS: '/terms-and-conditions',
  PRIVACY: '/privacy-policy',
  AGRILAND_CLASSIC: '/agriland-classic',
  SIGN_IN: 'https://webapp.chedi.in/',
};

export const farmListingPath = (categoryId = 'farm-1') => `/farm-listing/${categoryId}`;
export const projectDetailsPath = (farmId = 'farm-1-01') => `/project-details/${farmId}`;

// Maps the original showPage('id') targets to their React Router paths.
export const PAGE_TO_ROUTE = {
  home: ROUTES.HOME,
  csa: ROUTES.CSA,
  land: ROUTES.LAND,
  farmer: ROUTES.FARMER,
  model1: ROUTES.MODEL1,
  model2: ROUTES.MODEL2,
  about: ROUTES.ABOUT,
  projects: ROUTES.PROJECTS,
  'farm-listing': farmListingPath(),
  'project-details': projectDetailsPath(),
  contact: ROUTES.CONTACT,
  terms: ROUTES.TERMS,
  privacy: ROUTES.PRIVACY,
};

export const NAV_LINKS = [
  { label: 'CSA', to: ROUTES.CSA, navPage: 'csa' },
  { label: 'Agri-Land', to: ROUTES.LAND, navPage: 'land' },
  { label: 'Farmer-Growth', to: ROUTES.FARMER, navPage: 'farmer' },
  { label: 'Projects', to: ROUTES.PROJECTS, navPage: 'projects' },
  { label: 'About Us', to: ROUTES.ABOUT, navPage: 'about' },
];
