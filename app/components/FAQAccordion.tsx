'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Brauche ich Vorkenntnisse?',
    a: 'Nein. Der Unterricht beginnt genau dort, wo du gerade stehst — egal ob du noch nie ein Instrument gespielt hast oder bereits Erfahrung mitbringst. Das Tempo und die Inhalte passen sich deinem Niveau an.',
  },
  {
    q: 'Muss ich Noten lesen können?',
    a: 'Nicht zwingend. Notenkenntnis ist hilfreich, aber kein Muss. Du lernst nach Bedarf — für klassische Stücke, moderne Songs oder einfach nach Gehör. Was sinnvoll ist, besprechen wir gemeinsam.',
  },
  {
    q: 'Welche Ausrüstung brauche ich?',
    a: 'Für den Einstieg reicht ein einfaches E-Drum-Set oder ein geliehenes Schlagzeug. Über schlagzeugleihen.de kannst du auch günstig ein Instrument mieten — ideal zum Ausprobieren ohne großes Risiko.',
  },
  {
    q: 'Wie läuft die Probestunde ab?',
    a: 'In der ersten Stunde lernen wir uns kennen. Ich schaue mir deinen aktuellen Stand an, höre deine Ziele und zeige dir, wie der Unterricht aufgebaut sein könnte. Danach entscheidest du ohne Druck, ob es passt.',
  },
  {
    q: 'Bietet ihr auch Hausunterricht an?',
    a: 'Aktuell findet der Unterricht im Studio statt. Online-Unterricht ist in Planung — schreib uns gerne, wenn du Interesse hast.',
  },
]

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-[rgba(255,248,235,0.08)] rounded-lg overflow-hidden transition-colors hover:border-[rgba(212,168,67,0.2)]"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 group"
            aria-expanded={open === i}
          >
            <span className="text-[#f5f0e8] font-medium text-base leading-snug group-hover:text-[#d4a843] transition-colors">
              {faq.q}
            </span>
            <span
              className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[#d4a843] transition-transform duration-300"
              style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
          </button>
          <div
            style={{
              maxHeight: open === i ? '300px' : '0',
              opacity: open === i ? 1 : 0,
              transition: 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease',
              overflow: 'hidden',
            }}
          >
            <p className="px-6 pb-5 text-[#a09880] text-sm leading-relaxed">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
