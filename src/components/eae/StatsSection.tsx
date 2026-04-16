import { useEffect, useRef, useState } from 'react';
import { useLang } from '@/contexts/LanguageContext';
import { Briefcase, Users, MapPin, Clock, Calendar } from 'lucide-react';

interface StatItem {
  icon: React.ReactNode;
  target: number;
  suffix: string;
  label: { ar: string; en: string };
}

const stats: StatItem[] = [
  { icon: <Briefcase size={40} />, target: 500, suffix: '+', label: { ar: 'مشروع منجز', en: 'Projects Completed' } },
  { icon: <Users size={40} />, target: 350, suffix: '+', label: { ar: 'عميل راضٍ', en: 'Happy Clients' } },
  { icon: <MapPin size={40} />, target: 25, suffix: '+', label: { ar: 'موقع توكيل', en: 'Dealership Locations' } },
  { icon: <Clock size={40} />, target: 15, suffix: '+', label: { ar: 'سنة خبرة', en: 'Years Experience' } },
  { icon: <Calendar size={40} />, target: 2013, suffix: '', label: { ar: 'تأسست عام', en: 'Established in' } },
];

const AnimatedCounter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let n = 0;
    const step = target / (2000 / 16);
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

  return <span>{count}{suffix}</span>;
};

const StatsSection = () => {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-eae-blue-dark to-eae-blue relative overflow-hidden">
      <div className="eae-container" ref={ref}>
        <div className="grid grid-cols-5 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center text-white p-9 max-sm:p-6 rounded-2xl bg-white/[0.08] border border-white/[0.12] hover:-translate-y-1.5 transition-transform duration-500"
            >
              <span className="text-primary mb-3.5 block">{stat.icon}</span>
              <div className="font-black leading-none mb-2" style={{ fontSize: 'clamp(38px, 4.5vw, 58px)' }}>
                <AnimatedCounter target={stat.target} suffix={stat.suffix} inView={inView} />
              </div>
              <div className="text-[15px] opacity-85 font-medium">{t(stat.label.ar, stat.label.en)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
