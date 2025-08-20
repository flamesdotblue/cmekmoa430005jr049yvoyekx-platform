export default function Logo({ size = 28 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2">
      <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden>
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#22D3EE" />
            <stop offset="1" stopColor="#A78BFA" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="16" fill="#0B0F14" />
        <path d="M18 18h28v6H18z" fill="url(#lg)" />
        <path d="M22 28h20v6H22z" fill="url(#lg)" opacity=".8" />
        <path d="M26 38h12v6H26z" fill="url(#lg)" opacity=".6" />
      </svg>
      <span className="font-semibold tracking-tight">Vanish</span>
    </div>
  )
}
