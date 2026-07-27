import { useNavigate, useParams } from 'react-router-dom';
import { FARM_CATEGORIES, getFarmsByCategory } from '@/constants/farmData';
import { ROUTES, projectDetailsPath } from '@/constants/routes';

export default function FarmListing() {
  const { categoryId: rawCategoryId } = useParams();
  const navigate = useNavigate();

  const categoryId = FARM_CATEGORIES[rawCategoryId] ? rawCategoryId : 'farm-1';
  const category = FARM_CATEGORIES[categoryId];
  const farms = getFarmsByCategory(categoryId);

  return (
    <div className="page active" id="page-farm-listing">
      <button
        type="button"
        className="fl-back"
        id="fl-back-btn"
        aria-label="Back to Projects"
        onClick={() => navigate(ROUTES.PROJECTS)}
      >
        ← Back to Projects
      </button>
      <section className="fl-section">
        <div className="fl-section-header">
          <div className="fl-section-header-text">
            <div className="fl-section-tag">{category.name} · CSA</div>
            <h2 className="fl-section-title">{category.name} Farms</h2>
            <p className="fl-section-sub">
              Explore {category.crop} farms across {category.district} — select a farm to view available plots and
              reserve.
            </p>
          </div>
          <div className="fl-section-count">{farms.length}</div>
        </div>

        <div className="fl-cards-grid">
          {farms.map((farm, index) => (
            <div
              key={farm.id}
              className={`fl-card fl-card-visible ${farm.available ? 'fl-card--available' : 'fl-card--coming-soon'}`}
              role={farm.available ? 'link' : undefined}
              tabIndex={farm.available ? 0 : undefined}
              aria-disabled={!farm.available}
              style={{ animationDelay: `${index * 0.06}s` }}
              onClick={() => farm.available && navigate(projectDetailsPath(farm.id))}
              onKeyDown={(e) => {
                if (farm.available && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  navigate(projectDetailsPath(farm.id));
                }
              }}
            >
              <div className="fl-card-img">
                <img src={farm.image} alt={farm.name} loading="lazy" />
                <span className="fl-card-badge">CSA</span>
                {farm.available ? (
                  <span className="fl-card-status fl-card-status--available">Available</span>
                ) : (
                  <div className="fl-card-coming-soon-overlay" aria-hidden="true">
                    <span className="fl-card-coming-soon-ribbon">Coming Soon</span>
                  </div>
                )}
              </div>
              <div className="fl-card-body">
                <div className="fl-card-name">{farm.name}</div>
                <div className="fl-card-divider" />
                <div className="fl-card-meta">
                  <div className="fl-card-meta-row"><div className="fl-card-meta-dot" /><strong>Village</strong> {farm.village}</div>
                  <div className="fl-card-meta-row"><div className="fl-card-meta-dot" /><strong>District</strong> {farm.district}</div>
                  <div className="fl-card-meta-row"><div className="fl-card-meta-dot" /><strong>State</strong> {farm.state}</div>
                </div>
                <div className="fl-card-footer">
                  <button
                    type="button"
                    className="fl-btn-view"
                    disabled={!farm.available}
                    aria-disabled={!farm.available}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (farm.available) navigate(projectDetailsPath(farm.id));
                    }}
                  >
                    View Details
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
