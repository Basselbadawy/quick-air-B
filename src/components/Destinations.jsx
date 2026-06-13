import { useState } from 'react'
import { Filter, ChevronDown, Globe, Waves, Building2, Mountain, Moon, Star } from 'lucide-react'
import SectionHead from './SectionHead'
import { SkeletonCard } from './Skeleton'

const REGIONS = [
  { id: 'all',     label: 'الكل',      icon: Globe,      color: 'text-slate-400' },
  { id: 'بحري',   label: 'بحري',      icon: Waves,      color: 'text-blue-400' },
  { id: 'تاريخي', label: 'تاريخي',    icon: Building2,  color: 'text-amber-400' },
  { id: 'صحراوي', label: 'صحراوي',   icon: Mountain,   color: 'text-orange-400' },
  { id: 'ديني',   label: 'ديني',      icon: Moon,       color: 'text-emerald-400' },
  { id: 'عمرة',   label: 'عمرة وحج',  icon: Star,       color: 'text-yellow-400' },
]

const FALLBACK = 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600&q=75'

function DestCard({ dest, onBook, idx }) {
  return (
    <div className="card-hover bg-[#1E293B] border border-white/[.06] rounded-2xl overflow-hidden
      cursor-pointer animate-fade-up" style={{ animationDelay: `${idx * 0.07}s` }}>
      <div className="overflow-hidden relative">
        <img
          src={dest.cover_image || FALLBACK}
          alt={dest.name}
          onError={e => { e.target.src = FALLBACK }}
          className="w-full aspect-video object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[11px] font-bold
          bg-navy/80 backdrop-blur-sm text-[#E63946] border border-[rgba(230,57,70,.3)]">
          {dest.region}
        </span>
        {dest.featured && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold
            bg-[#F59E0B] text-navy">
            ⭐ مميز
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-[18px] font-black text-white mb-1.5">{dest.name}</h3>
        <p className="text-[12px] text-slate-500 leading-relaxed mb-3 line-clamp-2">{dest.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {(dest.highlights || []).slice(0, 3).map(h => (
            <span key={h} className="px-2.5 py-1 rounded-full text-[11px] font-semibold
              bg-[rgba(230,57,70,.1)] border border-[rgba(230,57,70,.2)] text-[#E63946]">
              {h}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-white/[.06]">
          <div>
            <div className="text-[11px] text-slate-500">تبدأ من</div>
            <div className="text-[20px] font-black text-white">
              {(dest.min_price || 0).toLocaleString('ar-EG')}
              <span className="text-[13px] text-slate-500 font-normal"> جـ</span>
            </div>
          </div>
          <button onClick={() => onBook(dest.name)}
            className="px-4 py-2 rounded-xl bg-[#E63946] hover:bg-[#C1121F]
              text-white text-[12px] font-bold transition-colors duration-200">
            احجز الآن
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Destinations({ destinations, loading, onBook }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)  // COLLAPSED BY DEFAULT
  const [activeRegion, setActiveRegion] = useState('all')

  const counts = REGIONS.reduce((acc, r) => {
    acc[r.id] = r.id === 'all'
      ? destinations.length
      : destinations.filter(d => d.region === r.id).length
    return acc
  }, {})

  const filtered = activeRegion === 'all'
    ? destinations
    : destinations.filter(d => d.region === activeRegion)

  return (
    <section id="destinations" className="py-20 px-4 max-w-7xl mx-auto">
      <SectionHead tag="الوجهات" title="استكشف" accent="وجهاتنا"
        sub="من شواطئ البحر الأحمر إلى آثار الفراعنة — كل مصر في متناول يدك" />

      <div className="flex gap-6 items-start">

        {/* Sidebar */}
        <div className="w-56 flex-shrink-0 bg-[#1E293B] border border-white/[.06] rounded-2xl overflow-hidden
          sticky top-20 hidden md:block">
          <button
            onClick={() => setSidebarOpen(v => !v)}
            className="w-full flex items-center justify-between px-4 py-4
              hover:bg-white/[.03] transition-colors duration-200">
            <span className="flex items-center gap-2 text-[14px] font-bold text-white">
              <Filter size={15} className="text-[#E63946]" /> فلترة الوجهات
            </span>
            <ChevronDown size={16} className={`text-slate-400 transition-transform duration-300 ${sidebarOpen ? 'rotate-180' : ''}`} />
          </button>

          <div className={`overflow-hidden transition-all duration-300 ${sidebarOpen ? 'max-h-[600px]' : 'max-h-0'}`}>
            <div className="px-3 pb-4 space-y-1.5 border-t border-white/[.06] pt-3">
              {REGIONS.map(r => {
                const Icon = r.icon
                const active = activeRegion === r.id
                return (
                  <button key={r.id}
                    onClick={() => setActiveRegion(r.id)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13px] font-semibold
                      transition-all duration-200 text-right
                      ${active
                        ? 'bg-[#E63946] text-white'
                        : 'text-slate-300 hover:bg-white/[.05] hover:text-white border border-white/[.07]'}`}>
                    <Icon size={14} className={active ? 'text-white' : r.color} />
                    <span className="flex-1">{r.label}</span>
                    <span className={`text-[11px] px-1.5 py-0.5 rounded-full
                      ${active ? 'bg-white/20 text-white' : 'bg-white/[.07] text-slate-400'}`}>
                      {counts[r.id] || 0}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile filter chips */}
        <div className="md:hidden flex gap-2 overflow-x-auto pb-2 w-full mb-4 flex-shrink-0">
          {REGIONS.map(r => (
            <button key={r.id}
              onClick={() => setActiveRegion(r.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-[13px] font-bold transition-all
                ${activeRegion === r.id
                  ? 'bg-[#E63946] text-white'
                  : 'border border-white/10 text-slate-300 hover:border-[#E63946]'}`}>
              {r.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {loading
            ? <SkeletonCard count={6} />
            : filtered.length === 0
              ? <div className="col-span-3 text-center py-16 text-slate-500">
                  <div className="text-4xl mb-3">✈️</div>
                  لا توجد وجهات في هذه الفئة
                </div>
              : filtered.map((d, i) => <DestCard key={d.id} dest={d} onBook={onBook} idx={i} />)
          }
        </div>
      </div>
    </section>
  )
}
