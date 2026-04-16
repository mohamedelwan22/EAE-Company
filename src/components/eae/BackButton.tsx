import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';

const BackButton = () => {
  const { t, isRtl } = useLang();

  return (
    <div className="eae-container pt-4 md:hidden">
      <button
        onClick={() => window.history.back()}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-primary text-primary font-bold text-sm bg-transparent hover:bg-primary/5 transition-colors tap-target"
      >
        {isRtl ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
        {t('رجوع', 'Back')}
      </button>
    </div>
  );
};

export default BackButton;
