import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

type Lang = 'ar' | 'en';

interface LangContextType {
  lang: Lang;
  isRtl: boolean;
  toggleLang: () => void;
  t: (ar: string, en: string) => string;
}

const LangContext = createContext<LangContextType | null>(null);

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
};

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(() => {
    return (localStorage.getItem('eae-lang') as Lang) || 'ar';
  });

  const isRtl = lang === 'ar';

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    html.setAttribute('lang', lang);
    html.setAttribute('data-lang', lang);
    document.body.style.fontFamily = isRtl ? "'Tajawal', sans-serif" : "'Inter', sans-serif";
    localStorage.setItem('eae-lang', lang);
  }, [lang, isRtl]);

  const toggleLang = useCallback(() => {
    setLang(prev => prev === 'ar' ? 'en' : 'ar');
  }, []);

  const t = useCallback((ar: string, en: string) => lang === 'ar' ? ar : en, [lang]);

  return (
    <LangContext.Provider value={{ lang, isRtl, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
};
