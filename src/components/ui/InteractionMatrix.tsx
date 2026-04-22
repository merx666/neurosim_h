import { useMemo, useState, useRef } from 'react';
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
  psychedelic:  '#44ff00',
  cannabinoid:  '#50e890',
  dissociative: '#0099ff',
  stimulant:    '#ffcc00',
  entactogen:   '#ee00ff',
  depressant:   '#8866ff',
  opioid:       '#9933ff',
  gabaergic:    '#5599ff',
  cathinone:    '#00ff9f',
  psychiatric:  '#ff6699',
};

const CAT_ORDER = [
  'cathinone', 'stimulant', 'entactogen',
  'psychedelic', 'dissociative', 'cannabinoid',
  'opioid', 'gabaergic', 'depressant', 'psychiatric',
];

const CAT_LABELS_PL: Record<string, string> = {
  cathinone: 'Katynony', stimulant: 'Stymulanty', entactogen: 'Entaktogeny',
  psychedelic: 'Psychedeliki', dissociative: 'Dysocjanty', cannabinoid: 'Kannabinoidy',
  opioid: 'Opioidy', gabaergic: 'GABA-ergiki', depressant: 'Depresanty', psychiatric: 'Psychiatryczne',
};
const CAT_LABELS_EN: Record<string, string> = {
  cathinone: 'Cathinones', stimulant: 'Stimulants', entactogen: 'Entactogens',
  psychedelic: 'Psychedelics', dissociative: 'Dissociatives', cannabinoid: 'Cannabinoids',
  opioid: 'Opioids', gabaergic: 'GABAergics', depressant: 'Depressants', psychiatric: 'Psychiatric',
};

const RISK_ORDER = ['low_no_interaction', 'low_synergy', 'low_potentiation', 'caution', 'dangerous', 'life_threat'];

