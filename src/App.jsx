import { useState, useEffect } from "react"
import {
  Plane, MapPin, Users, Calendar, Phone, MessageCircle,
  ChevronDown, ChevronRight, Star, Flame, Clock, Bus,
  Home, Shield, Menu, X, ArrowRight,
  Waves, Sun, Filter, CheckCircle, ChevronLeft
} from "lucide-react"

// 1. دالة معرض الصور المتحرك (تم تعديلها لتناسب الكروت الخارجية وشاشة التفاصيل)
function ImageSlider({ images, className = "w-full h-full" }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // تقليب تلقائي كل 3 ثواني
    return () => clearInterval(interval);
  }, [images]);

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  if (!images || images.length === 0) return null;

  return (
    <div className={`relative overflow-hidden group ${className}`}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-all duration-500"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); goToPrev(); }}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 text-ocean p-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-sky2 hover:text-white z-10"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); goToNext(); }}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 text-ocean p-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-sky2 hover:text-white z-10"
          >
            <ChevronRight size={16} />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrentIndex(idx); }}
                className={`h-1.5 rounded-full transition-all ${
                  idx === currentIndex ? "bg-sunset w-4" : "bg-white/70 w-1.5"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// 2. مصفوفة الرحلات المحدثة (شاملة الصور الإضافية لكل رحلة للتقليب)
const DAY_TRIPS = [
  { 
    id: 1, 
    name: "الإسكندرية", 
    price: 500, 
    image: "/images/6.jpg", 
    program: "القلعة من الخارج بمنطقة الأنفوشى — محطة الرمل — مول سان استيفانو — ملاهي المعمورة", 
    color: "from-blue-500 to-cyan-400",
    extraImages: [ "/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg" ]
  },
  { 
    id: 2, 
    name: "فاميلي بارك", 
    price: 500, 
    image: "/images/14.jpg", 
    program: "دخول قرية فاميلي بارك الترفيهية بالرحاب — سهرة بمول كايرو فيستيفال", 
    color: "from-purple-500 to-pink-400",
    extraImages: [ "/images/7.jpg", "/images/8.jpg", "/images/9.jpg", "/images/10.jpg", "/images/11.jpg", "/images/12.jpg", "/images/13.jpg" ]
  },
  { 
    id: 3, 
    name: "بورسعيد", 
    price: 450, 
    image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80", 
    program: "ركوب المعدية لبور فؤاد — جبال الملح — حديقة فريال — سوق السمك — السوق التجاري", 
    color: "from-teal-500 to-emerald-400",
    extraImages: [
      "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80",
      "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=800&q=80",
      "https://images.unsplash.com/photo-1548842186-a2dc211ddf4a?w=800&q=80"
    ]
  },
  { 
    id: 4, 
    name: "معالم القاهرة", 
    price: 500, 
    image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800&q=80", 
    program: "الأهرامات أو القلعة — الحسين — الأزهر — شارع مجمع الأديان", 
    color: "from-amber-500 to-orange-400",
    extraImages: [
      "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800&q=80",
      "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&q=80",
      "https://images.unsplash.com/photo-1585314545511-2eb962f36fdd?w=800&q=80"
    ]
  },
  { 
    id: 5, 
    name: "الفيوم", 
    price: 600, 
    image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80", 
    program: "قرية تونس هاووس — جبل المدورة — شلالات وادي الريان — حفلة شواء — ركوب فلوكة — التزحلق على الرمال", 
    color: "from-green-500 to-teal-400",
    extraImages: [
      "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80",
      "https://images.unsplash.com/photo-1601004116035-7c5da1545620?w=800&q=80",
      "https://images.unsplash.com/photo-1549420084-25e2db8144cd?w=800&q=80"
    ]
  },
  { 
    id: 6, 
    name: "رأس البر (الخميس 18/6)", 
    price: 460, 
    image: "/images/17.jpg", 
    program: "التجمع الساعة 6 ص — السفر بأحدث الباصات المكيفة — دخول قرية القوات المسلحة — جولة حرة بالسوق التجاري واللسان", 
    color: "from-cyan-500 to-blue-400", 
    featured: true,
    extraImages: [ "/images/15.jpg", "/images/16.jpg", "/images/17.jpg" ]
  },
  { 
    id: 7, 
    name: "العين السخنة", 
    price: 700, 
    image: "https://images.unsplash.com/photo-1542501742-03e5e3f6a79b?w=800&q=80", 
    program: "فندق لاسيرينا 4 نجوم صف أول على البحر — حمام سباحة — ميني أكوا بارك — ملاهي أطفال — سهرة بورتو السخنة", 
    color: "from-orange-500 to-red-400",
    extraImages: [
      "https://images.unsplash.com/photo-1542501742-03e5e3f6a79b?w=800&q=80",
      "https://images.unsplash.com/photo-1580974582391-a6649c82a85f?w=800&q=80",
      "https://images.unsplash.com/photo-1615887023516-9dc47690f055?w=800&q=80"
    ]
  },
  { 
    id: 8, 
    name: "دريم بارك", 
    price: 650, 
    image: "https://images.unsplash.com/photo-1565073182887-6bcefbe225b1?w=800&q=80", 
    program: "دخول مدينة الملاهي دريم بارك — سهرة بمول مصر", 
    color: "from-pink-500 to-rose-400",
    extraImages: [
      "https://images.unsplash.com/photo-1565073182887-6bcefbe225b1?w=800&q=80",
      "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?w=800&q=80",
      "https://images.unsplash.com/photo-1605333159049-aa572dd2c748?w=800&q=80"
    ]
  },
]

const MATROUH_TABS = [
  { id:"saraya", label:"برج السرايا", image:"https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
    columns:["شقة 2غرفه (4 كراسي)","شقة 3غرف (6 كراسي)","شقة 3غرف ترى جانبي (6 كراسي)"],
    rows:[
      {date:"12 يونيو",prices:[8050,10550,11050]},
      {date:"27 يونيو",prices:[9050,11550,12050]},
      {date:"17 يوليو",prices:[10550,13050,13550]},
      {date:"31 أغسطس",prices:[10050,12050,12550]},
      {date:"20 سبتمبر",prices:[7050,9050,9550]},
    ]
  },
  { id:"janna", label:"برج جنة العوام 7", image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    columns:["شقة 2غرفه أرضي","شقة 2غرفه","شقة 3غرفه لا ترى","شقة 3غرفه ترى البحر"],
    rows:[
      {date:"3 يوليو",prices:[7050,8550,10050,10550]},
      {date:"23 يوليو",prices:[9050,10550,12550,13050]},
      {date:"17 أغسطس",prices:[9050,10550,12550,13050]},
      {date:"16 سبتمبر",prices:[7050,8050,10550,12050]},
    ]
  },
  { id:"batoul", label:"عمارة البتول", image:"https://images.unsplash.com/photo-1542501742-03e5e3f6a79b?w=800&q=80",
    columns:["غرفتين أرضي","غرفتين ترى","غرفتين ترى البحر"],
    rows:[
      {date:"13 يوليو",prices:[9250,9750,10250]},
      {date:"2 أغسطس",prices:[9750,10750,11250]},
      {date:"1 سبتمبر",prices:[9250,10250,10750]},
      {date:"21 سبتمبر",prices:[6750,7250,7750]},
    ]
  },
  { id:"ritaj", label:"برج الريتاج", image:"https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
    columns:["غرفتين ترى البحر"],
    rows:[
      {date:"13 يوليو",prices:[10850]},
      {date:"2 أغسطس",prices:[11850]},
      {date:"1 سبتمبر",prices:[11350]},
      {date:"21 سبتمبر",prices:[8350]},
    ]
  },
  { id:"portsaid", label:"شقق بورسعيد", image:"https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80",
    columns:["لا ترى البحر 2غ","ترى البحر 2غ","ترى البحر كامل 2غ","بانوراما 3غ","الليالي"],
    rows:[
      {date:"22 يونيو",prices:[7000,8000,9000,11000,5]},
      {date:"12 يوليو",prices:[9000,10000,11000,13000,5]},
      {date:"1 أغسطس",prices:[10000,11000,12000,14000,5]},
      {date:"5 سبتمبر",prices:[9500,10500,11500,13500,5]},
      {date:"30 سبتمبر",prices:[5500,6000,7000,8500,5]},
    ]
  },
]

const DAHAB_PACKAGES = [
  { name: "ميامي بيتش", loc: "صف أول بلهول", meals: "فطار فقط", p4: 2600, p5: 3050 },
  { name: "كامب ويلز", loc: "قلب الممشي", meals: "بدون وجبات", p4: 2750, p5: 3250 },
  { name: "جرين فالي", loc: "صف أول الممشي", meals: "فطار فقط", p4: 2750, p5: 3250 },
  { name: "اكتوبوس", loc: "صف تاني قلب الممشي", meals: "بدون وجبات", p4: 3250, p5: 3950 },
  { name: "كينج هاوس", loc: "صف أول بين لاجونا وممشي", meals: "فطار فقط", p4: 3250, p5: 3950 },
  { name: "انتيكا", loc: "صف تاني ممشي", meals: "فطار فقط", p4: 3350, p5: 4050 },
  { name: "مارفيستا", loc: "كمين المشربه", meals: "فطار ومشروبات", p4: 3350, p5: 4050 },
  { name: "طرخان", loc: "صف أول ممشي", meals: "فطار فقط", p4: 3350, p5: 4050 },
  { name: "نوبيا", loc: "صف أول بين لاجونا والممشي", meals: "فطار فقط", p4: 3950, p5: 4850 },
  { name: "دهب ناو", loc: "صف تاني ممشي", meals: "فطار فقط", p4: 3950, p5: 4850 },
  { name: "سي فيو", loc: "صف أول لاجونا", meals: "بدون وجبات", p4: 4400, p5: 5450 },
  { name: "جنه سينا", loc: "صف أول لاجونا", meals: "فطار فقط", p4: 4400, p5: 5450 },
  { name: "باندا", loc: "صف أول لاجونا", meals: "فطار فقط", p4: 4550, p5: 5650 },
  { name: "نسيمه", loc: "قلب الممشي", meals: "فطار فقط", p4: 4850, p5: 6050 },
  { name: "هابي لايف", loc: "صف أول ثري بولز", meals: "فطار وعشاء", p4: 6050, p5: 7650 },
  { name: "ايكوتيل دهب", loc: "صف أول ثري بولز", meals: "فطار وعشاء", p4: 8300, p5: 10650 },
  { name: "ريتاك كوناي", loc: "صف أول لاجونا", meals: "فطار وعشاء", p4: 8400, p5: 10650 },
  { name: "تروبيتال دهب", loc: "صف أول بلهول", meals: "فطار وعشاء", p4: 8600, p5: 11050 },
]

const FLASH_OFFERS = [
  { 
    id: 1, 
    badge: "الأكثر مبيعاً", 
    title: "رأس البر (الخميس 18/6)", 
    subtitle: "شواطئ القوات المسلحة — السوق التجاري — اللسان", 
    price: "460 جـ", 
    countdown: 3, 
    color: "from-sky-400 to-cyan-300", 
    image: "/images/r1.jpg",
    program: "التجمع الخميس 18/6 الساعة 6 ص أمام كلية الآداب — السفر بأحدث الباصات المكيفة — دخول قرية وشواطئ القوات المسلحة — جولة حرة بالسوق التجاري — سهرة رائعة بمنطقة اللسان",
    extraImages: [ "/images/15.jpg", "/images/16.jpg", "/images/17.jpg" ]
  },
  { 
    id: 2, 
    badge: "عرض العيد", 
    title: "برج السرايا — مطروح", 
    subtitle: "شقة 2 غرفة — 6 أيام / 5 ليالي", 
    price: "7,550 جـ", 
    countdown: 5, 
    color: "from-cyan-400 to-sky-400", 
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
    program: "إقامة مميزة في برج السرايا بمطروح — شقة غرفتين مجهزة بالكامل — قريبة من البحر والخدمات — شاملة الانتقالات ذهاب وعودة من الزقازيق",
    extraImages: [
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      "https://images.unsplash.com/photo-1542501742-03e5e3f6a79b?w=800&q=80"
    ]
  },
  { 
    id: 3, 
    badge: "حصري", 
    title: "الفيوم", 
    subtitle: "شلالات الريان + بحيرة قارون + شواء", 
    price: "600 جـ", 
    countdown: 7, 
    color: "from-amber-400 to-orange-300", 
    image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80",
    program: "قرية تونس هاووس — جبل المدورة — شلالات وادي الريان — حفلة شواء مميزة — ركوب فلوكة — التزحلق على الرمال",
    extraImages: [
      "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80",
      "https://images.unsplash.com/photo-1601004116035-7c5da1545620?w=800&q=80"
    ] 
  },
]

const WHY_US = [
  { icon:Users,  title:"مشرف خاص",       desc:"مشرف متمرن مع كل فوج طوال الرحلة",            color:"text-sky-600",     bg:"bg-sky-100" },
  { icon:Bus,    title:"انتقالات مجانية", desc:"أتوبيسات مريحة من الزقازيق ذهاباً وعودةً",    color:"text-emerald-600", bg:"bg-emerald-100" },
  { icon:Home,   title:"شقق مجهزة",       desc:"شقق مكيفة بالكامل مع جميع المرافق",            color:"text-orange-600",  bg:"bg-orange-100" },
  { icon:Shield, title:"تأمين سفر",       desc:"تغطية شاملة لجميع أفراد الرحلة",               color:"text-ocean",       bg:"bg-blue-100" },
  { icon:Waves,  title:"شواطئ خاصة",      desc:"أتوبيسات داخلية للشواطئ المميزة مجاناً",       color:"text-cyan-600",    bg:"bg-cyan-100" },
  { icon:Star,   title:"جودة مضمونة",     desc:"أكثر من 500 عميل سعيد في موسم واحد",           color:"text-amber-600",   bg:"bg-amber-100" },
]

const WHATSAPP = "201063278868"
const PHONES   = ["01063278868"]
const waLink   = msg => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`

function Wave({ fill="#E0F2FE", flip=false }) {
  return (
    <div style={{lineHeight:0, transform:flip?"scaleY(-1)":"none"}}>
      <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" style={{display:"block",width:"100%"}}>
        <path d="M0,28 C360,56 720,0 1080,28 C1260,42 1380,14 1440,28 L1440,56 L0,56 Z" fill={fill}/>
      </svg>
    </div>
  )
}

function Navbar({ onBook }) {
  const [scrolled, setScrolled] = useState(false)
  const [mob, setMob] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])
  const links = [["رحلات اليوم","#daytrips"],["مرسى مطروح","#matrouh"],["رحلات دهب","#dahab"],["تذاكر طيران","#flights"],["ليه كويك اير؟","#why"]]
  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled?"bg-white/95 backdrop-blur-md shadow-md shadow-sky-100":"bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex flex-col leading-none">
          <span className={`text-lg font-black bg-gradient-to-r from-ocean to-sky2 bg-clip-text text-transparent`}>Quick Air</span>
          <span className={`text-[9px] font-medium ${scrolled?"text-slate-500":"text-white/90"}`}>للسياحة والطيران — الزقازيق</span>
        </a>
        <ul className="hidden md:flex gap-6 list-none">
          {links.map(([l,h]) => <li key={h}><a href={h} className={`text-[13px] font-semibold transition-colors ${scrolled?"text-slate-700 hover:text-sky2":"text-white hover:text-sunset"}`}>{l}</a></li>)}
        </ul>
        <div className="flex items-center gap-2">
          <a href={`tel:${PHONES[0]}`} className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[12px] font-bold transition-all ${scrolled?"border-sky-200 text-ocean hover:border-sky2 hover:text-sky2":"border-white/40 text-white hover:border-white hover:bg-white/10"}`}>
            <Phone size={12}/> {PHONES[0]}
          </a>
          <button onClick={onBook} className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-sunset to-amber-500 text-[13px] font-black text-white shadow-lg shadow-orange-500/30 hover:-translate-y-0.5 transition-all">
            <MessageCircle size={13}/> احجز الآن
          </button>
          <button className={`md:hidden p-1 ${scrolled?"text-ocean":"text-white"}`} onClick={() => setMob(v=>!v)}>
            {mob ? <X size={20}/> : <Menu size={20}/>}
          </button>
        </div>
      </div>
      {mob && (
        <div className="md:hidden bg-white/98 border-t border-sky-100 px-4 py-3 flex flex-col gap-1 shadow-lg">
          {links.map(([l,h]) => <a key={h} href={h} onClick={()=>setMob(false)} className="py-2.5 px-3 text-[14px] font-semibold text-slate-700 hover:text-sky2 border-b border-sky-50">{l}</a>)}
        </div>
      )}
    </nav>
  )
}

function Sidebar({ open, onClose }) {
  const links = [["الرئيسية","#",Home],["رحلات اليوم","#daytrips",Bus],["مرسى مطروح","#matrouh",Waves],["رحلات دهب","#dahab",Sun],["تذاكر الطيران","#flights",Plane],["ليه كويك اير؟","#why",Star]]
  return (
    <>
      <div onClick={onClose} className={`fixed inset-0 z-40 bg-ocean-dark/40 backdrop-blur-sm transition-opacity duration-300 ${open?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`}/>
      <div className={`fixed right-0 top-0 h-full w-72 z-50 bg-white border-l border-sky-100 shadow-2xl transition-transform duration-300 flex flex-col ${open?"translate-x-0":"translate-x-full"}`}>
        <div className="flex items-center justify-between p-5 border-b border-sky-100 bg-sky-soft">
          <div>
            <div className="text-[16px] font-black bg-gradient-to-r from-ocean to-sky2 bg-clip-text text-transparent">Quick Air Zagazig</div>
            <div className="text-[10px] text-slate-500">كويك اير للسياحة والطيران</div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-ocean transition-colors"><X size={20}/></button>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {links.map(([label,href,Icon]) => (
            <a key={href} href={href} onClick={onClose} className="flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-semibold text-slate-700 hover:bg-sky-50 hover:text-sky2 transition-all">
              <Icon size={16} className="text-sky2 flex-shrink-0"/>{label}
              <ChevronRight size={13} className="mr-auto text-slate-300"/>
            </a>
          ))}
        </nav>
        <div className="p-4 border-t border-sky-100 space-y-2">
          {PHONES.map(p => <a key={p} href={`tel:${p}`} className="flex items-center gap-2 text-[13px] font-bold text-slate-700 hover:text-sky2 transition-colors"><Phone size={13} className="text-sky2"/>{p}</a>)}
        </div>
      </div>
    </>
  )
}

function Hero({ loading, onBook }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=75" alt="شاطئ صيفي بمياه فيروزية ورمال ذهبية" className="absolute inset-0 w-full h-full object-cover"/>
      <div className="absolute inset-0 bg-gradient-to-b from-sky-200/40 via-sky-100/30 to-white"/>
      <div className="absolute inset-0 bg-gradient-to-tr from-white/50 to-transparent"/>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-sky2/20 blur-3xl animate-float"/>
      <div className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full bg-sunset/20 blur-3xl animate-float [animation-delay:1.5s]"/>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-24">
        {loading ? (
          <div className="flex flex-col items-center gap-4">
            <Plane size={52} className="text-sky2 animate-bounce"/>
            <p className="text-ocean text-xl font-bold">جاري تحميل العروض...</p>
          </div>
        ) : (
          <>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-sunset/30 text-[12px] font-bold text-sunset shadow-sm mb-6">
              <Sun size={13}/> رحلتك المثالية تبدأ هنا
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-ocean leading-tight mb-4 text-shadow-soft">
              مع <span className="bg-gradient-to-r from-sky2 via-ocean-soft to-sky2 bg-clip-text text-transparent">كويك اير</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 mb-10 leading-relaxed max-w-2xl mx-auto font-semibold">
              اكتشف أجمل رحلات مصر بأحسن الأسعار<br/>
              <span className="text-ocean font-black">شرم الشيخ • الغردقة • دهب • مرسى مطروح.</span>
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-10">
              <a href="#daytrips" className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/90 backdrop-blur-sm border border-sky-200 text-ocean font-bold shadow-md hover:bg-white hover:border-sky2 hover:shadow-xl transition-all hover:-translate-y-0.5">
                <Bus size={16}/>  رحلات اليوم الواحد
              </a>
              <a href="#matrouh" className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/90 backdrop-blur-sm border border-sky-200 text-ocean font-bold shadow-md hover:bg-white hover:border-sky2 hover:shadow-xl transition-all hover:-translate-y-0.5">
                <Waves size={16}/> مرسى مطروح
              </a>
              <button onClick={onBook} className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-sunset to-amber-500 text-white font-black shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 transition-all">
                <MessageCircle size={16}/> احجز دلوقتي
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {[["500+","عميل سعيد"],["20+","وجهة سياحية"],["24/7","دعم واتساب"]].map(([n,l]) => (
                <div key={l} className="text-center bg-white/70 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-md border border-sky-100">
                  <div className="text-2xl font-black text-sunset">{n}</div>
                  <div className="text-xs text-slate-600 font-bold">{l}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-ocean animate-bounce">
        <span className="text-xs font-bold">اسحب للأسفل</span>
        <ChevronDown size={18}/>
      </div>
    </section>
  )
}

function FlashOffers() {
  const [selected, setSelected] = useState(null)

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
          {FLASH_OFFERS.map(o => {
            const msg = `مرحباً Quick Air!\nأريد الاستفسار عن:\n${o.title}\n${o.subtitle}\nالسعر: ${o.price}`
            return (
              <div key={o.id} className="group rounded-2xl overflow-hidden bg-white border border-sky-100 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                <div className="relative h-44 overflow-hidden">
                  {/* دمج الـ Slider بدلاً من الصورة الثابتة */}
                  {o.extraImages && o.extraImages.length > 0 ? (
                    <ImageSlider images={o.extraImages} className="w-full h-full" />
                  ) : (
                    <img src={o.image} alt={o.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                  )}
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
                    <div className="flex items-center gap-2">
                      <button onClick={() => setSelected(o)}
                        className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-[12px] font-bold text-ocean bg-sky-50 hover:bg-sky-100 border border-sky-200 hover:border-sky2 transition-all">
                        <ArrowRight size={13}/> التفاصيل
                      </button>
                      <a href={waLink(msg)} target="_blank" rel="noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-[13px] font-bold text-white shadow-md"
                        style={{background:"linear-gradient(135deg,#25D366,#128C7E)"}}>
                        <MessageCircle size={14}/> احجز
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

              {selected.extraImages && selected.extraImages.length > 0 ? (
                <ImageSlider images={selected.extraImages} className="w-full h-52 mb-6 rounded-2xl shadow-lg ring-1 ring-sky-100" />
              ) : (
                <img src={selected.image} alt={selected.title} className="w-full h-52 object-cover rounded-2xl border border-sky-100 mb-6 shadow-lg" />
              )}

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

function DayTrips() {
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
            {DAY_TRIPS.map((trip,i) => (
              <div key={trip.id} className="group relative rounded-2xl overflow-hidden bg-white border border-sky-100 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300" style={{animationDelay:`${i*0.06}s`}}>
                {trip.featured && (
                  <div className="absolute top-0 inset-x-0 z-20 bg-gradient-to-r from-sunset to-amber-500 py-1 text-center text-[11px] font-black text-white">الأكثر طلباً</div>
                )}
                
                <div className={`relative h-36 overflow-hidden ${trip.featured?"mt-7":""}`}>
                  {/* دمج الـ Slider بدلاً من الصورة الثابتة */}
                  {trip.extraImages && trip.extraImages.length > 0 ? (
                    <ImageSlider images={trip.extraImages} className="w-full h-full" />
                  ) : (
                    <img src={trip.image} alt={trip.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                  )}
                </div>
                
                <div className="p-4">
                  <h3 className="font-black text-ocean text-[15px] mb-1">{trip.name}</h3>
                  <p className="text-[11px] text-slate-600 leading-relaxed mb-3 line-clamp-2">{trip.program}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black text-sunset">{trip.price} جـ</span>
                    <button onClick={() => setSelected(trip)}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-[11px] font-bold text-ocean bg-sky-50 hover:bg-sky-100 border border-sky-200 hover:border-sky2 transition-all">
                      <ArrowRight size={11}/> التفاصيل
                    </button>
                  </div>
                </div>
              </div>
            ))}
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

                {selected.extraImages && selected.extraImages.length > 0 ? (
                  <ImageSlider images={selected.extraImages} className="w-full h-52 mb-6 rounded-2xl shadow-lg ring-1 ring-sky-100" />
                ) : (
                  <img src={selected.image} alt={selected.name} className="w-full h-52 object-cover rounded-2xl border border-sky-100 mb-6 shadow-lg" />
                )}

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

function MatrouhPackages() {
  const [active, setActive] = useState(0)
  const tab = MATROUH_TABS[active]
  return (
    <section id="matrouh" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-ocean text-[11px] font-bold uppercase tracking-wider mb-3">
            <Waves size={12}/> إقامات مرسى مطروح وبورسعيد
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-ocean">مالديف مصر</h2>
          <p className="text-slate-600 mt-2 text-sm">اختار البرج المناسب وتاريخ سفرك — الأسعار بالجنيه للفرد</p>
        </div>
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          {MATROUH_TABS.map((t,i) => (
            <button key={t.id} onClick={() => setActive(i)}
              className={`px-4 py-2.5 rounded-xl text-[13px] font-bold transition-all duration-200 ${active===i?"bg-gradient-to-r from-sky2 to-ocean-soft text-white shadow-lg shadow-sky-200":"bg-sky-50 border border-sky-200 text-slate-600 hover:text-ocean hover:border-sky2"}`}>
              {t.label}
            </button>
          ))}
        </div>
        <div className="bg-white border border-sky-100 rounded-2xl overflow-hidden shadow-xl">
          <div className="relative h-48 md:h-60 overflow-hidden">
            <img src={tab.image} alt={tab.label} className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/70 via-ocean-dark/20 to-transparent"/>
            <div className="absolute bottom-5 right-5">
              <h3 className="text-2xl font-black text-white">{tab.label}</h3>
              <p className="text-sky-100 text-sm font-semibold">مرسى مطروح / بورسعيد — الساحل الشمالي</p>
            </div>
            <div className="absolute bottom-5 left-5 flex gap-1.5">
              {[0,1,2].map(d => <div key={d} className={`w-2 h-2 rounded-full ${d===0?"bg-sunset":"bg-white/50"}`}/>)}
            </div>
          </div>
          <div className="p-4 md:p-6">
            <p className="text-[12px] font-bold text-slate-500 uppercase tracking-wider mb-4">جدول الأسعار — بالجنيه المصري للفرد</p>
            <div className="overflow-x-auto rounded-xl border border-sky-100">
              <table className="w-full min-w-[480px]">
                <thead>
                  <tr className="bg-sky-50 border-b border-sky-100">
                    <th className="py-3 px-3 text-right text-[12px] font-bold text-ocean">تاريخ الفوج</th>
                    {tab.columns.map((c,i) => <th key={i} className="py-3 px-3 text-center text-[12px] font-bold text-slate-700 whitespace-nowrap">{c}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {tab.rows.map((row,ri) => (
                    <tr key={ri} className={`border-b border-sky-50 hover:bg-sky-50 transition-colors ${ri%2===0?"bg-white":"bg-sky-50/40"}`}>
                      <td className="py-3 px-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sky-100 border border-sky-200 text-[12px] font-bold text-ocean whitespace-nowrap">
                          <Calendar size={10}/>{row.date}
                        </span>
                      </td>
                      {row.prices.map((p,pi) => {
                        const isNights = tab.id==="portsaid" && pi===row.prices.length-1
                        const isHighlight = !isNights && pi===row.prices.length-(tab.id==="portsaid"?2:1)
                        return (
                          <td key={pi} className="py-3 px-3 text-center">
                            {isNights
                              ? <span className="text-[12px] text-slate-500 font-semibold">{p} ليالي</span>
                              : <span className={`text-[14px] font-black ${isHighlight?"text-sunset":"text-slate-800"}`}>
                                  {typeof p==="number"?p.toLocaleString("en-US"):p}
                                </span>
                            }
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {["انتقالات ذهاب وعودة من الزقازيق","أتوبيسات للشواطئ مجاناً","تأمين سفر شامل","مشرف طوال الإقامة","شقق مكيفة ومجهزة","برنامج يومي متكامل"].map(item => (
                <div key={item} className="flex items-center gap-2 text-[12px] text-slate-700 bg-sky-50 rounded-xl px-3 py-2 border border-sky-100">
                  <CheckCircle size={14} className="text-emerald-500 flex-shrink-0"/> {item}
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3 items-center justify-between pt-4 border-t border-sky-100">
              <p className="text-[13px] text-slate-600 font-semibold">احجز مكانك قبل نفاذ الأماكن!</p>
              <div className="flex gap-2">
                <a href={waLink(`مرحباً Quick Air!\nأريد الاستفسار عن: ${tab.label}\nصيف 2026`)} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-bold text-white shadow-md"
                  style={{background:"linear-gradient(135deg,#25D366,#128C7E)"}}>
                  <MessageCircle size={14}/> احجز واتساب
                </a>
                <a href={`tel:${PHONES[0]}`} className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-bold text-ocean bg-white border border-sky-200 hover:border-sky2 transition-colors">
                  <Phone size={14}/> اتصل
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DahabSection() {
  return (
    <section id="dahab" className="py-16 px-4 bg-sky-soft">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-700 text-[11px] font-bold uppercase tracking-wider mb-3">
            <Sun size={12}/> رحلات دهب
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-ocean">سحر <span className="text-cyan-600">البحر الأحمر</span></h2>
        </div>
        <div className="overflow-x-auto border border-sky-100 rounded-2xl bg-white shadow-xl">
          <table className="w-full text-right text-[13px] min-w-[600px]">
            <thead className="bg-sky-50 text-ocean border-b border-sky-100">
              <tr>
                <th className="p-4 font-bold">الفندق</th>
                <th className="p-4 font-bold">الموقع</th>
                <th className="p-4 font-bold">الإقامة</th>
                <th className="p-4 font-bold text-center">4 أيام / 3 ليالي</th>
                <th className="p-4 font-bold text-center">5 أيام / 4 ليالي</th>
              </tr>
            </thead>
            <tbody>
              {DAHAB_PACKAGES.map((p, i) => (
                <tr key={i} className={`border-b border-sky-50 hover:bg-sky-50 transition-colors ${i%2===0?"bg-white":"bg-sky-50/40"}`}>
                  <td className="p-4 text-ocean font-bold">{p.name}</td>
                  <td className="p-4 text-slate-600">{p.loc}</td>
                  <td className="p-4 text-slate-600">{p.meals}</td>
                  <td className="p-4 font-black text-sunset text-center">{p.p4} ج.م</td>
                  <td className="p-4 font-black text-sunset text-center">{p.p5} ج.م</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-slate-700 text-[13px] bg-white p-5 rounded-2xl border border-sky-100 shadow-md">
          <p className="font-bold text-sky2 mb-3 text-[14px]">ملاحظات هامة:</p>
          <ul className="space-y-2">
            {[
              "رحلات الخميس: 4 أيام 3 ليالي شامل الانتقالات.",
              "رحلات الأحد: 5 أيام 4 ليالي شامل الانتقالات.",
              "السعر للفرد في الغرفة الدبل شامل الإقامة والانتقالات.",
              "سعر الكرسي الإضافي ذهاب وعودة 850 جنيه."
            ].map((item,i) => (
              <li key={i} className="flex gap-2 items-start text-[13px] text-slate-700">
                <CheckCircle size={15} className="text-emerald-500 flex-shrink-0 mt-0.5"/>{item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function PaxCounter({ label, sublabel, color, value, onChange }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-sky-50 border border-sky-100">
      <div>
        <div className={`text-[13px] font-bold ${color}`}>{label}</div>
        <div className="text-[11px] text-slate-500">{sublabel}</div>
      </div>
      <div className="flex items-center gap-3">
        <button onClick={() => onChange(Math.max(0, value - 1))}
          className="w-8 h-8 rounded-full bg-white border border-sky-200 hover:bg-ocean hover:text-white text-ocean font-black text-lg flex items-center justify-center transition-all">−</button>
        <span className="text-ocean font-black text-[16px] w-5 text-center">{value}</span>
        <button onClick={() => onChange(value + 1)}
          className="w-8 h-8 rounded-full bg-white border border-sky-200 hover:bg-ocean hover:text-white text-ocean font-black text-lg flex items-center justify-center transition-all">+</button>
      </div>
    </div>
  )
}

function FlightsSection() {
  const [tripType, setTripType] = useState("اتجاه واحد")
  const [form, setForm]         = useState({ from:"", to:"", date:"", returnDate:"", cls:"اقتصادي", budget:"" })
  const [pax, setPax]           = useState({ adults:1, children:0, infants:0 })
  const [showPax, setShowPax]   = useState(false)
  
  const [legs, setLegs] = useState([
    { from:"", to:"", date:"" },
    { from:"", to:"", date:"" },
  ])

  const set    = k => e => setForm(f => ({...f, [k]: e.target.value}))
  const setLeg = (i, k) => e => setLegs(ls => ls.map((l,idx) => idx===i ? {...l,[k]:e.target.value} : l))
  const addLeg = () => { if(legs.length < 6) setLegs(ls => [...ls, {from:"",to:"",date:""}]) }
  const rmLeg  = i => { if(legs.length > 2) setLegs(ls => ls.filter((_,idx) => idx !== i)) }

  const totalPax = pax.adults + pax.children + pax.infants
  const paxLabel = () => {
    const parts = []
    if(pax.adults)   parts.push(`${pax.adults} بالغ`)
    if(pax.children) parts.push(`${pax.children} طفل`)
    if(pax.infants)  parts.push(`${pax.infants} رضيع`)
    return parts.join(" · ") || "اختر المسافرين"
  }

  const handleSubmit = () => {
    if(tripType !== "متعدد الوجهات" && (!form.from || !form.to)){
      alert("من فضلك أدخل المطار المغادر والوجهة"); return
    }
    if(tripType === "متعدد الوجهات" && legs.some(l => !l.from || !l.to)){
      alert("من فضلك أدخل جميع المطارات"); return
    }
    if(pax.adults === 0){ alert("لازم يكون فيه بالغ واحد على الأقل"); return }

    const paxLine = [
      pax.adults   ? `${pax.adults} بالغ` : "",
      pax.children ? `${pax.children} طفل (2-11)` : "",
      pax.infants  ? `${pax.infants} رضيع (<2)` : "",
    ].filter(Boolean).join(" · ")

    let routeLines = ""
    if(tripType === "متعدد الوجهات"){
      routeLines = legs.map((l,i) =>
        `وجهة ${i+1}: من ${l.from||"؟"} إلى ${l.to||"؟"} | التاريخ: ${l.date||"مرن"}`
      ).join("\n")
    } else if(tripType === "ذهاب وعودة"){
      routeLines = `من: ${form.from}\nإلى: ${form.to}\nالذهاب: ${form.date||"مرن"}\nالعودة: ${form.returnDate||"مرن"}`
    } else {
      routeLines = `من: ${form.from}\nإلى: ${form.to}\nالتاريخ: ${form.date||"مرن"}`
    }

    const budgetLine = form.budget ? `الميزانية: ${Number(form.budget).toLocaleString("en-US")} ج.م` : ""

    const msg = [
      "استفسار حجز تذكرة طيران — Quick Air",
      `النوع: ${tripType}`,
      routeLines,
      `المسافرون: ${paxLine}`,
      `الدرجة: ${form.cls}`,
      budgetLine,
    ].filter(Boolean).join("\n")

    window.open(waLink(msg), "_blank")
  }

  const inp = "w-full bg-sky-50 border border-sky-200 rounded-xl px-4 py-3 text-slate-800 text-[14px] outline-none focus:border-sky2 focus:bg-white transition-colors placeholder:text-slate-400"

  return (
    <>
      <Wave fill="#E0F2FE"/>
      <section id="flights" className="py-16 px-4 bg-sky-soft-2">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-ocean text-[11px] font-bold uppercase tracking-wider mb-3">
              <Plane size={12}/> تذاكر الطيران
            </div>
            <h2 className="text-3xl font-black text-ocean">احجز <span className="text-sky2">تذكرتك</span></h2>
            <p className="text-slate-600 mt-2 text-sm">أفضل الأسعار على جميع الخطوط الجوية</p>
          </div>

          <div className="bg-white border border-sky-100 rounded-2xl p-6 md:p-8 shadow-xl">

            <div className="flex flex-wrap bg-sky-50 p-1 rounded-xl w-fit mx-auto mb-8 border border-sky-100 gap-1">
              {["اتجاه واحد", "ذهاب وعودة", "متعدد الوجهات"].map((type) => (
                <button key={type} onClick={() => setTripType(type)}
                  className={`px-6 py-2.5 rounded-lg text-[13px] font-bold transition-all duration-200 ${
                    tripType===type ? "bg-ocean text-white shadow-lg shadow-sky-200" : "text-slate-600 hover:text-ocean"
                  }`}>
                  {type}
                </button>
              ))}
            </div>

            {tripType !== "متعدد الوجهات" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold text-ocean uppercase tracking-wider">من (المطار أو المدينة)</label>
                  <input value={form.from} onChange={set("from")} placeholder="القاهرة — CAI"
                    className={inp} style={{direction:"ltr"}}/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold text-ocean uppercase tracking-wider">إلى</label>
                  <input value={form.to} onChange={set("to")} placeholder="دبي — DXB"
                    className={inp} style={{direction:"ltr"}}/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold text-ocean uppercase tracking-wider">
                    {tripType==="ذهاب وعودة" ? "تاريخ الذهاب" : "تاريخ السفر"}
                  </label>
                  <input type="date" value={form.date} onChange={set("date")} className={inp} style={{direction:"ltr"}}/>
                </div>
                {tripType==="ذهاب وعودة" && (
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold text-ocean uppercase tracking-wider">تاريخ العودة</label>
                    <input type="date" value={form.returnDate} onChange={set("returnDate")} className={inp} style={{direction:"ltr"}}/>
                  </div>
                )}
              </div>
            )}

            {tripType === "متعدد الوجهات" && (
              <div className="mb-4 space-y-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[12px] font-bold text-ocean uppercase tracking-wider">وجهات الرحلة</span>
                  <span className="text-[11px] text-slate-500">{legs.length} / 6 وجهات</span>
                </div>

                {legs.map((leg, i) => (
                  <div key={i} className="relative bg-sky-50 border border-sky-100 rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-black text-ocean bg-sky-100 px-2.5 py-1 rounded-full">
                        وجهة {i + 1}
                      </span>
                      {legs.length > 2 && (
                        <button onClick={() => rmLeg(i)}
                          className="w-6 h-6 rounded-full bg-red-100 hover:bg-red-200 text-red-500 text-xs flex items-center justify-center transition-all font-bold">
                          ✕
                        </button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">من</label>
                        <input value={leg.from} onChange={setLeg(i,"from")} placeholder="CAI"
                          className={inp + " text-[13px] py-2.5"} style={{direction:"ltr"}}/>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">إلى</label>
                        <input value={leg.to} onChange={setLeg(i,"to")} placeholder="DXB"
                          className={inp + " text-[13px] py-2.5"} style={{direction:"ltr"}}/>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">التاريخ</label>
                        <input type="date" value={leg.date} onChange={setLeg(i,"date")}
                          className={inp + " text-[13px] py-2.5"} style={{direction:"ltr"}}/>
                      </div>
                    </div>
                  </div>
                ))}

                {legs.length < 6 && (
                  <button onClick={addLeg}
                    className="w-full py-2.5 rounded-xl border border-dashed border-sky2 text-sky2 hover:bg-sky-50 text-[13px] font-bold transition-all flex items-center justify-center gap-2">
                    <span className="text-lg leading-none">+</span> إضافة وجهة
                  </button>
                )}
              </div>
            )}

            <div className="mb-4 relative">
              <label className="block text-[11px] font-bold text-ocean uppercase tracking-wider mb-2">المسافرون</label>
              <button onClick={() => setShowPax(v => !v)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border text-[14px] font-semibold transition-colors ${
                  showPax ? "bg-white border-sky2 text-ocean" : "bg-sky-50 border-sky-200 text-slate-700 hover:border-sky2"
                }`}>
                <span className="flex items-center gap-2"><Users size={15} className="text-sky2"/>{paxLabel()}</span>
                <ChevronDown size={15} className={`text-slate-400 transition-transform ${showPax?"rotate-180":""}`}/>
              </button>

              {showPax && (
                <div className="absolute top-full mt-2 inset-x-0 z-30 bg-white border border-sky-100 rounded-2xl p-4 shadow-2xl space-y-3">
                  <PaxCounter label="بالغ" sublabel="+12 سنة" color="text-ocean"
                    value={pax.adults} onChange={v => setPax(p => ({...p, adults: Math.max(1,v)}))}/>
                  <PaxCounter label="طفل" sublabel="2 - 11 سنة" color="text-sky2"
                    value={pax.children} onChange={v => setPax(p => ({...p, children:v}))}/>
                  <PaxCounter label="رضيع" sublabel="أقل من سنتين" color="text-sunset"
                    value={pax.infants} onChange={v => {
                      if(v <= pax.adults) setPax(p => ({...p, infants:v}))
                      else alert("عدد الرضع لا يمكن أن يتجاوز عدد البالغين")
                    }}/>
                  <p className="text-[11px] text-slate-500 border-t border-sky-100 pt-3">
                    ملاحظة: الرضع يجلسون في حضن شخص بالغ (بدون مقعد منفصل)
                  </p>
                  <button onClick={() => setShowPax(false)}
                    className="w-full py-2 rounded-xl bg-sky2 hover:bg-ocean-soft text-white text-[13px] font-bold transition-colors">
                    تأكيد — {totalPax} مسافر
                  </button>
                </div>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-[11px] font-bold text-ocean uppercase tracking-wider mb-2">درجة السفر</label>
              <div className="flex gap-2 flex-wrap">
                {["اقتصادي", "رجال أعمال", "أولى"].map((ar) => (
                  <button key={ar} onClick={() => setForm(f => ({...f, cls:ar}))}
                    className={`px-5 py-2.5 rounded-xl text-[13px] font-bold transition-all flex flex-col items-center leading-tight ${
                      form.cls===ar
                        ? "bg-sky2 text-white shadow-lg shadow-sky-200"
                        : "bg-sky-50 border border-sky-200 text-slate-600 hover:text-ocean hover:bg-sky-100"
                    }`}>
                    <span>{ar}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-[11px] font-bold text-ocean uppercase tracking-wider mb-2">
                الميزانية (جنيه مصري) — اختياري
              </label>
              <div className="relative">
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-[13px] font-bold select-none">ج.م</span>
                <input
                  type="number"
                  value={form.budget}
                  onChange={set("budget")}
                  placeholder="مثال: 15000"
                  className={inp + " pr-14"}
                  style={{direction:"ltr"}}
                />
              </div>
              {form.budget && (
                <p className="text-[12px] text-sky2 mt-1.5 font-semibold">
                  = {Number(form.budget).toLocaleString("en-US")} ج.م
                </p>
              )}
            </div>

            <button onClick={handleSubmit}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-[15px] font-black text-white
                bg-gradient-to-r from-ocean to-sky2 hover:from-ocean-soft hover:to-sky2
                shadow-xl shadow-sky-200 hover:shadow-sky-300 hover:-translate-y-0.5 transition-all">
              <Plane size={17}/> استفسر عبر واتساب
            </button>
          </div>
        </div>
      </section>
      <Wave fill="#FFFFFF" flip/>
    </>
  )
}

function WhyUs() {
  return (
    <section id="why" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-sunset text-[11px] font-bold uppercase tracking-wider mb-3">
            <Star size={12}/> ليه تصيّف مع كويك اير؟
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-ocean">تجربة <span className="text-sunset">لا تُنسى</span></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_US.map(({icon:Icon,title,desc,color,bg},i) => (
            <div key={i} className="group flex gap-4 p-5 rounded-2xl bg-white border border-sky-100 shadow-md hover:border-sky2 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className={`w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl ${bg}`}>
                <Icon size={22} className={color}/>
              </div>
              <div>
                <h3 className="font-black text-ocean text-[15px] mb-1">{title}</h3>
                <p className="text-[13px] text-slate-600 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
