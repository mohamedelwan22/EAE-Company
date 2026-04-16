import { useState, useEffect, useCallback, useRef } from 'react';
import { useLang } from '@/contexts/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroSprayBooth from '@/assets/hero-spray-booth.jpg';
import heroCarLift from '@/assets/hero-car-lift.jpg';
import heroCompressor from '@/assets/hero-compressor.jpg';
import heroWorkshop from '@/assets/hero-workshop.jpg';
import heroMainMachine from '@/assets/hero-main-machine.jpeg';

const INTERVAL = 5000;

interface Slide {
  image: string;
  badge: { ar: string; en: string };
  title: { ar: string; en: string };
  subtitle: { ar: string; en: string };
  cta1: { ar: string; en: string };
  cta2: { ar: string; en: string };
}

const slides: Slide[] = [
  {
    image: heroSprayBooth,
    badge: { ar: ' الرائدون في المملكة', en: ' Kingdom Leaders' },
    title: { ar: 'كابينات الرش الاحترافية', en: 'Professional Spray Booths' },
    subtitle: { ar: 'أنظمة دهان متكاملة بمعايير عالمية للورش الاحترافية', en: 'Complete painting systems with international standards' },
    cta1: { ar: 'تصفح المنتجات', en: 'Browse Products' },
    cta2: { ar: 'تواصل معنا', en: 'Contact Us' },
  },
  {
    image: heroCarLift,
    badge: { ar: '⚡ جودة معتمدة', en: '⚡ Certified Quality' },
    title: { ar: 'روافع السيارات الاحترافية', en: 'Professional Car Lifts' },
    subtitle: { ar: 'روافع مقصية ورباعية الأعمدة بأعلى معايير الأمان', en: 'Scissor & 4-post lifts with top safety standards' },
    cta1: { ar: 'اكتشف الروافع', en: 'Discover Lifts' },
    cta2: { ar: 'طلب عرض سعر', en: 'Request Quote' },
  },
  {
    image: heroCompressor,
    badge: { ar: '🔧 خبرة 15+ سنة', en: '🔧 15+ Years Experience' },
    title: { ar: 'الضواغط الصناعية', en: 'Industrial Compressors' },
    subtitle: { ar: 'ضواغط هواء صناعية عالية الأداء للورش والمصانع', en: 'High-performance industrial air compressors' },
    cta1: { ar: 'تصفح الضواغط', en: 'Browse Compressors' },
    cta2: { ar: 'تواصل الآن', en: 'Contact Now' },
  },
  {
    image: heroWorkshop,
    badge: { ar: ' تركيب وصيانة', en: ' Installation & Maintenance' },
    title: { ar: 'قوّة ورشتك', en: 'Power Your Workshop' },
    subtitle: { ar: 'معدات متكاملة وحلول مبتكرة مصممة خصيصاً للمحترفين', en: 'Complete equipment and innovative solutions for professionals' },
    cta1: { ar: 'جميع المنتجات', en: 'All Products' },
    cta2: { ar: 'مشاريعنا', en: 'Our Projects' },
  },
  {
    image: heroMainMachine,
    badge: { ar: "منتجاتنا المميزة", en: "Our Featured Products" },
    title: { ar: "رافعات السيارات الاحترافية", en: "Professional Car Lifts" },
    subtitle: { 
      ar: "رافعات هيدروليكية عالية الجودة لجميع أنواع الورش", 
      en: "High quality hydraulic lifts for all workshop types" 
    },
    cta1: { ar: 'تصفح المنتجات', en: 'Browse Products' },
    cta2: { ar: 'تواصل معنا', en: 'Contact Us' },
  },
];

const HeroSlider = () => {
  const { t, isRtl } = useLang();
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);

  const goTo = useCallback((n: number) => {
    setCurrent(((n % slides.length) + slides.length) % slides.length);
  }, []);

  const startAuto = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => goTo(current + 1), INTERVAL);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, INTERVAL);
    timerRef.current = timer;
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (i: number) => {
    goTo(i);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCurrent(prev => (prev + 1) % slides.length), INTERVAL);
  };

  const handleArrow = (dir: number) => {
    goTo(current + dir);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCurrent(prev => (prev + 1) % slides.length), INTERVAL);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) < 50) return;
    const dir = diff > 0 ? (isRtl ? 1 : -1) : (isRtl ? -1 : 1);
    handleArrow(dir);
  };

  return (
    <section id="hero" className="relative w-full h-screen min-h-[600px] max-h-[1000px] overflow-hidden bg-black max-md:min-h-[520px]">
      {/* Slides */}
      <div
        className="absolute inset-0 z-[2]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              i === current ? 'opacity-100 z-[2]' : 'opacity-0 z-[1]'
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />
            {/* Content */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center pt-24 pb-12 px-6 max-md:px-4 text-center z-[3] transition-all duration-1000 ${
                i === current
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: i === current ? '0.3s' : '0s' }}
            >
              <div className="w-full max-w-[880px] mx-auto">
                <span className="inline-block bg-primary/95 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 backdrop-blur-md tracking-wide shadow-lg border border-white/10">
                  {t(slide.badge.ar, slide.badge.en)}
                </span>
                <h1
                  className="font-black leading-[1.1] mb-6 text-white"
                  style={{ fontSize: 'clamp(38px, 6vw, 76px)', textShadow: '0 4px 30px rgba(0,0,0,0.5)' }}
                >
                  {t(slide.title.ar, slide.title.en)}
                </h1>
                <p
                  className="text-white/95 mb-10 mx-auto max-w-[680px] leading-relaxed max-sm:hidden"
                  style={{ fontSize: 'clamp(17px, 2vw, 22px)', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
                >
                  {t(slide.subtitle.ar, slide.subtitle.en)}
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 bg-primary text-white hover:text-white px-9 py-4 rounded-full font-black text-[17px] shadow-[0_8px_25px_hsl(var(--orange-glow)/0.3)] hover:-translate-y-1 hover:bg-orange-600 transition-all duration-300"
                  >
                    {t(slide.cta1.ar, slide.cta1.en)}
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white hover:text-primary border-2 border-white/40 px-9 py-4 rounded-full font-black text-[17px] hover:bg-white hover:border-white transition-all duration-300"
                  >
                    {t(slide.cta2.ar, slide.cta2.en)}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-9 max-sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`h-2.5 rounded-full border-none cursor-pointer p-0 transition-all duration-300 ${
              i === current
                ? 'bg-primary w-[30px]'
                : 'bg-white/35 w-2.5'
            }`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => handleArrow(-1)}
        className="absolute top-1/2 -translate-y-1/2 z-10 bg-white/10 border border-white/20 text-white w-[50px] h-[50px] max-md:w-10 max-md:h-10 rounded-full cursor-pointer flex items-center justify-center backdrop-blur-lg hover:bg-primary hover:scale-110 transition-all ltr:left-6 rtl:right-6 max-md:ltr:left-2.5 max-md:rtl:right-2.5"
      >
        {isRtl ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
      </button>
      <button
        onClick={() => handleArrow(1)}
        className="absolute top-1/2 -translate-y-1/2 z-10 bg-white/10 border border-white/20 text-white w-[50px] h-[50px] max-md:w-10 max-md:h-10 rounded-full cursor-pointer flex items-center justify-center backdrop-blur-lg hover:bg-primary hover:scale-110 transition-all ltr:right-6 rtl:left-6 max-md:ltr:right-2.5 max-md:rtl:left-2.5"
      >
        {isRtl ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>


    </section>
  );
};

export default HeroSlider;
