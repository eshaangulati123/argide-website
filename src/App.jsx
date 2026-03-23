import React, { useState, useEffect } from 'react';

import './styles/global.css';
import './styles/components.css';
import './styles/layout.css';
import './styles/header.css';
import './styles/hero.css';
import './styles/capabilities.css';
import './styles/performance.css';
import './styles/integrations.css';
import './styles/technology.css';
import './styles/pricing.css';
import './styles/cta.css';
import './styles/footer.css';

import Header from './components/Header';
import Hero from './components/Hero';
import { MobileSectionNav, Sidebar } from './components/SectionNav';
import Capabilities from './components/Capabilities';
import Performance from './components/Performance';
import Integrations from './components/Integrations';
import Technology from './components/Technology';
import Pricing from './components/Pricing';
import BottomCTA from './components/BottomCTA';
import CustomerAgent from './components/CustomerAgent';
import Footer from './components/Footer';

import { sectionList } from './data/content';

function App() {
  const [activeSection, setActiveSection] = useState('01');
  const [sectionProgress, setSectionProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeEngineStep, setActiveEngineStep] = useState(0);
  const mobileNavRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['capabilities', 'performance', 'integrations', 'technology', 'pricing'];
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
      <Header isScrolled={isScrolled} />

      <main className="main-content">
        <Hero />

        <MobileSectionNav
          activeSection={activeSection}
          progressPercent={progressPercent}
          mobileNavRef={mobileNavRef}
        />

        <div className="content-layout relative z-10">
          <Sidebar activeSection={activeSection} sectionProgress={sectionProgress} />

          <div className="scroll-content">
            <Capabilities />
            <Performance />
            <Integrations />
            <Technology activeEngineStep={activeEngineStep} setActiveEngineStep={setActiveEngineStep} />
            <Pricing />
          </div>
        </div>

        <BottomCTA />
        <CustomerAgent />
      </main>

      <Footer />
    </div>
  );
}

export default App;
