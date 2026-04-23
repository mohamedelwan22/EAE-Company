import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

import { Sun, Moon, Globe, Menu, X, MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/966503946848';

const Navbar = () => {
  const { t, toggleLang, lang } = useLang();
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const { pathname } = useLocation();

  const navLinks = [
    { label: t('الرئيسية', 'Home'), path: '/' },
    { label: t('المنتجات', 'Products'), path: '/products' },
    { label: t('مشاريعنا', 'Projects'), path: '/projects' },
    { label: t('من نحن', 'About'), path: '/about' },
    { label: t('تواصل معنا', 'Contact'), path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] isolate">
      <nav
        className={`transition-all duration-300 ${
          drawerOpen
            ? 'bg-[#1a2744] dark:bg-[#1a2744] border-none'
            : scrolled
              ? 'bg-white/95 dark:bg-[#111d36]/95 backdrop-blur-xl shadow-sm dark:shadow-none border-b border-gray-100 dark:border-white/5'
              : 'bg-white dark:bg-[#1a2744]'
          }`}
      >
        <div className="eae-container flex items-center justify-between h-[70px] md:h-[70px] max-md:h-[60px] relative">

          {/* MOBILE: Hamburger (Left) */}
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 bg-transparent border-none cursor-pointer p-0 z-[1002]"
            aria-label="Menu"
          >
            <div className="relative w-6 h-5">
              <span className={`absolute left-0 block w-full h-0.5 transition-all duration-300 ${drawerOpen ? 'top-2 rotate-45 bg-white' : 'top-0 bg-foreground'}`}></span>
              <span className={`absolute left-0 top-2 block w-full h-0.5 transition-all duration-300 ${drawerOpen ? 'opacity-0 bg-white' : 'opacity-100 bg-foreground'}`}></span>
              <span className={`absolute left-0 block w-full h-0.5 transition-all duration-300 ${drawerOpen ? 'top-2 -rotate-45 bg-white' : 'top-4 bg-foreground'}`}></span>
            </div>
          </button>

          {/* Logo (Center on Mobile, Left on Desktop) */}
          <div className="shrink-0 flex items-center gap-3 max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2">
            <a href="/" className="flex items-center bg-transparent">
              <img
                src="/assets/logo.png"
                alt="EAE Logo"
                className="h-12 max-md:h-10 w-auto object-contain transition-all"
                style={{ filter: 'none' }}
              />
            </a>
            <span className="text-xs font-bold text-orange-500/90 border border-orange-500/30 rounded-full px-3 py-1 hidden md:inline-block bg-orange-500/5 whitespace-nowrap">
              {t('منذ 2013', 'Since 2013')}
            </span>
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex list-none gap-1 m-0 p-0 ml-auto mr-auto">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`px-3.5 py-2 rounded-lg text-[15px] font-medium transition-colors bg-transparent border-none cursor-pointer ${pathname === link.path
                      ? 'text-orange-400 dark:text-orange-400'
                      : 'text-gray-700 dark:text-white/90 hover:text-orange-400 dark:hover:text-orange-400'
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Controls & Desktop Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Language & Theme - HIDDEN ON MOBILE */}
            <div className="hidden md:flex items-center gap-2.5">
              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 bg-transparent border border-gray-300 dark:border-white/30 text-gray-700 dark:text-white px-3 py-1.5 rounded-full cursor-pointer text-[13px] hover:border-orange-400 dark:hover:border-orange-400 hover:text-orange-400 dark:hover:text-orange-400 transition-colors"
              >
                <Globe size={14} />
                <span>{lang === 'ar' ? 'العربية' : 'English'}</span>
              </button>

              <button
                onClick={toggleTheme}
                className="bg-transparent border-none text-gray-600 dark:text-white/75 hover:text-orange-400 dark:hover:text-orange-400 text-xl cursor-pointer p-1.5 rounded-lg flex items-center transition-colors"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* WhatsApp (Right on Mobile) */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full font-bold text-sm hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(37,211,102,0.4)] transition-all z-[1001]"
            >
              <MessageCircle size={18} />
              <span className="hidden md:inline">{t('واتساب', 'WhatsApp')}</span>
            </a>
          </div>
        </div>


        {/* Mobile Full-Screen Drawer */}
        <div
          className={`lg:hidden fixed inset-0 z-[1001] bg-[#1a2744] text-white transition-all duration-500 transform ${drawerOpen
              ? 'translate-x-0'
              : lang === 'ar' ? 'translate-x-full' : '-translate-x-full'
            }`}
          style={{ top: '60px', backgroundColor: '#1a2744' }}
        >
          <div className="flex flex-col h-[calc(100vh-60px)] p-6">
            <ul className="list-none m-0 p-0 flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setDrawerOpen(false)}
                    className={`block w-full text-start px-6 py-4 text-xl font-black rounded-2xl transition-all ${pathname === link.path
                        ? 'bg-primary text-white shadow-lg'
                        : 'text-white/90 hover:bg-white/10'
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile-Only Toggles relocated inside drawer */}
            <div className="mt-auto pt-8 border-t border-border flex flex-col gap-4">
              <button
                onClick={toggleLang}
                className="flex items-center justify-between w-full p-5 rounded-2xl bg-white/10 text-white font-bold"
              >
                <div className="flex items-center gap-3">
                  <Globe className="text-primary" />
                  {t('اللغة', 'Language')}
                </div>
                <span className="text-primary">{lang === 'ar' ? 'العربية' : 'English'}</span>
              </button>

              <button
                onClick={toggleTheme}
                className="flex items-center justify-between w-full p-5 rounded-2xl bg-white/10 text-white font-bold"
              >
                <div className="flex items-center gap-3">
                  {isDark ? <Sun className="text-primary" /> : <Moon className="text-primary" />}
                  {t('الوضع التلقائي', 'Theme Mode')}
                </div>
                <span className="text-primary">{isDark ? t('نهاري', 'Light') : t('ليلي', 'Dark')}</span>
              </button>

              <div className="py-6 text-center text-muted-foreground text-sm">
                Engineering Agencies Est.
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
