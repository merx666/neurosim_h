import React from 'react';
import { SUBSTANCES } from '../../data/substances';
import { CATS as CATEGORIES } from '../../data/constants';
import { useLanguage } from '../../context/LanguageContext';
import { SubstanceCard } from './SubstanceCard';

interface SubstanceGridProps {
  onSelect: (id: string) => void;
}

// Pre-compute grouped substances outside the component to prevent O(N) recalculation on every render
const GROUPED_SUBSTANCES = Object.values(SUBSTANCES).reduce((acc, s) => {
  if (!acc[s.category]) acc[s.category] = [];
  acc[s.category].push(s);
  return acc;
}, {} as Record<string, typeof SUBSTANCES[string][]>);

export const SubstanceGrid: React.FC<SubstanceGridProps> = ({ onSelect }) => {
  const { language } = useLanguage();

  return (
    <div className="substance-grid-container animate-fade-in">
      {Object.entries(CATEGORIES).map(([catId, catNames]) => {
        const categorySubstances = GROUPED_SUBSTANCES[catId];
        if (!categorySubstances) return null;
        
        const catName = language === 'pl' ? (catNames as any).pl : (catNames as any).en;
        
        return (
          <section key={catId} className="category-section">
            <h2 className="category-title">{catName}</h2>
            <div className="grid">
              {categorySubstances.map(s => (
                <SubstanceCard key={s.id} substance={s} onClick={onSelect} />
              ))}
            </div>
          </section>
        );
      })}
      
      <style>{`
        .substance-grid-container {
          display: flex;
          flex-direction: column;
          gap: 48px;
        }
        .category-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .category-title {
          font-family: var(--font-mono);
          font-size: 0.875rem;
          color: var(--text-dark);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          padding-left: 4px;
          border-left: 1px solid var(--surface-border);
          padding-top: 4px;
          padding-bottom: 4px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 12px;
        }
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
