import { useState, useEffect, useRef, useCallback } from 'react';
import Navbar from '@/components/eae/Navbar';
import Footer from '@/components/eae/Footer';
import FloatingWidgets from '@/components/eae/FloatingWidgets';
import BackButton from '@/components/eae/BackButton';
import { useLang } from '@/contexts/LanguageContext';
import {
  MapPin,
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  Award,
  Users,
  Briefcase,
  Images,
} from 'lucide-react';
import { projects, projectCategories, type Project } from '@/data/projects';

/* ─────────────── Animated Counter ─────────────── */
const AnimatedCounter = ({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let n = 0;
    const step = target / (1800 / 16);
    const timer = setInterval(() => {
      n += step;
      if (n >= target) {
        setCount(target);
        clearInterval(timer);
        return;
      }
      setCount(Math.floor(n));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

/* ─────────────── Lightbox ─────────────── */
interface LightboxProps {
  images: string[];
  initialIndex: number;
  projectTitle: string;
  onClose: () => void;
}

const Lightbox = ({ images, initialIndex, projectTitle, onClose }: LightboxProps) => {
  const [idx, setIdx] = useState(initialIndex);

  const prev = useCallback(
    () => setIdx((i) => (i === 0 ? images.length - 1 : i - 1)),
    [images.length]
  );
  const next = useCallback(
    () => setIdx((i) => (i === images.length - 1 ? 0 : i + 1)),
    [images.length]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose, prev, next]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
        aria-label="Close"
      >
        <X size={24} />
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 z-50 text-white/80 text-sm font-medium bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
        {idx + 1} / {images.length}
      </div>

      {/* Project title */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-50 text-white/70 text-sm font-medium">
        {projectTitle}
      </div>

      {/* Prev / Next arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-primary/80 flex items-center justify-center text-white transition-all cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-primary/80 flex items-center justify-center text-white transition-all cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>
        </>
      )}

      {/* Image */}
      <img
        src={images[idx]}
        alt={`${projectTitle} - ${idx + 1}`}
        className="max-h-[85vh] max-w-[92vw] object-contain rounded-lg shadow-2xl select-none"
        onClick={(e) => e.stopPropagation()}
        draggable={false}
      />
    </div>
  );
};

/* ─────────────── Project Card ─────────────── */
interface ProjectCardProps {
  project: Project;
  lang: string;
  t: (ar: string, en: string) => string;
  onOpenLightbox: (project: Project, index: number) => void;
}

const ProjectCard = ({ project, lang, t, onOpenLightbox }: ProjectCardProps) => {
  const title = lang === 'ar' ? project.titleAr : project.titleEn;
  const location = lang === 'ar' ? project.locationAr : project.locationEn;
  const thumbnail = project.images[0];
  const imageCount = project.images.length;

  // Get category display name
  const catObj = projectCategories.find((c) => c.id === project.category);
  const categoryLabel = catObj ? t(catObj.ar, catObj.en) : '';

  return (
    <div
      className="group relative rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] hover:-translate-y-2 border-2 border-transparent hover:border-primary transition-all duration-500 bg-card cursor-pointer"
      onClick={() => onOpenLightbox(project, 0)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />

        {/* Category Badge - Top */}
        <div className="absolute top-4 ltr:right-4 rtl:left-4 bg-primary text-white px-3.5 py-1 rounded-full text-xs font-bold shadow-md z-20 flex items-center gap-1.5">
          {categoryLabel}
        </div>

        {/* Image Count Badge */}
        {imageCount > 1 && (
          <div className="absolute top-4 ltr:left-4 rtl:right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold z-20 flex items-center gap-1.5">
            <Images size={14} />
            <span>+{imageCount} {t('صور', 'photos')}</span>
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center scale-50 group-hover:scale-100 transition-transform duration-500">
            <Camera size={28} className="text-white" />
          </div>
        </div>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-10 pointer-events-none" />

        {/* Title & Location - Bottom */}
        <div className="absolute bottom-4 ltr:left-4 rtl:right-4 ltr:right-4 rtl:left-4 z-20 flex flex-col gap-1.5">
          <h3 className="text-white font-bold text-base leading-snug">{title}</h3>
          <div className="flex items-center gap-2 text-white/80 font-medium text-xs">
            <MapPin size={14} className="text-primary flex-shrink-0" />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────── Stats Data ─────────────── */
const statsData = [
  { value: 15, suffix: '+', labelAr: 'سنة خبرة', labelEn: 'Years Experience', icon: Award },
  { value: 600, suffix: '+', labelAr: 'موقع', labelEn: 'Locations', icon: MapPin },
  { value: 1439, suffix: '+', labelAr: 'عميل', labelEn: 'Clients', icon: Users },
  { value: 732, suffix: '+', labelAr: 'مشروع منجز', labelEn: 'Projects Done', icon: Briefcase },
];

/* ─────────────── Main Page ─────────────── */
const Projects = () => {
  const { lang, t } = useLang();
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightbox, setLightbox] = useState<{
    project: Project;
    index: number;
  } | null>(null);

  // Stats CountUp via IntersectionObserver
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsInView, setStatsInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsInView(true);
      },
      { threshold: 0.15 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const openLightbox = (project: Project, index: number) => {
    setLightbox({ project, index });
  };

  return (
    <>
      <Navbar />
      <BackButton />
      <main className="pb-12 md:pb-20 min-h-screen bg-background">
        {/* ── Hero / Overview Section ── */}
        <div className="relative bg-[#1a2744] h-[280px] md:h-[380px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#1a2744] z-10" />
          {/* Decorative blobs */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl z-0" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl z-0" />

          <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5">
              {t('مشاريعنا السابقة', 'Our Previous Projects')}
            </h1>
            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
              {t(
                'منذ عام 2013، نفخر بأكثر من 15 عامًا من الخبرة في مجال معدات صيانة السيارات، خلالها أتممنا مئات المشاريع على مستوى المملكة بالكامل — من الرياض إلى تبوك، ومن مكة المكرمة والمدينة المنورة إلى الدمام والخبر، وصولاً إلى جيزان ونجران وأبها وخميس مشيط.',
                'Since 2013, we have accumulated over 15 years of expertise in automotive service equipment, completing hundreds of projects across Saudi Arabia — from Riyadh to Tabuk, from Makkah and Madinah to Dammam and Khobar, all the way to Jizan, Najran, Abha, and Khamis Mushait.'
              )}
            </p>
          </div>
        </div>

        {/* ── Stats Bar ── */}
        <div className="eae-container -mt-10 relative z-30 mb-16">
          <div
            ref={statsRef}
            className="bg-card rounded-2xl shadow-lg border border-border p-6 md:p-8 grid grid-cols-4 max-md:grid-cols-2 gap-6 text-center"
          >
            {statsData.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex flex-col items-center gap-2">
                  <Icon size={28} className="text-primary" />
                  <p className="text-3xl md:text-4xl font-black text-primary leading-none">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={statsInView} />
                  </p>
                  <p className="text-muted-foreground font-medium text-sm">
                    {t(stat.labelAr, stat.labelEn)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Filter Bar ── */}
        <div className="eae-container mb-10">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:justify-center">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`flex-shrink-0 px-6 py-2.5 rounded-full font-semibold text-sm cursor-pointer transition-all ${
                  activeFilter === cat.id
                    ? 'bg-[#F97316] text-white shadow-[0_4px_15px_rgba(249,115,22,0.3)]'
                    : 'bg-transparent border border-gray-600 text-muted-foreground hover:border-primary hover:text-primary'
                }`}
              >
                {t(cat.ar, cat.en)}
              </button>
            ))}
          </div>
        </div>

        {/* ── Projects Grid ── */}
        <div className="eae-container">
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8 max-sm:gap-6">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                lang={lang}
                t={t}
                onOpenLightbox={openLightbox}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-lg">{t('لا توجد مشاريع في هذا التصنيف', 'No projects in this category')}</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <FloatingWidgets />

      {/* ── Lightbox ── */}
      {lightbox && (
        <Lightbox
          images={lightbox.project.images}
          initialIndex={lightbox.index}
          projectTitle={lang === 'ar' ? lightbox.project.titleAr : lightbox.project.titleEn}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
};

export default Projects;
