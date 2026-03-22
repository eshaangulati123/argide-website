import React, { useState, useEffect } from 'react';
import './App.css';
import { LogoZohoDesk, LogoIntercom, LogoGorgias, LogoZendesk, LogoSalesforce, LogoSprinklr, LogoFront, LogoHubSpot, LogoFreshdesk, LogoJira, LogoFin } from './IntegrationLogos';

const IconClose = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M6 6l12 12M6 18L18 6"></path>
  </svg>
);

const IconLogo = ({ width = "28", height = "28", className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 58 58" width={width} height={height} className={className}>
    <path fill="currentColor" d="M53.254.102c-.33 0-.65.132-.884.366L38.246 14.592c-.602.601-1.615.018-1.393-.806l3.245-12.112A1.25 1.25 0 0 0 38.89.1h-4.965c-.565 0-1.06.38-1.208.926l-2.49 9.29a3.34 3.34 0 0 0 0 1.725l1.786 6.668a10.28 10.28 0 0 0 7.266 7.266l6.668 1.787c.565.15 1.16.15 1.724 0l9.291-2.49a1.25 1.25 0 0 0 .926-1.209v-4.967c0-.82-.775-1.417-1.567-1.204L44.2 21.14c-.822.22-1.406-.792-.804-1.394L57.522 5.62c.234-.234.366-.553.366-.884A4.63 4.63 0 0 0 53.254.102m0 57.789c-.33 0-.65-.132-.884-.365L38.246 43.401c-.602-.602-1.615-.019-1.393.805l3.245 12.113a1.25 1.25 0 0 1-1.208 1.574h-4.965c-.565 0-1.06-.38-1.208-.926l-2.49-9.291a3.35 3.35 0 0 1 0-1.725l1.786-6.668a10.28 10.28 0 0 1 7.266-7.266l6.668-1.787a3.35 3.35 0 0 1 1.724 0l9.291 2.491c.546.146.926.641.926 1.208v4.967c0 .82-.775 1.417-1.567 1.204L44.2 36.854c-.822-.22-1.406.791-.804 1.393l14.126 14.126c.234.234.366.553.366.884a4.64 4.64 0 0 1-4.64 4.641zM4.746.102c.331 0 .65.132.884.366l14.124 14.124c.602.601 1.616.018 1.394-.806L17.903 1.674A1.25 1.25 0 0 1 19.11.102h4.965c.564 0 1.06.38 1.208.926l2.49 9.29c.15.566.15 1.16 0 1.725l-1.787 6.669a10.28 10.28 0 0 1-7.265 7.265l-6.669 1.787a3.35 3.35 0 0 1-1.724 0l-9.29-2.49a1.24 1.24 0 0 1-.934-1.204v-4.967c0-.82.778-1.42 1.57-1.206l12.117 3.247c.824.22 1.407-.791.803-1.393L.471 5.627a1.26 1.26 0 0 1-.366-.884A4.64 4.64 0 0 1 4.746.103Zm0 57.789c.331 0 .65-.132.884-.366l14.124-14.123c.602-.602 1.616-.019 1.394.805L17.903 56.32a1.25 1.25 0 0 0 1.208 1.574h4.965c.564 0 1.06-.38 1.208-.925l2.49-9.291a3.35 3.35 0 0 0 0-1.725l-1.787-6.668a10.28 10.28 0 0 0-7.265-7.266l-6.669-1.787a3.35 3.35 0 0 0-1.724 0l-9.29 2.491a1.24 1.24 0 0 0-.934 1.201v4.967c0 .82.778 1.42 1.57 1.206l12.117-3.247c.824-.22 1.407.792.803 1.393L.471 52.368a1.25 1.25 0 0 0-.366.885 4.64 4.64 0 0 0 4.641 4.64z"></path>
  </svg>
);

const IconChevron = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" style={{opacity: 0.7}}>
    <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconMenu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
  </svg>
);

const IconArrowRight = () => (
  <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.17812 12.047L13.725 7.5001L9.17812 2.95322C8.86875 2.64385 8.3625 2.64385 8.05313 2.95322C7.74375 3.2626 7.74375 3.76885 8.05313 4.07822L10.6781 6.70322H1.875V8.29697H10.6781L8.05313 10.922C7.89375 11.0813 7.81875 11.2782 7.81875 11.4845C7.81875 11.6907 7.89375 11.897 8.05313 12.047C8.3625 12.3563 8.86875 12.3563 9.17812 12.047Z" fill="currentColor"></path>
  </svg>
);

const IconUser = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
);

const SectionLabel = ({ text, withDivider = false }) => (
  <div className={`section-label-container${withDivider ? ' with-divider' : ''}`}>
    <div className="section-label">
      <div className="label-square"></div>
      <span className="label-text">{text}</span>
    </div>
    {withDivider && <div className="section-label-divider"></div>}
  </div>
);

const CardBrackets = () => (
  <>
    <div className="bracket bracket-tl"></div>
    <div className="bracket bracket-tr"></div>
    <div className="bracket bracket-bl"></div>
    <div className="bracket bracket-br"></div>
  </>
);

