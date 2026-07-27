import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { CHEDI_LOGO } from '@/constants/media';

const COMPANY_LINKS = [
  { label: 'About Us', to: ROUTES.ABOUT },
  { label: 'Agri-Land', to: ROUTES.LAND },
  { label: 'Farmer-Growth', to: ROUTES.FARMER },
  { label: 'CSA', to: ROUTES.CSA },
  { label: 'Projects', to: ROUTES.PROJECTS },
  { label: 'Contact Us', to: ROUTES.CONTACT },
];

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <a
              className="logo footer-logo"
              onClick={() => navigate(ROUTES.HOME)}
              style={{ gap: 0, display: 'inline-block' }}
              role="button"
              tabIndex={0}
            >
              <img src={CHEDI_LOGO} alt="Chedi The Organic Farm" />
            </a>
            <p>Rebuilding agriculture through sustainable ecosystems.</p>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            {COMPANY_LINKS.map((link) => (
              <a key={link.to} onClick={() => navigate(link.to)} role="button" tabIndex={0}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="footer-col footer-contact">
            <h4>Contact</h4>
            <p>📧 support@chedi.in</p>
            <p>📞 +91 94441 26240</p>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <div className="social-icon">𝕏</div>
              <div className="social-icon">in</div>
              <div className="social-icon">f</div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} CHEDI – The Organic Farm.</p>
          <div className="footer-legal-links">
            <a href={ROUTES.TERMS} className="footer-legal-link" onClick={(e) => { e.preventDefault(); navigate(ROUTES.TERMS); }}>
              Terms &amp; Conditions
            </a>
            <span className="footer-legal-sep">|</span>
            <a href={ROUTES.PRIVACY} className="footer-legal-link" onClick={(e) => { e.preventDefault(); navigate(ROUTES.PRIVACY); }}>
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
