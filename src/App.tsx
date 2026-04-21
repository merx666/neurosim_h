import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Layout } from './components/layout/Layout';
import { SubstanceGrid } from './components/ui/SubstanceGrid';
import { SUBSTANCES } from './data/substances';
import { Timeline } from './components/ui/Timeline';
import { BrainMap } from './components/ui/BrainMap';
import { SynapseAnimation } from './components/ui/SynapseAnimation';
import { MixExplorer } from './components/ui/MixExplorer';
import * as Constants from './data/constants';

function NavBar() {
  const { language } = useLanguage();
  const location = useLocation();
  return (
    <nav className="app-nav">
      <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
        {language === 'pl' ? '🧠 SUBSTANCJE' : '🧠 SUBSTANCES'}
      </Link>
      <Link to="/mixes" className={`nav-link ${location.pathname === '/mixes' ? 'active' : ''}`}>
        {language === 'pl' ? '⚗️ INTERAKCJE MIKSÓW' : '⚗️ MIX INTERACTIONS'}
      </Link>
    </nav>
  );
}

function SubstanceView() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activePhaseInt, setActivePhaseInt] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'guide' | 'brain' | 'extra'>('guide');
  const { language } = useLanguage();
  
  const selectedSubstance = selectedId ? SUBSTANCES[selectedId] : null;
  const synData = selectedId ? (Constants as any).SYN?.[selectedId] : null;

  const handleSelect = (id: string) => {
    setSelectedId(id);
    setActivePhaseInt(0);
    setActiveTab('guide');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getLocalizedText = (obj: any, key: string) => {
    if (!obj) return '';
    const localizedKey = language === 'en' ? `${key}_en` : key;
    return obj[localizedKey] || obj[key] || '';
  };

  return (
    <>
      {!selectedSubstance ? (
        <div className="home-screen">
          <header className="home-header">
            <h1 className="heading text-gradient">
              {language === 'pl' 
                ? 'Silnik Psychofarmakologii' 
                : 'Psychopharmacology Engine'}
            </h1>
            <p className="subtitle text-dim">
              {language === 'pl'
                ? 'Wizualne kompendium mechanizmów działania substancji psychoaktywnych.'
                : 'A visual compendium of psychotropic drug mechanisms.'}
            </p>
          </header>
          
          <SubstanceGrid onSelect={handleSelect} />
        </div>
      ) : (
        <div className="detail-screen animate-fade-in">
          <button 
            className="back-link" 
            onClick={() => setSelectedId(null)}
          >
            ← {language === 'pl' ? 'POWRÓT DO LISTY' : 'BACK TO LIST'}
          </button>
          
          <header className="detail-header">
            <div className="title-area">
              <h1 className="heading" style={{ color: selectedSubstance.color }}>
                {language === 'en' ? (selectedSubstance.name_en || selectedSubstance.name) : selectedSubstance.name}
              </h1>
              <p className="substance-full-name text-dim">{selectedSubstance.fullName}</p>
            </div>
            <div className="class-badge" style={{ borderColor: selectedSubstance.color + '44' }}>
               {language === 'en' ? (selectedSubstance.class_en || selectedSubstance.class) : selectedSubstance.class}
            </div>
          </header>

          <div className="viz-grid">
            <div className="viz-card">
              <SynapseAnimation 
                substance={selectedSubstance} 
                activeIndex={activePhaseInt} 
              />
            </div>
            <div className="viz-card">
              <BrainMap 
                activeRegions={activePhaseInt !== null ? selectedSubstance.brainMap?.[activePhaseInt] || [] : []} 
              />
            </div>
          </div>

          <Timeline 
            phases={selectedSubstance.phases} 
            activeIndex={activePhaseInt} 
            onSelect={setActivePhaseInt}
            accentColor={selectedSubstance.color}
          />

          <div className="info-section glass">
            <div className="tabs">
              <button 
                className={`tab ${activeTab === 'guide' ? 'active' : ''}`}
                onClick={() => setActiveTab('guide')}
              >
                {language === 'pl' ? 'FARMAKOLOGIA' : 'GUIDE'}
              </button>
              <button 
                className={`tab ${activeTab === 'brain' ? 'active' : ''}`}
                onClick={() => setActiveTab('brain')}
              >
                {language === 'pl' ? 'MAPA REGIONÓW' : 'BRAIN DETAIL'}
              </button>
            </div>
            
            <div className="tab-content html-content">
              {activeTab === 'guide' && (
                <div dangerouslySetInnerHTML={{ __html: getLocalizedText(synData, 'guide') }} />
              )}
              {activeTab === 'brain' && (
                <div dangerouslySetInnerHTML={{ __html: getLocalizedText(synData, 'brain') }} />
              )}
            </div>
          </div>
        </div>
      )}
      
      <style>{`
        .home-header {
          margin-bottom: 60px;
          text-align: center;
        }
        .home-header h1 {
          font-size: clamp(2.5rem, 8vw, 4rem);
          font-weight: 800;
          margin-bottom: 12px;
          line-height: 1.1;
        }
        .home-header .subtitle {
          font-size: 1.125rem;
          max-width: 600px;
          margin: 0 auto;
        }
        .back-link {
          background: none;
          border: none;
          color: var(--text-dim);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          cursor: pointer;
          margin-bottom: 32px;
          transition: var(--transition);
          letter-spacing: 0.1em;
          opacity: 0.6;
        }
        .back-link:hover {
          color: white;
          opacity: 1;
        }
        .detail-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 40px;
          gap: 24px;
        }
        .substance-full-name {
          font-family: var(--font-mono);
          font-size: 0.875rem;
          margin-top: 4px;
        }
        .class-badge {
          padding: 6px 16px;
          border: 1px solid var(--surface-border);
          border-radius: 100px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-dim);
          text-transform: uppercase;
          background: rgba(255,255,255,0.02);
        }
        .viz-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 24px;
          margin-bottom: 32px;
        }
        .info-section {
          padding: 0;
          border-radius: 20px;
          overflow: hidden;
          margin-top: 40px;
        }
        .tabs {
          display: flex;
          background: rgba(0,0,0,0.2);
          border-bottom: 1px solid var(--surface-border);
        }
        .tab {
          padding: 16px 24px;
          background: none;
          border: none;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-dim);
          cursor: pointer;
          transition: var(--transition);
          border-right: 1px solid var(--surface-border);
          letter-spacing: 0.1em;
        }
        .tab.active {
          background: rgba(255,255,255,0.05);
          color: white;
          box-shadow: inset 0 -2px 0 var(--primary);
        }
        .tab-content {
          padding: 32px;
          line-height: 1.7;
          color: var(--text-dim);
        }
        .html-content b { color: white; }
        .html-content p { margin-bottom: 1.5rem; }
        .html-content .guide-legend, .html-content .guide-row, .html-content .brain-region-row {
          margin-bottom: 12px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.875rem;
        }
        .html-content .guide-dot, .html-content .brain-region-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-top: 6px;
          flex-shrink: 0;
        }
        .html-content .brain-region-name {
          font-weight: 700;
          color: white;
          min-width: 80px;
        }

        @media (max-width: 900px) {
          .viz-grid {
            grid-template-columns: 1fr;
          }
          .detail-header {
            flex-direction: column;
            gap: 16px;
          }
        }
      `}</style>
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Layout>
          <NavBar />
          <Routes>
            <Route path="/" element={<SubstanceView />} />
            <Route path="/mixes" element={<MixExplorer />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
