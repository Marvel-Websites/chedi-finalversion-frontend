import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { ROUTES } from '@/constants/routes';

const Home = lazy(() => import('@/pages/Home'));
const AgriLand = lazy(() => import('@/pages/AgriLand'));
const FarmerGrowth = lazy(() => import('@/pages/FarmerGrowth'));
const Model1 = lazy(() => import('@/pages/Model1'));
const Model2 = lazy(() => import('@/pages/Model2'));
const CSA = lazy(() => import('@/pages/CSA'));
const About = lazy(() => import('@/pages/About'));
const Projects = lazy(() => import('@/pages/Projects'));
const FarmListing = lazy(() => import('@/pages/FarmListing'));
const ProjectDetails = lazy(() => import('@/pages/ProjectDetails'));
const Contact = lazy(() => import('@/pages/Contact'));
const Terms = lazy(() => import('@/pages/Terms'));
const Privacy = lazy(() => import('@/pages/Privacy'));
const AgriLandClassic = lazy(() => import('@/pages/AgriLandClassic'));
const Error404 = lazy(() => import('@/pages/Error404'));

export default function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.LAND} element={<AgriLand />} />
          <Route path={ROUTES.FARMER} element={<FarmerGrowth />} />
          <Route path={ROUTES.MODEL1} element={<Model1 />} />
          <Route path={ROUTES.MODEL2} element={<Model2 />} />
          <Route path={ROUTES.CSA} element={<CSA />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.PROJECTS} element={<Projects />} />
          <Route path={ROUTES.FARM_LISTING} element={<FarmListing />} />
          <Route path={ROUTES.PROJECT_DETAILS} element={<ProjectDetails />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.TERMS} element={<Terms />} />
          <Route path={ROUTES.PRIVACY} element={<Privacy />} />
          <Route path={ROUTES.AGRILAND_CLASSIC} element={<AgriLandClassic />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
