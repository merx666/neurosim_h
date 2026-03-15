import React, { useEffect, useRef } from 'react';
import type { Substance } from '../../types/substance';
import { useLanguage } from '../../context/LanguageContext';
import { NT_COL } from '../../data/constants';

interface SynapseAnimationProps {
  substance: Substance;
  activeIndex: number | null;
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
    let frame = 0;

    // Basic Monoamine Synapse Logic (Standard)
    const drawMonoamine = () => {
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const termW = 200;
      const termH = 60;
      const cleftH = 30;

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

      // Simple particle simulation (Placeholder for full ported logic)
      const particleCol = substance.color;
      ctx.fillStyle = particleCol;
      for(let i=0; i<5; i++) {
          const offset = Math.sin(frame * 0.05 + i) * 10;
          ctx.beginPath();
          ctx.arc(cx - 40 + (i * 20), cy + offset, 3, 0, Math.PI * 2);
          ctx.fill();
      }

      frame++;
      animationId = requestAnimationFrame(drawMonoamine);
    };

    drawMonoamine();

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
          <p className="legend-hint">
              {language === 'pl' 
                ? 'Wizualizacja mechanizmu molekularnego.' 
                : 'Molecular mechanism visualization.'}
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
