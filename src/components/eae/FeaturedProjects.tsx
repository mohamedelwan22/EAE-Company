import { Link } from 'react-router-dom';
import { useLang } from '@/contexts/LanguageContext';
import { MapPin, Calendar } from 'lucide-react';
import { projects, projectCategories } from '@/data/projects';

const FeaturedProjects = () => {
  const { t } = useLang();

  // Show the first 3 projects from the shared data source
  const featured = projects.slice(0, 3);

  return (
    <section className="py-[var(--section-py)] bg-gray-50 dark:bg-slate-900 border-t border-border">
      <div className="eae-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground relative inline-block">
            {t('مشاريعنا المميزة', 'Featured Projects')}
            <span className="block w-20 h-1.5 bg-primary mt-4 mx-auto rounded-full"></span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('نفخر بثقة عملائنا في مختلف مناطق المملكة', 'Proud to serve clients across Saudi Arabia')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8 mb-12">
          {featured.map((project) => {
            const catObj = projectCategories.find((c) => c.id === project.category);
            const categoryLabel = catObj ? t(catObj.ar, catObj.en) : '';

            return (
            <div 
              key={project.id} 
              className="group relative rounded-2xl overflow-hidden shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-xl)] hover:-translate-y-2 border-2 border-transparent hover:border-primary transition-all duration-500 bg-card cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={project.images[0]} 
                  alt={t(project.titleAr, project.titleEn)} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  loading="lazy"
                />
                
                {/* Category Badge - Top Right */}
                <div className="absolute top-4 ltr:right-4 rtl:left-4 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-bold shadow-lg z-20">
                  {categoryLabel}
                </div>

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />

                {/* City & Year - Bottom Left */}
                <div className="absolute bottom-4 ltr:left-4 rtl:right-4 z-20 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-white font-bold text-lg">
                    <MapPin size={18} className="text-primary" />
                    <span>{t(project.locationAr, project.locationEn)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80 font-medium text-sm">
                    <Calendar size={16} className="text-primary" />
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-10 py-4 rounded-xl font-bold text-lg hover:-translate-y-1 hover:shadow-[0_8px_30px_hsl(var(--orange-glow)/0.4)] transition-all"
          >
            {t('عرض جميع المشاريع', 'View All Projects')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
