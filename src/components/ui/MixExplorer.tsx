import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { RiskBadge } from './RiskBadge';
import { NTMixVisualization } from './NTMixVisualization';
import { InteractionMatrix } from './InteractionMatrix';

interface SubstanceInfo {
  id: number; key: string; name_pl: string; name_en?: string; category: string; primary_nt: string[]; mechanism: string;
}
interface InteractionResult {
  risk: string; description_pl: string; description_en?: string; nt_effects: Record<string, string>;
  mechanism?: string; clinical_notes?: string;
  substance_a_name: string; substance_a_name_en?: string; substance_a_key: string; substance_a_category: string;
  substance_b_name: string; substance_b_name_en?: string; substance_b_key: string; substance_b_category: string;
}
interface MatrixData {
  substances: { key: string; name_pl: string; name_en?: string; category: string }[];
  interactions: { a_key: string; b_key: string; risk: string; description_pl?: string; nt_effects?: Record<string, string> }[];
}

export function MixExplorer() {
  const { language } = useLanguage();
  const [substances, setSubstances] = useState<SubstanceInfo[]>([]);
  const [subA, setSubA] = useState('');
  const [subB, setSubB] = useState('');
  const [result, setResult] = useState<InteractionResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [matrix, setMatrix] = useState<MatrixData | null>(null);
  const [matrixLoading, setMatrixLoading] = useState(true);
  const [view, setView] = useState<'search' | 'matrix'>('search');
  const [searchA, setSearchA] = useState('');
  const [searchB, setSearchB] = useState('');

  useEffect(() => {
    fetch('/api/substances').then(r => r.json()).then(setSubstances).catch(() => setError('Nie można załadować substancji'));
    setMatrixLoading(true);
    fetch('/api/interactions/matrix').then(r => r.json()).then(d => { setMatrix(d); setMatrixLoading(false); }).catch(() => setMatrixLoading(false));
  }, []);

  const search = useCallback(async (a: string, b: string) => {
    if (!a || !b || a === b) return;
    setLoading(true); setError(''); setResult(null);
    try {
      const res = await fetch(`/api/interactions/search?a=${encodeURIComponent(a)}&b=${encodeURIComponent(b)}`);
      if (!res.ok) { setError(res.status === 404 ? 'Brak danych o tej interakcji' : 'Błąd serwera'); return; }
      setResult(await res.json());
    } catch { setError('Nie można połączyć z serwerem'); }
    finally { setLoading(false); }
  }, []);

  const handleSearch = () => search(subA, subB);
  const handleMatrixClick = (a: string, b: string) => {
    setSubA(a); setSubB(b); setView('search');
    search(a, b);
  };

  const getName = (s: { name_pl: string; name_en?: string }) =>
    language === 'en' && s.name_en ? s.name_en : s.name_pl;

  const filteredA = substances.filter(s =>
    s.name_pl.toLowerCase().includes(searchA.toLowerCase()) ||
    (s.name_en || '').toLowerCase().includes(searchA.toLowerCase())
  );
  const filteredB = substances.filter(s =>
    s.name_pl.toLowerCase().includes(searchB.toLowerCase()) ||
    (s.name_en || '').toLowerCase().includes(searchB.toLowerCase())
  );

  return (
    <div className="mix-explorer">
      <header className="mix-header">
        <h1 className="heading text-gradient">
          {language === 'pl' ? 'Interakcje Substancji' : 'Substance Interactions'}
        </h1>
        <p className="subtitle text-dim">
          {language === 'pl'
            ? 'Wyszukaj interakcje między substancjami i wizualizuj efekty neuroprzekaźnikowe'
            : 'Search substance interactions and visualize neurotransmitter effects'}
        </p>
      </header>

      <div className="mix-view-tabs">
        <button className={`mix-tab ${view === 'search' ? 'active' : ''}`} onClick={() => setView('search')}>
          {language === 'pl' ? '🔍 WYSZUKIWARKA' : '🔍 SEARCH'}
        </button>
        <button className={`mix-tab ${view === 'matrix' ? 'active' : ''}`} onClick={() => setView('matrix')}>
          {language === 'pl' ? '📊 MACIERZ INTERAKCJI' : '📊 INTERACTION MATRIX'}
        </button>
      </div>

      {view === 'search' && (
        <div className="mix-search-section">
          <div className="mix-search-grid">
            <div className="mix-select-wrap">
              <label className="mix-label">{language === 'pl' ? 'SUBSTANCJA A' : 'SUBSTANCE A'}</label>
              <input
                className="mix-search-input"
                placeholder={language === 'pl' ? 'Szukaj...' : 'Search...'}
                value={searchA}
                onChange={e => setSearchA(e.target.value)}
              />
              <select className="mix-select" value={subA} onChange={e => { setSubA(e.target.value); setResult(null); }} size={6}>
                {filteredA.map(s => (
                  <option key={s.key} value={s.key}>{getName(s)}</option>
                ))}
              </select>
            </div>

            <div className="mix-combine-icon">
              <span className="mix-x">×</span>
            </div>

            <div className="mix-select-wrap">
              <label className="mix-label">{language === 'pl' ? 'SUBSTANCJA B' : 'SUBSTANCE B'}</label>
              <input
                className="mix-search-input"
                placeholder={language === 'pl' ? 'Szukaj...' : 'Search...'}
                value={searchB}
                onChange={e => setSearchB(e.target.value)}
              />
              <select className="mix-select" value={subB} onChange={e => { setSubB(e.target.value); setResult(null); }} size={6}>
                {filteredB.map(s => (
                  <option key={s.key} value={s.key}>{getName(s)}</option>
                ))}
              </select>
            </div>
          </div>

          <button className="mix-search-btn" onClick={handleSearch} disabled={!subA || !subB || subA === subB || loading}>
            {loading ? '...' : language === 'pl' ? 'SPRAWDŹ INTERAKCJĘ' : 'CHECK INTERACTION'}
          </button>

          {error && <div className="mix-error">{error}</div>}

          {result && (
            <div className="mix-result animate-fade-in">
              <div className="mix-result-header">
                <div className="mix-result-pair">
                  <span className="mix-sub-name">{getName({ name_pl: result.substance_a_name, name_en: result.substance_a_name_en })}</span>
                  <span className="mix-x-small">×</span>
                  <span className="mix-sub-name">{getName({ name_pl: result.substance_b_name, name_en: result.substance_b_name_en })}</span>
                </div>
                <RiskBadge risk={result.risk} size="lg" />
              </div>

              <div className="mix-result-body">
                <div className="mix-result-desc">
                  <h3>{language === 'pl' ? 'Opis interakcji' : 'Interaction Description'}</h3>
                  <p>{language === 'en' && result.description_en ? result.description_en : result.description_pl}</p>
                </div>

                {result.mechanism && (
                  <div className="mix-result-mech">
                    <h3>{language === 'pl' ? 'Mechanizm' : 'Mechanism'}</h3>
                    <p>{result.mechanism}</p>
                  </div>
                )}

                {result.clinical_notes && (
                  <div className="mix-result-clinical">
                    <h3>⚠ {language === 'pl' ? 'Uwagi kliniczne' : 'Clinical Notes'}</h3>
                    <p>{result.clinical_notes}</p>
                  </div>
                )}
              </div>

              <NTMixVisualization
                ntEffects={result.nt_effects || {}}
                substanceAName={getName({ name_pl: result.substance_a_name, name_en: result.substance_a_name_en })}
                substanceBName={getName({ name_pl: result.substance_b_name, name_en: result.substance_b_name_en })}
                risk={result.risk}
                language={language}
              />
            </div>
          )}
        </div>
      )}

      {view === 'matrix' && (
        <div className="mix-matrix-section">
          {matrixLoading ? (
            <div className="mix-loading">{language === 'pl' ? 'Ładowanie macierzy...' : 'Loading matrix...'}</div>
          ) : matrix ? (
            <InteractionMatrix
              substances={matrix.substances}
              interactions={matrix.interactions}
              onCellClick={handleMatrixClick}
              selectedPair={subA && subB ? [subA, subB] : null}
            />
          ) : (
            <div className="mix-error">Nie można załadować macierzy</div>
          )}
        </div>
      )}

      <div className="mix-disclaimer glass">
        <p>
          {language === 'pl'
            ? '⚠ Dane oparte na tabeli SIN (Społeczna Inicjatywa Narkopolityki) i TripSit. Charakter informacyjny — nie stanowi porady medycznej. W sytuacji zagrożenia życia dzwoń 112.'
            : '⚠ Data based on SIN (Social Drug Policy Initiative) and TripSit tables. Informational only — not medical advice. In life-threatening situations call emergency services.'}
        </p>
      </div>
    </div>
  );
}
