import Header from '@/components/Header'
import SnippetTabs from '@/components/SnippetTabs'
import TrustBar from '@/components/TrustBar'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main>
      <Header />

      <section className="relative pt-20 sm:pt-28 pb-10">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-base-800/80 px-3 py-1 text-xs text-white/70 mb-4">
                <span className="h-2 w-2 rounded-full bg-primary-500"></span>
                Private beta open
              </div>
              <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">Auth that disappears.</h1>
              <p className="mt-5 text-lg text-white/80 max-w-xl">Ship passwordless biometric logins your users already have. Drop a single line of code and let Face ID, Touch ID, and WebAuthn handle the rest.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#early" className="btn-primary">Get early access</a>
                <a href="#code" className="btn-ghost">View code</a>
              </div>
              <ul className="mt-6 text-white/60 text-sm space-y-1 list-disc list-inside">
                <li>One-line client SDKs for web, iOS, and Android</li>
                <li>Backed by WebAuthn / FIDO2, passkeys, and platform biometrics</li>
                <li>No passwords, no OTP fatigue, no PII in your servers</li>
              </ul>
            </div>
            <div id="code" className="card p-4 md:p-6">
              <SnippetTabs />
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="py-14">
        <div className="mx-auto max-w-6xl px-5 grid md:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="text-lg font-semibold">Biometrics built in</h3>
            <p className="mt-2 text-white/70">Face ID, Touch ID, Windows Hello, and more via native platform authenticators. No passwords to store or reset.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold">Zero trust by default</h3>
            <p className="mt-2 text-white/70">Key material never leaves the user’s device. We broker WebAuthn flows and attestations with strict device binding.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold">Minutes, not weeks</h3>
            <p className="mt-2 text-white/70">Integrate with a single call. Bring your own user store or connect to any JWT/OAuth backend.</p>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-6xl px-5 grid md:grid-cols-2 gap-6 items-stretch">
          <div className="card p-6">
            <h3 className="text-lg font-semibold">Security you can verify</h3>
            <ul className="mt-3 space-y-2 text-white/70 text-sm">
              <li>• WebAuthn / FIDO2 compliant</li>
              <li>• OWASP ASVS aligned implementation</li>
              <li>• SDKs open source for review</li>
              <li>• No passwords, shared secrets, or SMS OTPs</li>
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold">What builders say</h3>
            <div className="mt-3 space-y-4">
              <blockquote className="bg-black/20 border border-white/5 rounded-lg p-4 text-white/80 text-sm">“We replaced a brittle OTP flow with Vanish in an afternoon. Support for passkeys just worked across our stack.” — Elena, Staff Engineer</blockquote>
              <blockquote className="bg-black/20 border border-white/5 rounded-lg p-4 text-white/80 text-sm">“The one-line API is not marketing—our sign-in time dropped from 11s to under 2s.” — Jared, CTO</blockquote>
            </div>
          </div>
        </div>
      </section>

      <section id="early" className="py-16">
        <div className="mx-auto max-w-3xl px-5">
          <div className="card p-6 md:p-8">
            <h2 className="text-2xl font-semibold">Get early access</h2>
            <p className="mt-2 text-white/70">Join the private beta. Well reach out with access and docs.</p>
            <SignupForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

'use client'
import { useState } from 'react'

function SignupForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle'|'ok'|'error'|'loading'>('idle')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) })
      if (!res.ok) throw new Error('failed')
      setStatus('ok')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
      <label className="sr-only" htmlFor="email">Work email</label>
      <input id="email" type="email" placeholder="you@company.com" value={email} onChange={e=>setEmail(e.target.value)} required />
      <button className="btn-primary" type="submit" disabled={status==='loading'}>{status==='loading'?'Submitting…':'Request access'}</button>
      {status==='ok' && <p className="text-sm text-primary-500 sm:col-span-2">Thanks! Well be in touch shortly.</p>}
      {status==='error' && <p className="text-sm text-red-300 sm:col-span-2">Something went wrong. Try again.</p>}
    </form>
  )
}
