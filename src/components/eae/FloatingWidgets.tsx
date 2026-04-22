import { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/966503946848';

const FloatingWidgets = () => {
  const [showBtt, setShowBtt] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      setScrollPct(Math.min(pct, 100));
      setShowBtt(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 end-6 flex flex-col gap-3 z-[999]">
      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg transition-all duration-300 mobile-tap-target ${
          showBtt ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 scale-0 pointer-events-none'
        }`}
      >
        <ArrowUp size={20} />
      </button>

      {/* WhatsApp float */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-all animate-wa-float mobile-tap-target"
      >
        <MessageCircle size={30} />
      </a>

      {/* Scroll progress */}
      <div className="fixed top-0 left-0 h-1 bg-primary z-[10000] transition-all duration-100" style={{ width: `${scrollPct}%` }} />
    </div>
  );
};

export default FloatingWidgets;
