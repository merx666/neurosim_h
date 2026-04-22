import { useEffect, useRef } from 'react';

const NT_LABELS: Record<string, { label: string; short: string; color: string }> = {
  ht:     { label: 'Serotonina (5-HT)', short: '5-HT',  color: '#c084fc' },
  da:     { label: 'Dopamina (DA)',      short: 'DA',    color: '#4ade80' },
  ne:     { label: 'Noradrenalina (NE)', short: 'NE',    color: '#fb923c' },
  gaba:   { label: 'GABA',              short: 'GABA',  color: '#60a5fa' },
  glut:   { label: 'Glutaminian',        short: 'GLUT',  color: '#facc15' },
  opioid: { label: 'Opioid (μ-OR)',      short: 'μ-OR',  color: '#a78bfa' },
  cb1:    { label: 'Endokannabinoid',    short: 'CB1',   color: '#34d399' },
};

const EFFECT_VALUES: Record<string, { value: number; label: string; labelEn: string }> = {
  up:              { value: 0.5,  label: '↑ Wzrost',              labelEn: '↑ Increase' },
  down:            { value: -0.5, label: '↓ Spadek',              labelEn: '↓ Decrease' },
  surge:           { value: 0.85, label: '⚡ Surge',              labelEn: '⚡ Surge' },
  dangerous_surge: { value: 1.0,  label: '💀 Niebezpieczny surge', labelEn: '💀 Dangerous surge' },
  extreme:         { value: 1.0,  label: '☠ EKSTREMALNY',         labelEn: '☠ EXTREME' },
  blocked:         { value: -0.7, label: '🚫 Zablokowany',        labelEn: '🚫 Blocked' },
  extreme_block:   { value: -1.0, label: '🚫 Całkowita blokada',  labelEn: '🚫 Total block' },
  extreme_down:    { value: -1.0, label: '↓↓ Ekstremalny spadek', labelEn: '↓↓ Extreme drop' },
};

interface Props {
  ntEffects: Record<string, string>;
  substanceAName?: string;
  substanceBName?: string;
  risk?: string;
  language?: string;
}

