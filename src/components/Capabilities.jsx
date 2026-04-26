import { useEffect, useRef, useState } from 'react';
import CardBrackets from './ui/CardBrackets';
import SectionLabel from './ui/SectionLabel';
import { capabilities } from '../data/content';

export default function Capabilities() {
  const emphasisRef = useRef(null);
  const [underlined, setUnderlined] = useState(false);

  useEffect(() => {
    const node = emphasisRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setUnderlined(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="capabilities" className="card-section light-card">
      <CardBrackets />
      <SectionLabel text={capabilities.label} withDivider />

      <h2 className="capabilities-heading">
        {capabilities.heading}{' '}
        <span
          ref={emphasisRef}
          className={`italic-serif capabilities-heading-emphasis${underlined ? ' is-underlined' : ''}`}
        >
          {capabilities.headingEmphasis}
        </span>
      </h2>
      <p className="capabilities-subheading">{capabilities.subheading}</p>

      <div className="content-grid two-col">
        <div className="text-block">
          <p className="with-number">
            <span className="mono-label">{capabilities.sectionNum}</span>
            {capabilities.body}
          </p>
          <button className="btn-outline black mt-8">{capabilities.cta}</button>
        </div>
        <div className="empty-block"></div>
      </div>

      <div className="capabilities-wistia-wrapper">
        <wistia-player media-id="47ul4ni2fc" aspect="16/9"></wistia-player>
      </div>

      <div className="features-grid">
        {capabilities.features.map((f) => (
          <div key={f.num} className="feature-item">
            <h3>{f.num}. {f.title}</h3>
            <p>{f.desc}</p>
            <a href="#" className="link-underline">Learn more</a>
          </div>
        ))}
      </div>
    </section>
  );
}
