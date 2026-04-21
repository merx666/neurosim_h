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
  phase: 'vesicle' | 'cleft' | 'reuptake' | 'receptor';
  targetX?: number;
  targetY?: number;
}

export const SynapseAnimation: React.FC<SynapseAnimationProps> = ({ substance, activeIndex }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle high DPI
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    let animationId: number;
    let particles: Particle[] = [];
    
    // Determine NT types from targets
    const t = substance.targets.join(' ').toUpperCase();
    const activeColors: string[] = [];
    if (t.includes('DAT') || t.includes('D1') || t.includes('D2')) activeColors.push('#00d0ff'); // DA
    if (t.includes('SERT') || t.includes('5-HT')) activeColors.push('#00ff66'); // 5-HT
    if (t.includes('NET') || t.includes('A1') || t.includes('A2')) activeColors.push('#ff3366'); // NE
    if (t.includes('NMDA') || t.includes('AMPA')) activeColors.push('#ff9900'); // GLU
    if (t.includes('GABA')) activeColors.push('#ffff00'); // GABA
    
    if (activeColors.length === 0) activeColors.push(substance.color); // Default

    // Simulation Config
    const termW = 200;
    const termH = 60;
    const cleftH = 40;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    
    // Activity modifier (higher if peak phase or many targets)
    const intensity = Math.min(1.5, 0.5 + substance.targets.length * 0.1);

    const spawnParticle = (): Particle => {
      const color = activeColors[Math.floor(Math.random() * activeColors.length)];
      // Spawn at pre-synaptic terminal (vesicles)
      return {
        x: cx + (Math.random() - 0.5) * (termW * 0.8),
        y: cy - cleftH/2 - 10,
        vx: (Math.random() - 0.5) * 0.5,
        vy: Math.random() * 1.5 * intensity + 0.5,
        color,
        size: Math.random() * 1.5 + 2,
        life: 0,
        maxLife: Math.random() * 100 + 50,
        phase: 'vesicle'
      };
    };

    // Initial spawn
    for(let i=0; i<20; i++) particles.push(spawnParticle());

    const drawSimulation = () => {
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Draw Terminals
      ctx.strokeStyle = 'rgba(255,255,255,0.2)';
      ctx.lineWidth = 1;
      
      // Pre-synaptic
      ctx.beginPath();
      ctx.roundRect(cx - termW/2, cy - cleftH/2 - termH, termW, termH, [10, 10, 0, 0]);
      ctx.fillStyle = 'rgba(255,255,255,0.03)';
      ctx.fill();
      ctx.stroke();

      // Post-synaptic
      ctx.beginPath();
      ctx.roundRect(cx - termW/2, cy + cleftH/2, termW, termH, [0, 0, 10, 10]);
      ctx.fillStyle = 'rgba(255,255,255,0.03)';
      ctx.fill();
      ctx.stroke();

      // Draw Receptors (bottom)
      for(let i=0; i<5; i++) {
        const rx = cx - termW/2 + 20 + i * 40;
        ctx.beginPath();
        ctx.arc(rx, cy + cleftH/2, 6, Math.PI, 0);
        ctx.fillStyle = 'rgba(255,255,255,0.1)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,0.3)';
        ctx.stroke();
      }

      // Draw Transporters (top)
      for(let i=0; i<3; i++) {
        const rx = cx - termW/4 + i * 50;
        ctx.beginPath();
        ctx.rect(rx - 8, cy - cleftH/2 - 4, 16, 8);
        ctx.fillStyle = 'rgba(255,255,255,0.1)';
        ctx.fill();
        ctx.stroke();
      }

      // Particle physics
      particles.forEach(p => {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;

        if (p.phase === 'vesicle') {
          // Brownian motion
          p.vx += (Math.random() - 0.5) * 0.2;
          
          // Boundaries in cleft
          if (p.x < cx - termW/2) { p.x = cx - termW/2; p.vx *= -0.5; }
          if (p.x > cx + termW/2) { p.x = cx + termW/2; p.vx *= -0.5; }

          if (p.y > cy + cleftH/2 - 5) {
            // Hit post-synaptic
            p.y = cy + cleftH/2 - 5;
            p.phase = 'receptor';
            const receptorIndex = Math.floor(Math.random() * 5);
            p.targetX = cx - termW/2 + 20 + receptorIndex * 40;
            p.targetY = cy + cleftH/2;
          }
        } else if (p.phase === 'receptor') {
           if (p.targetX !== undefined && p.targetY !== undefined) {
             p.vx += (p.targetX - p.x) * 0.1;
             p.vy += (p.targetY - p.y) * 0.1;
             p.vx *= 0.8;
             p.vy *= 0.8;
           }
           if (p.life > p.maxLife * 0.6) {
             p.phase = 'reuptake';
             const transporterIndex = Math.floor(Math.random() * 3);
             p.targetX = cx - termW/4 + transporterIndex * 50;
             p.targetY = cy - cleftH/2;
           }
        } else if (p.phase === 'reuptake') {
           if (p.targetX !== undefined && p.targetY !== undefined) {
             p.vx += (p.targetX - p.x) * 0.05;
             p.vy += (p.targetY - p.y) * 0.05;
             p.vx *= 0.9;
             p.vy *= 0.9;
           }
        }

        // Draw particle with glow
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      // Remove dead and spawn new
      particles = particles.filter(p => p.life < p.maxLife || p.y < cy - cleftH/2);
      while(particles.length < 30 * intensity) {
        particles.push(spawnParticle());
      }

      animationId = requestAnimationFrame(drawSimulation);
    };

    drawSimulation();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [substance, activeIndex]);

  return (
    <div className="synapse-animation-container glass">
      <div className="animation-header">
        <h3 className="section-title">
          {language === 'pl' ? 'SYMULACJA SYNAPTYCZNA' : 'SYNAPTIC SIMULATION'}
        </h3>
      </div>
      <div className="canvas-wrapper">
        <canvas 
          ref={canvasRef} 
          style={{ width: '100%', height: '300px' }}
        />
      </div>
      <div className="animation-legend">
          <div className="legend-items">
            {substance.targets.slice(0,4).map(t => (
               <span key={t} className="legend-tag">{t}</span>
            ))}
          </div>
          <p className="legend-hint">
              {language === 'pl' 
                ? 'Wizualizacja dynamiki neuroprzekaźników.' 
                : 'Neurotransmitter dynamics visualization.'}
          </p>
      </div>

      <style>{`
        .synapse-animation-container {
          padding: 24px;
          border-radius: 20px;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .animation-header {
          margin-bottom: 20px;
        }
        .section-title {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-dim);
          letter-spacing: 0.15em;
        }
        .canvas-wrapper {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.2);
          border-radius: 12px;
          overflow: hidden;
        }
        .animation-legend {
          margin-top: 16px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .legend-items {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .legend-tag {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          padding: 2px 6px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 4px;
          color: var(--text-light);
        }
        .legend-hint {
          font-size: 0.75rem;
          color: var(--text-dark);
          font-style: italic;
        }
      `}</style>
    </div>
  );
};
