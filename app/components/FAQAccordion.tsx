'use client'

import { useState } from 'react'

const faqs = [
  {
    num: '01',
    q: 'Brauche ich Vorkenntnisse?',
    a: 'Fortgeschrittene und erfahrene Drummer steigen direkt mit Technik-Checks, Timing-Analyse oder komplexeren Grooves ein – genau passend zu ihren persönlichen Zielen. Anfänger brauchen keine Vorkenntnisse. Wir starten mit Grundlagen und klaren, einfachen Übungen, damit du schnell ein sicheres Gefühl bekommst.',
  },
  {
    num: '02',
    q: 'Muss ich Noten lesen können?',
    a: 'Nein, nicht zwingend. Fortgeschrittene nutzen Noten meist für Transkriptionen, Technik-Übungen oder zielgerichtetes Song-Erarbeiten. Anfänger lernen bei mir Noten Schritt für Schritt – verständlich, praxisnah und ohne Überforderung. Dein Unterricht richtet sich immer nach deinem Level.',
  },
  {
    num: '03',
    q: 'Was brauche ich für den Start als Anfänger?',
    a: 'Für Schlagzeug: ein Drumset zum Üben. Falls du noch keines hast, kannst du eines mieten oder ich berate dich beim Kauf eines gebrauchten Sets. Sticks und Notenmaterial kannst du selbst besorgen oder über meine Empfehlungen wählen. Für Klavier: ein einfaches Keyboard reicht aus. Notenmaterial gibt es nach meiner Empfehlung – angepasst an deine Ziele und dein Level.',
  },
  {
    num: '04',
    q: 'Wie läuft eine Probestunde ab?',
    a: 'Fortgeschrittene: kurze Analyse eines Grooves, Fills, Technik- oder Timing-Themas – mit sofort umsetzbaren Verbesserungen, damit du direkt spürbar vorankommst. Anfänger: erster Beat, erste Noten oder eine kleine Übung, damit du gleich ein Gefühl fürs Instrument bekommst und weißt, ob der Unterricht zu deinen Zielen passt.',
  },
  {
    num: '05',
    q: 'Bietest du auch Unterricht bei mir zu Hause an?',
    a: 'Nach Absprache ist Unterricht bei dir zu Hause möglich. Diese Zusatzleistung klären wir im Erstgespräch oder während der ersten Stunden, je nachdem, was für deine Ziele und deinen Alltag am besten funktioniert.',
  },
]

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-lg overflow-hidden transition-colors"
          style={{
            border: open === i ? '1px solid rgba(132,169,140,0.35)' : '1px solid rgba(202,210,197,0.10)',
            background: open === i ? 'rgba(132,169,140,0.05)' : 'transparent',
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
            aria-expanded={open === i}
          >
            <div className="flex items-center gap-4">
              <span className="flex-shrink-0 text-sm font-semibold" style={{ color: 'rgba(132,169,140,0.6)' }}>
                {faq.num}
              </span>
              <span className="font-medium text-base leading-snug" style={{ color: '#FFFFFF' }}>
                {faq.q}
              </span>
            </div>
            <span
              className="flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300"
              style={{
                color: '#84A98C',
                transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
          </button>
          <div
            style={{
              maxHeight: open === i ? '400px' : '0',
              opacity: open === i ? 1 : 0,
              transition: 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease',
              overflow: 'hidden',
            }}
          >
            <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
