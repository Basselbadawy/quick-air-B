export function SkeletonCard({ count = 6 }) {
  return Array.from({ length: count }).map((_, i) => (
    <div key={i} className="bg-[#1E293B] border border-white/[.06] rounded-2xl overflow-hidden">
      <div className="skeleton-shimmer h-48 w-full" />
      <div className="p-4 space-y-3">
        <div className="skeleton-shimmer h-3 rounded w-3/4" />
        <div className="skeleton-shimmer h-3 rounded w-1/2" />
        <div className="skeleton-shimmer h-3 rounded w-2/3" />
      </div>
    </div>
  ))
}
