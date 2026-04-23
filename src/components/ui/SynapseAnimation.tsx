import React, { useEffect, useRef } from 'react';
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
  DAT: '#00ffaa',   // Dopamine
  SERT: '#ff44ff',  // Serotonin
  NET: '#ffaa44',   // Noradrenaline
  NMDA: '#facc15',  // Glutamate
  GABA: '#60a5fa',  // GABA
  'μ-OR': '#a78bfa', // Opioid
  CB1: '#50e890',   // Cannabinoid
  H1: '#fb7185',    // Histamine
  M1: '#38bdf8',    // Acetylcholine
};

const NT_LABELS: Record<string, { pl: string, en: string }> = {
  DAT: { pl: 'Dopamina', en: 'Dopamine' },
  SERT: { pl: 'Serotonina', en: 'Serotonin' },
  NET: { pl: 'Noradrenalina', en: 'Noradrenaline' },
  NMDA: { pl: 'Glutaminian', en: 'Glutamate' },
  GABA: { pl: 'GABA', en: 'GABA' },
  'μ-OR': { pl: 'Opioidy', en: 'Opioids' },
  CB1: { pl: 'Kannabinoidy', en: 'Cannabinoids' },
  H1: { pl: 'Histamina', en: 'Histamine' },
  M1: { pl: 'Acetylocholina', en: 'Acetylcholine' },
};

