import { footer } from '../data/content';

export default function Footer() {
  return (
    <footer className="footer relative z-10">
      <div className="footer-grid">
        {footer.columns.map((col) => (
          <div key={col.title} className="footer-col">
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
        <div className="footer-col">
          <h4>{footer.actionColumn.title}</h4>
          <ul>
            {footer.actionColumn.links.map((link) => {
              const calLinks = ['View demo', 'Free trial', 'Contact sales'];
              return (
                <li key={link}>
                  <a
                    href={calLinks.includes(link) ? '/book/30min' : '#'}
                    target={calLinks.includes(link) ? '_blank' : undefined}
                    rel={calLinks.includes(link) ? 'noopener noreferrer' : undefined}
                  >{link}</a>
                </li>
              );
            })}
          </ul>
          <h4 className="mt-8">{footer.actionColumn.companyTitle}</h4>
          <ul>
            {footer.actionColumn.companyLinks.map((link) => (
              <li key={link}><a href="#">{link}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <span>{footer.bottomLeft}</span>
        </div>
        <div className="footer-bottom-links">
          {footer.bottomLinks.map((link) => (
            <a key={link} href="#">{link}</a>
          ))}
          <a href="#" className="privacy-choices">
            <svg viewBox="0 0 30 14" width="24" height="12"><rect width="30" height="14" rx="7" fill="#0052cc"/><circle cx="7" cy="7" r="5" fill="white"/><path d="M19 4L25 10M25 4L19 10" stroke="white" strokeWidth="1.5"/></svg>
            Your Privacy Choices
          </a>
        </div>
      </div>
    </footer>
  );
}
