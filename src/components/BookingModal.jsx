import { useState, useEffect } from 'react'
import { X, MessageCircle } from 'lucide-react'
import { waLink } from '../data'

const REGIONS   = ['مرسى مطروح', 'الغردقة', 'شرم الشيخ', 'دهب', 'الأقصر وأسوان', 'سيوة', 'العمرة والحج']
const TRIP_TYPES = ['باقة كاملة (طيران + فندق + مواصلات)', 'تذكرة طيران فقط', 'رحلة يوم واحد', 'عمرة']

export default function BookingModal({ open, onClose, initialDest = '' }) {
  const [form, setForm] = useState({
    name: '', phone: '', dest: initialDest, type: TRIP_TYPES[0],
    pax: '2', date: '', notes: '',
  })

  useEffect(() => {
    if (initialDest) setForm(f => ({ ...f, dest: initialDest }))
  }, [initialDest])

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }))

  const submit = () => {
    if (!form.name || !form.phone) { alert('من فضلك أدخل اسمك ورقم هاتفك'); return }
    const msg = `🛫 طلب حجز — Quick Air Zagazig\n\n👤 الاسم: ${form.name}\n📞 الهاتف: ${form.phone}\n📍 الوجهة: ${form.dest}\n🎫 النوع: ${form.type}\n👥 الأفراد: ${form.pax}\n📅 التاريخ: ${form.date || 'مرن'}\n📝 ملاحظات: ${form.notes || '—'}`
    window.open(waLink(msg), '_blank')
    onClose()
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,.75)', backdropFilter: 'blur(12px)' }}
      onClick={e => e.target === e.currentTarget && onClose()}>

      <div className="bg-[#1E293B] border border-white/10 rounded-2xl p-7 w-full max-w-md
        max-h-[90vh] overflow-y-auto animate-fade-up">

        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[18px] font-black text-white">🎫 احجز رحلتك مع Quick Air</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {[
          { label: 'الاسم الكامل', key: 'name', type: 'text',   placeholder: 'محمد أحمد' },
          { label: 'رقم الهاتف',  key: 'phone', type: 'tel',    placeholder: '01xxxxxxxxx' },
          { label: 'عدد الأفراد', key: 'pax',   type: 'number', placeholder: '2' },
          { label: 'تاريخ السفر', key: 'date',  type: 'date',   placeholder: '' },
        ].map(f => (
          <div key={f.key} className="flex flex-col gap-1.5 mb-4">
            <label className="text-[12px] font-bold text-slate-300">{f.label}</label>
            <input type={f.type} placeholder={f.placeholder} value={form[f.key]}
              onChange={set(f.key)}
              className="bg-white/[.06] border border-white/10 rounded-xl px-4 py-2.5
                text-white text-[14px] outline-none focus:border-[#E63946] transition-colors
                placeholder:text-slate-500" />
          </div>
        ))}

        <div className="flex flex-col gap-1.5 mb-4">
          <label className="text-[12px] font-bold text-slate-300">الوجهة</label>
          <select value={form.dest} onChange={set('dest')}
            className="bg-white/[.06] border border-white/10 rounded-xl px-4 py-2.5
              text-white text-[14px] outline-none focus:border-[#E63946] transition-colors">
            <option value="">اختر وجهة</option>
            {REGIONS.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>

        <div className="flex flex-col gap-1.5 mb-4">
          <label className="text-[12px] font-bold text-slate-300">نوع الرحلة</label>
          <select value={form.type} onChange={set('type')}
            className="bg-white/[.06] border border-white/10 rounded-xl px-4 py-2.5
              text-white text-[14px] outline-none focus:border-[#E63946] transition-colors">
            {TRIP_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        <div className="flex flex-col gap-1.5 mb-6">
          <label className="text-[12px] font-bold text-slate-300">ملاحظات إضافية</label>
          <textarea rows={2} placeholder="أي طلبات خاصة؟" value={form.notes}
            onChange={set('notes')}
            className="bg-white/[.06] border border-white/10 rounded-xl px-4 py-2.5
              text-white text-[14px] outline-none focus:border-[#E63946] transition-colors
              placeholder:text-slate-500 resize-none" />
        </div>

        <button onClick={submit}
          className="w-full py-3.5 rounded-xl font-black text-[15px] text-white
            flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
          style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)' }}>
          <MessageCircle size={17} /> أرسل طلب الحجز على واتساب
        </button>
      </div>
    </div>
  )
}
