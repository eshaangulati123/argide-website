import CardBrackets from './ui/CardBrackets';
import SectionLabel from './ui/SectionLabel';
import { performance } from '../data/content';

function LineChart() {
  return (
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
      </defs>
      {[60, 110, 160, 210, 260, 310, 350].map((y, i) => (
        <line key={i} x1="50" y1={y} x2="880" y2={y} stroke="rgba(0,0,0,0.08)" strokeDasharray="8 8" />
      ))}
      {['70%','60%','50%','40%','30%','20%','10%'].map((label, i) => (
        <text key={i} x="45" y={60 + i * 50 + 4} textAnchor="end" className="chart-axis-label">{label}</text>
      ))}
      <path d="M60,320 L100,310 L140,305 L180,300 L220,290 L260,275 L300,260 L340,240 L380,230 L420,210 L460,200 L500,185 L540,175 L560,170 L600,160 L640,155 L680,140 L720,130 L760,115 L800,105 L840,90 L870,80 L870,350 L60,350 Z" fill="url(#dotPatternChart)" />
      <path d="M60,320 L100,310 L140,305 L180,300 L220,290 L260,275 L300,260 L340,240 L380,230 L420,210 L460,200 L500,185 L540,175 L560,170 L600,160 L640,155 L680,140 L720,130 L760,115 L800,105 L840,90 L870,80 L870,350 L60,350 Z" fill="url(#areaFillGrad)" opacity="0.6" />
      <path d="M60,320 L100,310 L140,305 L180,300 L220,290 L260,275 L300,260 L340,240 L380,230 L420,210 L460,200 L500,185 L540,175 L560,170 L600,160 L640,155 L680,140 L720,130 L760,115 L800,105 L840,90 L870,80" fill="none" stroke="url(#lineGradientH)" strokeWidth="2.5" />
      {[[60,320],[100,310],[140,305],[180,300],[220,290],[260,275],[300,260],[340,240],[380,230],[420,210],[460,200],[500,185],[540,175],[560,170],[600,160],[640,155],[680,140],[720,130],[760,115],[800,105],[840,90],[870,80]].map(([cx,cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3.5" fill="white" stroke="#FF5600" strokeWidth="1.5" opacity={i < 3 ? 0.3 + i * 0.2 : 1} />
      ))}
      <path d="M60,330 L100,325 L140,328 L180,320 L220,315 L260,310 L300,300 L340,290 L380,285 L420,270 L460,265 L500,255 L540,250 L560,245 L600,240 L640,235 L680,230 L720,225 L760,220 L800,215 L840,210 L870,205" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" strokeDasharray="6 6" />
      {['MAY 2023','JUN 2023','JUL 2023','SEP 2023','NOV 2023','DEC 2023','FEB 2024','APR 2024','JUN 2024','SEP 2024','OCT 2024','NOV 2024','DEC 2024','JAN 2025','FEB 2025','MAR 2025','APR 2025','MAY 2025','JUN 2025','JUL 2025','AUG 2025','OCT 2025','NOV 2025','DEC 2025'].map((label, i) => (
        <text key={i} x={60 + i * 35} y={370} textAnchor="end" className="chart-axis-label" transform={`rotate(-90, ${60 + i * 35}, 370)`}>{label}</text>
      ))}
    </svg>
  );
}

function BarChart() {
  return (
    <svg viewBox="0 0 450 315" className="bar-chart-svg">
      <defs>
        <pattern id="dotPatternInactive" width="7" height="7" patternUnits="userSpaceOnUse">
          <circle cx="0.5" cy="0.5" r="1" fill="rgba(0,0,0,0.25)" />
        </pattern>
        <pattern id="dotPatternActive" width="7" height="7" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="#EFEFEF" />
        </pattern>
      </defs>
      {[35, 70, 105, 140, 175, 210, 245, 280].map((y, i) => (
        <line key={i} x1="5" y1={y} x2="415" y2={y} stroke="rgba(0,0,0,0.15)" strokeDasharray="8 8" />
      ))}
      {['80%','60%','40%','20%'].map((label, i) => (
        <text key={i} x="2" y={35 + i * 70 + 4} textAnchor="start" className="chart-axis-label">{label}</text>
      ))}
      <line x1="5" y1="285" x2="415" y2="285" stroke="rgba(0,0,0,0.4)" />
      <rect x="55" y="145" width="100" height="140" fill="#E8E7E0" />
      <rect x="55" y="145" width="100" height="140" fill="url(#dotPatternInactive)" stroke="rgba(0,0,0,0.4)" strokeWidth="1" />
      <rect x="175" y="142" width="100" height="143" fill="#E8E7E0" />
      <rect x="175" y="142" width="100" height="143" fill="url(#dotPatternInactive)" stroke="rgba(0,0,0,0.4)" strokeWidth="1" />
      <rect x="295" y="60" width="100" height="225" fill="#FF5600" />
      <rect x="295" y="60" width="100" height="225" fill="url(#dotPatternActive)" stroke="#FF5600" strokeWidth="1" />
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
      <text x="105" y="305" textAnchor="middle" className="chart-axis-label">DECAGON</text>
      <text x="225" y="305" textAnchor="middle" className="chart-axis-label">FORETHOUGHT</text>
      <text x="345" y="305" textAnchor="middle" className="chart-bar-label-active">ARGIDE</text>
    </svg>
  );
}

function DashedTapers() {
  return (
    <>
      <span className="dashed-taper top-left"></span>
      <span className="dashed-taper top-right"></span>
      <span className="dashed-taper bottom-left"></span>
      <span className="dashed-taper bottom-right"></span>
    </>
  );
}

export default function Performance() {
  return (
    <section id="performance" className="card-section light-card mt-6">
      <CardBrackets />
      <SectionLabel text={performance.label} withDivider />
      <h2 className="capabilities-heading">
        {performance.headingStart} <span className="italic-serif">{performance.headingEmphasis}</span>
      </h2>

      <div className="chart-label" style={{marginBottom: '8px', marginTop: '40px'}}>{performance.lineChartLabel}</div>
      <div className="chart-container">
        <DashedTapers />
        <div className="line-chart-area">
          <LineChart />
        </div>
      </div>

      <div className="performance-bottom-grid">
        <div className="perf-box-wrapper">
          <div className="chart-label" style={{marginBottom: '8px'}}>{performance.barChartLabel}</div>
          <div className="chart-box bordered-box">
            <DashedTapers />
            <div className="bar-chart-area">
              <BarChart />
              <div className="bar-chart-caption">{performance.barChartCaption}</div>
            </div>
          </div>
        </div>

        <div className="perf-box-wrapper">
          <div className="chart-label" style={{marginBottom: '8px'}}>{performance.testimonialLabel}</div>
          <div className="testimonial-box bordered-box">
            <DashedTapers />
            <div className="testimonial-content">
              <img
                src="/angelo-livanos.png"
                alt="Sean Kilachand"
                className="testimonial-avatar"
              />
              <blockquote>
                &ldquo;{performance.testimonialQuote}<mark>{performance.testimonialHighlight}</mark>&rdquo;
              </blockquote>
              <cite>{performance.testimonialAuthor}</cite>
            </div>
          </div>
        </div>
      </div>

      <div className="video-section mt-16">
        <div className="video-player">
          <div className="video-person-bg"></div>
          <div className="video-person-silhouette"></div>
          <div className="video-content-top">
            <h2 className="video-company-name">
              PAASA{' '}
              <img src="/yc-logo.png" alt="Y Combinator" className="video-yc-logo" />
              {' '}S24
            </h2>
            <p>{performance.videoQuote}</p>
          </div>
        </div>

        <div className="video-playlist">
          <div className="playlist-grid">
            {performance.videoItems.map((item, i) => (
              <div key={i} className={`playlist-item${i === 0 ? ' active' : ''}`}>
                <div className="thumb gray-box"></div>
                <div className="info">
                  <span className="mono-label" style={{color: 'rgba(0,0,0,0.5)', fontSize: '0.65rem', marginBottom: '8px'}}>{item.status}</span>
                  <h4 style={{color: '#000'}}>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
