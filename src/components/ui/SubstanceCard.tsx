import React from 'react';
import type { Substance } from '../../types/substance';
import { useLanguage } from '../../context/LanguageContext';
import { Card } from '../ui/Card';

interface SubstanceCardProps {
  substance: Substance;
  onClick: (id: string) => void;
}

export const SubstanceCard: React.FC<SubstanceCardProps> = ({ substance, onClick }) => {
  const { language } = useLanguage();
  
  const name = language === 'en' ? (substance.name_en || substance.name) : substance.name;
  const subClass = language === 'en' ? (substance.class_en || substance.class) : substance.class;

  return (
    <Card 
      className="substance-card-wrapper"
      onClick={() => onClick(substance.id)}
    >
      <div className="substance-card-content">
        <div className="accent-bar" style={{ backgroundColor: substance.color }}></div>
        <div className="info">
          <h3 className="substance-name">{name}</h3>
          <p className="substance-class">{subClass}</p>
        </div>
        <div className="arrow">→</div>
      </div>
      <style>{`
        .substance-card-wrapper {
          cursor: pointer;
          position: relative;
          padding: 0 !important;
          overflow: hidden;
        }
        .substance-card-content {
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          position: relative;
        }
        .accent-bar {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
        }
        .info { flex: 1; }
        .substance-name {
          font-size: 1.125rem;
          font-weight: 600;
          color: white;
          margin-bottom: 2px;
        }
        .substance-class {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .arrow {
          font-size: 1.25rem;
          color: var(--text-dark);
          transition: var(--transition);
          opacity: 0.3;
        }
        .substance-card-wrapper:hover .arrow {
          transform: translateX(4px);
          color: var(--primary);
          opacity: 1;
        }
      `}</style>
    </Card>
  );
};
