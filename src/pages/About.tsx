import Navbar from '@/components/eae/Navbar';
import Footer from '@/components/eae/Footer';
import FloatingWidgets from '@/components/eae/FloatingWidgets';
import BackButton from '@/components/eae/BackButton';
import { useLang } from '@/contexts/LanguageContext';
import { Shield, Target, Users, Wrench, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/data/products';

const About = () => {
  const { lang, t } = useLang();

  const features = [
    { icon: Shield, title: { ar: 'الجودة', en: 'Quality' }, desc: { ar: 'أعلى معايير الجودة العالمية', en: 'Highest global quality standards' } },
    { icon: Wrench, title: { ar: 'الخبرة', en: 'Experience' }, desc: { ar: 'أكثر من 15 عاماً في السوق', en: 'Over 15 years in the market' } },
    { icon: Target, title: { ar: 'الضمان', en: 'Warranty' }, desc: { ar: 'ضمان شامل وموثوق', en: 'Comprehensive & reliable warranty' } },
    { icon: Users, title: { ar: 'الدعم', en: 'Support' }, desc: { ar: 'فريق دعم فني متكامل', en: 'Full technical support team' } },
  ];

  return (
    <>
      <Navbar />
      <BackButton />
      <main className="bg-background pt-24 md:pt-32 pb-0">
        {/* About Hero */}
        <div className="bg-[#1a2744] text-white py-12 md:py-24 px-4 text-center border-b-[8px] border-primary">
          <div className="max-w-4xl mx-auto eae-container">
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-primary tracking-tight">EAE مؤسسة التوكيلات الهندسية</h1>
            <p className="text-xl md:text-2xl leading-relaxed text-white/90 font-medium max-w-3xl mx-auto">
              {t('الرائدون في تجهيز الورش ومراكز الصيانة الاحترافية بأفضل المعدات على مستوى المملكة العربية السعودية.', 'Pioneers in equipping professional workshops and maintenance centers with the best equipment across Saudi Arabia.')}
            </p>
          </div>
        </div>

        {/* Our Story */}
        <section className="py-24 eae-container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-foreground flex items-center gap-4">
                <span className="w-12 h-1 bg-primary rounded-full inline-block"></span>
                {t('عن التوكيلات الهندسية', 'About Us')}
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  {t(
                    'التوكيلات الهندسية هي أحدث الكيانات الصناعية في مجموعة الهنا تايوان الدولية. مؤسسة سعودية متخصصة ومتميزة في توريد معدات وتجهيزات الورش الصناعية ذات سعر مناسب وجودة عالية، وتوفر أيضاً قطع غيارها بكافة أنواعها.', 
                    'Engineering Agencies Est. is one of the latest industrial entities in the Hena Taiwan International Group. A specialized Saudi company providing high-quality workshop equipment and machinery at competitive prices, along with all types of spare parts.'
                  )}
                </p>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 mt-4">{t('رسالتنا', 'Our Mission')}</h3>
                  <p>
                    {t(
                      'لتحقيق هدفنا الأول - الريادة في مجال معدات وتجهيزات الورش الصناعية - ونكون الشريك الأول لعملائنا. نسعى لأن تحظى المؤسسة بانتشار أكثر في البحث والتطوير، لتزويد بيوتكم ومنشآتكم بأفضل الآلات سواء كانت كبيرة أو صغيرة.',
                      'To achieve our primary goal of leading in industrial workshop equipment, and to be the first partner for our clients. We strive to expand our research and development to provide homes and facilities with the best machinery, large or small.'
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-xl)] relative h-[450px] group border-4 border-card">
              <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80" alt="EAE Story" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white backdrop-blur-md bg-black/30 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-3 text-primary">{t('الرؤية', 'Vision')}</h3>
                <p className="opacity-95 leading-relaxed font-medium">
                  {t(
                    'أن تحظى التوكيلات الهندسية بثقة جميع عملائها داخل المملكة العربية السعودية من خلال انتقاء العمالة الفنية المدربة على أحدث تكنولوجيا إنتاج المعدات الصناعية، لتتميز في خدمة الصيانة والدعم الفني وخدمات ما بعد البيع.',
                    'To earn the trust of all our clients across Saudi Arabia by selecting technically trained staff on the latest industrial equipment technology, excelling in maintenance, technical support, and after-sales services.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-secondary border-y border-border py-16">
          <div className="eae-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x md:ltr:divide-x lg:rtl:-divide-x border-border">
              <div className="p-4"><p className="text-5xl font-black text-primary mb-3">+732</p><p className="text-foreground text-lg font-bold">{t('مشروع', 'Project')}</p></div>
              <div className="p-4"><p className="text-5xl font-black text-primary mb-3">+1439</p><p className="text-foreground text-lg font-bold">{t('عميل', 'Client')}</p></div>
              <div className="p-4"><p className="text-5xl font-black text-primary mb-3">+15</p><p className="text-foreground text-lg font-bold">{t('سنة خبرة', 'Years Exp')}</p></div>
              <div className="p-4"><p className="text-5xl font-black text-primary mb-3">+600</p><p className="text-foreground text-lg font-bold">{t('موقع', 'Location')}</p></div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Features */}
        <section className="py-24 eae-container">
           <div className="text-center max-w-2xl mx-auto mb-16">
             <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">{t('لماذا تختارنا؟', 'Why Choose Us?')}</h2>
             <p className="text-muted-foreground text-lg">{t('نقدم لك أكثر من مجرد معدات، نحن نقدم لك شراكة نجاح متكاملة', 'We offer more than just equipment, we offer a complete success partnership')}</p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {features.map((feature, idx) => (
                <div key={idx} className="bg-card p-8 rounded-3xl border border-border shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-2 transition-all duration-300 text-center group">
                  <div className="w-20 h-20 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <feature.icon size={36} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{lang === 'ar' ? feature.title.ar : feature.title.en}</h3>
                  <p className="text-muted-foreground text-[15px]">{lang === 'ar' ? feature.desc.ar : feature.desc.en}</p>
                </div>
             ))}
           </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-br from-[#1a2744] to-[#0a1122] text-center px-4 relative overflow-hidden">
           <div className="absolute inset-0 bg-primary/5 pattern-dots"></div>
           <div className="relative z-10 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">{t('هل أنت مستعد لتجهيز ورشتك؟', 'Ready to equip your workshop?')}</h2>
             <p className="text-white/80 mb-10 text-xl">{t('تواصل معنا الآن للحصول على استشارة مجانية وعرض من أحدث منتجاتنا', 'Contact us now to get a free consultation and a quote for our latest products')}</p>
             <a href="https://wa.me/966112706564" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-2xl font-bold text-xl hover:-translate-y-1 transition-all shadow-[0_8px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_40px_rgba(37,211,102,0.5)]">
               <MessageCircle size={28} />
               {t('تواصل معنا عبر واتساب', 'Contact via WhatsApp')}
             </a>
           </div>
        </section>

      </main>
      <Footer />
      <FloatingWidgets />
    </>
  );
};
export default About;
