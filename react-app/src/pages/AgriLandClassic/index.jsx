import { useRef, useState } from 'react';
import useRevealObserver from '@/hooks/useRevealObserver';
import useCounterObserver from '@/hooks/useCounterObserver';
import useSectionTabs from './useSectionTabs';
import {
  HERO_STATS,
  SELL_BADGES,
  SELL_BENEFITS,
  SELL_STEPS,
  SELL_STATS,
  LEASE_TYPES,
  LEASE_BENEFITS,
  LEASE_TERMS,
  PARTNER_MODELS,
  PARTNER_STEPS,
  ELIGIBILITY_ITEMS,
  ESTIMATED_RETURNS,
  VALUE_FEATURES,
  PROCESS_STEPS,
  IMPACT_STATS,
  WHY_CARDS,
  CONTACT_ITEMS,
} from '@/constants/agriLandClassicContent';
import './AgriLandClassic.css';

export default function AgriLandClassic() {
  const containerRef = useRef(null);
  useRevealObserver(containerRef, '.reveal', { threshold: 0.08, rootMargin: '0px' });
  useCounterObserver(containerRef, '.counter', { duration: 1800, threshold: 0.5 });
  const activeTab = useSectionTabs();

  const [enquirySent, setEnquirySent] = useState(false);
  const submitEnquiry = (e) => {
    e.preventDefault();
    setEnquirySent(true);
    setTimeout(() => setEnquirySent(false), 3000);
  };

  return (
    <div className="agriland-classic-page" ref={containerRef}>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bg" />
        <div className="hero-lines" />
        <div className="hero-content">
          <div className="hero-eyebrow">Agricultural Excellence Since 2015</div>
          <h1>Transforming Agricultural Land into <em>Sustainable Wealth</em></h1>
          <p className="hero-sub">
            We acquire, lease, and partner with agricultural landowners across Tamil Nadu to create fertile,
            high-yield farmland through natural farming practices — generating long-term value for farmers,
            landowners, and communities.
          </p>
          <div className="hero-btns">
            <a href="#sell" className="btn-primary">Sell Your Land</a>
            <a href="#lease" className="btn-outline">Lease Your Land</a>
            <a href="#partnership" className="btn-outline">Partner With Us</a>
          </div>
        </div>
        <div className="hero-stats">
          {HERO_STATS.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <span className="hero-stat-num">{stat.num}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION TAB NAVIGATION */}
      <div className="section-tab-banner">
        <a href="#sell" className={`section-tab section-tab-sell${activeTab === 'sell' ? ' active' : ''}`}>
          <span className="tab-num">01</span>
          <span>💼 Sell Your Land</span>
        </a>
        <a href="#lease" className={`section-tab section-tab-lease${activeTab === 'lease' ? ' active' : ''}`}>
          <span className="tab-num">02</span>
          <span>📋 Lease Your Land</span>
        </a>
        <a href="#partnership" className={`section-tab section-tab-partner${activeTab === 'partnership' ? ' active' : ''}`}>
          <span className="tab-num">03</span>
          <span>🤝 Land Partnership</span>
        </a>
      </div>

      {/* SECTION 1: SELL YOUR LAND */}
      <section className="sell-section" id="sell">
        <div className="section-anchor-label sell-label reveal">💼 Section 01 — Sell Your Land</div>

        <div className="sell-hero-band reveal">
          <div>
            <h2>Get the Best Price for Your <em>Agricultural Land</em></h2>
            <p>
              We offer fair, market-linked pricing for agricultural land across Tamil Nadu. No hidden deductions, no
              delays — just a transparent process that puts full value in your hands.
            </p>
          </div>
          <div className="sell-badge-stack">
            {SELL_BADGES.map((badge) => (
              <div className="sell-badge" key={badge.label}>
                <div className="sell-badge-icon">{badge.icon}</div>
                <div>
                  <div className="sell-badge-label">{badge.label}</div>
                  <div className="sell-badge-val">{badge.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sell-grid">
          <div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", color: 'var(--green-deep)', fontSize: '1.25rem', marginBottom: 24 }}>
              Why Sell Through Agri-Land?
            </h3>
            <ul className="benefit-list">
              {SELL_BENEFITS.map((b, i) => (
                <li className="benefit-item reveal" style={{ transitionDelay: `${i * 0.05}s` }} key={b.title}>
                  <div className="benefit-icon">{b.icon}</div>
                  <div>
                    <div className="benefit-title">{b.title}</div>
                    <div className="benefit-desc">{b.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal" style={{ transitionDelay: '.1s' }}>
            <div className="sell-steps-title">How the Sale Process Works</div>
            <div className="sell-steps">
              {SELL_STEPS.map((step, i) => (
                <div className="sell-step" key={step.title}>
                  <div className="sell-step-circle">{String(i + 1).padStart(2, '0')}</div>
                  <div className="sell-step-text">
                    <strong>{step.title}</strong>
                    {step.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="sell-price-strip reveal">
          {SELL_STATS.map((stat) => (
            <div className="sell-price-item" key={stat.label}>
              <span className="sell-price-num">{stat.num}</span>
              <div className="sell-price-label">{stat.label}</div>
            </div>
          ))}
          <a href="#contact" className="sell-cta-btn">Start the Process →</a>
        </div>
      </section>

      {/* SECTION 2: LEASE YOUR LAND */}
      <section className="lease-section" id="lease">
        <div className="section-anchor-label lease-label reveal">📋 Section 02 — Lease Your Land</div>

        <div className="lease-hero-band reveal">
          <div>
            <h2>Earn Reliable Income — Without <em>Giving Up</em> Your Land</h2>
            <p>
              Lease your agricultural land to Agri-Land and receive a consistent annual income while we handle all
              farming operations, soil care, and management — fully at our cost.
            </p>
          </div>
          <div className="lease-income-card">
            <div className="lease-income-label">Avg. Annual Return</div>
            <div className="lease-income-num">₹18K–₹35K</div>
            <div className="lease-income-sub">per acre / year</div>
          </div>
        </div>

        <div className="lease-types reveal">
          {LEASE_TYPES.map((type) => (
            <div className="lease-type-card" key={type.title}>
              <div className="lease-type-icon">{type.icon}</div>
              <div className="lease-type-title">{type.title}</div>
              <p className="lease-type-text">{type.text}</p>
              <span className="lease-type-rate">{type.rate}</span>
            </div>
          ))}
        </div>

        <div className="lease-grid">
          <div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", color: 'var(--earth)', fontSize: '1.25rem', marginBottom: 24 }}>
              What Lease Landowners Get
            </h3>
            <ul className="lease-benefit-list">
              {LEASE_BENEFITS.map((b, i) => (
                <li className="lease-benefit reveal" style={{ transitionDelay: `${i * 0.05}s` }} key={b.title}>
                  <div className="lease-benefit-icon">{b.icon}</div>
                  <div>
                    <div className="lease-benefit-title">{b.title}</div>
                    <div className="lease-benefit-desc">{b.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal" style={{ transitionDelay: '.1s' }}>
            <div className="lease-terms-box">
              <div className="lease-terms-title">Standard Lease Terms at a Glance</div>
              {LEASE_TERMS.map((term) => (
                <div className="lease-term-row" key={term.key}>
                  <span className="lease-term-key">{term.key}</span>
                  <span className="lease-term-val">{term.val}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 24, background: 'var(--earth-pale)', borderRadius: 12, padding: '20px 22px', borderLeft: '3px solid var(--earth)' }}>
              <p style={{ fontSize: '.85rem', color: 'var(--earth)', fontWeight: 600, marginBottom: 6 }}>🌿 What happens to your land?</p>
              <p style={{ fontSize: '.8rem', lineHeight: 1.65, color: 'var(--text-light)' }}>
                We cultivate organic crops using natural farming methods — no chemical fertilizers or pesticides.
                After the lease period, your land is returned with improved soil health, better water retention, and
                higher productivity value.
              </p>
            </div>
          </div>
        </div>

        <div className="lease-cta-strip reveal">
          <div>
            <h3>Ready to Start Earning from Your Land?</h3>
            <p>Our team will visit your land, assess it, and provide a lease offer within 5 working days.</p>
          </div>
          <a href="#contact" className="lease-cta-btn">Get a Lease Quote →</a>
        </div>
      </section>

      {/* SECTION 3: LAND PARTNERSHIP */}
      <section className="partner-section" id="partnership">
        <div className="section-anchor-label partner-label reveal">🤝 Section 03 — Land Partnership</div>

        <div className="partner-hero-band reveal">
          <div>
            <h2>Grow Together — Share the Land, <em>Share the Profits</em></h2>
            <p>
              A Land Partnership is more than a lease — it&apos;s a joint venture. You contribute your land, we
              invest in farming, inputs, and expertise. Together we cultivate high-value crops and share the profits
              equitably.
            </p>
          </div>
          <div className="partner-share-card">
            <div className="partner-share-label">Landowner Share</div>
            <div className="partner-share-bar"><div className="partner-share-fill" style={{ width: '40%' }} /></div>
            <div className="partner-share-pct">35–50% of Net Profits</div>
            <div style={{ marginTop: 8 }}>
              <div className="partner-share-label">Agri-Land Share</div>
              <div className="partner-share-bar"><div className="partner-share-fill" style={{ width: '60%' }} /></div>
              <div className="partner-share-pct">50–65% of Net Profits</div>
            </div>
          </div>
        </div>

        <div className="section-header reveal">
          <div className="section-eyebrow">Partnership Models</div>
          <h2 className="section-title">Choose Your <em>Partnership Type</em></h2>
        </div>
        <div className="partner-models">
          {PARTNER_MODELS.map((model, i) => (
            <div className="partner-model-card reveal" style={{ transitionDelay: `${i * 0.1}s` }} key={model.title}>
              <div className="partner-model-top" style={{ background: model.bg }}>{model.top}</div>
              <div className="partner-model-body">
                <div className="partner-model-tag">{model.tag}</div>
                <div className="partner-model-title">{model.title}</div>
                <p className="partner-model-text">{model.text}</p>
                <div className="partner-model-split">
                  {model.pills.map((pill) => <span className="partner-model-pill" key={pill}>{pill}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="partner-grid">
          <div className="reveal">
            <h3 style={{ fontFamily: "'Playfair Display',serif", color: 'var(--blue-deep)', fontSize: '1.25rem', marginBottom: 24 }}>
              How a Partnership Works
            </h3>
            <div className="partner-steps">
              {PARTNER_STEPS.map((step, i) => (
                <div className="partner-step" key={step.title}>
                  <div className="partner-step-left">
                    <div className="partner-step-circle">{i + 1}</div>
                    {i < PARTNER_STEPS.length - 1 && <div className="partner-step-line" />}
                  </div>
                  <div className="partner-step-content">
                    <div className="partner-step-title">{step.title}</div>
                    <div className="partner-step-desc">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '.15s' }}>
            <div className="partner-eligibility">
              <div className="partner-eligibility-title">Is Your Land Eligible for Partnership?</div>
              {ELIGIBILITY_ITEMS.map((item) => (
                <div className="eligibility-item" key={item}>{item}</div>
              ))}
            </div>

            <div style={{ marginTop: 24, background: 'var(--blue-pale)', borderRadius: 12, padding: 24, borderLeft: '3px solid var(--blue-mid)' }}>
              <p style={{ fontSize: '.88rem', fontWeight: 600, color: 'var(--blue-deep)', marginBottom: 10 }}>📊 Transparency Commitment</p>
              <p style={{ fontSize: '.82rem', lineHeight: 1.7, color: 'var(--text-light)' }}>
                Every partner receives a quarterly crop report with actual input costs, yield quantities, sale
                prices, and a detailed profit-sharing statement — accessible anytime. No black box farming.
              </p>
            </div>

            <div style={{ marginTop: 16, background: 'var(--blue-pale)', borderRadius: 12, padding: 24, borderLeft: '3px solid var(--blue-mid)' }}>
              <p style={{ fontSize: '.88rem', fontWeight: 600, color: 'var(--blue-deep)', marginBottom: 10 }}>🌾 Estimated Returns (Illustration)</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {ESTIMATED_RETURNS.map((row) => (
                  <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.82rem', color: 'var(--text-mid)', padding: '6px 0', borderBottom: '1px solid rgba(13,71,161,0.1)' }}>
                    <span>{row.label}</span>
                    <span style={{ fontWeight: 600, color: 'var(--blue-deep)' }}>{row.value}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '.72rem', color: 'var(--text-light)', marginTop: 10 }}>
                *Illustrative estimates based on past projects. Actual returns depend on land quality, crop
                selection, and market conditions.
              </p>
            </div>
          </div>
        </div>

        <div className="partner-cta-strip reveal">
          <div>
            <h3>Let&apos;s Build Something That Grows Together</h3>
            <p>Submit your land details and we&apos;ll prepare a custom partnership proposal within 7 days.</p>
          </div>
          <a href="#contact" className="partner-cta-btn">Explore Partnership →</a>
        </div>
      </section>

      {/* HOW WE CREATE VALUE */}
      <section style={{ background: 'var(--cream)', padding: '96px 5%' }} id="value">
        <div className="split">
          <div className="split-img-wrap reveal">
            <div className="split-img-placeholder" style={{ background: 'linear-gradient(135deg,#1B5E20,#43A047)' }}>🌿</div>
            <div className="split-img-badge">
              <span>🏆</span>
              <div>
                <strong>Certified Organic</strong>
                <span style={{ fontSize: '.75rem', color: 'var(--text-light)' }}>All our cultivation</span>
              </div>
            </div>
          </div>
          <div className="split-content reveal" style={{ transitionDelay: '.15s' }}>
            <div className="section-eyebrow">Value Creation</div>
            <h2 className="section-title">From Land to <em>Prosperity</em></h2>
            <p style={{ marginTop: 16, fontSize: '.95rem', lineHeight: 1.75, color: 'var(--text-light)' }}>
              Across Tamil Nadu, we identify agricultural land with strong potential and transform it through proven
              natural methods that restore the land&apos;s vitality for the long term.
            </p>
            <ul className="feature-list">
              {VALUE_FEATURES.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* CULTIVATION PROCESS */}
      <section className="process-section" id="process">
        <div className="section-header centered reveal">
          <div className="section-eyebrow">Step by Step</div>
          <h2 className="section-title" style={{ color: '#fff' }}>
            Our Sustainable <em style={{ color: 'var(--gold-light)' }}>Farming Journey</em>
          </h2>
        </div>
        <div className="process-grid reveal">
          {PROCESS_STEPS.map((step) => (
            <div className="process-step" key={step.title}>
              <span className="step-num">{step.num}</span>
              <div className="step-icon">{step.icon}</div>
              <div className="step-title">{step.title}</div>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="stats-section" id="impact">
        <div className="section-header centered reveal">
          <div className="section-eyebrow">Our Footprint</div>
          <h2 className="section-title">Building Agricultural Value <em>Across Tamil Nadu</em></h2>
        </div>
        <div className="stats-grid reveal">
          {IMPACT_STATS.map((stat) => (
            <div className="stat-box" key={stat.label}>
              <div className="stat-num">
                <span className="counter" data-target={stat.target} data-suffix={stat.suffix}>0</span>
                {stat.suffix && <span className="stat-suffix">{stat.suffix}</span>}
              </div>
              <div className="stat-divider" />
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="why-section" id="why-us">
        <div className="section-header centered reveal">
          <div className="section-eyebrow">Our Promise</div>
          <h2 className="section-title">Why Landowners <em>Trust Us</em></h2>
        </div>
        <div className="why-grid">
          {WHY_CARDS.map((card, i) => (
            <div className="why-card reveal" style={{ transitionDelay: `${i * 0.05}s` }} key={card.title}>
              <div className="why-icon">{card.icon}</div>
              <div>
                <div className="why-title">{card.title}</div>
                <p className="why-text">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <p className="cta-eyebrow">Ready to Begin?</p>
        <h2 className="cta-title">
          Let&apos;s Build Sustainable Agricultural
          <br />
          Value Together
        </h2>
        <p className="cta-text">
          Whether you want to sell, lease, or partner your agricultural land, our team is ready to help transform it
          into a productive, sustainable opportunity.
        </p>
        <div className="cta-btns">
          <a href="#sell" className="btn-gold">Sell Your Land</a>
          <a href="#lease" className="btn-white-outline">Lease Your Land</a>
          <a href="#partnership" className="btn-white-outline">Become a Land Partner</a>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <h3 style={{ fontFamily: "'Playfair Display',serif", color: '#fff', marginBottom: 24, fontSize: '1.3rem' }}>Contact Our Team</h3>
            {CONTACT_ITEMS.map((item) => (
              <div className="contact-item" key={item.label}>
                <div className="contact-icon">{item.icon}</div>
                <div>
                  <div className="contact-label">{item.label}</div>
                  <div className="contact-value">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
          <form className="contact-form" onSubmit={submitEnquiry}>
            <h3 style={{ fontFamily: "'Playfair Display',serif", color: '#fff', marginBottom: 24, fontSize: '1.3rem' }}>Send a Message</h3>
            <div className="form-group"><input className="form-input" type="text" placeholder="Your Name" /></div>
            <div className="form-group"><input className="form-input" type="tel" placeholder="Phone Number" /></div>
            <div className="form-group"><input className="form-input" type="email" placeholder="Email Address" /></div>
            <div className="form-group">
              <select className="form-input" style={{ appearance: 'none', cursor: 'pointer' }} defaultValue="">
                <option value="" disabled>I want to — Sell / Lease / Partner</option>
                <option value="sell">Sell My Land</option>
                <option value="lease">Lease My Land</option>
                <option value="partner">Land Partnership</option>
              </select>
            </div>
            <div className="form-group">
              <textarea className="form-textarea" placeholder="Tell us about your land (location, size, type)…" />
            </div>
            <button
              type="submit"
              className="form-submit"
              style={enquirySent ? { background: '#2E7D32', color: '#fff' } : undefined}
            >
              {enquirySent ? '✓ Enquiry Sent!' : 'Send Enquiry →'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
