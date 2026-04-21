import comp from '@/assets/comp.jpg'
import comp2 from '@/assets/comp-2.jpg'
import comp3 from '@/assets/comp-3.jpg'
import comp4 from '@/assets/comp-4.jpg'
import comp5 from '@/assets/comp-5.jpg'
import comp6 from '@/assets/comp-6.jpg'
import comp7 from '@/assets/comp-7.jpg'
import comp8 from '@/assets/comp-8.jpg'
import comp9 from '@/assets/comp-9.jpg'
import comp10 from '@/assets/comp-10.jpg'
import comp11 from '@/assets/comp-11.jpg'
import comp12 from '@/assets/comp-12.jpg'
import comp15 from '@/assets/comp15.jpg'
import comp15_2 from '@/assets/comp15-2.jpg'
import comp15_3 from '@/assets/comp15-3.jpg'
import comp15_4 from '@/assets/comp15-4.jpg'
import comp15_5 from '@/assets/comp15-5.jpg'
import comp15_6 from '@/assets/comp15-6.jpg'
import comp15_7 from '@/assets/comp15-7.jpg'
import comp15_8 from '@/assets/comp15-8.jpg'
import comp15_9 from '@/assets/comp15-9.jpg'
import comp15_10 from '@/assets/comp15-10.jpg'
import comp22 from '@/assets/comp22.jpg'
import comp22_2 from '@/assets/comp22-2.jpg'
import comp22_3 from '@/assets/comp22-3.jpg'
import comp37 from '@/assets/comp37.jpg'
import floor1 from '@/assets/floor1.png'
import floor2 from '@/assets/floor2.png'
import floor3 from '@/assets/floor3.png'
import tool1 from '@/assets/tool1.jpeg'
import tool2 from '@/assets/tool2.jpeg'

// spray-booth
import sprayEcono from '@/assets/spray-econo.png'
import filter1 from '@/assets/filter1.jpeg'
import filter2 from '@/assets/filter2.jpeg'
import bzb from '@/assets/bzb.png'
import bzb2 from '@/assets/bzb2.png'
import bzb3 from '@/assets/bzb3.png'
import bzb4 from '@/assets/bzb4.jpeg'
import bzb5 from '@/assets/bzb5.jpeg'
import bzb6 from '@/assets/bzb6.jpeg'
import bzb7 from '@/assets/bzb7.jpeg'
import bzb8 from '@/assets/bzb8.jpeg'
import bzb9 from '@/assets/bzb9.jpeg'
import bzb10 from '@/assets/bzb10.jpeg'
import EAEMed from '@/assets/EAE-Med.jpeg'

// car-lift
import carClosed1 from '@/assets/car-closed1.png'
import carClosed2 from '@/assets/car-closed2.png'
import carClosed3 from '@/assets/car-closed3.png'
import carClosed4 from '@/assets/car-closed4.png'
import carClosed5 from '@/assets/car-closed5.png'
import carClosed6 from '@/assets/car-closed6.jpg'
import carOpened1 from '@/assets/car-opened1.jpg'
import carOpened2 from '@/assets/car-opened2.png'
import carOpened3 from '@/assets/car-opened3.png'
import carOpened4 from '@/assets/car-opened4.png'
import carOpened5 from '@/assets/car-opened5.png'
import car41 from '@/assets/car4-1.png'
import car42 from '@/assets/car4-2.png'
import car43 from '@/assets/car4-3.png'
import car44 from '@/assets/car4-4.png'
import car45 from '@/assets/car4-5.png'
import car46 from '@/assets/car4-6.png'
import ssl1 from '@/assets/ssl1.png'
import ssl2 from '@/assets/SSL2.png'
import ssl3 from '@/assets/SSL3.png'
import ssl4 from '@/assets/SSL4.png'
import bsl1 from '@/assets/bsl1.png'
import bsl2 from '@/assets/BSL2.png'
import bsl3 from '@/assets/BSL3.png'
import bsl4 from '@/assets/BSL4.png'
import bsl5 from '@/assets/bsl5.jpg'

// misc
import ac1 from '@/assets/AC1.jpg'
import ac2 from '@/assets/AC2.jpg'
import ac3 from '@/assets/AC3.jpeg'
import repair1 from '@/assets/repair1.jpeg'
import repair2 from '@/assets/repair2.jpeg'
import repair3 from '@/assets/repair3.jpeg'
import repair4 from '@/assets/repair4.jpeg'
import lamp2a from '@/assets/2Lamp.jpg'
import lamp2b from '@/assets/2Lamp 3.jpg'
import lamp2c from '@/assets/2 Lamp 2.jpeg'
import lamp2d from '@/assets/2 Lamp 4.jpg'
import lamp2e from '@/assets/2Lamp5.jpg'
import lamp6 from '@/assets/6lamp.jpg'
import cleaner from '@/assets/cleaner.jpeg'
import zd6 from '@/assets/3D-ZD-6.jpg'
import zd9pro from '@/assets/3D-ZD-109PRO.jpg'
import compShared1 from '@/assets/main-compress.png'
import compShared2 from '@/assets/main-compress (2).png'
import comp15Extra1 from '@/assets/main-comp15.png'
import comp15Extra2 from '@/assets/main-comp15 (2).png'



export interface ProductSpec {
  label: { ar: string; en: string };
  value: string;
}

export interface Product {
  id: string;
  category: string;
  categoryLabel: { ar: string; en: string };
  name: { ar: string; en: string };
  model: string;
  description: { ar: string; en: string };
  image: string;
  images?: string[];
  specs: ProductSpec[];
  features: { ar: string; en: string }[];
  badge?: { ar: string; en: string };
  origin?: string;
  whatsappText: { ar: string; en: string };
  accessories?: { ar: string; en: string }[];
  whyChooseUs?: { ar: string; en: string };
  specifications?: {
    ar: { label: string; value: string }[];
    en: { label: string; value: string }[];
  };
  afterSales?: { ar: string; en: string };
}

const t = (ar: string, en: string) => ({ ar, en });

export const WHATSAPP_NUMBER = '966112706564';

const compressorSharedImages = [comp, comp2, comp3, comp4, comp5, comp6, comp7, comp8, comp9, comp10, comp11, comp12];


