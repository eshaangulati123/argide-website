import CardBrackets from './ui/CardBrackets';
import SectionLabel from './ui/SectionLabel';
import { capabilities } from '../data/content';

export default function Capabilities() {
  return (
    <section id="capabilities" className="card-section light-card">
      <CardBrackets />
      <SectionLabel text={capabilities.label} withDivider />

      <h2 className="capabilities-heading">{capabilities.heading}</h2>

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

      <div className="dot-grid-placeholder"></div>

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
