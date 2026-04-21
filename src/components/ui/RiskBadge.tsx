import { useLanguage } from '../../context/LanguageContext';

const RISK_CONFIG: Record<string, { color: string; bg: string; icon: string; labelPl: string; labelEn: string }> = {
  low_synergy:        { color: '#60a5fa', bg: 'rgba(96,165,250,0.15)', icon: '↓', labelPl: 'Niskie ryzyko · Synergia/Osłabienie', labelEn: 'Low Risk · Synergy/Counteraction' },
  low_no_interaction: { color: '#4ade80', bg: 'rgba(74,222,128,0.15)', icon: '○', labelPl: 'Niskie ryzyko · Brak interakcji', labelEn: 'Low Risk · No Interaction' },
  low_potentiation:   { color: '#c084fc', bg: 'rgba(192,132,252,0.15)', icon: '↑', labelPl: 'Niskie ryzyko · Potencjalizacja', labelEn: 'Low Risk · Potentiation' },
  caution:            { color: '#facc15', bg: 'rgba(250,204,21,0.15)', icon: '⚠', labelPl: 'Ostrożność', labelEn: 'Caution' },
  dangerous:          { color: '#fb923c', bg: 'rgba(251,146,60,0.15)', icon: '♥⚠', labelPl: 'Niebezpieczne', labelEn: 'Dangerous' },
  life_threat:        { color: '#ef4444', bg: 'rgba(239,68,68,0.20)', icon: '✕', labelPl: 'Zagrożenie życia', labelEn: 'Life Threatening' },
};

export function getRiskConfig(risk: string) {
  return RISK_CONFIG[risk] || RISK_CONFIG.caution;
}

export function RiskBadge({ risk, size = 'md' }: { risk: string; size?: 'sm' | 'md' | 'lg' }) {
  const { language } = useLanguage();
  const cfg = getRiskConfig(risk);
  const fontSize = size === 'sm' ? '0.7rem' : size === 'lg' ? '1rem' : '0.8rem';
  const padding = size === 'sm' ? '4px 10px' : size === 'lg' ? '10px 20px' : '6px 14px';

  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px',
      padding, borderRadius: '100px', fontSize,
      fontFamily: 'var(--font-mono)', fontWeight: 600,
      color: cfg.color, background: cfg.bg,
      border: `1px solid ${cfg.color}33`,
      letterSpacing: '0.05em',
    }}>
      <span style={{ fontSize: '1.1em' }}>{cfg.icon}</span>
      {language === 'en' ? cfg.labelEn : cfg.labelPl}
    </span>
  );
}

export function RiskDot({ risk }: { risk: string }) {
  const cfg = getRiskConfig(risk);
  return (
    <span style={{
      display: 'inline-block', width: 12, height: 12,
      borderRadius: '50%', background: cfg.color,
      boxShadow: `0 0 6px ${cfg.color}66`,
    }} title={cfg.labelPl} />
  );
}
