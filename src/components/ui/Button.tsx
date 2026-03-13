import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-500/25',
    secondary: 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-500/25',
    outline: 'border-2 border-slate-700 text-slate-200 hover:border-slate-500 hover:text-white',
    ghost: 'hover:bg-white/5 text-slate-300 hover:text-white',
    glass: 'bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg'
  };

  // Note: Since I'm using vanilla CSS, I'll need to make sure these classes exist or mapping them to my own index.css styles.
  // Actually, I'll use a more "native" CSS approach for the buttons inside the component or just map to index.css.
  
  return (
    <button 
      className={`btn btn-${variant} btn-${size} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
      <style>{`
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: inherit;
          font-weight: 500;
          border-radius: 8px;
          transition: var(--transition);
          border: none;
          gap: 8px;
        }
        .btn:active { transform: scale(0.98); }
        .btn:disabled { opacity: 0.5; cursor: not-allowed; }
        
        .btn-sm { padding: 6px 14px; font-size: 0.875rem; }
        .btn-md { padding: 10px 20px; font-size: 1rem; }
        .btn-lg { padding: 14px 32px; font-size: 1.125rem; }
        
        .btn-primary { 
          background: var(--primary); 
          color: white; 
          box-shadow: 0 4px 14px var(--primary-glow);
        }
        .btn-primary:hover { 
          filter: brightness(1.1);
          transform: translateY(-1px);
          box-shadow: 0 6px 20px var(--primary-glow);
        }
        
        .btn-secondary { background: var(--secondary); color: white; }
        .btn-secondary:hover { filter: brightness(1.1); transform: translateY(-1px); }
        
        .btn-outline { 
          background: transparent; 
          border: 1px solid var(--surface-border);
          color: var(--text-dim);
        }
        .btn-outline:hover { 
          border-color: var(--text-dim);
          color: var(--text-main);
          background: var(--surface-accent);
        }
        
        .btn-glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
        }
        .btn-glass:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
        }
        
        .w-full { width: 100%; }
      `}</style>
    </button>
  );
};
