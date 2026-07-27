import { useNavigate } from 'react-router-dom';
import { FARM_CATEGORIES } from '@/constants/farmData';
import { farmListingPath } from '@/constants/routes';

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div className="page active" id="page-projects">
      <section className="hp-projects" style={{ paddingTop: 140 }}>
        <div className="hp-container" style={{ textAlign: 'center' }}>
          <span className="hp-section-tag">Farm Projects</span>
          <h2 className="hp-heading">Choose Your Organic Farm Plot</h2>
          <p className="hp-sub center">
            Explore premium organic farm plots across Tamil Nadu — select a category to view available farms.
          </p>
          <div className="hp-project-grid">
            {Object.values(FARM_CATEGORIES).map((category) => (
              <div
                key={category.id}
                className="hp-project-card"
                onClick={() => navigate(farmListingPath(category.id))}
                role="button"
                tabIndex={0}
              >
                <div className="hp-project-img">
                  <img src={category.banner} alt={category.name} loading="lazy" />
                  <div className="hp-project-overlay">
                    <button
                      className="hp-btn hp-btn-glass"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(farmListingPath(category.id));
                      }}
                    >
                      View Farms
                    </button>
                  </div>
                </div>
                <div className="hp-project-body">
                  <h3>📍 {category.name}</h3>
                  <p style={{ fontSize: 13, color: 'var(--text-light)', margin: '4px 0 8px' }}>{category.tagline}</p>
                  <div className="hp-project-meta">
                    <span className="hp-badge hp-badge-available">{category.crop}</span>
                    <span>{category.district}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