export function InteractionMatrix({ substances, interactions, onCellClick, selectedPair }: Props) {
  const { language } = useLanguage();
  const [hoveredCell, setHoveredCell] = useState<[string, string] | null>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; aKey: string; bKey: string } | null>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  // Sort substances by category order
  const sorted = useMemo(() => {
    return [...substances].sort((a, b) => {
      const ai = CAT_ORDER.indexOf(a.category);
      const bi = CAT_ORDER.indexOf(b.category);
      return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
    });
  }, [substances]);

  const interactionMap = useMemo(() => {
    const map: Record<string, string> = {};
    for (const ix of interactions) {
      map[`${ix.a_key}:${ix.b_key}`] = ix.risk;
      map[`${ix.b_key}:${ix.a_key}`] = ix.risk;
    }
    return map;
  }, [interactions]);

  const getName = (s: SubstanceInfo) =>
    language === 'en' && s.name_en ? s.name_en : s.name_pl;

  // Group substances by category for separator rendering
  const categoryGroups = useMemo(() => {
    const groups: Record<string, SubstanceInfo[]> = {};
    for (const s of sorted) {
      if (!groups[s.category]) groups[s.category] = [];
      groups[s.category].push(s);
    }
    return groups;
  }, [sorted]);

  const hoveredRisk = hoveredCell ? interactionMap[`${hoveredCell[0]}:${hoveredCell[1]}`] : null;
  const hoveredA = hoveredCell ? sorted.find(s => s.key === hoveredCell[0]) : null;
  const hoveredB = hoveredCell ? sorted.find(s => s.key === hoveredCell[1]) : null;

  // Determine category boundaries for visual separators
  const catBoundaries = useMemo(() => {
    const boundaries = new Set<number>();
    let prev = '';
    sorted.forEach((s, i) => {
      if (s.category !== prev && i > 0) boundaries.add(i);
      prev = s.category;
    });
    return boundaries;
  }, [sorted]);

  const handleMouseEnter = (e: React.MouseEvent, rowKey: string, colKey: string) => {
    setHoveredCell([rowKey, colKey]);
    const rect = tableRef.current?.getBoundingClientRect();
    if (rect) {
      setTooltip({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        aKey: rowKey,
        bKey: colKey,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!hoveredCell) return;
    const rect = tableRef.current?.getBoundingClientRect();
    if (rect) {
      setTooltip(prev => prev ? { ...prev, x: e.clientX - rect.left, y: e.clientY - rect.top } : null);
    }
  };

  const handleMouseLeave = () => {
    setHoveredCell(null);
    setTooltip(null);
  };

  const CELL = 36;
  const LABEL_W = 110;

  return (
    <div className="im-wrap">
      {/* ── Stats bar ── */}
      <div className="im-stats">
        {RISK_ORDER.map(r => {
          const cfg = getRiskConfig(r);
          const count = interactions.filter(ix => ix.risk === r).length;
          if (count === 0) return null;
          return (
            <span key={r} className="im-stat-chip" style={{ color: cfg.color, background: cfg.bg, borderColor: cfg.color + '33' }}>
              <span className="im-stat-icon">{cfg.icon}</span>
              <span className="im-stat-count">{count}</span>
              <span className="im-stat-label">{language === 'en' ? cfg.labelEn : cfg.labelPl}</span>
            </span>
          );
        })}
      </div>

      {/* ── Matrix ── */}
      <div
        ref={tableRef}
        className="im-scroll custom-scrollbar"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ position: 'relative' }}
      >
        <table className="im-table" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
          <thead>
            <tr>
              {/* Corner cell */}
              <th className="im-corner" style={{ minWidth: LABEL_W, width: LABEL_W }}>
                <span className="im-corner-label">
                  {language === 'pl' ? 'A \\ B' : 'A \\ B'}
                </span>
              </th>
              {sorted.map((s, ci) => {
                const isHovCol = hoveredCell?.[1] === s.key;
                const isBoundary = catBoundaries.has(ci);
                return (
                  <th
                    key={s.key}
                    className={`im-col-header ${isHovCol ? 'hov' : ''}`}
                    style={{
                      width: CELL,
                      minWidth: CELL,
                      borderLeft: isBoundary ? '2px solid rgba(255,255,255,0.12)' : undefined,
                    }}
                    title={getName(s)}
                  >
                    <div
                      className="im-col-name"
                      style={{ color: CAT_COLORS[s.category] || '#94a3b8' }}
                    >
                      {getName(s)}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {sorted.map((rowS, ri) => {
              const isHovRow = hoveredCell?.[0] === rowS.key;
              const isBoundaryRow = catBoundaries.has(ri);
              return (
                <tr key={rowS.key}>
                  <td
                    className={`im-row-header ${isHovRow ? 'hov' : ''}`}
                    style={{
                      borderTop: isBoundaryRow ? '2px solid rgba(255,255,255,0.12)' : undefined,
                    }}
                  >
                    <span style={{ color: CAT_COLORS[rowS.category] || '#94a3b8' }}>
                      {getName(rowS)}
                    </span>
                    <span
                      className="im-cat-dot"
                      style={{ background: CAT_COLORS[rowS.category] || '#94a3b8' }}
                    />
                  </td>
                  {sorted.map((colS, ci) => {
                    const isSame = rowS.key === colS.key;
                    const risk = interactionMap[`${rowS.key}:${colS.key}`];
                    const cfg = risk ? getRiskConfig(risk) : null;
                    const isSelected = selectedPair &&
                      ((selectedPair[0] === rowS.key && selectedPair[1] === colS.key) ||
                       (selectedPair[0] === colS.key && selectedPair[1] === rowS.key));
                    const isHovExact = hoveredCell?.[0] === rowS.key && hoveredCell?.[1] === colS.key;
                    const isCross = hoveredCell && (hoveredCell[0] === rowS.key || hoveredCell[1] === colS.key);
                    const isBoundaryCol = catBoundaries.has(ci);

                    let bg = 'transparent';
                    if (isSame) bg = 'rgba(255,255,255,0.025)';
                    else if (isHovExact && cfg) bg = cfg.bg;
                    else if (isSelected && cfg) bg = cfg.bg;
                    else if (isCross && cfg) bg = cfg.bg + '66';
                    else if (cfg) bg = cfg.bg + '44';

                    return (
                      <td
                        key={colS.key}
                        className={`im-cell ${isHovExact ? 'hov-exact' : ''} ${isSelected ? 'selected' : ''} ${!isSame && risk ? 'clickable' : ''}`}
                        style={{
                          width: CELL,
                          height: CELL,
                          background: bg,
                          borderLeft: isBoundaryCol ? '2px solid rgba(255,255,255,0.12)' : undefined,
                          borderTop: isBoundaryRow ? '2px solid rgba(255,255,255,0.12)' : undefined,
                          outline: isSelected ? `2px solid ${cfg?.color || '#fff'}` : undefined,
                          outlineOffset: '-2px',
                        }}
                        onClick={() => !isSame && risk && onCellClick(rowS.key, colS.key)}
                        onMouseEnter={e => handleMouseEnter(e, rowS.key, colS.key)}
                      >
                        {isSame
                          ? <span className="im-diag">╲</span>
                          : cfg
                            ? <span className="im-icon" style={{ color: cfg.color }}>{cfg.icon}</span>
                            : null
                        }
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* ── Floating tooltip ── */}
        {tooltip && hoveredA && hoveredB && hoveredA.key !== hoveredB.key && hoveredRisk && (() => {
          const cfg = getRiskConfig(hoveredRisk);
          const tipW = 220;
          const tipH = 80;
          const rect = tableRef.current?.getBoundingClientRect();
          const containerW = rect?.width || 600;
          const containerH = rect?.height || 400;
          let tx = tooltip.x + 14;
          let ty = tooltip.y + 14;
          if (tx + tipW > containerW - 8) tx = tooltip.x - tipW - 8;
          if (ty + tipH > containerH - 8) ty = tooltip.y - tipH - 8;

          return (
            <div
              className="im-tooltip"
              style={{
                left: tx,
                top: ty,
                borderColor: cfg.color + '55',
                background: `linear-gradient(135deg, rgba(10,12,20,0.97), ${cfg.bg})`,
              }}
            >
              <div className="im-tooltip-pair">
                <span style={{ color: CAT_COLORS[hoveredA.category] }}>{getName(hoveredA)}</span>
                <span className="im-tooltip-x">×</span>
                <span style={{ color: CAT_COLORS[hoveredB.category] }}>{getName(hoveredB)}</span>
              </div>
              <div className="im-tooltip-risk" style={{ color: cfg.color }}>
                <span>{cfg.icon}</span>
                <span>{language === 'en' ? cfg.labelEn : cfg.labelPl}</span>
              </div>
              <div className="im-tooltip-hint">
                {language === 'pl' ? 'Kliknij po szczegóły' : 'Click for details'}
              </div>
            </div>
          );
        })()}
      </div>

      {/* ── Category legend ── */}
      <div className="im-cat-legend">
        {Object.entries(categoryGroups).map(([cat, subs]) => (
          <span key={cat} className="im-cat-chip" style={{ borderColor: (CAT_COLORS[cat] || '#94a3b8') + '44' }}>
            <span className="im-cat-swatch" style={{ background: CAT_COLORS[cat] || '#94a3b8' }} />
            <span style={{ color: CAT_COLORS[cat] || '#94a3b8' }}>
              {language === 'en' ? (CAT_LABELS_EN[cat] || cat) : (CAT_LABELS_PL[cat] || cat)}
            </span>
            <span className="im-cat-count">{subs.length}</span>
          </span>
        ))}
      </div>

      <style>{`
        .im-wrap {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* Stats bar */
        .im-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .im-stat-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 10px;
          border-radius: 8px;
          border: 1px solid;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          white-space: nowrap;
        }
        .im-stat-icon { font-size: 0.85em; }
        .im-stat-count { font-weight: 700; }
        .im-stat-label { opacity: 0.75; }
        @media (max-width: 600px) {
          .im-stat-label { display: none; }
        }

        /* Scroll container */
        .im-scroll {
          overflow: auto;
          max-height: 65vh;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: inset 0 0 24px rgba(0,0,0,0.4);
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
        }

        /* Table */
        .im-table {
          width: max-content;
        }

        /* Corner */
        .im-corner {
          position: sticky;
          left: 0;
          top: 0;
          z-index: 5;
          background: #080a12;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          border-right: 2px solid rgba(255,255,255,0.12);
          padding: 8px 12px;
          box-shadow: 4px 4px 8px rgba(0,0,0,0.4);
        }
        .im-corner-label {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: rgba(148,163,184,0.4);
          letter-spacing: 0.05em;
        }

        /* Column headers */
        .im-col-header {
          position: sticky;
          top: 0;
          z-index: 3;
          background: #080a12;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding: 0;
          box-shadow: 0 4px 8px rgba(0,0,0,0.3);
          transition: background 0.12s;
          vertical-align: bottom;
        }
        .im-col-header.hov {
          background: rgba(255,255,255,0.06);
        }
        .im-col-name {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
          font-family: var(--font-mono);
          font-size: 0.68rem;
          padding: 10px 6px 6px;
          white-space: nowrap;
          max-height: 100px;
          overflow: hidden;
          text-overflow: ellipsis;
          user-select: none;
        }

        /* Row headers */
        .im-row-header {
          position: sticky;
          left: 0;
          z-index: 2;
          background: #080a12;
          border-right: 2px solid rgba(255,255,255,0.12);
          padding: 0 10px 0 12px;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          white-space: nowrap;
          text-align: right;
          box-shadow: 4px 0 8px rgba(0,0,0,0.3);
          transition: background 0.12s;
          user-select: none;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 8px;
          height: 36px;
        }
        .im-row-header.hov {
          background: rgba(255,255,255,0.06);
        }
        .im-cat-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          flex-shrink: 0;
          opacity: 0.7;
        }

        /* Cells */
        .im-cell {
          text-align: center;
          border: 1px solid rgba(255,255,255,0.03);
          transition: background 0.1s, transform 0.1s;
          position: relative;
          cursor: default;
        }
        .im-cell.clickable {
          cursor: pointer;
        }
        .im-cell.hov-exact {
          transform: scale(1.18);
          z-index: 10;
          border-radius: 4px;
          box-shadow: 0 0 12px rgba(0,0,0,0.5);
        }
        .im-cell.selected {
          z-index: 8;
        }
        .im-icon {
          font-size: 0.9rem;
          line-height: 1;
          display: block;
        }
        .im-diag {
          color: rgba(255,255,255,0.06);
          font-size: 1rem;
          display: block;
        }

        /* Tooltip */
        .im-tooltip {
          position: absolute;
          z-index: 100;
          pointer-events: none;
          border: 1px solid;
          border-radius: 10px;
          padding: 10px 14px;
          min-width: 180px;
          max-width: 240px;
          backdrop-filter: blur(12px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.6);
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .im-tooltip-pair {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 700;
          flex-wrap: wrap;
        }
        .im-tooltip-x {
          color: rgba(148,163,184,0.5);
          font-size: 1rem;
        }
        .im-tooltip-risk {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
        }
        .im-tooltip-hint {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          color: rgba(148,163,184,0.4);
          margin-top: 2px;
        }

        /* Category legend */
        .im-cat-legend {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .im-cat-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: 6px;
          border: 1px solid;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          background: rgba(255,255,255,0.02);
        }
        .im-cat-swatch {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .im-cat-count {
          color: rgba(148,163,184,0.5);
          font-size: 0.6rem;
        }
      `}</style>
    </div>
  );
}
