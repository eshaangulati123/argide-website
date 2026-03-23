import { hero } from '../data/content';

export default function Hero() {
  return (
    <>
      <section className="hero-section">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video-bg"
          src="/hero_loop.webm"
          poster="/hero-loop-poster.webp"
        />
        <div className="hero-fade-bottom"></div>
        <div className="hero-fade-left"></div>
        <div className="hero-fade-right"></div>

        <div className="hero-content relative z-10">
          <h1 className="hero-title">
            {hero.titleLine1}<br /><span>{hero.titleEmphasis}</span> {hero.titleLine2}
          </h1>
          <ul className="hero-badges">
            {hero.badges.map((badge) => (
              <li key={badge}>{badge}</li>
            ))}
          </ul>
          <div className="hero-cta mt-8">
            <a href="#" className="btn-primary large">{hero.ctaPrimary}</a>
            <a href="#" className="btn-outline light large">{hero.ctaSecondary}</a>
          </div>
        </div>
      </section>
    </>
  );
}