function getNTColor(target: string): string {
  const t = target.toUpperCase();
  if (t.includes('DAT')) return NT_COLORS.DAT;
  if (t.includes('SERT')) return NT_COLORS.SERT;
  if (t.includes('NET')) return NT_COLORS.NET;
  if (t.includes('NMDA')) return NT_COLORS.NMDA;
  if (t.includes('GABA')) return NT_COLORS.GABA;
  if (t.includes('μ-OR') || t.includes('MOR')) return NT_COLORS['μ-OR'];
  if (t.includes('CB1')) return NT_COLORS.CB1;
  if (t.includes('H1')) return NT_COLORS.H1;
  if (t.includes('M1') || t.includes('ACH')) return NT_COLORS.M1;
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

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      if (!container || !canvas) return;
      const W = container.clientWidth;
      const H = container.clientHeight;
      if (W === 0 || H === 0) return;

      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + 'px';
      canvas.style.height = H + 'px';
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const activeColors = substance.targets.map(t => getNTColor(t));
    if (activeColors.length === 0) activeColors.push(substance.color);

    const phaseIntensity = activeIndex !== null && substance.phases[activeIndex]
      ? substance.phases[activeIndex].i / 100
      : 0.6;

    let particles: Particle[] = [];
    let frame = 0;

    const spawnParticle = (W: number, H: number): Particle => {
      const cx = W / 2;
      const termW = Math.min(W * 0.75, 300);
      const preY = H * 0.35;

      const colorIdx = Math.floor(Math.random() * activeColors.length);
      const color = activeColors[colorIdx];
      
      return {
        x: cx + (Math.random() - 0.5) * termW * 0.5,
        y: preY - 30 + Math.random() * 20,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() * 0.4 + 0.2) * (0.8 + phaseIntensity * 0.4), 
        color,
        size: Math.random() * 2 + 3.5, 
        life: 0,
        maxLife: Math.random() * 180 + 150, 
        phase: 'vesicle',
        alpha: 1,
      };
    };

    const animate = () => {
      const W = container.clientWidth;
      const H = container.clientHeight;
      if (W === 0 || H === 0) {
        animRef.current = requestAnimationFrame(animate);
        return;
      }
      frame++;

      ctx.clearRect(0, 0, W, H);

      const cx = W / 2;
      const termW = Math.min(W * 0.75, 300);
      const termH = Math.max(H * 0.25, 50);
      const cleftH = Math.max(H * 0.15, 35);
      const preY = H * 0.35;   
      const postY = preY + cleftH; 
      const preTop = preY - termH;
      const postBottom = postY + termH;

      // ── Background Glow ──
      const centerGlow = ctx.createRadialGradient(cx, preY + cleftH / 2, 0, cx, preY + cleftH / 2, termW);
      centerGlow.addColorStop(0, substance.color + '08');
      centerGlow.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = centerGlow;
      ctx.fillRect(0, 0, W, H);

      // ── Pre-synaptic terminal ──
      ctx.beginPath();
      ctx.roundRect(cx - termW / 2, preTop, termW, termH, [16, 16, 4, 4]);
      ctx.fillStyle = 'rgba(255,255,255,0.03)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.1)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Label Pre
      ctx.fillStyle = 'rgba(148,163,184,0.4)';
      ctx.font = `bold 10px "Space Mono", monospace`;
      ctx.textAlign = 'left';
      ctx.fillText(language === 'pl' ? 'TERMINAL PRE-SYNAPTYCZNY' : 'PRE-SYNAPTIC TERMINAL', cx - termW / 2 + 12, preTop + 18);

      // ── Vesicles ──
      const vesicleCount = 5;
      for (let i = 0; i < vesicleCount; i++) {
        const vx = cx - termW * 0.3 + (i / (vesicleCount - 1)) * (termW * 0.6);
        const vy = preTop + termH * 0.6 + Math.sin(frame * 0.02 + i) * 3;
        const vColor = activeColors[i % activeColors.length];
        
        ctx.beginPath();
        ctx.arc(vx, vy, 8, 0, Math.PI * 2);
        ctx.fillStyle = vColor + '15';
        ctx.fill();
        ctx.strokeStyle = vColor + '55';
        ctx.stroke();
        
        // Inner pulse
        const pulse = 0.5 + Math.sin(frame * 0.05 + i) * 0.5;
        ctx.beginPath();
        ctx.arc(vx, vy, 2 + pulse, 0, Math.PI * 2);
        ctx.fillStyle = vColor;
        ctx.fill();
      }

      // ── Synaptic cleft ──
      ctx.fillStyle = 'rgba(255,255,255,0.01)';
      ctx.fillRect(cx - termW / 2, preY, termW, cleftH);
      
      ctx.fillStyle = 'rgba(99,102,241,0.2)';
      ctx.font = `9px "Space Mono", monospace`;
      ctx.textAlign = 'center';
      ctx.fillText(language === 'pl' ? 'SZCZELINA SYNAPTYCZNA' : 'SYNAPTIC CLEFT', cx, preY + cleftH / 2 + 4);

      // ── Post-synaptic terminal ──
      ctx.beginPath();
      ctx.roundRect(cx - termW / 2, postY, termW, termH, [4, 4, 16, 16]);
      ctx.fillStyle = 'rgba(255,255,255,0.05)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.1)';
      ctx.stroke();

      // Label Post
      ctx.textAlign = 'left';
      ctx.fillText(language === 'pl' ? 'NEURON POST-SYNAPTYCZNY' : 'POST-SYNAPTIC NEURON', cx - termW / 2 + 12, postBottom - 12);

      // ── Receptors ──
      const receptorCount = 4;
      const receptorSpacing = (termW - 80) / (receptorCount - 1);
      for (let i = 0; i < receptorCount; i++) {
        const rx = cx - termW / 2 + 40 + i * receptorSpacing;
        const ry = postY;
        const isActive = particles.some(p => p.phase === 'receptor' && Math.abs(p.x - rx) < 12);
        
        ctx.beginPath();
        ctx.arc(rx, ry, 10, Math.PI, 0);
        ctx.fillStyle = isActive ? activeColors[i % activeColors.length] + '33' : 'rgba(255,255,255,0.05)';
        ctx.fill();
        ctx.strokeStyle = isActive ? activeColors[i % activeColors.length] + 'aa' : 'rgba(255,255,255,0.15)';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // ── Transporters ──
      const transporterCount = 3;
      const transporterSpacing = (termW - 100) / (transporterCount - 1);
      for (let i = 0; i < transporterCount; i++) {
        const tx = cx - termW / 2 + 50 + i * transporterSpacing;
        const ty = preY;
        const isBlocked = isBlocking && particles.some(p => p.phase === 'blocked' && Math.abs(p.x - tx) < 15);
        
        ctx.fillStyle = isBlocked ? 'rgba(239,68,68,0.15)' : 'rgba(255,255,255,0.05)';
        ctx.beginPath();
        ctx.roundRect(tx - 10, ty - 6, 20, 12, 2);
        ctx.fill();
        ctx.strokeStyle = isBlocked ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.1)';
        ctx.stroke();
        
        if (isBlocked) {
          ctx.strokeStyle = '#ef4444';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(tx-4, ty-2); ctx.lineTo(tx+4, ty+2);
          ctx.moveTo(tx+4, ty-2); ctx.lineTo(tx-4, ty+2);
          ctx.stroke();
        }
      }

      // ── Particles ──
      particles.forEach(p => {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;

        // Structured movement
        if (p.phase === 'vesicle') {
          // Add some horizontal drift
          p.vx += (Math.random() - 0.5) * 0.05;
          p.vx *= 0.98;
          
          if (p.y >= postY - 4) {
            if (isBlocking && Math.random() < 0.4) {
              p.phase = 'blocked';
              const ti = Math.floor(Math.random() * transporterCount);
              p.targetX = cx - termW / 2 + 50 + ti * transporterSpacing;
              p.targetY = preY;
            } else {
              p.phase = 'receptor';
              const ri = Math.floor(Math.random() * receptorCount);
              p.targetX = cx - termW / 2 + 40 + ri * receptorSpacing;
              p.targetY = postY;
            }
          }
        } else if (p.phase === 'receptor') {
          const dx = p.targetX! - p.x;
          const dy = p.targetY! - p.y;
          p.vx = dx * 0.15;
          p.vy = dy * 0.15;
          
          if (p.life > p.maxLife * 0.7) {
            p.phase = 'reuptake';
            const ti = Math.floor(Math.random() * transporterCount);
            p.targetX = cx - termW / 2 + 50 + ti * transporterSpacing;
            p.targetY = preY;
          }
        } else if (p.phase === 'reuptake' || p.phase === 'blocked') {
          const dx = p.targetX! - p.x;
          const dy = p.targetY! - p.y;
          p.vx = dx * 0.08;
          p.vy = dy * 0.08;
          
          if (p.phase === 'blocked' && Math.abs(dx) < 2) {
            p.vx = (Math.random() - 0.5) * 0.2;
            p.vy = (Math.random() - 0.5) * 0.2;
          }
        }

        // Transparency
        p.alpha = p.life > p.maxLife * 0.8 
          ? 1 - (p.life - p.maxLife * 0.8) / (p.maxLife * 0.2) 
          : 1;

        // Draw
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      particles = particles.filter(p => p.life < p.maxLife && p.alpha > 0);
      
      const spawnRate = isReleasing ? 0.35 : 0.15;
      if (Math.random() < spawnRate * (0.5 + phaseIntensity)) {
        particles.push(spawnParticle(W, H));
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [substance, activeIndex, language, isBlocking, isReleasing]);

  return (
    <div className="synapse-animation-container glass">
      <div className="animation-header">
        <h3 className="section-title">
          {language === 'pl' ? 'MODELOWANIE SYNAPTYCZNE' : 'SYNAPTIC MODELING'}
        </h3>
        <div className="nt-legend">
          {substance.targets.map(t => {
            const cleanT = t.split(' ')[0];
            const info = NT_LABELS[cleanT] || { pl: t, en: t };
            const color = getNTColor(t);
            return (
              <div key={t} className="legend-item">
                <span className="dot" style={{ backgroundColor: color }}></span>
                <span className="label" style={{ color: color }}>
                  {language === 'pl' ? info.pl : info.en}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      
      <div ref={containerRef} className="canvas-wrapper">
        <canvas ref={canvasRef} />
      </div>

      <style>{`
        .synapse-animation-container {
          padding: 24px;
          border-radius: 24px;
          height: 500px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          background: rgba(10, 12, 18, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .animation-header {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .section-title {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-dim);
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .nt-legend {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background: rgba(255,255,255,0.03);
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.05);
        }
        .legend-item .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          box-shadow: 0 0 8px currentColor;
        }
        .legend-item .label {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: bold;
          letter-spacing: 0.05em;
        }
        .canvas-wrapper {
          flex: 1;
          background: radial-gradient(circle at center, rgba(30, 41, 59, 0.2) 0%, rgba(15, 23, 42, 0.4) 100%);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.03);
          position: relative;
        }
        .canvas-wrapper canvas {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
        }
      `}</style>
    </div>
  );
};

