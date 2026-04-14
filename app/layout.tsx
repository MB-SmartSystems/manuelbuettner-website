import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import '@/styles/globals.css'

const ibmPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

const siteUrl = 'https://manuelbuettner.de'

export const metadata: Metadata = {
  title: {
    default: 'Manuel Büttner — Schlagzeuglehrer',
    template: '%s | Manuel Büttner',
  },
  description: 'Schlagzeugunterricht in der Region Darmstadt/Rhein-Main. Professioneller Unterricht für Anfänger und Fortgeschrittene.',
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: siteUrl,
    siteName: 'manuelbuettner.de',
    title: 'Manuel Büttner — Schlagzeuglehrer',
    description: 'Professioneller Schlagzeugunterricht. Für Anfänger, Kinder und Erwachsene.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={ibmPlex.variable}>
      <body className="bg-base text-on-dark font-[family-name:var(--font-body)]">
        {children}
      </body>
    </html>
  )
}
