export default function SectionHead({ tag, title, accent, sub }) {
  return (
    <div className="text-center mb-12">
      <div className="inline-block px-4 py-1.5 rounded-full bg-[rgba(230,57,70,.1)]
        border border-[rgba(230,57,70,.25)] text-[11px] font-bold text-[#E63946]
        uppercase tracking-widest mb-3">
        {tag}
      </div>
      <h2 className="text-[clamp(26px,4vw,42px)] font-black text-white leading-snug mb-2">
        {title} <span className="text-[#E63946]">{accent}</span>
      </h2>
      {sub && <p className="text-[15px] text-slate-500 max-w-md mx-auto">{sub}</p>}
    </div>
  )
}
