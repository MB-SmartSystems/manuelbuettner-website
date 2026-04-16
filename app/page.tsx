import FAQAccordion from '@/app/components/FAQAccordion'
import ContactForm from '@/app/components/ContactForm'
import Image from 'next/image'

// ─── Data ─────────────────────────────────────────────────────────────────────

const valueProps = [
  'Erfahrene Drummer erweitern ihr Repertoire im Schlagzeugunterricht deutlich – oft um das Drei- bis Vierfache.',
  'Stabileres Timing und bessere Kontrolle bei komplexen Grooves und Fills, direkt an deinen Zielen ausgerichtet.',
  'Effiziente Übestrategien, die dich schneller an deine persönlichen Ziele bringen.',
  'Anfänger bekommen einen klaren Einstieg und lernen schnell Grundbeats und erste Songs.',
  'Klare Trainingslogik statt Zufallsstunden – jeder Schritt führt dich näher an deine Ziele.',
]

const pillars = [
  {
    title: 'Fokus auf das, was dich am meisten voran bringt',
    desc: 'Ich richte den Schlagzeugunterricht nach deinem aktuellen Level aus und wir arbeiten gezielt an den Punkten, die dich am meisten bremsen. So erreichst du deine Ziele schneller und machst spürbare technische Fortschritte.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.5" opacity=".5" />
        <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" opacity=".2" />
      </svg>
    ),
  },
  {
    title: 'Verständliche Erklärungen',
    desc: 'Ich erkläre jede Übung so, dass du genau verstehst, warum sie funktioniert und wie du sie richtig anwendest – klar, logisch und sofort nutzbar für deine Ziele.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Individuelle Ziele',
    desc: 'Ob Band, Songs, Technik oder freies Spiel: Der Unterricht richtet sich klar nach deinen persönlichen Zielen aus. So erreichst du zuverlässig das, was du dir vorgenommen hast – egal ob Anfänger oder Fortgeschrittener.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const courses = [
  {
    tag: 'FÜR FORTGESCHRITTENE',
    title: 'Schlagzeug für Fortgeschrittene',
    desc: 'Für Drummer, die bereits Erfahrung haben und gezielt an ihren Zielen arbeiten wollen. Wir gehen an Technik, Timing, Grooves und Songs auf professionellem Niveau – genau dort, wo du bisher feststeckst.',
    features: [
      'Techniken und Rhythmen sauber beherrschen, die du schon lange verbessern wolltest',
      'Übestrategien, mit denen du Songs deutlich schneller sicher spielst',
      'Neues Song-Repertoire in kurzer Zeit aufbauen',
      'Timing-Training, das Stabilität und Zuverlässigkeit spürbar erhöht',
    ],
  },
  {
    tag: 'FÜR ANFÄNGER',
    title: 'Schlagzeug für Anfänger',
    desc: 'Für alle, die neu am Set sind oder das Instrument ausprobieren wollen. Wir starten mit leichten Beats, bauen Schritt für Schritt Grundlagen auf und du bekommst sofort ein sicheres Gefühl für den Schlagzeugunterricht.',
    features: [
      'Deine ersten Grundbeats, die du stabil spielen kannst – in Rock, Pop oder deinem Lieblingsstil',
      'Songs begleiten – schneller, als du erwartest',
      'Einführung in Stockhaltung, Sitzposition und Spieltechnik',
      'Erste Fill-Ins, logisch aufgebaut und leicht verständlich',
    ],
    featured: true,
  },
  {
    tag: 'FÜR ANFÄNGER',
    title: 'Klavier für Anfänger (mein Zweitinstrument)',
    desc: 'Für Anfänger, Kinder und Erwachsene, die Klavier ohne klassischen Druck lernen wollen. Modern erklärt, praxisnah und ideal, um Songs zu begleiten oder musikalisch einzusteigen.',
    features: [
      'Sicheres Notenlesen von Anfang an',
      'Akkorde spielen, um Lieder zu begleiten',
      'Klar erklärte Grundlagen der Klaviertechnik',
      'Wunschlieder in einer Schwierigkeit, die zu deinem Level passt',
    ],
  },
]

