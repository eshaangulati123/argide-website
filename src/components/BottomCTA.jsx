import { bottomCta } from '../data/content';

export default function BottomCTA() {
  return (
    <section className="bottom-cta-section relative z-10">
      <div className="flare-bg"></div>
      <div className="cta-content relative z-10">
        <h2 className="cta-title">
          <span className="italic-text">{bottomCta.line1}</span>
          <strong>{bottomCta.line2}</strong>
        </h2>
        <div className="hero-cta mt-4 relative z-10">
          <a href="https://cal.com/eshaangulati" target="_blank" rel="noopener noreferrer" className="btn-primary large">{bottomCta.ctaPrimary}</a>
          <a href="https://cal.com/eshaangulati" target="_blank" rel="noopener noreferrer" className="btn-outline light large">{bottomCta.ctaSecondary}</a>
        </div>
      </div>
    </section>
  );
}
