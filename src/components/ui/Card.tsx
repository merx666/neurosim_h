import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  return (
    <div className={`card glass ${hover ? 'card-hover' : ''} ${className}`}>
      {children}
      <style>{`
        .card {
          padding: 24px;
          border-radius: 16px;
          transition: var(--transition);
        }
        .card-hover:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: var(--shadow-lg);
          background: rgba(255, 255, 255, 0.08);
        }
      `}</style>
    </div>
  );
};

export const Panel: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`panel glass ${className}`}>
      {children}
      <style>{`
        .panel {
          padding: 32px;
          border-radius: 24px;
          box-shadow: var(--shadow-md);
        }
      `}</style>
    </div>
  );
};
