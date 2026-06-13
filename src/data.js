import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://mbzqmgaizxscaxulrnfc.supabase.co',
  'sb_publishable_UNSyhCT9_P5mRdhLWDjSfw_vSgY9YIp'
)

export const WHATSAPP = '201063278868'
export const PHONE    = '01063278868'

export const waLink = (msg) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`

export const telLink = () => `tel:+2${PHONE}`

/* ─── DEMO DATA (shown when Supabase tables are empty) ─── */
export const DEMO_DESTINATIONS = [
  {
    id: 'd1', name: 'مرسى مطروح', region: 'بحري',
    cover_image: 'https://images.unsplash.com/photo-1542501742-03e5e3f6a79b?w=700&q=75',
    description: 'أجمل شواطئ البحر الأبيض المتوسط — رمال بيضاء ومياه فيروزية',
    highlights: ['شاطئ كليوباترا', 'شاطئ روميل', 'سوق ليبيا', 'كورنيش مطروح'],
    min_price: 4500, featured: true,
  },
  {
    id: 'd2', name: 'الغردقة', region: 'بحري',
    cover_image: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=700&q=75',
    description: 'لؤلؤة البحر الأحمر — غوص وسنوركل وشعاب مرجانية ساحرة',
    highlights: ['غوص', 'أكوا بارك', 'البازار', 'كورنيش'],
    min_price: 6350, featured: true,
  },
  {
    id: 'd3', name: 'شرم الشيخ', region: 'بحري',
    cover_image: 'https://images.unsplash.com/photo-1591179782453-7cf39c6a4e6f?w=700&q=75',
    description: 'جنة الغواصين على خليج العقبة — حياة ليلية وشعاب خلابة',
    highlights: ['خليج نعمه', 'ريف مرجاني', 'سوق الشرم', 'نادي البحر'],
    min_price: 5000, featured: true,
  },
  {
    id: 'd4', name: 'دهب', region: 'بحري',
    cover_image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&q=75',
    description: 'الجوهرة الهادئة على خليج العقبة — غوص حر وأجواء بوهيمية',
    highlights: ['الثقب الأزرق', 'الممر', 'شارع المسيلة', 'غوص حر'],
    min_price: 4200, featured: false,
  },
  {
    id: 'd5', name: 'الأقصر وأسوان', region: 'تاريخي',
    cover_image: 'https://images.unsplash.com/photo-1562679299-0d1e4afe3f7e?w=700&q=75',
    description: 'عاصمة الفراعنة — معابد آلاف السنين على ضفاف النيل',
    highlights: ['وادي الملوك', 'الكرنك', 'أبو سمبل', 'فلوكة'],
    min_price: 3500, featured: false,
  },
  {
    id: 'd6', name: 'العمرة والحج', region: 'عمرة',
    cover_image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=700&q=75',
    description: 'باقات العمرة طوال العام بأفضل الأسعار من الزقازيق مباشرة',
    highlights: ['تأشيرة مضمونة', 'فندق قريب الحرم', 'مواصلات', 'مرشد معتمد'],
    min_price: 15000, featured: true,
  },
]

export const DEMO_PACKAGES = [
  /* ── مرسى مطروح ── */
  {
    id: 'p1', destination_id: 'd1',
    title: 'برج السرايا — مطروح صيف 2026', type: 'package',
    duration_days: 6, price_per_person: 4500,
    includes: ['تذكرة طيران', 'فندق', 'مواصلات', 'برنامج'],
    images: ['https://images.unsplash.com/photo-1542501742-03e5e3f6a79b?w=700&q=75'],
    available: true,
    extra: '6 أيام / 5 ليالي | شقة غرفتين أرضي | ذهاب وعودة + أتوبيسات شواطئ',
    dest_name: 'مرسى مطروح',
  },
  {
    id: 'p2', destination_id: 'd1',
    title: 'عمارة البتول — بانوراما البحر', type: 'package',
    duration_days: 6, price_per_person: 9500,
    includes: ['تذكرة طيران', 'فندق', 'مواصلات', 'برنامج'],
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&q=75'],
    available: true,
    extra: '6 أيام / 5 ليالي | بانوراما كامل | إطلالة بحرية خلابة',
    dest_name: 'مرسى مطروح',
  },
  {
    id: 'p3', destination_id: 'd1',
    title: 'برج الريتاج — المالديف المصرية', type: 'package',
    duration_days: 6, price_per_person: 14000,
    includes: ['تذكرة طيران', 'فندق', 'مواصلات', 'برنامج'],
    images: ['https://images.unsplash.com/photo-1519046904884-53103b34b206?w=700&q=75'],
    available: true,
    extra: '6 أيام / 5 ليالي | بانوراما فيو | أرقى أبراج مطروح 2026',
    dest_name: 'مرسى مطروح',
  },
  /* ── الغردقة ── */
  {
    id: 'p4', destination_id: 'd2',
    title: 'فوكس أكوا بارك — فطور وعشاء', type: 'package',
    duration_days: 4, price_per_person: 6350,
    includes: ['تذكرة طيران', 'فندق', 'مواصلات'],
    images: ['https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=700&q=75'],
    available: true,
    extra: '4 أيام / 3 ليالي | دبل للفرد | إقامة كاملة 12,500 جـ | كرسي إضافي 850 جـ',
    dest_name: 'الغردقة',
  },
  {
    id: 'p5', destination_id: 'd2',
    title: 'مون بيتش — إقامة كاملة', type: 'package',
    duration_days: 4, price_per_person: 12800,
    includes: ['تذكرة طيران', 'فندق', 'مواصلات'],
    images: ['https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=700&q=75'],
    available: true,
    extra: '4 أيام / 3 ليالي | دبل للفرد | فطور وعشاء 7,100 جـ | كرسي إضافي 850 جـ',
    dest_name: 'الغردقة',
  },
  {
    id: 'p6', destination_id: 'd2',
    title: 'أمواج بيتش — تجربة فاخرة', type: 'package',
    duration_days: 4, price_per_person: 19700,
    includes: ['تذكرة طيران', 'فندق', 'مواصلات'],
    images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700&q=75'],
    available: true,
    extra: '4 أيام / 3 ليالي | دبل للفرد | فطور وعشاء 12,200 جـ | إقامة كاملة 19,700 جـ',
    dest_name: 'الغردقة',
  },
  /* ── شرم الشيخ ── */
  {
    id: 'p7', destination_id: 'd3',
    title: 'شرم كليف — عرض الصيف', type: 'package',
    duration_days: 4, price_per_person: 5000,
    includes: ['تذكرة طيران', 'فندق', 'مواصلات'],
    images: ['https://images.unsplash.com/photo-1591179782453-7cf39c6a4e6f?w=700&q=75'],
    available: true,
    extra: '4 أيام / 3 ليالي | دبل شامل انتقالات | إقامة كاملة 10,850 جـ',
    dest_name: 'شرم الشيخ',
  },
  {
    id: 'p8', destination_id: 'd3',
    title: 'ريحانه ريزورت — فطور وعشاء', type: 'package',
    duration_days: 4, price_per_person: 9950,
    includes: ['تذكرة طيران', 'فندق', 'مواصلات'],
    images: ['https://images.unsplash.com/photo-1582719508461-905c673771fd?w=700&q=75'],
    available: true,
    extra: '4 أيام / 3 ليالي | دبل شامل انتقالات | إقامة كاملة 18,950 جـ',
    dest_name: 'شرم الشيخ',
  },
  {
    id: 'p9', destination_id: 'd3',
    title: 'سفير شلالات — تجربة فاخرة', type: 'package',
    duration_days: 4, price_per_person: 10400,
    includes: ['تذكرة طيران', 'فندق', 'مواصلات'],
    images: ['https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=700&q=75'],
    available: true,
    extra: '4 أيام / 3 ليالي | دبل شامل انتقالات | إقامة كاملة 19,850 جـ',
    dest_name: 'شرم الشيخ',
  },
]

export const DEMO_DAY_TRIPS = [
  {
    id: 'dt1', name: 'الإسكندرية', emoji: '🏛',
    image: 'https://images.unsplash.com/photo-1548101119-b825bba3a6e0?w=600&q=75',
    desc: 'عروس البحر المتوسط — مكتبة الإسكندرية، قلعة قايتباي، كورنيش المندرة',
    price: 'من 350 جـ', duration: 'يوم كامل',
  },
  {
    id: 'dt2', name: 'العين السخنة', emoji: '🌊',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=75',
    desc: 'أقرب بحر لأهل الزقازيق — يوم ترفيهي على شاطئ البحر الأحمر',
    price: 'من 280 جـ', duration: 'يوم كامل',
  },
  {
    id: 'dt3', name: 'بورسعيد', emoji: '🚢',
    image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=600&q=75',
    desc: 'مدينة قناة السويس — تسوق معفي من الضرائب وأجواء بحرية مميزة',
    price: 'من 320 جـ', duration: 'يوم كامل',
  },
]
