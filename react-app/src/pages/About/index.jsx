import { useNavigate } from 'react-router-dom';
import { PAGE_TO_ROUTE } from '@/constants/routes';
import { S3_BASE } from '@/constants/media';
import {
  ABOUT_TAGS,
  MISSION_PILLARS,
  REVENUE_STREAMS,
  CARBON_POINTS,
  WHY_CARDS,
  VISION_IMPACT,
} from '@/constants/aboutContent';

const IMG = S3_BASE.replace('/extraimages', '/images');

export default function About() {
  const navigate = useNavigate();
  const go = (pageId) => navigate(PAGE_TO_ROUTE[pageId]);

  return (
    <div className="page active" id="page-about">
      <section className="about-hero">
        <div className="about-hero-bg">
          <img src={`${IMG}/2151294244.jpg`} alt="Farmland" loading="lazy" />
        </div>
        <div className="about-hero-content">
          <div className="section-tag">ABOUT CHEDI</div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(40px,6vw,68px)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: 18 }}>
            Rebuilding Agriculture
            <br />
            Through <span style={{ color: 'var(--gold-light)' }}>Sustainable Ecosystems</span>
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,.65)', lineHeight: 1.72, marginBottom: 34 }}>
            Smarter farming, healthier food systems, and a future where agriculture serves both people and planet.
          </p>
          <div className="cta-btns center">
            <button className="btn btn-gold" onClick={() => go('farmer')}>Explore Our Ecosystem</button>
            <button className="btn btn-outline" onClick={() => go('contact')}>Partner With Us</button>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-responsive-pad" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="two-col">
            <div>
              <div className="section-tag">WHO WE ARE</div>
              <h2 className="section-heading">
                Building the Future
                <br />
                of Agriculture
              </h2>
              <p className="section-sub" style={{ marginTop: 14 }}>
                CHEDI is building an integrated agricultural ecosystem designed to restore land, empower farmers,
                improve food quality, and create long-term sustainable agricultural wealth.
              </p>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontSize: 22, color: 'var(--green-mid)', marginTop: 20, lineHeight: 1.5 }}>
                &quot;We are not building farms.
                <br />
                We are building the future of agriculture.&quot;
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9, marginTop: 26 }}>
                {ABOUT_TAGS.map((tag) => (
                  <div className="best-for-tag" key={tag}>{tag}</div>
                ))}
              </div>
            </div>
            <div className="responsive-img-card">
              <img src={`${IMG}/2151969802.jpg`} alt="CHEDI farmers" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mission-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">OUR MISSION</div>
            <h2 className="section-heading">
              To Transform Agriculture
              <br />
              Into a Regenerative Ecosystem
            </h2>
          </div>
          <div className="mission-pillars">
            {MISSION_PILLARS.map((pillar) => (
              <div className="pillar-card" key={pillar.title}>
                <div className="pillar-card-img">
                  <img src={pillar.img} alt={pillar.alt} loading="lazy" />
                </div>
                <div className="pillar-card-body">
                  <div className="pillar-icon">{pillar.icon}</div>
                  <div className="pillar-title">{pillar.title}</div>
                  <div className="pillar-desc">{pillar.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue */}
      <section className="revenue-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">BUSINESS MODEL</div>
            <h2 className="section-heading white">How CHEDI Creates Revenue</h2>
            <p className="section-sub white">Multiple revenue streams designed for scalable agricultural growth.</p>
          </div>
          <div className="revenue-grid">
            {REVENUE_STREAMS.map((rev) => (
              <div className="revenue-card" key={rev.title}>
                <div className="revenue-card-img">
                  <img src={rev.img} alt={rev.alt} loading="lazy" />
                </div>
                <div className="revenue-card-body">
                  <div className="revenue-title">{rev.title}</div>
                  <div className="revenue-desc">{rev.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carbon */}
      <section className="carbon-section">
        <div className="container">
          <div className="two-col">
            <div>
              <div className="section-tag">ENVIRONMENTAL IMPACT</div>
              <h2 className="section-heading">
                Carbon Credit &amp;
                <br />
                Environmental Value
              </h2>
              <p className="section-sub" style={{ marginTop: 14 }}>
                By restoring soil health, reducing chemical dependency, and implementing regenerative farming, CHEDI
                contributes to carbon sequestration and environmental sustainability.
              </p>
              <div className="carbon-points">
                {CARBON_POINTS.map((point) => (
                  <div className="carbon-point" key={point.title}>
                    <h4>{point.title}</h4>
                    <p>{point.desc}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontSize: 18, color: 'var(--green-mid)', marginTop: 22 }}>
                &quot;Environmental sustainability is not a side benefit — it is part of our business model.&quot;
              </p>
            </div>
            <div className="carbon-img">
              <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80&auto=format&fit=crop" alt="Nature environment" loading="lazy" />
              <div className="carbon-img-badge">
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, color: 'var(--gold-light)' }}>Carbon Positive</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,.6)', marginTop: 3 }}>Regenerative agriculture</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why CHEDI */}
      <section className="why-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">WHY WE EXIST</div>
            <h2 className="section-heading white">Why We Built CHEDI</h2>
            <p className="section-sub white">
              Agriculture today faces major challenges. CHEDI exists to solve them at ecosystem scale.
            </p>
          </div>
          <div className="why-grid">
            {WHY_CARDS.map((card) => (
              <div className="why-card" key={card.title}>
                <div className="why-card-img">
                  <img src={card.img} alt={card.alt} loading="lazy" />
                  <div className="why-card-img-overlay" />
                </div>
                <div className="why-card-body">
                  <div className="why-card-title">{card.title}</div>
                  <div className="why-card-desc">{card.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="impact-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">OUR VISION</div>
            <h2 className="section-heading white">
              Building Long-Term
              <br />
              Agricultural Transformation
            </h2>
          </div>
          <div className="impact-grid">
            {VISION_IMPACT.map((stat) => (
              <div className="impact-card" key={stat.label}>
                <div className="impact-icon">{stat.icon}</div>
                <div className="impact-num">{stat.num}</div>
                <div className="impact-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-banner-bg">
          <img src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1200&q=80&auto=format&fit=crop" alt="Farmers" loading="lazy" />
        </div>
        <div className="cta-banner-content">
          <h2 className="cta-banner-title">
            Partner in the Future
            <br />
            of Agriculture
          </h2>
          <p className="cta-banner-sub">Join us in building a healthier, more sustainable agricultural ecosystem.</p>
          <div className="cta-btns center">
            <button className="btn btn-gold" onClick={() => go('contact')}>Partner With Us</button>
            <button className="btn btn-outline" onClick={() => go('contact')}>Contact Our Team</button>
          </div>
        </div>
      </section>
    </div>
  );
}
