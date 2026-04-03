import { pricing } from '../data/content';

function DashedTapers() {
  return (
    <>
      <span className="dashed-taper top-left"></span>
      <span className="dashed-taper top-right"></span>
      <span className="dashed-taper bottom-left"></span>
      <span className="dashed-taper bottom-right"></span>
    </>
  );
}

export default function Pricing() {
  return (
    <div id="pricing">
      <section className="pricing-header mt-16 mb-12">
        <h2 className="pricing-heading">
          {pricing.heading}<br/><span>{pricing.headingEmphasis}</span> {pricing.headingLine2}
        </h2>
      </section>

      <section className="pricing-cards-section">
        <div className="pricing-grid">
          {pricing.cards.map((card) => (
            <div key={card.title} className="pricing-card card-section pricing-transparent-card">
              <DashedTapers />
              <h3 className="card-title">{card.title}</h3>
              <p className="card-desc">{card.desc}</p>
              <ul className="pricing-features">
                {card.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
                <div className="card-actions">
                <a href="/book/30min" target="_blank" rel="noopener noreferrer" className="btn-primary large">{card.cta}</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
