import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLang } from '@/contexts/LanguageContext';
import { getProductGroup, getProductsByGroup } from '@/data/products';
import Navbar from '@/components/eae/Navbar';
import Footer from '@/components/eae/Footer';
import FloatingWidgets from '@/components/eae/FloatingWidgets';
import BackButton from '@/components/eae/BackButton';
import { useEffect } from 'react';
import { ArrowRight, ArrowLeft, Eye, Lock, Unlock, Wrench, Scale } from 'lucide-react';

const ProductGroup = ({ groupId: propGroupId }: { groupId?: string }) => {
  const { groupId: paramsGroupId } = useParams<{ groupId: string }>();
  const groupId = propGroupId || paramsGroupId;
  const { t, lang, isRtl } = useLang();
  const navigate = useNavigate();

  const group = getProductGroup(groupId || '');
  const variants = getProductsByGroup(groupId || '');

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [groupId]);

  if (!group || variants.length === 0) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-background pt-[70px]">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              {t('المجموعة غير موجودة', 'Product Group Not Found')}
            </h1>
            <button onClick={() => navigate('/products')} className="mt-4 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-all">
              {t('العودة للمنتجات', 'Back to Products')}
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const BackArrow = isRtl ? ArrowRight : ArrowLeft;

  // Determine icon based on badge
  const getVariantIcon = (productId: string) => {
    if (productId.includes('closed')) return <Lock size={28} className="text-primary" />;
    if (productId.includes('open')) return <Unlock size={28} className="text-primary" />;
    if (productId.includes('ground')) return <Wrench size={28} className="text-primary" />;
    if (productId.includes('balance')) return <Scale size={28} className="text-primary" />;
    
    if (productId.includes('lamp')) {
      return <div className="text-primary font-black text-xl italic">{productId.split('-').pop()}</div>;
    }
    
    if (productId.includes('alignment')) {
      if (productId.includes('zd-9')) return <div className="text-primary font-black text-lg italic tracking-tighter">9 PRO</div>;
      if (productId.includes('zd-6')) return <div className="text-primary font-black text-xl italic">ZD-6</div>;
    }
    return null;
  };

  const getVariantLabel = (productId: string) => {
    if (productId.includes('closed')) return { ar: 'مقفول', en: 'Closed', emoji: '🔒' };
    if (productId.includes('open')) return { ar: 'مفتوح', en: 'Open', emoji: '🔓' };
    if (productId.includes('ground')) return { ar: 'أرضية', en: 'Surface', emoji: '🔧' };
    if (productId.includes('balance')) return { ar: 'ميزان', en: 'Alignment', emoji: '⚖️' };
    
    if (productId.includes('lamp')) {
      if (productId.endsWith('-2')) return { ar: '2 شمعة', en: '2 Lamps', emoji: '💡' };
      if (productId.endsWith('-6')) return { ar: '6 شمعات', en: '6 Lamps', emoji: '💡' };
    }
    
    if (productId.includes('alignment')) {
      if (productId.includes('zd-6')) return { ar: 'موديل 3D-ZD-6', en: 'Model 3D-ZD-6', emoji: '🚗' };
      if (productId.includes('zd-9-pro')) return { ar: 'موديل 3D-ZD-9 Pro', en: 'Model 3D-ZD-9 Pro', emoji: '🚀' };
    }
    
    return { ar: '', en: '', emoji: '' };
  };

  return (
    <>
      <Navbar />
      <BackButton />
      <main className="bg-background pt-24 md:pt-32 pb-0">

        {/* Hero */}
        <div className="bg-[#1a2744] text-white py-12 md:py-20 px-4 text-center border-b-[8px] border-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 pattern-dots"></div>
          <div className="relative z-10 max-w-4xl mx-auto eae-container">
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-primary tracking-tight">
              {t(group.name.ar, group.name.en)}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {t('اختر النوع المناسب لورشتك', 'Choose the right type for your workshop')}
            </p>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="eae-container py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
            <Link to="/" className="hover:text-primary transition-colors">{t('الرئيسية', 'Home')}</Link>
            <span>/</span>
            <Link to={`/products?category=${group.category}`} className="hover:text-primary transition-colors">
              {t(group.categoryLabel.ar, group.categoryLabel.en)}
            </Link>
            <span>/</span>
            <span className="text-foreground font-semibold">{t(group.name.ar, group.name.en)}</span>
          </nav>
        </div>

        {/* Variant Cards */}
        <section className="eae-container py-12 md:py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-foreground mb-3">
              {groupId === 'wheel-alignment' ? t('اختر الموديل', 'Select Model') : t('اختر نوع الرافعة', 'Select Lift Type')}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t('متوفر بتصميمين مختلفين لتناسب احتياجاتك', 'Available in two different designs to suit your needs')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {variants.map((product) => {
              const variant = getVariantLabel(product.id);
              const mainSpec = product.specs[0];

              return (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="group bg-card rounded-3xl overflow-hidden border-2 border-border hover:border-primary shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-xl)] transition-all duration-500 hover:-translate-y-2 block"
                >
                  {/* Image */}
                  <div className="relative h-[280px] md:h-[320px] overflow-hidden bg-[#f8f8f8] dark:bg-white/10 flex items-center justify-center p-6">
                    <img
                      src={product.image}
                      alt={t(product.name.ar, product.name.en)}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Badge overlay */}
                    <div className="absolute top-4 start-4 bg-[#1a2744]/90 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold">
                      <span>{variant.emoji}</span>
                      <span>{t(variant.ar, variant.en)}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    {/* Icon + Type label */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                        {getVariantIcon(product.id)}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-black text-foreground group-hover:text-primary transition-colors">
                          {t(product.name.ar, product.name.en)}
                        </h3>
                        <p className="text-primary font-bold text-sm">{product.model}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3">
                      {t(product.description.ar, product.description.en)}
                    </p>

                    {/* Key spec */}
                    {mainSpec && (
                      <div className="bg-secondary/70 rounded-xl px-4 py-3 mb-6 flex items-center justify-between">
                        <span className="text-sm font-bold text-foreground">
                          {t(mainSpec.label.ar, mainSpec.label.en)}
                        </span>
                        <span className="text-primary font-black text-lg">{mainSpec.value}</span>
                      </div>
                    )}

                    {/* CTA */}
                    <div className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 rounded-xl font-bold text-base group-hover:shadow-[0_4px_20px_hsl(var(--orange-glow)/0.3)] transition-all">
                      <Eye size={18} />
                      {t('عرض التفاصيل', 'View Details')}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

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

      <Footer />
      <FloatingWidgets />
    </>
  );
};

export default ProductGroup;
