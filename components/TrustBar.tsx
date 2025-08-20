export default function TrustBar() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-5">
        <div className="card p-4 md:p-6">
          <div className="grid md:grid-cols-4 gap-6 items-center text-center">
            <Badge title="WebAuthn / FIDO2" subtitle="Standards-based" />
            <Badge title="SOC 2" subtitle="In progress" />
            <Badge title="Open source SDKs" subtitle="Public review" />
            <Badge title="OWASP ASVS" subtitle="Aligned" />
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 opacity-70">
          <Logo name="Edge" />
          <Logo name="Cloud" />
          <Logo name="Passkey" />
          <Logo name="Device" />
        </div>
      </div>
    </section>
  )
}

function Badge({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="text-sm font-semibold">{title}</div>
      <div className="text-xs text-white/60">{subtitle}</div>
    </div>
  )
}

function Logo({ name }: { name: string }) {
  return (
    <div className="card py-6 flex items-center justify-center">
      <svg width="100" height="24" viewBox="0 0 100 24" aria-hidden>
        <defs>
          <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#22D3EE" />
            <stop offset="1" stopColor="#A78BFA" />
          </linearGradient>
        </defs>
        <text x="0" y="17" fill="url(#g2)" fontFamily="ui-sans-serif, system-ui" fontSize="18" fontWeight="600">{name}</text>
      </svg>
    </div>
  )
}
