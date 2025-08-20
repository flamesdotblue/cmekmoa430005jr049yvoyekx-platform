import './globals.css'
import type { ReactNode } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vanish — Auth that disappears.',
  description: 'Passwordless authentication SDK with biometric logins in one line of code.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Vanish — Auth that disappears.',
    description: 'Passwordless authentication SDK with biometric logins in one line of code.',
    type: 'website'
  },
  icons: [{ rel: 'icon', url: '/favicon.svg' }]
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="gradient min-h-screen">
        {children}
      </body>
    </html>
  )
}
