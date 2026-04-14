import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import '@/styles/globals.css'
import CookieBanner from '@/app/components/CookieBanner'
import Script from 'next/script'

const ibmPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

const siteUrl = 'https://manuelbuettner.de'

export const metadata: Metadata = {
  title: {
    default: 'Manuel Büttner — Schlagzeuglehrer in Alsbach-Hähnlein',
    template: '%s | Manuel Büttner',
  },
  description:
    'Schlagzeug- und Klavierunterricht mit 29+ Jahren Erfahrung. Professionelle Ausbildung, strukturierte Lernlogik. Kostenlose Probestunde.',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: siteUrl,
    siteName: 'manuelbuettner.de',
    title: 'Manuel Büttner — Schlagzeuglehrer in Alsbach-Hähnlein',
    description:
      'Schlagzeug- und Klavierunterricht mit 29+ Jahren Erfahrung. Professionelle Ausbildung, strukturierte Lernlogik. Kostenlose Probestunde.',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Manuel Büttner — Schlagzeug- & Klavierunterricht',
  description:
    'Schlagzeug- und Klavierunterricht mit 29+ Jahren Erfahrung. Professionelle Ausbildung, strukturierte Lernlogik.',
  url: siteUrl,
  telephone: '+4917036487890',
  email: 'info@manuelbuettner.de',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Schlesierstraße 19a',
    addressLocality: 'Alsbach-Hähnlein',
    postalCode: '64665',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 49.7333,
    longitude: 8.5833,
  },
  sameAs: [siteUrl],
  additionalType: 'https://schema.org/MusicTeacher',
  priceRange: '€€',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={ibmPlex.variable}>
      <body className="bg-base text-on-dark font-[family-name:var(--font-body)]">
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