const pricing = [
  {
    title: 'Schlagzeug für Anfänger (30 Min.)',
    desc: 'Perfekt für alle, die Schlagzeug ausprobieren möchten oder einen einfachen, klar strukturierten Einstieg suchen. Wir starten mit leichten Beats, bauen erste Grundlagen auf und sorgen dafür, dass du schon in der ersten Stunde ein echtes Erfolgserlebnis hast.',
    price: '86',
    billingNote: 'Monatliche Abrechnung · Vertrag',
    durationNote: '1× 30 Min. Unterricht pro Woche',
    features: [
      'Erste einfache Beats, die sofort funktionieren',
      'Notenlesen und grundlegendes Verständnis – Schritt für Schritt',
      'Kleine Übungen mit schnellen Erfolgserlebnissen',
      'Erste Songs in einer angepassten, leicht spielbaren Version',
    ],
  },
  {
    title: 'Schlagzeug für Erfahrene (45 Min.)',
    desc: 'Ideal für Spieler, die bereits Grundlagen sicher beherrschen und spürbar weiterkommen wollen. Wir vertiefen Technik, Timing, Grooves und Songs – gezielt, strukturiert und abgestimmt auf dein Level. Mehr Zeit, mehr Fokus, mehr Fortschritt.',
    price: '129',
    billingNote: 'Monatliche Abrechnung · Vertrag',
    durationNote: '1× 45 Min. Unterricht pro Woche',
    features: [
      'Vertieftes Arbeiten an Songs, Rhythmen und Technik',
      'Koordination und Timing gezielt verbessern',
      'Inhalte flexibel an dein aktuelles Level angepasst',
    ],
    featured: true,
  },
  {
    title: 'Schlagzeug für Fortgeschrittene (60 Min.)',
    desc: 'Für Drummer, die gezielt an Technik, Timing, Präzision und anspruchsvolleren Songs arbeiten möchten. Ideal, um Fähigkeiten weiter auszubauen, komplexe Grooves sicher zu beherrschen und den eigenen Standard spürbar anzuheben.',
    price: '172',
    billingNote: 'Monatliche Abrechnung · Vertrag',
    durationNote: '1× 60 Min. Unterricht pro Woche',
    features: [
      'Anspruchsvolle Grooves, Fills und Songteile sauber erarbeiten',
      'Übungen, die Technik, Kontrolle und Timing hörbar verbessern',
      'Tipps für Bandspiel & Entwicklung eines eigenen, sicheren Stils',
      'Anleitung zum selbstständigen Erarbeiten von Songs in jedem Level',
    ],
  },
  {
    title: 'Klavier für Anfänger',
    desc: 'Für Anfänger, Kinder und Erwachsene, die Klavier ohne den starren Klassikunterricht lernen möchten. Du bekommst einen klaren, praxisnahen Unterricht, der dich sicher ans Klavier spielen heranführt. Wir verbinden Noten, Akkorde und Technik so, dass du schnell Fortschritte machst und deine ersten Lieder souverän begleiten kannst.',
    price: '86',
    billingNote: 'Monatliche Abrechnung · Vertrag',
    durationNote: '1× 30 Min. Unterricht pro Woche',
    features: [
      'Leichtes Notenlesen mit schnellen Erfolgserlebnissen',
      'Akkorde lernen zum Begleiten deiner Lieblingslieder',
      'Grundlagen für Technik, Anschlag und Spielfluss',
    ],
  },
]

const flexCards = [
  { hours: '2 Stunden', price: '125' },
  { hours: '5 Stunden', price: '305' },
  { hours: '10 Stunden', price: '595' },
]

const steps = [
  {
    num: '1',
    title: 'Persönliches Kennenlernen',
    desc: 'Wir schauen uns an, wo du aktuell stehst – ob fortgeschritten mit klaren Technik- oder Timing-Zielen oder kompletter Anfänger. Du sagst mir, welche Ziele du im Unterricht erreichen möchtest, und ich zeige dir, wie wir dorthin kommen.',
  },
  {
    num: '2',
    title: 'Direkter Einstieg am Set',
    desc: 'Fortgeschrittene bekommen eine kompakte Analyse eines Grooves, Fills oder Timing-Themas – inklusive sofort umsetzbarer Verbesserungen, die dich spürbar voranbringen. Anfänger spielen ihren ersten Beat oder ihre ersten Noten, damit sie gleich ein Gefühl für das Instrument entwickeln.',
  },
  {
    num: '3',
    title: 'Dein weiterer Fortschritt',
    desc: 'Nach der Probestunde hast du zwei Möglichkeiten: Entweder wir starten gemeinsam im wöchentlichen Unterricht und arbeiten kontinuierlich an deinen Zielen. Oder du entscheidest dich für eine 2-, 5- oder 10-Stunden-Karte, die du flexibel nach deinem eigenen Zeitplan nutzen kannst – ideal, wenn du variable Zeiten brauchst.',
  },
]

