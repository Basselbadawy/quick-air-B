import { useState, useEffect } from 'react'
import { Phone, MessageCircle, Menu, X } from 'lucide-react'
import { waLink, telLink, PHONE } from '../data'

export default function Navbar({ onBook }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#destinations', label: 'الوجهات' },
    { href: '#packages',     label: 'الباقات' },
    { href: '#matrouh',      label: 'مرسى مطروح' },
    { href: '#daytrips',     label: 'رحلات اليوم' },
    { href: '#testimonials', label: 'آراء العملاء' },
  ]

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300
      ${scrolled ? 'bg-navy/98 shadow-lg shadow-black/30' : 'bg-navy/90'}
      backdrop-blur-md border-b border-white/5`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <span className="text-[19px] font-black text-[#E63946] tracking-wide">Quick Air Zagazig</span>
          <span className="text-[10px] text-slate-400 font-semibold">كويك اير للسياحة والطيران</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-6 list-none">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href}
                className="text-[13px] font-semibold text-slate-400 hover:text-[#E63946] transition-colors duration-200">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a href={telLink()}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10
              text-[13px] font-bold text-white hover:border-[#E63946] hover:bg-[rgba(230,57,70,0.1)]
              transition-all duration-200">
            <Phone size={14} /> {PHONE}
          </a>
          <button onClick={onBook}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#E63946] hover:bg-[#C1121F]
              text-[13px] font-bold text-white transition-colors duration-200">
            <MessageCircle size={14} /> احجز الآن
          </button>
          <button className="lg:hidden p-2 text-slate-400" onClick={() => setMobileOpen(v => !v)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-soft border-t border-white/5 px-4 py-4 flex flex-col gap-3">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-[14px] font-semibold text-slate-300 py-2 border-b border-white/5"
              onClick={() => setMobileOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={telLink()} className="flex items-center gap-2 text-[13px] font-bold text-[#E63946] py-2">
            <Phone size={14} /> اتصل بنا مباشرة
          </a>
        </div>
      )}
    </nav>
  )
}
