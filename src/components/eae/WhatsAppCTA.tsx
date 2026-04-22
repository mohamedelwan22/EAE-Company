import { useLang } from '@/contexts/LanguageContext';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/966503946848';

const WhatsAppCTA = () => {
  const { t } = useLang();

  return (
    <section className="py-16 bg-gradient-to-br from-eae-blue-dark via-eae-blue to-primary">
      <div className="eae-container">
        <div className="flex items-center gap-8 flex-wrap justify-center text-center text-white">
          <div className="text-[64px] animate-wa-float">
            <MessageCircle size={64} />
          </div>
          <div>
            <h2 className="font-black mb-2" style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}>
              {t('تحدث مع خبرائنا الآن', 'Talk to Our Experts Now')}
            </h2>
            <p className="opacity-[0.88] text-base m-0">
              {t('رد فوري · استشارة مجانية · عرض سعر خلال دقائق', 'Instant reply · Free consultation · Quote within minutes')}
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-[#25D366] text-white px-9 py-4 rounded-full text-lg font-extrabold whitespace-nowrap shadow-[0_8px_28px_rgba(37,211,102,0.5)] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_12px_38px_rgba(37,211,102,0.6)] transition-all duration-500 max-sm:w-full max-sm:justify-center"
          >
            <MessageCircle size={22} />
            {t('ابدأ المحادثة', 'Start Chat')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppCTA;
