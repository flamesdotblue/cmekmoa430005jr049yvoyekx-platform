export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto max-w-6xl px-5 grid sm:grid-cols-2 gap-6 items-center">
        <div>
          <div className="text-white/70 text-sm">© {new Date().getFullYear()} Vanish Labs, Inc.</div>
          <div className="text-white/50 text-xs mt-2">We never store passwords or OTPs. Authentication is performed using device-bound keys and platform biometrics.</div>
        </div>
        <div className="sm:text-right text-sm space-x-4">
          <a href="#">Privacy</a>
          <a href="#">Security</a>
          <a href="#">Status</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  )
}
