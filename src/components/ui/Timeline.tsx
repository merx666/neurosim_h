import React from 'react';
import type { Phase } from '../../types/substance';
import { useLanguage } from '../../context/LanguageContext';

interface TimelineProps {
  phases: Phase[];
  activeIndex: number | null;
  onSelect: (index: number | null) => void;
  accentColor: string;
}

export const Timeline: React.FC<TimelineProps> = ({ 
  phases, 
  activeIndex, 
  onSelect, 
  accentColor 
}) => {
  const { language } = useLanguage();
  
  const totalDuration = phases.reduce((sum, p) => sum + p.d, 0);
  const totalHours = Math.floor(totalDuration / 60);
  const totalMinutes = totalDuration % 60;

  return (
    <div className="timeline-wrapper">
      <div className="timeline-header">
        <h3 className="timeline-title">
          {language === 'pl' ? 'LINIA CZASU' : 'TIMELINE'}
        </h3>
        <div className="timeline-duration">
          {totalHours > 0 ? `${totalHours}h ` : ''}{totalMinutes}min
        </div>
      </div>

      <div className="timeline-bar-container">
        {phases.map((phase, idx) => {
          const width = (phase.d / totalDuration) * 100;
          const isActive = activeIndex === idx;
          
          return (
            <div 
              key={idx}
              className={`timeline-phase ${isActive ? 'active' : ''}`}
              style={{ 
                width: `${width}%`,
                '--phase-color': phase.c,
                '--accent-color': accentColor
              } as any}
              onClick={() => onSelect(isActive ? null : idx)}
            >
              <div className="phase-fill" style={{ height: `${phase.i}%` }}></div>
              <div className="phase-label">
                {width > 10 && phase.n.toUpperCase()}
              </div>
            </div>
          );
        })}
      </div>

      <div className="timeline-axis">
        <span>0 min</span>
        <span>{totalHours > 0 ? `${totalHours}h ` : ''}{totalMinutes}min</span>
      </div>

      {activeIndex !== null && (
        <div className="phase-detail animate-fade-in" style={{ borderColor: phases[activeIndex].c + '44' }}>
          <span className="phase-name" style={{ color: phases[activeIndex].c }}>
            {phases[activeIndex].n.toUpperCase()}
          </span>
          <span className="phase-divider">//</span>
          <span className="phase-stats">
            {phases[activeIndex].d} min · {language === 'pl' ? 'intensywność' : 'intensity'} {phases[activeIndex].i}%
          </span>
        </div>
      )}

      <style>{`
        .timeline-wrapper {
          margin: 32px 0;
          user-select: none;
        }
        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 12px;
        }
        .timeline-title {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-dim);
          letter-spacing: 0.15em;
        }
        .timeline-duration {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-dim);
          opacity: 0.6;
        }
        .timeline-bar-container {
          display: flex;
          height: 48px;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--surface-border);
          border-radius: 8px;
          overflow: hidden;
        }
        .timeline-phase {
          position: relative;
          cursor: pointer;
          transition: var(--transition);
          border-right: 1px solid rgba(255,255,255,0.05);
        }
        .timeline-phase:last-child {
          border-right: none;
        }
        .timeline-phase:hover {
          background: rgba(255,255,255,0.05);
        }
        .timeline-phase.active {
          background: color-mix(in srgb, var(--phase-color), transparent 80%);
          box-shadow: inset 0 0 15px color-mix(in srgb, var(--phase-color), transparent 90%);
        }
        .phase-fill {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: var(--phase-color);
          opacity: 0.15;
          transition: var(--transition);
        }
        .timeline-phase.active .phase-fill {
          opacity: 0.3;
        }
        .phase-label {
          position: relative;
          z-index: 1;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-size: 0.625rem;
          font-weight: 600;
          color: var(--phase-color);
          padding: 0 4px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          transition: var(--transition);
        }
        .timeline-phase.active .phase-label {
          color: white;
          text-shadow: 0 0 10px var(--phase-color);
        }
        .timeline-axis {
          display: flex;
          justify-content: space-between;
          margin-top: 6px;
          font-family: var(--font-mono);
          font-size: 0.625rem;
          color: var(--text-dim);
          opacity: 0.5;
        }
        .phase-detail {
          margin-top: 16px;
          padding: 12px 16px;
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--surface-border);
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.8125rem;
        }
        .phase-name {
          font-family: var(--font-mono);
          font-weight: 700;
        }
        .phase-divider {
          color: var(--text-dark);
          opacity: 0.3;
        }
        .phase-stats {
          color: var(--text-dim);
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};
