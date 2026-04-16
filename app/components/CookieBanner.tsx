'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'cookie-notice-dismissed'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true)
    }
  }, [])

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="region"
      aria-label="Cookie-Hinweis"
      className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 sm:px-6"
    >
      <div className="max-w-xl mx-auto rounded-2xl px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xl shadow-black/40" style={{ background: '#354F52', border: '1px solid rgba(202,210,197,0.12)' }}>
        <p className="text-sm leading-relaxed" style={{ color: '#84A98C' }}>
          Diese Website verwendet keine Tracking-Cookies.{' '}
          <a
            href="/datenschutz"
            className="hover:underline underline-offset-2"
            style={{ color: '#FFFFFF' }}
          >
            Datenschutz
          </a>
        </p>
        <button
          onClick={dismiss}
          className="flex-shrink-0 text-xs font-semibold px-4 py-2 rounded-full active:scale-[0.97] transition-all"
          style={{ background: '#84A98C', color: '#1E2E34' }}
        >
          Schließen
        </button>
      </div>
    </div>
  )
}
