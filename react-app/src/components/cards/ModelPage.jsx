import { useNavigate } from 'react-router-dom';
import { PAGE_TO_ROUTE } from '@/constants/routes';

export default function ModelPage({ data }) {
  const navigate = useNavigate();
  const go = (pageId) => navigate(PAGE_TO_ROUTE[pageId]);

  return (
    <div className="page active" id={`page-${data.id}`}>
      <section className="model-hero">
        <div className={`model-hero-bg ${data.bgClass}`}>
          <img src={data.heroImg} alt={data.heroAlt} loading="lazy" />
        </div>
        <div className="model-hero-content">
          <div>
            <div
              style={{
                display: 'inline-block',
                background: 'rgba(201,150,62,.2)',
                border: '1px solid rgba(201,150,62,.4)',
                color: 'var(--gold-light)',
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: 'uppercase',
                padding: '4px 12px',
                borderRadius: 50,
                marginBottom: 14,
              }}
            >
              {data.badge}
            </div>
            <h1
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: 'clamp(40px,5vw,64px)',
                fontWeight: 900,
                color: '#fff',
                lineHeight: 1.1,
                marginBottom: 12,
              }}
            >
              {data.titleLine1}
              <br />
              {data.titleLine2Prefix} <span style={{ color: 'var(--gold-light)' }}>{data.titleHighlight}</span>
            </h1>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,.65)', lineHeight: 1.72, marginBottom: 34, maxWidth: 460 }}>
              {data.heroDesc}
            </p>
            <div className="cta-btns">
              <button className="btn btn-gold" onClick={() => go('contact')}>Partner With Us</button>
              <button className="btn btn-outline">{data.secondaryCta}</button>
            </div>
          </div>
          <div className="model-steps-card">
            <div className="model-steps-label">{data.stepsLabel}</div>
            {data.steps.map((step, i) => (
              <div className="model-step" key={step}>
                <div className="model-step-num">{i + 1}</div>
                <div className="model-step-text">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-img-strip" style={{ background: 'var(--cream)' }}>
        <div className="model-img-strip">
          {data.stripImages.map((img) => (
            <div className="model-strip-img" key={img.src}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section className="section-benefits-pad" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">KEY BENEFITS</div>
            <h2 className="section-heading">Why Choose {data.badge}?</h2>
          </div>
          <div className="model-benefits-grid">
            {data.benefits.map((b) => (
              <div className="model-benefit-card" key={b.title}>
                <div className="model-benefit-icon-lg">{b.icon}</div>
                <div className="model-benefit-title">{b.title}</div>
                <div className="model-benefit-desc">{b.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 14 }}>
              BEST FOR
            </p>
            <div className="best-for-tags" style={{ justifyContent: 'center' }}>
              {data.bestFor.map((tag) => (
                <div className="best-for-tag" key={tag}>{tag}</div>
              ))}
            </div>
            <button
              className="btn btn-gold"
              style={{ marginTop: 32, fontSize: 15, padding: '16px 36px' }}
              onClick={() => go('contact')}
            >
              Join {data.badge} Today
            </button>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-banner-bg">
          <img src={data.ctaImg} alt={data.ctaAlt} loading="lazy" />
        </div>
        <div className="cta-banner-content">
          <h2 className="cta-banner-title">{data.ctaTitle}</h2>
          <p className="cta-banner-sub">{data.ctaSub}</p>
          <div className="cta-btns center">
            <button className="btn btn-gold" onClick={() => go('contact')}>Partner With Us</button>
          </div>
        </div>
      </section>
    </div>
  );
}
