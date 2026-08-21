import { useNavigate } from 'react-router-dom';
import { PAGE_TO_ROUTE, ROUTES } from '@/constants/routes';
import { S3_BASE } from '@/constants/media';
import {
  CSA_FEATURES,
  CSA_STATS,
  TOKEN_CHECKS,
  CSA_PLANS,
  PLAN_INCLUDED,
  MEMBERSHIP_PROMISE_POINTS,
  MEMBERSHIP_STEPS_TOP,
  MEMBERSHIP_STEPS_BOTTOM,
  PLOT_BENEFITS,
  BASKET_STATS,
  WEEKLY_STAPLES,
  SEASONAL_VEGETABLES,
  DELIVERY_FLOAT_IMAGES,
  DELIVERY_FEATURES,
  FEE_INCLUDES,
  APP_STEPS,
  COMING_SOON,
  OUR_STORY_FEATURES,
  SUSTAINABILITY_STATS,
  SUSTAINABILITY_FEATURES,
  HEALTH_BENEFITS,
} from '@/constants/csaContent';
import LongevitySection from './LongevitySection';

const IMG = S3_BASE.replace('/extraimages', '/images');

function scrollToLongevity() {
  document.getElementById('longevity-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function CSA() {
  const navigate = useNavigate();
  const go = (pageId) => navigate(PAGE_TO_ROUTE[pageId]);

  return (
    <div className="page active" id="page-csa">
      {/* HERO */}
      <section className="csa-hero">
        <div className="csa-hero-bg">
          <img src={`${S3_BASE}/Gemini_Generated_Image_lyfkk9lyfkk9lyfk.png`} alt="Fresh organic farm produce" loading="lazy" />
        </div>
        <div className="csa-hero-content">
          <div className="csa-acronym-title">
            <h1>
              <span className="csa-acronym-line"><span className="csa-acronym-letter">C</span>OMMUNITY</span>
              <span className="csa-acronym-line"><span className="csa-acronym-letter">S</span>UPPORTED</span>
              <span className="csa-acronym-line"><span className="csa-acronym-letter">A</span>GRICULTURE</span>
            </h1>
          </div>
          <h1 className="csa-hero-title">
            <span style={{ color: '#04e304' }}>Eat safe</span> - <span style={{ color: 'gold' }}>live long</span>
          </h1>
          <div className="csa-hero-desc">
            <p>Join &apos;CSA&apos;</p>
            <p>CSA is a farming model where we cultivate crops for you and supply fresh organic vegetables.</p>
            <p>Be a Member of CSA</p>
            <p>Choose your farm plot (leased).</p>
            <p>Fertile land farmed exclusively for your family — pesticide-free, fertilizer-free, chemical-free &amp; gluten-free.</p>
            <p>Delivered weekly from the farm directly to your doorstep.</p>
          </div>
          <div className="cta-btns center" style={{ marginBottom: 44 }}>
            <button className="btn btn-gold" onClick={() => go('contact')}>Start Membership</button>
            <a className="btn btn-outline" href={ROUTES.SIGN_IN} target="_blank" rel="noopener noreferrer">Sign Up Web App</a>
            <button className="btn btn-longevity" onClick={scrollToLongevity}>
              <span className="longevity-btn-icon">✦</span> For Longevity Life
            </button>
          </div>
          <div className="csa-features">
            {CSA_FEATURES.map((f) => (
              <div className="csa-feature" key={f.label}>
                <div className="csa-feature-icon">{f.icon}</div>
                <div className="csa-feature-label">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section-stats-pad" style={{ background: 'var(--beige-dark)' }}>
        <div className="container">
          <div className="csa-stats-row">
            {CSA_STATS.map((stat) => (
              <div className="impact-card" style={{ background: '#fff', borderColor: 'rgba(0,0,0,.06)' }} key={stat.label}>
                <div className="impact-icon">{stat.icon}</div>
                <div className="impact-num" style={{ color: 'var(--green-dark)' }}>{stat.num}</div>
                <div className="impact-label" style={{ color: 'var(--text-light)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOKEN OF LOVE / WELCOME BANNER */}
      <section className="csa-token-banner">
        <div className="csa-token-bg" aria-hidden="true">
          <img src={`${S3_BASE}/316.jpg`} alt="" loading="lazy" />
        </div>
        <div className="csa-token-inner">
          <div className="csa-token-left">
            <div className="csa-token-tag">BECOME A MEMBER</div>
            <h2 className="csa-token-title">
              A Warm Welcome
              <br />
              from <span>Our Farm</span>
            </h2>
            <p className="csa-token-desc">
              Through Farm Club membership, your food is grown with care and planning. The harvest is planned to
              support everyday nutritional needs, and one subscription manages the entire farming process — from
              soil preparation to crop care and delivery.
            </p>
            <div className="csa-token-checks">
              {TOKEN_CHECKS.map((check) => (
                <div className="csa-token-check" key={check}>{check}</div>
              ))}
            </div>
            <div style={{ marginTop: 28 }}>
              <a className="btn btn-gold" href={ROUTES.SIGN_IN} target="_blank" rel="noopener noreferrer">Sign Up Web App</a>
            </div>
          </div>
          <div className="csa-member-card">
            <h4>Become a Member</h4>
            <p>
              As a token of love we send a basket of vegetables as a starting point.
              <span className="csa-basket-highlight">---Let&apos;s save the next generation---</span>
            </p>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className="plans-section" style={{ background: 'var(--green-dark)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-heading white">Choose Your CSA Plan</h2>
            <p className="section-sub white">
              All memberships include full farm management, weekly delivery, and app access. No hidden fees.
            </p>
          </div>
          <div className="plans-grid">
            {CSA_PLANS.map((plan) => (
              <div
                className={`plan-card${plan.featured ? ' featured' : ''}`}
                style={!plan.featured ? { background: 'rgba(255,255,255,.06)', borderColor: 'rgba(255,255,255,.1)' } : undefined}
                onClick={() => go('contact')}
                key={plan.name}
              >
                {plan.badge && <div className="plan-badge">{plan.badge}</div>}
                <div className="plan-name" style={!plan.featured ? { color: '#fff' } : undefined}>{plan.name}</div>
                <div className="plan-price" style={!plan.featured ? { color: 'var(--gold-light)' } : undefined}>{plan.price}</div>
                <div className="plan-per" style={!plan.featured ? { color: 'rgba(255,255,255,.48)' } : undefined}>{plan.per}</div>
                <div className="plan-feature" style={!plan.featured ? { color: 'rgba(255,255,255,.72)', fontSize: 20 } : { fontSize: 20 }}>
                  {plan.plotLine}
                </div>
                <div className="plan-feature" style={!plan.featured ? { color: 'rgba(255,255,255,.72)', fontSize: 20 } : { fontSize: 20 }}>
                  An aditional Delivery charge of ₹10,000 across Tamilnadu
                </div>
                <button
                  className={plan.featured ? 'btn btn-gold' : 'btn btn-outline'}
                  style={{ width: '100%', justifyContent: 'center' }}
                  type="button"
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="plan-card featured" style={{ width: '100%', marginTop: 30, padding: 35 }}>
          <div className="csa-points-grid">
            <div className="csa-full-width">
              The vegetables harvested from the farm will be sufficient to support two additional members of the family.
            </div>
            {PLAN_INCLUDED.map((item) => <div key={item}>✔ {item}</div>)}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP STEPS */}
      <section className="membership-steps-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">HOW IT WORKS</div>
            <h2 className="section-heading">
              Join Hands for
              <br />
              Lifetime Wellness
            </h2>
            <p className="section-sub">
              Together we care for the future generation. A simple 7-step journey from joining to enjoying fresh
              organic vegetables every week.
            </p>
          </div>

          <div className="steps-intro">
            <div className="steps-intro-img">
              <img src={`${IMG}/male-farmer-who-is-using-shovel-dig-soil-his-rice-fields.jpg`} alt="Farmers working the plot" loading="lazy" />
            </div>
            <div>
              <div className="section-tag">OUR PROMISE</div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(24px,3vw,38px)', color: 'var(--green-dark)', lineHeight: 1.2, marginBottom: 16 }}>
                &quot;On your journey toward better health, we&apos;d love to stay connected and grow together.&quot;
              </h3>
              <p style={{ fontSize: 16, color: 'var(--text-light)', lineHeight: 1.72, marginBottom: 24 }}>
                Members choose a 600 sq ft plot, where crops grow according to natural seasonal cycles. The harvest
                is planned to support everyday nutritional needs for families, and one subscription manages the
                entire farming process — from soil preparation to harvesting.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {MEMBERSHIP_PROMISE_POINTS.map((point) => (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: 'var(--text-mid)' }} key={point.text}>
                    <span style={{ color: 'var(--green-accent)', fontWeight: 700, fontSize: 18 }}>{point.icon}</span> {point.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="steps-grid steps-grid--4">
            {MEMBERSHIP_STEPS_TOP.map((step, i) => (
              <div className="step-card" key={step.title}>
                <div className="step-card-img">
                  <img src={step.img} alt={step.alt} loading="lazy" />
                  <div className="step-num-circle">{i + 1}</div>
                </div>
                <div className="step-card-body">
                  <div className="step-card-label">{step.label}</div>
                  <div className="step-card-title">{step.title}</div>
                  <div className="step-card-desc">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="steps-grid steps-grid--3">
            {MEMBERSHIP_STEPS_BOTTOM.map((step, i) => (
              <div className="step-card" key={step.title}>
                <div className="step-card-img">
                  <img src={step.img} alt={step.alt} loading="lazy" />
                  <div className="step-num-circle">{i + 5}</div>
                </div>
                <div className="step-card-body">
                  <div className="step-card-label">{step.label}</div>
                  <div className="step-card-title">{step.title}</div>
                  <div className="step-card-desc">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AERIAL VIEW / YOUR PLOT SECTION */}
      <section className="plot-section">
        <div className="plot-bg">
          <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80&auto=format&fit=crop" alt="Aerial view of organic farm plots" loading="lazy" />
          <div className="plot-bg-overlay" />
          <div className="plot-content">
            <div className="plot-eyebrow">SEE WHERE YOUR FOOD GROWS</div>
            <div className="plot-title">Your Personal Farm Plot</div>
            <p className="plot-sub">
              Your personal leased plot of fresh, organic land where chemical-free vegetables grow just for you and
              your family — managed entirely by expert farmers.
            </p>
            <div className="plot-cta">
              <button className="btn btn-gold" onClick={() => go('projects')}>Choose CSA Plots</button>
            </div>
          </div>
        </div>
        <div className="plot-cards-strip">
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div className="section-tag">PLOT BENEFITS</div>
            <h2 className="section-heading">Why Choose a Leased Farm Plot?</h2>
            <p className="section-sub" style={{ margin: '12px auto 0', textAlign: 'center' }}>
              Experience true farm-to-table living with your dedicated leased growing space, managed by expert
              farmers and delivering fresh organic vegetables every week.
            </p>
          </div>
          <div className="plot-benefits-grid">
            {PLOT_BENEFITS.map((b) => (
              <div className="plot-benefit-card" key={b.title}>
                <div style={{ width: 48, height: 48, background: 'linear-gradient(135deg,var(--green-mid),var(--green-accent))', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, marginBottom: 14 }}>
                  {b.icon}
                </div>
                <div className="plot-benefit-title">{b.title}</div>
                <div className="plot-benefit-desc">{b.desc}</div>
                <div className="plot-checklist">
                  {b.checks.map((check) => (
                    <div className="plot-check" key={check}>{check}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <button className="btn btn-gold" onClick={() => go('projects')}>Choose Your Projects</button>
          </div>
        </div>
      </section>

      {/* WEEKLY BASKET */}
      <section className="basket-section">
        <div className="container">
          <div className="basket-intro">
            <div>
              <div className="section-tag">WEEKLY BASKET</div>
              <h2 className="section-heading white">
                Grown with Care,
                <br />
                Delivered with Love
              </h2>
              <p className="section-sub white" style={{ marginTop: 14 }}>
                Subscribers receive a fixed weekly basket of vegetables sized for daily nutritional needs. Every
                item freshly harvested from your dedicated plot.
              </p>
              <div className="basket-features-grid">
                {BASKET_STATS.map((stat) => (
                  <div style={{ background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 12, padding: '16px 18px' }} key={stat.label}>
                    <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, color: 'var(--gold-light)' }}>{stat.num}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)', marginTop: 3 }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="basket-intro-img">
              <img src={`${IMG}/2148224020.jpg`} alt="Fresh vegetable basket" loading="lazy" />
            </div>
          </div>

          <div className="section-header" style={{ marginBottom: 36 }}>
            <div className="section-tag">WEEKLY STAPLES</div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(24px,3vw,38px)', color: '#fff', marginBottom: 8 }}>Your Weekly Share</h3>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,.55)' }}>Fixed every week — the essentials your kitchen needs</p>
          </div>
          <div className="weekly-staples-grid">
            {WEEKLY_STAPLES.map((veg) => (
              <div className="veg-card" key={veg.name}>
                <div className="veg-card-img">
                  <img src={veg.img} alt={veg.name} loading="lazy" />
                </div>
                <div className="veg-card-body">
                  <div className="veg-name">{veg.name}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="seasonal-note" style={{ fontSize: 25 }}>
            <strong>Note: </strong>Weekly delivery of up to 3kg of everyday kitchen essentials.
          </div>
        </div>
      </section>

      {/* SEASONAL VEGETABLES */}
      <section className="seasonal-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">SEASONAL VEGETABLES</div>
            <h2 className="section-heading white">What&apos;s Growing Now</h2>
            <p className="section-sub white">
              Seasonal vegetables rotate with each season for nutritional variety. Your basket changes with nature —
              that&apos;s the beauty of true farming.
            </p>
          </div>
          <div className="seasonal-grid">
            {SEASONAL_VEGETABLES.map((veg) => (
              <div className="seasonal-card" key={veg.name}>
                <div className="seasonal-card-img">
                  <img src={veg.img} alt={veg.name.replace(/^[^a-zA-Z]+/, '')} loading="lazy" />
                </div>
                <div className="seasonal-card-body">
                  <div className="seasonal-veg-name">{veg.name}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="seasonal-note" style={{ fontSize: 25 }}>
            <strong>Note: </strong>Weekly delivery of 7 Seasonal vegetable varieties, Totaling up to 7kg.
          </div>
        </div>
      </section>

      {/* PREMIUM HOME DELIVERY EXPERIENCE */}
      <section className="delivery-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">FARM TO HOME DELIVERY</div>
            <h2 className="section-heading white">
              Fresh Vegetables Delivered
              <br />
              To Your Doorstep
            </h2>
            <p className="section-sub white">
              Harvested from our certified farms and delivered with care. Experience the true meaning of
              farm-fresh, from soil to your table.
            </p>
          </div>

          <div className="delivery-content">
            <div className="delivery-hero-side">
              <div className="delivery-hero-img">
                <img src={`${S3_BASE}/Gemini_Generated_Image_tnywfktnywfktnyw.png`} alt="Fresh vegetable delivery" loading="lazy" />
              </div>
              <div className="delivery-float-cards">
                {DELIVERY_FLOAT_IMAGES.map((item) => (
                  <div className="delivery-float-card" key={item.alt}>
                    <img src={item.img} alt={item.alt} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>

            <div className="delivery-content-side">
              <div className="delivery-features">
                {DELIVERY_FEATURES.map((f) => (
                  <div className="delivery-feature-card" key={f.title}>
                    <div className="delivery-feature-icon">{f.icon}</div>
                    <div className="delivery-feature-body">
                      <h3>{f.title}</h3>
                      <p>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="delivery-cta-btns">
                <button className="btn btn-gold">Start CSA Membership</button>
                <a className="btn btn-green" href={ROUTES.SIGN_IN} target="_blank" rel="noopener noreferrer">Sign Up Web App</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP FEE + GET STARTED */}
      <section className="membership-fee-section">
        <div className="container">
          <div className="fee-card">
            <div className="fee-left">
              <div className="fee-tag">GET STARTED WITH FARM CLUB</div>
              <div className="fee-title">One-Time Membership Fee to Begin Your CSA Journey</div>
              <div className="fee-amount">
                ₹500 <span>one-time</span>
              </div>
              <div className="fee-one-time">Includes a complimentary box of seasonal vegetable samples</div>
              <div className="fee-includes">
                {FEE_INCLUDES.map((item) => (
                  <div className="fee-include" key={item}>{item}</div>
                ))}
              </div>
              <a className="btn btn-gold" style={{ fontSize: 15, padding: '16px 32px' }} href={ROUTES.SIGN_IN} target="_blank" rel="noopener noreferrer">
                Sign Up Web App
              </a>
            </div>
            <div className="fee-right">
              <img src={`${IMG}/40137.jpg`} alt="Fresh farm produce" loading="lazy" />
              <div className="fee-image-overlay">
                <p className="fee-overlay-text">We send basket of vegetable as a token of love</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APP DOWNLOAD — WHAT HAPPENS AFTER */}
      <section className="app-section">
        <div className="container">
          <div className="app-inner">
            <div className="app-img-wrapper">
              <img src={`${IMG}/farmer-with-basket-harvested-vegetables-sunset.jpg`} alt="Expert cultivation" loading="lazy" />
              <div className="app-badge-strip">
                <h4>Expert Cultivation · Fresh Harvest</h4>
                <p>From soil to your doorstep, every step managed for you</p>
              </div>
            </div>
            <div className="app-content">
              <div className="section-tag">DOWNLOAD THE APP</div>
              <h2 className="section-heading white">
                What Happens After
                <br />
                You Download the App
              </h2>
              <p className="section-sub white" style={{ marginTop: 14 }}>
                Your complete control center for browsing subscriptions, plot leasing, tracking deliveries, and
                managing payments — all in one place.
              </p>
              <div className="app-steps">
                {APP_STEPS.map((step, i) => (
                  <div className="app-step" key={step.title}>
                    <div className="app-step-num">{i + 1}</div>
                    <div>
                      <div className="app-step-title">{step.title}</div>
                      <div className="app-step-desc">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="app-dl-btns">
                <div className="app-dl-btn">
                  <div className="dl-icon">🍎</div>
                  <div className="app-dl-btn-text">
                    <div className="dl-sub">Download on the</div>
                    <div className="dl-main">App Store</div>
                  </div>
                </div>
                <div className="app-dl-btn">
                  <div className="dl-icon">▶</div>
                  <div className="app-dl-btn-text">
                    <div className="dl-sub">Get it on</div>
                    <div className="dl-main">Google Play</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMING SOON — FRUITS & GROCERIES */}
      <section className="coming-soon-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">EXPANDING SOON</div>
            <h2 className="section-heading white">
              More from Your Farm,
              <br />
              Coming Soon
            </h2>
            <p className="section-sub white">
              We&apos;re growing beyond vegetables. Fresh fruits and grocery staples from your farm, arriving soon.
            </p>
          </div>
          <div className="cs-grid">
            {COMING_SOON.map((item) => (
              <div className="cs-card" key={item.title}>
                <img src={item.img} alt={item.title} loading="lazy" />
                <div className="cs-card-overlay" />
                <div className="cs-card-content">
                  <div className="cs-card-tag">EXPANDING CATEGORY</div>
                  <div className="cs-card-title">{item.title}</div>
                  <div className="cs-card-pill">🕐 Coming Soon</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LongevitySection />

      {/* OUR STORY */}
      <section className="section-responsive-pad" style={{ background: 'var(--green-dark)' }}>
        <div className="container">
          <div className="two-col">
            <div>
              <div className="section-tag">OUR STORY</div>
              <h2 className="section-heading white">
                Rooted in Purpose,
                <br />
                Grown with Care
              </h2>
              <p className="section-sub white" style={{ marginTop: 14 }}>
                We cultivate our produce using certified organic farming practices, rooted in healthy soil, natural
                growing methods, and a deep respect for nature. No synthetic fertilizers or harmful chemicals—just
                patient farming and wholesome nourishment inspired by traditional agricultural wisdom.
              </p>
              <div className="farmer-features" style={{ marginTop: 22 }}>
                {OUR_STORY_FEATURES.map((f) => (
                  <div className="farmer-feature" key={f.title}>
                    <div className="farmer-feature-icon">{f.icon}</div>
                    <div>
                      <div className="farmer-feature-title">{f.title}</div>
                      <div className="farmer-feature-desc">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="csa-story-img">
              <img src={`${IMG}/land-morning.jpg`} alt="Organic farm" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* HEALTHY WORLD MOVEMENT */}
      <section className="healthy-world-section">
        <div className="container">
          <div className="section-header healthy-world-header">
            <div className="section-tag">GLOBAL IMPACT</div>
            <h2 className="section-heading white">The Healthy World Movement</h2>
            <p className="section-sub white">
              See the transformation. From industrial pollution to thriving organic farms. One choice at a time,
              we&apos;re building a healthier world for our children.
            </p>
          </div>

          <div className="healthy-world-comparison">
            <div className="comparison-side comparison-left">
              <div className="comparison-image-wrapper">
                <img src={`${S3_BASE}/chediimages8.png`} alt="Industrial pollution - unhealthy environment" className="comparison-image" loading="lazy" />
                <div className="comparison-overlay comparison-overlay-left">
                  <h3 className="comparison-title">Without Organic Care</h3>
                  <ul className="comparison-list">
                    <li>Industrial chemicals</li>
                    <li>Polluted air &amp; water</li>
                    <li>Depleted soil</li>
                    <li>Health concerns</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="comparison-divider">
              <div className="comparison-divider-line" />
            </div>

            <div className="comparison-side comparison-right">
              <div className="comparison-image-wrapper">
                <img src={`${S3_BASE}/chediimages10.png`} alt="Healthy organic farm with families" className="comparison-image" loading="lazy" />
                <div className="comparison-overlay comparison-overlay-right">
                  <h3 className="comparison-title">With Organic Farming</h3>
                  <ul className="comparison-list">
                    <li>Pure natural farming</li>
                    <li>Clean air &amp; water</li>
                    <li>Living fertile soil</li>
                    <li>Family wellness</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="healthy-community-banner">
            <img src={`${S3_BASE}/Gemini_Generated_Image_jnmasajnmasajnma.png`} alt="Healthy diverse families united in organic farming movement" className="community-banner-image" loading="lazy" />
            <div className="community-banner-overlay">
              <h3 className="community-banner-title">Join the Movement</h3>
              <p className="community-banner-text">Thousands of families are choosing organic, choosing health, choosing CHEDI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY & ENVIRONMENTAL IMPACT */}
      <section className="sustainability-section">
        <div className="container">
          <div className="section-header sustainability-header">
            <div className="section-tag">PLANET CARE</div>
            <h2 className="section-heading white">Farming for Tomorrow</h2>
            <p className="section-sub white">
              Every CHEDI vegetable is grown with the future in mind. Sustainable practices that heal the earth
              while nourishing your family.
            </p>
          </div>

          <div className="sustainability-content">
            <div className="sustainability-left">
              <img src={`${S3_BASE}/Gemini_Generated_Image_s691d0s691d0s691.png`} alt="Lush green organic farm landscape" className="sustainability-image" loading="lazy" />
              <div className="sustainability-stats">
                {SUSTAINABILITY_STATS.map((stat) => (
                  <div className="stat-item" key={stat.label}>
                    <div className="stat-number">{stat.num}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="sustainability-right">
              {SUSTAINABILITY_FEATURES.map((f) => (
                <div className="sustainability-feature" key={f.title}>
                  <h3 className="feature-title">{f.title}</h3>
                  <p className="feature-text">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HEALTH BENEFITS OF ORGANIC FARMING */}
      <section className="health-benefits-section">
        <div className="container">
          <div className="section-header health-benefits-header">
            <div className="section-tag">SCIENCE OF ORGANIC</div>
            <h2 className="section-heading white">Health Benefits of Organic Farming</h2>
            <p className="section-sub white">
              Every aspect of organic farming is designed to maximize nutrition, safety, and wellness. Discover the
              difference that pure, chemical-free farming makes.
            </p>
          </div>

          <div className="benefits-grid">
            {HEALTH_BENEFITS.map((b) => (
              <div className="benefit-card" key={b.title}>
                <div className="benefit-image-wrapper">
                  <img src={b.img} alt={b.alt} className="benefit-image" loading="lazy" />
                  <div className="benefit-image-overlay" />
                </div>
                <div className="benefit-content">
                  <h3 className="benefit-title">{b.title}</h3>
                  <p className="benefit-description">{b.desc}</p>
                  <ul className="benefit-points">
                    {b.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAVE THE NEXT GENERATION */}
      <section className="csa-save-section">
        <div className="container">
          <div className="csa-save-inner">
            <p className="csa-save-quote">To Save the Family and Save the Next Generation</p>
            <div className="csa-save-cta">
              <button className="btn btn-gold" onClick={() => go('contact')}>Join CSA</button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-banner">
        <div className="cta-banner-bg">
          <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1200&q=80&auto=format&fit=crop" alt="Fresh vegetables" loading="lazy" />
        </div>
        <div className="cta-banner-content">
          <div className="section-tag">JOIN THE MOVEMENT</div>
          <h2 className="cta-banner-title">
            Ready to Grow Your
            <br />
            Own Organic Future?
          </h2>
          <p className="cta-banner-sub">
            Start your Farm Club membership today and get fresh, pesticide-free vegetables delivered straight from
            your dedicated leased farm.
          </p>
          <div className="cta-btns center">
            <button className="btn btn-gold" style={{ fontSize: 15, padding: '16px 32px' }} onClick={() => go('contact')}>
              Become a Member
            </button>
            <a className="btn btn-outline" href={ROUTES.SIGN_IN} target="_blank" rel="noopener noreferrer">Sign Up Web App</a>
          </div>
        </div>
      </section>
    </div>
  );
}
