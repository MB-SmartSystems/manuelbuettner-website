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
      <div className="max-w-xl mx-auto bg-[#1c1a16] border border-[rgba(255,248,235,0.1)] rounded-2xl px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xl shadow-black/40">
        <p className="text-[#a09880] text-sm leading-relaxed">
          Diese Website verwendet keine Tracking-Cookies.{' '}
          <a
            href="/datenschutz"
            className="text-[#d4a843] hover:underline underline-offset-2"
          >
            Datenschutz
          </a>
        </p>
        <button
          onClick={dismiss}
          className="flex-shrink-0 text-xs font-semibold bg-[#d4a843] text-[#0d0c0a] px-4 py-2 rounded-full hover:bg-[#e8bc55] active:scale-[0.97] transition-all"
        >
          Schließen
        </button>
      </div>
    </div>
  )
}