// ─── Accent color constants ──────────────────────────────────────────────────
const ACCENT = '#84A98C'
const ACCENT_HOVER = '#95B89E'
const ACCENT_DIM = '#52796F'
const BASE = '#1E2E34'
const SURFACE = '#2F3E46'
const SURFACE_RAISED = '#354F52'
const TEXT = '#CAD2C5'
const TEXT_MUTED = 'rgba(255,255,255,0.75)'   // near-white body text, no green tint
const TEXT_SUBTLE = 'rgba(255,255,255,0.85)'   // pure white, no green tint
const GLASS_BG = 'rgba(202,210,197,0.04)'
const GLASS_BORDER = 'rgba(202,210,197,0.08)'
const GLASS_BORDER_HOVER = 'rgba(132,169,140,0.2)'

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: BASE, color: TEXT }}>

      {/* ── Coming-Soon Banner ───────────────────────────────────────── */}
      <div style={{ background: `rgba(132,169,140,0.08)`, borderBottom: `1px solid rgba(132,169,140,0.15)` }} className="px-4 py-2.5 text-center">
        <p style={{ color: ACCENT }} className="text-sm font-medium tracking-wide">
          ✦ Bald auch als Online-Unterricht verfügbar – jetzt schon anfragen!
        </p>
      </div>

      {/* ── 1. NavBar ────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 backdrop-blur-md" style={{ background: `rgba(30,46,52,0.92)`, borderBottom: `1px solid ${GLASS_BORDER}` }}>
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="font-semibold tracking-tight text-sm" style={{ color: TEXT }}>
            Manuel Büttner - Schlagzeuglehrer
          </a>
          <div className="hidden sm:flex items-center gap-8 text-sm" style={{ color: TEXT_MUTED }}>
            <a href="#start" className="transition-colors hover:text-[#CAD2C5]" style={{ color: TEXT_MUTED }}>Start</a>
            <a href="#preise" className="transition-colors hover:text-[#CAD2C5]" style={{ color: TEXT_MUTED }}>Preise</a>
            <a href="#kontakt" className="transition-colors hover:text-[#CAD2C5]" style={{ color: TEXT_MUTED }}>Kontakt</a>
          </div>
          <a
            href="#kontakt"
            className="text-xs font-semibold px-4 py-2 rounded-full transition-colors"
            style={{ background: ACCENT, color: BASE }}
          >
            kostenlose Probestunde sichern
          </a>
        </nav>
      </header>

      {/* ── 2. Hero ──────────────────────────────────────────────────── */}
      <section
        id="start"
        className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-16 pb-24 overflow-hidden"
        style={{ backgroundImage: 'url(/hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center top' }}
      >
        {/* Dark overlay to keep text readable */}
        <div className="absolute inset-0" style={{ background: 'rgba(18,30,36,0.80)' }} />
        {/* Background glow */}
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(132,169,140,0.18) 0%, transparent 70%)' }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(132,169,140,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(132,169,140,0.04) 0%, transparent 50%)' }}
        />

        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase" style={{ border: `1px solid rgba(132,169,140,0.25)`, background: `rgba(132,169,140,0.06)`, color: ACCENT }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: ACCENT }} />
            29+ Jahre Erfahrung · Darmstadt / Rhein-Main
          </div>

          <h1 className="text-display-xl font-semibold tracking-tight leading-[1.0]" style={{ color: TEXT }}>
            Schlagzeugunterricht,{' '}
            <span style={{ color: ACCENT }}>der dich an</span>
            <br />
            deine Ziele bringt
          </h1>

          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: TEXT_MUTED }}>
            In meinem Schlagzeugunterricht arbeiten wir gezielt an deinen persönlichen Zielen – egal ob du Fortgeschrittener oder Anfänger bist. Erfahrene Drummer verbessern Technik, Timing, Kontrolle und ihr Song‒Repertoire spürbar. Anfänger bekommen einen klaren Einstieg mit schnellen Erfolgserlebnissen und einem Gefühl von Fortschritt ab der ersten Stunde.
          </p>

          <ul className="text-sm text-left max-w-xl mx-auto space-y-2 pt-2">
            {valueProps.map((vp, i) => (
              <li key={i} className="flex items-start gap-2" style={{ color: TEXT_MUTED }}>
                <span className="flex-shrink-0 mt-1" style={{ color: ACCENT }}>✓</span>
                {vp}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-full active:scale-[0.98] transition-all shadow-lg"
              style={{ background: ACCENT, color: BASE, boxShadow: `0 8px 24px rgba(132,169,140,0.2)` }}
            >
              kostenlose Probestunde sichern
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#preise" className="text-sm transition-colors underline-offset-4 hover:underline" style={{ color: TEXT_MUTED }}>
              Preise ansehen
            </a>
          </div>

          <p className="text-sm" style={{ color: TEXT_SUBTLE }}>
            Du hast noch kein Schlagzeug zuhause? Bei mir kannst du auch Schlagzeuge mieten – ich berate dich dazu gerne (gilt auch für Klaviere).{' '}
            <a href="https://schlagzeugleihen.de" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2" style={{ color: ACCENT }}>
              Schau mal auf schlagzeugleihen.de
            </a>
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30">
          <div className="w-px h-8" style={{ background: ACCENT }} />
        </div>
      </section>

      {/* ── 4. Credentials ───────────────────────────────────────────── */}
      <section className="py-16" style={{ borderTop: `1px solid ${GLASS_BORDER}`, borderBottom: `1px solid ${GLASS_BORDER}` }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-20 text-center">
            <div>
              <p className="text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-none" style={{ color: ACCENT }}>29+</p>
              <p className="text-sm mt-2" style={{ color: TEXT_MUTED }}>Jahre Erfahrung Als Schlagzeuger und Lehrer</p>
            </div>
            <div className="hidden sm:block w-px h-16" style={{ background: GLASS_BORDER }} />
            <div>
              <p className="font-semibold text-lg" style={{ color: TEXT }}>Professionelle Ausbildung</p>
              <p className="text-sm mt-1" style={{ color: TEXT_MUTED }}>Abgeschlossenes Schlagzeugstudium an der Future Music School</p>
            </div>
            <div className="hidden sm:block w-px h-16" style={{ background: GLASS_BORDER }} />
            <div>
              <p className="font-semibold text-lg" style={{ color: TEXT }}>Schneller Einstieg für Anfänger</p>
              <p className="text-sm mt-1" style={{ color: TEXT_MUTED }}>Grundbeats, Fill-Ins und erste Songs in kurzer Zeit</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. WhyItWorks ────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: SURFACE }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: ACCENT }}>Methodik</p>
            <h2 className="text-display-md font-semibold" style={{ color: TEXT }}>Warum mein Unterricht funktioniert</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 transition-all group"
                style={{ background: GLASS_BG, border: `1px solid ${GLASS_BORDER}` }}
              >
                <div className="mb-5 inline-block" style={{ color: ACCENT }}>{p.icon}</div>
                <h3 className="font-semibold text-lg mb-3" style={{ color: TEXT }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Courses ───────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: BASE }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: ACCENT }}>Kursangebot</p>
            <h2 className="text-display-md font-semibold" style={{ color: TEXT }}>Unterricht, der dich wirklich voranbringt</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((c, i) => (
              <div
                key={i}
                className="relative rounded-2xl p-8 transition-all"
                style={{
                  background: c.featured ? `rgba(132,169,140,0.07)` : GLASS_BG,
                  border: c.featured ? `1px solid rgba(132,169,140,0.35)` : `1px solid ${GLASS_BORDER}`,
                  boxShadow: c.featured ? `0 8px 32px rgba(132,169,140,0.1)` : 'none',
                }}
              >
                {c.featured && (
                  <span className="absolute -top-3 left-6 text-xs font-semibold px-3 py-1 rounded-full" style={{ background: ACCENT, color: BASE }}>
                    Beliebt
                  </span>
                )}
                <span className="inline-block text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full mb-5" style={{ color: ACCENT, border: `1px solid rgba(132,169,140,0.25)` }}>
                  {c.tag}
                </span>
                <h3 className="font-semibold text-xl mb-3" style={{ color: TEXT }}>{c.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: TEXT_MUTED }}>{c.desc}</p>
                <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: TEXT_SUBTLE }}>Was dich erwartet:</p>
                <ul className="space-y-2 mb-6">
                  {c.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm" style={{ color: TEXT_MUTED }}>
                      <span className="flex-shrink-0 mt-1 text-xs" style={{ color: ACCENT }}>–</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#kontakt"
                  className="text-sm font-medium underline underline-offset-4 inline-flex items-center gap-1"
                  style={{ color: ACCENT }}
                >
                  Jetzt Probestunde vereinbaren →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Pricing ───────────────────────────────────────────────── */}
      <section id="preise" className="py-24" style={{ background: SURFACE }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: ACCENT }}>Preise</p>
            <h2 className="text-display-md font-semibold" style={{ color: TEXT }}>Finde deinen perfekten Plan</h2>
          </div>

          {/* Monthly plans */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {pricing.map((p, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 transition-all flex flex-col"
                style={{
                  background: p.featured ? `rgba(132,169,140,0.07)` : GLASS_BG,
                  border: p.featured ? `1px solid rgba(132,169,140,0.35)` : `1px solid ${GLASS_BORDER}`,
                  boxShadow: p.featured ? `0 8px 32px rgba(132,169,140,0.1)` : 'none',
                }}
              >
                <p className="font-semibold text-sm mb-1" style={{ color: TEXT }}>{p.title}</p>
                <p className="text-xs leading-relaxed mb-4" style={{ color: TEXT_SUBTLE }}>{p.desc}</p>

                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-semibold" style={{ color: ACCENT }}>€{p.price}</span>
                  <span className="text-xs" style={{ color: TEXT_MUTED }}>/Monat</span>
                </div>
                <p className="text-xs mb-1" style={{ color: TEXT_SUBTLE }}>{p.billingNote}</p>
                <p className="text-xs font-medium mb-4" style={{ color: ACCENT }}>{p.durationNote}</p>

                <ul className="space-y-1.5 mb-6 flex-1">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs" style={{ color: TEXT_MUTED }}>
                      <span className="flex-shrink-0 mt-0.5" style={{ color: ACCENT }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#kontakt"
                  className="w-full text-center text-xs font-semibold py-2.5 rounded-full transition-colors block"
                  style={{ background: p.featured ? ACCENT : 'transparent', color: p.featured ? BASE : ACCENT, border: `1px solid rgba(132,169,140,0.35)` }}
                >
                  Jetzt buchen
                </a>
              </div>
            ))}
          </div>

          {/* Flex Cards */}
          <div>
            <p className="text-sm font-medium mb-2" style={{ color: TEXT }}>Du kannst dich nicht entscheiden oder möchtest dich noch nicht festlegen? Kein Problem!</p>
            <p className="text-xs uppercase tracking-widest mb-5" style={{ color: TEXT_SUBTLE }}>Flex-Karte für Schlagzeug &amp; Klavier — flexibel buchbar, kein Abo</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {flexCards.map((fc, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5 flex items-center justify-between transition-all"
                  style={{ background: GLASS_BG, border: `1px solid ${GLASS_BORDER}` }}
                >
                  <div>
                    <p className="text-sm font-medium" style={{ color: TEXT }}>{fc.hours}</p>
                    <p className="text-xs mt-0.5" style={{ color: TEXT_SUBTLE }}>Flex Card · Bezahlung vorab</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-xl" style={{ color: ACCENT }}>€{fc.price}</p>
                    <p className="text-xs" style={{ color: TEXT_SUBTLE }}>gesamt</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs mt-4" style={{ color: TEXT_SUBTLE }}>
              Für Schlagzeug und Klavier geeignet · Flexible Terminwahl nach Verfügbarkeit · Inhalte nach deinem Level und deinen Zielen · Optimal zum Einstieg oder für unregelmäßiges Lernen
            </p>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-full transition-all"
              style={{ background: ACCENT, color: BASE }}
            >
              Kostenlose Probestunde buchen →
            </a>
          </div>
        </div>
      </section>

      {/* ── 8. About ─────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: BASE }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Profile image */}
            <div className="relative">
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden" style={{ border: `1px solid ${GLASS_BORDER}` }}>
                <Image
                  src="/profile.jpg"
                  alt="Manuel Büttner – Schlagzeuglehrer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 left-6 px-4 py-2 rounded-full text-xs font-medium" style={{ background: SURFACE_RAISED, border: `1px solid rgba(132,169,140,0.3)`, color: ACCENT }}>
                Empfohlen von Schülern ✓
              </div>
            </div>

            <div className="space-y-6 pt-4">
              <div>
                <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: ACCENT }}>Über mich</p>
                <h2 className="text-display-md font-semibold leading-tight mb-6" style={{ color: TEXT }}>
                  Manuel Büttner
                </h2>
              </div>
              <p className="leading-relaxed" style={{ color: TEXT_MUTED }}>
                Musik ist für mich mehr als nur spielen können – sie ist Ausdruck, Kontrolle, Sound und der Moment, in dem Technik und Gefühl zusammenkommen. Seit vielen Jahren unterstütze ich fortgeschrittene Schlagzeuger dabei, genau dorthin zu kommen: zu mehr Präzision, besserer Technik und einem Spiel, das sich sicher und souverän anfühlt.
              </p>
              <p className="leading-relaxed" style={{ color: TEXT_MUTED }}>
                Im Unterricht lege ich Wert auf klare Erklärungen und einen ruhigen, strukturierten Ablauf. Du weißt immer, warum wir etwas üben und wie es dich weiterbringt. Saubere Fortschritte und ein gutes Gefühl nach jeder Stunde gehören für mich dazu.
              </p>
              <div>
                <p className="font-semibold mb-2" style={{ color: TEXT }}>Deine musikalische Reise</p>
                <p className="leading-relaxed text-sm" style={{ color: TEXT_MUTED }}>
                  Ich begleite dich dabei, dein Schlagzeugspiel gezielt weiterzuentwickeln. Ob komplexere Grooves, saubere Fill-Ins, stabileres Timing oder mehr Kontrolle – wir analysieren gemeinsam, wo du stehst und wie du deine Ziele erreichst. Wir lösen technische Engpässe, verbessern Präzision und erweitern dein Repertoire Schritt für Schritt. Anfänger erhalten einen klaren Einstieg, nachvollziehbare Grundlagen und spürbare erste Erfolge.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-2" style={{ color: TEXT }}>Warum ich unterrichte</p>
                <p className="leading-relaxed text-sm" style={{ color: TEXT_MUTED }}>
                  Mich begeistert der Moment, wenn fortgeschrittene Drummer merken, dass Technik, Timing und Kontrolle plötzlich zusammenfallen – dieser „Aha-Moment", der das Spiel auf ein neues Niveau bringt. Nach über 29 Jahren am Schlagzeug, in Bands, Orchestern und Musicalproduktionen ist es mir ein großes Anliegen, Musiker weiterzubringen und ungenutztes Potenzial sichtbar zu machen. Und auch Anfänger unterstütze ich gern dabei, die Grundlagen sauber zu lernen und ihre ersten musikalischen Schritte sicher zu machen.
                </p>
              </div>
              <a
                href="#kontakt"
                className="text-sm font-medium underline underline-offset-4 inline-flex items-center gap-1"
                style={{ color: ACCENT }}
              >
                Mehr erfahren →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. TrialProcess ──────────────────────────────────────────── */}
      <section className="py-24" style={{ background: SURFACE }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: ACCENT }}>DEINE CHANCE</p>
            <h2 className="text-display-md font-semibold" style={{ color: TEXT }}>Kostenlose Probestunde</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="relative text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center" style={{ background: `rgba(132,169,140,0.07)`, border: `1px solid rgba(132,169,140,0.25)` }}>
                  <span className="font-semibold text-xl tracking-tight" style={{ color: ACCENT }}>{s.num}</span>
                </div>
                <h3 className="font-semibold text-lg" style={{ color: TEXT }}>{s.title}</h3>
                <p className="text-sm leading-relaxed max-w-xs mx-auto" style={{ color: TEXT_MUTED }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-full transition-all"
              style={{ background: ACCENT, color: BASE }}
            >
              Jetzt Probestunde sichern →
            </a>
          </div>
        </div>
      </section>

      {/* ── 10. FAQ ──────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: BASE }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: ACCENT }}>FAQ</p>
            <h2 className="text-display-md font-semibold" style={{ color: TEXT }}>Häufig gestellte Fragen</h2>
            <p className="text-sm mt-3" style={{ color: TEXT_MUTED }}>Hier findest du Antworten auf die wichtigsten Fragen rund um den Unterricht.</p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ── 11. RentalCTA ────────────────────────────────────────────── */}
      <section className="py-8 px-6" style={{ background: SURFACE }}>
        <div className="max-w-6xl mx-auto">
          <a
            href="https://schlagzeugleihen.de"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl px-8 py-7 transition-all"
            style={{ background: `rgba(132,169,140,0.06)`, border: `1px solid rgba(132,169,140,0.2)` }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Tipp</p>
                <p className="font-semibold text-lg" style={{ color: TEXT }}>Schlagzeug oder Klavier mieten</p>
                <p className="text-sm mt-1" style={{ color: TEXT_MUTED }}>
                  Du hast noch kein eigenes Instrument? Bei mir kannst du auch Schlagzeuge mieten – ich berate dich dazu gerne (gilt auch für Klaviere).{' '}
                  Schau mal auf <strong style={{ color: TEXT }}>schlagzeugleihen.de</strong>
                </p>
              </div>
              <span className="flex-shrink-0 inline-flex items-center gap-1 text-sm font-medium" style={{ color: ACCENT }}>
                Zur Verleih-Seite
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* ── 12. ContactForm ──────────────────────────────────────────── */}
      <section id="kontakt" className="py-24" style={{ background: BASE }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: ACCENT }}>Kontakt</p>
            <h2 className="text-display-md font-semibold" style={{ color: TEXT }}>Probestunde anfragen</h2>
            <p className="text-sm mt-3" style={{ color: TEXT_MUTED }}>Kostenlos und unverbindlich. Ich melde mich innerhalb von 24 Stunden.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Location info */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <p className="font-semibold mb-1" style={{ color: TEXT }}>Wo wird unterrichtet und wie erreiche ich dich?</p>
                <p className="text-sm mb-2" style={{ color: TEXT_MUTED }}>Hier findet dein Unterricht statt.</p>
                <p className="text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>
                  Schlesierstraße 19a<br />
                  64665 Alsbach-Hähnlein<br />
                  <span style={{ color: TEXT_SUBTLE }}>Parken an der Straße möglich</span>
                </p>
                <p className="text-sm mt-2" style={{ color: TEXT_SUBTLE }}>
                  Auf Wunsch biete ich Hausbesuche nach Absprache an.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-2" style={{ color: TEXT }}>Schreib mir oder ruf mich an</p>
                <div className="space-y-2 text-sm" style={{ color: TEXT_MUTED }}>
                  <p>
                    <a href="tel:+491703648789" className="underline underline-offset-2" style={{ color: ACCENT }}>
                      +49 170 3648789
                    </a>{' '}
                    <span style={{ color: TEXT_SUBTLE }}>(auch WhatsApp)</span>
                  </p>
                  <p>
                    <a href="mailto:info@manuelbuettner.de" className="underline underline-offset-2" style={{ color: ACCENT }}>
                      info@manuelbuettner.de
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="md:col-span-3 rounded-2xl p-8" style={{ background: GLASS_BG, border: `1px solid ${GLASS_BORDER}` }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── 13. Footer ───────────────────────────────────────────────── */}
      <footer className="py-10" style={{ borderTop: `1px solid ${GLASS_BORDER}` }}>
        <div className="max-w-6xl mx-auto px-6" style={{ color: TEXT_MUTED }}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm">
            <div className="space-y-1">
              <p className="font-medium" style={{ color: TEXT }}>Manuel Büttner - Schlagzeuglehrer · Dein Partner für musikalischen Erfolg.</p>
              <p>
                <a href="tel:+491703648789" className="transition-colors hover:text-[#84A98C]">+49 170 3648789</a>
                {' · '}
                <a href="mailto:info@manuelbuettner.de" className="transition-colors hover:text-[#84A98C]">info@manuelbuettner.de</a>
              </p>
              <p>Schlesierstraße 19a, 64665 Alsbach-Hähnlein</p>
              <p style={{ color: TEXT_SUBTLE }}>© {new Date().getFullYear()} Manuel Büttner. Alle Rechte vorbehalten.</p>
            </div>
            <div className="flex items-center gap-6 text-sm" style={{ color: TEXT_MUTED }}>
              <a href="/impressum" className="hover:text-[#84A98C] transition-colors">Impressum</a>
              <a href="/datenschutz" className="hover:text-[#84A98C] transition-colors">Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