export const products: Product[] = [
  {
    id: 'luxury-bzb-spray-booth',
    category: 'spray-booth',
    categoryLabel: t('أفران الدهان', 'Spray Booths'),
    name: t('فرن الدهان EAE 8000', ' Spray Booth EAE 8000 '),
    model: 'EAE-8000 (JZJ-8000AU) L-Type',
    description: t(
      'تعد كابينة دهان سيارات EAE-8000 الخيار الأمثل للورش والمحترفين الباحثين عن أعلى مستويات الدقة والجودة والسلامة أثناء عملية الدهان. فهي تجمع بين التصميم الهندسي المتطور وأنظمة التهوية والفلترة المتقدمة لتوفير بيئة عمل نظيفة تمامًا، تضمن خروج السيارة بعد الدهان بأعلى جودة وفق أقصى معايير السلامة المهنية.',
      'The EAE-8000 car spray booth is the ideal choice for workshops and professionals seeking the highest levels of precision, quality, and safety during the painting process. It combines advanced engineering design with sophisticated ventilation and filtration systems to provide a completely clean working environment, ensuring the vehicle exits with the highest quality finish according to the strictest professional safety standards.'
    ),
    image: bzb2,
    images: [bzb3, bzb4, bzb5, bzb6, bzb7, bzb8, bzb9, bzb10],
    specs: [
      { label: t('الأبعاد الخارجية', 'External Dimensions'), value: '7000 × 5350 × 3400 mm' },
      { label: t('الأبعاد الداخلية', 'Internal Dimensions'), value: '6900 × 4000 × 2650 mm' },
      { label: t('إجمالي القدرة الكهربائية', 'Total Power'), value: '17 kW' },
      { label: t('ألواح الحوائط', 'Wall Panels'), value: '50mm Rock Wool EMC / صوف صخري 50 مم' },
      { label: t('إضاءة السقف', 'Ceiling Lights'), value: '8 × 4 × 36W Philips LED (1152W)' },
      { label: t('إضاءة جانبية', 'Side Lights'), value: '8 × 4 × 25W Philips LED (800W)' },
      { label: t('شدة الإضاءة', 'Light Intensity'), value: '1000 LUX' },
      { label: t('قدرة المراوح', 'Fan Power'), value: '2 × 7.5kW + 7.5kW Exhaust' },
      { label: t('سعة الهواء', 'Air Capacity'), value: '35,000 m³/h' },
      { label: t('سرعة تدفق الهواء', 'Airflow Speed'), value: '0.3 m/s' },
      { label: t('نظام الفلترة', 'Filtration System'), value: 'G3 Pre + F5 Ceiling + G3 Floor + Active Carbon' },
      { label: t('القدرة الحرارية', 'Heating Capacity'), value: '280,000 Kcal/h' },
      { label: t('أقصى حرارة', 'Max Temperature'), value: '80°C' },
      { label: t('استهلاك الوقود', 'Fuel Consumption'), value: '8–15 L/h (Diesel)' },
      { label: t('بلد المنشأ', 'Origin'), value: 'China / الصين' },
    ],
    features: [
      t('ألواح صوف صخري 50 مم مقاومة للحريق بنظام التعشيق', '50mm rock wool fire-resistant panels with interlocking system'),
      t('إضاءة Philips LED سقفية (1152W) وجانبية (800W) بشدة 1000 LUX', 'Philips LED ceiling (1152W) & side (800W) lighting at 1000 LUX'),
      t('مروحتان توربينيتان مقاومتان للانفجار بقدرة 15 كيلو وات', '2 explosion-proof turbo fans at 15kW total'),
      t('نظام فلترة رباعي المراحل: مبدئي + سقف + أرضية + كربون نشط', 'Quad-stage filtration: pre-filter + ceiling + floor + active carbon'),
      t('مبادل حراري SUS304 بلحام أرجون عالي الجودة', 'SUS304 heat exchanger with argon arc welding'),
      t('موقد ديزل BG15 بقدرة 280,000 كيلو كالوري/ساعة', 'BG15 diesel burner at 280,000 Kcal/h capacity'),
      t('باب رئيسي قابل للطي (3000×2600 مم) + باب جانبي للخدمة', 'Foldable main door (3000×2600mm) + service side door'),
      t('أرضية بعمق 300 مم مع شبكات وألواح مدرّجة ورامب 3 قطع', '300mm deep floor with grids, checkered plates & 3-piece ramp'),
      t('نظام تحويل تلقائي (رش ↔ خبز) بمخمّد هوائي', 'Auto spray-to-bake switching via pneumatic damper'),
      t('لوحة تحكم متكاملة مع مفتاح طوارئ وإنذار أعطال ومقياس ضغط', 'Full control panel with emergency stop, fault alarm & pressure gauge'),
      t('زجاج أمان 4 مم ونوافذ مربعة للمراقبة', '4mm safety glass with square observation windows'),
      t('سقف من الصلب المجلفن مع سعة هواء 35,000 م³/ساعة', 'Galvanized steel ceiling with 35,000 m³/h air capacity'),
    ],
    badge: t('الأكثر مبيعاً', 'Most Seller '),
    whatsappText: t(
      'مرحباً، أود الاستفسار عن كابينة الدهان  EAE-8000 (JZJ-8000AU)',
      "Hello, I'd like to inquire about the  Spray Booth EAE-8000 (JZJ-8000AU)"
    ),
  },

  {
    id: 'car-lift-2post-closed',
    category: 'car-lift',
    categoryLabel: t('رافعات السيارات', 'Car Lifts'),
    name: t('رافعة 2 عمود مقفولة', '2 Post Closed Car Lift'),
    model: 'LD-240T',
    description: t(
      'رافعة هيدروليكية احترافية بعمودين LD-240T، مزوّدة بأسطوانتين ونظام سلسلة دفع قوي يضمن رفعًا وخفضًا سلسًا ومستقرًا. مثالية لورش الصيانة التي تخدم سيارات الركاب والمركبات الخفيفة حتى وزن 4500 كجم.',
      'The LD-240T is a professional 2-post hydraulic lift equipped with dual cylinders and a powerful chain drive system ensuring smooth and stable lifting. Ideal for service workshops handling passenger cars and light vehicles up to 4500 kg.'
    ),
    image: carClosed6,
    images: [ carClosed1, carClosed2, carClosed3, carClosed4, carClosed5],
    specs: [
      { label: t('طاقة الرفع', 'Lifting Capacity'), value: '4500 kg' },
      { label: t('ارتفاع الرفع', 'Lifting Height'), value: '1945 mm' },
      { label: t('الحد الأدنى للارتفاع', 'Min. Height'), value: '90–130 mm' },
      { label: t('المسافة بين الأعمدة', 'Column Spacing'), value: '3000 mm' },
      { label: t('المسافة الداخلية بين الأعمدة', 'Column Inside'), value: '2856 mm' },
      { label: t('المسافة بين الإطارات', 'Frame Spacing'), value: '2758 mm' },
      { label: t('ارتفاع البليت', 'Pallet Height'), value: '115 mm' },
      { label: t('ارتفاع الماكينة', 'Machine Height'), value: '3772 mm' },
      { label: t('عرض الماكينة', 'Machine Width'), value: '3624 mm' },
      { label: t('وزن الماكينة', 'Machine Weight'), value: '745 kg' },
      { label: t('قدرة المحرك', 'Motor Power'), value: '2.2 kW' },
      { label: t('متطلبات الكهرباء', 'Power Requirements'), value: '220V' },
      { label: t('طول الذراعين', 'Length of Two Arms'), value: '838–1238 mm' },
      { label: t('حجم التعبئة', 'Packing Size'), value: '2950(L)×1000(W)×5000(H) mm' },
      { label: t('المحرك', 'Power & Motor'), value: '1Ph 2.5HP 220V / 3Ph 2HP 220V-380V, 50/60Hz' },
    ],
    features: [
      t('أسطوانات RAM عالية الأداء في كل عمود', 'High-performance RAM type cylinders in each post'),
      t('حبل مزامنة مسبق الشد عالي الجودة', 'High quality pre-stretched synchronization wire rope'),
      t('برغي تلسكوبي مزدوج للأذرع', 'Double telescopic pads screw'),
      t('تثبيت أوتوماتيكي للأذرع', 'Automatic arm restraint'),
      t('أدلة عربة مضادة للاحتكاك', 'Durable anti-friction carriage guides'),
      t('ذراع فك قفل يدوي من الجانبين', 'Hand lever for manual type locker release device'),
      t('قضيب علوي قابل للتعديل بارتفاع 250 مم', '250mm height adjustable top cross bar'),
      t('مانع تلامس علوي وحماية مطاطية للسيارة', 'Top limit touch bar and door protection rubber blocks'),
    ],
    badge: t('مقفول', 'Closed'),
    whatsappText: t(
      'مرحباً، أود الاستفسار عن رافعة 2 عمود مقفولة LD-240T',
      "Hello, I'd like to inquire about the 2 Post Closed Car Lift LD-240T"
    ),
  },

  {
    id: 'car-lift-2post-open',
    category: 'car-lift',
    categoryLabel: t('رافعات السيارات', 'Car Lifts'),
    name: t('رافعة 2 عمود مفتوحة', '2 Post Open Car Lift'),
    model: 'LD-240TS',
    description: t(
      'رافعة LD-240TS هي رافعة احترافية واقتصادية بعمودين، مصممة لرفع المركبات حتى 4000 كجم. تتميز بأسطوانتين هيدروليكيتين وسلسلة دفع عالية القوة مما يضمن رفعًا وخفضًا ناعمًا وثابتًا. تركز على الأمان من خلال نظام فك أمان يدوي مزدوج وتصميم منزلق وصندوق تحكم بجهد منخفض، وهي حاصلة على شهادات الجودة المعتمدة. مثالية للورش المهنية التي تبحث عن حل موثوق وفعّال من حيث التكلفة.',
      'The LD-240TS is a professional and economical 2-post lift designed to raise vehicles up to 4000 kg. Featuring dual hydraulic cylinders and a high-power chain drive system ensuring smooth and stable lifting. Safety-focused with a dual manual safety release system, sliding design, and low-voltage control box. Certified with quality standards. Ideal for professional workshops seeking a reliable, cost-effective solution.'
    ),
    image: carOpened1,
    images: [ carOpened2, carOpened3, carOpened4, carOpened5],
    specs: [
      { label: t('طاقة الرفع', 'Lifting Capacity'), value: '4000 kg' },
      { label: t('ارتفاع الرفع', 'Lift Height'), value: '1845 mm' },
      { label: t('المسافة بين الأعمدة', 'Column Spacing'), value: '2860 mm' },
      { label: t('مسافة التخليص', 'Clearance Spacing'), value: '2624 mm' },
      { label: t('ارتفاع الصينية', 'Tray Height'), value: '115 mm' },
      { label: t('الارتفاع الكلي', 'Overall Height'), value: '2823 mm' },
      { label: t('عرض الماكينة', 'Machine Width'), value: '3484 mm' },
      { label: t('الوزن الكلي', 'Total Weight'), value: '609 kg' },
      { label: t('قدرة المحرك', 'Motor Power'), value: '2.2 kW' },
      { label: t('متطلبات الكهرباء', 'Power Requirements'), value: 'According to local standard' },
      { label: t('طول ذراع الدعم', 'Two-section Support Arm Length'), value: '838–1238 mm' },
    ],
    features: [
      t('أسطوانتان هيدروليكيتان عالية الأداء', 'High-performance dual hydraulic cylinders'),
      t('سلسلة دفع عالية القوة لرفع سلس وثابت', 'High-power chain drive for smooth stable lifting'),
      t('نظام فك أمان يدوي مزدوج', 'Dual manual safety release system'),
      t('تصميم منزلق للسهولة والمرونة', 'Sliding design for ease and flexibility'),
      t('صندوق تحكم بجهد منخفض للسلامة', 'Low-voltage control box for safety'),
      t('حاصلة على شهادات الجودة المعتمدة', 'Certified with approved quality standards'),
      t('مثالية للورش الاقتصادية الاحترافية', 'Ideal for professional cost-effective workshops'),
    ],
    badge: t('مفتوح', 'Open'),
    whatsappText: t(
      'مرحباً، أود الاستفسار عن رافعة 2 عمود مفتوحة LD-240TS',
      "Hello, I'd like to inquire about the 2 Post Open Car Lift LD-240TS"
    ),
  },

  {
    id: 'car-lift-scissor-ground',
    category: 'car-lift',
    categoryLabel: t('رافعات السيارات', 'Car Lifts'),
    name: t('رافعة مقصية أرضية', 'Ground Scissor Car Lift'),
    model: 'LC-400 | LD-S610',
    origin: 'الصين',
    badge: t('أرضية', 'Surface'),
    description: t(
      'رافعة LC-400 المقصية مصممة لتحمّل ظروف العمل الشاقة داخل الورش الاحترافية. تتميز بنظام قفل هيدروليكي موثوق وآليات أمان متعددة، وتدعم التركيب الأرضي أو داخل الأرض. مزوّدة بجهاز تحديد نهاية مشوار الأسطوانة مما يوفر تجربة رفع آمنة ومستقرة وسلسة. صُمّمت وفقًا للمعايير الأوروبية وحاصلة على شهادة CE.',
      'The LC-400 scissor lift is designed to withstand tough working conditions in professional workshops. Features a reliable hydraulic locking system with multiple safety mechanisms, supporting both surface and in-ground installation. Equipped with a cylinder stroke end detection device. CE certified according to European standards.'
    ),
    image: ssl1,
    images: [ ssl2, ssl3, ssl4],
    specs: [
      { label: t('طاقة الرفع', 'Lifting Capacity'), value: '4000 kg' },
      { label: t('ارتفاع الرفع', 'Lifting Height'), value: '1885 mm' },
      { label: t('الحد الأدنى للارتفاع', 'Minimum Height'), value: '115 mm' },
      { label: t('وقت الرفع', 'Lifting Time'), value: '60 s' },
      { label: t('عرض المنصة', 'Platform Width'), value: '635 mm' },
      { label: t('طول الماكينة', 'Length of Machine'), value: '2100 mm' },
      { label: t('عرض الماكينة', 'Machine Width'), value: '2120 mm' },
      { label: t('وزن الماكينة', 'Machine Weight'), value: '863 kg' },
      { label: t('قدرة المحرك', 'Motor Power'), value: '3 kw' },
      { label: t('متطلبات الكهرباء', 'Power Requirements'), value: '220V' },
      { label: t('متطلبات الهواء المضغوط', 'Air Source Requirement'), value: '6-8 bar' },
      { label: t('نظام التشغيل', 'Driving Mode'), value: 'Electro-Hydraulic' },
      { label: t('طاقة الرفع (LD-S610)', 'Lifting Capacity (LD-S610)'), value: '3500 kg' },
      { label: t('أقصى ارتفاع رفع (LD-S610)', 'Max. Lifting Height (LD-S610)'), value: '1900 mm' },
      { label: t('الحد الأدنى للارتفاع (LD-S610)', 'Min. Height (LD-S610)'), value: '100 mm' },
      { label: t('الوزن الصافي (LD-S610)', 'Net Weight (LD-S610)'), value: '940 kg / 920 kg' },
      { label: t('حجم التعبئة (LD-S610)', 'Packing Size (LD-S610)'), value: '2250(L)×900(W)×450(H) mm' },
      { label: t('المحرك والطاقة (LD-S610)', 'Power & Motor (LD-S610)'), value: '1Phase 2.5HP / 3Phase 2HP, 220V/380V, 50/60HZ' },
    ],
    features: [
      t('أسطوانات هيدروليكية عالية الأداء بمانعات تسرب مزدوجة', 'High-performed durable hydraulic cylinders with double pressure seals'),
      t('نظام مزامنة أسطوانة رئيسية وتابعة', 'Master & Slave cylinder synchronization system'),
      t('نظام تحكم مزامنة سهل بصمامات هيدروليكية خاصة', 'Easy synchronization control system by special hydraulic valves'),
      t('ارتفاع منخفض جداً 100 مم عن الأرض', 'Extra low 100mm height profile'),
      t('جهاز قفل يعمل بالهواء المضغوط', 'Air cylinder operated locking device'),
      t('منصة تمديد أحادية المنحدر ذات وظيفتين', 'Double function one touch ramp extension platform'),
      t('وسادات مطاطية لحماية هيكل السيارة', 'Rubber pads on platform to protect vehicle chassis'),
      t('قفل ميكانيكي وجهاز فتح هوائي', 'Mechanical lock and pneumatic unlocking device'),
      t('إمكانية التركيب داخل الأرض (اختياري)', 'Pit frame for in-ground type (OPTION)'),
      t('حاصلة على شهادة CE الأوروبية', 'CE certified according to European standards'),
    ],
    whatsappText: t(
      'مرحباً، أود الاستفسار عن الرافعة المقصية الأرضية LC-400',
      "Hello, I'd like to inquire about the Ground Scissor Lift LC-400"
    ),
  },

  {
    id: 'spray-booth-economic',
    category: 'spray-booth',
    categoryLabel: t('أفران الدهان  ', 'Spray Booths '),
    name: t('فرن الدهان EAE 8015', 'EAE 8015 Spray Booth'),
    model: 'EAE-8015  E-Type',
    description: t(
      'تعد كابينة دهان سيارات EAE-8015 الخيار الأمثل للورش والمحترفين الباحثين عن أعلى مستويات الدقة والجودة والسلامة أثناء عملية الدهان. تجمع بين التصميم الهندسي المتطور وأنظمة التهوية والفلترة المتقدمة لتوفير بيئة عمل نظيفة تمامًا.',
      'The EAE-8015 spray booth is the ideal choice for workshops and professionals seeking the highest levels of precision, quality, and safety during the painting process. It combines advanced engineering design with sophisticated ventilation and filtration systems.'
    ),
    image: sprayEcono,
    images: [sprayEcono],
    specs: [
      { label: t('الأبعاد الخارجية', 'External Dimensions'), value: '7000 × 5000 × 3300 mm' },
      { label: t('الأبعاد الداخلية', 'Internal Dimensions'), value: '6900 × 3900 × 2650 mm' },
      { label: t('سمك الألواح', 'Panel Thickness'), value: '42.5mm EPS' },
      { label: t('قدرة المراوح', 'Fan Power'), value: '12KW' },
      { label: t('مجموعات الإضاءة', 'Lighting Groups'), value: '8 LED' },
      { label: t('نظام الفلترة', 'Filtration System'), value: 'Triple-stage / ثلاثي المراحل' },
      { label: t('بلد المنشأ', 'Origin'), value: 'China / الصين' }
    ],
    features: [
      t('ألواح حوائط من الفوم الأبيض EPS بسمك 42.5 مم بنظام التعشيق', 'EPS foam wall panels 42.5mm thick with interlocking system'),
      t('8 مجموعات إضاءة LED موزعة بزاوية 45 درجة', '8 LED lighting groups distributed at 45-degree angles'),
      t('3 مراوح بقدرة 4 كيلو وات لكل واحدة بإجمالي 12 كيلو وات', '3 fans at 4KW each, total 12KW for stable airflow'),
      t('نظام فلترة ثلاثي المراحل: فلتر مبدئي + سقف + أرضية', 'Triple-stage filtration: primary filter + ceiling filter + floor filter'),
      t('لوحة تحكم متكاملة مع مفتاح طوارئ', 'Integrated control panel with emergency stop')
    ],
    badge: t('الأفضل قيمة ', 'Best Value'),
    whatsappText: t(
      'مرحباً، أود الاستفسار عن فرن الرش EAE 8015',
      "Hello, I'd like to inquire about Economic Spray Booth EAE-8015"
    ),
  },

  {
    id: 'car-lift-scissor-balance',
    category: 'car-lift',
    categoryLabel: t('رافعات السيارات', 'Car Lifts'),
    name: t('رافعة مقصية مزدوجة بميزان', 'Double Scissor Alignment Lift'),
    model: 'BLC-350',
    origin: 'الصين',
    badge: t('ميزان', 'Alignment'),
    description: t(
      'رافعة BLC-350 هي رافعة مقصية مزدوجة احترافية مخصصة لأعمال ضبط زوايا العجلات، الصيانة، وفحص أسفل السيارة للمركبات الخفيفة وسيارات الدفع الرباعي. تدعم التركيب داخل الأرض، وتتميز بأنظمة أمان هيدروليكية متطورة، وهيكل معتمد بمعايير CE و ISO 9001.',
      'The BLC-350 is a professional double scissor lift designed for wheel alignment, maintenance, and underbody inspection of light vehicles and SUVs. Supports in-ground installation and features advanced hydraulic safety systems with CE and ISO 9001 certified structure.'
    ),
    image: bsl1,
    images: [ bsl2, bsl3, bsl4, bsl5],
    specs: [
      { label: t('طاقة الرفع', 'Lifting Capacity'), value: '4000 kg' },
      { label: t('ارتفاع الرفع', 'Lifting Height'), value: '1770 mm' },
      { label: t('ارتفاع الرفع الفرعي', 'Sub-lift Lifting Height'), value: '420 mm' },
      { label: t('الحد الأدنى للارتفاع', 'Minimum Height'), value: '210 mm' },
      { label: t('وقت الرفع', 'Lifting Time'), value: '50 s' },
      { label: t('طول الماكينة', 'Length of Machine'), value: '4500 mm' },
      { label: t('عرض الماكينة', 'Machine Width'), value: '2160 mm' },
      { label: t('وزن الماكينة', 'Machine Weight'), value: '2000 kg' },
      { label: t('قدرة المحرك', 'Motor Power'), value: '3 kw' },
      { label: t('متطلبات الهواء المضغوط', 'Air Source Requirement'), value: '6-8 bar' },
      { label: t('نظام التشغيل', 'Driving Mode'), value: 'Electro-Hydraulic' },
      { label: t('متطلبات الكهرباء', 'Power Requirements'), value: 'According to customer demand' },
    ],
    features: [
      t('رافعة مقصية مزدوجة لاستقرار أعلى', 'Double scissor structure for maximum stability'),
      t('مخصصة لضبط زوايا العجلات بدقة', 'Dedicated for precise wheel alignment'),
      t('أنظمة أمان هيدروليكية متطورة', 'Advanced hydraulic safety systems'),
      t('تدعم التركيب داخل الأرض', 'Supports in-ground pit installation'),
      t('مناسبة للمركبات الخفيفة وسيارات الدفع الرباعي', 'Suitable for light vehicles and SUVs'),
      t('نظام تشغيل كهروهيدروليكي', 'Electro-hydraulic driving system'),
      t('معتمدة بشهادة CE وISO 9001', 'CE and ISO 9001 certified'),
      t('متطلبات هواء مضغوط 6-8 بار', 'Air source requirement 6-8 bar'),
    ],
    whatsappText: t(
      'مرحباً، أود الاستفسار عن رافعة المقص المزدوج بميزان BLC-350',
      "Hello, I'd like to inquire about the Double Scissor Alignment Lift BLC-350"
    ),
  },

  {
    id: 'car-lift-4post',
    category: 'car-lift',
    categoryLabel: t('رافعات السيارات', 'Car Lifts'),
    name: t('رافعة 4 عمود', '4 Post Car Lift'),
    model: 'LD-440/440A | LD-450/45DA',
    description: t(
      'رافعة سيارات 4 عمود LD-440 هي رافعة هيدروليكية احترافية مصممة لرفع المركبات حتى 4000 كجم بثبات واحترافية عالية. تتميز بأسطوانة هيدروليكية محمية داخل المنصة الثابتة، وكابلات رفع مجلفنة عالية المقاومة مع نظام ربيع أوتوماتيكي لضمان الأمان الكامل عند انقطاع الكابل أثناء الرفع. مثالية لورش الصيانة والمعارض التي تحتاج إلى رفع مستقر وآمن.',
      'The LD-440 4-post car lift is a professional hydraulic lift designed to raise vehicles up to 4000 kg with high stability. Features a hydraulic cylinder located in the fixed platform for perfect protection, high resistance galvanized pre-stretched lifting cables, and automatic spring loaded safety in case of cable breakage ensuring complete stability during parking. Ideal for maintenance workshops and showrooms requiring stable and safe vehicle lifting.'
    ),
    image: car45,
    images: [car46,car41, car42, car43, car44],
    specs: [
      { label: t('طاقة الرفع الرئيسية', 'Lifting Capacity (Main)'), value: '4000 kg' },
      { label: t('طاقة رفع الرافعة المقصية', 'Lifting Capacity (Jack)'), value: '2000 kg' },
      { label: t('ارتفاع الرفع الرئيسي', 'Lifting Height (Main)'), value: '1650 mm' },
      { label: t('ارتفاع الرفع المقصية', 'Lifting Height (Jack)'), value: '510 mm' },
      { label: t('الارتفاع الأولي للمنصة', 'Initial Height of Platform'), value: '190 mm' },
      { label: t('الحد الأدنى للارتفاع (رئيسي)', 'Min. Height (Main)'), value: '225 mm' },
      { label: t('الحد الأدنى للارتفاع (مقصية)', 'Min. Height (Jack)'), value: '190 mm' },
      { label: t('طول المنصة', 'Platform Length'), value: '4380 mm (4200/4600mm)' },
      { label: t('عرض المنصة', 'Platform Width'), value: '500 mm' },
      { label: t('طاقة العارضة', 'Jacking Beam Capacity'), value: '2000 kg' },
      { label: t('ارتفاع العارضة', 'Jacking Beam Rise'), value: '65-450 mm' },
      { label: t('طول العارضة', 'Jacking Beam Length'), value: '920-1320 mm' },
      { label: t('عرض العارضة', 'Jacking Beam Width'), value: '230 mm' },
      { label: t('الطول الكلي للماكينة', 'Total Length of Machine'), value: '5360 mm' },
      { label: t('عرض الماكينة', 'Machine Width'), value: '3631 mm' },
      { label: t('ارتفاع الماكينة', 'Machine Height'), value: '2140 mm' },
      { label: t('وزن الماكينة', 'Machine Weight'), value: '1278 kg' },
      { label: t('قدرة المحرك', 'Motor Power'), value: '2.2 kw' },
      { label: t('المحرك والطاقة', 'Power & Motor'), value: '1Ph 2.5HP 220V / 3Ph 2HP 220V/380V, 50/60Hz' },
    ],
    features: [
      t('أسطوانة هيدروليكية محمية داخل المنصة الثابتة', 'Hydraulic cylinder located in fixed platform, perfectly protected'),
      t('كابلات رفع مجلفنة عالية المقاومة ومسبقة الشد', 'High resistance galvanized and pre-stretched lifting cable'),
      t('قضبان راتشيت قابلة للتعديل لضمان أفقية المنصات', 'Adjustable parking ratchet rails ensure platforms and cross members stay horizontal'),
      t('ربيع أوتوماتيكي عند انقطاع الكابل لضمان الاستقرار', 'Automatic spring loaded in event of cable breakage for complete stability'),
      t('تحمل انحراف عجلات الضبط', 'Wheel alignment tolerances'),
      t('تحكم عن بعد كهربائي', 'Electric remote-controller'),
      t('بكرات كبيرة القطر للأداء الأمثل', 'Self large diameter pulleys'),
      t('رافعة مقصية هيدروليكية ثنائية المستوى 2 طن (اختياري)', 'Hydraulic two-level 2 ton scissor jack (OPTION)'),
      t('منصات محاذاة قابلة للفصل (اختياري)', 'Detachable align platforms (OPTION)'),
    ],
    whatsappText: t(
      'مرحباً، أود الاستفسار عن رافعة 4 عمود LD-440',
      "Hello, I'd like to inquire about the 4-post car lift LD-440"
    ),
  },

  {
    id: 'filters-spray-booth',
    category: 'spray-booth',
    categoryLabel: t('أفران الدهان', 'Spray Booths'),
    name: t('فلتر فرن الدهان', 'Filters Spray Booth'),
    model: 'EAE-FILTER',
    description: t(
      'تُعدّ فلاتر أفران الدهان مواد أساسية تُستخدم لالتقاط ومعالجة رذاذ الطلاء الناتج عن عملية الرش، وتتمثل وظيفتها الرئيسية في إزالة جزيئات رذاذ الطلاء من الهواء عن طريق الاعتراض الفيزيائي، وذلك لحماية البيئة والمعدات. تتكون فلاتر كابينة رش السيارات عادةً من ألياف زجاجية أحادية الشعيرة متصلة عالية المتانة، والتي يمكنها تخزين غبار رذاذ الطلاء بكفاءة. مادة الترشيح مصنوعة من القطن الأخضر والأبيض، والجانب الأخضر هو الجانب المواجه للهواء، ويتميز بمرونته وانخفاض فقدان الضغط.',
      'Spray booth filters are essential materials used to capture and treat paint spray mist generated during the spraying process. Their primary function is to remove paint spray particles from the air through physical interception, protecting both the environment and equipment. Spray booth filters are typically made of high-durability single-filament glass fibers capable of efficiently storing paint spray dust. The filter media is made of green and white cotton — the green side faces the airflow, offering flexibility and low pressure drop.'
    ),
    image: filter1,
    images: [filter1, filter2],
    specs: [
      { label: t('المادة', 'Material'), value: 'Glass Fiber / ألياف زجاجية' },
      { label: t('مادة الترشيح', 'Filter Media'), value: 'Green & White Cotton / قطن أخضر وأبيض' },
      { label: t('الوظيفة', 'Function'), value: 'Paint Mist Filtration / ترشيح رذاذ الطلاء' },
    ],
    features: [
      t('ألياف زجاجية أحادية الشعيرة عالية المتانة', 'High-durability single-filament glass fibers'),
      t('تخزين فعال لغبار رذاذ الطلاء', 'Efficient paint spray dust storage'),
      t('مادة ترشيح من القطن الأخضر والأبيض', 'Green and white cotton filter media'),
      t('الجانب الأخضر مواجه للهواء بمرونة عالية', 'Green side faces airflow with high flexibility'),
      t('انخفاض فقدان الضغط أثناء التشغيل', 'Low pressure drop during operation'),
      t('حماية البيئة والمعدات من جزيئات الطلاء', 'Protects environment and equipment from paint particles'),
    ],
    whatsappText: t(
      'مرحباً، أود الاستفسار عن فلاتر أفران الدهان EAE-FILTER',
      "Hello, I'd like to inquire about Spray Booth Filters EAE-FILTER"
    ),
  },

  {
    id: 'medium-spray-booth',
    category: 'spray-booth',
    categoryLabel: t('أفران الدهان', 'Spray Booths'),
    name: t('فرن الدهان المتوسط', 'Medium Spray Booth'),
    model: 'EAE-8014 (M Type)',
    description: t(
      'تعد كابينة دهان سيارات EAE-8014 الخيار الأمثل للورش والمحترفين الباحثين عن أعلى مستويات الدقة والجودة والسلامة أثناء عملية الدهان. فهي تجمع بين التصميم الهندسي المتطور وأنظمة التهوية والفلترة المتقدمة لتوفير بيئة عمل نظيفة تمامًا، تضمن خروج السيارة بعد الدهان بأعلى جودة وفق أقصى معايير السلامة المهنية.',
      'The EAE-8014 car spray booth is the ideal choice for workshops and professionals seeking the highest levels of precision, quality, and safety during the painting process. It combines advanced engineering design with sophisticated ventilation and filtration systems to provide a completely clean working environment, ensuring the vehicle exits with the highest quality finish according to the strictest professional safety standards.'
    ),
    image: EAEMed,
    images: [EAEMed],
    specs: [
      { label: t('الأبعاد الخارجية', 'External Dimensions'), value: '7000 × 5000 × 3300 mm' },
      { label: t('الأبعاد الداخلية', 'Internal Dimensions'), value: '6900 × 3900 × 2650 mm' },
      { label: t('إجمالي القدرة الكهربائية', 'Total Power'), value: '18 kW' },
      { label: t('الفولتية', 'Voltage'), value: '380V / 50Hz / 3Ph' },
      { label: t('الوزن', 'Weight'), value: '≈ 3000 kg' },
      { label: t('ألواح الحوائط', 'Wall Panels'), value: '50mm Rock Wool / صوف صخري مزدوج العزل' },
      { label: t('الباب الرئيسي', 'Main Door'), value: '4 Panels Aluminum — 3000 × 2600 mm' },
      { label: t('مروحة الدخول', 'Inlet Fan'), value: '2 × 7.5kW Centrifugal (20,000 m³/h)' },
      { label: t('مروحة الخروج', 'Outlet Fan'), value: '1 × 7.5kW Centrifugal (34,375 m³/h)' },
      { label: t('الإضاءة السقفية', 'Ceiling Lights'), value: '8 × 4 LED (32 lamps @ 45°)' },
      { label: t('الإضاءة الجانبية', 'Side Lights'), value: '8 LED Units' },
      { label: t('الموقد (اختياري)', 'Burner (Optional)'), value: 'RIELLO GS — 140,000 Kcal/h' },
      { label: t('أقصى حرارة', 'Max Temperature'), value: '80°C' },
      { label: t('استهلاك الوقود', 'Fuel Consumption'), value: '8–9 L/h (Diesel)' },
      { label: t('اللون', 'Color'), value: 'Gray & Black / رمادي وأسود' },
      { label: t('بلد المنشأ', 'Origin'), value: 'China / الصين' },
    ],
    features: [
      t('ألواح صوف صخري 50 مم مزدوجة العزل مقاومة للحريق بنظام التعشيق', '50mm double-insulated rock wool panels, flame-retardant with interlocking system'),
      t('أرضية بارتفاع 300 مم مع شبكات صلب مسطحة و5 صفوف شبكات أرضية', '300mm platform with flat steel grids and 5 rows of floor gratings'),
      t('باب رئيسي 4 ألواح ألومنيوم مع زجاج مقاوم للحرارة 8 مم', '4-panel aluminum main door with 8mm heat-resistant glass'),
      t('باب طوارئ جانبي 900×2000 مم مع مانع انفجار', '900×2000mm emergency side door with explosion preventer'),
      t('مروحتان طاردتان مركزيتان بقدرة 15 كيلو وات (20,000 م³/ساعة)', '2 centrifugal inlet fans at 15kW total (20,000 m³/h)'),
      t('مروحة عادم 7.5 كيلو وات بسعة 34,375 م³/ساعة', '7.5kW exhaust fan with 34,375 m³/h capacity'),
      t('كابينة هواء من الصوف الصخري مع مجاري صلب مجلفن', 'Rock wool air cabinet with galvanized steel ducting'),
      t('موقد ديزل إيطالي RIELLO GS اختياري بقدرة 140,000 Kcal/h', 'Optional Italian RIELLO GS diesel burner at 140,000 Kcal/h'),
      t('تسخين سريع 5-8 دقائق حتى 60°C مع أقصى حرارة 80°C', 'Fast heating 5-8 min to 60°C, max 80°C'),
      t('سقف من أنابيب صلب مجلفنة مع تجويف مطلي بالمسحوق', 'Galvanized steel tube roof beams with powder-coated plenum'),
      t('32 لمبة LED سقفية بزاوية 45° + 8 وحدات إضاءة جانبية', '32 ceiling LED lamps at 45° angle + 8 side lighting units'),
      t('فلترة ثلاثية المراحل: مبدئي (>90%) + سقف (>98%) + أرضية (>90%)', 'Triple-stage filtration: primary (>90%) + ceiling (>98%) + floor (>90%)'),
      t('نظام تحكم ذكي مع ضبط حرارة ووقت ومفتاح طوارئ', 'Intelligent control system with temp/time setting & emergency stop'),
      t('هيكل رباعي مطلي بالمسحوق مع سحب هواء من الجانب العلوي', 'Powder-coated quad-frame structure with top-side air intake'),
    ],
    whatsappText: t(
      'مرحباً، أود الاستفسار عن كابينة الدهان المتوسطة EAE-8014',
      "Hello, I'd like to inquire about the Medium Spray Booth EAE-8014"
    ),
  },

  {
    id: 'floor-lift-ld-580',
    category: 'car-lift',
    categoryLabel: t('رافعات السيارات', 'Car Lifts'),
    name: t('رافعة سيارات أرضية (بنشر) عالية الكفاءة – موديل LD-580', 'High-Efficiency Floor Lift (Puncher) – LD-580'),
    model: 'LD-580',
    description: t(
      'تم تصميم هذه الرافعة لتوفير أداء قوي وثبات عالٍ، تتحمل حتى 4500 كجم مما يجعلها الخيار المثالي لورش صيانة السيارات التي تبحث عن الاعتمادية والأمان في التشغيل اليومي.',
      'Designed to deliver powerful performance and high stability, supporting up to 4500 kg — making it the ideal choice for automotive workshops seeking reliability and safety in daily operations.'
    ),
    image: floor1,
    images: [floor1, floor2, floor3],
    specs: [],
    features: [
      t('نظام هيدروليكي بأسطوانتين مزدوجتين لتعزيز قوة الرفع والثبات', 'Dual-cylinder hydraulic system for enhanced lifting power and stability'),
      t('نظام أمان متعدد النقاط لضمان أعلى درجات الحماية', 'Multi-point safety system ensuring maximum protection'),
      t('أقفال أمان ميكانيكية لزيادة مستوى السلامة أثناء التشغيل', 'Mechanical safety locks for increased operational safety'),
      t('تصميم بعارضة منخفضة (Dropped Cross Bar) لتوفير مساحة أكبر للعمل', 'Dropped cross bar design for greater working clearance'),
      t('مزودة بقطع رفع مطاطية لحماية هيكل السيارة', 'Rubber lifting pads to protect vehicle body'),
      t('هيكل قوي مصنوع من الفولاذ عالي التحمل للاستخدام الشاق', 'Heavy-duty steel channel frame for intensive use'),
    ],
    specifications: {
      ar: [
        { label: 'سعة الرفع', value: '4500 كجم / 3000 كجم (خيار 1 أو 2 أسطوانة)' },
        { label: 'أقصى ارتفاع رفع', value: '580 مم' },
        { label: 'أدنى ارتفاع', value: '80 مم' },
        { label: 'الطول الكلي', value: '2100 مم' },
        { label: 'العرض الكلي', value: '1800 مم' },
        { label: 'الوزن الصافي', value: '500 كجم' },
        { label: 'حجم التغليف', value: '2100 × 1800 × 85 مم' },
        { label: 'الطاقة والمحرك', value: 'أحادي الطور 220 فولت، 50/60 هرتز / ثلاثي الأطوار 220/380 فولت، 50/60 هرتز' },
      ],
      en: [
        { label: 'Lifting Capacity', value: '4500 kg / 3000 kg (2 or 1 cylinder option)' },
        { label: 'Max. Lifting Height', value: '580 mm' },
        { label: 'Min. Height', value: '80 mm' },
        { label: 'Overall Length', value: '2100 mm' },
        { label: 'Overall Width', value: '1800 mm' },
        { label: 'Net Weight', value: '500 kg' },
        { label: 'Packing Size', value: '2100 × 1800 × 85 mm' },
        { label: 'Power & Motor', value: '1 Phase (220V, 50/60Hz) / 3 Phase (220V/380V, 50/60Hz)' },
      ],
    },
    whatsappText: t(
      'السلام عليكم، أود الاستفسار عن رافعة السيارات الأرضية موديل LD-580',
      'Hello, I would like to inquire about the Floor Lift LD-580'
    ),
  },

  {
    id: 'tool-box-unaite',
    category: 'misc',
    categoryLabel: t('منتجات متنوعة', 'Misc Products'),
    name: t('صندوق عدة متنقل – UNAITE', 'Mobile Tool Box – UNAITE'),
    model: 'UNAITE',
    description: t(
      'صندوق عدة متنقل عالي الجودة من UNAITE، مصمم لتوفير تنظيم مثالي لأدوات الورشة مع سهولة التنقل والوصول السريع. متوفر بخيارَي 7 أدراج و5 أدراج لتناسب احتياجات مختلف الورش.',
      'A high-quality mobile tool box by UNAITE, designed for optimal workshop tool organization with easy mobility and quick access. Available in 7-drawer and 5-drawer configurations to suit different workshop needs.'
    ),
    image: tool1,
    images: [tool1, tool2],
    specs: [],
    features: [
      t('متوفر بخيارَي 7 أدراج و5 أدراج', 'Available in 7-drawer and 5-drawer configurations'),
      t('تصميم مدمج يوفر مساحة داخل الورشة ويسهل تركيبه في الأماكن المحدودة', 'Compact design saves workshop space and fits in limited areas'),
      t('قاعدة ممتدة تمنح ثباتًا أعلى ومرونة في التعامل مع مختلف أحجام السيارات', 'Extended base provides higher stability and flexibility for various vehicle sizes'),
      t('هيكل أمان متين مصمم لضمان أقصى درجات الحماية أثناء التشغيل', 'Sturdy safety frame designed for maximum protection during operation'),
      t('تحكم بسيط وسهل: تشغيل مريح وسريع بدون تعقيد', 'Simple and easy controls: comfortable and quick operation without complexity'),
      t('صيانة سهلة: تصميم يسهل عمليات الفحص والصيانة الدورية', 'Easy maintenance: design facilitates regular inspection and servicing'),
      t('تعدد الاستخدامات: مناسب لمجموعة واسعة من المركبات والاستخدامات داخل الورشة', 'Multi-purpose: suitable for a wide range of vehicles and workshop applications'),
      t('درج علوي قابل للقفل لحماية الأدوات الثمينة', 'Lockable top drawer to secure valuable tools'),
      t('عجلات متينة لسهولة التنقل داخل الورشة', 'Heavy-duty wheels for easy mobility inside the workshop'),
    ],
    specifications: {
      ar: [
        { label: 'عدد الأدراج', value: '7 أدراج / 5 أدراج' },
        { label: 'الارتفاع', value: '85 سم' },
        { label: 'العرض', value: '64 سم' },
        { label: 'العمق', value: '66 سم' },
        { label: 'الدرج العلوي', value: 'قابل للقفل' },
        { label: 'الأدراج العميقة', value: 'درجان عميقان (2 Deep Drawer)' },
        { label: 'العجلات', value: 'عجلات متينة متنقلة' },
        { label: 'الماركة', value: 'UNAITE' },
      ],
      en: [
        { label: 'Drawer Count', value: '7 Drawers / 5 Drawers' },
        { label: 'Height', value: '85 cm' },
        { label: 'Width', value: '64 cm' },
        { label: 'Depth', value: '66 cm' },
        { label: 'Top Drawer', value: 'Lockable' },
        { label: 'Deep Drawers', value: '2 Deep Drawers' },
        { label: 'Wheels', value: 'Heavy-duty mobile wheels' },
        { label: 'Brand', value: 'UNAITE' },
      ],
    },
    whatsappText: t(
      'السلام عليكم، أود الاستفسار عن صندوق العدة المتنقل UNAITE',
      'Hello, I would like to inquire about the UNAITE Mobile Tool Box'
    ),
  },

  {
    id: 'compressor-lgfd-15b',
    category: 'compressor',
    categoryLabel: t('ضاغطات الهواء', 'Air Compressors'),
    name: t('كمبروسر هواء سكرو LGFD-15B', 'LGFD-15B Screw Air Compressor'),
    model: 'LGFD-15B',
    description: t(
      'ضاغط هواء حلزوني محقون بالزيت فئة EVO بطرف ضاغط Rotorcomp الألماني، يوفر كفاءة عالية وضوضاء منخفضة مع ضمان 12 شهراً.',
      'EVO oil-injected screw air compressor with German Rotorcomp air end. High efficiency, low noise, 12-month warranty.'
    ),
    image: comp15,
    images: [compShared1, compShared2, comp15Extra1, comp15Extra2, comp15, comp15_2, comp15_3, comp15_4, comp15_5, comp15_6, comp15_7, comp15_8, comp15_9, comp15_10, ...compressorSharedImages],
    specs: [
      { label: t('قوة المحرك (كيلوواط)', 'Motor Power (kW)'), value: '15' },
      { label: t('الضغط', 'Pressure'), value: '10 bar' },
      { label: t('الجهد الكهربائي', 'Voltage'), value: '380V / 3P / 60Hz' },
      { label: t('طرف الضاغط', 'Air End'), value: 'EVO Rotorcomp – Made in Germany' },
      { label: t('سعة الهواء', 'Air Capacity'), value: '1.58 m³/min' },
      { label: t('وزن الكمبروسر', 'N/W Comp'), value: '400 KG' },
      { label: t('الأبعاد (مم)', 'Dimensions (mm)'), value: '900 × 800 × 1200' },
      { label: t('رقم الموديل', 'Model'), value: 'YX3-160L-2' },
      { label: t('نظام التبريد', 'Cooling Mode'), value: 'Air Cooling' },
      { label: t('قوة مروحة التبريد (واط)', 'Cooling Fan Power (W)'), value: '180' },
      { label: t('تدفق هواء التبريد (م³/س)', 'Cooling Air Flow (m³/h)'), value: '3000' },
      { label: t('وزن المحرك', 'N/W Motor'), value: '120 KG' },
      { label: t('سرعة المحرك (RPM)', 'Speed / Motor (RPM)'), value: '3520' },
      { label: t('حجم الخزان (م³)', 'Adapter Volume (m³)'), value: '≥0.3' },
    ],
    features: [],
    accessories: [
      t('فلتر الهواء', 'Air Filter'),
      t('فلتر الزيت', 'Oil Filter'),
      t('فاصل الزيت', 'Oil Separator'),
      t('زيت الكمبروسر', 'Compressor Oil'),
      t('سير عزم المحرك', 'Drive Belt'),
      t('شاشة التحكم', 'Control Panel'),
    ],
    whyChooseUs: t(
      'تقنية ROLLING RPROFILE الجديدة لكفاءة عالية جداً وتقليل الضوضاء — طرف ضاغط Rotorcomp "صنع في ألمانيا" — نظام تحكم ذكي بشاشة لمس — مكونات كهربائية Schneider — محرك موفر للطاقة IE3 بكفاءة أعلى 15% — ناقل حركة OPTI بعمر افتراضي 25,000 ساعة — ضمان 12 شهراً على الجهاز وطرف الضاغط.',
      'New ROLLING RPROFILE technology for maximum efficiency and low noise — German Rotorcomp air end — Smart touch-screen controller — Schneider electrical components — IE3 energy-saving motor (+15% efficiency) — OPTI belt drive with 25,000-hour lifespan — 12-month warranty on unit and air end.'
    ),
    afterSales: t(
      'نوفر قطع الغيار الأصلية وصيانة دورية متكاملة تشمل إعادة ضبط النظام وفحص جميع المكونات.',
      'We provide original spare parts and comprehensive periodic maintenance including system recalibration and full component inspection.'
    ),
    whatsappText: t(
      'مرحباً، أود الاستفسار عن كمبروسر هواء سكرو LGFD-15B',
      "Hello, I'd like to inquire about the LGFD-15B Screw Air Compressor"
    ),
  },

  {
    id: 'compressor-lgfd-22b',
    category: 'compressor',
    categoryLabel: t('ضاغطات الهواء', 'Air Compressors'),
    name: t('كمبروسر هواء سكرو LGFD-22B', 'LGFD-22B Screw Air Compressor'),
    model: 'LGFD-22B',
    description: t(
      'ضاغط هواء حلزوني محقون بالزيت فئة EVO بطرف ضاغط Rotorcomp الألماني، قوة 22 كيلوواط مناسب للورش المتوسطة والكبيرة.',
      'EVO oil-injected screw air compressor with German Rotorcomp air end, 22 kW — ideal for medium and large workshops.'
    ),
    image: comp22,
    images: [compShared1, compShared2, comp22, comp22_2, comp22_3, ...compressorSharedImages],
    specs: [
      { label: t('قوة المحرك (كيلوواط)', 'Motor Power (kW)'), value: '22' },
      { label: t('الضغط', 'Pressure'), value: '10 bar' },
      { label: t('الجهد الكهربائي', 'Voltage'), value: '380V / 3P / 60Hz' },
      { label: t('طرف الضاغط', 'Air End'), value: 'EVO Rotorcomp – Made in Germany' },
      { label: t('سعة الهواء', 'Air Capacity'), value: '3.2 m³/min' },
      { label: t('وزن الكمبروسر', 'N/W Comp'), value: '500 KG' },
      { label: t('الأبعاد (مم)', 'Dimensions (mm)'), value: '1100 × 850 × 1296' },
      { label: t('رقم الموديل', 'Model'), value: 'YX3-160L-2' },
      { label: t('نظام التبريد', 'Cooling Mode'), value: 'Air Cooling' },
      { label: t('قوة مروحة التبريد (واط)', 'Cooling Fan Power (W)'), value: '750' },
      { label: t('تدفق هواء التبريد (م³/س)', 'Cooling Air Flow (m³/h)'), value: '9500' },
      { label: t('وزن المحرك', 'N/W Motor'), value: '138 KG' },
      { label: t('سرعة المحرك (RPM)', 'Speed / Motor (RPM)'), value: '3530' },
      { label: t('حجم الخزان (م³)', 'Adapter Volume (m³)'), value: '≥0.5' },
    ],
    features: [],
    accessories: [
      t('فلتر الهواء', 'Air Filter'),
      t('فلتر الزيت', 'Oil Filter'),
      t('فاصل الزيت', 'Oil Separator'),
      t('زيت الكمبروسر', 'Compressor Oil'),
      t('سير عزم المحرك', 'Drive Belt'),
      t('شاشة التحكم', 'Control Panel'),
    ],
    whyChooseUs: t(
      'تقنية ROLLING RPROFILE الجديدة لكفاءة عالية جداً وتقليل الضوضاء — طرف ضاغط Rotorcomp "صنع في ألمانيا" — نظام تحكم ذكي بشاشة لمس — مكونات كهربائية Schneider — محرك موفر للطاقة IE3 بكفاءة أعلى 15% — ناقل حركة OPTI بعمر افتراضي 25,000 ساعة — ضمان 12 شهراً على الجهاز وطرف الضاغط.',
      'New ROLLING RPROFILE technology for maximum efficiency and low noise — German Rotorcomp air end — Smart touch-screen controller — Schneider electrical components — IE3 energy-saving motor (+15% efficiency) — OPTI belt drive with 25,000-hour lifespan — 12-month warranty on unit and air end.'
    ),
    afterSales: t(
      'نوفر قطع الغيار الأصلية وصيانة دورية متكاملة تشمل إعادة ضبط النظام وفحص جميع المكونات.',
      'We provide original spare parts and comprehensive periodic maintenance including system recalibration and full component inspection.'
    ),
    whatsappText: t(
      'مرحباً، أود الاستفسار عن كمبروسر هواء سكرو LGFD-22B',
      "Hello, I'd like to inquire about the LGFD-22B Screw Air Compressor"
    ),
  },

  {
    id: 'compressor-lgfd-30b',
    category: 'compressor',
    categoryLabel: t('ضاغطات الهواء', 'Air Compressors'),
    name: t('كمبروسر هواء سكرو LGFD-30B', 'LGFD-30B Screw Air Compressor'),
    model: 'LGFD-30B',
    description: t(
      'ضاغط هواء حلزوني محقون بالزيت فئة EVO بقوة 30 كيلوواط وسعة هواء 4.32 م³/د، مثالي للمنشآت الصناعية المتوسطة.',
      'EVO oil-injected screw air compressor, 30 kW with 4.32 m³/min air capacity — ideal for mid-size industrial facilities.'
    ),
    image: comp,
    images: [compShared1, compShared2, ...compressorSharedImages],
    specs: [
      { label: t('قوة المحرك (كيلوواط)', 'Motor Power (kW)'), value: '30' },
      { label: t('الضغط', 'Pressure'), value: '10 bar' },
      { label: t('الجهد الكهربائي', 'Voltage'), value: '380V / 3P / 60Hz' },
      { label: t('طرف الضاغط', 'Air End'), value: 'EVO Rotorcomp – Made in Germany' },
      { label: t('سعة الهواء', 'Air Capacity'), value: '4.32 m³/min' },
      { label: t('وزن الكمبروسر', 'N/W Comp'), value: '450 KG' },
      { label: t('الأبعاد (مم)', 'Dimensions (mm)'), value: '1200 × 900 × 1300' },
      { label: t('رقم الموديل', 'Model'), value: 'YX3-160L-2' },
      { label: t('نظام التبريد', 'Cooling Mode'), value: 'Air Cooling' },
      { label: t('قوة مروحة التبريد (واط)', 'Cooling Fan Power (W)'), value: '750' },
      { label: t('تدفق هواء التبريد (م³/س)', 'Cooling Air Flow (m³/h)'), value: '950' },
      { label: t('وزن المحرك', 'N/W Motor'), value: '240 KG' },
      { label: t('سرعة المحرك (RPM)', 'Speed / Motor (RPM)'), value: '3535' },
    ],
    features: [],
    accessories: [
      t('فلتر الهواء', 'Air Filter'),
      t('فلتر الزيت', 'Oil Filter'),
      t('فاصل الزيت', 'Oil Separator'),
      t('زيت الكمبروسر', 'Compressor Oil'),
      t('سير عزم المحرك', 'Drive Belt'),
      t('شاشة التحكم', 'Control Panel'),
    ],
    whyChooseUs: t(
      'تقنية ROLLING RPROFILE الجديدة لكفاءة عالية جداً وتقليل الضوضاء — طرف ضاغط Rotorcomp "صنع في ألمانيا" — نظام تحكم ذكي بشاشة لمس — مكونات كهربائية Schneider — محرك موفر للطاقة IE3 بكفاءة أعلى 15% — ناقل حركة OPTI بعمر افتراضي 25,000 ساعة — ضمان 12 شهراً على الجهاز وطرف الضاغط.',
      'New ROLLING RPROFILE technology for maximum efficiency and low noise — German Rotorcomp air end — Smart touch-screen controller — Schneider electrical components — IE3 energy-saving motor (+15% efficiency) — OPTI belt drive with 25,000-hour lifespan — 12-month warranty on unit and air end.'
    ),
    afterSales: t(
      'نوفر قطع الغيار الأصلية وصيانة دورية متكاملة تشمل إعادة ضبط النظام وفحص جميع المكونات.',
      'We provide original spare parts and comprehensive periodic maintenance including system recalibration and full component inspection.'
    ),
    whatsappText: t(
      'مرحباً، أود الاستفسار عن كمبروسر هواء سكرو LGFD-30B',
      "Hello, I'd like to inquire about the LGFD-30B Screw Air Compressor"
    ),
  },

  {
    id: 'compressor-lgfd-37b',
    category: 'compressor',
    categoryLabel: t('ضاغطات الهواء', 'Air Compressors'),
    name: t('كمبروسر هواء سكرو LGFD-37B', 'LGFD-37B Screw Air Compressor'),
    model: 'LGFD-37B',
    description: t(
      'ضاغط هواء حلزوني محقون بالزيت فئة EVO الأقوى في السلسلة بقوة 37 كيلوواط وسعة هواء 5.8 م³/د، للمنشآت الصناعية الكبيرة.',
      'The most powerful EVO oil-injected screw compressor in the series — 37 kW, 5.8 m³/min — built for large industrial facilities.'
    ),
    image: comp37,
    images: [compShared1, compShared2, comp37, ...compressorSharedImages],
    specs: [
      { label: t('قوة المحرك (كيلوواط)', 'Motor Power (kW)'), value: '37' },
      { label: t('الضغط', 'Pressure'), value: '10 bar' },
      { label: t('الجهد الكهربائي', 'Voltage'), value: '380V / 3P / 60Hz' },
      { label: t('طرف الضاغط', 'Air End'), value: 'EVO Rotorcomp – Made in Germany' },
      { label: t('سعة الهواء', 'Air Capacity'), value: '5.8 m³/min' },
      { label: t('وزن الكمبروسر', 'N/W Comp'), value: '700 KG' },
      { label: t('الأبعاد (مم)', 'Dimensions (mm)'), value: '1300 × 1000 × 1296' },
      { label: t('رقم الموديل', 'Model'), value: 'YX3-160L-2' },
      { label: t('نظام التبريد', 'Cooling Mode'), value: 'Air Cooling' },
      { label: t('قوة مروحة التبريد (واط)', 'Cooling Fan Power (W)'), value: '1100' },
      { label: t('تدفق هواء التبريد (م³/س)', 'Cooling Air Flow (m³/h)'), value: '16000' },
      { label: t('وزن المحرك', 'N/W Motor'), value: '251 KG' },
      { label: t('سرعة المحرك (RPM)', 'Speed / Motor (RPM)'), value: '3540' },
      { label: t('حجم الخزان (م³)', 'Adapter Volume (m³)'), value: '≥0.6' },
    ],
    features: [],
    accessories: [
      t('فلتر الهواء', 'Air Filter'),
      t('فلتر الزيت', 'Oil Filter'),
      t('فاصل الزيت', 'Oil Separator'),
      t('زيت الكمبروسر', 'Compressor Oil'),
      t('سير عزم المحرك', 'Drive Belt'),
      t('شاشة التحكم', 'Control Panel'),
    ],
    whyChooseUs: t(
      'تقنية ROLLING RPROFILE الجديدة لكفاءة عالية جداً وتقليل الضوضاء — طرف ضاغط Rotorcomp "صنع في ألمانيا" — نظام تحكم ذكي بشاشة لمس — مكونات كهربائية Schneider — محرك موفر للطاقة IE3 بكفاءة أعلى 15% — ناقل حركة OPTI بعمر افتراضي 25,000 ساعة — ضمان 12 شهراً على الجهاز وطرف الضاغط.',
      'New ROLLING RPROFILE technology for maximum efficiency and low noise — German Rotorcomp air end — Smart touch-screen controller — Schneider electrical components — IE3 energy-saving motor (+15% efficiency) — OPTI belt drive with 25,000-hour lifespan — 12-month warranty on unit and air end.'
    ),
    afterSales: t(
      'نوفر قطع الغيار الأصلية وصيانة دورية متكاملة تشمل إعادة ضبط النظام وفحص جميع المكونات.',
      'We provide original spare parts and comprehensive periodic maintenance including system recalibration and full component inspection.'
    ),
    whatsappText: t(
      'مرحباً، أود الاستفسار عن كمبروسر هواء سكرو LGFD-37B',
      "Hello, I'd like to inquire about the LGFD-37B Screw Air Compressor"
    ),
  },

  {
    id: 'ac-charge-ho-s600',
    category: 'misc',
    categoryLabel: t('منتجات متنوعة', 'Misc Products'),
    name: t('ماكينة إعادة شحن غاز المكيف – موديل HO-S600', 'AC Refrigerant Recovery & Recharge Machine – HO-S600'),
    model: 'HO-S600',
    description: t(
      'تُعد ماكينة HO-S600 حلاً متكاملاً واحترافيًا لخدمات صيانة أنظمة تكييف السيارات، حيث توفر جميع الوظائف الأساسية في جهاز واحد بكفاءة عالية وفقة متناهية.',
      'The HO-S600 is a fully integrated professional solution for automotive AC maintenance, combining all essential functions in one high-efficiency, precision device.'
    ),
    image: ac1,
    images: [ac1, ac2, ac3],
    specs: [
      { label: t('الموديل', 'Model'), value: 'HO-S600' },
      { label: t('شهادة الجودة', 'Certification'), value: 'CE' },
      { label: t('نوع غاز التبريد', 'Refrigerant Type'), value: 'R134a' },
      { label: t('نمط التشغيل', 'Operation Mode'), value: 'Fully Automatic / Manual' },
      { label: t('الضاغط', 'Compressor'), value: '12CC High Pressure' },
      { label: t('سعة الأسطوانة', 'Cylinder Capacity'), value: '10 kg' },
      { label: t('سرعة الاسترجاع', 'Recovery Speed'), value: '350 g/min' },
      { label: t('سرعة الشحن', 'Charging Speed'), value: '1500 g/min' },
      { label: t('مضخة الفاكيوم', 'Vacuum Pump'), value: 'Dual-stage – 2L' },
      { label: t('دقة الميزان', 'Scale Precision'), value: '±5 g' },
      { label: t('درجة حرارة التشغيل', 'Operating Temp'), value: '-10 to 50°C' },
      { label: t('نسبة الاسترجاع', 'Recovery Rate'), value: '97% (auto-stop at 0 bar)' },
      { label: t('مصدر الطاقة', 'Power Supply'), value: '220V ±10% / 50-60Hz' },
      { label: t('الأبعاد', 'Dimensions'), value: '73 × 68 × 120 cm' },
      { label: t('الوزن', 'Weight'), value: '95 kg' },
    ],
    features: [
      t('استرجاع وإعادة تدوير غاز التبريد', 'Refrigerant recovery and recycling'),
      t('تفريغ النظام وإعادة تعبئة الزيت', 'System evacuation and oil refill'),
      t('إعادة شحن غاز التبريد أوتوماتيكيًا', 'Automatic refrigerant recharging'),
      t('حقن الزيت وتفريغ الزيت المستخدم تلقائياً', 'Automatic oil injection and used oil drainage'),
      t('إمكانية طباعة تقارير البيانات', 'Data report printing capability'),
      t('ضاغط Danfoss عالي الكفاءة مع حماية من الحمل الزائد', 'High-efficiency Danfoss compressor with overload protection'),
      t('مضخة فاكيوم ثنائية المرحلة (2 لتر)', 'Dual-stage vacuum pump (2L)'),
      t('ميزان إلكتروني دقة ±5 جرام', 'Electronic scale precision ±5g'),
      t('نظام تنقية وترشيح متطور لإعادة استخدام الغاز بأمان', 'Advanced purification and filtration system for safe refrigerant reuse'),
      t('عجلات متينة مع نظام قفل لسهولة الحركة والثبات', 'Heavy-duty wheels with locking system for mobility and stability'),
    ],
    whatsappText: t(
      'السلام عليكم، أود الاستفسار عن ماكينة إعادة شحن غاز المكيف موديل HO-S600',
      'Hello, I would like to inquire about the AC Refrigerant Machine HO-S600'
    ),
  },

  {
    id: 'body-repair-kit-fy9018',
    category: 'misc',
    categoryLabel: t('منتجات متنوعة', 'Misc Products'),
    name: t('نظام إصلاح هياكل السيارات – FY-9018 / FY-9028', 'Car Body Repair System – FY-9018 / FY-9028'),
    model: 'FY-9018 / FY-9028',
    description: t(
      'يُعد نظام FY-9018 و FY-9028 من الحلول المتقدمة لإصلاح هياكل السيارات، حيث يعتمد على أحدث التقنيات العالمية في مجال إصلاح هياكل المركبات، مما يوفر أداءً عاليًا وسرعة في تنفيذ أعمال الصيانة بجودة احترافية.',
      'The FY-9018 and FY-9028 are advanced car body repair systems built on the latest international technologies in vehicle body restoration, delivering high performance, speed, and professional-grade quality.'
    ),
    image: repair1,
    images: [repair1, repair2, repair3, repair4],
    specs: [],
    features: [
      t('يعتمد على تقنيات عالمية متطورة في إصلاح هياكل السيارات', 'Built on the most advanced international IGBT inverter technology'),
      t('إمكانية إصلاح مختلف أنواع ألواح هيكل السيارة المعدنية بسرعة وكفاءة (الألومنيوم اختياري)', 'Quickly repairs various sheet metals – Aluminium optional'),
      t('تصميم بعربة فاخرة عملية وسهلة الاستخدام', 'Practical and convenient deluxe professional trolley design'),
      t('ماكينة لحام نقطي احترافية IGBT مزودة بشاشة LCD لسهولة التحكم', 'Professional IGBT inverter dent puller with LCD display (AC22V/AC400V 50/60Hz – 30A)'),
      t('مزود بنظام شفط هوائي خاص بضغط من 80 إلى 120 PSI لزيادة كفاءة العمل', 'Professional pneumatic suction cup system with pressure 80–120 PSI'),
      t('أدوات عالية الجودة مصنعة بتقنية التشكيل (Moulding) لضمان المتانة والدقة', 'Various professional tools manufactured using moulding process for durability and precision'),
      t('لوحة تعليق لتنظيم وتعليق الأدوات بشكل عملي وسهل الوصول', 'Pegboard for organizing and hanging tools for easy access'),
      t('طريقة إصلاح سريعة لا تُلحق أي ضرر بسطح الطلاء', "Quick repair method that won't damage paint surface"),
      t('أدوات متعددة واختيارية تشمل: رافعة عرضية – ماسحة دفع سريع – طقم لحام – طقم سحب الدهامات – مادة تلميع', 'Optional tools include: crossbar lifter, quick puller, welding kit, dent repair pulling kit, polishing/curing kit'),
      t('مزود بـ IGBT Inverter Dent Puller بتيار 30 أمبير (AC22V / AC400V / 50-60Hz)', 'Portable multi-hook puller and lengthening crossbar lifter included'),
    ],
    accessories: [
      t('A001 – رافعة عرضية مع 4 حوامل', 'A001 – Crossbar lifter with 4 kickstand'),
      t('A002 – رافعة عرضية ممددة', 'A002 – Lengthening crossbar lifter'),
      t('A003 – أدوات إصلاح هيكل متنوعة', 'A003 – Various car body repair tools'),
      t('A004 – ماكينة لحام نقطي احترافية IGBT', 'A004 – Professional IGBT dent repair machine with LCD display'),
      t('A005 – ماسحة سريعة', 'A005 – Quick puller'),
      t('A006 – حامل 2 أو 4 حوامل', 'A006 – 2 or 4 kickstand for option'),
      t('A007 – ماسحة سحب سريعة', 'A007 – Quick repair dent pulling kit'),
      t('A008 – ماسحة هوائية محمولة', 'A008 – Portable multi-hook puller'),
      t('A009 – طقم سحب الدهامات', 'A009 – Dent repair dent pulling kit'),
      t('A010 – مادة تلميع وإصلاح السطح', 'A010 – Polishing/curing kit'),
      t('A011 – معدات تلميع وتجفيف', 'A011 – Hair heavy faypac kit'),
      t('A012 – طقم أدوات مغناطيسي', 'A012 – Glue rob orthembus'),
      t('A013 – لوحة تعليق الأدوات مع عربة', 'A013 – Tool pegboard organizer with trolley'),
      t('A014 – ماسحات هوائية متعددة الرؤوس', 'A014 – Multi-head pneumatic pullers'),
    ],
    whyChooseUs: t(
      'يوفر لك هذا النظام حلًا متكاملًا يجمع بين القوة، الدقة، وسهولة الاستخدام، مما يجعله خيارًا مثاليًا لمراكز صيانة السيارات وورش السمكرة التي تبحث عن رفع كفاءة العمل وتقليل زمن الإصلاح.',
      'This system provides a complete solution combining power, precision, and ease of use — making it the ideal choice for auto body shops and repair centers seeking to boost efficiency and reduce repair time.'
    ),
    specifications: {
      ar: [
        { label: 'الموديل', value: 'FY-9018' },
        { label: 'التقنية', value: 'IGBT Inverter عالمية متطورة' },
        { label: 'ماكينة سحب الدهامات', value: 'IGBT Inverter – AC22V / AC400V / 50-60Hz / 30A' },
        { label: 'نظام الشفط الهوائي', value: '80 – 120 PSI' },
        { label: 'أنواع المعادن المدعومة', value: 'ألواح معدنية متنوعة (الألومنيوم اختياري)' },
        { label: 'تقنية التصنيع', value: 'Moulding Manufacturing Process' },
        { label: 'العربة', value: 'عربة فاخرة عملية مع لوحة تعليق أدوات' },
        { label: 'الملحقات المضمنة', value: 'A001 رافعة عرضية 4 حوامل، A002 رافعة ممددة، A003 أدوات هيكل متنوعة، A004 ماكينة لحام IGBT بشاشة LCD، A005 ماسحة سريعة، A006 حامل 2/4 نقاط، A007 طقم سحب سريع، A008 ماسحة متعددة الخطافات، A009 طقم سحب دهامات، A010 طقم تلميع، A011 معدات تجفيف ثقيلة، A012 طقم صمغ، A013 لوحة تعليق مع عربة' },
      ],
      en: [
        { label: 'Model', value: 'FY-9018' },
        { label: 'Technology', value: 'Advanced international IGBT inverter technology' },
        { label: 'Dent Puller', value: 'Professional IGBT inverter – AC22V / AC400V / 50-60Hz / 30A' },
        { label: 'Pneumatic System', value: '80 – 120 PSI' },
        { label: 'Supported Metals', value: 'Various sheet metals (Aluminium optional)' },
        { label: 'Manufacturing', value: 'Moulding manufacturing process' },
        { label: 'Trolley', value: 'Deluxe professional trolley with pegboard tool organizer' },
        { label: 'Included Accessories', value: 'A001 Crossbar lifter 4-kickstand, A002 Lengthening crossbar lifter, A003 Various car body repair tools, A004 Professional IGBT dent repair machine with LCD, A005 Quick puller, A006 2 or 4 kickstand, A007 Quick repair dent pulling kit, A008 Portable multi-hook puller, A009 Dent repair pulling kit, A010 Polishing/curing kit, A011 Hair heavy kit, A012 Glue rod kit, A013 Pegboard organizer with trolley' },
      ],
    },
    whatsappText: t(
      'السلام عليكم، أود الاستفسار عن نظام إصلاح هياكل السيارات FY-9018 / FY-9028',
      'Hello, I would like to inquire about the Car Body Repair System FY-9018 / FY-9028'
    ),
  },

  {
    id: 'infrared-lamp-2',
    name: t('شمعات تجفيف دهان بالأشعة تحت الحمراء – 2 شمعة', 'Infrared Baking Lamp – 2 Lamps'),
    category: 'misc',
    categoryLabel: t('منتجات متنوعة', 'Misc Products'),
    model: '2 Lamps',
    description: t(
      'تُعد لمبة التجفيف بالأشعة تحت الحمراء المتحركة حلًا مثاليًا لورش الدهان، حيث تعمل كمساعد فعال في تنفيذ أعمال إصلاح الدهانات الصغيرة والمتوسطة بسرعة وكفاءة عالية.',
      'The mobile infrared baking lamp is an ideal solution for paint shops, serving as an effective assistant for small and medium paint repair jobs with high speed and efficiency.'
    ),
    image: lamp2a,
    images: [lamp2a, lamp2b, lamp2c, lamp2d, lamp2e],
    specs: [
      { label: t('عدد الشمعات', 'Number of Lamps'), value: '2' },
      { label: t('القدرة الكلية', 'Total Power'), value: '2000W' },
      { label: t('مساحة التغطية', 'Coverage Area'), value: '80 × 80 cm' },
    ],
    features: [
      t('تغطي مساحة تصل إلى 80 × 80 سم', 'Coverage area up to 80 × 80 cm'),
      t('درجة حرارة تشغيل قابلة للتعديل من 60 إلى 70 درجة مئوية', 'Adjustable operating temperature from 60 to 70°C'),
      t('مزودة بمصابيح أشعة تحت الحمراء قصيرة الموجة بقدرة 2000 وات', 'Equipped with short-wave infrared lamps – 2000W total power'),
      t('نقل حرارة مباشر عبر الطلاء – أكثر كفاءة من الأنظمة التقليدية', 'Direct heat transfer through paint – more efficient than traditional systems'),
      t('مؤقت قابل للضبط من 1 إلى 99 دقيقة', 'Adjustable timer from 1 to 99 minutes'),
      t('تحكم منفصل لكل رأس إضاءة (تشغيل/إيقاف مستقل)', 'Independent control for each lamp head (on/off separately)'),
      t('مزودة بـ 4 عجلات متحركة لسهولة النقل داخل الورشة', 'Equipped with 4 mobile wheels for easy movement inside the workshop'),
      t('إمكانية تعديل الارتفاع لتناسب جميع أجزاء السيارة', 'Height-adjustable to suit all vehicle parts'),
      t('تصميم مرن يساعد في الوصول لكل المناطق بسهولة', 'Flexible design for easy access to all areas'),
      t('مناسبة لغرف الدهان – الدهانات الموضعية – الأثاث – المعجون (Putty) – الصناعات المعدنية', 'Suitable for: paint booths, spot painting, furniture, putty drying, metal industries'),
    ],
    specifications: {
      ar: [
        { label: 'عدد الشمعات', value: '2 شمعة' },
        { label: 'القدرة الكلية', value: '2000 وات' },
        { label: 'نوع الأشعة', value: 'أشعة تحت الحمراء قصيرة الموجة' },
        { label: 'مساحة التغطية', value: '80 × 80 سم' },
        { label: 'نطاق درجة الحرارة', value: '60 – 70 درجة مئوية' },
        { label: 'المؤقت الزمني', value: '1 – 99 دقيقة' },
        { label: 'التحكم', value: 'منفصل لكل رأس إضاءة' },
        { label: 'التنقل', value: '4 عجلات متحركة' },
        { label: 'التطبيقات', value: 'غرف الدهان – الموضعي – الأثاث – المعجون – الصناعات المعدنية' },
      ],
      en: [
        { label: 'Number of Lamps', value: '2 Lamps' },
        { label: 'Total Power', value: '2000W' },
        { label: 'Lamp Type', value: 'Short-wave infrared' },
        { label: 'Coverage Area', value: '80 × 80 cm' },
        { label: 'Temperature Range', value: '60 – 70°C' },
        { label: 'Timer', value: '1 – 99 minutes' },
        { label: 'Control', value: 'Independent per lamp head' },
        { label: 'Mobility', value: '4 mobile wheels' },
        { label: 'Applications', value: 'Paint booths, spot painting, furniture, putty, metal industries' },
      ],
    },
    afterSales: t(
      'نحرص على تقديم أفضل دعم لعملائنا، وفي حال وجود أي مشكلة بعد الاستلام، يمكنك التواصل معنا في أي وقت وسنقوم بتقديم الحل المناسب فورًا.',
      'We are committed to providing the best support for our customers. If any issue arises after delivery, contact us at any time and we will provide an immediate solution.'
    ),
    whatsappText: t(
      'السلام عليكم، أود الاستفسار عن شمعات التجفيف بالأشعة تحت الحمراء – 2 شمعة',
      'Hello, I would like to inquire about the Infrared Baking Lamp – 2 Lamps'
    ),
  },

  {
    id: 'infrared-lamp-6',
    name: t('شمعات تجفيف دهان بالأشعة تحت الحمراء – 6 شمعات', 'Infrared Baking Lamp – 6 Lamps'),
    category: 'misc',
    categoryLabel: t('منتجات متنوعة', 'Misc Products'),
    model: '6 Lamps',
    description: t(
      'تُعد لمبة التجفيف بالأشعة تحت الحمراء المتحركة حلًا مثاليًا لورش الدهان، حيث تعمل كمساعد فعال في تنفيذ أعمال إصلاح الدهانات الصغيرة والمتوسطة بسرعة وكفاءة عالية.',
      'The mobile infrared baking lamp is an ideal solution for paint shops, serving as an effective assistant for small and medium paint repair jobs with high speed and efficiency.'
    ),
    image: lamp6,
    images: [lamp6],
    specs: [
      { label: t('عدد الشمعات', 'Number of Lamps'), value: '6' },
      { label: t('القدرة الكلية', 'Total Power'), value: '6000W' },
      { label: t('مساحة التغطية', 'Coverage Area'), value: '100 × 120 cm' },
    ],
    features: [
      t('تغطي مساحة تصل إلى 100 × 120 سم', 'Coverage area up to 100 × 120 cm'),
      t('درجة حرارة تشغيل قابلة للتعديل من 30 إلى 100 درجة مئوية', 'Adjustable operating temperature from 30 to 100°C'),
      t('مزودة بمصابيح أشعة تحت الحمراء قصيرة الموجة بقدرة 6000 وات', 'Equipped with short-wave infrared lamps – 6000W total power'),
      t('نقل حرارة مباشر عبر الطلاء – أكثر كفاءة من الأنظمة التقليدية', 'Direct heat transfer through paint – more efficient than traditional systems'),
      t('مؤقت قابل للضبط من 1 إلى 99 دقيقة', 'Adjustable timer from 1 to 99 minutes'),
      t('تحكم منفصل لكل رأس إضاءة (تشغيل/إيقاف مستقل)', 'Independent control for each lamp head (on/off separately)'),
      t('مزودة بـ 4 عجلات متحركة لسهولة النقل داخل الورشة', 'Equipped with 4 mobile wheels for easy movement inside the workshop'),
      t('إمكانية تعديل الارتفاع لتناسب جميع أجزاء السيارة', 'Height-adjustable to suit all vehicle parts'),
      t('تصميم مرن يساعد في الوصول لكل المناطق بسهولة', 'Flexible design for easy access to all areas'),
      t('مناسبة لغرف الدهان – الدهانات الموضعية – الأثاث – المعجون (Putty) – الصناعات المعدنية', 'Suitable for: paint booths, spot painting, furniture, putty drying, metal industries'),
    ],
    specifications: {
      ar: [
        { label: 'عدد الشمعات', value: '6 شمعات' },
        { label: 'القدرة الكلية', value: '6000 وات' },
        { label: 'نوع الأشعة', value: 'أشعة تحت الحمراء قصيرة الموجة' },
        { label: 'مساحة التغطية', value: '100 × 120 سم' },
        { label: 'نطاق درجة الحرارة', value: '30 – 100 درجة مئوية' },
        { label: 'المؤقت الزمني', value: '1 – 99 دقيقة' },
        { label: 'التحكم', value: 'منفصل لكل رأس إضاءة' },
        { label: 'التنقل', value: '4 عجلات متحركة' },
        { label: 'التطبيقات', value: 'غرف الدهان – الموضعي – الأثاث – المعجون – الصناعات المعدنية' },
      ],
      en: [
        { label: 'Number of Lamps', value: '6 Lamps' },
        { label: 'Total Power', value: '6000W' },
        { label: 'Lamp Type', value: 'Short-wave infrared' },
        { label: 'Coverage Area', value: '100 × 120 cm' },
        { label: 'Temperature Range', value: '30 – 100°C' },
        { label: 'Timer', value: '1 – 99 minutes' },
        { label: 'Control', value: 'Independent per lamp head' },
        { label: 'Mobility', value: '4 mobile wheels' },
        { label: 'Applications', value: 'Paint booths, spot painting, furniture, putty, metal industries' },
      ],
    },
    afterSales: t(
      'نحرص على تقديم أفضل دعم لعملائنا، وفي حال وجود أي مشكلة بعد الاستلام، يمكنك التواصل معنا في أي وقت وسنقوم بتقديم الحل المناسب فورًا.',
      'We are committed to providing the best support for our customers. If any issue arises after delivery, contact us at any time and we will provide an immediate solution.'
    ),
    whatsappText: t(
      'السلام عليكم، أود الاستفسار عن شمعات التجفيف بالأشعة تحت الحمراء – 6 شمعات',
      'Hello, I would like to inquire about the Infrared Baking Lamp – 6 Lamps'
    ),
  },

  {
    id: 'injector-ultrasonic-cleaner-6',
    name: t('جهاز اختبار وتنظيف رشاشات الوقود – 6 سلندر', 'Fuel Injector Tester & Cleaner – 6 Cylinders'),
    category: 'misc',
    categoryLabel: t('منتجات متنوعة', 'Misc Products'),
    model: '6 Cylinders',
    description: t(
      'يُعد هذا الجهاز حلاً متكاملاً لفحص وتنظيف رشاشات الوقود لمختلف أنواع السيارات حول العالم، حيث يساهم في تحسين أداء المحرك وزيادة كفاءته، مع تقليل الانبعاثات الضارة وضمان استقرار التشغيل.',
      'A complete solution for testing and cleaning fuel injectors for all types of vehicles worldwide, improving engine performance and efficiency while reducing harmful emissions and ensuring stable operation.'
    ),
    image: cleaner,
    images: [cleaner],
    specs: [],
    features: [
      t('تنظيف واختبار رشاشات الوقود بكفاءة عالية', 'Efficient fuel injector testing and cleaning'),
      t('التنظيف العكسي (Reverse Flushing) والتنظيف الخلفي (Flush-back Cleaning)', 'Reverse Flushing and Flush-back Cleaning modes'),
      t('التنظيف بالموجات فوق الصوتية (Ultrasonic Cleaning)', 'Ultrasonic Cleaning technology'),
      t('التنظيف دون فك الرشاشات من المحرك', 'On-car cleaning without removing injectors from the engine'),
      t('محاكاة أوتوماتيكية لظروف تشغيل المحرك المختلفة (سرعات ودورات مختلفة)', 'Automatic simulation of various engine operating conditions (different speeds and cycles)'),
      t('مراقبة أداء الرشاشات أثناء التسارع والتباطؤ', 'Monitor injector performance during acceleration and deceleration'),
      t('ضبط زمن التشغيل وعرض النبضة (Pulse Width) وسرعة الدوران (RPM)', 'Adjustable pulse width, injection time, and RPM settings'),
      t('تحديد أقل زمن فتح وغلق للرشاشات لتقييم كفاءتها', 'Detect minimum opening and closing time of injectors to evaluate efficiency'),
      t('اختبار دائرة الوقود بالكامل', 'Full fuel circuit testing'),
      t('مناسب لـ 6 سلندر – تشغيل واختبار متعدد في نفس الوقت', 'Supports 6 cylinders – simultaneous multi-injector testing'),
      t('واجهة سهلة الاستخدام مع تحكم دقيق في جميع الإعدادات', 'User-friendly interface with precise control over all settings'),
      t('يساعد على تحسين استهلاك الوقود وأداء المحرك', 'Helps improve fuel consumption and engine performance'),
      t('يقلل من الأعطال الناتجة عن انسداد أو ضعف الرشاشات', 'Reduces failures caused by clogged or weak injectors'),
    ],
    specifications: {
      ar: [
        { label: 'اللون', value: 'أحمر' },
        { label: 'عدد السلندرات', value: '6' },
        { label: 'عرض النبضة (Pulse Width)', value: '0 – 20 مللي ثانية (دقة 0.1 ms)' },
        { label: 'نطاق الزمن', value: 'حتى 10,000 ثانية (قابل للتعديل)' },
        { label: 'زمن الحقن', value: '0 – 600 ثانية' },
        { label: 'ضغط النظام', value: '0 – 6.5 كجم/سم²' },
        { label: 'مصدر الطاقة', value: '110 / 220 فولت ±10% – 50 هرتز' },
        { label: 'القدرة الكهربائية', value: '250 وات' },
        { label: 'سعة خزان سائل الاختبار', value: '4 لتر' },
        { label: 'زمن التنظيف بالموجات فوق الصوتية', value: '1 – 30 دقيقة' },
        { label: 'تردد الموجات فوق الصوتية', value: '25 كيلوهرتز' },
        { label: 'سعة أنابيب الاختبار', value: '120 مل' },
        { label: 'الأبعاد', value: '62 × 53 × 74 سم' },
        { label: 'الوزن الإجمالي', value: '45 كجم' },
      ],
      en: [
        { label: 'Color', value: 'Red' },
        { label: 'Cylinders', value: '6' },
        { label: 'Pulse Width', value: '0 – 20 ms (precision 0.1 ms)' },
        { label: 'Time Range', value: 'Up to 10,000 seconds (adjustable)' },
        { label: 'Injection Time', value: '0 – 600 seconds' },
        { label: 'System Pressure', value: '0 – 6.5 kg/cm²' },
        { label: 'Power Supply', value: '110 / 220V ±10% – 50Hz' },
        { label: 'Power Consumption', value: '250W' },
        { label: 'Test Liquid Tank Capacity', value: '4 Liters' },
        { label: 'Ultrasonic Cleaning Time', value: '1 – 30 minutes' },
        { label: 'Ultrasonic Frequency', value: '25 kHz' },
        { label: 'Test Tube Capacity', value: '120 ml' },
        { label: 'Dimensions', value: '62 × 53 × 74 cm' },
        { label: 'Total Weight', value: '45 kg' },
      ],
    },
    whyChooseUs: t(
      'يوفر لك الجهاز تشخيص دقيق + تنظيف فعال + محاكاة حقيقية لظروف التشغيل، مما يجعله أداة أساسية لورش الصيانة ومراكز خدمة السيارات التي تسعى لرفع جودة الخدمة وتقليل وقت الإصلاح.',
      'This device delivers precise diagnostics + effective cleaning + real operating condition simulation, making it an essential tool for maintenance workshops and auto service centers seeking to raise service quality and reduce repair time.'
    ),
    whatsappText: t(
      'السلام عليكم، أود الاستفسار عن جهاز اختبار وتنظيف رشاشات الوقود – 6 سلندر',
      'Hello, I would like to inquire about the Fuel Injector Tester & Cleaner – 6 Cylinders'
    ),
  },

  {
    id: 'wheel-alignment-3d-zd-6',
    name: t('جهاز ضبط زوايا العجلات ثلاثي الأبعاد – موديل 3D-ZD-6', '3D Wheel Alignment – Model 3D-ZD-6'),
    category: 'misc',
    categoryLabel: t('منتجات متنوعة', 'Misc Products'),
    model: '3D-ZD-6',
    description: t(
      'جهاز ضبط زوايا العجلات ثلاثي الأبعاد بشاشة مزدوجة، يعمل بتقنية المسح الديناميكي بكاميرا HD مع تحكم إلكتروني في ارتفاع الكاميرا. يوفر دقة عالية وأداءً احترافياً لمراكز الصيانة.',
      'Double screen 3D wheel aligner with dynamic HD camera scanning and electronic controller for camera beam height adjustment. Delivers high precision and professional performance for service centers.'
    ),
    image: zd6,
    images: [zd6],
    specs: [],
    features: [
      t('تحكم إلكتروني في ارتفاع شعاع الكاميرا (أعلى وأسفل)', 'Electronic controller for camera beam height (up and down)'),
      t('شاشتان: 20 بوصة LCD و32 بوصة TV لعرض البيانات', 'Dual screens: 20" LCD and 32" TV for data display'),
      t('لوحة أمامية لتدوير الإطارات (Front Wheel Parking Turntable)', 'Front wheel parking turntable function'),
      t('إمكانية ضبط الزوايا عن طريق الدفع أو بدونه (Static & Rotate Measuring)', 'Alignment via push or without push (target rotate & static measuring)'),
      t('تقنية PRTC – لا يحتاج دفعاً أو لفاً أو برج أو تعويض للحصول على البيانات', 'PRTC Technology – No push, no roll, no tower, no compensation needed'),
      t('مزود بـ 2 كاميرا صناعية بدقة 8 ميجابكسل (3rd-Party Acceptable)', 'Equipped with 2 Industrial 8 Mega pixel cameras – 3rd-Party test acceptable'),
      t('واجهة واحدة لقراءة 27 زاوية للعجلات الأمامية والخلفية', 'One interface shows all parameters of front & rear wheels – 27 angle types'),
      t('وظيفة قياس وضبط الحجم الكلي للسيارة', 'Vehicle overall size measuring and adjustment function'),
      t('لا يحتاج إعادة معايرة مهما حدث للكاميرا أو الهدف', 'Never recalibrate regardless of camera or target changes – saves cost and energy'),
      t('وظيفة ضبط المحاذاة الأمامية (Front Alignment Function)', 'Front Alignment Function included'),
      t('فيديو توضيحي ثلاثي الأبعاد يشرح كيفية وأين تضبط الزوايا', '3D Animation video guides how and where to adjust angles'),
      t('4 لوحات هدف مرنة قابلة للتبادل', '4 flexible exchangeable target plates'),
      t('يمكن استخدامه مع رافعات 4 أعمدة أو مقصية أو حفرة (مع إشعار مسبق)', 'Compatible with 4-post, scissors lift, or pit (notify in advance for pit)'),
      t('بيانات المعايرة مخزنة داخل الكاميرا وليس الكمبيوتر', 'Calibration data stored inside camera instead of computer'),
      t('برنامج مخصص بالكامل حسب الطلب', 'Fully Customized Software available'),
    ],
    specifications: {
      ar: [
        { label: 'الموديل', value: '3D-ZD-6' },
        { label: 'مصدر الطاقة', value: '220V / 60~50Hz / 1PH' },
        { label: 'نوع الجهاز', value: 'Double Screen 3D Wheel Aligner' },
        { label: 'الكاميرات', value: 'كاميرتان صناعيتان 8 ميجابكسل' },
        { label: 'الشاشات', value: '20" LCD + 32" TV' },
        { label: 'الطابعة', value: 'HP Printer – 1 قطعة' },
        { label: 'الكمبيوتر', value: 'Branded Computer – WIN 10 English مثبت مسبقاً' },
        { label: 'لوحات الهدف', value: '4 قطع متينة' },
        { label: 'المشابك (Clamps)', value: '4 قطع (13–24 حجم جنط)' },
        { label: 'حامل عجلة القيادة', value: '1 قطعة' },
        { label: 'ضاغط البيدال', value: '1 قطعة' },
        { label: 'لوح الدوران (Turntable)', value: '2 قطعة – قطر 340mm – سماكة 49mm' },
        { label: 'Wedge', value: '2 قطعة' },
        { label: 'حجم الجنط المدعوم', value: '13 – 24 بوصة' },
        { label: 'الضمان', value: '12 شهراً للجهاز كاملاً – تحديث قاعدة البيانات مجاني مدى الحياة' },
        { label: 'SAI/KPI – دقة', value: '±3′ (±0.05°)' },
        { label: 'SAI/KPI – دقة القراءة', value: '0.6′ (0.01°)' },
        { label: 'SAI/KPI – نطاق القياس', value: '±20°' },
        { label: 'Castor – دقة', value: '±3′ (±0.05°)' },
        { label: 'Castor – دقة القراءة', value: '0.6′ (0.01°)' },
        { label: 'Castor – نطاق القياس', value: '±20°' },
        { label: 'Camber – دقة', value: '±2′ (±0.03°)' },
        { label: 'Camber – دقة القراءة', value: '0.6′ (0.01°)' },
        { label: 'Camber – نطاق القياس', value: '±10°' },
        { label: 'Toe – دقة', value: '±2′ (±0.03°)' },
        { label: 'Toe – دقة القراءة', value: '0.6′ (0.01°)' },
        { label: 'Toe – نطاق القياس', value: '±10°' },
        { label: 'Thrust Angle – دقة', value: '±2′ (±0.03°)' },
        { label: 'Thrust Angle – دقة القراءة', value: '0.6′ (0.01°)' },
        { label: 'Thrust Angle – نطاق القياس', value: '±10°' },
        { label: 'Track Width', value: 'دقة ±2mm – قراءة 0.1mm – نطاق 1200–2200mm' },
        { label: 'Wheelbase', value: 'دقة ±2mm – قراءة 0.1mm – نطاق 1600–4200mm' },
        { label: 'Wheel Offset', value: 'دقة ±2mm – قراءة 0.1mm – نطاق ±200mm' },
        { label: 'Lateral Deviation', value: 'دقة ±2mm – قراءة 0.1mm – نطاق ±200mm' },
        { label: 'Castor Offset', value: 'دقة ±2mm – قراءة 0.1mm – نطاق ±200mm' },
      ],
      en: [
        { label: 'Model', value: '3D-ZD-6' },
        { label: 'Power Supply', value: '220V / 60~50Hz / 1PH' },
        { label: 'Type', value: 'Double Screen 3D Wheel Aligner' },
        { label: 'Cameras', value: '2 Industrial 8 Mega pixel cameras' },
        { label: 'Monitors', value: '20" LCD + 32" TV' },
        { label: 'Printer', value: 'HP Printer – 1 pc' },
        { label: 'Computer', value: 'Branded Computer – WIN 10 English Preinstalled' },
        { label: 'Target Plates', value: '4 pcs – durable' },
        { label: 'Clamps', value: '4 pcs (13–24 rim size)' },
        { label: 'Steering Wheel Holder', value: '1 pc' },
        { label: 'Brake Pedal Depressor', value: '1 pc' },
        { label: 'Turntable Plate', value: '2 pcs – diameter 340mm – thickness 49mm' },
        { label: 'Wedge', value: '2 pcs' },
        { label: 'Rim Size Support', value: '13 – 24 inch' },
        { label: 'Warranty', value: '12 months full machine – lifetime free database update' },
        { label: 'SAI/KPI – Precision', value: '±3′ (±0.05°)' },
        { label: 'SAI/KPI – Resolution', value: '0.6′ (0.01°)' },
        { label: 'SAI/KPI – Measure Range', value: '±20°' },
        { label: 'Castor – Precision', value: '±3′ (±0.05°)' },
        { label: 'Castor – Resolution', value: '0.6′ (0.01°)' },
        { label: 'Castor – Measure Range', value: '±20°' },
        { label: 'Camber – Precision', value: '±2′ (±0.03°)' },
        { label: 'Camber – Resolution', value: '0.6′ (0.01°)' },
        { label: 'Camber – Measure Range', value: '±10°' },
        { label: 'Toe – Precision', value: '±2′ (±0.03°)' },
        { label: 'Toe – Resolution', value: '0.6′ (0.01°)' },
        { label: 'Toe – Measure Range', value: '±10°' },
        { label: 'Thrust Angle – Precision', value: '±2′ (±0.03°)' },
        { label: 'Thrust Angle – Resolution', value: '0.6′ (0.01°)' },
        { label: 'Thrust Angle – Measure Range', value: '±10°' },
        { label: 'Track Width', value: 'Precision ±2mm – Resolution 0.1mm – Range 1200–2200mm' },
        { label: 'Wheelbase', value: 'Precision ±2mm – Resolution 0.1mm – Range 1600–4200mm' },
        { label: 'Wheel Offset', value: 'Precision ±2mm – Resolution 0.1mm – Range ±200mm' },
        { label: 'Lateral Deviation', value: 'Precision ±2mm – Resolution 0.1mm – Range ±200mm' },
        { label: 'Castor Offset', value: 'Precision ±2mm – Resolution 0.1mm – Range ±200mm' },
      ],
    },
    whatsappText: t(
      'السلام عليكم، أود الاستفسار عن جهاز ضبط زوايا العجلات 3D-ZD-6',
      'Hello, I would like to inquire about the 3D Wheel Alignment 3D-ZD-6'
    ),
  },

  {
    id: 'wheel-alignment-3d-zd-9-pro',
    name: t('جهاز ضبط زوايا العجلات ثلاثي الأبعاد المتقدم – موديل 3D-ZD-9 Pro', 'Advanced 3D Wheel Alignment – Model 3D-ZD-9 Pro'),
    category: 'misc',
    categoryLabel: t('منتجات متنوعة', 'Misc Products'),
    model: '3D-ZD-9 Pro',
    description: t(
      'جهاز ضبط زوايا متطور ومتحرك بالكامل يعمل بالكاميرا والتحكم عن بُعد، مزود بنظام Align Assist وحساب مواصفات الـ Shim، ويدعم تطبيقات الحفرة والرافعة مع برمجيات متقدمة للدقة القصوى.',
      'Advanced moveable computerized 3D wheel alignment system with HD camera, remote controller, Align Assist System, and Shim Specification Calculate System. Supports pit and lift applications with high-precision software.'
    ),
    image: zd9pro,
    images: [zd9pro],
    specs: [],
    features: [
      t('نظام Align Assist و Shim Specification Calculate System', 'Align Assist System & Shim Specification Calculate System'),
      t('خيار عجلة قيادة يمين ويسار', 'Left and right steering wheel option'),
      t('وظيفة المحور الأمامي لتسهيل عملية الضبط', 'Front wheel function to make alignment easy'),
      t('مصمم لتطبيقات الحفرة والرافعة (Pit and Lift Application)', 'Designed for Pit and Lift Application'),
      t('برمجيات متقدمة بدقة عالية جداً', 'Advanced software with high precision'),
      t('كاميرتان Hi-Q بدقة 5 ميجابكسل', '2 Hi-Q 5 Mega pixel cameras included'),
      t('تقنية PRTC – لا يحتاج دفعاً أو لفاً أو برج أو تعويض', 'PRTC Technology – No push, no roll, no tower, no compensation needed'),
      t('مؤشرات ضوئية ترشد المشغل في جميع مراحل العمل', 'Light indications to guide operator through all phases of work'),
      t('ضبط التوجيه بزاوية 10 أو 20 درجة مع طقم تمديدات', '10 or 20 degree steering maximum with extensions kit'),
      t('صفحة ملخص مع بيانات حية وصفحة نظيفة سهلة القراءة', 'Summary page with live data and clean easy-to-read page'),
      t('تحليل مواصفات الإطار لضبط دقيق لقياسات أدق', 'Tyre Specification Manually setting input for precision measurement'),
      t('صفحة معلومات مفيدة لتحديد ما إذا كانت السيارة تعرضت لحادث', 'Useful information page to determine if vehicle was in an accident'),
      t('تكبير صفحة زاوية الكاستور (Concerned Angle Page Zoom)', 'Concerned Angle Page Zoom'),
      t('واجهة رسومية حديثة مع أزرار تحكم ظاهرة دائماً', 'Modern Graphic Interface with full functionality and visible control buttons'),
      t('استدعاء بيانات السيارة تلقائياً من قاعدة البيانات بوظيفة البحث', 'Vehicle data recalled from database automatically via searching function'),
      t('إجراءات متعددة لتعويض الجري الدائري (Runout Compensation)', 'Various optimised procedures for runout compensation'),
      t('لا تحتاج إعادة معايرة مهما حدث للكاميرا أو الهدف', 'Never Recalibrate – no matter camera or target repair or maintenance'),
    ],
    specifications: {
      ar: [
        { label: 'الموديل', value: '3D-ZD-99PRO' },
        { label: 'مصدر الطاقة', value: '220V / 60~50Hz / 1PH' },
        { label: 'نوع الجهاز', value: 'Advanced Moveable Computerized 3D Wheel Alignment' },
        { label: 'الكاميرات', value: 'كاميرتان Hi-Q 5 ميجابكسل' },
        { label: 'التحكم', value: 'Remote Controller (تحكم عن بُعد)' },
        { label: 'حجم الجنط المدعوم', value: '13 – 24 بوصة' },
        { label: 'SAI/KPI – دقة', value: '±3′ (±0.05°)' },
        { label: 'SAI/KPI – دقة القراءة', value: '0.6′ (0.01°)' },
        { label: 'SAI/KPI – نطاق القياس', value: '±20°' },
        { label: 'Castor – دقة', value: '±3′ (±0.05°)' },
        { label: 'Castor – دقة القراءة', value: '0.6′ (0.01°)' },
        { label: 'Castor – نطاق القياس', value: '±20°' },
        { label: 'Camber – دقة', value: '±2′ (±0.03°)' },
        { label: 'Camber – دقة القراءة', value: '0.6′ (0.01°)' },
        { label: 'Camber – نطاق القياس', value: '±10°' },
        { label: 'Toe – دقة', value: '±2′ (±0.03°)' },
        { label: 'Toe – دقة القراءة', value: '0.6′ (0.01°)' },
        { label: 'Toe – نطاق القياس', value: '±10°' },
        { label: 'Thrust Angle – دقة', value: '±2′ (±0.03°)' },
        { label: 'Thrust Angle – دقة القراءة', value: '0.6′ (0.01°)' },
        { label: 'Thrust Angle – نطاق القياس', value: '±10°' },
        { label: 'Track Width', value: 'دقة ±2mm – قراءة 0.1mm – نطاق 1200–2200mm' },
        { label: 'Wheelbase', value: 'دقة ±2mm – قراءة 0.1mm – نطاق 1600–4200mm' },
        { label: 'Wheel Offset', value: 'دقة ±2mm – قراءة 0.1mm – نطاق ±200mm' },
        { label: 'Lateral Deviation', value: 'دقة ±2mm – قراءة 0.1mm – نطاق ±200mm' },
        { label: 'Castor Offset', value: 'دقة ±2mm – قراءة 0.1mm – نطاق ±200mm' },
      ],
      en: [
        { label: 'Model', value: '3D-ZD-99PRO' },
        { label: 'Power Supply', value: '220V / 60~50Hz / 1PH' },
        { label: 'Type', value: 'Advanced Moveable Computerized 3D Wheel Alignment' },
        { label: 'Cameras', value: '2 Hi-Q 5 Mega pixel cameras' },
        { label: 'Control', value: 'Remote Controller' },
        { label: 'Rim Size Support', value: '13 – 24 inch' },
        { label: 'SAI/KPI – Precision', value: '±3′ (±0.05°)' },
        { label: 'SAI/KPI – Resolution', value: '0.6′ (0.01°)' },
        { label: 'SAI/KPI – Measure Range', value: '±20°' },
        { label: 'Castor – Precision', value: '±3′ (±0.05°)' },
        { label: 'Castor – Resolution', value: '0.6′ (0.01°)' },
        { label: 'Castor – Measure Range', value: '±20°' },
        { label: 'Camber – Precision', value: '±2′ (±0.03°)' },
        { label: 'Camber – Resolution', value: '0.6′ (0.01°)' },
        { label: 'Camber – Measure Range', value: '±10°' },
        { label: 'Toe – Precision', value: '±2′ (±0.03°)' },
        { label: 'Toe – Resolution', value: '0.6′ (0.01°)' },
        { label: 'Toe – Measure Range', value: '±10°' },
        { label: 'Thrust Angle – Precision', value: '±2′ (±0.03°)' },
        { label: 'Thrust Angle – Resolution', value: '0.6′ (0.01°)' },
        { label: 'Thrust Angle – Measure Range', value: '±10°' },
        { label: 'Track Width', value: 'Precision ±2mm – Resolution 0.1mm – Range 1200–2200mm' },
        { label: 'Wheelbase', value: 'Precision ±2mm – Resolution 0.1mm – Range 1600–4200mm' },
        { label: 'Wheel Offset', value: 'Precision ±2mm – Resolution 0.1mm – Range ±200mm' },
        { label: 'Lateral Deviation', value: 'Precision ±2mm – Resolution 0.1mm – Range ±200mm' },
        { label: 'Castor Offset', value: 'Precision ±2mm – Resolution 0.1mm – Range ±200mm' },
      ],
    },
    whatsappText: t(
      'السلام عليكم، أود الاستفسار عن جهاز ضبط زوايا العجلات 3D-ZD-9 Pro',
      'Hello, I would like to inquire about the 3D Wheel Alignment 3D-ZD-9 Pro'
    ),
  },

];

export const categories = [
  { id: 'all', ar: 'الكل', en: 'All' },
  { id: 'spray-booth', ar: 'كابينات الرش', en: 'Spray Booths' },
  { id: 'car-lift', ar: 'روافع السيارات', en: 'Car Lifts' },
  { id: 'misc', ar: 'منتجات متنوعة', en: 'Misc Products' },
  { id: 'compressor', ar: 'ضاغطات الهواء', en: 'Air Compressors' },
];

export const getProductById = (id: string) => products.find(p => p.id === id);

// Product group definitions for variant selection pages
export interface ProductGroup {
  groupId: string;
  name: { ar: string; en: string };
  category: string;
  categoryLabel: { ar: string; en: string };
  description?: { ar: string; en: string };
}

export const productGroups: ProductGroup[] = [];

export const getProductGroup = (groupId: string) => productGroups.find(g => g.groupId === groupId);
export const getProductsByGroup = (groupId: string) => products.filter((p: any) => p.parentId === groupId);
