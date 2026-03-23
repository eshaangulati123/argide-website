import React from 'react';
import { sectionList } from '../data/content';

export function MobileSectionNav({ activeSection, progressPercent, mobileNavRef }) {
  return (
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
  );
}

export function Sidebar({ activeSection, sectionProgress }) {
  return (
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
  );
}
