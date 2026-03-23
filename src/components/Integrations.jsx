import CardBrackets from './ui/CardBrackets';
import SectionLabel from './ui/SectionLabel';
import { LogoZohoDesk, LogoIntercom, LogoGorgias, LogoZendesk, LogoSalesforce, LogoSprinklr, LogoFront, LogoHubSpot, LogoFreshdesk, LogoJira, LogoFin } from './ui/IntegrationLogos';
import { integrations } from '../data/content';

export default function Integrations() {
  return (
    <section id="integrations" className="card-section dark-card mt-6 has-borders">
      <CardBrackets />
      <SectionLabel text={integrations.label} withDivider />

      <div className="content-grid two-col int-section-grid">
        <div className="text-block int-text-col">
          <h2 className="section-title" style={{marginBottom: '16px'}}>
            {integrations.heading}<br/>{integrations.headingLine2}
          </h2>
          <p className="with-number">
            <span className="mono-label">{integrations.sectionNum}</span>
            {integrations.body}
          </p>

          <div className="int-features-block">
            <div className="section-label-container with-divider int-features-label" style={{marginBottom: '16px'}}>
              <div className="section-label">
                <span className="label-text">{integrations.featuresLabel}</span>
              </div>
              <div className="section-label-divider"></div>
            </div>
            <ul className="check-list">
              {integrations.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <div className="link-tabs mt-12">
              {integrations.tabs.map((tab, i) => (
                <a key={tab} href="#" className={i === 0 ? 'active' : ''}>{tab}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="integrations-visual">
          <div className="int-brick-wrap">
            <div className="int-brick-row int-brick-top">
              <div className="int-gc"></div><div className="int-gc"></div>
              <div className="int-gc"></div><div className="int-gc"></div>
            </div>
            <div className="int-core">
              <div className="int-gc int-side-l"></div>
              <div className="int-cell"><LogoZohoDesk /></div>
              <div className="int-cell"><LogoIntercom /></div>
              <div className="int-cell"><LogoGorgias /></div>
              <div className="int-gc int-side-r"></div>

              <div className="int-gc int-side-l"></div>
              <div className="int-cell"><LogoZendesk /></div>
              <div className="int-cell int-fin-cell"><LogoFin /></div>
              <div className="int-cell"><LogoSalesforce /></div>
              <div className="int-gc int-side-r"></div>

              <div className="int-gc int-side-l"></div>
              <div className="int-cell"><LogoSprinklr /></div>
              <div className="int-cell"><LogoFront /></div>
              <div className="int-gc int-side-r"></div>

              <div className="int-gc int-side-l"></div>
              <div className="int-cell"><LogoHubSpot /></div>
              <div className="int-cell"><LogoFreshdesk /></div>
              <div className="int-cell"><LogoJira /></div>
              <div className="int-gc int-side-r"></div>
            </div>
            <div className="int-brick-row int-brick-bottom">
              <div className="int-gc"></div><div className="int-gc"></div>
              <div className="int-gc"></div><div className="int-gc"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
