import React from 'react';
import { BRAIN_R as BRAIN_REGIONS, NT_COL as NT_COLORS } from '../../data/constants';
import { useLanguage } from '../../context/LanguageContext';

interface ActiveRegion {
  r: string; // Region ID (e.g. "VTA")
  i: number; // Intensity 0-1
  nt: string; // Neurotransmitter ID (e.g. "da")
}

interface BrainMapProps {
  activeRegions: ActiveRegion[];
}

export const BrainMap: React.FC<BrainMapProps> = ({ activeRegions }) => {
  const { language } = useLanguage();

  // Brain SVG dimensions (from original coordinates)
  const width = 220;
  const height = 180;

  return (
    <div className="brain-map-wrapper glass">
      <div className="brain-map-header">
        <h3 className="section-title">
          {language === 'pl' ? 'MAPA MÓZGU' : 'BRAIN MAP'}
        </h3>
        <p className="section-subtitle">
          {language === 'pl' 
            ? 'Lokalizacja i intensywność zmian neurochemicznych.' 
            : 'Localization and intensity of neurochemical changes.'}
        </p>
      </div>

      <div className="svg-container">
        <svg viewBox={`0 0 ${width} ${height}`} className="brain-svg">
          {/* Detailed Brain Contour (Profile) */}
          <path 
            className="brain-outline"
            d="M 40,80 C 40,30 80,20 120,20 C 170,20 200,50 200,100 C 200,140 170,160 140,160 C 120,160 110,145 100,145 C 90,145 80,160 60,160 C 30,160 20,130 20,100 C 20,90 30,80 40,80 Z"
            fill="rgba(255,255,255,0.03)"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1.5"
          />
          
          {/* Region Indicators */}
          {activeRegions.map((region, idx) => {
            const coords = (BRAIN_REGIONS as any)[region.r];
            if (!coords) return null;

            const ntColor = (NT_COLORS as any)[region.nt.toUpperCase()] || '#ffffff';
            const radius = 4 + (region.i * 6);
            const opacity = 0.3 + (region.i * 0.7);

            return (
              <g key={idx} className="region-group">
                <circle 
                  cx={coords.x} 
                  cy={coords.y} 
                  r={radius} 
                  fill={ntColor}
                  className="region-dot-glow"
                  style={{ opacity: opacity * 0.3 }}
                >
                  <animate 
                    attributeName="r" 
                    values={`${radius};${radius + 2};${radius}`} 
                    dur="2s" 
                    repeatCount="indefinite" 
                  />
                </circle>
                <circle 
                  cx={coords.x} 
                  cy={coords.y} 
                  r={radius * 0.6} 
                  fill={ntColor}
                  stroke="white"
                  strokeWidth="0.5"
                  style={{ opacity: opacity }}
                />
                
                {/* Region Label (Visible on hover or small dots) */}
                <text 
                  x={coords.x} 
                  y={coords.y - radius - 6} 
                  textAnchor="middle" 
                  className="region-label"
                >
                  {region.r}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="brain-legend">
        {Array.from(new Set(activeRegions.map(r => r.nt.toUpperCase()))).map(nt => (
          <div key={nt} className="legend-item">
            <span 
              className="legend-dot" 
              style={{ background: (NT_COLORS as any)[nt] }}
            ></span>
            <span className="legend-name">{nt}</span>
          </div>
        ))}
      </div>

      <style>{`
        .brain-map-wrapper {
          padding: 24px;
          border-radius: 20px;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .brain-map-header {
          margin-bottom: 20px;
        }
        .section-title {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-dim);
          letter-spacing: 0.15em;
          margin-bottom: 4px;
        }
        .section-subtitle {
          font-size: 0.75rem;
          color: var(--text-dark);
        }
        .svg-container {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
        }
        .brain-svg {
          width: 100%;
          max-width: 300px;
          height: auto;
          filter: drop-shadow(0 0 20px rgba(0,0,0,0.3));
        }
        .brain-outline {
          transition: var(--transition);
        }
        .region-dot-glow {
          filter: blur(4px);
        }
        .region-label {
          font-family: var(--font-mono);
          font-size: 8px;
          font-weight: 700;
          fill: var(--text-dim);
          opacity: 0;
          transition: var(--transition);
        }
        .region-group:hover .region-label {
          opacity: 1;
        }
        .brain-legend {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid var(--surface-border);
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .legend-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .legend-name {
          font-family: var(--font-mono);
          font-size: 0.625rem;
          color: var(--text-dim);
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};
