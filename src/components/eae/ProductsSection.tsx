import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/contexts/LanguageContext';
import { MessageCircle, Eye } from 'lucide-react';
import { products, categories, WHATSAPP_NUMBER } from '@/data/products';

const ProductsSection = () => {
  const { t, lang } = useLang();
  const [activeTab, setActiveTab] = useState('all');

  const filtered = activeTab === 'all' ? products : products.filter(p => p.category === activeTab);

  return (
    <section id="products" className="py-[var(--section-py)] bg-background">
      <div className="eae-container">
        <div className="section-header">
          <h2 className="section-title ">{t('منتجاتنا', 'Our Products')}</h2>
          <p className="section-sub">{t('اكتشف مجموعتنا الشاملة من معدات الورش الاحترافية', 'Discover our comprehensive range of professional workshop equipment')}</p>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-4 mb-9 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-full border-2 font-semibold text-sm cursor-pointer transition-all ${
                activeTab === cat.id
                  ? 'bg-primary border-primary text-primary-foreground shadow-[0_4px_15px_hsl(var(--orange-glow)/0.25)]'
                  : 'bg-secondary border-border text-muted-foreground hover:border-primary hover:text-primary'
              }`}
            >
              {t(cat.ar, cat.en)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6 max-sm:gap-4">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-sm)] hover:-translate-y-2.5 hover:shadow-[var(--shadow-xl)] hover:border-primary transition-all duration-500 group"
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="h-[220px] max-sm:h-[180px] overflow-hidden bg-[#f8f8f8] dark:bg-white/10 relative p-4 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={t(product.name.ar, product.name.en)}
                    className="max-h-full max-w-full h-auto w-auto object-contain group-hover:scale-[1.08] transition-transform duration-600"
                    loading="lazy"
                  />
                  {product.badge && (
                    <span className="absolute top-3 ltr:left-3 rtl:right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                      {t(product.badge.ar, product.badge.en)}
                    </span>
                  )}
                </div>
              </Link>
              <div className="p-5 max-sm:p-3.5">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-[17px] font-extrabold text-foreground mb-1">{t(product.name.ar, product.name.en)}</h3>
                </Link>
                <p className="text-[13px] text-primary font-semibold mb-2.5">{product.model}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{t(product.description.ar, product.description.en)}</p>
                <div className="flex gap-2.5">
                  <Link
                    to={`/product/${product.id}`}
                    className="flex-1 py-2.5 rounded-lg bg-secondary border border-border text-foreground font-bold text-sm flex items-center justify-center gap-1.5 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
                  >
                    <Eye size={16} />
                    {t('التفاصيل', 'Details')}
                  </Link>
                  <a
                    href="https://wa.me/966112706564?text=مرحباً،%20أود%20الاستفسار%20عن%20منتجاتكم"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3.5 rounded-lg bg-[#25D366] text-white text-xl cursor-pointer flex items-center justify-center hover:scale-110 hover:shadow-[0_4px_15px_rgba(37,211,102,0.4)] transition-all"
                  >
                    <MessageCircle size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-extrabold text-base shadow-[0_4px_20px_hsl(var(--orange-glow)/0.25)] hover:-translate-y-0.5 hover:bg-orange-dark transition-all">
            {t('عرض جميع المنتجات', 'View All Products')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
