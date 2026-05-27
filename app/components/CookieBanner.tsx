'use client'

// Consent-Banner (Opt-in). Google Tag Manager (mit GA4-Tag) wird ERST nach Einwilligung
// geladen (§ 25 Abs. 1 TTDSG). Die cookielose Umami-Messung laeuft unabhaengig weiter.
import { useEffect, useState } from 'react'
import Script from 'next/script'

const STORAGE_KEY = 'cookie-consent'
const GTM_ID = 'GTM-WBXP8DQZ'

export default function CookieBanner() {
  const [consent, setConsent] = useState<'pending' | 'accepted' | 'rejected'>('pending')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'accepted') setConsent('accepted')
    else if (stored === 'rejected') setConsent('rejected')
    else setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setConsent('accepted')
    setVisible(false)
  }
  function reject() {
    localStorage.setItem(STORAGE_KEY, 'rejected')
    setConsent('rejected')
    setVisible(false)
  }

  return (
    <>
      {consent === 'accepted' && (
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      )}

      {visible && (
        <div
          role="region"
          aria-label="Cookie-Einwilligung"
          className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 sm:px-6"
        >
          <div
            className="max-w-xl mx-auto rounded-2xl px-5 py-4 flex flex-col gap-3 shadow-xl shadow-black/40"
            style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <p className="text-sm leading-relaxed" style={{ color: '#a0a0a0' }}>
              Wir nutzen Cookies für die statistische Analyse mit Google Analytics, um die Seite zu
              verbessern. Die Reichweitenmessung mit Umami läuft cookielos ohne Einwilligung.{' '}
              <a href="/datenschutz" className="hover:underline underline-offset-2" style={{ color: '#FFFFFF' }}>
                Datenschutz
              </a>
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={accept}
                className="text-xs font-semibold px-4 py-2 rounded-full active:scale-[0.97] transition-all"
                style={{ background: '#52796F', color: '#0a0a0a' }}
              >
                Akzeptieren
              </button>
              <button
                onClick={reject}
                className="text-xs font-semibold px-4 py-2 rounded-full active:scale-[0.97] transition-all"
                style={{ background: 'transparent', color: '#a0a0a0', border: '1px solid rgba(255,255,255,0.15)' }}
              >
                Nur notwendige
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
