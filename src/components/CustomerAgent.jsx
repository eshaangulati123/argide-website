import SectionLabel from './ui/SectionLabel';
import { customerAgent } from '../data/content';

export default function CustomerAgent() {
  return (
    <section className="customer-agent-section relative z-10">
      <SectionLabel text={customerAgent.label} />
      <div className="content-grid two-col items-center">
        <h2 className="section-title" style={{marginBottom: 0}}>
          {customerAgent.heading}<br/>{customerAgent.headingLine2}
        </h2>
        <p className="text-lg text-secondary">
          {customerAgent.body} <a href="#" className="link-underline-white">{customerAgent.link}</a>
        </p>
      </div>
    </section>
  );
}
