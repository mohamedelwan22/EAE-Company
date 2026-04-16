import { useLang } from '@/contexts/LanguageContext';
import { Award, Wrench, Shield, Headphones } from 'lucide-react';

const features = [
  {
    icon: <Award size={30} />,
    title: { ar: 'جودة معتمدة دولياً', en: 'Internationally Certified Quality' },
    desc: { ar: 'منتجاتنا تحمل شهادات جودة دولية معتمدة', en: 'Our products carry certified international quality standards' },
  },
  {
    icon: <Wrench size={30} />,
    title: { ar: 'تركيب وصيانة متخصصة', en: 'Expert Installation & Maintenance' },
    desc: { ar: 'فريق متخصص لتركيب المعدات وتقديم الدعم الفني', en: 'Specialized team for equipment installation and technical support' },
  },
  {
    icon: <Shield size={30} />,
    title: { ar: 'ضمان شامل', en: 'Comprehensive Warranty' },
    desc: { ar: 'ضمان على جميع المنتجات مع دعم ما بعد البيع', en: 'Warranty on all products with after-sales support' },
  },
  {
    icon: <Headphones size={30} />,
    title: { ar: 'دعم فني 24/7', en: '24/7 Technical Support' },
    desc: { ar: 'فريقنا متاح على مدار الساعة', en: 'Our team is available around the clock' },
  },
];

const WhyChooseUs = () => {
  const { t } = useLang();

  return (
    <section className="py-[var(--section-py)] bg-secondary">
      <div className="eae-container">
        <div className="section-header">
          <h2 className="section-title">{t('لماذا تختارنا؟', 'Why Choose Us?')}</h2>
        </div>

        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6 max-sm:gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl p-8 max-sm:p-6 text-center hover:-translate-y-2 hover:border-primary hover:shadow-[var(--shadow-lg)] transition-all duration-500 group"
            >
              <div className="w-[68px] h-[68px] mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-115 group-hover:rotate-[5deg] transition-transform duration-500">
                {f.icon}
              </div>
              <h3 className="text-base font-extrabold text-foreground mb-2.5">{t(f.title.ar, f.title.en)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed m-0">{t(f.desc.ar, f.desc.en)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
