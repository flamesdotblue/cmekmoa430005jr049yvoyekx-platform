'use client'
import { useState } from 'react'

const snippets: Record<string, { label: string, code: string }> = {
  js: {
    label: 'JavaScript',
    code: `// 1) Install
// npm i @vanishdev/sdk
// 2) One line to authenticate
import { vanish } from '@vanishdev/sdk'
const session = await vanish.login() // 🔓 biometrics & passkeys
console.log(session.user) // { id, email }`
  },
  html: {
    label: 'HTML',
    code: `<!-- One line via script tag -->
<script src="https://cdn.vanish.dev/sdk.min.js"></script>
<script>
  const session = await window.vanish.login()
  console.log(session.jwt)
</script>`
  },
  swift: {
    label: 'Swift',
    code: `// Swift (iOS)
import Vanish
let session = try await Vanish.login()
print(session.user.email)`
  },
  kotlin: {
    label: 'Kotlin',
    code: `// Kotlin (Android)
import dev.vanish.Vanish
val session = Vanish.login()
println(session.user.id)`
  }
}

export default function SnippetTabs() {
  const [active, setActive] = useState<keyof typeof snippets>('js')
  const code = snippets[active].code

  async function copy() {
    await navigator.clipboard.writeText(code)
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {Object.entries(snippets).map(([k, v]) => (
            <button key={k} onClick={() => setActive(k as any)} className={`px-3 py-1.5 rounded-md text-sm border ${active===k? 'border-primary-500 text-primary-500 bg-primary-500/10':'border-white/10 text-white/70 hover:text-white'}`}>{v.label}</button>
          ))}
        </div>
        <button onClick={copy} className="text-xs text-white/60 hover:text-white">Copy</button>
      </div>
      <pre className="code mt-4 p-4 bg-black/40 rounded-lg border border-white/5 overflow-auto"><code>{code}</code></pre>
      <div className="mt-3 text-xs text-white/50">Drop-in SDK with built-in WebAuthn flows. Works with your existing backend.</div>
    </div>
  )
}
