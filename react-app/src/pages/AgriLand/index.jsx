import { useNavigate } from 'react-router-dom';
import { PAGE_TO_ROUTE } from '@/constants/routes';
import { S3_BASE } from '@/constants/media';
import {
  LAND_PILLS,
  SELL_BENEFITS,
  LEASE_BENEFITS,
  LEASE_PROCESS,
  PARTNERSHIP_STEPS,
  PARTNERSHIP_BENEFITS,
  INCOME_STREAMS,
  ADDITIONAL_INCOME,
  INCOME_STATS,
  SUSTAIN_ICONS,
} from '@/constants/agriLandContent';

const IMG = S3_BASE.replace('/extraimages', '/images');

export default function AgriLand() {
  const navigate = useNavigate();
  const go = (pageId) => navigate(PAGE_TO_ROUTE[pageId]);

  return (
    <div className="page active" id="page-land">
      <section className="land-hero">
        <div className="land-hero-bg">
          <img src={`${S3_BASE}/Gemini_Generated_Image_2j19m82j19m82j19.png`} alt="Farmland aerial" loading="lazy" />
        </div>
        <div className="land-hero-content">
          <div className="section-tag">AGRI-LAND</div>
          <h1 className="land-hero-title">SELL-LEASE-PARTNERING WITH FARMERS</h1>
          <div className="land-hero-subtitle">Transforming Agricultural Land into Sustainable Wealth</div>
          <p className="land-hero-desc">
            We acquire, lease, and partner with agricultural landowners across Tamilnadu to create fertile,
            high-yield farmland through natural farming practices — generating long-term value for farmers,
            landowners and communities.
          </p>
          <div className="land-pills">
            {LAND_PILLS.map((pill) => (
              <div className="land-pill" key={pill}>{pill}</div>
            ))}
          </div>
          <div className="cta-btns center">
            <button className="btn btn-gold" onClick={() => go('contact')}>Partner With Us</button>
          </div>
        </div>
      </section>

      {/* SELL YOUR AGRICULTURAL LAND */}
      <section className="land-sell-section" id="sell">
        <div className="container">
          <div className="two-col">
            <div className="land-option-img">
              <img
                src={`${IMG}/land-morning.jpg`}
                alt="Premium aerial view of fertile agricultural land with land ownership concept"
                loading="lazy"
              />
            </div>
            <div>
              <div className="section-tag">We Purchase Agricultural Land</div>
              <h2 className="section-heading">Sell Your Agricultural Land With Confidence</h2>
              <h2 className="section-heading" style={{ marginTop: 14, fontSize: 15 }}>
                By partnering with local farmers, we create opportunities that directly benefit the local farming
                community.
              </h2>
              <p className="section-sub" style={{ marginTop: 14 }}>
                Own agricultural land that you no longer cultivate or manage? We offer a transparent and
                professional land acquisition process with fair market valuation.
              </p>
              <p className="section-sub" style={{ marginTop: 14 }}>
                Across Tamil Nadu, we acquire agricultural land and transform it into productive, sustainable
                farming assets through organic cultivation methods and soil restoration programs.
              </p>
              <ul className="land-benefits-list">
                {SELL_BENEFITS.map((b) => <li key={b}>{b}</li>)}
              </ul>
              <button className="btn btn-gold" onClick={() => go('contact')}>Sell Your Land</button>
            </div>
          </div>
        </div>
      </section>

      {/* LEASE YOUR LAND TO US */}
      <section className="land-lease-section" id="lease">
        <div className="container">
          <div className="two-col reverse">
            <div>
              <div className="section-tag">Lease Your Agricultural Land</div>
              <h2 className="section-heading">Lease Your Agricultural Land for Stable Income</h2>
              <h2 className="section-heading" style={{ marginTop: 14, fontSize: 15 }}>
                We engage local farmers in our operations, helping them achieve sustainable growth and improved
                livelihoods.
              </h2>
              <p className="section-sub" style={{ marginTop: 14 }}>
                Generate recurring income from your agricultural property without selling ownership.
              </p>
              <p className="section-sub" style={{ marginTop: 14 }}>
                We lease agricultural land, improve soil fertility, introduce organic farming practices, and
                cultivate high-value crops while ensuring long-term land sustainability.
              </p>
              <ul className="land-benefits-list">
                {LEASE_BENEFITS.map((b) => <li key={b}>{b}</li>)}
              </ul>
              <div className="land-process-cards">
                {LEASE_PROCESS.map((step, i) => (
                  <div className="land-process-card" key={step}>
                    <div className="land-process-card-num">{i + 1}</div>
                    <div className="land-process-card-title">{step}</div>
                  </div>
                ))}
              </div>
              <button className="btn btn-gold" onClick={() => go('contact')}>Lease Your Land</button>
            </div>
            <div className="land-option-img">
              <img
                src={`${IMG}/countryside-cloud-agriculture-organic-concept.jpg`}
                alt="Agricultural land actively cultivated by farmers"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LAND PARTNERSHIP PROGRAM */}
      <section className="land-partner-premium" id="partnership">
        <div className="land-partner-premium-bg">
          <img src="https://chedi.s3.us-east-1.amazonaws.com/Chedi/Gemini_Generated_Image_424mde424mde424m+-+Copy.png" alt="Landowners and farmers collaborating in agricultural fields" loading="lazy" />
        </div>
        <div className="container land-partner-premium-content">
          <div className="section-tag">FARMER&apos;S PARTNERSHIP</div>
          <p className="section-sub" style={{ marginTop: 14, fontSize: 30, color: 'gold' }}>
            Agri-land generates a stable income stream that is shared with participating farmers.
          </p>
          <h2 className="section-heading">Farmers Can Partner With Us and Grow Together</h2>
          <p className="section-sub" style={{ marginTop: 14 }}>Do you own underutilized agricultural land?</p>
          <p className="section-sub" style={{ marginTop: 14 }}>
            Our Land Partnership Program allows landowners to participate in agricultural development without
            managing day-to-day farming operations.
          </p>
          <p className="section-sub" style={{ marginTop: 14 }}>
            We invest in land improvement, organic cultivation, technology support, and market access while
            sharing the value generated from agricultural production.
          </p>

          <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(22px,3vw,32px)', color: '#fff', marginTop: 48, marginBottom: 8 }}>
            How Partnership Works
          </h3>
          <div className="land-partner-steps">
            {PARTNERSHIP_STEPS.map((step, i) => (
              <div className="land-partner-step" key={step.title}>
                <div className="land-partner-step-num">{i + 1}</div>
                <div className="land-partner-step-title">{step.title}</div>
                <div className="land-partner-step-desc">{step.desc}</div>
              </div>
            ))}
          </div>

          <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(20px,2.5vw,28px)', color: '#fff', marginBottom: 8 }}>
            Partnership Benefits
          </h3>
          <ul className="land-partner-benefits">
            {PARTNERSHIP_BENEFITS.map((b) => <li key={b}>{b}</li>)}
          </ul>
          <button className="btn btn-gold" onClick={() => go('contact')}>Become a Land Partner</button>
        </div>
      </section>

      {/* INCOME GENERATION STREAMS */}
      <section className="income-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-heading">Sustainable Revenue &amp; Impact Model</h2>
            <p className="section-sub white" style={{ margin: '14px auto 0', textAlign: 'center' }}>
              Each operational model generates multiple income streams, creating diversified revenue while
              maximizing farmer and community benefits.
            </p>
          </div>

          <div className="income-grid">
            {INCOME_STREAMS.map((stream, i) => (
              <div className={`income-card income-card--${stream.modifier}`} key={stream.title}>
                <div className="income-card-img">
                  <img src={stream.img} alt={stream.title} loading="lazy" />
                  <div className="income-card-overlay" />
                  <div className="income-card-num">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div className="income-card-body">
                  <h3 className="income-card-title">{stream.title}</h3>
                  {stream.subLead && <p className="income-card-lead income-card-lead--sub">{stream.subLead}</p>}
                  <p className="income-card-lead">{stream.lead}</p>
                  <ul className="income-card-list">
                    {stream.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </div>
            ))}

            <div className="income-card income-card--wide">
              <div className="income-card-img income-card-img--wide">
                <img
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80&auto=format&fit=crop"
                  alt="Additional Income Streams"
                  loading="lazy"
                />
                <div className="income-card-overlay" />
                <div className="income-card-num">05</div>
              </div>
              <div className="income-card-body income-card-body--wide">
                <div className="income-card-icon">💹</div>
                <h3 className="income-card-title">Additional Income Streams</h3>
                <p className="income-card-lead">Diversified revenue opportunities that compound overall returns.</p>
                <div className="income-extra-grid">
                  {ADDITIONAL_INCOME.map((item) => (
                    <div className="income-extra-item" key={item.text}>
                      <span className="income-extra-icon">{item.icon}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="income-stats">
            {INCOME_STATS.map((stat) => (
              <div className="income-stat" key={stat.label}>
                <div className="income-stat-num">{stat.num}</div>
                <div className="income-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section className="sustain-section">
        <div className="sustain-bg">
          <img
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80&auto=format&fit=crop"
            alt="Nature"
            loading="lazy"
          />
        </div>
        <div className="container sustain-content">
          <div className="section-tag">OUR PROMISE</div>
          <h2 className="section-heading" style={{ maxWidth: 600, margin: '0 auto' }}>
            Built for Nature,
            <br />
            Designed for Generations
          </h2>
          <p className="section-sub" style={{ maxWidth: 560, margin: '14px auto 0', textAlign: 'center' }}>
            We protect soil, reduce chemicals, support biodiversity, and build long-term farming systems that
            serve both people and planet.
          </p>
          <div className="sustain-icons">
            {SUSTAIN_ICONS.map((item) => (
              <div className="sustain-item" key={item.label}>
                <div className="sustain-icon">{item.icon}</div>
                <div className="sustain-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-banner-bg">
          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&q=80&auto=format&fit=crop"
            alt="Farm"
            loading="lazy"
          />
        </div>
        <div className="cta-banner-content">
          <h2 className="cta-banner-title">
            The Same Land Started
            <br />
            Giving More Income
          </h2>
          <p className="cta-banner-sub">Join with CHEDI Group — Finance. Peace. Happiness.</p>
          <div className="cta-btns center">
            <button className="btn btn-gold" onClick={() => go('contact')}>Join the Ecosystem</button>
          </div>
        </div>
      </section>
    </div>
  );
}
