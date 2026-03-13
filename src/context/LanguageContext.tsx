import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'pl' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, category?: 'ui' | 'canvas') => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pl');

  // We will import TRANSLATIONS later or pass them here
  // For now, let's assume we have a way to access them.
  // I'll import them from core constants.
  
  const t = (key: string, category: 'ui' | 'canvas' = 'ui') => {
    // This is a placeholder, we'll implement it properly with the data we extracted
    return key; 
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
