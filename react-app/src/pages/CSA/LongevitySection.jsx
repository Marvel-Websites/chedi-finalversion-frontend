import useLongevityParticles from '@/hooks/useLongevityParticles';
import {
  LNG_PILLS,
  LNG_HERO_IMAGES,
  LNG_CARE_CARDS,
  LNG_HOLISTIC_CARDS,
  LNG_PILLARS,
  LNG_IMPACT_STAGES,
  LNG_TIERS,
} from '@/constants/longevityContent';

export default function LongevitySection() {
  const particlesRef = useLongevityParticles(30);

  return (
    <div id="longevity-section" className="longevity-page">
      {/* HERO */}
      <div className="lng-hero">
        <div className="lng-hero-particles" id="lngParticles" ref={particlesRef} />
        <div className="lng-hero-content">
          <div className="lng-hero-tag">Life is All About Health</div>
          <h1 className="lng-hero-title">
            <span className="lng-accent">Longevity</span>
            <br />
            <span className="gold">Life</span>
          </h1>
          <p className="lng-hero-subtitle">Live Longer, Live Better</p>
          <div className="lng-hero-pills">
            {LNG_PILLS.map((pill) => (
              <div className="lng-pill" key={pill.title}>
                <div className="lng-pill-title">{pill.title}</div>
                <div className="lng-pill-sub">{pill.sub}</div>
              </div>
            ))}
          </div>
          <div className="lng-hero-img-row">
            {LNG_HERO_IMAGES.map((item) => (
              <div className="lng-hero-img-card" key={item.label}>
                <img src={item.img} alt={item.alt} />
                <div className="lng-hero-img-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WE CARE ABOUT */}
      <div className="lng-section lng-care">
        <div className="lng-section-inner">
          <div className="lng-header-block">
            <span className="lng-section-tag">OUR COMMITMENT</span>
            <h2 className="lng-section-title">We Care About</h2>
            <p className="lng-section-sub centered">Every stage of life. Every generation. Every dream of living well.</p>
          </div>
          <div className="lng-care-grid">
            {LNG_CARE_CARDS.map((card) => (
              <div className="lng-care-card" key={card.name}>
                <div className="lng-care-img">
                  <img src={card.img} alt={card.alt} />
                </div>
                <div className="lng-care-name">{card.name}</div>
                <div className="lng-care-desc">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HOLISTIC SOLUTIONS */}
      <div className="lng-section lng-holistic">
        <div className="lng-section-inner">
          <div className="lng-header-block">
            <span className="lng-section-tag">INTEGRATED APPROACH</span>
            <h2 className="lng-section-title">Our Holistic Solutions</h2>
            <p className="lng-section-sub centered">Four pillars of complete wellness — body, mind, nutrition, and vitality.</p>
          </div>
          <div className="lng-holistic-grid">
            {LNG_HOLISTIC_CARDS.map((card) => (
              <div className="lng-holistic-card" key={card.title}>
                <img src={card.img} alt={card.alt} />
                <div className="lng-holistic-overlay" />
                <div className="lng-holistic-body">
                  <div className="lng-holistic-title">{card.title}</div>
                  <div className="lng-holistic-sub">{card.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NUTRITION SECTION */}
      <div className="lng-section lng-nutrition">
        <div className="lng-section-inner">
          <div className="lng-nutrition-hero">
            <div>
              <span className="lng-section-tag">THE FOUNDATION</span>
              <h2 className="lng-nutrition-quote">
                Nutrition is where <span className="highlight">True Wellness</span> Begins.
              </h2>
              <p className="lng-nutrition-tagline">Longevity Through Nutrition</p>
              <p className="lng-body-text">
                What you feed today defines how long you live tomorrow. Fix the Root Cause. Fuel a Healthier You.
                Nutritional deficiencies, key nutrients you need, and top food sources to fix them.
              </p>
              <p className="lng-emphasis">What you feed today defines how long you live tomorrow.</p>
            </div>
            <div className="lng-nutrition-img">
              <img src="https://chediwebsite.s3.us-east-1.amazonaws.com/extraimages/2151244686.jpg" alt="Nutrition and wellness" />
            </div>
          </div>

          <div className="lng-pillars">
            {LNG_PILLARS.map((pillar) => (
              <div className={`lng-pillar-card ${pillar.modifier}`} key={pillar.title}>
                <div className="lng-pillar-img">
                  <img src={pillar.img} alt={pillar.alt} />
                </div>
                <div className="lng-pillar-body">
                  <div className="lng-pillar-title">{pillar.title}</div>
                  <ul className="lng-pillar-list">
                    {pillar.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="lng-header-block">
            <h3 className="lng-impact-heading">Impact Across Every Stage of Life</h3>
          </div>
          <div className="lng-impact-row">
            {LNG_IMPACT_STAGES.map((stage) => (
              <div className="lng-impact-card" key={stage.name}>
                <div className="lng-impact-img">
                  <img src={stage.img} alt={stage.alt} />
                </div>
                <div className="lng-impact-body">
                  <div className="lng-impact-label">{stage.label}</div>
                  <div className="lng-impact-name">{stage.name}</div>
                  <div className="lng-impact-items">
                    {stage.items.map((item) => (
                      <div className="lng-impact-item" key={item}>{item}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DEFICIENCY TIERS */}
      <div className="lng-section lng-deficiency">
        <div className="lng-section-inner">
          <div className="lng-header-block spaced">
            <span className="lng-section-tag">ROOT CAUSE APPROACH</span>
            <h2 className="lng-section-title">Fix the Root Cause. Fuel a Healthier You.</h2>
            <p className="lng-section-sub centered">Nutritional deficiencies, key nutrients you need, and top food sources to fix them.</p>
          </div>

          <div className="lng-tiers">
            {LNG_TIERS.map((tier) => (
              <div key={tier.label}>
                <div className="lng-tier-header">
                  <span className={`lng-tier-badge ${tier.badge}`}>{tier.label}</span>
                  <span className="lng-tier-title">{tier.title}</span>
                  <div className="lng-tier-line" />
                </div>
                <div className={`lng-conditions-grid ${tier.gridSize}`}>
                  {tier.conditions.map((c) => (
                    <div className="lng-condition-card" key={c.title}>
                      <div className="lng-condition-img">
                        <img src={c.img} alt={c.alt} />
                        <div className="lng-condition-num">{c.num}</div>
                      </div>
                      <div className="lng-condition-body">
                        <div className="lng-condition-title">{c.title}</div>
                        <div className="lng-condition-row">
                          <span className="lng-condition-key">Deficiency:</span>
                          <span className="lng-condition-val">{c.deficiency}</span>
                        </div>
                        <div className="lng-condition-row">
                          <span className="lng-condition-key">Need:</span>
                          <span className="lng-condition-val">{c.need}</span>
                        </div>
                        <div className="lng-condition-eat">
                          <div className="lng-condition-eat-label">🌿 Eat</div>
                          {c.eat}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CLOSING */}
      <div className="lng-closing">
        <div className="lng-closing-content">
          <h2 className="lng-closing-title">
            What you feed today defines
            <br />
            how long you <span className="lng-accent-inline">live tomorrow.</span>
          </h2>
          <p className="lng-closing-sub">Fix the Root Cause. Fuel a Healthier You.</p>
          <div className="lng-closing-note">
            ⚠️ Food choices support overall well-being. For specific medical conditions, consult a healthcare
            professional.
          </div>
        </div>
      </div>
    </div>
  );
}
