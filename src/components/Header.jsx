import { IconLogo, IconUser, IconMenu } from './ui/Icons';

export default function Header({ isScrolled }) {
  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-left mobile-only">
          <a href="/" className="logo-link"><IconLogo /></a>
        </div>

        <nav className="desktop-nav">
          <a href="/" className="logo-link"><IconLogo /></a>
          <ul className="nav-actions">
            <li><a href="https://dashboard.argide.ai" className="icon-btn"><IconUser /></a></li>
            <li><a href="#" className="nav-link">Contact sales</a></li>
          </ul>
          <div className="nav-divider"></div>
          <a href="#" className="btn-primary">Start free trial</a>
        </nav>

        <div className="mobile-actions mobile-only">
          <button className="menu-btn"><IconMenu /></button>
        </div>
      </div>
    </header>
  );
}
