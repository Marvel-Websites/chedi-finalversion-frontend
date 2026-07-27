function LegalBlock({ block }) {
  if (block.type === 'p') return <p>{block.text}</p>;

  if (block.type === 'list') {
    return (
      <ul className="legal-list">
        {block.items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    );
  }

  if (block.type === 'subsection') {
    return (
      <div className="legal-subsection">
        <p className="legal-subsection-title">{block.title}</p>
        {block.text && <p>{block.text}</p>}
        {block.items && (
          <ul className="legal-list">
            {block.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        )}
      </div>
    );
  }

  if (block.type === 'contact') {
    return (
      <div className="legal-contact-card">
        {block.items.map((item) =>
          item.strong ? (
            <p key={item.text}><strong>{item.text}</strong></p>
          ) : (
            <p key={item.text}>
              {item.icon} {item.href ? <a href={item.href}>{item.text}</a> : item.text}
            </p>
          )
        )}
      </div>
    );
  }

  return null;
}

export default function LegalPage({ id, data }) {
  return (
    <div className="page active" id={`page-${id}`}>
      <section className="legal-hero" aria-label={data.title}>
        <div className="legal-hero-bg">
          <img src={data.heroImg} alt={data.heroAlt} loading="lazy" />
        </div>
        <div className="legal-hero-content">
          <div className="section-tag">LEGAL</div>
          <h1 className="legal-hero-title">{data.title}</h1>
          <p className="legal-hero-subtitle">{data.subtitle}</p>
          <p className="legal-hero-date">{data.date}</p>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <div className="legal-body">
            <p className="legal-intro">{data.intro}</p>
            {data.sections.map((section) => (
              <article className="legal-section" key={section.title}>
                <h2 className="legal-section-title">{section.title}</h2>
                {section.blocks.map((block, i) => (
                  <LegalBlock block={block} key={i} />
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
