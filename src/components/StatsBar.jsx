const stats = [
  { num: '20+', label: 'وجهة سياحية' },
  { num: '50+', label: 'باقة متاحة' },
  { num: '500+', label: 'عميل سعيد' },
  { num: '24/7', label: 'دعم واتساب' },
]

export default function StatsBar() {
  return (
    <div className="border-y border-white/[.06] bg-navy-soft/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-8 flex justify-center gap-8 sm:gap-16 flex-wrap">
        {stats.map(s => (
          <div key={s.label} className="text-center">
            <span className="block text-[28px] font-black text-[#E63946]">{s.num}</span>
            <span className="text-[12px] text-slate-500 font-semibold">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
