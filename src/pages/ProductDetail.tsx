import { useParams, useNavigate, Link } from 'react-router-dom';
import { useLang } from '@/contexts/LanguageContext';
import { getProductById, products, WHATSAPP_NUMBER } from '@/data/products';
import Navbar from '@/components/eae/Navbar';
import Footer from '@/components/eae/Footer';
import FloatingWidgets from '@/components/eae/FloatingWidgets';
import BackButton from '@/components/eae/BackButton';
import { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, MessageCircle, CheckCircle2, ChevronLeft, ChevronRight, X, Share2, Phone } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t, lang, isRtl } = useLang();
  const navigate = useNavigate();
  const product = getProductById(id || '');

  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'specs' | 'features' | 'accessories'>('specs');

  const allImages = product ? [product.image, ...(product.images ?? [])] : [];

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setActiveImage(0);
    setActiveTab('specs');
  }, [id]);

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightboxOpen]);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-background pt-[70px]">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">{t('المنتج غير موجود', 'Product Not Found')}</h1>
            <button onClick={() => navigate('/')} className="btn-primary mt-4">
              {t('العودة للرئيسية', 'Back to Home')}
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const waLink = "https://wa.me/966503946848?text=مرحباً،%20أود%20الاستفسار%20عن%20منتجاتكم";

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  const BackArrow = isRtl ? ArrowRight : ArrowLeft;

  return (
    <>
      <Navbar />
      <BackButton />
      <main className="bg-background pt-24 md:pt-32 pb-0">
        {/* Breadcrumb */}
        <div className="eae-container py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
            <Link to="/" className="hover:text-primary transition-colors">{t('الرئيسية', 'Home')}</Link>
            <span>/</span>
            <Link to={`/products?category=${product.category}`} className="hover:text-primary transition-colors">{t(product.categoryLabel.ar, product.categoryLabel.en)}</Link>
            <span>/</span>
            <span className="text-foreground font-semibold">{t(product.name.ar, product.name.en)}</span>
          </nav>
        </div>

        {/* Product Hero */}
        <section className="eae-container pb-16">
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-10 max-lg:gap-8">
            {/* Gallery */}
            <div>
              <div
                className="relative rounded-2xl overflow-hidden bg-secondary border border-border aspect-[4/3] cursor-zoom-in group"
                onClick={() => setLightboxOpen(true)}
              >
                <img
                  src={allImages[activeImage]}
                  alt={t(product.name.ar, product.name.en)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-4 ltr:left-4 rtl:right-4 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-bold">
                    {t(product.badge.ar, product.badge.en)}
                  </span>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                    {t('اضغط للتكبير', 'Click to zoom')}
                  </span>
                </div>
              </div>
              {allImages.length > 1 && (
                <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                  {allImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`shrink-0 w-20 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                        activeImage === i
                          ? 'border-primary shadow-[0_0_12px_hsl(var(--orange-glow)/0.4)]'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col">
              <div className="mb-2">
                <span className="text-primary font-bold text-sm">{t(product.categoryLabel.ar, product.categoryLabel.en)}</span>
              </div>
              <h1 className="text-3xl max-sm:text-2xl font-black text-foreground mb-2 leading-tight">
                {t(product.name.ar, product.name.en)}
              </h1>
              <p className="text-primary font-bold text-lg mb-4">{product.model}</p>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                {t(product.description.ar, product.description.en)}
              </p>

              {/* Quick features */}
              <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-3 mb-8">
                {product.features.slice(0, 4).map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm">
                    <CheckCircle2 size={18} className="text-primary shrink-0" />
                    <span className="text-foreground font-medium">{t(f.ar, f.en)}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-3 flex-wrap mt-auto">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-white px-8 py-4 rounded-full font-extrabold text-base shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(37,211,102,0.5)] transition-all"
                >
                  <MessageCircle size={22} />
                  {t('طلب عرض سعر', 'Request Quote')}
                </a>
                <a
                  href="tel:+966112706564"
                  className="inline-flex items-center justify-center gap-2 bg-secondary border border-border text-foreground px-6 py-4 rounded-full font-bold text-base hover:border-primary hover:text-primary transition-all"
                >
                  <Phone size={20} />
                  {t('اتصل بنا', 'Call Us')}
                </a>
                <button
                  onClick={() => {
                    navigator.share?.({ title: t(product.name.ar, product.name.en), url: window.location.href })
                      .catch(() => {
                        navigator.clipboard.writeText(window.location.href);
                      });
                  }}
                  className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all"
                >
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Specs & Features Tabs */}
        <section className="bg-secondary/50 py-16">
          <div className="eae-container">
            <div className="flex gap-1 mb-8 bg-secondary rounded-2xl p-1.5 w-fit">
              <button
                onClick={() => setActiveTab('specs')}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                  activeTab === 'specs'
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {t('المواصفات الفنية', 'Technical Specifications')}
              </button>
              <button
                onClick={() => setActiveTab('features')}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                  activeTab === 'features'
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {t('المميزات', 'Features')}
              </button>
              {(product.accessories && product.accessories.length > 0) && (
                <button
                  onClick={() => setActiveTab('accessories')}
                  className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                    activeTab === 'accessories'
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {t('الملحقات', 'Accessories')}
                </button>
              )}
            </div>

            {activeTab === 'specs' && (
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                {(product.specs.length > 0 || (product.specifications && product.specifications[lang as 'ar' | 'en']?.length > 0)) ? (
                  <table className="w-full">
                    <tbody>
                      {product.specs.length > 0 ? (
                        product.specs.map((spec, i) => (
                          <tr key={i} className={`${i % 2 === 0 ? 'bg-card' : 'bg-secondary/30'} border-b border-border last:border-0`}>
                            <td className="px-6 py-4 font-bold text-foreground text-sm w-1/2">
                              {t(spec.label.ar, spec.label.en)}
                            </td>
                            <td className="px-6 py-4 text-muted-foreground text-sm font-mono">
                              {spec.value}
                            </td>
                          </tr>
                        ))
                      ) : (
                        product.specifications?.[lang as 'ar' | 'en']?.map((spec, i) => (
                          <tr key={i} className={`${i % 2 === 0 ? 'bg-card' : 'bg-secondary/30'} border-b border-border last:border-0`}>
                            <td className="px-6 py-4 font-bold text-foreground text-sm w-1/2">
                              {spec.label}
                            </td>
                            <td className="px-6 py-4 text-muted-foreground text-sm font-mono">
                              {spec.value}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                ) : (
                  <div className="p-10 text-center text-muted-foreground">
                    {t('لا توجد مواصفات متاحة حالياً', 'No specifications available yet')}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'features' && (
              <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
                {product.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3 bg-card rounded-xl border border-border p-5 hover:border-primary hover:-translate-y-0.5 transition-all">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={18} className="text-primary" />
                    </div>
                    <span className="text-foreground font-semibold text-[15px] leading-relaxed">
                      {t(f.ar, f.en)}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'accessories' && product.accessories && (
              <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
                {product.accessories.map((acc, i) => (
                  <div key={i} className="flex items-center gap-3 bg-card rounded-xl border border-border p-4 hover:border-primary transition-all">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-primary font-bold text-xs">{t(acc.ar, acc.en).split(' – ')[0] || i + 1}</span>
                    </div>
                    <span className="text-foreground font-medium text-sm">
                      {t(acc.ar, acc.en)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {product.whyChooseUs && (
          <section className="py-16 eae-container">
            <div className="bg-primary/5 rounded-3xl p-10 border border-primary/10">
              <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
                <div className="w-1.5 h-8 bg-primary rounded-full" />
                {t('لماذا تختار هذا المنتج؟', 'Why Choose This Product?')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                "{t(product.whyChooseUs.ar, product.whyChooseUs.en)}"
              </p>
            </div>
          </section>
        )}

        {product.afterSales && (
          <section className="py-12 bg-secondary/30">
            <div className="eae-container">
              <div className="bg-card rounded-2xl border border-border p-8 shadow-sm border-s-4 border-s-primary">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {t('خدمة ما بعد البيع', 'After-Sales Service')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(product.afterSales.ar, product.afterSales.en)}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* WhatsApp CTA */}
        <section className="py-16">
          <div className="eae-container">
            <div className="bg-gradient-to-br from-[hsl(var(--blue-dark))] to-[hsl(var(--blue))] rounded-3xl p-10 max-sm:p-6 flex flex-col sm:flex-row items-center gap-6 text-white text-center sm:text-start">
              <div className="text-5xl">💬</div>
              <div className="flex-1">
                <h3 className="text-2xl font-black mb-2">{t('هل تحتاج مساعدة في اختيار المنتج؟', 'Need help choosing the right product?')}</h3>
                <p className="opacity-80">{t('خبراؤنا جاهزون للإجابة على جميع استفساراتك', 'Our experts are ready to answer all your questions')}</p>
              </div>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2.5 bg-[#25D366] text-white px-8 py-4 rounded-full font-extrabold text-base shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(37,211,102,0.5)] transition-all"
              >
                <MessageCircle size={22} />
                {t('تواصل الآن', 'Contact Now')}
              </a>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="pb-20">
            <div className="eae-container">
              <div className="section-header">
                <h2 className="section-title">{t('منتجات مشابهة', 'Related Products')}</h2>
              </div>
              <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6">
                {related.map(p => (
                  <Link
                    key={p.id}
                    to={`/product/${p.id}`}
                    className="bg-card rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-sm)] hover:-translate-y-2.5 hover:shadow-[var(--shadow-xl)] hover:border-primary transition-all duration-500 group block"
                  >
                    <div className="h-[200px] overflow-hidden bg-[#f8f8f8] dark:bg-white/10 flex items-center justify-center p-4">
                      <img
                        src={p.image}
                        alt={t(p.name.ar, p.name.en)}
                        className="max-w-full max-h-full object-contain group-hover:scale-[1.08] transition-transform duration-600"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-[16px] font-extrabold text-foreground mb-1">{t(p.name.ar, p.name.en)}</h3>
                      <p className="text-[13px] text-primary font-semibold">{p.model}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Back link */}
        <div className="eae-container pb-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-primary font-bold hover:-translate-x-1 rtl:hover:translate-x-1 transition-transform"
          >
            <BackArrow size={20} />
            {t('العودة لجميع المنتجات', 'Back to All Products')}
          </Link>
        </div>
      </main>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center" onClick={() => setLightboxOpen(false)}>
          <button className="absolute top-6 end-6 text-white/80 hover:text-white z-10" onClick={() => setLightboxOpen(false)}>
            <X size={32} />
          </button>
          {allImages.length > 1 && (
            <>
              <button
                className="absolute start-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-all z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImage((prev) => (prev - 1 + allImages.length) % allImages.length);
                }}
              >
                {isRtl ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
              </button>
              <button
                className="absolute end-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-all z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImage((prev) => (prev + 1) % allImages.length);
                }}
              >
                {isRtl ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
              </button>
            </>
          )}
          <img
            src={allImages[activeImage]}
            alt=""
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {allImages.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setActiveImage(i); }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  activeImage === i ? 'bg-primary w-7 rounded-sm' : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      <Footer />
      <FloatingWidgets />
    </>
  );
};

export default ProductDetail;
