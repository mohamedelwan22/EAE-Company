import { Link } from 'react-router-dom';
import { useLang } from '@/contexts/LanguageContext';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const { t } = useLang();

  return (
    <footer id="contact" className="bg-card border-t border-border py-16">
      <div className="eae-container">
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-10">
          {/* Brand */}
          <div>
            <img src='/assets/logo.png' alt="EAE" className="w-[200px] mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-[300px]">
              {t(
                'مؤسسة التوكيلات الهندسية — الرائدون في تجهيز الورش الاحترافية في المملكة العربية السعودية.',
                'Engineering Agencies Est. — Leaders in professional workshop equipment in Saudi Arabia.'
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-extrabold text-lg mb-4">{t('روابط سريعة', 'Quick Links')}</h3>
            <ul className="list-none m-0 p-0 space-y-2">
              {[
                { ar: 'الرئيسية', en: 'Home', path: '/' },
                { ar: 'المنتجات', en: 'Products', path: '/products' },
                { ar: 'مشاريعنا', en: 'Projects', path: '/projects' },
                { ar: 'من نحن', en: 'About', path: '/about' },
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    {t(link.ar, link.en)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-extrabold text-lg mb-4">{t('تواصل معنا', 'Contact Us')}</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                {t('الرياض 235 ، مخرج 18', 'Riyadh, Exit 18')}
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone size={18} className="text-primary shrink-0" />
                <span dir="ltr">+966 11 270 6564</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail size={18} className="text-primary shrink-0" />
                info@eae-ksa.com
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center text-muted-foreground text-xs">
          © {new Date().getFullYear()} {t('مؤسسة التوكيلات الهندسية. جميع الحقوق محفوظة.', 'Engineering Agencies Est. All rights reserved.')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
