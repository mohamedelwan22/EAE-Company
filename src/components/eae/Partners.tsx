import { useRef } from 'react';
import { useLang } from '@/contexts/LanguageContext';
import autohub from '@/assets/autohub.png';
import kiajabr from '@/assets/elgaber.jpeg';
import naghi from '@/assets/nagy.jpeg';
import hafel from '@/assets/hafil.png';
import budget from '@/assets/budget.jpeg';

const Partners = () => {
  const { t } = useLang();
  const trackRef = useRef<HTMLDivElement>(null);

  const partners = [
    { name: t('أوتوهب عبداللطيف جميل', 'Autohub Abdul Latif Jameel'), logo: autohub },
    { name: t('كيا الجبر', 'Kia Al-Jabr'), logo: kiajabr },
    { name: t('محمد يوسف ناغي', 'Mohamed Yousuf Naghi'), logo: naghi },
    { name: t('حافل', 'Hafel'), logo: hafel },
    { name: t('بدجت', 'Budget'), logo: budget },
  ];

  const partnersDoubled = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="py-[var(--section-py)] bg-background/50 border-y border-border/50">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
      `}</style>

      <div className="eae-container mb-8">
        <div className="section-header text-center">
          <h2 className="section-title">
            {t('شركاؤنا المعتمدون', 'Our Trusted Partners')}
          </h2>
        </div>
      </div>

      {/* الـ container الخارجي */}
      <div style={{ overflow: 'hidden', width: '100%', direction: 'ltr' }}>
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            flexDirection: 'row',
            animation: 'marquee 25s linear infinite',
            width: 'max-content',
          }}
          onMouseEnter={() => trackRef.current && (trackRef.current.style.animationPlayState = 'paused')}
          onMouseLeave={() => trackRef.current && (trackRef.current.style.animationPlayState = 'running')}
        >
          {partnersDoubled.map((p, i) => (
            <div key={i} style={{ width: '220px', height: '130px', flexShrink: 0, padding: '16px' }}>
              <img 
                src={p.logo} 
                alt={p.name} 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
