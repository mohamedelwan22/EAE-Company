import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Navbar from '@/components/eae/Navbar';
import Footer from '@/components/eae/Footer';
import FloatingWidgets from '@/components/eae/FloatingWidgets';
import BackButton from '@/components/eae/BackButton';
import { useLang } from '@/contexts/LanguageContext';
import { MessageCircle, Eye } from 'lucide-react';
import { products, categories, WHATSAPP_NUMBER, productGroups } from '@/data/products';

const Products = () => {
  const { t, lang } = useLang();
  const [activeTab, setActiveTab] = useState('all');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl) {
      setActiveTab(categoryFromUrl);
    }
  }, [searchParams]);

  const displayProducts = activeTab === 'all' ? products : products.filter(p => p.category === activeTab);

  return (
    <>
      <Navbar />
      <BackButton />
      <main className="pt-24 md:pt-32 pb-20 min-h-screen bg-background">
        <div className="eae-container">
          <div className="section-header text-center mb-12">
            <h1 className="section-title text-4xl font-extrabold mb-4">{t('منتجاتنا', 'Our Products')}</h1>
            <p className="section-sub text-lg text-muted-foreground">{t('اكتشف مجموعتنا الشاملة من معدات الورش الاحترافية', 'Discover our comprehensive range of professional workshop equipment')}</p>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex-shrink-0 px-6 py-2.5 rounded-full border-2 font-semibold text-sm cursor-pointer transition-all ${
                  activeTab === cat.id
                    ? 'bg-primary border-primary text-primary-foreground shadow-[0_4px_15px_hsl(var(--orange-glow)/0.25)]'
                    : 'bg-secondary border-border text-muted-foreground hover:border-primary hover:text-primary'
                }`}
              >
                {t(cat.ar, cat.en)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8 max-sm:gap-6">
            {displayProducts.map((product) => {
              const productLink = `/product/${product.id}`;

              return (
              <div
                key={product.id}
                className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:-translate-y-2 hover:shadow-xl hover:border-primary transition-all duration-300 group flex flex-col"
              >
                <Link to={productLink} className="block relative">
                  <div className="h-[240px] max-sm:h-48 overflow-hidden bg-[#f8f8f8] dark:bg-white/10 relative p-4 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={t(product.name.ar, product.name.en)}
                      className="max-h-full max-w-full h-auto w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {product.badge && (
                      <span className="absolute top-4 ltr:left-4 rtl:right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-md z-10">
                        {t(product.badge.ar, product.badge.en)}
                      </span>
                    )}
                  </div>
                </Link>
                <div className="p-6 max-sm:p-5 flex-1 flex flex-col">
                  <Link to={productLink}>
                    <h3 className="text-xl font-extrabold text-foreground mb-1 hover:text-primary transition-colors">{t(product.name.ar, product.name.en)}</h3>
                  </Link>
                  <p className="text-sm text-primary font-bold mb-3">{product.model}</p>
                  <p className="text-[15px] text-muted-foreground leading-relaxed mb-6 line-clamp-3 flex-1">{t(product.description.ar, product.description.en)}</p>
                  <div className="flex gap-3 mt-auto">
                    <Link
                      to={productLink}
                      className="flex-1 py-3 rounded-xl bg-secondary border border-border text-foreground font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-sm transition-all"
                    >
                      <Eye size={18} />
                      {t('عرض التفاصيل', 'View Details')}
                    </Link>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=مرحباً،%20أود%20الاستفسار%20عن%20منتجاتكم`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[50px] rounded-xl bg-[#25D366] text-white flex items-center justify-center hover:scale-105 hover:shadow-[0_4px_15px_rgba(37,211,102,0.4)] transition-all"
                      title={t('تواصل عبر واتساب', 'Contact via WhatsApp')}
                    >
                      <MessageCircle size={22} />
                    </a>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWidgets />
    </>
  );
};

export default Products;
