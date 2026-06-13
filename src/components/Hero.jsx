import { useState } from 'react'
import { Search, PlaneTakeoff } from 'lucide-react'

const REGIONS   = ['الكل', 'بحري', 'تاريخي', 'صحراوي', 'ديني', 'عمرة']
const TRIP_TYPES = ['الكل', 'باقة كاملة', 'تذكرة فقط', 'رحلة يوم واحد']

export default function Hero({ onSearch }) {
  const [dest, setDest]   = useState('')
  const [type, setType]   = useState('')
  const [budget, setBudget] = useState('')

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* BG layers */}
      <div className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 65% 55% at 75% 35%, rgba(230,57,70,.2) 0%, transparent 65%),
            radial-gradient(ellipse 45% 50% at 15% 75%, rgba(230,57,70,.08) 0%, transparent 60%),
            linear-gradient(160deg,#0F172A 0%,#1a2035 60%,#0F172A 100%)`
        }} />
      <div className="absolute inset-0 hero-pattern" />

      {/* Floating decorative orbs */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #E63946, transparent)' }} />
      <div className="absolute bottom-1/4 right-10 w-48 h-48 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #F59E0B, transparent)' }} />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
          bg-[rgba(230,57,70,.1)] border border-[rgba(230,57,70,.3)]
          text-[12px] font-bold text-[#E63946] mb-7 animate-fade-down">
          <PlaneTakeoff size={14} />
          الوكالة الأولى في الزقازيق للسياحة والطيران
        </div>

        {/* Title */}
        <h1 className="text-[clamp(38px,7vw,74px)] font-black leading-[1.15] text-white mb-5
          animate-fade-down [animation-delay:.1s]">
          سفرك يبدأ مع
          <span className="text-[#E63946] text-shadow-red"> كويك اير</span>
        </h1>

        <p className="text-[17px] leading-[1.9] text-slate-400 mb-10
          animate-fade-down [animation-delay:.18s]">
          باقات سياحية داخلية وتذاكر طيران بأفضل الأسعار<br/>
          من قلب الزقازيق لكل مكان في مصر
        </p>

        {/* Search box */}
        <div className="animate-fade-down [animation-delay:.26s]
          bg-white/[.04] backdrop-blur-xl border border-white/[.09] rounded-2xl p-5
          grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold text-[#E63946] uppercase tracking-wider">المنطقة</label>
            <select value={dest} onChange={e => setDest(e.target.value)}
              className="bg-white/[.07] border border-white/10 rounded-lg px-3 py-2.5
                text-white text-[14px] outline-none focus:border-[#E63946] transition-colors">
              {REGIONS.map(r => <option key={r} value={r === 'الكل' ? '' : r}>{r}</option>)}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold text-[#E63946] uppercase tracking-wider">نوع الرحلة</label>
            <select value={type} onChange={e => setType(e.target.value)}
              className="bg-white/[.07] border border-white/10 rounded-lg px-3 py-2.5
                text-white text-[14px] outline-none focus:border-[#E63946] transition-colors">
              {TRIP_TYPES.map(t => <option key={t} value={t === 'الكل' ? '' : t}>{t}</option>)}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold text-[#E63946] uppercase tracking-wider">الميزانية (جـ)</label>
            <input type="number" placeholder="مثال: 8000" value={budget}
              onChange={e => setBudget(e.target.value)}
              className="bg-white/[.07] border border-white/10 rounded-lg px-3 py-2.5
                text-white text-[14px] outline-none focus:border-[#E63946] transition-colors placeholder:text-slate-500" />
          </div>

          <button
            onClick={() => onSearch({ dest, type, budget })}
            className="sm:col-span-3 flex items-center justify-center gap-2
              bg-[#E63946] hover:bg-[#C1121F] text-white font-bold text-[15px]
              rounded-lg py-3 transition-all duration-200
              hover:shadow-[0_8px_24px_rgba(230,57,70,.4)] hover:-translate-y-0.5">
            <Search size={17} /> ابحث عن رحلتك
          </button>
        </div>

      </div>
    </section>
  )
}
