import { useMemo, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getRiskConfig } from './RiskBadge';

interface SubstanceInfo {
  key: string;
  name_pl: string;
  name_en?: string;
  category: string;
}

interface InteractionInfo {
  a_key: string;
  b_key: string;
  risk: string;
  description_pl?: string;
  description_en?: string;
}

interface Props {
  substances: SubstanceInfo[];
  interactions: InteractionInfo[];
  onCellClick: (aKey: string, bKey: string) => void;
  selectedPair?: [string, string] | null;
}

const CAT_COLORS: Record<string, string> = {
  psychedelic: '#44ff00',
  cannabinoid: '#50e890',
  dissociative: '#0099ff',
  stimulant: '#ffcc00',
  entactogen: '#ee00ff',
  depressant: '#8866ff',
  opioid: '#9933ff',
  gabaergic: '#5599ff',
  psychiatric: '#ff6699',
};

export function InteractionMatrix({ substances, interactions, onCellClick, selectedPair }: Props) {
  const { language } = useLanguage();
  const [hoveredCell, setHoveredCell] = useState<[string, string] | null>(null);

  const interactionMap = useMemo(() => {
    const map: Record<string, string> = {};
    for (const ix of interactions) {
      map[`${ix.a_key}:${ix.b_key}`] = ix.risk;
      map[`${ix.b_key}:${ix.a_key}`] = ix.risk;
    }
    return map;
  }, [interactions]);

  const getName = (s: SubstanceInfo) => {
    if (language === 'en' && s.name_en) return s.name_en;
    return s.name_pl;
  };

  const cellSize = Math.max(32, Math.min(48, 800 / substances.length));

  const hoveredRisk = hoveredCell ? interactionMap[`${hoveredCell[0]}:${hoveredCell[1]}`] : null;
  const hoveredA = hoveredCell ? substances.find(s => s.key === hoveredCell[0]) : null;
  const hoveredB = hoveredCell ? substances.find(s => s.key === hoveredCell[1]) : null;

  return (
    <div className="interaction-matrix-wrap">
      <div className="matrix-scroll" style={{ 
        overflowX: 'auto', overflowY: 'auto', maxHeight: '70vh',
        overscrollBehavior: 'contain', WebkitOverflowScrolling: 'touch',
        boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)',
        borderRadius: '8px',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        <table className="interaction-matrix" style={{ borderCollapse: 'collapse', width: 'max-content' }}>
          <thead>
            <tr>
              <th style={{ 
                position: 'sticky', left: 0, top: 0, zIndex: 4, 
                background: '#0a0c14', minWidth: 120,
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                borderRight: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '4px 4px 6px rgba(0,0,0,0.3)'
              }} />
              {substances.map(s => {
                const isHoveredCol = hoveredCell && hoveredCell[1] === s.key;
                return (
                <th key={s.key} style={{
                  position: 'sticky', top: 0, zIndex: 3, 
                  background: isHoveredCol ? 'rgba(255,255,255,0.15)' : '#0a0c14',
                  writingMode: 'vertical-rl', textOrientation: 'mixed',
                  padding: '12px 8px', fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)', color: CAT_COLORS[s.category] || '#94a3b8',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  borderLeft: '1px solid rgba(255,255,255,0.02)',
                  maxWidth: cellSize, whiteSpace: 'nowrap',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
                  transition: 'background 0.15s ease',
                  verticalAlign: 'bottom',
                  userSelect: 'none'
                }}>
                  {getName(s)}
                </th>
              )})}
            </tr>
          </thead>
          <tbody>
            {substances.map(rowS => (
              <tr key={rowS.key}>
                <td style={{
                  position: 'sticky', left: 0, zIndex: 2, 
                  background: (hoveredCell && hoveredCell[0] === rowS.key) ? 'rgba(255,255,255,0.15)' : '#0a0c14',
                  padding: '8px 12px', fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)', color: CAT_COLORS[rowS.category] || '#94a3b8',
                  borderRight: '1px solid rgba(255,255,255,0.1)',
                  borderBottom: '1px solid rgba(255,255,255,0.02)',
                  whiteSpace: 'nowrap',
                  boxShadow: '4px 0 6px rgba(0,0,0,0.3)',
                  transition: 'background 0.15s ease',
                  textAlign: 'right',
                  userSelect: 'none'
                }}>
                  {getName(rowS)}
                </td>
                {substances.map(colS => {
                  const isSame = rowS.key === colS.key;
                  const risk = interactionMap[`${rowS.key}:${colS.key}`];
                  const cfg = risk ? getRiskConfig(risk) : null;
                  const isSelected = selectedPair &&
                    ((selectedPair[0] === rowS.key && selectedPair[1] === colS.key) ||
                     (selectedPair[0] === colS.key && selectedPair[1] === rowS.key));
                  
                  const isCrosshair = hoveredCell && (hoveredCell[0] === rowS.key || hoveredCell[1] === colS.key);
                  const isHoveredExact = hoveredCell && hoveredCell[0] === rowS.key && hoveredCell[1] === colS.key;

                  return (
                    <td
                      key={colS.key}
                      onClick={() => !isSame && risk && onCellClick(rowS.key, colS.key)}
                      onMouseEnter={() => setHoveredCell([rowS.key, colS.key])}
                      onMouseLeave={() => setHoveredCell(null)}
                      style={{
                        width: cellSize, height: cellSize, minWidth: cellSize, maxWidth: cellSize,
                        background: isSame 
                          ? 'rgba(255,255,255,0.02)'
                          : isHoveredExact
                            ? (cfg ? `${cfg.bg}` : 'rgba(255,255,255,0.15)')
                            : isSelected 
                              ? (cfg ? `${cfg.bg}` : 'rgba(255,255,255,0.1)')
                              : isCrosshair
                                ? (cfg ? `${cfg.bg}AA` : 'rgba(255,255,255,0.05)')
                                : (cfg ? cfg.bg : 'transparent'),
                        cursor: !isSame && risk ? 'pointer' : 'default',
                        border: isSelected 
                          ? `2px solid ${cfg?.color || '#fff'}` 
                          : isHoveredExact
                            ? `2px solid ${cfg?.color || 'rgba(255,255,255,0.8)'}`
                            : '1px solid rgba(255,255,255,0.03)',
                        transition: 'all 0.15s ease',
                        transform: isHoveredExact && !isSame ? 'scale(1.15)' : 'none',
                        zIndex: isHoveredExact ? 10 : 1,
                        position: isHoveredExact ? 'relative' : 'static',
                        textAlign: 'center', fontSize: '1.1rem',
                        userSelect: 'none'
                      }}
                    >
                      {isSame ? <span style={{ opacity: 0.1 }}>•</span> : cfg ? <span style={{ color: cfg.color }}>{cfg.icon}</span> : ''}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ display: 'flex', gap: 24, marginTop: 16, flexWrap: 'wrap' }}>
        <div className="matrix-legend" style={{
          display: 'flex', flexWrap: 'wrap', gap: 12, flex: 1,
          padding: '16px', borderRadius: 12,
          background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
        }}>
          {Object.entries(getRiskConfig('')).length === 0 ? null :
            ['low_synergy', 'low_no_interaction', 'low_potentiation', 'caution', 'dangerous', 'life_threat'].map(r => {
              const c = getRiskConfig(r);
              return (
                <span key={r} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: c.color,
                  background: c.bg, padding: '6px 10px', borderRadius: '6px',
                  border: `1px solid ${c.color}33`
                }}>
                  <span style={{ fontSize: '12px' }}>{c.icon}</span>
                  {language === 'en' ? c.labelEn : c.labelPl}
                </span>
              );
            })
          }
        </div>

        {hoveredA && hoveredB && hoveredA.key !== hoveredB.key && hoveredRisk && (
          <div className="hover-info glass" style={{
            padding: '16px 24px', borderRadius: 12, minWidth: 300, flex: 1,
            display: 'flex', flexDirection: 'column', gap: 8,
            border: `1px solid ${getRiskConfig(hoveredRisk).color}55`,
            background: `linear-gradient(135deg, rgba(0,0,0,0.5), ${getRiskConfig(hoveredRisk).bg}22)`
          }}>
            <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
              {language === 'pl' ? 'INTERAKCJA:' : 'INTERACTION:'}
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
              <span style={{ color: CAT_COLORS[hoveredA.category] }}>{getName(hoveredA)}</span>
              <span style={{ margin: '0 12px', color: 'var(--text-dim)' }}>×</span>
              <span style={{ color: CAT_COLORS[hoveredB.category] }}>{getName(hoveredB)}</span>
            </div>
            <div style={{ 
              display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 4,
              color: getRiskConfig(hoveredRisk).color, fontSize: '1rem', fontWeight: 600
            }}>
              <span>{getRiskConfig(hoveredRisk).icon}</span>
              {language === 'en' ? getRiskConfig(hoveredRisk).labelEn : getRiskConfig(hoveredRisk).labelPl}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
