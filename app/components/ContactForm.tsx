'use client'

import { useState } from 'react'

const requestTypes = [
  'Probestunde buchen',
  'Infos zu Preisen & Paketen',
  'Online-Unterricht anfragen',
  'Sonstiges',
]

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
        setForm({ name: '', email: '', phone: '', type: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-[rgba(202,210,197,0.04)] border border-[rgba(202,210,197,0.10)] rounded-lg px-4 py-3.5 text-[#CAD2C5] text-sm placeholder:text-[#52796F] focus:outline-none focus:border-[#84A98C] focus:bg-[rgba(132,169,140,0.05)] transition-all'

  if (status === 'success') {
    return (
      <div className="text-center py-12 space-y-3">
        <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center" style={{ background: 'rgba(132,169,140,0.1)', border: '1px solid rgba(132,169,140,0.3)' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12l5 5L20 7" stroke="#84A98C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="font-medium" style={{ color: '#CAD2C5' }}>Nachricht erhalten!</p>
        <p className="text-sm" style={{ color: '#84A98C' }}>Ich melde mich zeitnah bei dir.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs mb-2 uppercase tracking-widest" style={{ color: '#84A98C' }}>Name *</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Dein Name"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs mb-2 uppercase tracking-widest" style={{ color: '#84A98C' }}>E-Mail *</label>
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
      </div>

      <div>
        <label className="block text-xs mb-2 uppercase tracking-widest" style={{ color: '#84A98C' }}>Telefon (optional)</label>
        <input
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="+49 ..."
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-xs mb-2 uppercase tracking-widest" style={{ color: '#84A98C' }}>Anfrage-Typ *</label>
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          required
          className={`${inputClass} appearance-none cursor-pointer`}
        >
          <option value="" disabled>Bitte wählen …</option>
          {requestTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {status === 'error' && (
        <p className="text-red-400 text-sm">Etwas ist schiefgelaufen. Bitte erneut versuchen.</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full font-semibold py-4 rounded-lg active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed mt-2"
        style={{ background: '#84A98C', color: '#1E2E34' }}
      >
        {status === 'sending' ? 'Wird gesendet …' : 'Nachricht senden'}
      </button>
    </form>
  )
}
