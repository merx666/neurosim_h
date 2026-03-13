import React, { createContext, useContext, useState } from 'react';
import * as Constants from '../data/constants';

type Language = 'pl' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, category?: 'ui' | 'canvas', ...args: any[]) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pl');

  const t = (key: string, category: 'ui' | 'canvas' = 'ui', ...args: any[]) => {
    const uiDict = language === 'pl' ? (Constants as any).UI_PL : (Constants as any).UI_EN;
    const canvasDict = (Constants as any).CANVAS_T?.[language];
    
    const dict = category === 'ui' ? uiDict : canvasDict;
    const val = dict?.[key];
    
    if (typeof val === 'function') return val(...args);
    return val || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
