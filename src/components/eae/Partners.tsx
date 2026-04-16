import { useLang } from '@/contexts/LanguageContext';
import { Building2 } from 'lucide-react';

const Partners = () => {
  const { t } = useLang();

  return (
    <section className="py-[var(--section-py)] bg-background">
      <div className="eae-container">
        <div className="section-header text-center mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-extrabold mb-4 text-foreground">{t('شركاؤنا المعتمدون', 'Our Trusted Partners')}</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="flex justify-center">
          <div className="bg-card border border-border rounded-3xl p-10 max-w-sm text-center shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-xl)] hover:-translate-y-2 hover:border-primary transition-all duration-500">
            <div className="w-28 h-28 mx-auto mb-6 bg-secondary rounded-2xl flex items-center justify-center text-primary shadow-inner">
               <Building2 size={56} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">{t('عبداللطيف جميل', 'Abdul Latif Jameel')}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('شريكنا الاستراتيجي في تقديم أفضل معدات الصيانة والورش باعتماد أعلى المواصفات العالمية المعتمدة.', 'Our strategic partner in providing the best maintenance and workshop equipment with the highest global certified specs.')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
