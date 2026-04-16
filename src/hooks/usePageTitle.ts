import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLang } from '@/contexts/LanguageContext';

const usePageTitle = () => {
  const { pathname } = useLocation();
  const { t } = useLang();

  useEffect(() => {
    const titles: Record<string, string> = {
      '/': t('EAE | مؤسسة التوكيلات الهندسية', 'EAE | Engineering Agencies Est.'),
      '/products': t('منتجاتنا | EAE', 'Products | EAE'),
      '/projects': t('مشاريعنا | EAE', 'Our Projects | EAE'),
      '/about': t('من نحن | EAE', 'About Us | EAE'),
      '/contact': t('تواصل معنا | EAE', 'Contact Us | EAE'),
    };

    // For dynamic routes like /product/:id, we use a generic placeholder or could fetch the name.
    // For now, simple matching.
    let title = titles[pathname] || t('صفحة | EAE', 'Page | EAE');
    
    if (pathname.startsWith('/product/')) {
       title = t('تفاصيل المنتج | EAE', 'Product Details | EAE');
    }

    document.title = title;
  }, [pathname, t]);
};

export default usePageTitle;
