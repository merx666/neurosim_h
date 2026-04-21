import { useEffect, useRef } from 'react';

const NT_LABELS: Record<string, { label: string; color: string }> = {
  ht:     { label: 'Serotonina (5-HT)', color: '#c084fc' },
  da:     { label: 'Dopamina (DA)', color: '#4ade80' },
  ne:     { label: 'Noradrenalina (NE)', color: '#fb923c' },
  gaba:   { label: 'GABA', color: '#60a5fa' },
  glut:   { label: 'Glutaminian', color: '#facc15' },
  opioid: { label: 'Opioid (μ-OR)', color: '#a78bfa' },
  cb1:    { label: 'Endokannabinoid (CB1)', color: '#34d399' },
};

const EFFECT_VALUES: Record<string, { value: number; label: string }> = {
  up:              { value: 0.5,  label: '↑ Wzrost' },
  down:            { value: -0.5, label: '↓ Spadek' },
  surge:           { value: 0.85, label: '⚡ Surge' },
  dangerous_surge: { value: 1.0,  label: '💀 Niebezpieczny surge' },
  extreme:         { value: 1.0,  label: '☠ EKSTREMALNY' },
  blocked:         { value: -0.7, label: '🚫 Zablokowany' },
  extreme_block:   { value: -1.0, label: '🚫 Całkowita blokada' },
  extreme_down:    { value: -1.0, label: '↓↓ Ekstremalny spadek' },
};

interface Props {
  ntEffects: Record<string, string>;
  substanceAName?: string;
  substanceBName?: string;
  risk?: string;
}

export function NTMixVisualization({ ntEffects, substanceAName, substanceBName, risk }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = 600, h = 340;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.scale(dpr, dpr);

    let animFrame = 0;
    let raf: number;

    const draw = () => {
      animFrame++;
      ctx.clearRect(0, 0, w, h);

      const entries = Object.entries(ntEffects).filter(([k]) => NT_LABELS[k]);
      if (entries.length === 0) {
        ctx.fillStyle = '#94a3b8';
        ctx.font = '14px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Brak danych o efektach neuroprzekaźnikowych', w / 2, h / 2);
        return;
      }

      const barW = Math.min(60, (w - 80) / entries.length - 16);
      const startX = (w - entries.length * (barW + 16)) / 2 + 8;
      const baseY = h - 60;
      const maxBarH = 120;

      entries.forEach(([nt, effect], i) => {
        const ntInfo = NT_LABELS[nt];
        const effInfo = EFFECT_VALUES[effect] || { value: 0.3, label: effect };
        const x = startX + i * (barW + 16);

        // Animated bar height
        const pulse = Math.sin(animFrame * 0.04 + i * 0.8) * 0.08;
        const targetH = Math.abs(effInfo.value + pulse) * maxBarH;
        const isNegative = effInfo.value < 0;
        const barY = isNegative ? baseY : baseY - targetH;

        // Glow
        const isDanger = Math.abs(effInfo.value) >= 0.85;
        if (isDanger) {
          ctx.shadowColor = ntInfo.color;
          ctx.shadowBlur = 12 + Math.sin(animFrame * 0.06) * 6;
        }

        // Bar gradient
        const grad = ctx.createLinearGradient(x, barY, x, barY + targetH);
        grad.addColorStop(0, ntInfo.color + (isDanger ? 'ee' : 'aa'));
        grad.addColorStop(1, ntInfo.color + '44');
        ctx.fillStyle = grad;

        // Rounded rect
        const r = 4;
        ctx.beginPath();
        ctx.moveTo(x + r, barY);
        ctx.lineTo(x + barW - r, barY);
        ctx.quadraticCurveTo(x + barW, barY, x + barW, barY + r);
        ctx.lineTo(x + barW, barY + targetH - r);
        ctx.quadraticCurveTo(x + barW, barY + targetH, x + barW - r, barY + targetH);
        ctx.lineTo(x + r, barY + targetH);
        ctx.quadraticCurveTo(x, barY + targetH, x, barY + targetH - r);
        ctx.lineTo(x, barY + r);
        ctx.quadraticCurveTo(x, barY, x + r, barY);
        ctx.fill();

        ctx.shadowBlur = 0;

        // Direction arrow
        ctx.fillStyle = ntInfo.color;
        ctx.font = 'bold 16px Inter';
        ctx.textAlign = 'center';
        ctx.fillText(isNegative ? '▼' : '▲', x + barW / 2, barY - 8);

        // Effect label
        ctx.fillStyle = isDanger ? '#ef4444' : '#94a3b8';
        ctx.font = `${isDanger ? 'bold ' : ''}10px "Space Mono", monospace`;
        ctx.fillText(effInfo.label, x + barW / 2, barY - 22);

        // NT label
        ctx.fillStyle = '#f8fafc';
        ctx.font = '10px "Space Mono", monospace';
        const label = nt.toUpperCase();
        ctx.fillText(label, x + barW / 2, baseY + 18);

        // Full name
        ctx.fillStyle = '#64748b';
        ctx.font = '9px Inter';
        ctx.fillText(ntInfo.label.split(' ')[0], x + barW / 2, baseY + 32);
      });

      // Baseline
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(20, baseY);
      ctx.lineTo(w - 20, baseY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Title
      ctx.fillStyle = '#f8fafc';
      ctx.font = 'bold 12px "Space Mono", monospace';
      ctx.textAlign = 'center';
      const title = substanceAName && substanceBName
        ? `${substanceAName} × ${substanceBName}`
        : 'EFEKTY NEUROPRZEKAŹNIKOWE';
      ctx.fillText(title, w / 2, 24);

      // Danger warning
      if (risk === 'life_threat' || risk === 'dangerous') {
        const warningPulse = Math.sin(animFrame * 0.08) * 0.3 + 0.7;
        ctx.fillStyle = `rgba(239, 68, 68, ${warningPulse})`;
        ctx.font = 'bold 11px "Space Mono", monospace';
        ctx.fillText(risk === 'life_threat' ? '⚠ ZAGROŻENIE ŻYCIA' : '⚠ NIEBEZPIECZNE', w / 2, 44);
      }

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(raf);
  }, [ntEffects, substanceAName, substanceBName, risk]);

  return (
    <div className="nt-mix-viz glass" style={{ borderRadius: 16, padding: 16, overflow: 'hidden' }}>
      <canvas ref={canvasRef} style={{ width: '100%', maxWidth: 600, display: 'block', margin: '0 auto' }} />
    </div>
  );
}
