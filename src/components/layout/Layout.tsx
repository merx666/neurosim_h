import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <nav className="navbar glass">
      <div className="nav-container">
        <div className="logo heading">NEUROSIM<span className="dot">.</span></div>
        <div className="nav-actions">
          <Button 
            variant="glass" 
            size="sm" 
            onClick={() => setLanguage(language === 'pl' ? 'en' : 'pl')}
          >
            {language.toUpperCase()}
          </Button>
        </div>
      </div>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 72px;
          z-index: 1000;
          display: flex;
          align-items: center;
          border-bottom: 1px solid var(--surface-border);
          border-top: none;
          border-left: none;
          border-right: none;
          border-radius: 0;
        }
        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: white;
        }
        .dot { color: var(--primary); }
        .nav-actions { display: flex; gap: 16px; }
      `}</style>
    </nav>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <div className="footer-content text-dim">
          &copy; 2026 Neurosim Project • Premium Psychopharmacology Simulation
        </div>
      </footer>
      <style>{`
        .layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .main-content {
          flex: 1;
          margin-top: 72px;
          padding: 40px;
          max-width: 1400px;
          margin-left: auto;
          margin-right: auto;
          width: 100%;
        }
        .footer {
          padding: 40px;
          border-top: 1px solid var(--surface-border);
          text-align: center;
          font-size: 0.875rem;
        }
      `}</style>
    </div>
  );
};
