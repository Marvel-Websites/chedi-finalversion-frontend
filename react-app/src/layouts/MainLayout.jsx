import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageLoader from '@/components/common/PageLoader';
import ScrollToTop from '@/components/common/ScrollToTop';

export default function MainLayout() {
  const [loaderHidden, setLoaderHidden] = useState(false);
  const [loaderMounted, setLoaderMounted] = useState(true);

  useEffect(() => {
    const hide = () => setLoaderHidden(true);
    const onLoadTimer = setTimeout(hide, 1200);
    const failSafeTimer = setTimeout(hide, 4000);
    window.addEventListener('load', () => setTimeout(hide, 1200));
    return () => {
      clearTimeout(onLoadTimer);
      clearTimeout(failSafeTimer);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('loading', !loaderHidden);
    if (loaderHidden) {
      const unmountTimer = setTimeout(() => setLoaderMounted(false), 600);
      return () => clearTimeout(unmountTimer);
    }
    return undefined;
  }, [loaderHidden]);

  return (
    <div>
      {loaderMounted && <PageLoader hidden={loaderHidden} />}
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
