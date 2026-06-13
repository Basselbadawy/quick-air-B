import { MessageCircle, Phone, Clock, Users } from 'lucide-react'
import SectionHead from './SectionHead'
import { DEMO_DAY_TRIPS, waLink, telLink } from '../data'

export default function DayTrips() {
  return (
    <section id="daytrips" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHead tag="رحلات اليوم الواحد" title="استمتع" accent="بيومك"
          sub="رحلات يومية من الزقازيق وعودة — مريحة وبأسعار تناسب الجميع" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {DEMO_DAY_TRIPS.map((trip, i) => {
            const waMsg = `مرحباً Quick Air Zagazig! 🚌\n\nأريد الاستفسار عن:\n${trip.emoji} رحلة ${trip.name} — يوم واحد\n💰 ${trip.price}\n⏱ ${trip.duration}\n\nمن فضلكم أرسلوا لي المواعيد والتفاصيل.`
            return (
              <div key={trip.id}
                className="card-hover bg-[#1E293B] border border-white/[.06] rounded-2xl overflow-hidden
                  animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="relative overflow-hidden">
                  <img src={trip.image} alt={trip.name}
                    className="w-full h-44 object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/90 to-transparent" />
                  <div className="absolute bottom-3 right-4">
                    <div className="text-[26px]">{trip.emoji}</div>
                    <h3 className="text-[18px] font-black text-white">{trip.name}</h3>
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-[13px] text-slate-400 leading-relaxed mb-4">{trip.desc}</p>

                  <div className="flex items-center gap-4 mb-4 text-[12px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} className="text-[#E63946]" /> {trip.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users size={12} className="text-[#E63946]" /> مجموعات وأفراد
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/[.06]">
                    <div className="text-[18px] font-black text-[#E63946]">{trip.price}</div>
                    <div className="flex gap-2">
                      <a href={waLink(waMsg)} target="_blank" rel="noreferrer"
                        className="btn-wa flex items-center gap-1.5 px-3 py-2 rounded-xl text-[12px] font-bold">
                        <MessageCircle size={13} /> واتساب
                      </a>
                      <a href={telLink()}
                        className="btn-call flex items-center justify-center w-9 h-9 rounded-xl">
                        <Phone size={13} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
