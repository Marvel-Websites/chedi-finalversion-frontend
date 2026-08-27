import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { PAGE_TO_ROUTE } from '@/constants/routes';
import { S3_BASE } from '@/constants/media';
import {
  FAMILY_CHECKLIST,
  LEARNING_CHIPS,
  TRAINING_CARDS,
  TECH_TOOLS,
  SUPPORT_CARDS,
  JOURNEY_TIMELINE,
  CONTRACT_BENEFITS,
  ORGANIC_ADVANTAGES,
  MARKET_CHANNELS,
} from '@/constants/farmerGrowthContent';
import useRevealObserver from '@/hooks/useRevealObserver';
import useParallax from '@/hooks/useParallax';

const IMG = S3_BASE.replace('/extraimages', '/images');

export default function FarmerGrowth() {
  const navigate = useNavigate();
  const go = (pageId) => navigate(PAGE_TO_ROUTE[pageId]);
  const containerRef = useRef(null);
  useRevealObserver(containerRef, '.fg-reveal', { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  const parallaxRef = useParallax({ speed: 0.25, max: 120 });

  return (
    <div className="page active" id="page-farmer" ref={containerRef}>
      {/* FARMER GROWTH HERO */}
      <section className="fg-hero" aria-label="Farmer Growth Hero">
        <div className="fg-hero-bg fg-hero-parallax" ref={parallaxRef}>
          <img src="https://d3epw9xjpezjqk.cloudfront.net/Gemini_Generated_Image_bbg2wgbbg2wgbbg2.png" alt="Happy farmers working in lush green organic fields" loading="eager" />
        </div>
        <div className="fg-hero-overlay" />
        <div className="fg-hero-content fg-reveal">
          <div className="fg-hero-tag">Farmer growth</div>
          <br />
          <div className="fg-hero-tag">We Invite Farmers To Join Our Family</div>
          <h1 className="fg-hero-title">
            Organic Farming–Technology Support
            <br />
            Higher Yielding–Better Pricing.
          </h1>
          <p className="fg-hero-sub">
            Join our organic farming ecosystem and gain access to technology, premium inputs, expert guidance,
            and better market opportunities designed to increase productivity and income.
          </p>
          <div className="cta-btns fg-hero-btns">
            <button className="btn btn-gold fg-btn-animated" onClick={() => go('contact')}>Become a Member</button>
            <button className="btn btn-outline fg-btn-animated" onClick={() => go('contact')}>Contact Our Team</button>
          </div>
        </div>
      </section>

      {/* JOIN OUR ORGANIC FARMING FAMILY */}
      <section className="fg-family" aria-labelledby="fg-family-heading">
        <div className="container">
          <div className="two-col fg-family-grid">
            <div className="fg-family-img fg-reveal">
              <img src={`${IMG}/farmer-walking-through-field.jpg`} alt="Farmer community training in organic agriculture" loading="lazy" />
            </div>
            <div className="fg-reveal">
              <div className="section-tag">Our Network</div>
              <h2 className="section-heading" id="fg-family-heading">Become Part of Our Organic Farming Family</h2>
              <p className="section-sub" style={{ marginTop: 14, maxWidth: '100%' }}>
                We invite farmers across Tamil Nadu to become members of our growing agricultural network.
              </p>
              <p className="fg-family-intro">As a member, farmers gain access to:</p>
              <ul className="fg-checklist">
                {FAMILY_CHECKLIST.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <p className="fg-family-closing">Together, we create a sustainable and profitable farming ecosystem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LEARNING */}
      <section className="learning-section">
        <div className="container">
          <div className="learning-inner">
            <div>
              <div className="section-tag">SMART LEARNING</div>
              <h2 className="section-heading white">
                Smart Learning.
                <br />
                Made Simple.
              </h2>
              <p className="section-sub white" style={{ marginTop: 14 }}>
                Easy-to-use tools and training designed for every farmer — from beginner to experienced grower.
              </p>
              <div className="feature-chips">
                {LEARNING_CHIPS.map((chip) => (
                  <div className="feature-chip" key={chip}>
                    <span className="dot" />
                    {chip}
                  </div>
                ))}
              </div>
            </div>
            <div className="app-img">
              <img src={`${IMG}/8713.jpg`} alt="Farm training" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section className="training-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">TRAINING PROGRAMS</div>
            <h2 className="section-heading">
              Hands-On Training That
              <br />
              Builds Confidence
            </h2>
            <p className="section-sub">Real learning. Real experience. Real growth.</p>
          </div>
          <div className="training-cards">
            {TRAINING_CARDS.map((card) => (
              <div className="training-card" key={card.title}>
                <div className="training-card-img">
                  <img src={card.img} alt={card.alt} loading="lazy" />
                </div>
                <div className="training-card-body">
                  <div className="training-card-title">{card.title}</div>
                  <div className="training-card-desc">{card.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH TOOLS */}
      <section className="tech-tools-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">FARMER TECHNOLOGY</div>
            <h2 className="section-heading">
              Technology That
              <br />
              Works for Farmers
            </h2>
            <p className="section-sub">From soil to harvest — we support every stage with modern agricultural intelligence.</p>
          </div>
          <div className="tech-tools-grid">
            {TECH_TOOLS.map((tool) => (
              <div className="tool-card" key={tool.title}>
                <div className="tool-card-img">
                  <img src={tool.img} alt={tool.alt} loading="lazy" />
                </div>
                <div className="tool-card-body">
                  <div className="tool-card-title">{tool.title}</div>
                  <div className="tool-card-desc">{tool.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE PROVIDE */}
      <section className="fg-support" id="fg-benefits" aria-labelledby="fg-support-heading">
        <div className="container">
          <div className="section-header fg-reveal">
            <div className="section-tag">Farmer Support</div>
            <h2 className="section-heading" id="fg-support-heading">Complete Support for Every Farmer</h2>
          </div>
          <div className="fg-support-grid">
            {SUPPORT_CARDS.map((card) => (
              <article className="fg-support-card fg-reveal" key={card.title}>
                <div className="fg-support-card-img">
                  <img src={card.img} alt={card.alt} loading="lazy" />
                </div>
                <div className="fg-support-card-body">
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FARMER JOURNEY TIMELINE */}
      <section className="fg-timeline-section" aria-labelledby="fg-timeline-heading">
        <div className="container">
          <div className="section-header fg-reveal">
            <div className="section-tag">Your Path</div>
            <h2 className="section-heading" id="fg-timeline-heading">From Traditional Farming to Sustainable Growth</h2>
          </div>
          <ol className="fg-timeline">
            {JOURNEY_TIMELINE.map((step, i) => (
              <li className="fg-timeline-step fg-reveal" key={step}>
                <span className="fg-timeline-num">{i + 1}</span>
                <span className="fg-timeline-text">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CONTRACT FARMING */}
      <section className="fg-contract" aria-labelledby="fg-contract-heading">
        <div className="container">
          <div className="two-col">
            <div className="fg-reveal">
              <div className="section-tag">Partnership Program</div>
              <h2 className="section-heading" id="fg-contract-heading">Secure Growth Through Contract Farming</h2>
              <p className="section-sub" style={{ marginTop: 14, maxWidth: '100%' }}>
                Our Contract Farming Program provides farmers with assured support and market access.
              </p>
              <p className="fg-contract-desc">
                We enter into transparent agreements with farmers to cultivate high-quality organic produce while
                ensuring reliable procurement and fair pricing.
              </p>
              <ul className="fg-benefit-cards">
                {CONTRACT_BENEFITS.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
            <div className="fg-contract-img fg-reveal">
              <img src={`${S3_BASE}/2148346099.jpg`} alt="Contract farming partnership in organic agriculture" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ORGANIC ADVANTAGES */}
      <section className="fg-organic" aria-labelledby="fg-organic-heading">
        <div className="container">
          <div className="section-header fg-reveal">
            <div className="section-tag">Sustainability</div>
            <h2 className="section-heading" id="fg-organic-heading">Why Organic Farming Matters</h2>
          </div>
          <div className="fg-organic-grid">
            {ORGANIC_ADVANTAGES.map((card) => (
              <article className="fg-organic-card fg-reveal" key={card.title}>
                <div className="fg-organic-card-img">
                  <img src={card.img} alt={card.alt} loading="lazy" />
                  <div className="fg-organic-overlay" />
                </div>
                <div className="fg-organic-card-body">
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BETTER MARKET ACCESS */}
      <section className="fg-markets" aria-labelledby="fg-markets-heading">
        <div className="container">
          <div className="two-col fg-markets-grid">
            <div className="fg-markets-img fg-reveal">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1000&q=80&auto=format&fit=crop"
                alt="Farmers connecting to high-value markets"
                loading="lazy"
              />
            </div>
            <div className="fg-reveal">
              <div className="section-tag">Market Access</div>
              <h2 className="section-heading" id="fg-markets-heading">Better Markets. Better Income.</h2>
              <p className="section-sub" style={{ marginTop: 14, maxWidth: '100%' }}>
                We connect farmers directly to high-value markets.
              </p>
              <div className="fg-market-cards">
                {MARKET_CHANNELS.map((channel) => (
                  <div className="fg-market-card" key={channel.title}>
                    <h3>{channel.title}</h3>
                    <ul>
                      {channel.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="fg-markets-closing">This helps farmers maximize earnings while reducing dependence on intermediaries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FARMER GROWTH FINAL CTA */}
      <section className="fg-cta" aria-labelledby="fg-cta-heading">
        <div className="fg-cta-bg" />
        <div className="fg-cta-content fg-reveal">
          <h2 className="fg-cta-title" id="fg-cta-heading">Join the Future of Organic Farming</h2>
          <p className="fg-cta-sub">
            Become part of a farming ecosystem that combines traditional agricultural wisdom with modern
            technology, sustainable practices, and profitable market opportunities.
          </p>
          <div className="cta-btns center fg-hero-btns">
            <button className="btn btn-gold fg-btn-animated" onClick={() => go('contact')}>Become a Member</button>
            <button className="btn btn-outline fg-btn-animated" onClick={() => go('contact')}>Join Contract Farming</button>
            <button className="btn btn-outline fg-btn-animated" onClick={() => go('contact')}>Contact Our Team</button>
          </div>
        </div>
      </section>
    </div>
  );
}
