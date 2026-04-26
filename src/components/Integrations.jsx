import { useEffect, useState } from 'react';
import CardBrackets from './ui/CardBrackets';
import SectionLabel from './ui/SectionLabel';
import { LogoZohoDesk, LogoIntercom, LogoGorgias, LogoZendesk, LogoSalesforce, LogoSprinklr, LogoFront, LogoHubSpot, LogoFreshdesk, LogoJira, LogoFin } from './ui/IntegrationLogos';
import { integrations } from '../data/content';

const CELLS = [
  { Logo: LogoZohoDesk,  pin: 'br' },
  { Logo: LogoIntercom,  pin: 'b'  },
  { Logo: LogoGorgias,   pin: 'bl' },
  { Logo: LogoZendesk,   pin: 'r'  },
  { Logo: LogoSalesforce,pin: 'l'  },
  { Logo: LogoSprinklr,  pin: 'r'  },
  { Logo: LogoFront,     pin: 'l'  },
  { Logo: LogoHubSpot,   pin: 'tr' },
  { Logo: LogoFreshdesk, pin: 't'  },
  { Logo: LogoJira,      pin: 'tl' },
];

function CellBorder({ active }) {
  return (
    <>
      <svg
        className="int-cell-border-trace"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <rect
          x="1"
          y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          fill="none"
          stroke="rgba(255,255,255,0.75)"
          strokeWidth={active ? 1.5 : 0}
          pathLength="100"
          strokeDasharray="100"
          strokeDashoffset={active ? 0 : 100}
          style={{
            transition: active
              ? 'stroke-dashoffset 800ms cubic-bezier(0.22, 1, 0.36, 1), stroke-width 200ms ease'
              : 'stroke-dashoffset 400ms ease-out, stroke-width 400ms ease',
          }}
        />
      </svg>
      <svg
        className="int-cell-border-comet"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <rect
          x="1"
          y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          fill="none"
          stroke={active ? 'rgba(255,255,255,0.95)' : 'transparent'}
          strokeWidth={active ? 2 : 0}
          pathLength="100"
          strokeDasharray="8 92"
          strokeDashoffset={active ? -100 : 0}
          style={{
            transition: active
              ? 'stroke-dashoffset 1400ms linear, stroke 200ms ease 100ms'
              : 'stroke 200ms ease',
            filter: active ? 'drop-shadow(0 0 4px rgba(255,255,255,0.8))' : 'none',
          }}
        />
      </svg>
    </>
  );
}

function CellPin({ direction, active }) {
  return (
    <span className={`int-pin int-pin-${direction}`} aria-hidden="true">
      <svg
        viewBox="0 0 1 16"
        preserveAspectRatio="none"
        className="int-pin-svg"
      >
        <line
          x1="0.5"
          y1="0"
          x2="0.5"
          y2="16"
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="1"
          strokeDasharray="16"
          strokeDashoffset={active ? 0 : 16}
          style={{
            transition: active
              ? 'stroke-dashoffset 500ms cubic-bezier(0.22, 1, 0.36, 1) 150ms'
              : 'stroke-dashoffset 250ms ease-out',
          }}
        />
      </svg>
    </span>
  );
}

export default function Integrations() {
  const [activeLogo, setActiveLogo] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const id = setInterval(() => {
      setActiveLogo((i) => (i + 1) % CELLS.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  const Cell = ({ index }) => {
    const { Logo, pin } = CELLS[index];
    const active = activeLogo === index;
    return (
      <div className={`int-cell${active ? ' is-active' : ''}`}>
        <CellBorder active={active} />
        <CellPin direction={pin} active={active} />
        <div className="int-cell-inner">
          <Logo />
        </div>
      </div>
    );
  };

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
              <Cell index={0} />
              <Cell index={1} />
              <Cell index={2} />
              <div className="int-gc int-side-r"></div>

              <div className="int-gc int-side-l"></div>
              <Cell index={3} />
              <div className="int-cell int-fin-cell"><LogoFin /></div>
              <Cell index={4} />
              <div className="int-gc int-side-r"></div>

              <div className="int-gc int-side-l"></div>
              <Cell index={5} />
              <Cell index={6} />
              <div className="int-gc int-side-r"></div>

              <div className="int-gc int-side-l"></div>
              <Cell index={7} />
              <Cell index={8} />
              <Cell index={9} />
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
