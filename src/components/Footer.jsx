import { footer } from '../data/content';

const BOOKING_LINK = 'https://calendar.app.google/HfGA4PQZXRLKTGpR9';
const STATUS_LINK = 'https://stats.uptimerobot.com/WXUivgIFAV';

export default function Footer() {
  return (
    <footer className="footer relative z-10">
      <div className="footer-grid">
        {footer.columns.map((col) => (
          <div key={col.title} className="footer-col">
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link}>
                  <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="footer-col">
          <h4>{footer.actionColumn.title}</h4>
          <ul>
            {footer.actionColumn.links.map((link) => (
              <li key={link}>
                <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer">{link}</a>
              </li>
            ))}
          </ul>
          <h4 className="mt-8">{footer.actionColumn.companyTitle}</h4>
          <ul>
            {footer.actionColumn.companyLinks.map((link) => (
              <li key={link}>
                <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <img
            src="/compliance/soc2-type2.webp"
            alt="SOC 2 Type 2 certified"
            className="footer-soc-badge"
            loading="lazy"
            decoding="async"
          />
          <div className="footer-bottom-left-text">
            <div className="footer-bottom-left-row">
              <span>{footer.bottomLeft}</span>
              <span className="footer-soc-text">
                <svg
                  className="footer-soc-icon"
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2L4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5 12l2.5 2.5L15.5 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                SOC 2 Certified
              </span>
            </div>
            <a
              href={STATUS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="status-pill"
              aria-label="Status: all systems operational"
            >
              <span className="status-pill-dot" aria-hidden="true" />
              All systems operational
            </a>
          </div>
        </div>
        <div className="footer-bottom-links">
          {footer.bottomLinks.map((link) => (
            <span key={link}>{link}</span>
          ))}
          <span className="privacy-choices">
            <svg viewBox="0 0 30 14" width="24" height="12"><rect width="30" height="14" rx="7" fill="#0052cc"/><circle cx="7" cy="7" r="5" fill="white"/><path d="M19 4L25 10M25 4L19 10" stroke="white" strokeWidth="1.5"/></svg>
            Your Privacy Choices
          </span>
        </div>
      </div>
    </footer>
  );
}
