'use client'

import { useState } from 'react'

const ACCENT = '#52796F'
const BASE = '#0a0a0a'

export default function ContactForm() {
  const [form, setForm] = useState({ vorname: '', nachname: '', email: '', phone: '', anliegen: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ vorname: '', nachname: '', email: '', phone: '', anliegen: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-[#1a1a1a] border border-[rgba(255,255,255,0.10)] rounded-lg px-4 py-3.5 text-white text-sm placeholder:text-[rgba(255,255,255,0.35)] focus:outline-none focus:border-[#52796F] focus:bg-[rgba(82,121,111,0.04)] transition-all'

  if (status === 'success') {
    return (
      <div className="text-center py-12 space-y-3">
        <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center" style={{ background: 'rgba(82,121,111,0.10)', border: '1px solid rgba(82,121,111,0.30)' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12l5 5L20 7" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="font-medium" style={{ color: '#ffffff' }}>Nachricht erhalten!</p>
        <p className="text-sm" style={{ color: ACCENT }}>Ich melde mich zeitnah bei dir.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs mb-2 uppercase tracking-widest" style={{ color: ACCENT }}>Vorname *</label>
          <input
            name="vorname"
            value={form.vorname}
            onChange={handleChange}
            required
            placeholder="Dein Vorname"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs mb-2 uppercase tracking-widest" style={{ color: ACCENT }}>Nachname *</label>
          <input
            name="nachname"
            value={form.nachname}
            onChange={handleChange}
            required
            placeholder="Dein Nachname"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs mb-2 uppercase tracking-widest" style={{ color: ACCENT }}>E-Mail *</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="deine@mail.de"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs mb-2 uppercase tracking-widest" style={{ color: ACCENT }}>Telefon (optional)</label>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+49 ..."
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs mb-2 uppercase tracking-widest" style={{ color: ACCENT }}>Dein Anliegen *</label>
        <textarea
          name="anliegen"
          value={form.anliegen}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Was möchtest du mir mitteilen?"
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'error' && (
        <p className="text-red-400 text-sm">Etwas ist schiefgelaufen. Bitte erneut versuchen.</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full font-semibold py-4 rounded-lg active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed mt-2"
        style={{ background: ACCENT, color: BASE }}
      >
        {status === 'sending' ? 'Wird gesendet …' : 'Angaben absenden'}
      </button>
    </form>
  )
}
