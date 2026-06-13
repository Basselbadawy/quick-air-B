import { MessageCircle, Phone, Facebook, Instagram } from 'lucide-react'
import { waLink, telLink, PHONE } from '../data'

export function CTASection({ onBook }) {
  const waDefault = `مرحباً Quick Air Zagazig!\nأريد الاستفسار عن رحلاتكم السياحية.`
  return (
    <section className="px-4 py-16">
      <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden relative"
        style={{ background: 'linear-gradient(135deg,#C1121F,#E63946 50%,#c1121f)' }}>
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative z-10 text-center px-6 py-14">
          <h2 className="text-[clamp(24px,4vw,40px)] font-black text-white mb-3">
            جاهز تحجز رحلتك؟ ✈️
          </h2>
          <p className="text-[15px] text-white/80 mb-8">
            تواصل معنا على واتساب أو اتصل مباشرة — ردنا خلال دقائق
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button onClick={onBook}
              className="px-8 py-3.5 bg-white text-[#C1121F] font-black text-[15px]
                rounded-full transition-all hover:shadow-xl hover:-translate-y-0.5">
              احجز باقة الآن
            </button>
            <a href={waLink(waDefault)} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-[15px] text-white
                bg-white/15 backdrop-blur-sm border-2 border-white/40
                hover:bg-white/25 hover:border-white transition-all">
              <MessageCircle size={17} /> واتساب مباشر
            </a>
            <a href={telLink()}
              className="flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-[15px] text-white
                bg-white/15 backdrop-blur-sm border-2 border-white/40
                hover:bg-white/25 hover:border-white transition-all">
              <Phone size={17} /> {PHONE}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const waDefault = `مرحباً Quick Air Zagazig!\nأريد الاستفسار عن رحلاتكم.`
  return (
    <footer className="bg-[#1E293B] border-t border-white/[.06] px-4 pt-12 pb-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="text-[20px] font-black text-[#E63946] mb-1">Quick Air Zagazig</div>
          <div className="text-[11px] text-slate-500 mb-3">كويك اير للسياحة والطيران — الزقازيق</div>
          <p className="text-[13px] text-slate-400 leading-relaxed mb-4 max-w-sm">
            وكالة سياحة متخصصة في الرحلات الداخلية وتذاكر الطيران. خبرة أكثر من 10 سنوات في خدمة أهل الزقازيق والشرقية.
          </p>
          <div className="flex gap-2">
            {[
              { Icon: Facebook,       href: '#' },
              { Icon: Instagram,      href: '#' },
              { Icon: MessageCircle,  href: waLink(waDefault) },
              { Icon: Phone,          href: telLink() },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} target={href.startsWith('http') ? '_blank' : undefined}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center
                  text-slate-400 hover:border-[#E63946] hover:text-[#E63946] transition-colors">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Destinations */}
        <div>
          <h4 className="text-[13px] font-bold text-white mb-3">الوجهات</h4>
          <ul className="space-y-2">
            {['مرسى مطروح', 'الغردقة', 'شرم الشيخ', 'دهب', 'الأقصر وأسوان', 'العمرة والحج'].map(d => (
              <li key={d}>
                <a href="#destinations" className="text-[12px] text-slate-400 hover:text-[#E63946] transition-colors">
                  {d}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[13px] font-bold text-white mb-3">تواصل معنا</h4>
          <ul className="space-y-2">
            <li><a href={telLink()} className="flex items-center gap-2 text-[12px] text-slate-400 hover:text-[#E63946] transition-colors"><Phone size={12} /> {PHONE}</a></li>
            <li><a href={waLink(waDefault)} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[12px] text-slate-400 hover:text-[#E63946] transition-colors"><MessageCircle size={12} /> واتساب</a></li>
            <li><span className="text-[12px] text-slate-400">📍 الزقازيق، الشرقية، مصر</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[.06] pt-5 flex items-center justify-between flex-wrap gap-3
        text-[12px] text-slate-500">
        <span>© 2026 <span className="text-[#E63946] font-bold">Quick Air Zagazig</span> — جميع الحقوق محفوظة</span>
        <span>صُنع بـ ❤️ في الزقازيق</span>
      </div>
    </footer>
  )
}
