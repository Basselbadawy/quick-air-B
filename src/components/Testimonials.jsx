import SectionHead from './SectionHead'

const DEMO_TESTIMONIALS = [
  { name: 'محمد علي', rating: 5, comment: 'باقة مطروح كانت ممتازة! التنظيم احترافي والأسعار منافسة جداً. الأبراج كانت فوق التوقعات.', dest: 'مرسى مطروح' },
  { name: 'سارة أحمد', rating: 5, comment: 'أول مرة أسافر مع كويك اير وكانت تجربة رائعة. المواصلات في معادها والفندق تمام.', dest: 'شرم الشيخ' },
  { name: 'عمر حسن', rating: 5, comment: 'باقة الغردقة كانت شاملة ومريحة. الدبل للفرد بالسعر ده مش هتلاقيه في أي وكالة تانية بالزقازيق.', dest: 'الغردقة' },
  { name: 'نورهان مصطفى', rating: 5, comment: 'رحلة الأقصر وأسوان كانت حلم! البرنامج منظم وشامل كل الأماكن. شكراً Quick Air!', dest: 'الأقصر' },
  { name: 'أحمد سالم', rating: 5, comment: 'حجزت باقة العمرة من كويك اير والخدمة من أول يوم لحد الوصول كانت ممتازة جداً.', dest: 'العمرة' },
  { name: 'ريهام خالد', rating: 5, comment: 'رحلة دهب كانت مذهلة! الهدوء والطبيعة والتنظيم الممتاز. هنكرر بإذن الله.', dest: 'دهب' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-[#1E293B]">
      <div className="max-w-7xl mx-auto">
        <SectionHead tag="آراء العملاء" title="قالوا عن" accent="تجربتهم" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DEMO_TESTIMONIALS.map((t, i) => (
            <div key={i}
              className="bg-navy/60 border border-white/[.06] rounded-2xl p-5
                hover:border-[rgba(230,57,70,.3)] transition-colors duration-300
                animate-fade-up" style={{ animationDelay: `${i * 0.07}s` }}>
              <div className="text-[#E63946] tracking-widest text-[13px] mb-3">
                {'★'.repeat(t.rating)}
              </div>
              <p className="text-[13px] leading-[1.85] text-slate-300 mb-4">"{t.comment}"</p>
              <div className="flex items-center gap-3 pt-3 border-t border-white/[.06]">
                <div className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center
                  font-black text-[15px] text-white"
                  style={{ background: 'linear-gradient(135deg,#C1121F,#E63946)' }}>
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-[13px] font-bold text-white">{t.name}</div>
                  <div className="text-[11px] text-[#E63946] font-semibold">{t.dest}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
