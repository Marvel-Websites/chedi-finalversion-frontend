import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { FARM_PROJECTS } from '@/constants/farmData';
import { ROUTES, farmListingPath } from '@/constants/routes';

export default function ProjectDetails() {
  const { farmId: rawFarmId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const farmId = FARM_PROJECTS[rawFarmId] ? rawFarmId : Object.keys(FARM_PROJECTS)[0];
  const farm = FARM_PROJECTS[farmId];

  const backLabel = location.state?.categoryId ? '← Back to Farm Listing' : '← Back to Projects';

  const handleBack = () => {
    if (location.state?.categoryId) {
      navigate(farmListingPath(location.state.categoryId));
    } else {
      navigate(ROUTES.PROJECTS);
    }
  };

  return (
    <div className="page active" id="page-project-details">
      <div id="pd-main-flow">
        <section className="pd-hero">
          <button type="button" className="pd-back" id="pd-back-btn" aria-label="Back to Projects" onClick={handleBack}>
            {backLabel}
          </button>
          <div className="pd-hero-bg">
            <img id="pd-hero-img" src={farm.image} alt={`${farm.name} – ${farm.crop}`} loading="lazy" />
          </div>
          <div className="pd-hero-inner">
            <div className="pd-hero-top">
              <div>
                <h1 className="pd-hero-title">{farm.name}</h1>
                <div className="pd-hero-meta">
                  <span><strong>Crop:</strong> {farm.crop}</span>
                  <span><strong>Location:</strong> {farm.village}, {farm.district}</span>
                </div>
              </div>
              <span className="pd-status-badge">{farm.status}</span>
            </div>
            <div className="pd-stats-row">
              <div className="pd-stat-card">
                <div className="pd-stat-value">{farm.totalPlots}</div>
                <div className="pd-stat-label">Total Plots</div>
              </div>
              <div className="pd-stat-card">
                <div className="pd-stat-value">{farm.bookedPlots}</div>
                <div className="pd-stat-label">Booked Plots</div>
              </div>
              <div className="pd-stat-card">
                <div className="pd-stat-value">{farm.availablePlots}</div>
                <div className="pd-stat-label">Available Plots</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="pd-final-cta">
        <div className="pd-final-cta-inner">
          <h2>Reserve Your Farm Plot Today</h2>
          <p>Only Limited Plots Available</p>
          <button
            type="button"
            className="btn btn-gold"
            onClick={() => navigate(ROUTES.CONTACT)}
          >
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
}
