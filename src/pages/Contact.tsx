import { useState, useRef } from 'react';
import Navbar from '@/components/eae/Navbar';
import Footer from '@/components/eae/Footer';
import FloatingWidgets from '@/components/eae/FloatingWidgets';
import BackButton from '@/components/eae/BackButton';
import { useLang } from '@/contexts/LanguageContext';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  MapPin, Phone, Mail, Send, ShoppingCart, Wrench,
  Upload, X, Calendar, MessageSquare, User, Building2, Package, FileText, Smartphone
} from 'lucide-react';
import { categories } from '@/data/products';

const CONTACT_WHATSAPP = '966112706564';

/* ------------------------------------------------------------------ */
/*  New Product Inquiry Form                                          */
/* ------------------------------------------------------------------ */
const NewProductForm = () => {
  const { lang, t } = useLang();

  const [form, setForm] = useState({
    fullName: '',
    company: '',
    productType: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = lang === 'ar'
      ? `
*🛒 طلب منتج جديد — موقع EAE*
━━━━━━━━━━━━━━━━━
*الاسم الكامل:* ${form.fullName}
*الشركة/الجهة:* ${form.company || 'غير محدد'}
*نوع المنتج:* ${form.productType || 'غير محدد'}

*الرسالة:*
${form.message}
      `.trim()
      : `
*🛒 New Product Inquiry — EAE Website*
━━━━━━━━━━━━━━━━━
*Full Name:* ${form.fullName}
*Company:* ${form.company || 'N/A'}
*Product Type:* ${form.productType || 'N/A'}

*Message:*
${form.message}
      `.trim();

    window.open(`https://wa.me/${CONTACT_WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const inputClass =
    'w-full bg-secondary border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all';

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in-0 duration-300">
      {/* Full Name */}
      <div className="space-y-2">
        <label className="text-sm font-bold text-foreground flex items-center gap-2">
          <User size={16} className="text-primary" />
          {t('الاسم الكامل', 'Full Name')} <span className="text-destructive">*</span>
        </label>
        <input
          type="text" name="fullName" required
          value={form.fullName} onChange={handleChange}
          className={inputClass}
          placeholder={t('أدخل اسمك الكامل...', 'Enter your full name...')}
        />
      </div>

      {/* Company */}
      <div className="space-y-2">
        <label className="text-sm font-bold text-foreground flex items-center gap-2">
          <Building2 size={16} className="text-primary" />
          {t('اسم الشركة / الجهة', 'Company / Organization')}
        </label>
        <input
          type="text" name="company"
          value={form.company} onChange={handleChange}
          className={inputClass}
          placeholder={t('مثال: شركة الفهد للسيارات', 'e.g. Al-Fahd Auto Company')}
        />
      </div>

      {/* Product Type */}
      <div className="space-y-2">
        <label className="text-sm font-bold text-foreground flex items-center gap-2">
          <Package size={16} className="text-primary" />
          {t('نوع المنتج', 'Product Type')}
        </label>
        <select
          name="productType"
          value={form.productType} onChange={handleChange}
          className={`${inputClass} appearance-none`}
        >
          <option value="">{t('اختر نوع المنتج...', 'Select product type...')}</option>
          {categories.filter(c => c.id !== 'all').map(cat => (
            <option key={cat.id} value={lang === 'ar' ? cat.ar : cat.en}>
              {lang === 'ar' ? cat.ar : cat.en}
            </option>
          ))}
          <option value={t('أخرى', 'Other')}>{t('أخرى', 'Other')}</option>
        </select>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label className="text-sm font-bold text-foreground flex items-center gap-2">
          <MessageSquare size={16} className="text-primary" />
          {t('رسالتك / استفسارك', 'Your Message / Inquiry')} <span className="text-destructive">*</span>
        </label>
        <textarea
          name="message" rows={5} required
          value={form.message} onChange={handleChange}
          className={`${inputClass} resize-none`}
          placeholder={t('اكتب استفسارك هنا...', 'Write your inquiry here...')}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-[#25D366] hover:bg-[#1fb955] text-white py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)]"
      >
        <Send size={20} className="rtl:rotate-180" />
        {t('إرسال عبر واتساب', 'Send via WhatsApp')}
      </button>
    </form>
  );
};

/* ------------------------------------------------------------------ */
/*  Maintenance Request Form                                          */
/* ------------------------------------------------------------------ */
const MaintenanceForm = () => {
  const { lang, t } = useLang();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    fullName: '',
    productModel: '',
    purchaseDate: '',
    problemDesc: '',
    contactNumber: '',
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setSelectedFile(file);

    // Create preview URL
    const reader = new FileReader();
    reader.onloadend = () => {
      setFilePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const removeFile = () => {
    setSelectedFile(null);
    setFilePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const hasImage = selectedFile ? (lang === 'ar' ? '✅ نعم (سيتم إرسالها يدوياً)' : '✅ Yes (will be sent manually)') : (lang === 'ar' ? '❌ لا' : '❌ No');

    const text = lang === 'ar'
      ? `
*🔧 طلب صيانة — موقع EAE*
━━━━━━━━━━━━━━━━━
*الاسم الكامل:* ${form.fullName}
*نوع المنتج / الموديل:* ${form.productModel}
*تاريخ الشراء:* ${form.purchaseDate || 'غير محدد'}
*رقم التواصل:* ${form.contactNumber}

*وصف المشكلة:*
${form.problemDesc}

*صورة مرفقة:* ${hasImage}
${selectedFile ? '⚠️ يرجى إرسال صورة العطل في الرسالة التالية' : ''}
      `.trim()
      : `
*🔧 Maintenance Request — EAE Website*
━━━━━━━━━━━━━━━━━
*Full Name:* ${form.fullName}
*Product / Model:* ${form.productModel}
*Purchase Date:* ${form.purchaseDate || 'N/A'}
*Contact Number:* ${form.contactNumber}

*Problem Description:*
${form.problemDesc}

*Image Attached:* ${hasImage}
${selectedFile ? '⚠️ Please send the fault image in the next message' : ''}
      `.trim();

    window.open(`https://wa.me/${CONTACT_WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const inputClass =
    'w-full bg-secondary border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all';

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in-0 duration-300">
      {/* Full Name */}
      <div className="space-y-2">
        <label className="text-sm font-bold text-foreground flex items-center gap-2">
          <User size={16} className="text-primary" />
          {t('الاسم الكامل', 'Full Name')} <span className="text-destructive">*</span>
        </label>
        <input
          type="text" name="fullName" required
          value={form.fullName} onChange={handleChange}
          className={inputClass}
          placeholder={t('أدخل اسمك الكامل...', 'Enter your full name...')}
        />
      </div>

      {/* Product / Model */}
      <div className="space-y-2">
        <label className="text-sm font-bold text-foreground flex items-center gap-2">
          <Package size={16} className="text-primary" />
          {t('نوع المنتج / الموديل', 'Product Type / Model')} <span className="text-destructive">*</span>
        </label>
        <input
          type="text" name="productModel" required
          value={form.productModel} onChange={handleChange}
          className={inputClass}
          placeholder={t('مثال: فرن دهان EAE-8015', 'e.g. Spray Booth EAE-8015')}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Purchase Date */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-foreground flex items-center gap-2">
            <Calendar size={16} className="text-primary" />
            {t('تاريخ الشراء (اختياري)', 'Purchase Date (Optional)')}
          </label>
          <input
            type="date" name="purchaseDate"
            value={form.purchaseDate} onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* Contact Number */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-foreground flex items-center gap-2">
            <Smartphone size={16} className="text-primary" />
            {t('رقم التواصل', 'Contact Number')} <span className="text-destructive">*</span>
          </label>
          <input
            type="tel" name="contactNumber" required dir="ltr"
            value={form.contactNumber} onChange={handleChange}
            className={`${inputClass} text-start`}
            placeholder="+966 5X XXX XXXX"
          />
        </div>
      </div>

      {/* Problem Description */}
      <div className="space-y-2">
        <label className="text-sm font-bold text-foreground flex items-center gap-2">
          <FileText size={16} className="text-primary" />
          {t('وصف المشكلة', 'Problem Description')} <span className="text-destructive">*</span>
        </label>
        <textarea
          name="problemDesc" rows={5} required
          value={form.problemDesc} onChange={handleChange}
          className={`${inputClass} resize-none`}
          placeholder={t('صف المشكلة بالتفصيل...', 'Describe the problem in detail...')}
        />
      </div>

      {/* Image Upload */}
      <div className="space-y-2">
        <label className="text-sm font-bold text-foreground flex items-center gap-2">
          <Upload size={16} className="text-primary" />
          {t('صورة العطل (اختياري)', 'Fault Image (Optional)')}
        </label>

        {!selectedFile ? (
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-border rounded-xl p-8 text-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-all group"
          >
            <Upload size={36} className="mx-auto mb-3 text-muted-foreground group-hover:text-primary transition-colors" />
            <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              {t('اضغط لاختيار صورة أو اسحبها هنا', 'Click to select an image or drag it here')}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {t('PNG, JPG, WEBP — حتى 10MB', 'PNG, JPG, WEBP — up to 10MB')}
            </p>
          </div>
        ) : (
          <div className="relative border border-border rounded-xl p-4 bg-secondary/50">
            <button
              type="button" onClick={removeFile}
              className="absolute top-2 end-2 w-8 h-8 bg-destructive/90 hover:bg-destructive text-white rounded-full flex items-center justify-center transition-colors z-10"
            >
              <X size={16} />
            </button>
            {filePreview && (
              <img
                src={filePreview} alt="Preview"
                className="w-full max-h-48 object-contain rounded-lg mb-2"
              />
            )}
            <p className="text-sm text-muted-foreground truncate">{selectedFile.name}</p>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file" accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />

        {selectedFile && (
          <div className="flex items-start gap-2 bg-orange-500/10 border border-orange-500/20 rounded-lg p-3">
            <span className="text-orange-500 text-lg shrink-0">⚠️</span>
            <p className="text-xs text-orange-600 dark:text-orange-400">
              {t(
                'سيتم فتح واتساب بالرسالة النصية فقط. يرجى إرسال الصورة يدوياً في المحادثة بعد إرسال الرسالة.',
                'WhatsApp will open with the text message only. Please send the image manually in the chat after sending the message.'
              )}
            </p>
          </div>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-[#25D366] hover:bg-[#1fb955] text-white py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)]"
      >
        <Send size={20} className="rtl:rotate-180" />
        {t('إرسال طلب الصيانة عبر واتساب', 'Send Maintenance Request via WhatsApp')}
      </button>
    </form>
  );
};

/* ------------------------------------------------------------------ */
/*  Contact Info Sidebar                                              */
/* ------------------------------------------------------------------ */
const ContactInfoSidebar = () => {
  const { lang, t } = useLang();

  const contactItems = [
    {
      icon: Phone,
      title: t('الهاتف', 'Phone'),
      content: (
        <>
          <a href="tel:+966112706564" dir="ltr" className="text-white/80 hover:text-primary transition-colors text-lg block mb-1">
            +966 11 270 6564
          </a>
          <p className="text-white/50 text-sm">
            {lang === 'ar' ? 'فرع تايوان:' : 'Taiwan Branch:'}{' '}
            <a href="tel:+8852385300" dir="ltr" className="hover:text-primary transition-colors">+88 523 85300</a>
          </p>
        </>
      ),
    },
    {
      icon: MessageSquare,
      title: t('واتساب', 'WhatsApp'),
      content: (
        <a
          href="https://wa.me/966112706564" target="_blank" rel="noopener noreferrer"
          className="text-white/80 hover:text-[#25D366] transition-colors text-sm block"
        >
          wa.me/966112706564
        </a>
      ),
    },
    {
      icon: Mail,
      title: t('البريد الإلكتروني', 'Email'),
      content: (
        <a href="mailto:info@eae-ksa.com" className="text-white/80 hover:text-primary transition-colors text-sm block">
          info@eae-ksa.com
        </a>
      ),
    },
    {
      icon: MapPin,
      title: t('العنوان', 'Address'),
      content: (
        <p className="text-white/70 leading-relaxed text-sm">
          {t('الرياض، مخرج 235، رقم 18', 'Riyadh, Exit 235, No. 18')}
        </p>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Contact Card */}
      <div className="bg-[#1a2744] text-white p-8 rounded-3xl shadow-lg border border-white/5 relative overflow-hidden">
        {/* Decorative gradient */}
        <div className="absolute top-0 end-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />

        <h3 className="text-2xl font-bold mb-8 text-primary relative">
          {t('معلومات التواصل', 'Contact Information')}
        </h3>

        <div className="space-y-7 relative">
          {contactItems.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 group">
              <div className="w-11 h-11 bg-white/10 group-hover:bg-primary/20 rounded-full flex items-center justify-center shrink-0 transition-colors">
                <item.icon className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1 text-white/90">{item.title}</h4>
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick WhatsApp CTA */}
      <a
        href="https://wa.me/966112706564"
        target="_blank" rel="noopener noreferrer"
        className="block bg-[#25D366] hover:bg-[#1fb955] text-white p-6 rounded-3xl shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl text-center group"
      >
        <MessageSquare size={28} className="mx-auto mb-3 group-hover:scale-110 transition-transform" />
        <p className="font-bold text-lg">{t('تواصل مباشر عبر واتساب', 'Direct WhatsApp Chat')}</p>
        <p className="text-white/80 text-sm mt-1">{t('رد فوري خلال دقائق', 'Instant reply within minutes')}</p>
      </a>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Main Contact Page                                                 */
/* ------------------------------------------------------------------ */
const Contact = () => {
  const { t, isRtl } = useLang();

  return (
    <>
      <Navbar />
      <BackButton />
      <main className="pb-0 bg-background pt-24 md:pt-32">

        {/* Hero Section */}
        <div className="bg-[#1a2744] text-white py-12 md:py-20 px-4 text-center border-b-[8px] border-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 pattern-dots"></div>
          <div className="relative z-10 max-w-4xl mx-auto eae-container">
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-primary tracking-tight">
              {t('تواصل معنا', 'Contact Us')}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {t(
                'نحن هنا للرد على استفساراتكم وتلبية احتياجات ورشتكم. فريقنا مستعد لمساعدتك.',
                'We are here to answer your inquiries and meet your workshop needs. Our team is ready to help.'
              )}
            </p>
          </div>
        </div>

        <section className="py-12 md:py-20 eae-container">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-12">

            {/* ── Forms with Tabs ── */}
            <div className="bg-card p-6 md:p-10 rounded-3xl border border-border shadow-[var(--shadow-md)]">
              <Tabs defaultValue="new-product" dir={isRtl ? 'rtl' : 'ltr'}>
                <TabsList className="w-full h-auto p-1.5 bg-secondary rounded-2xl mb-8 grid grid-cols-2 gap-2">
                  <TabsTrigger
                    value="new-product"
                    className="rounded-xl py-3.5 px-4 text-sm md:text-base font-bold gap-2 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-[0_4px_15px_hsl(var(--orange-glow)/0.3)] transition-all"
                  >
                    <ShoppingCart size={18} />
                    {t('منتج جديد', 'New Product')}
                  </TabsTrigger>
                  <TabsTrigger
                    value="maintenance"
                    className="rounded-xl py-3.5 px-4 text-sm md:text-base font-bold gap-2 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-[0_4px_15px_hsl(var(--orange-glow)/0.3)] transition-all"
                  >
                    <Wrench size={18} />
                    {t('طلب صيانة', 'Maintenance Request')}
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="new-product">
                  <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-foreground flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <ShoppingCart size={20} className="text-primary" />
                    </span>
                    {t('استفسار عن منتج جديد', 'New Product Inquiry')}
                  </h2>
                  <NewProductForm />
                </TabsContent>

                <TabsContent value="maintenance">
                  <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-foreground flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Wrench size={20} className="text-primary" />
                    </span>
                    {t('طلب صيانة', 'Maintenance Request')}
                  </h2>
                  <MaintenanceForm />
                </TabsContent>
              </Tabs>
            </div>

            {/* ── Contact Info Sidebar ── */}
            <ContactInfoSidebar />

          </div>
        </section>

      </main>
      <Footer />
      <FloatingWidgets />
    </>
  );
};

export default Contact;
