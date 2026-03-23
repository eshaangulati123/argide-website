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

      <section className="hero-chat-input-section relative z-10">
        <div className="hero-chat-bubble">
          <span className="hero-chat-placeholder">{hero.chatPlaceholder}</span>
          <div className="hero-chat-send-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
