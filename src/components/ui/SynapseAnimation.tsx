import React, { useEffect, useRef, useCallback } from 'react';
import type { Substance } from '../../types/substance';
import { useLanguage } from '../../context/LanguageContext';

interface SynapseAnimationProps {
  substance: Substance;
  activeIndex: number | null;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  life: number;
  maxLife: number;
  phase: 'vesicle' | 'cleft' | 'reuptake' | 'receptor' | 'blocked';
  targetX?: number;
  targetY?: number;
  alpha: number;
}

// NT color map (RGB strings for canvas)
const NT_COLORS: Record<string, string> = {
  DAT: '#00d4ff',
  SERT: '#c084fc',
  NET: '#fb923c',
  NMDA: '#facc15',
  GABA: '#60a5fa',
  'μ-OR': '#a78bfa',
  CB1: '#34d399',
};

function getNTColor(target: string): string {
  for (const [key, color] of Object.entries(NT_COLORS)) {
    if (target.toUpperCase().includes(key)) return color;
  }
  return '#94a3b8';
}

export const SynapseAnimation: React.FC<SynapseAnimationProps> = ({ substance, activeIndex }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const { language } = useLanguage();

  const isBlocking = substance.mechanism.toLowerCase().includes('inhibitor') ||
    substance.mechanism.toLowerCase().includes('antagonist') ||
    substance.mechanism.toLowerCase().includes('blocker');
  const isReleasing = substance.mechanism.toLowerCase().includes('releasing') ||
    substance.mechanism.toLowerCase().includes('releasing agent');

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const W = container.clientWidth;
    const H = container.clientHeight;

    if (canvas.width !== W * dpr || canvas.height !== H * dpr) {
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + 'px';
      canvas.style.height = H + 'px';
      ctx.scale(dpr, dpr);
    }

    return { ctx, W, H };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

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

    // Determine active NT colors from targets
    const activeColors = substance.targets.map(t => getNTColor(t));
    if (activeColors.length === 0) activeColors.push(substance.color);

    // Phase intensity modifier
    const phaseIntensity = activeIndex !== null && substance.phases[activeIndex]
      ? substance.phases[activeIndex].i / 100
      : 0.6;

    let particles: Particle[] = [];
    let frame = 0;

    const spawnParticle = (W: number, H: number): Particle => {
      const cx = W / 2;
      const termW = Math.min(W * 0.65, 260);
      const preY = H * 0.38;

      const color = activeColors[Math.floor(Math.random() * activeColors.length)];
      return {
        x: cx + (Math.random() - 0.5) * termW * 0.6, // Spawn more centrally
        y: preY - 20 + Math.random() * 20,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() * 0.8 + 0.3) * phaseIntensity, // Slowed down
        color,
        size: Math.random() * 2 + 2.5, // Increased size
        life: 0,
        maxLife: Math.random() * 120 + 100, // Increased life
        phase: 'vesicle',
        alpha: 1,
      };
    };

    const animate = () => {
      const W = container.clientWidth;
      const H = container.clientHeight;
      frame++;

      ctx.clearRect(0, 0, W, H);

      const cx = W / 2;
      const termW = Math.min(W * 0.65, 260);
      const termH = Math.max(H * 0.28, 60);
      const cleftH = Math.max(H * 0.12, 28);
      const preY = H * 0.38;   // bottom of pre-synaptic
      const postY = preY + cleftH; // top of post-synaptic
      const preTop = preY - termH;
      const postBottom = postY + termH;

      // ── Background gradient ──
      const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
      bgGrad.addColorStop(0, 'rgba(5,6,8,0)');
      bgGrad.addColorStop(0.5, 'rgba(10,12,20,0.15)');
      bgGrad.addColorStop(1, 'rgba(5,6,8,0)');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, W, H);

      // ── Pre-synaptic terminal ──
      const preGrad = ctx.createLinearGradient(cx - termW / 2, preTop, cx + termW / 2, preY);
      preGrad.addColorStop(0, 'rgba(255,255,255,0.02)');
      preGrad.addColorStop(1, 'rgba(255,255,255,0.06)');
      ctx.beginPath();
      ctx.roundRect(cx - termW / 2, preTop, termW, termH, [12, 12, 0, 0]);
      ctx.fillStyle = preGrad;
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.12)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Pre-synaptic label
      ctx.fillStyle = 'rgba(148,163,184,0.6)';
      ctx.font = `${Math.max(9, W * 0.022)}px "Space Mono", monospace`;
      ctx.textAlign = 'left';
      ctx.fillText(language === 'pl' ? 'PRE-SYNAPTYCZNY' : 'PRE-SYNAPTIC', cx - termW / 2 + 10, preTop + 16);

      // ── Vesicles in pre-synaptic ──
      const vesicleCount = 6;
      for (let i = 0; i < vesicleCount; i++) {
        const vx = cx - termW / 2 + 30 + (i / (vesicleCount - 1)) * (termW - 60);
        const vy = preTop + termH * 0.55 + Math.sin(frame * 0.03 + i) * 4;
        const vColor = activeColors[i % activeColors.length];
        ctx.beginPath();
        ctx.arc(vx, vy, 7, 0, Math.PI * 2);
        ctx.fillStyle = vColor + '22';
        ctx.fill();
        ctx.strokeStyle = vColor + '88';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        // dot inside
        ctx.beginPath();
        ctx.arc(vx, vy, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = vColor;
        ctx.fill();
      }

      // ── Synaptic cleft ──
      const cleftGrad = ctx.createLinearGradient(0, preY, 0, postY);
      cleftGrad.addColorStop(0, 'rgba(99,102,241,0.04)');
      cleftGrad.addColorStop(0.5, 'rgba(99,102,241,0.08)');
      cleftGrad.addColorStop(1, 'rgba(99,102,241,0.04)');
      ctx.fillStyle = cleftGrad;
      ctx.fillRect(cx - termW / 2, preY, termW, cleftH);

      // Cleft label
      ctx.fillStyle = 'rgba(99,102,241,0.5)';
      ctx.font = `${Math.max(8, W * 0.018)}px "Space Mono", monospace`;
      ctx.textAlign = 'center';
      ctx.fillText(language === 'pl' ? '— SZCZELINA SYNAPTYCZNA —' : '— SYNAPTIC CLEFT —', cx, preY + cleftH / 2 + 4);

      // ── Post-synaptic terminal ──
      const postGrad = ctx.createLinearGradient(cx - termW / 2, postY, cx + termW / 2, postBottom);
      postGrad.addColorStop(0, 'rgba(255,255,255,0.06)');
      postGrad.addColorStop(1, 'rgba(255,255,255,0.02)');
      ctx.beginPath();
      ctx.roundRect(cx - termW / 2, postY, termW, termH, [0, 0, 12, 12]);
      ctx.fillStyle = postGrad;
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.12)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Post-synaptic label
      ctx.fillStyle = 'rgba(148,163,184,0.6)';
      ctx.font = `${Math.max(9, W * 0.022)}px "Space Mono", monospace`;
      ctx.textAlign = 'left';
      ctx.fillText(language === 'pl' ? 'POST-SYNAPTYCZNY' : 'POST-SYNAPTIC', cx - termW / 2 + 10, postBottom - 8);

      // ── Receptors on post-synaptic membrane ──
      const receptorCount = Math.min(5, Math.max(3, Math.floor(termW / 50)));
      const receptorSpacing = (termW - 40) / (receptorCount - 1);
      for (let i = 0; i < receptorCount; i++) {
        const rx = cx - termW / 2 + 20 + i * receptorSpacing;
        const ry = postY;
        const isActive = particles.some(p =>
          p.phase === 'receptor' && p.targetX !== undefined &&
          Math.abs(p.targetX - rx) < 15
        );
        // U-shape receptor
        ctx.beginPath();
        ctx.arc(rx, ry, 7, Math.PI, 0);
        ctx.fillStyle = isActive
          ? activeColors[i % activeColors.length] + '44'
          : 'rgba(255,255,255,0.06)';
        ctx.fill();
        ctx.strokeStyle = isActive
          ? activeColors[i % activeColors.length] + 'cc'
          : 'rgba(255,255,255,0.2)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // ── Transporters on pre-synaptic membrane (reuptake) ──
      const transporterCount = Math.min(3, Math.max(2, Math.floor(termW / 80)));
      const transporterSpacing = (termW - 60) / (transporterCount - 1);
      for (let i = 0; i < transporterCount; i++) {
        const tx = cx - termW / 2 + 30 + i * transporterSpacing;
        const ty = preY;
        const isBlocked = isBlocking && particles.some(p =>
          p.phase === 'blocked' && p.targetX !== undefined &&
          Math.abs(p.targetX - tx) < 15
        );
        ctx.beginPath();
        ctx.rect(tx - 8, ty - 5, 16, 10);
        ctx.fillStyle = isBlocked
          ? 'rgba(239,68,68,0.2)'
          : 'rgba(255,255,255,0.06)';
        ctx.fill();
        ctx.strokeStyle = isBlocked
          ? 'rgba(239,68,68,0.6)'
          : 'rgba(255,255,255,0.2)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Blocked X marker
        if (isBlocked) {
          ctx.strokeStyle = 'rgba(239,68,68,0.8)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(tx - 5, ty - 3); ctx.lineTo(tx + 5, ty + 3);
          ctx.moveTo(tx + 5, ty - 3); ctx.lineTo(tx - 5, ty + 3);
          ctx.stroke();
        }
      }

      // ── Particles ──
      particles.forEach(p => {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;

        // Global boundary checks so particles don't fly off screen
        const margin = 10;
        if (p.x < margin) { p.x = margin; p.vx *= -0.5; }
        if (p.x > W - margin) { p.x = W - margin; p.vx *= -0.5; }
        if (p.y < margin) { p.y = margin; p.vy *= -0.5; }
        if (p.y > H + 10) { p.y = H + 10; p.vy *= -0.5; }

        const cleftLeft = cx - termW / 2;
        const cleftRight = cx + termW / 2;

        if (p.phase === 'vesicle') {
          p.vx += (Math.random() - 0.5) * 0.1;
          p.vx = Math.max(-1.2, Math.min(1.2, p.vx));

          // Clamp to cleft width strictly
          if (p.x < cleftLeft + 2) { p.x = cleftLeft + 2; p.vx *= -0.5; }
          if (p.x > cleftRight - 2) { p.x = cleftRight - 2; p.vx *= -0.5; }

          if (p.y >= postY - 2) {
            if (isBlocking && Math.random() < 0.45) {
              // Blocked — bounce back toward transporter
              p.phase = 'blocked';
              const ti = Math.floor(Math.random() * transporterCount);
              p.targetX = cleftLeft + 30 + ti * transporterSpacing;
              p.targetY = preY;
              p.vy = -Math.abs(p.vy) * 0.4;
            } else {
              p.phase = 'receptor';
              const ri = Math.floor(Math.random() * receptorCount);
              p.targetX = cleftLeft + 20 + ri * receptorSpacing;
              p.targetY = postY;
            }
          }
        } else if (p.phase === 'receptor') {
          if (p.targetX !== undefined && p.targetY !== undefined) {
            // Magnetic-like snapping to receptor
            const dx = p.targetX - p.x;
            const dy = p.targetY - p.y;
            p.vx += dx * 0.25;
            p.vy += dy * 0.25;
            p.vx *= 0.5; // High damping
            p.vy *= 0.5;
            
            // Lock if close enough
            if (Math.abs(dx) < 1 && Math.abs(dy) < 1) {
              p.x = p.targetX;
              p.y = p.targetY;
              p.vx = 0;
              p.vy = 0;
            }
          }
          if (p.life > p.maxLife * 0.6) {
            p.phase = 'reuptake';
            const ti = Math.floor(Math.random() * transporterCount);
            p.targetX = cleftLeft + 30 + ti * transporterSpacing;
            p.targetY = preY;
          }
        } else if (p.phase === 'reuptake') {
          if (p.targetX !== undefined && p.targetY !== undefined) {
            p.vx += (p.targetX - p.x) * 0.1;
            p.vy += (p.targetY - p.y) * 0.1;
            p.vx *= 0.75;
            p.vy *= 0.75;
          }
        } else if (p.phase === 'blocked') {
          if (p.targetX !== undefined && p.targetY !== undefined) {
            p.vx += (p.targetX - p.x) * 0.1;
            p.vy += (p.targetY - p.y) * 0.1;
            p.vx *= 0.8;
            p.vy *= 0.8;
          }
          if (p.life > p.maxLife * 0.4) {
            p.phase = 'reuptake'; // Eventually clear out
          }
        }

        // Fade out near end of life
        p.alpha = p.life > p.maxLife * 0.8
          ? 1 - (p.life - p.maxLife * 0.8) / (p.maxLife * 0.2)
          : 1;

        // Draw particle
        const glowSize = p.phase === 'receptor' ? 12 : 6;
        ctx.shadowBlur = glowSize;
        ctx.shadowColor = p.color;
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      });

      // Cull dead particles
      particles = particles.filter(p => p.life < p.maxLife && p.alpha > 0);

      // Spawn new particles based on phase intensity
      const targetCount = Math.round(20 + phaseIntensity * 25);
      while (particles.length < targetCount) {
        particles.push(spawnParticle(W, H));
      }

      // ── Mechanism label ──
      const mechLabel = isReleasing
        ? (language === 'pl' ? 'RELEASING AGENT' : 'RELEASING AGENT')
        : isBlocking
          ? (language === 'pl' ? 'REUPTAKE INHIBITOR' : 'REUPTAKE INHIBITOR')
          : substance.mechanism.split(' ').slice(0, 3).join(' ').toUpperCase();

      ctx.fillStyle = substance.color + 'cc';
      ctx.font = `bold ${Math.max(9, W * 0.022)}px "Space Mono", monospace`;
      ctx.textAlign = 'right';
      ctx.fillText(mechLabel, W - 12, H - 10);

      // ── Phase intensity indicator ──
      if (activeIndex !== null && substance.phases[activeIndex]) {
        const ph = substance.phases[activeIndex];
        const barW = Math.min(W * 0.3, 100);
        const barH = 4;
        const bx = 12;
        const by = H - 16;
        ctx.fillStyle = 'rgba(255,255,255,0.08)';
        ctx.beginPath();
        ctx.roundRect(bx, by, barW, barH, 2);
        ctx.fill();
        ctx.fillStyle = ph.c;
        ctx.beginPath();
        ctx.roundRect(bx, by, barW * (ph.i / 100), barH, 2);
        ctx.fill();
        ctx.fillStyle = 'rgba(148,163,184,0.6)';
        ctx.font = `${Math.max(8, W * 0.018)}px "Space Mono", monospace`;
        ctx.textAlign = 'left';
        ctx.fillText(`${ph.n.toUpperCase()} · ${ph.i}%`, bx, by - 5);
      }

      animRef.current = requestAnimationFrame(animate);
    };

    // Initial particle seed
    const W0 = container.clientWidth;
    const H0 = container.clientHeight;
    for (let i = 0; i < 15; i++) particles.push(spawnParticle(W0, H0));

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
    };
  }, [substance, activeIndex, language, isBlocking, isReleasing]);

  return (
    <div className="synapse-animation-container glass">
      <div className="animation-header">
        <h3 className="section-title">
          {language === 'pl' ? 'SYMULACJA SYNAPTYCZNA' : 'SYNAPTIC SIMULATION'}
        </h3>
        <div className="legend-items">
          {substance.targets.slice(0, 5).map(t => (
            <span key={t} className="legend-tag" style={{ borderColor: getNTColor(t) + '44' }}>
              <span className="legend-dot" style={{ backgroundColor: getNTColor(t), width: '8px', height: '8px', borderRadius: '50%', display: 'inline-block', marginRight: '6px' }}></span>
              <span style={{ color: getNTColor(t), fontWeight: 'bold' }}>{t}</span>
            </span>
          ))}
        </div>
      </div>
      <div ref={containerRef} className="canvas-wrapper">
        <canvas ref={canvasRef} />
      </div>
      <p className="legend-hint">
        {language === 'pl'
          ? 'Kliknij fazę na osi czasu aby zobaczyć zmianę intensywności.'
          : 'Click a phase on the timeline to see intensity change.'}
      </p>

      <style>{`
        .synapse-animation-container {
          padding: 20px;
          border-radius: 20px;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 12px;
          min-height: 320px;
        }
        .animation-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
        }
        .section-title {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-dim);
          letter-spacing: 0.15em;
          flex-shrink: 0;
        }
        .canvas-wrapper {
          flex: 1;
          min-height: 220px;
          background: rgba(0,0,0,0.25);
          border-radius: 12px;
          overflow: hidden;
          position: relative;
        }
        .canvas-wrapper canvas {
          display: block;
          width: 100%;
          height: 100%;
        }
        .legend-items {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }
        .legend-tag {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          padding: 2px 7px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 4px;
          color: var(--text-dim);
        }
        .legend-hint {
          font-size: 0.7rem;
          color: var(--text-dark);
          font-style: italic;
          text-align: center;
        }
      `}</style>
    </div>
  );
};
