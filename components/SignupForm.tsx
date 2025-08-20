'use client'

import { useState } from 'react'

export default function SignupForm() {
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
      {status==='ok' && <p className="text-sm text-primary-500 sm:col-span-2">Thanks! We'll be in touch shortly.</p>}
      {status==='error' && <p className="text-sm text-red-300 sm:col-span-2">Something went wrong. Try again.</p>}
    </form>
  )
}
