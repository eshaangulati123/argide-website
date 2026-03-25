import { useState } from 'react';
import { IconLogo, IconUser, IconMenu, IconClose } from './ui/Icons';

export default function Header({ isScrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-left mobile-only">
          <a href="/" className="logo-link"><IconLogo width="38" height="38" /><span className="logo-wordmark">Argide</span></a>
        </div>

        <nav className="desktop-nav">
          <a href="/" className="logo-link"><IconLogo width="38" height="38" /><span className="logo-wordmark">Argide</span></a>
          <ul className="nav-actions">
            <li><a href="https://dashboard.argide.ai" className="icon-btn"><IconUser /></a></li>
            <li><a href="https://cal.com/eshaangulati" target="_blank" rel="noopener noreferrer" className="nav-link">Contact sales</a></li>
          </ul>
          <div className="nav-divider"></div>
          <a href="https://cal.com/eshaangulati" target="_blank" rel="noopener noreferrer" className="btn-primary">Start free trial</a>
        </nav>

        <div className="mobile-actions mobile-only">
          <a href="https://cal.com/eshaangulati" target="_blank" rel="noopener noreferrer" className="btn-outline light mobile-contact-btn">Contact sales</a>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="https://cal.com/eshaangulati" target="_blank" rel="noopener noreferrer" className="mobile-menu-item">Start free trial</a>
          <a href="https://dashboard.argide.ai" className="mobile-menu-item">Sign in</a>
          <a href="https://cal.com/eshaangulati" target="_blank" rel="noopener noreferrer" className="mobile-menu-item">Contact sales</a>
          <a href="https://cal.com/eshaangulati" target="_blank" rel="noopener noreferrer" className="mobile-menu-item">View demo</a>
        </div>
      )}
    </header>
  );
}
