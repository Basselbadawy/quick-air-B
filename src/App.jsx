import { useState, useEffect, useCallback } from 'react'
import { supabase, DEMO_DESTINATIONS, DEMO_PACKAGES } from './data'

import Navbar         from './components/Navbar'
import Hero           from './components/Hero'
import StatsBar       from './components/StatsBar'
import Destinations   from './components/Destinations'
import Packages       from './components/Packages'
import MatrouhSection from './components/MatrouhSection'
import DayTrips       from './components/DayTrips'
import Testimonials   from './components/Testimonials'
import { CTASection, Footer } from './components/CTAFooter'
import BookingModal   from './components/BookingModal'

// ── عرض العين السخنة (تمت إضافته ليظهر في أفضل عروض الصيف) ──
const SOKHNA_OFFER = {
  id: "sokhna-lo2lo2a-offer",
  title: "رحلة العين السخنة - قرية اللؤلؤة",
  price_per_person: 400,
  dest_name: "العين السخنة",
  type: "package", 
  date: "الإثنين 7 / 6",
  description: "يوم كامل على البحر في شاطئ تابع للقوات المسلحة (أمان تام، نظافة، وشاطئ محترم جداً). هنتحرك الصبح بدري ونرجع بالليل وإحنا فاصلين ومبسوطين.",
  image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  features: ["باصات سياحية مكيفة", "شاطئ عائلي محترم", "أرخص سعر", "شامل الانتقالات"],
  badge: "أفضل عروض الصيف 🔥"
};

export default function App() {
  const [destinations, setDestinations] = useState([])
  const [packages,     setPackages]     = useState([])
  const [loadingDests, setLoadingDests] = useState(true)
  const [loadingPkgs,  setLoadingPkgs]  = useState(true)
  const [modalOpen,    setModalOpen]    = useState(false)
  const [modalDest,    setModalDest]    = useState('')

  /* ── Fetch destinations ── */
  useEffect(() => {
    async function fetchDests() {
      setLoadingDests(true)
      try {
        const { data, error } = await supabase
          .from('destinations')
          .select('*')
          .order('featured', { ascending: false })
        if (error || !data?.length) throw error
        setDestinations(data)
      } catch {
        setDestinations(DEMO_DESTINATIONS)
      } finally {
        setLoadingDests(false)
      }
    }
    fetchDests()
  }, [])

  /* ── Fetch packages ── */
  useEffect(() => {
    async function fetchPkgs() {
      setLoadingPkgs(true)
      try {
        const { data, error } = await supabase
          .from('packages')
          .select('*, destinations(name)')
          .eq('available', true)
          .order('created_at', { ascending: false })
        if (error || !data?.length) throw error
        
        // normalise dest_name
        const normalised = data.map(p => ({
          ...p,
          dest_name: p.destinations?.name || p.dest_name || '',
        }))
        
        // دمج عرض السخنة ليكون في مقدمة الباقات
        setPackages([SOKHNA_OFFER, ...normalised])
      } catch {
        // إضافة العرض للداتا التجريبية في حالة عدم الاتصال
        setPackages([SOKHNA_OFFER, ...DEMO_PACKAGES])
      } finally {
        setLoadingPkgs(false)
      }
    }
    fetchPkgs()
  }, [])

  /* ── Search handler (scrolls to packages + could filter) ── */
  const handleSearch = useCallback(({ dest, type, budget }) => {
    let filtered = DEMO_PACKAGES.filter(p => {
      const matchDest   = !dest   || p.dest_name?.includes(dest) || p.title?.includes(dest)
      const matchType   = !type   || (type === 'باقة كاملة' ? p.type === 'package' : p.type === 'ticket')
      const matchBudget = !budget || p.price_per_person <= Number(budget)
      return matchDest && matchType && matchBudget
    })
    if (packages.length > 0) {
      filtered = packages.filter(p => {
        const matchDest   = !dest   || p.dest_name?.includes(dest) || p.title?.includes(dest)
        const matchType   = !type   || (type === 'باقة كاملة' ? p.type === 'package' : p.type === 'ticket')
        const matchBudget = !budget || p.price_per_person <= Number(budget)
        return matchDest && matchType && matchBudget
      })
    }
    setPackages(filtered.length > 0 ? filtered : (packages.length > 0 ? packages : DEMO_PACKAGES))
    document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })
  }, [packages])

  const openModal = (dest = '') => {
    setModalDest(dest)
    setModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-300" dir="rtl">
      <Navbar onBook={() => openModal()} />

      <Hero onSearch={handleSearch} />

      <StatsBar />

      <Destinations
        destinations={destinations}
        loading={loadingDests}
        onBook={openModal}
      />

      {/* قسم العروض الذي سيظهر فيه عرض السخنة */}
      <Packages
        packages={packages}
        loading={loadingPkgs}
      />

      <MatrouhSection />

      <DayTrips />

      <Testimonials />

      <CTASection onBook={() => openModal()} />

      <Footer />

      <BookingModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        initialDest={modalDest}
      />
    </div>
  )
}
