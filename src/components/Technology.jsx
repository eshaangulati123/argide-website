import CardBrackets from './ui/CardBrackets';
import SectionLabel from './ui/SectionLabel';
import { IconLogo } from './ui/Icons';
import { technology, engineSteps } from '../data/content';

export default function Technology({ activeEngineStep, setActiveEngineStep }) {
  return (
    <section id="technology" className="card-section dark-card mt-6 has-borders">
      <CardBrackets />
      <SectionLabel text={technology.label} withDivider />

      <div className="tech-layout">
        <div className="tech-left">
          <h2 className="section-title">
            {technology.heading}<br/>{technology.headingLine2}
          </h2>
        </div>
        <div className="tech-right text-block">
          <p className="with-number">
            <span className="mono-label">{technology.sectionNum}</span>
            {technology.body}
          </p>
          <button className="btn-outline light mt-8">{technology.cta}</button>
        </div>
      </div>

      <div className="chart-label" style={{marginBottom: '8px', marginTop: '64px'}}>{technology.diagramLabel}</div>
      <div className="diagram-box">
        <span className="dashed-taper top-left"></span>
        <span className="dashed-taper top-right"></span>
        <span className="dashed-taper bottom-left"></span>
        <span className="dashed-taper bottom-right"></span>
        <div className="diagram-container">
          <div className="diagram-col text-left">
            {[0, 2, 4].map((idx) => (
              <div key={idx} className={`diagram-item${idx > 0 ? ' mt-16' : ''}${activeEngineStep === idx ? ' active' : ''}`}>
                <div className="diagram-item-divider"></div>
                <div className="diagram-item-header">
                  <div className="diagram-item-square"></div>
                  <span className="mono-label">{technology.diagramSteps[idx].label}</span>
                </div>
                <p>{technology.diagramSteps[idx].desc}</p>
                {technology.diagramSteps[idx].powered && (
                  <div className="powered-by"><IconLogo width="12" height="12"/> {technology.diagramSteps[idx].powered}</div>
                )}
              </div>
            ))}
          </div>

          <div className="diagram-center">
            <div className="engine-outer-bracket">
              <div className="tech-stack-visual">
                <div className="engine-grid-bg"></div>
                <img src={`/ai-engine-${activeEngineStep + 1}.svg`} alt="" className="engine-svg" />
                {technology.layerLabels.map((layer, i) => (
                  <div key={i} className={`layer-bracket label-${layer.side}${activeEngineStep === i ? ' active' : ''}`} style={{ top: layer.top, height: layer.height }}>
                    <span className="layer-label">{layer.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="diagram-col text-left">
            {[1, 3, 5].map((idx) => (
              <div key={idx} className={`diagram-item${idx === 1 ? ' mt-12' : ' mt-16'}${activeEngineStep === idx ? ' active' : ''}`}>
                <div className="diagram-item-divider"></div>
                <div className="diagram-item-header">
                  <div className="diagram-item-square"></div>
                  <span className="mono-label">{technology.diagramSteps[idx].label}</span>
                </div>
                <p>{technology.diagramSteps[idx].desc}</p>
                {technology.diagramSteps[idx].powered && (
                  <div className="powered-by"><IconLogo width="12" height="12"/> {technology.diagramSteps[idx].powered}</div>
                )}
              </div>
            ))}
          </div>

          <div className="diagram-mobile-active">
            <div className="diagram-mobile-step-header">
              <div className="label-square"></div>
              <span className="mono-label">{engineSteps[activeEngineStep].label}</span>
            </div>
            <p>{engineSteps[activeEngineStep].desc}</p>
            <div className="diagram-mobile-nav">
              <button onClick={() => setActiveEngineStep(prev => (prev - 1 + 6) % 6)} aria-label="Previous step">←</button>
              <button onClick={() => setActiveEngineStep(prev => (prev + 1) % 6)} aria-label="Next step">→</button>
            </div>
          </div>
        </div>
      </div>

      {technology.compliance && (
        <div className="trust-badges-row">
          <div className="mono-label trust-badges-label">{technology.compliance.label}</div>
          <div className="trust-badges-marquee">
            <div className="trust-badges-track">
              {[...technology.compliance.badges, ...technology.compliance.badges].map((badge, i) => (
                <img
                  key={i}
                  src={badge.src}
                  alt={badge.alt}
                  className="trust-badge-img"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
