import { MessageCircle, Phone, Waves, Bus, ArrowLeftRight, Eye } from 'lucide-react'
import SectionHead from './SectionHead'
import { waLink, telLink } from '../data'

const TOWERS = [
  {
    name: 'برج السرايا',
    emoji: '🏢',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=700&q=75',
    badge: 'عرض الصيف',
    badgeColor: 'bg-[#E63946]',
    tiers: [
      { label: 'شقة غرفتين أرضي',     price: '4,500', note: 'تبدأ من' },
      { label: 'فيو جزئي للبحر',       price: '6,500', note: '' },
      { label: 'بانوراما كامل',         price: '9,000', note: '' },
    ],
  },
  {
    name: 'عمارة البتول',
    emoji: '🌊',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&q=75',
    badge: 'الأكثر طلباً',
    badgeColor: 'bg-[#F59E0B]',
    tiers: [
      { label: 'شقة غرفتين أرضي',     price: '5,000', note: 'تبدأ من' },
      { label: 'فيو جزئي للبحر',       price: '7,500', note: '' },
      { label: 'بانوراما كامل',         price: '11,000', note: '' },
    ],
  },
  {
    name: 'برج الريتاج',
    emoji: '✨',
    image: 'https://images.unsplash.com/photo-1542501742-03e5e3f6a79b?w=700&q=75',
    badge: 'المالديف المصرية',
    badgeColor: 'bg-emerald-500',
    tiers: [
      { label: 'شقة غرفتين أرضي',     price: '6,000', note: 'تبدأ من' },
      { label: 'فيو جزئي للبحر',       price: '9,500', note: '' },
      { label: 'بانوراما فيو فاخر',    price: '14,000', note: '' },
    ],
  },
]

const AMENITIES = [
  { icon: ArrowLeftRight, text: 'ذهاب وعودة مع الانتقالات' },
  { icon: Bus,            text: 'أتوبيسات داخلية للشواطئ' },
  { icon: Waves,          text: 'شاطئ روميل وكليوباترا' },
  { icon: Eye,            text: '6 أيام / 5 ليالي' },
]

function TowerCard({ tower, idx }) {
  const waMsg = `مرحباً Quick Air Zagazig! 🌊\n\nأريد الحجز في:\n🏢 البرج: ${tower.name}\n📍 مرسى مطروح — صيف 2026\n🗓 6 أيام / 5 ليالي\n\nالبرنامج يشمل: ذهاب وعودة + أتوبيسات داخلية للشواطئ\nمعالم: شاطئ روميل، كليوباترا، سوق ليبيا، الكورنيش\n\nمن فضلكم أرسلوا لي التفاصيل والمواعيد المتاحة.`

  return (
    <div className={`card-hover bg-[#1E293B] border rounded-2xl overflow-hidden animate-fade-up
      ${idx === 1 ? 'border-[#F59E0B]/40 ring-1 ring-[#F59E0B]/20' : 'border-white/[.06]'}`}
      style={{ animationDelay: `${idx * 0.1}s` }}>

      <div className="relative overflow-hidden">
        <img src={tower.image} alt={tower.name}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy" />
        <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-[12px] font-bold text-white ${tower.badgeColor}`}>
          {tower.badge}
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-transparent to-transparent" />
        <div className="absolute bottom-3 right-4">
          <h3 className="text-[20px] font-black text-white">{tower.emoji} {tower.name}</h3>
        </div>
      </div>

      <div className="p-5">
        {/* Price tiers */}
        <div className="space-y-2 mb-5">
          {tower.tiers.map((tier, i) => (
            <div key={i}
              className={`flex items-center justify-between px-3 py-2.5 rounded-xl
                ${i === 0
                  ? 'bg-[rgba(230,57,70,.08)] border border-[rgba(230,57,70,.2)]'
                  : 'bg-white/[.03] border border-white/[.07]'}`}>
              <div className="flex items-center gap-2">
                {i === 2 && <span className="text-[10px] font-bold text-[#F59E0B] bg-[rgba(245,158,11,.1)] px-2 py-0.5 rounded-full">BEST</span>}
                <span className="text-[13px] font-semibold text-slate-300">{tier.label}</span>
              </div>
              <div className="text-left">
                {tier.note && <div className="text-[9px] text-slate-500">{tier.note}</div>}
                <div className={`text-[16px] font-black ${i === 0 ? 'text-[#E63946]' : 'text-white'}`}>
                  {tier.price} <span className="text-[11px] font-normal text-slate-500">جـ</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <a href={waLink(waMsg)} target="_blank" rel="noreferrer"
            className="btn-wa flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl
              text-[13px] font-bold">
            <MessageCircle size={15} /> احجز واتساب
          </a>
          <a href={telLink()}
            className="btn-call flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl
              text-[13px] font-bold">
            <Phone size={15} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function MatrouhSection() {
  return (
    <section id="matrouh" className="py-20 px-4 bg-[#1E293B]">
      <div className="max-w-7xl mx-auto">
        <SectionHead tag="عرض حصري" title="مرسى مطروح" accent="صيف 2026"
          sub="أبراج مميزة على شاطئ المالديف المصري — احجز مبكراً قبل نفاذ الأماكن" />

        {/* Amenities bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {AMENITIES.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 bg-navy/60 border border-white/[.06]
              rounded-xl px-4 py-3">
              <Icon size={18} className="text-[#E63946] flex-shrink-0" />
              <span className="text-[13px] font-semibold text-slate-300">{text}</span>
            </div>
          ))}
        </div>

        {/* Tower cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TOWERS.map((t, i) => <TowerCard key={t.name} tower={t} idx={i} />)}
        </div>

        {/* Map of attractions */}
        <div className="mt-8 bg-navy/60 border border-white/[.06] rounded-2xl p-5">
          <h4 className="text-[14px] font-bold text-white mb-3">📍 المعالم المضمنة في البرنامج</h4>
          <div className="flex flex-wrap gap-2">
            {['شارع الإسكندرية', 'سوق ليبيا', 'كورنيش مطروح', 'شاطئ روميل', 'شاطئ كليوباترا'].map(m => (
              <span key={m} className="px-3 py-1.5 rounded-full text-[12px] font-semibold
                bg-[rgba(230,57,70,.1)] border border-[rgba(230,57,70,.2)] text-[#E63946]">
                📍 {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