const engineSteps = [
  { label: '[4.A.1] REFINE THE QUERY', desc: 'In order to optimize the accuracy of an answer that an LLM generates, the inputs the LLM receives must be refined for comprehension.' },
  { label: '[4.A.2] RETRIEVE RELEVANT CONTENT', desc: 'The retrieval process, powered by our proprietary fin-cx-retrieval model, searches across all knowledge sources and selects the most relevant information for accurate answers.' },
  { label: '[4.A.3] RERANK FOR PRECISION', desc: 'The reranking process, powered by our proprietary fin-cx-reranker model, scores retrieved content for relevance and accuracy, then selects the optimal pieces for the LLM to use.' },
  { label: '[4.A.4] GENERATE A RESPONSE', desc: 'Using a bespoke generative process, it creates answers with the highest resolution potential. Custom Guidance controls tone and behavior, ensuring responses align with your brand.' },
  { label: '[4.A.5] VALIDATE ACCURACY', desc: 'In the final step, the Fin AI Engine™ checks whether the LLM output meets response accuracy and safety standards.' },
  { label: '[4.A.6] ENGINE OPTIMIZATION', desc: 'To calibrate performance, the Fin AI Engine™ uses integrated tools that optimize answer generation, efficiency, precision, and coverage.' },
];

function App() {
  const [activeSection, setActiveSection] = useState('01');
  const [sectionProgress, setSectionProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeEngineStep, setActiveEngineStep] = useState(0);
  const mobileNavRef = React.useRef(null);

  const sectionList = [
    { id: 'capabilities', num: '01', label: 'CAPABILITIES' },
    { id: 'performance', num: '02', label: 'PERFORMANCE' },
    { id: 'integrations', num: '03', label: 'INTEGRATIONS' },
    { id: 'technology', num: '04', label: 'TECHNOLOGY' },
    { id: 'team', num: '05', label: 'AI TEAM' },
    { id: 'pricing', num: '06', label: 'PRICING' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['capabilities', 'performance', 'integrations', 'technology', 'team', 'pricing'];
      let found = false;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(`0${i + 1}`);
            const sectionHeight = el.offsetHeight;
            const scrolledInto = 150 - rect.top;
            const progress = Math.min(Math.max(scrolledInto / sectionHeight, 0), 1);
            setSectionProgress(progress);
            found = true;
            break;
          }
        }
      }
      if (!found) {
        setActiveSection('01');
        setSectionProgress(0);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileNavRef.current) {
      const activeEl = mobileNavRef.current.querySelector('.mobile-nav-item.active');
      if (activeEl) {
        const container = mobileNavRef.current;
        const scrollLeft = activeEl.offsetLeft - container.offsetWidth / 2 + activeEl.offsetWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [activeSection]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveEngineStep(prev => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const activeIndex = parseInt(activeSection) - 1;
  const progressPercent = (activeIndex / (sectionList.length - 1)) * 100;

  return (
    <div className="app-container">
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-left mobile-only">
            <a href="/" className="logo-link"><IconLogo width="28" height="28" /></a>
            <div className="nav-divider"></div>
            <a href="#" className="nav-link intercom-link">
              Intercom
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{marginLeft: '4px'}}><path d="M3.46875 1.875C3.175 1.875 2.9375 2.1125 2.9375 2.40625C2.9375 2.7 3.175 2.93751 3.46875 2.93751H6.3125L1.5 7.75L2.25 8.5L7.0625 3.6875V6.53126C7.0625 6.82501 7.3 7.06249 7.59375 7.06249C7.8875 7.06249 8.125 6.82501 8.125 6.53126V1.875H3.46875Z" fill="currentColor"></path></svg>
            </a>
          </div>

          <nav className="desktop-nav">
            <a href="/" className="logo-link"><IconLogo width="28" height="28" /></a>
            <ul className="nav-links">
              <li><button className="nav-dropdown">Product <IconChevron /></button></li>
              <li><button className="nav-dropdown">AI Technology <IconChevron /></button></li>
              <li><a href="#" className="nav-link">Customers</a></li>
              <li><button className="nav-dropdown">Resources <IconChevron /></button></li>
              <li><a href="#" className="nav-link">Pricing</a></li>
            </ul>
            <ul className="nav-actions">
              <li><a href="#" className="icon-btn"><IconUser /></a></li>
              <li><a href="#" className="nav-link">Contact sales</a></li>
              <li><a href="#" className="nav-link">View demo</a></li>
              <li><a href="#" className="btn-primary">Start free trial</a></li>
            </ul>
            <div className="nav-divider"></div>
            <a href="#" className="btn-outline light intercom-btn">
              Intercom <IconArrowRight />
            </a>
          </nav>
          
          <div className="mobile-actions mobile-only">
            <button className="menu-btn"><IconMenu /></button>
          </div>
        </div>
      </header>

      <main className="main-content">
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
            <h1 className="hero-title">The #1 AI Agent for<br /><span>all</span> your customer service</h1>
            <ul className="hero-badges">
              <li>#1 IN BAKE-OFFS</li>
              <li>#1 IN BENCHMARKS</li>
              <li>#1 FOR COMPLEX QUERIES</li>
              <li>#1 ON G2</li>
            </ul>
            <div className="hero-cta mt-8">
              <a href="#" className="btn-primary large">Start free trial</a>
              <a href="#" className="btn-outline light large">View demo</a>
            </div>
          </div>
        </section>

        <section className="hero-chat-input-section relative z-10">
          <div className="hero-chat-bubble">
            <span className="hero-chat-placeholder">Can Fin integrate with my help d...</span>
            <div className="hero-chat-send-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5M5 12l7-7 7 7"/>
              </svg>
            </div>
          </div>
        </section>

        <section className="logo-wall-section relative z-10">
          <div className="logo-grid">
            <div className="logo-item">MERCURY</div>
            <div className="logo-item">miro</div>
            <div className="logo-item">monday.com</div>
            <div className="logo-item">RIOT GAMES</div>
            <div className="logo-item">Rocket Money</div>
            <div className="logo-item">shutterstock</div>
            <div className="logo-item">snowflake</div>
            <div className="logo-item">synthesia</div>
            <div className="logo-item">toast</div>
            <div className="logo-item">Vanta</div>
            <div className="logo-item">WHOOP</div>
            <div className="logo-item">xero</div>
          </div>
        </section>

        <nav className="mobile-section-nav">
          <div className="mobile-nav-scroll" ref={mobileNavRef}>
            {sectionList.map((s) => (
              <a
                key={s.num}
                href={`#${s.id}`}
                className={`mobile-nav-item ${activeSection === s.num ? 'active' : ''}`}
              >
                {s.num}  {s.label}
              </a>
            ))}
          </div>
          <div className="mobile-nav-track">
            <div
              className="mobile-nav-progress"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </nav>

        <div className="content-layout relative z-10">
          <aside className="sticky-sidebar">
            <ul className="sidebar-nav">
              {sectionList.map((s) => (
                <li key={s.num} className={activeSection === s.num ? 'active' : ''}>
                  <a href={`#${s.id}`}>{s.num} {s.label}</a>
                  <span
                    className="sidebar-progress-line"
                    style={{ width: activeSection === s.num ? `${sectionProgress * 100}%` : '0%' }}
                  />
                </li>
              ))}
            </ul>
          </aside>

          <div className="scroll-content">
            
            <section id="capabilities" className="card-section light-card">
              <CardBrackets />
              <SectionLabel text="CAPABILITIES" withDivider />

              <h2 className="capabilities-heading">
                Fin resolves the most complex queries on every channel
              </h2>
              
              <div className="content-grid two-col">
                <div className="text-block">
                  <p className="with-number"><span className="mono-label">01</span> Fin handles even the most complex queries through a continuous improvement loop called the Fin Flywheel. Train Fin on your Procedures, knowledge, and policies, test performance before launch, deploy across every channel, then analyze and improve with AI-powered Insights—so every query is resolved accurately and consistently.</p>
                  <button className="btn-outline black mt-8">Explore all capabilities</button>
                </div>
                <div className="empty-block"></div>
              </div>

              <div className="dot-grid-placeholder"></div>

              <div className="features-grid">
                <div className="feature-item">
                  <h3>1. Train</h3>
                  <p>Train Fin to resolve even the most complex queries with your Procedures, knowledge and policies.</p>
                  <a href="#" className="link-underline">Learn more</a>
                </div>
                <div className="feature-item">
                  <h3>2. Test</h3>
                  <p>Run fully simulated customer conversations from start to finish to see exactly how Fin will behave before going live.</p>
                  <a href="#" className="link-underline">Learn more</a>
                </div>
                <div className="feature-item">
                  <h3>3. Deploy</h3>
                  <p>Set Fin live across every channel—voice, email, chat, and social—for consistent support wherever customers reach out.</p>
                  <a href="#" className="link-underline">Learn more</a>
                </div>
                <div className="feature-item">
                  <h3>4. Analyze</h3>
                  <p>Use AI-powered Insights to analyze and improve Fin's performance and deliver better customer experiences.</p>
                  <a href="#" className="link-underline">Learn more</a>
                </div>
              </div>
            </section>

            <section id="performance" className="card-section light-card mt-6">
              <CardBrackets />
              <SectionLabel text="UNRIVALED PERFORMANCE" withDivider />
              <h2 className="capabilities-heading">
                Fin outperforms every competitor. <span className="italic-serif">Every time.</span>
              </h2>

              <div className="chart-label" style={{marginBottom: '8px', marginTop: '40px'}}>FIG 2.A - FIN'S AVERAGE RESOLUTION RATE INCREASES 1% EVERY MONTH</div>
              <div className="chart-container">
                <span className="dashed-taper top-left"></span>
                <span className="dashed-taper top-right"></span>
                <span className="dashed-taper bottom-left"></span>
                <span className="dashed-taper bottom-right"></span>
                <div className="line-chart-area">
                  <svg viewBox="0 0 900 400" preserveAspectRatio="none" className="perf-chart-svg">
                    <defs>
                      <linearGradient id="lineGradientH" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0" stopColor="#FF5600" stopOpacity="0" />
                        <stop offset="0.05" stopColor="#FF5600" stopOpacity="0.4" />
                        <stop offset="0.1" stopColor="#FF5600" stopOpacity="0.6" />
                        <stop offset="0.25" stopColor="#FF5600" stopOpacity="0.9" />
                        <stop offset="1" stopColor="#FF5600" stopOpacity="1" />
                      </linearGradient>
                      <linearGradient id="areaFillGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#FF5600" stopOpacity="1" />
                        <stop offset="0.2" stopColor="#FF5600" stopOpacity="0.9" />
                        <stop offset="0.5" stopColor="#FF5600" stopOpacity="0.7" />
                        <stop offset="0.8" stopColor="#FF5600" stopOpacity="0.3" />
                        <stop offset="1" stopColor="#FF5600" stopOpacity="0" />
                      </linearGradient>
                      <pattern id="dotPatternChart" width="10" height="10" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r="1" fill="#EFEFEF" />
                      </pattern>
                      <mask id="areaMask">
                        <rect width="900" height="400" fill="white" />
                      </mask>
                    </defs>
                    {/* Horizontal grid lines (dashed) */}
                    {[60, 110, 160, 210, 260, 310, 350].map((y, i) => (
                      <line key={i} x1="50" y1={y} x2="880" y2={y} stroke="rgba(0,0,0,0.08)" strokeDasharray="8 8" />
                    ))}
                    {/* Y-axis labels */}
                    {['70%','60%','50%','40%','30%','20%','10%'].map((label, i) => (
                      <text key={i} x="45" y={60 + i * 50 + 4} textAnchor="end" className="chart-axis-label">{label}</text>
                    ))}
                    {/* Area fill with dot pattern */}
                    <path d="M60,320 L100,310 L140,305 L180,300 L220,290 L260,275 L300,260 L340,240 L380,230 L420,210 L460,200 L500,185 L540,175 L560,170 L600,160 L640,155 L680,140 L720,130 L760,115 L800,105 L840,90 L870,80 L870,350 L60,350 Z" fill="url(#dotPatternChart)" />
                    {/* Area fill gradient overlay */}
                    <path d="M60,320 L100,310 L140,305 L180,300 L220,290 L260,275 L300,260 L340,240 L380,230 L420,210 L460,200 L500,185 L540,175 L560,170 L600,160 L640,155 L680,140 L720,130 L760,115 L800,105 L840,90 L870,80 L870,350 L60,350 Z" fill="url(#areaFillGrad)" opacity="0.6" />
                    {/* Orange line */}
                    <path d="M60,320 L100,310 L140,305 L180,300 L220,290 L260,275 L300,260 L340,240 L380,230 L420,210 L460,200 L500,185 L540,175 L560,170 L600,160 L640,155 L680,140 L720,130 L760,115 L800,105 L840,90 L870,80" fill="none" stroke="url(#lineGradientH)" strokeWidth="2.5" />
                    {/* Data point circles */}
                    {[[60,320],[100,310],[140,305],[180,300],[220,290],[260,275],[300,260],[340,240],[380,230],[420,210],[460,200],[500,185],[540,175],[560,170],[600,160],[640,155],[680,140],[720,130],[760,115],[800,105],[840,90],[870,80]].map(([cx,cy], i) => (
                      <circle key={i} cx={cx} cy={cy} r="3.5" fill="white" stroke="#FF5600" strokeWidth="1.5" opacity={i < 3 ? 0.3 + i * 0.2 : 1} />
                    ))}
                    {/* Dashed comparison line */}
                    <path d="M60,330 L100,325 L140,328 L180,320 L220,315 L260,310 L300,300 L340,290 L380,285 L420,270 L460,265 L500,255 L540,250 L560,245 L600,240 L640,235 L680,230 L720,225 L760,220 L800,215 L840,210 L870,205" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" strokeDasharray="6 6" />
                    {/* X-axis labels */}
                    {['MAY 2023','JUN 2023','JUL 2023','SEP 2023','NOV 2023','DEC 2023','FEB 2024','APR 2024','JUN 2024','SEP 2024','OCT 2024','NOV 2024','DEC 2024','JAN 2025','FEB 2025','MAR 2025','APR 2025','MAY 2025','JUN 2025','JUL 2025','AUG 2025','OCT 2025','NOV 2025','DEC 2025'].map((label, i) => (
                      <text key={i} x={60 + i * 35} y={370} textAnchor="end" className="chart-axis-label" transform={`rotate(-90, ${60 + i * 35}, 370)`}>{label}</text>
                    ))}
                  </svg>
                </div>
              </div>

              <div className="performance-bottom-grid">
                <div className="perf-box-wrapper">
                  <div className="chart-label" style={{marginBottom: '8px'}}>FIG 2.B - FIN WINS EVERY HEAD-TO-HEAD TEST ON RESOLUTION RATE</div>
                  <div className="chart-box bordered-box">
                    <span className="dashed-taper top-left"></span>
                    <span className="dashed-taper top-right"></span>
                    <span className="dashed-taper bottom-left"></span>
                    <span className="dashed-taper bottom-right"></span>
                    <div className="bar-chart-area">
                      <svg viewBox="0 0 450 315" className="bar-chart-svg">
                        <defs>
                          <pattern id="dotPatternInactive" width="7" height="7" patternUnits="userSpaceOnUse">
                            <circle cx="0.5" cy="0.5" r="1" fill="rgba(0,0,0,0.25)" />
                          </pattern>
                          <pattern id="dotPatternActive" width="7" height="7" patternUnits="userSpaceOnUse">
                            <circle cx="1" cy="1" r="1" fill="#EFEFEF" />
                          </pattern>
                        </defs>
                        {/* Grid lines */}
                        {[35, 70, 105, 140, 175, 210, 245, 280].map((y, i) => (
                          <line key={i} x1="5" y1={y} x2="415" y2={y} stroke="rgba(0,0,0,0.15)" strokeDasharray="8 8" />
                        ))}
                        {/* Y-axis labels */}
                        {['80%','60%','40%','20%'].map((label, i) => (
                          <text key={i} x="2" y={35 + i * 70 + 4} textAnchor="start" className="chart-axis-label">{label}</text>
                        ))}
                        {/* X-axis line */}
                        <line x1="5" y1="285" x2="415" y2="285" stroke="rgba(0,0,0,0.4)" />
                        {/* DECAGON bar */}
                        <rect x="55" y="145" width="100" height="140" fill="#E8E7E0" />
                        <rect x="55" y="145" width="100" height="140" fill="url(#dotPatternInactive)" stroke="rgba(0,0,0,0.4)" strokeWidth="1" />
                        {/* FORETHOUGHT bar */}
                        <rect x="175" y="142" width="100" height="143" fill="#E8E7E0" />
                        <rect x="175" y="142" width="100" height="143" fill="url(#dotPatternInactive)" stroke="rgba(0,0,0,0.4)" strokeWidth="1" />
                        {/* FIN bar */}
                        <rect x="295" y="60" width="100" height="225" fill="#FF5600" />
                        <rect x="295" y="60" width="100" height="225" fill="url(#dotPatternActive)" stroke="#FF5600" strokeWidth="1" />
                        {/* Value labels - inside bars, top-left */}
                        <rect x="55" y="145" width="40" height="20" fill="#f4f3ec" />
                        <line x1="95" y1="145" x2="95" y2="165" stroke="rgba(0,0,0,0.4)" />
                        <line x1="55" y1="165" x2="95" y2="165" stroke="rgba(0,0,0,0.4)" />
                        <text x="60" y="159" textAnchor="start" className="chart-bar-value">49%</text>
                        <rect x="175" y="142" width="40" height="20" fill="#f4f3ec" />
                        <line x1="215" y1="142" x2="215" y2="162" stroke="rgba(0,0,0,0.4)" />
                        <line x1="175" y1="162" x2="215" y2="162" stroke="rgba(0,0,0,0.4)" />
                        <text x="180" y="156" textAnchor="start" className="chart-bar-value">50%</text>
                        <rect x="295" y="60" width="40" height="20" fill="white" />
                        <line x1="335" y1="60" x2="335" y2="80" stroke="#FF5600" />
                        <line x1="295" y1="80" x2="335" y2="80" stroke="#FF5600" />
                        <text x="300" y="74" textAnchor="start" className="chart-bar-value active">73%</text>
                        {/* Bar labels */}
                        <text x="105" y="305" textAnchor="middle" className="chart-axis-label">DECAGON</text>
                        <text x="225" y="305" textAnchor="middle" className="chart-axis-label">FORETHOUGHT</text>
                        <text x="345" y="305" textAnchor="middle" className="chart-bar-label-active">FIN</text>
                      </svg>
                      <div className="bar-chart-caption">Resolution rate based on independent testing conducted by Fin customers.</div>
                    </div>
                  </div>
                </div>
                
                <div className="perf-box-wrapper">
                  <div className="chart-label" style={{marginBottom: '8px'}}>FIG 2.C - FINTECH CUSTOMER</div>
                  <div className="testimonial-box bordered-box">
                    <span className="dashed-taper top-left"></span>
                    <span className="dashed-taper top-right"></span>
                    <span className="dashed-taper bottom-left"></span>
                    <span className="dashed-taper bottom-right"></span>
                    <div className="testimonial-content">
                      <div className="avatar-placeholder"></div>
                      <blockquote>
                        "Fin is in a completely different league. It's now involved in 99% of conversations and <mark>successfully resolves up to 65% end-to-end – even the more complex ones.</mark>"
                      </blockquote>
                      <cite>Angelo Livanos, Vice President of Global Support at Lightspeed</cite>
                    </div>
                  </div>
                </div>
              </div>

              <div className="video-section mt-16">
                 <div className="video-player">
                    <div className="video-content-top">
                       <h2>ANTHROP\C</h2>
                       <p>"If you're debating whether to build your own AI solution or buy one, my advice would be to buy – and specifically, buy Fin."</p>
                    </div>
                    <button className="play-btn">
                       <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z"/></svg> PLAY
                    </button>
                 </div>
                 
                 <div className="video-playlist mt-4">
                    <div className="playlist-grid">
                       <div className="playlist-item active">
                          <div className="thumb gray-box"></div>
                          <div className="info">
                             <span className="mono-label" style={{color: 'rgba(0,0,0,0.5)', fontSize: '0.65rem', marginBottom: '8px'}}>NOW PLAYING</span>
                             <h4 style={{color: '#000'}}>Build vs. buy: Why Anthropic chose Fin</h4>
                          </div>
                       </div>
                       <div className="playlist-item">
                          <div className="thumb gray-box"></div>
                          <div className="info">
                             <span className="mono-label" style={{color: 'rgba(0,0,0,0.5)', fontSize: '0.65rem', marginBottom: '8px'}}>PLAY NEXT</span>
                             <h4 style={{color: '#000'}}>AI at enterprise scale: Why...</h4>
                          </div>
                       </div>
                       <div className="playlist-item">
                          <div className="thumb gray-box"></div>
                          <div className="info">
                             <span className="mono-label" style={{color: 'rgba(0,0,0,0.5)', fontSize: '0.65rem', marginBottom: '8px'}}>PLAY NEXT</span>
                             <h4 style={{color: '#000'}}>How Rocket Money operationalized...</h4>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            </section>

            <section id="integrations" className="card-section dark-card mt-6 has-borders">
              <CardBrackets />
              <SectionLabel text="SEAMLESS INTEGRATION" withDivider />
              
              <div className="content-grid two-col int-section-grid">
                <div className="text-block int-text-col">
                  <h2 className="section-title" style={{marginBottom: '16px'}}>Fin works with<br/>any helpdesk</h2>
                  <p className="with-number"><span className="mono-label">03</span> Set up Fin with your existing helpdesk or as part of the Intercom Customer Service Suite—with support for additional platforms and custom channels.</p>
                  
                  <div className="int-features-block">
                    <div className="section-label-container with-divider int-features-label" style={{marginBottom: '16px'}}>
                      <div className="section-label">
                        <span className="label-text">KEY FEATURES</span>
                      </div>
                      <div className="section-label-divider"></div>
                    </div>
                    <ul className="check-list">
                      <li>Set up in under an hour.</li>
                      <li>Integrates into your current support channels—tickets, email, live chat, and more.</li>
                      <li>Follows your existing assignment rules, automations, and reporting.</li>
                      <li>Escalates to agents in your preferred inbox.</li>
                    </ul>
                    
                    <div className="link-tabs mt-12">
                      <a href="#" className="active">Intercom Suite</a>
                      <a href="#">Fin for Zendesk</a>
                      <a href="#">Fin for Salesforce</a>
                    </div>
                  </div>
                </div>
                
                <div className="integrations-visual">
                  <div className="int-brick-wrap">
                    {/* Top ghost row - brick offset */}
                    <div className="int-brick-row int-brick-top">
                      <div className="int-gc"></div><div className="int-gc"></div>
                      <div className="int-gc"></div><div className="int-gc"></div>
                    </div>
                    {/* Main 5-col rows with side ghosts */}
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
                    {/* Bottom ghost row - brick offset */}
                    <div className="int-brick-row int-brick-bottom">
                      <div className="int-gc"></div><div className="int-gc"></div>
                      <div className="int-gc"></div><div className="int-gc"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="technology" className="card-section dark-card mt-6 has-borders">
              <CardBrackets />
              <SectionLabel text="SUPERIOR TECHNOLOGY" withDivider />
              
              <div className="tech-layout">
                 <div className="tech-left">
                    <h2 className="section-title">Powered by the<br/>Fin AI Engine™</h2>
                 </div>
                 <div className="tech-right text-block">
                    <p className="with-number"><span className="mono-label">04</span> The Fin AI Engine™ is a patented AI architecture specifically engineered for complex customer service queries. Every layer is optimized for accuracy, speed, and reliability—so Fin can resolve more conversations, more effectively than competing AI Agents.</p>
                    <button className="btn-outline light mt-8">Learn more</button>
                 </div>
              </div>

              <div className="chart-label" style={{marginBottom: '8px', marginTop: '64px'}}>FIG 4.A - FIN AI ENGINE™</div>
              <div className="diagram-box">
                <span className="dashed-taper top-left"></span>
                <span className="dashed-taper top-right"></span>
                <span className="dashed-taper bottom-left"></span>
                <span className="dashed-taper bottom-right"></span>
              <div className="diagram-container">
                 <div className="diagram-col text-left">
                    <div className={`diagram-item${activeEngineStep === 0 ? ' active' : ''}`}>
                       <div className="diagram-item-divider"></div>
                       <div className="diagram-item-header">
                         <div className="diagram-item-square"></div>
                         <span className="mono-label">[4.A.1] REFINE THE QUERY</span>
                       </div>
                       <p>In order to optimize the accuracy of an answer that an LLM generates, the inputs the LLM receives must be refined for comprehension.</p>
                    </div>
                    <div className={`diagram-item mt-16${activeEngineStep === 2 ? ' active' : ''}`}>
                       <div className="diagram-item-divider"></div>
                       <div className="diagram-item-header">
                         <div className="diagram-item-square"></div>
                         <span className="mono-label">[4.A.3] RERANK FOR PRECISION</span>
                       </div>
                       <p>The reranking process, powered by our proprietary fin-cx-reranker model, scores retrieved content for relevance and accuracy, then selects the optimal pieces for the LLM to use.</p>
                       <div className="powered-by"><IconLogo width="12" height="12"/> POWERED BY FIN-CX</div>
                    </div>
                    <div className={`diagram-item mt-16${activeEngineStep === 4 ? ' active' : ''}`}>
                       <div className="diagram-item-divider"></div>
                       <div className="diagram-item-header">
                         <div className="diagram-item-square"></div>
                         <span className="mono-label">[4.A.5] VALIDATE ACCURACY</span>
                       </div>
                       <p>In the final step, the Fin AI Engine™ checks whether the LLM output meets response accuracy and safety standards.</p>
                    </div>
                 </div>

                 <div className="diagram-center">
                    <div className="engine-outer-bracket">
                      <div className="tech-stack-visual">
                         <div className="engine-grid-bg"></div>
                         <img src={`/ai-engine-${activeEngineStep + 1}.svg`} alt="" className="engine-svg" />
                         {[
                           { label: 'REFINE THE QUERY', side: 'left', top: '2%', height: '14%' },
                           { label: 'RETRIEVE RELEVANT CONTENT', side: 'right', top: '17%', height: '17%' },
                           { label: 'RERANK FOR PRECISION', side: 'left', top: '35%', height: '14%' },
                           { label: 'GENERATE A RESPONSE', side: 'right', top: '50%', height: '17%' },
                           { label: 'VALIDATE ACCURACY', side: 'left', top: '68%', height: '14%' },
                           { label: 'ENGINE OPTIMIZATION', side: 'right', top: '83%', height: '15%' },
                         ].map((layer, i) => (
                           <div key={i} className={`layer-bracket label-${layer.side}${activeEngineStep === i ? ' active' : ''}`} style={{ top: layer.top, height: layer.height }}>
                             <span className="layer-label">{layer.label}</span>
                           </div>
                         ))}
                      </div>
                    </div>
                 </div>

                 <div className="diagram-col text-left">
                    <div className={`diagram-item mt-12${activeEngineStep === 1 ? ' active' : ''}`}>
                       <div className="diagram-item-divider"></div>
                       <div className="diagram-item-header">
                         <div className="diagram-item-square"></div>
                         <span className="mono-label">[4.A.2] RETRIEVE RELEVANT CONTENT</span>
                       </div>
                       <p>The retrieval process, powered by our proprietary fin-cx-retrieval model, searches across all knowledge sources and selects the most relevant information for accurate answers.</p>
                       <div className="powered-by"><IconLogo width="12" height="12"/> POWERED BY FIN-CX</div>
                    </div>
                    <div className={`diagram-item mt-16${activeEngineStep === 3 ? ' active' : ''}`}>
                       <div className="diagram-item-divider"></div>
                       <div className="diagram-item-header">
                         <div className="diagram-item-square"></div>
                         <span className="mono-label">[4.A.4] GENERATE A RESPONSE</span>
                       </div>
                       <p>Using a bespoke generative process, it creates answers with the highest resolution potential. Custom Guidance controls tone and behavior, ensuring responses align with your brand.</p>
                    </div>
                    <div className={`diagram-item mt-16${activeEngineStep === 5 ? ' active' : ''}`}>
                       <div className="diagram-item-divider"></div>
                       <div className="diagram-item-header">
                         <div className="diagram-item-square"></div>
                         <span className="mono-label">[4.A.6] ENGINE OPTIMIZATION</span>
                       </div>
                       <p>To calibrate performance, the Fin AI Engine™ uses integrated tools that optimize answer generation, efficiency, precision, and coverage.</p>
                    </div>
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
              
              <div className="trust-badges-row mt-16">
                 <div className="mono-label text-center mb-8">TRUSTED AND FULLY CERTIFIED</div>
                 <div className="badges-flex">
                    <div className="badge-circle">ISO<br/>27018</div>
                    <div className="badge-circle">ISO<br/>27701</div>
                    <div className="badge-rect">GDPR<br/>COMPLIANT</div>
                    <div className="badge-rect">CCPA<br/>COMPLIANT</div>
                    <div className="badge-circle">ISO<br/>27001</div>
                    <div className="badge-circle">ISO<br/>27018</div>
                    <div className="badge-circle">ISO<br/>27701</div>
                 </div>
              </div>
            </section>

            <section id="team" className="card-section dark-card mt-6 has-borders">
              <CardBrackets />
              <SectionLabel text="AI TEAM" withDivider />
              
              <div className="content-grid two-col mb-16">
                <div>
                   <h2 className="section-title">Built by a world-<br/>class team of AI<br/>experts</h2>
                </div>
                <div className="text-block pt-4">
                  <p className="with-number"><span className="mono-label">05</span> The AI Group, an expert team of over 40 machine learning scientists, engineers and designers, continuously optimize Fin's performance through cutting-edge research, experimentation, and innovation—and publish their insights in the <a href="#" className="link-underline-white">AI research blog</a>.</p>
                </div>
              </div>

              <div className="mono-label mb-12">AI GROUP LEADERSHIP</div>
              
              <div className="team-grid">
                 <div className="team-member">
                    <div className="avatar"></div>
                    <h4>Pratik Bothra</h4>
                    <p>Principal Machine<br/>Learning Engineer</p>
                 </div>
                 <div className="team-member">
                    <div className="avatar"></div>
                    <h4>Rob Clancy</h4>
                    <p>Staff Product<br/>Engineer</p>
                 </div>
                 <div className="team-member">
                    <div className="avatar"></div>
                    <h4>Mario Kostelac</h4>
                    <p>Principal Machine<br/>Learning Engineer</p>
                 </div>
                 <div className="team-member">
                    <div className="avatar"></div>
                    <h4>Molly Mahar</h4>
                    <p>Principal AI Designer</p>
                 </div>
                 <div className="team-member">
                    <div className="avatar"></div>
                    <h4>Brian McDonnell</h4>
                    <p>Director, Engineering</p>
                 </div>
                 <div className="team-member">
                    <div className="avatar"></div>
                    <h4>Fedor Parfenov</h4>
                    <p>Staff Machine<br/>Learning Scientist</p>
                 </div>
                 <div className="team-member">
                    <div className="avatar"></div>
                    <h4>Fergal Reid</h4>
                    <p>Chief AI Officer</p>
                 </div>
                 <div className="team-member">
                    <div className="avatar"></div>
                    <h4>Pedro Tabacof</h4>
                    <p>Principal Machine<br/>Learning Scientist</p>
                 </div>
                 <div className="team-member">
                    <div className="avatar"></div>
                    <h4>Alexey Tarasov</h4>
                    <p>Senior Manager, ML<br/>Engineering</p>
                 </div>
                 <div className="team-member">
                    <div className="avatar"></div>
                    <h4>Rati Zvirawa</h4>
                    <p>Director, Product<br/>Management</p>
                 </div>
              </div>
            </section>

            <section className="pricing-header mt-16 mb-12 text-center">
               <ul className="hero-badges justify-center">
                 <li>#1 AI AGENT ON G2</li>
                 <li>✓ FIN MILLION DOLLAR GUARANTEE ⓘ</li>
               </ul>
            </section>

            <section id="pricing" className="pricing-cards-section">
               <div className="pricing-grid">
                  <div className="pricing-card card-section dark-card has-borders">
                     <CardBrackets />
                     <h3 className="card-title">Fin with your<br/>current helpdesk</h3>
                     <p className="card-desc">Fin AI Agent works seamlessly with any helpdesk, including Zendesk, Salesforce, HubSpot, and more.</p>
                     
                     <div className="price-block">
                        <span className="price">$0.99</span>
                        <span className="price-unit">PER OUTCOME ⓘ<br/>50 OUTCOMES PER MONTH<br/>MINIMUM</span>
                     </div>

                     <div className="card-actions">
                        <button className="btn-primary large" style={{borderRadius: '8px'}}>Free 14 day trial</button>
                        <a href="#" className="link-underline-white">Get a demo</a>
                     </div>
                  </div>

                  <div className="pricing-card card-section dark-card has-borders">
                     <CardBrackets />
                     <h3 className="card-title">Fin with<br/>Intercom's Helpdesk</h3>
                     <p className="card-desc">Combine Fin AI Agent with Intercom's Helpdesk to get the full Intercom Customer Service Suite.</p>
                     
                     <div className="price-block multi">
                        <div className="price-row">
                           <span className="price">$0.99</span>
                           <span className="price-unit">PER<br/>OUTCOME ⓘ</span>
                        </div>
                        <div className="plus">+</div>
                        <div className="price-row">
                           <span className="price">$29</span>
                           <span className="price-unit">PER HELPDESK SEAT<br/>PER MONTH <a href="#" className="link-underline-white">(SEE ALL PLANS)</a></span>
                        </div>
                     </div>

                     <div className="card-actions mt-auto">
                        <button className="btn-outline light large" style={{borderRadius: '8px'}}>Free 14 day trial</button>
                        <a href="#" className="link-underline-white">Get a demo</a>
                     </div>
                  </div>
               </div>
            </section>

          </div>
        </div>

        <section className="bottom-cta-section relative z-10">
          <div className="flare-bg"></div>
          <div className="cta-content relative z-10">
            <h2 className="cta-title text-center">
              <span className="italic-text">with the</span>
              #1 AI Agent today
            </h2>
            <div className="hero-cta mt-8 relative z-10">
              <a href="#" className="btn-primary large">Start free trial</a>
              <a href="#" className="btn-outline light large">View demo</a>
            </div>
          </div>
        </section>

        <section className="customer-agent-section card-section dark-card has-borders max-w relative z-10">
           <CardBrackets />
           <SectionLabel text="CUSTOMER AGENT" />
           <div className="content-grid two-col items-center">
              <h2 className="section-title" style={{marginBottom: 0}}>
                Our vision—one Agent for the<br/>entire customer experience
              </h2>
              <p className="text-lg text-secondary">Imagine a single Customer Agent across the whole customer journey. A future that opens the door to a previously-unimaginable level of customer experience. <a href="#" className="link-underline-white">Learn more</a></p>
           </div>
        </section>

      </main>

      <footer className="footer relative z-10">
         <div className="footer-grid">
            <div className="footer-col">
               <h4>PRODUCT</h4>
               <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Fin Overview</a></li>
                  <li><a href="#">Channels</a></li>
                  <li><a href="#">Trust and Reliability</a></li>
                  <li><a href="#">Integrations</a></li>
                  <li><a href="#">Voice</a></li>
                  <li><a href="#">Procedures</a></li>
                  <li><a href="#">Insights</a></li>
                  <li><a href="#">Train</a></li>
                  <li><a href="#">Testing</a></li>
                  <li><a href="#">Intercom Suite ↗</a></li>
                  <li><a href="#">Fin for Zendesk</a></li>
                  <li><a href="#">Fin for Salesforce</a></li>
                  <li><a href="#">Customer Agent</a></li>
                  <li><a href="#">Pricing</a></li>
               </ul>
            </div>
            <div className="footer-col">
               <h4>AI TECHNOLOGY</h4>
               <ul>
                  <li><a href="#">AI Engine</a></li>
                  <li><a href="#">Models</a></li>
                  <li><a href="#">AI Research ↗</a></li>
               </ul>
            </div>
            <div className="footer-col">
               <h4>SOLUTIONS</h4>
               <ul>
                  <li><a href="#">Financial Services</a></li>
                  <li><a href="#">Retail and ecommerce</a></li>
                  <li><a href="#">Technology</a></li>
                  <li><a href="#">Enterprise</a></li>
                  <li><a href="#">Gaming</a></li>
               </ul>
            </div>
            <div className="footer-col">
               <h4>RESOURCES</h4>
               <ul>
                  <li><a href="#">Customers</a></li>
                  <li><a href="#">Pioneer ↗</a></li>
                  <li><a href="#">Building frontier AI products ↗</a></li>
                  <li><a href="#">Webinars ↗</a></li>
                  <li><a href="#">Fin 3</a></li>
                  <li><a href="#">Built For You ↗</a></li>
                  <li><a href="#">Product Updates</a></li>
                  <li><a href="#">Help Center</a></li>
                  <li><a href="#">Safety and Security ↗</a></li>
                  <li><a href="#">Professional Services</a></li>
                  <li><a href="#">Ideas Blog ↗</a></li>
                  <li><a href="#">AI Agent Blueprint</a></li>
                  <li><a href="#">Learn Blog</a></li>
                  <li><a href="#">2026 Transformation Report ↗</a></li>
                  <li><a href="#">Customer Service Glossary</a></li>
               </ul>
            </div>
            <div className="footer-col">
               <h4>FIN IN ACTION</h4>
               <ul>
                  <li><a href="#">View demo</a></li>
                  <li><a href="#">Free trial</a></li>
                  <li><a href="#">Contact sales</a></li>
                  <li><a href="#">Sign in</a></li>
               </ul>
               <h4 className="mt-8">COMPANY</h4>
               <ul>
                  <li><a href="#">Careers ↗</a></li>
               </ul>
            </div>
         </div>
         
         <div className="footer-bottom">
            <div className="footer-bottom-left">
               <span>An Intercom Product</span>
            </div>
            <div className="footer-bottom-links">
               <a href="#">Terms</a>
               <a href="#">Privacy</a>
               <a href="#">Security</a>
               <a href="#" className="privacy-choices"><svg viewBox="0 0 30 14" width="24" height="12"><rect width="30" height="14" rx="7" fill="#0052cc"/><circle cx="7" cy="7" r="5" fill="white"/><path d="M19 4L25 10M25 4L19 10" stroke="white" strokeWidth="1.5"/></svg> Your Privacy Choices</a>
            </div>
         </div>
      </footer>
    </div>
  );
}

export default App;
