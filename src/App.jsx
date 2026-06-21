// بيانات رحلة السخنة الجديدة (تتحط هنا بعد الـ imports مباشرة)
const SOKHNA_OFFER = {
  id: "sokhna-lo2lo2a-offer",
  title: "العين السخنة - قرية اللؤلؤة",
  subtitle: "يوم كامل على البحر بشاطئ القوات المسلحة (أمان ونظافة تامّة)",
  price: "400 ج.م",
  countdown: "7", 
  color: "from-cyan-500 to-blue-600",
  badge: "عرض خاص 🔥",
  image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  extraImages: [
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80"
  ],
  program: "رحلة يوم الإثنين 7 / 6 لقرية اللؤلؤة بالعين السخنة. هنتحرك الصبح بدري عشان نلحق اليوم من أوله، هنوصل وننزل البحر براحتنا، وهنتصور أحلى صور للذكرى. البرنامج يشمل الانتقالات بأحدث الباصات السياحية المكيفة ورسوم دخول الشاطئ."
};

export function FlashOffers() {
  const [selected, setSelected] = useState(null)

  // دمج عرض السخنة ليكون في مقدمة العروض الصيفية
  const allFlashOffers = typeof FLASH_OFFERS !== 'undefined' ? [SOKHNA_OFFER, ...FLASH_OFFERS] : [SOKHNA_OFFER];

  return (
    <section className="py-16 px-4 bg-sun-soft">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-sunset text-[11px] font-bold uppercase tracking-wider mb-3">
            <Flame size={12}/> عروض الصيف
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-ocean">أقوى <span className="text-sunset">عروضنا دلوقتي</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {allFlashOffers.map(o => {
            const msg = `مرحباً Quick Air!\nأريد الاستفسار عن:\n${o.title}\n${o.subtitle}\nالسعر: ${o.price}`
            // دمج الصورة الأساسية مع الصور الإضافية ليتم عرضهم معاً في السلايدر
            const allImages = [o.image, ...(o.extraImages || [])]

            return (
              <div key={o.id} className="group rounded-2xl overflow-hidden bg-white border border-sky-100 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                <div className="relative h-44 overflow-hidden">
                  {/* تطبيق السلايدر على كل العروض */}
                  <ImageSlider images={allImages} className="w-full h-full" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${o.color} opacity-30 pointer-events-none`}/>
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[12px] font-black text-ocean bg-white/90 backdrop-blur-sm shadow-sm z-20">{o.badge}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-black text-ocean mb-1">{o.title}</h3>
                  <p className="text-[13px] text-slate-600 mb-3 line-clamp-2">{o.subtitle}</p>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-sunset bg-orange-100 px-2.5 py-1 rounded-full w-fit mb-4">
                    <Clock size={11}/> باقي على الإغلاق: {o.countdown} أيام
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-sky-100">
                    <div>
                      <div className="text-[10px] text-slate-500">يبدأ من</div>
                      <div className="text-xl font-black text-sunset">{o.price}</div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button onClick={() => setSelected(o)}
                        className="flex items-center gap-1 px-3 py-2 rounded-xl text-[11px] font-bold text-ocean bg-sky-50 hover:bg-sky-100 border border-sky-200 hover:border-sky2 transition-all">
                        التفاصيل
                      </button>
                      <a href={waLink(msg)} target="_blank" rel="noreferrer"
                        className="flex items-center gap-1 px-4 py-2 rounded-xl text-[12px] font-bold text-white shadow-md"
                        style={{background:"linear-gradient(135deg,#25D366,#128C7E)"}}>
                        <MessageCircle size={14}/> حجز
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-ocean-dark/50 backdrop-blur-sm" onClick={() => setSelected(null)}>
          <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl border border-sky-100 shadow-2xl" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 bg-white/90 text-ocean p-2 rounded-full shadow-md hover:bg-sunset hover:text-white transition-all z-20"><X size={18}/></button>
            
            <div className="p-6 pt-12">
              <h2 className="text-2xl font-black text-ocean mb-1">عرض {selected.title}</h2>
              <p className="text-2xl text-sunset font-black mb-5 border-b border-sky-100 pb-4">
                {selected.price}
              </p>

              {/* السلايدر داخل نافذة التفاصيل */}
              <div className="w-full h-52 mb-6 rounded-2xl shadow-lg ring-1 ring-sky-100 overflow-hidden">
                <ImageSlider images={[selected.image, ...(selected.extraImages || [])]} className="w-full h-full" />
              </div>

              <h3 className="text-base font-bold text-sky2 mb-2">تفاصيل البرنامج:</h3>
              <p className="text-slate-700 text-[14px] leading-relaxed mb-5 bg-sky-50 p-4 rounded-xl border border-sky-100">{selected.program}</p>

              <h3 className="text-base font-bold text-sky2 mb-2">شروط الحجز:</h3>
              <ul className="space-y-2 mb-6">
                {[
                  "التجمع في المواعيد المحددة بالزقازيق، وأي تأخير يسقط حق العميل في الرحلة.",
                  "الحجز المسبق ضروري ومؤكد بدفع العربون لتأكيد الأماكن.",
                  "البرنامج يشمل الانتقالات بأحدث الباصات المكيفة."
                ].map((item,i) => (
                  <li key={i} className="flex gap-2 items-start text-[13px] text-slate-700">
                    <CheckCircle size={15} className="text-emerald-500 flex-shrink-0 mt-0.5"/>{item}
                  </li>
                ))}
              </ul>

              <a href={waLink(`مرحباً كويك اير!\nأريد تأكيد حجز عرض: ${selected.title}\nالسعر: ${selected.price}\nممكن التفاصيل وطرق الدفع؟`)}
                target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full text-white font-black py-4 rounded-xl hover:-translate-y-0.5 transition-all shadow-lg"
                style={{background:"linear-gradient(135deg,#25D366,#128C7E)"}}>
                <MessageCircle size={17}/> تأكيد الحجز عبر واتساب
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export function DayTrips() {
  const [selected, setSelected] = useState(null)
  return (
    <>
      <Wave fill="#E0F2FE"/>
      <section id="daytrips" className="py-16 px-4 bg-sky-soft-2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky2 text-[11px] font-bold uppercase tracking-wider mb-3">
              <Bus size={12}/> رحلات اليوم الواحد
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-ocean">سافر وارجع في <span className="text-sky2">يوم واحد</span></h2>
            <p className="text-slate-600 mt-2 text-sm max-w-md mx-auto">انطلق من الزقازيق وعد — مريح وبأسعار تناسب الجميع</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DAY_TRIPS.map((trip,i) => {
              // تجهيز الصور: دمج الصورة الأساسية مع الإضافية للتقليب التلقائي
              const allImages = [trip.image, ...(trip.extraImages || [])]
              const msg = `مرحباً Quick Air!\nأريد حجز رحلة: ${trip.name}\nالسعر: ${trip.price} ج.م`

              return (
                <div key={trip.id} className="group relative rounded-2xl overflow-hidden bg-white border border-sky-100 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300" style={{animationDelay:`${i*0.06}s`}}>
                  {trip.featured && (
                    <div className="absolute top-0 inset-x-0 z-20 bg-gradient-to-r from-sunset to-amber-500 py-1 text-center text-[11px] font-black text-white">الأكثر طلباً</div>
                  )}
                  
                  <div className={`relative h-40 overflow-hidden ${trip.featured?"mt-7":""}`}>
                    {/* تطبيق السلايدر على كل كروت الرحلات */}
                    <ImageSlider images={allImages} className="w-full h-full" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${trip.color} opacity-40 pointer-events-none`}/>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-black text-ocean text-[15px] mb-1">{trip.name}</h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed mb-3 line-clamp-2">{trip.program}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-black text-sunset">{trip.price} جـ</span>
                      <div className="flex items-center gap-1.5">
                        <button onClick={() => setSelected(trip)}
                          className="flex items-center justify-center px-3 py-1.5 rounded-lg text-[11px] font-bold text-ocean bg-sky-50 hover:bg-sky-100 border border-sky-200 hover:border-sky2 transition-all">
                          تفاصيل
                        </button>
                        {/* زر الحجز الجديد المضاف للكارت من بره */}
                        <a href={waLink(msg)} target="_blank" rel="noreferrer"
                           className="flex items-center justify-center px-3 py-1.5 rounded-lg text-[11px] font-bold text-white shadow-md hover:-translate-y-0.5 transition-all"
                           style={{background:"linear-gradient(135deg,#25D366,#128C7E)"}}>
                           حجز
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {selected && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-ocean-dark/50 backdrop-blur-sm" onClick={() => setSelected(null)}>
            <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl border border-sky-100 shadow-2xl" onClick={e => e.stopPropagation()}>
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 bg-white/90 text-ocean p-2 rounded-full shadow-md hover:bg-sunset hover:text-white transition-all z-20"><X size={18}/></button>
              
              <div className="p-6 pt-12">
                <h2 className="text-2xl font-black text-ocean mb-1">رحلة {selected.name}</h2>
                <p className="text-2xl text-sunset font-black mb-5 border-b border-sky-100 pb-4">
                  {selected.price} جنيه <span className="text-sm font-normal text-slate-500">/ للفرد</span>
                </p>

                {/* عرض السلايدر بالصور كاملة داخل التفاصيل */}
                <div className="w-full h-52 mb-6 rounded-2xl shadow-lg ring-1 ring-sky-100 overflow-hidden">
                  <ImageSlider images={[selected.image, ...(selected.extraImages || [])]} className="w-full h-full" />
                </div>

                <h3 className="text-base font-bold text-sky2 mb-2">تفاصيل البرنامج:</h3>
                <p className="text-slate-700 text-[14px] leading-relaxed mb-5 bg-sky-50 p-4 rounded-xl border border-sky-100">{selected.program}</p>

                <h3 className="text-base font-bold text-sky2 mb-2">شروط الحجز:</h3>
                <ul className="space-y-2 mb-6">
                  {[
                    "التجمع في المواعيد المحددة بالزقازيق، وأي تأخير يسقط حق العميل في الرحلة.",
                    "الحجز المسبق ضروري ومؤكد بدفع العربون لتأكيد الأماكن.",
                    "البرنامج يشمل الانتقالات بأحدث الباصات المكيفة ورسوم المزارات المذكورة.",
                  ].map((item,i) => (
                    <li key={i} className="flex gap-2 items-start text-[13px] text-slate-700">
                      <CheckCircle size={15} className="text-emerald-500 flex-shrink-0 mt-0.5"/>{item}
                    </li>
                  ))}
                </ul>

                <a href={waLink(`مرحباً كويك اير!\nأريد تأكيد حجز رحلة ${selected.name}\nالسعر: ${selected.price} جنيه للفرد\nممكن التفاصيل وطرق الدفع؟`)}
                  target="_blank" rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full text-white font-black py-4 rounded-xl hover:-translate-y-0.5 transition-all shadow-lg"
                  style={{background:"linear-gradient(135deg,#25D366,#128C7E)"}}>
                  <MessageCircle size={17}/> تأكيد الحجز عبر واتساب
                </a>
              </div>
            </div>
          </div>
        )}
      </section>
      <Wave fill="#FFFFFF" flip/>
    </>
  )
}
