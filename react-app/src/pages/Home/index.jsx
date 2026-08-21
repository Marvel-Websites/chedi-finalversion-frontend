import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { PAGE_TO_ROUTE, ROUTES, projectDetailsPath } from '@/constants/routes';
import { CHEDI_LOGO, S3_BASE } from '@/constants/media';
import {
  ECO_CARDS,
  LAND_CARDS,
  FARMER_CARDS,
  HOW_IT_WORKS_STEPS,
  FEATURED_PROJECTS,
  WELLNESS_CARDS,
  WHY_CHEDI_CARDS,
} from '@/constants/homeContent';
import useRevealObserver from '@/hooks/useRevealObserver';

export default function Home() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  useRevealObserver(containerRef, '.hp-reveal');

  const go = (pageId) => navigate(PAGE_TO_ROUTE[pageId] ?? ROUTES.HOME);
  const openChoosePlot = () =>
    navigate(projectDetailsPath('farm-1-01'), { state: { categoryId: 'farm-1', scrollToChoosePlot: true } });

  return (
    <div id="page-home" className="page active" ref={containerRef}>
      {/* SECTION 1 — CINEMATIC HERO */}
      <section className="hp-hero" aria-label="Hero">
        <div className="hp-hero-bg" role="img" aria-label="Organic farmland" />
        <div className="hp-hero-overlay" />
        <div className="hp-hero-particles" aria-hidden="true" />
        <div className="hp-hero-content">
          <div className="hp-hero-badge hp-reveal">
            <span className="hp-hero-badge-dot" />
            CHEDI – THE ORGANIC FARM
          </div>
          <h1 className="hp-hero-title hp-reveal hp-reveal-delay-1">
            Rebuilding Agriculture.
            <br />
            Restoring <span>Health.</span>
            <br />
            Creating Sustainable Wealth.
          </h1>
          <p className="hp-hero-tagline hp-reveal hp-reveal-delay-2">
            From Farm to Family. From Land to Legacy.
          </p>
          <p className="hp-hero-desc hp-reveal hp-reveal-delay-2">
            We connect families, farmers, and agricultural land through sustainable organic ecosystems.
          </p>
          <div className="hp-btns hp-reveal hp-reveal-delay-3">
            <button className="hp-btn hp-btn-primary" onClick={() => go('csa')}>
              Join CSA
            </button>
            <button className="hp-btn hp-btn-glass" onClick={() => go('projects')}>
              Explore Farm Projects
            </button>
          </div>
          <div className="hp-hero-stats hp-reveal hp-reveal-delay-4">
            <div className="hp-hero-stat">
              <div className="hp-hero-stat-num">100%</div>
              <div className="hp-hero-stat-label">Organic Farming</div>
            </div>
            <div className="hp-hero-stat">
              <div className="hp-hero-stat-num">600</div>
              <div className="hp-hero-stat-label">Sq Ft Family Plots</div>
            </div>
            <div className="hp-hero-stat">
              <div className="hp-hero-stat-num">Weekly</div>
              <div className="hp-hero-stat-label">Farm Delivery</div>
            </div>
            <div className="hp-hero-stat">
              <div className="hp-hero-stat-num">Tech</div>
              <div className="hp-hero-stat-label">Driven Agriculture</div>
            </div>
          </div>
        </div>
        <div className="hp-hero-visuals" aria-hidden="true">
          <div className="hp-hero-visual">
            <img src={`${S3_BASE.replace('/extraimages', '/images')}/14786.jpg`} alt="" loading="lazy" />
          </div>
          <div className="hp-hero-visual">
            <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=200&q=80" alt="" loading="lazy" />
          </div>
          <div className="hp-hero-visual">
            <img src="https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=200&q=80" alt="" loading="lazy" />
          </div>
        </div>
      </section>

      {/* SECTION 1b — VIDEO SHOWCASE */}
      <section className="hp-video-showcase" aria-label="Featured videos">
        <div className="hp-video-showcase-inner">
          <button type="button" className="hp-video-showcase-video hp-reveal" aria-label="Play CHEDI farm video">
            <div className="hp-video-showcase-embed">
              <iframe
                src="https://player.vimeo.com/video/1150353500?title=0&byline=0&portrait=0&background=1&autoplay=1&loop=1&muted=1"
                allow="autoplay; fullscreen; picture-in-picture"
                tabIndex={-1}
                aria-hidden="true"
                title="CHEDI farm video 1"
              />
            </div>
            <span className="hp-video-showcase-play" aria-hidden="true">
              <span className="hp-video-showcase-play-icon" />
            </span>
          </button>
          <div className="hp-video-showcase-center hp-reveal hp-reveal-delay-1">
            <div className="hp-video-showcase-logo">
              <img src={CHEDI_LOGO} alt="CHEDI The Organic Farm" />
            </div>
          </div>
          <button
            type="button"
            className="hp-video-showcase-video hp-reveal hp-reveal-delay-2"
            aria-label="Play CHEDI farm video"
          >
            <div className="hp-video-showcase-embed">
              <iframe
                src="https://player.vimeo.com/video/1150355952?title=0&byline=0&portrait=0&background=1&autoplay=1&loop=1&muted=1"
                allow="autoplay; fullscreen; picture-in-picture"
                tabIndex={-1}
                aria-hidden="true"
                title="CHEDI farm video 2"
              />
            </div>
            <span className="hp-video-showcase-play" aria-hidden="true">
              <span className="hp-video-showcase-play-icon" />
            </span>
          </button>
        </div>
      </section>

      {/* SECTION 2 — WHAT IS CHEDI */}
      <section className="hp-what" id="hp-what">
        <div className="hp-container">
          <div className="hp-what-grid">
            <div className="hp-collage hp-reveal">
              <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80" alt="Organic vegetables" loading="lazy" />
              <img src={`${S3_BASE.replace('/extraimages', '/images')}/14786.jpg`} alt="Farmer harvesting crops" loading="lazy" />
              <img src={`${S3_BASE}/Gemini_Generated_Image_2j19m82j19m82j19.png`} alt="Drone monitoring farmland" loading="lazy" />
              <img src="https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=400&q=80" alt="Healthy family eating organic food" loading="lazy" />
              <img src={`${S3_BASE}/Gemini_Generated_Image_f419tyf419tyf419.png`} alt="Healthy family eating organic food" loading="lazy" />
            </div>
            <div className="hp-reveal hp-reveal-delay-2">
              <span className="hp-section-tag">About CHEDI</span>
              <h2 className="hp-heading">What is CHEDI?</h2>
              <p className="hp-sub">
                CHEDI is an integrated agricultural ecosystem that connects families, farmers, and farmland
                through sustainable organic farming.
              </p>
              <div className="hp-features-grid">
                <div className="hp-glass-card hp-feature-mini">
                  <div className="icon">🌱</div>
                  <h4>Organic Cultivation</h4>
                </div>
                <div className="hp-glass-card hp-feature-mini">
                  <div className="icon">🚜</div>
                  <h4>Smart Agriculture</h4>
                </div>
                <div className="hp-glass-card hp-feature-mini">
                  <div className="icon">👨‍🌾</div>
                  <h4>Farmer Empowerment</h4>
                </div>
                <div className="hp-glass-card hp-feature-mini">
                  <div className="icon">🌍</div>
                  <h4>Sustainable Ecosystem</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — OUR ECOSYSTEM */}
      <section className="hp-ecosystem">
        <div className="hp-container" style={{ textAlign: 'center' }}>
          <span className="hp-section-tag hp-reveal">Our Ecosystem</span>
          <h2 className="hp-heading hp-reveal">One Ecosystem. Four Powerful Solutions.</h2>
          <div className="hp-eco-grid">
            {ECO_CARDS.map((card, i) => (
              <div
                key={card.title}
                className={`hp-eco-card hp-reveal${i > 0 ? ` hp-reveal-delay-${i}` : ''}`}
                onClick={() => go(card.navPage)}
                role="button"
                tabIndex={0}
              >
                <div className="hp-eco-card-img">
                  <img src={card.img} alt={card.alt} loading="lazy" />
                </div>
                <div className="hp-eco-card-body">
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — CSA HIGHLIGHT */}
      <section className="hp-csa">
        <div className="hp-csa-leaves" aria-hidden="true">🌿</div>
        <div className="hp-container">
          <div className="hp-csa-grid">
            <div className="hp-csa-visual hp-reveal">
              <div className="hp-csa-img">
                <img
                  src={`${S3_BASE}/Gemini_Generated_Image_fpebb0fpebb0fpeb.png`}
                  alt="Premium organic vegetable basket with farmer"
                  loading="lazy"
                />
                <div className="hp-csa-img-overlay">
                  <h3 className="hp-csa-overlay-title">Become a Member</h3>
                  <p className="hp-csa-overlay-desc">
                    As a token of love, we send a basket of fresh vegetables as a welcome gift.
                  </p>
                  <p className="hp-csa-overlay-headline">Let&apos;s Save the Next Generation</p>
                </div>
              </div>
              <div className="hp-csa-plot-card">
                <div className="hp-csa-plot-eyebrow">SEE WHERE YOUR FOOD GROWS</div>
                <h3 className="hp-csa-plot-title">Your Personal Farm Plot</h3>
                <p className="hp-csa-plot-desc">
                  A dedicated plot of fertile, organic farmland reserved exclusively for you and your family.
                  Fresh, chemical-free vegetables are cultivated with care by experienced farmers, ensuring a
                  healthy and sustainable food source without any effort on your part.
                </p>
              </div>
            </div>
            <div className="hp-csa-content hp-reveal hp-reveal-delay-2">
              <span className="hp-section-tag hp-csa-tag">Community Supported Agriculture</span>
              <h2 className="hp-heading">Eat Safe. Live Long.</h2>
              <p className="hp-csa-lead">
                Fresh crops, direct from farm to your table. Through Farm Club membership, your food is grown
                with care and planning — one subscription manages the entire journey from soil preparation to
                weekly delivery.
              </p>
              <div className="hp-csa-stats">
                <div className="hp-csa-stat">
                  <span className="hp-csa-stat-num">600 sq ft</span>
                  <span className="hp-csa-stat-label">Your Dedicated Plot</span>
                </div>
                <div className="hp-csa-stat">
                  <span className="hp-csa-stat-num">Lab Tested</span>
                  <span className="hp-csa-stat-label">Farm Products</span>
                </div>
                <div className="hp-csa-stat">
                  <span className="hp-csa-stat-num">40+</span>
                  <span className="hp-csa-stat-label">Seasonal Varieties</span>
                </div>
                <div className="hp-csa-stat">
                  <span className="hp-csa-stat-num">7 Days</span>
                  <span className="hp-csa-stat-label"> Weekly Once Soil to Doorstep</span>
                </div>
              </div>
              <ul className="hp-benefits">
                <li><span className="check">✔</span> Dedicated 600 Sq Ft Plot</li>
                <li><span className="check">✔</span> Chemical-Free Produce</li>
                <li><span className="check">✔</span> Weekly Delivery</li>
                <li><span className="check">✔</span> Lab-Tested Vegetables</li>
                <li><span className="check">✔</span> App Monitoring</li>
                <li><span className="check">✔</span> 6–8 Vegetable Varieties Per Week</li>
                <li><span className="check">✔</span> Monthly Lab Test Certificate</li>
                <li><span className="check">✔</span> Fully Managed by Expert Farmers</li>
              </ul>
              <div className="hp-csa-trust">
                <span className="hp-csa-trust-item"><span className="hp-csa-trust-icon" aria-hidden="true">🌾</span> Non-GMO Seeds</span>
                <span className="hp-csa-trust-item"><span className="hp-csa-trust-icon" aria-hidden="true">💧</span> Clean Water</span>
                <span className="hp-csa-trust-item"><span className="hp-csa-trust-icon" aria-hidden="true">🌱</span> Pesticide Free</span>
                <span className="hp-csa-trust-item"><span className="hp-csa-trust-icon" aria-hidden="true">🧪</span> Lab Certified</span>
                <span className="hp-csa-trust-item"><span className="hp-csa-trust-icon" aria-hidden="true">🚚</span> Weekly Delivery</span>
                <span className="hp-csa-trust-item"><span className="hp-csa-trust-icon" aria-hidden="true">🤝</span> No Middlemen</span>
              </div>
              <div className="hp-btns">
                <button className="hp-btn hp-btn-primary" onClick={() => go('csa')}>Become a Member</button>
                <a className="hp-btn hp-btn-outline" href={ROUTES.SIGN_IN} target="_blank" rel="noopener noreferrer">Sign Up Web App</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — AGRI-LAND SOLUTIONS */}
      <section className="hp-agriland">
        <div className="hp-agriland-overlay" />
        <div className="hp-container" style={{ textAlign: 'center' }}>
          <span className="hp-section-tag hp-reveal">Agri-Land</span>
          <h2 className="hp-heading hp-reveal">Agricultural Land Solutions</h2>
          <p className="hp-sub center hp-reveal">
            Premium real-estate investment opportunities in sustainable organic agriculture.
          </p>
          <div className="hp-land-grid">
            {LAND_CARDS.map((card, i) => (
              <div
                key={card.title}
                className={`hp-land-card hp-reveal${i > 0 ? ` hp-reveal-delay-${i}` : ''}`}
                onClick={() => go(card.navPage)}
                role="button"
                tabIndex={0}
              >
                <div className="hp-land-card-img">
                  <img src={card.img} alt={card.alt} loading="lazy" />
                </div>
                <div className="hp-land-card-body">
                  <h3>{card.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="hp-btns center hp-reveal">
            <button className="hp-btn hp-btn-gold" onClick={() => go('contact')}>Partner With CHEDI</button>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FARMER GROWTH */}
      <section className="hp-farmer">
        <div className="hp-container" style={{ textAlign: 'center' }}>
          <span className="hp-section-tag hp-reveal" style={{ color: 'var(--hp-gold)' }}>Farmer-Growth</span>
          <h2 className="hp-heading hp-reveal">Helping Farmers Grow Sustainably</h2>
          <div className="hp-farmer-grid">
            {FARMER_CARDS.map((card, i) => (
              <div key={card.title} className={`hp-farmer-card hp-reveal${i > 0 ? ` hp-reveal-delay-${i % 3}` : ''}`}>
                <div className="hp-farmer-card-img">
                  <img src={card.img} alt={card.alt} loading="lazy" />
                </div>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="hp-btns center hp-reveal">
            <button className="hp-btn hp-btn-gold" onClick={() => go('farmer')}>Become a Farmer Partner</button>
          </div>
        </div>
      </section>

      {/* SECTION 7 — HOW CHEDI WORKS */}
      <section className="hp-timeline">
        <div className="hp-container" style={{ textAlign: 'center' }}>
          <span className="hp-section-tag hp-reveal">Process</span>
          <h2 className="hp-heading hp-reveal">How CHEDI Works</h2>
          <div className="hp-timeline-track">
            {HOW_IT_WORKS_STEPS.map((step, i) => (
              <div className="hp-step hp-reveal" key={step}>
                <div className="hp-step-num">{i + 1}</div>
                <h4>{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — FEATURED PROJECTS */}
      <section className="hp-projects">
        <div className="hp-container" style={{ textAlign: 'center' }}>
          <span className="hp-section-tag hp-reveal">Farm Projects</span>
          <h2 className="hp-heading hp-reveal">Choose Your Organic Farm Plot</h2>
          <div className="hp-project-grid">
            {FEATURED_PROJECTS.map((project, i) => (
              <div
                key={project.name}
                className={`hp-project-card hp-reveal${i > 0 ? ` hp-reveal-delay-${i}` : ''}`}
                onClick={() => go('projects')}
                role="button"
                tabIndex={0}
              >
                <div className="hp-project-img">
                  <img src={project.img} alt={project.alt} loading="lazy" />
                  <div className="hp-project-overlay">
                    <button
                      className="hp-btn hp-btn-glass"
                      onClick={(e) => {
                        e.stopPropagation();
                        go('projects');
                      }}
                    >
                      View Project
                    </button>
                  </div>
                </div>
                <div className="hp-project-body">
                  <h3>📍 {project.name}</h3>
                  <div className="hp-project-meta">
                    <span className={`hp-badge hp-badge-${project.status === 'available' ? 'available' : 'soon'}`}>
                      {project.status === 'available' ? 'Available' : 'Coming Soon'}
                    </span>
                    <span>600 Sq Ft</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="hp-btns center hp-reveal" style={{ marginTop: 40 }}>
            <button className="hp-btn hp-btn-primary" onClick={openChoosePlot}>Choose Plot</button>
          </div>
        </div>
      </section>

      {/* SECTION 9 — FARM PLOT RESERVATION CTA */}
      <section className="hp-reserve">
        <div className="hp-reserve-bg" role="img" aria-label="Drone aerial farmland at golden hour" />
        <div className="hp-reserve-overlay" />
        <div className="hp-reserve-map" aria-hidden="true" />
        <div className="hp-container">
          <h2 className="hp-heading hp-reveal">Reserve Your Farm Plot Today</h2>
          <p className="hp-sub light center hp-reveal">
            Secure your dedicated organic farm plot and begin your sustainable farming journey.
          </p>
          <div className="hp-btns center hp-reveal">
            <button className="hp-btn hp-btn-gold" onClick={() => go('projects')}>Choose Plot</button>
            <button className="hp-btn hp-btn-glass" onClick={() => go('projects')}>View Projects</button>
          </div>
        </div>
      </section>

      {/* SECTION 10 — WELLNESS & LONGEVITY */}
      <section className="hp-wellness" id="hp-wellness">
        <div className="hp-wellness-overlay" />
        <div className="hp-container">
          <span className="hp-section-tag hp-reveal">Wellness</span>
          <h2 className="hp-heading hp-reveal">Food Today. Health Tomorrow.</h2>
          <div className="hp-wellness-grid">
            {WELLNESS_CARDS.map((card, i) => (
              <div key={card.title} className={`hp-glass-card hp-wellness-card hp-reveal${i > 0 ? ` hp-reveal-delay-${i % 3}` : ''}`}>
                <div className="emoji">{card.emoji}</div>
                <h4>{card.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 — WHY CHEDI */}
      <section className="hp-why">
        <div className="hp-container" style={{ textAlign: 'center' }}>
          <span className="hp-section-tag hp-reveal">Why CHEDI</span>
          <h2 className="hp-heading hp-reveal">Built for a Healthier Future</h2>
          <div className="hp-why-grid">
            {WHY_CHEDI_CARDS.map((card, i) => (
              <div key={card.title} className={`hp-glass-card hp-why-block hp-reveal${i > 0 ? ` hp-reveal-delay-${i}` : ''}`}>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 15 — FINAL EMOTIONAL CTA */}
      <section className="hp-final">
        <div className="hp-final-bg" role="img" aria-label="Happy farmer family with fresh vegetables" />
        <div className="hp-final-overlay" />
        <div className="hp-final-leaves" aria-hidden="true" />
        <div className="hp-container">
          <h2 className="hp-heading hp-reveal">
            Save Your Family.
            <br />
            Save The Next Generation.
          </h2>
          <p className="hp-sub light hp-reveal">Join CHEDI and become part of a healthier agricultural future.</p>
          <div className="hp-btns center hp-reveal">
            <button className="hp-btn hp-btn-gold" onClick={() => go('csa')}>Join CSA</button>
            <button className="hp-btn hp-btn-glass" onClick={() => go('projects')}>Explore Projects</button>
            <button className="hp-btn hp-btn-glass" onClick={() => go('contact')}>Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
}
