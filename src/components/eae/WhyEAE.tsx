import { useEffect, useRef, useState } from 'react';
import { useLang } from '@/contexts/LanguageContext';
import { Shield, BarChart, Headphones, Smile } from 'lucide-react';

const reasons = [
  {
    icon: <Shield size={40} className="text-primary" />,
    title: { ar: 'الثقة', en: 'Trust' },
    desc: { ar: '+1000 عميل على مستوى المملكة', en: '1000+ Clients across Saudi Arabia' }
  },
  {
    icon: <BarChart size={40} className="text-primary" />,
    title: { ar: 'الريادة', en: 'Leadership' },
    desc: { ar: 'ضمان شامل على جميع المنتجات', en: 'Full Warranty on All Products' }
  },
  {
    icon: <Headphones size={40} className="text-primary" />,
    title: { ar: 'خدمة ما بعد البيع', en: 'After-Sales' },
    desc: { ar: 'خدمة ما بعد البيع حتى بعد انتهاء الضمان', en: 'After-Sales Service Beyond Warranty' }
  },
  {
    icon: <Smile size={40} className="text-primary" />,
    title: { ar: 'سعادة العملاء', en: 'Customer Happiness' },
    desc: { ar: 'خبرة منذ 2013 في السوق السعودي', en: 'Trusted Since 2013 in Saudi Market' }
  }
];

const WhyEAE = () => {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-[var(--section-py)] bg-secondary overflow-hidden">
      <div className="eae-container">
        <div className="section-header text-center mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-extrabold mb-4 text-foreground">{t('لماذا EAE؟', 'Why EAE?')}</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6"
        >
          {reasons.map((reason, i) => (
            <div
              key={i}
              style={{ transitionDelay: `${i * 150}ms` }}
              className={`bg-card rounded-2xl p-8 border border-border border-t-[6px] border-t-primary shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-xl)] hover:-translate-y-2 transition-all duration-700 ease-out text-center ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              <div className="w-[80px] h-[80px] mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-inner">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{t(reason.title.ar, reason.title.en)}</h3>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                {t(reason.desc.ar, reason.desc.en)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEAE;
