import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { email } = await request.json().catch(() => ({ email: '' })) as { email?: string }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 })
  }
  console.log('[subscribe]', email)
  return NextResponse.json({ ok: true })
}
