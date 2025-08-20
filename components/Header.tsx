import Logo from './Logo'

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-base-900/60 border-b border-white/5">
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo />
          <span className="text-sm text-white/60 hidden sm:inline">Auth that disappears.</span>
        </div>
        <nav className="flex items-center gap-2">
          <a href="#code" className="btn-ghost text-sm px-3 py-2">Docs</a>
          <a href="#early" className="btn-primary text-sm px-3 py-2">Request access</a>
        </nav>
      </div>
    </header>
  )
}
