import { Phone, MessageCircle, Plane, Bed, Car, Map } from 'lucide-react'
import SectionHead from './SectionHead'
import { SkeletonCard } from './Skeleton'
import { waLink, telLink } from '../data'

const FALLBACK = 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600&q=75'

const INCLUDE_ICONS = {
  'تذكرة طيران': Plane,
  'فندق': Bed,
  'مواصلات': Car,
  'برنامج': Map,
}

function PackageCard({ pkg, idx }) {
  const img = (pkg.images || [])[0] || FALLBACK
  const dest = pkg.dest_name || pkg.destinations?.name || ''
  const includes = pkg.includes || []

  const waMsg = `مرحباً Quick Air Zagazig! 🛫\n\nأريد الاستفسار عن:\n🌍 الباقة: ${pkg.title}\n📍 الوجهة: ${dest}\n💰 السعر: ${(pkg.price_per_person || 0).toLocaleString('ar-EG')} جنيه للفرد\n🗓 المدة: ${pkg.duration_days} أيام / ${pkg.duration_days - 1} ليالي\n${pkg.extra ? `📝 ${pkg.extra}\n` : ''}\nمن فضلكم أرسلوا لي التفاصيل الكاملة.`

  return (
    <div className="card-hover bg-navy border border-white/[.06] rounded-2xl overflow-hidden
      animate-fade-up" style={{ animationDelay: `${idx * 0.07}s` }}>

      {/* Image */}
      <div className="relative overflow-hidden">
        <img src={img} alt={pkg.title} onError={e => { e.target.src = FALLBACK }}
          className="w-full aspect-video object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy" />
        <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[12px] font-bold
          bg-[#E63946] text-white">
          {pkg.duration_days} أيام
        </span>
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold
          bg-navy/80 backdrop-blur-sm text-slate-300 border border-white/10">
          {pkg.type === 'ticket' ? 'تذكرة' : 'باقة كاملة'}
        </span>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="text-[11px] font-bold text-[#E63946] uppercase tracking-wider mb-1">{dest}</div>
        <h3 className="text-[16px] font-black text-white leading-snug mb-3">{pkg.title}</h3>

        {/* Includes */}
        <div className="flex flex-wrap gap-3 mb-3">
          {includes.map(inc => {
            const Icon = INCLUDE_ICONS[inc]
            return (
              <span key={inc} className="flex items-center gap-1.5 text-[12px] text-slate-400">
                {Icon && <Icon size={13} className="text-[#E63946]" />}
                {inc}
              </span>
            )
          })}
        </div>

        {/* Extra info */}
        {pkg.extra && (
          <p className="text-[12px] text-slate-500 bg-white/[.03] rounded-lg px-3 py-2 mb-3 leading-relaxed">
            {pkg.extra}
          </p>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-white/[.06] gap-3 flex-wrap">
          <div>
            <div className="text-[10px] text-slate-500 mb-0.5">السعر للفرد</div>
            <div className="text-[22px] font-black text-white">
              {(pkg.price_per_person || 0).toLocaleString('ar-EG')}
              <span className="text-[13px] text-slate-500 font-normal"> جـ</span>
            </div>
          </div>

          {/* Dual action buttons */}
          <div className="flex gap-2">
            <a href={waLink(waMsg)} target="_blank" rel="noreferrer"
              className="btn-wa flex items-center gap-1.5 px-3 py-2.5 rounded-xl
                text-[12px] font-bold">
              <MessageCircle size={14} /> واتساب
            </a>
            <a href={telLink()}
              className="btn-call flex items-center gap-1.5 px-3 py-2.5 rounded-xl
                text-[12px] font-bold">
              <Phone size={14} /> اتصال
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Packages({ packages, loading }) {
  return (
    <section id="packages"
      className="py-20 px-4"
      style={{ background: 'linear-gradient(to bottom,#0F172A,#1E293B,#0F172A)' }}>
      <div className="max-w-7xl mx-auto">
        <SectionHead tag="الباقات" title="باقاتنا" accent="المميزة"
          sub="كل تفاصيل رحلتك جاهزة — انت بس قرر وإحنا نعمل الباقي" />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {loading
            ? <SkeletonCard count={6} />
            : packages.length === 0
              ? <div className="col-span-3 text-center py-16 text-slate-500">
                  <div className="text-4xl mb-3">🎫</div>
                  لا توجد باقات متاحة حالياً
                </div>
              : packages.map((p, i) => <PackageCard key={p.id} pkg={p} idx={i} />)
          }
        </div>
      </div>
    </section>
  )
}