export function NTMixVisualization({ ntEffects, substanceAName, substanceBName, risk, language = 'pl' }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let frame = 0;

    const resize = () => {
      const W = container.clientWidth;
      const H = container.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + 'px';
      canvas.style.height = H + 'px';
      ctx.scale(dpr, dpr);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const entries = Object.entries(ntEffects).filter(([k]) => NT_LABELS[k]);

    const draw = () => {
      frame++;
      const W = container.clientWidth;
      const H = container.clientHeight;
      ctx.clearRect(0, 0, W, H);

      if (entries.length === 0) {
        ctx.fillStyle = '#64748b';
        ctx.font = `13px "Space Mono", monospace`;
        ctx.textAlign = 'center';
        ctx.fillText(
          language === 'pl' ? 'Brak danych NT' : 'No NT data',
          W / 2, H / 2
        );
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      const topPad = 52;
      const bottomPad = 56;
      const sidePad = 16;
      const availW = W - sidePad * 2;
      const availH = H - topPad - bottomPad;
      const baseY = topPad + availH * 0.55; // baseline slightly above center

      const barW = Math.max(24, Math.min(56, (availW / entries.length) - 12));
      const gap = (availW - barW * entries.length) / (entries.length + 1);
      const maxBarH = availH * 0.42;

      // ── Baseline ──
      ctx.strokeStyle = 'rgba(51,65,85,0.8)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(sidePad, baseY);
      ctx.lineTo(W - sidePad, baseY);
      ctx.stroke();
      ctx.setLineDash([]);

      // ── Bars ──
      entries.forEach(([nt, effect], i) => {
        const ntInfo = NT_LABELS[nt];
        const effInfo = EFFECT_VALUES[effect] || { value: 0.3, label: effect, labelEn: effect };
        const x = sidePad + gap + i * (barW + gap);

        const pulse = Math.sin(frame * 0.04 + i * 0.9) * 0.06;
        const rawVal = effInfo.value + pulse;
        const barH = Math.abs(rawVal) * maxBarH;
        const isNeg = rawVal < 0;
        const barY = isNeg ? baseY : baseY - barH;
        const isDanger = Math.abs(effInfo.value) >= 0.85;

        // Glow
        if (isDanger) {
          ctx.shadowColor = ntInfo.color;
          ctx.shadowBlur = 14 + Math.sin(frame * 0.07) * 6;
        }

        // Bar gradient
        const grad = ctx.createLinearGradient(x, barY, x, barY + barH);
        if (isNeg) {
          grad.addColorStop(0, ntInfo.color + '55');
          grad.addColorStop(1, ntInfo.color + (isDanger ? 'cc' : '88'));
        } else {
          grad.addColorStop(0, ntInfo.color + (isDanger ? 'ee' : 'bb'));
          grad.addColorStop(1, ntInfo.color + '44');
        }
        ctx.fillStyle = grad;

        const r = Math.min(4, barW / 4);
        ctx.beginPath();
        if (barH > r * 2) {
          ctx.moveTo(x + r, barY);
          ctx.lineTo(x + barW - r, barY);
          ctx.quadraticCurveTo(x + barW, barY, x + barW, barY + r);
          ctx.lineTo(x + barW, barY + barH - r);
          ctx.quadraticCurveTo(x + barW, barY + barH, x + barW - r, barY + barH);
          ctx.lineTo(x + r, barY + barH);
          ctx.quadraticCurveTo(x, barY + barH, x, barY + barH - r);
          ctx.lineTo(x, barY + r);
          ctx.quadraticCurveTo(x, barY, x + r, barY);
        } else {
          ctx.rect(x, barY, barW, Math.max(barH, 2));
        }
        ctx.fill();
        ctx.shadowBlur = 0;

        // Arrow
        ctx.fillStyle = ntInfo.color;
        ctx.font = `bold ${Math.max(11, barW * 0.28)}px Inter, sans-serif`;
        ctx.textAlign = 'center';
        ctx.fillText(isNeg ? '▼' : '▲', x + barW / 2, isNeg ? baseY + barH + 14 : barY - 6);

        // Effect label (above/below arrow)
        const effLabel = language === 'en' ? effInfo.labelEn : effInfo.label;
        ctx.fillStyle = isDanger ? '#ef4444' : 'rgba(148,163,184,0.8)';
        ctx.font = `${isDanger ? 'bold ' : ''}${Math.max(7, barW * 0.16)}px "Space Mono", monospace`;
        ctx.textAlign = 'center';
        const labelY = isNeg ? baseY + barH + 28 : barY - 18;
        ctx.fillText(effLabel, x + barW / 2, labelY);

        // NT short label
        ctx.fillStyle = ntInfo.color;
        ctx.font = `bold ${Math.max(9, barW * 0.22)}px "Space Mono", monospace`;
        ctx.textAlign = 'center';
        ctx.fillText(ntInfo.short, x + barW / 2, baseY + availH * 0.45 + 16);

        // Full name
        ctx.fillStyle = 'rgba(100,116,139,0.8)';
        ctx.font = `${Math.max(7, barW * 0.14)}px Inter, sans-serif`;
        ctx.fillText(ntInfo.label.split(' ')[0], x + barW / 2, baseY + availH * 0.45 + 30);
      });

      // ── Title ──
      ctx.fillStyle = '#f8fafc';
      ctx.font = `bold ${Math.max(10, W * 0.025)}px "Space Mono", monospace`;
      ctx.textAlign = 'center';
      const title = substanceAName && substanceBName
        ? `${substanceAName} × ${substanceBName}`
        : (language === 'pl' ? 'EFEKTY NEUROPRZEKAŹNIKOWE' : 'NEUROTRANSMITTER EFFECTS');
      ctx.fillText(title, W / 2, 20);

      // ── Danger warning ──
      if (risk === 'life_threat' || risk === 'dangerous') {
        const pulse = Math.sin(frame * 0.08) * 0.25 + 0.75;
        ctx.fillStyle = `rgba(239,68,68,${pulse})`;
        ctx.font = `bold ${Math.max(9, W * 0.022)}px "Space Mono", monospace`;
        ctx.textAlign = 'center';
        const warnText = risk === 'life_threat'
          ? (language === 'pl' ? '⚠ ZAGROŻENIE ŻYCIA' : '⚠ LIFE THREATENING')
          : (language === 'pl' ? '⚠ NIEBEZPIECZNE' : '⚠ DANGEROUS');
        ctx.fillText(warnText, W / 2, 38);
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [ntEffects, substanceAName, substanceBName, risk, language]);

  return (
    <div
      ref={containerRef}
      className="nt-mix-viz glass"
      style={{
        borderRadius: 16,
        padding: 0,
        overflow: 'hidden',
        width: '100%',
        height: 'clamp(200px, 30vw, 320px)',
        position: 'relative',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
    </div>
  );
}
