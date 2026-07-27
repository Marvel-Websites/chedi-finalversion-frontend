import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NAV_LINKS, ROUTES } from '@/constants/routes';
import useHeaderShadow from '@/hooks/useHeaderShadow';
import { CHEDI_LOGO } from '@/constants/media';

const NAV_PAGE_BY_PATH = {
  [ROUTES.CSA]: 'csa',
  [ROUTES.LAND]: 'land',
  [ROUTES.FARMER]: 'farmer',
  [ROUTES.PROJECTS]: 'projects',
  [ROUTES.FARM_LISTING]: 'projects',
  [ROUTES.PROJECT_DETAILS]: 'projects',
  [ROUTES.ABOUT]: 'about',
  [ROUTES.CONTACT]: 'contact',
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const scrolled = useHeaderShadow(20);
  const activeNavPage = NAV_PAGE_BY_PATH[location.pathname] ?? null;

  const closeMobileNav = useCallback(() => setMobileOpen(false), []);

  const [prevPathname, setPrevPathname] = useState(location.pathname);
  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname);
    if (mobileOpen) setMobileOpen(false);
  }

  useEffect(() => {
    document.body.classList.toggle('mobile-nav-open', mobileOpen);
  }, [mobileOpen]);

  const go = (to) => {
    navigate(to);
    closeMobileNav();
  };

  return (
    <>
      <header id="main-header" style={{ boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,.35)' : 'none' }}>
        <div className="header-inner">
          <a className="logo" onClick={() => go(ROUTES.HOME)} role="button" tabIndex={0}>
            <img className="logo-img" src={CHEDI_LOGO} alt="Chedi The Organic Farm" />
          </a>
          <nav>
            {NAV_LINKS.map((link) => (
              <span
                key={link.to}
                className={`nav-link${activeNavPage === link.navPage ? ' active' : ''}`}
                data-nav-page={link.navPage}
                onClick={() => go(link.to)}
                role="button"
                tabIndex={0}
              >
                {link.label}
              </span>
            ))}
            <span
              className={`nav-link nav-cta btn${activeNavPage === 'contact' ? ' active' : ''}`}
              data-nav-page="contact"
              onClick={() => go(ROUTES.CONTACT)}
              role="button"
              tabIndex={0}
            >
              Contact Us
            </span>
            <span className="nav-link nav-cta nav-cta-signin btn" role="button" tabIndex={0}>
              Sign In
            </span>
          </nav>
          <button
            className={`nav-hamburger${mobileOpen ? ' active' : ''}`}
            id="hamburgerBtn"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobileNavDrawer"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={`mobile-nav-overlay${mobileOpen ? ' open' : ''}`}
        aria-hidden="true"
        onClick={closeMobileNav}
      />
      <nav className={`mobile-nav-drawer${mobileOpen ? ' open' : ''}`} id="mobileNavDrawer" aria-label="Mobile navigation">
        <ul className="mobile-nav-list">
          {NAV_LINKS.map((link) => (
            <li className="mobile-nav-item" key={link.to}>
              <span
                className={`mobile-nav-link${activeNavPage === link.navPage ? ' active' : ''}`}
                data-nav-page={link.navPage}
                onClick={() => go(link.to)}
                role="button"
                tabIndex={0}
              >
                {link.label}
              </span>
            </li>
          ))}
          <li className="mobile-nav-item">
            <span
              className={`mobile-nav-link nav-cta btn${activeNavPage === 'contact' ? ' active' : ''}`}
              data-nav-page="contact"
              onClick={() => go(ROUTES.CONTACT)}
              role="button"
              tabIndex={0}
            >
              Contact Us
            </span>
          </li>
          <li className="mobile-nav-item">
            <span
              className="mobile-nav-link nav-cta nav-cta-signin btn"
              role="button"
              tabIndex={0}
              onClick={closeMobileNav}
            >
              Sign In
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
}
