import FAQAccordion from '@/app/components/FAQAccordion'
import ContactForm from '@/app/components/ContactForm'

// ─── Data ─────────────────────────────────────────────────────────────────────

const valueProps = [
  'Fortgeschrittene erweitern ihr Repertoire 3–4× schneller durch gezieltes Üben',
  'Timing und Kontrolle: messbare Verbesserung in jeder Einheit',
  'Konkrete Übungsstrategien, die zu Hause sofort anwendbar sind',
  'Klarer Einstieg auch für absolute Anfänger — kein Vorwissen nötig',
  'Strukturierte Trainingslogik: jede Stunde baut auf der vorigen auf',
]

const pillars = [
  {
    title: 'Fokus auf Wirkung',
    desc: 'Keine leere Theorie. Jede Einheit hat ein konkretes Ziel — du hörst und fühlst den Unterschied.',
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
    desc: 'Komplexe Technik wird greifbar — egal ob du Anfänger oder Fortgeschrittener bist.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Individuelle Zielorientierung',
    desc: 'Dein Tempo, deine Musik, deine Ziele. Der Unterricht passt sich dir an — nicht umgekehrt.',
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
    title: 'Schlagzeug Fortgeschrittene',
    desc: 'Repertoire, Timing-Tiefe, Genre-Erweiterung. Für Schlagzeuger mit Grundkenntnissen, die den nächsten Level erreichen wollen.',
    tag: 'Fortgeschrittene',
  },
  {
    title: 'Schlagzeug Anfänger',
    desc: 'Strukturierter Einstieg von Null. Koordination, Grundrhythmen, erstes Spielen. Kein Vorwissen nötig.',
    tag: 'Anfänger',
    featured: true,
  },
  {
    title: 'Klavier Anfänger',
    desc: 'Harmonische Grundlagen, einfache Melodien und ein Gefühl für Musik — ideal als Ergänzung zum Schlagzeug.',
    tag: 'Klavier',
  },
]

const pricing = [
  { label: 'Anfänger Schlagzeug', duration: '30 min', price: '86', unit: '/Monat' },
  { label: 'Erfahrene Schlagzeug', duration: '45 min', price: '129', unit: '/Monat', featured: true },
  { label: 'Fortgeschrittene Schlagzeug', duration: '60 min', price: '172', unit: '/Monat' },
  { label: 'Anfänger Klavier', duration: '30 min', price: '86', unit: '/Monat' },
  { label: 'Flex Card', duration: '2 Std.', price: '125', unit: 'gesamt', flex: true },
  { label: 'Flex Card', duration: '5 Std.', price: '305', unit: 'gesamt', flex: true },
  { label: 'Flex Card', duration: '10 Std.', price: '595', unit: 'gesamt', flex: true },
]

const steps = [
  {
    num: '01',
    title: 'Einschätzung',
    desc: 'Wir besprechen deine Ziele, dein Level und was du aus dem Unterricht mitnehmen möchtest.',
  },
  {
    num: '02',
    title: 'Instrument ausprobieren',
    desc: 'Du setzt dich ans Schlagzeug (oder Klavier) und spielst — ganz ohne Druck und Erwartungen.',
  },
  {
    num: '03',
    title: 'Unterrichtsform wählen',
    desc: 'Du entscheidest, welches Paket und Tempo passt. Ich begleite dich ab der ersten richtigen Stunde.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0c0a] text-[#f5f0e8]">

      {/* ── Coming-Soon Banner ───────────────────────────────────────── */}
      <div className="bg-[rgba(212,168,67,0.08)] border-b border-[rgba(212,168,67,0.15)] px-4 py-2.5 text-center">
        <p className="text-[#d4a843] text-sm font-medium tracking-wide">
          ✦ Bald auch als Online-Unterricht verfügbar
        </p>
      </div>

      {/* ── 1. NavBar ────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-[rgba(13,12,10,0.92)] backdrop-blur-md border-b border-[rgba(255,248,235,0.06)]">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="font-semibold text-[#f5f0e8] tracking-tight text-sm">
            Manuel Büttner
            <span className="text-[#d4a843] ml-1">·</span>
          </a>
          <div className="hidden sm:flex items-center gap-8 text-sm text-[#a09880]">
            <a href="#start" className="hover:text-[#d4a843] transition-colors">Start</a>
            <a href="#preise" className="hover:text-[#d4a843] transition-colors">Preise</a>
            <a href="#kontakt" className="hover:text-[#d4a843] transition-colors">Kontakt</a>
          </div>
          <a
            href="#kontakt"
            className="text-xs font-semibold bg-[#d4a843] text-[#0d0c0a] px-4 py-2 rounded-full hover:bg-[#e8bc55] transition-colors"
          >
            Probestunde buchen
          </a>
        </nav>
      </header>

      {/* ── 2. Hero ──────────────────────────────────────────────────── */}
      <section
        id="start"
        className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-16 pb-24 overflow-hidden"
      >
        {/* Background glow */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(212,168,67,0.18) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 80%, rgba(212,168,67,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(212,168,67,0.04) 0%, transparent 50%)',
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(212,168,67,0.25)] bg-[rgba(212,168,67,0.06)] text-[#d4a843] text-xs font-medium tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4a843] animate-pulse" />
            29+ Jahre Erfahrung · Darmstadt / Rhein-Main
          </div>

          <h1 className="text-display-xl font-semibold text-[#f5f0e8] tracking-tight leading-[1.0]">
            Schlagzeugunterricht,{' '}
            <span className="text-[#d4a843]">der dich an</span>
            <br />
            deine Ziele bringt
          </h1>

          <p className="text-[#a09880] text-lg max-w-xl mx-auto leading-relaxed">
            Professioneller Unterricht für Anfänger und Fortgeschrittene. Strukturiert, messbar, individuell — nach deinem Tempo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-[#d4a843] text-[#0d0c0a] font-semibold px-8 py-4 rounded-full hover:bg-[#e8bc55] active:scale-[0.98] transition-all shadow-lg shadow-[rgba(212,168,67,0.2)]"
            >
              Kostenlose Probestunde buchen
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#preise" className="text-[#a09880] hover:text-[#f5f0e8] text-sm transition-colors underline-offset-4 hover:underline">
              Preise ansehen
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30">
          <div className="w-px h-8 bg-[#d4a843]" />
        </div>
      </section>

      {/* ── 3. ValueProps ────────────────────────────────────────────── */}
      <section className="py-20 bg-[#141210]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#d4a843] text-xs font-medium tracking-widest uppercase mb-4">Was du bekommst</p>
              <h2 className="text-display-md font-semibold text-[#f5f0e8] leading-tight">
                Kein Herumirren. Echter Fortschritt.
              </h2>
            </div>
            <ul className="space-y-4">
              {valueProps.map((v, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full border border-[rgba(212,168,67,0.4)] flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 2.5" stroke="#d4a843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p className="text-[#a09880] text-sm leading-relaxed group-hover:text-[#f5f0e8] transition-colors">
                    {v}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 4. Credentials ───────────────────────────────────────────── */}
      <section className="py-16 border-y border-[rgba(255,248,235,0.06)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-20 text-center">
            <div>
              <p className="text-[clamp(2.5rem,5vw,4rem)] font-semibold text-[#d4a843] leading-none">29+</p>
              <p className="text-[#a09880] text-sm mt-2">Jahre Erfahrung</p>
            </div>
            <div className="hidden sm:block w-px h-16 bg-[rgba(255,248,235,0.08)]" />
            <div>
              <p className="text-[#f5f0e8] font-semibold text-lg">Future Music School</p>
              <p className="text-[#a09880] text-sm mt-1">Schlagzeugstudium</p>
            </div>
            <div className="hidden sm:block w-px h-16 bg-[rgba(255,248,235,0.08)]" />
            <div>
              <p className="text-[#f5f0e8] font-semibold text-lg">Bands · Orchester</p>
              <p className="text-[#a09880] text-sm mt-1">Musicalproduktionen</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. WhyItWorks ────────────────────────────────────────────── */}
      <section className="py-24 bg-[#141210]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#d4a843] text-xs font-medium tracking-widest uppercase mb-4">Methodik</p>
            <h2 className="text-display-md font-semibold text-[#f5f0e8]">Warum es funktioniert</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="bg-[rgba(255,248,235,0.03)] border border-[rgba(255,248,235,0.06)] rounded-2xl p-8 hover:border-[rgba(212,168,67,0.2)] hover:bg-[rgba(212,168,67,0.03)] transition-all group"
              >
                <div className="text-[#d4a843] mb-5 group-hover:scale-110 transition-transform inline-block">{p.icon}</div>
                <h3 className="text-[#f5f0e8] font-semibold text-lg mb-3">{p.title}</h3>
                <p className="text-[#a09880] text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Courses ───────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#d4a843] text-xs font-medium tracking-widest uppercase mb-4">Kursangebot</p>
            <h2 className="text-display-md font-semibold text-[#f5f0e8]">Für jeden das Richtige</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((c, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-8 border transition-all ${
                  c.featured
                    ? 'bg-[rgba(212,168,67,0.06)] border-[rgba(212,168,67,0.3)] shadow-lg shadow-[rgba(212,168,67,0.08)]'
                    : 'bg-[rgba(255,248,235,0.03)] border-[rgba(255,248,235,0.06)] hover:border-[rgba(212,168,67,0.15)]'
                }`}
              >
                {c.featured && (
                  <span className="absolute -top-3 left-6 text-xs font-semibold bg-[#d4a843] text-[#0d0c0a] px-3 py-1 rounded-full">
                    Beliebt
                  </span>
                )}
                <span className="inline-block text-xs text-[#d4a843] font-medium tracking-widest uppercase border border-[rgba(212,168,67,0.25)] px-3 py-1 rounded-full mb-5">
                  {c.tag}
                </span>
                <h3 className="text-[#f5f0e8] font-semibold text-xl mb-3">{c.title}</h3>
                <p className="text-[#a09880] text-sm leading-relaxed mb-6">{c.desc}</p>
                <a
                  href="#kontakt"
                  className="text-[#d4a843] text-sm font-medium hover:underline underline-offset-4 inline-flex items-center gap-1"
                >
                  Probestunde buchen →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Pricing ───────────────────────────────────────────────── */}
      <section id="preise" className="py-24 bg-[#141210]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#d4a843] text-xs font-medium tracking-widest uppercase mb-4">Preise</p>
            <h2 className="text-display-md font-semibold text-[#f5f0e8]">Transparent & fair</h2>
            <p className="text-[#a09880] text-sm mt-3">Alle Preise inkl. MwSt. Monatspreise basieren auf 4 Einheiten.</p>
          </div>

          {/* Monthly plans */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {pricing.filter((p) => !p.flex).map((p, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 border transition-all ${
                  p.featured
                    ? 'bg-[rgba(212,168,67,0.07)] border-[rgba(212,168,67,0.35)] shadow-lg shadow-[rgba(212,168,67,0.1)]'
                    : 'bg-[rgba(255,248,235,0.03)] border-[rgba(255,248,235,0.07)] hover:border-[rgba(212,168,67,0.15)]'
                }`}
              >
                <p className="text-[#a09880] text-xs uppercase tracking-widest mb-1">{p.duration}</p>
                <p className="text-[#f5f0e8] font-medium text-sm mb-4">{p.label}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-semibold text-[#d4a843]">€{p.price}</span>
                  <span className="text-[#a09880] text-xs">{p.unit}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Flex Cards */}
          <div>
            <p className="text-[#a09880] text-xs uppercase tracking-widest mb-4">Flex Cards — flexibel buchbar, kein Abo</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pricing.filter((p) => p.flex).map((p, i) => (
                <div
                  key={i}
                  className="bg-[rgba(255,248,235,0.02)] border border-[rgba(255,248,235,0.06)] rounded-xl p-5 flex items-center justify-between hover:border-[rgba(212,168,67,0.15)] transition-all"
                >
                  <div>
                    <p className="text-[#f5f0e8] text-sm font-medium">{p.duration}</p>
                    <p className="text-[#66604e] text-xs mt-0.5">Flex Card</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#d4a843] font-semibold text-xl">€{p.price}</p>
                    <p className="text-[#66604e] text-xs">{p.unit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-[#d4a843] text-[#0d0c0a] font-semibold px-8 py-4 rounded-full hover:bg-[#e8bc55] transition-all"
            >
              Kostenlose Probestunde buchen →
            </a>
          </div>
        </div>
      </section>

      {/* ── 8. About ─────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Image placeholder */}
            <div className="relative">
              <div className="w-full aspect-[4/5] rounded-2xl bg-[rgba(255,248,235,0.04)] border border-[rgba(255,248,235,0.06)] flex items-center justify-center">
                <div className="text-center text-[#66604e] space-y-2">
                  <svg viewBox="0 0 48 48" className="w-12 h-12 mx-auto opacity-40" fill="none">
                    <circle cx="24" cy="18" r="8" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <p className="text-xs">Foto folgt</p>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-[rgba(212,168,67,0.08)] border border-[rgba(212,168,67,0.15)] -z-10" />
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-[#d4a843] text-xs font-medium tracking-widest uppercase mb-4">Über mich</p>
                <h2 className="text-display-md font-semibold text-[#f5f0e8] leading-tight mb-6">
                  Manuel Büttner
                </h2>
              </div>
              <p className="text-[#a09880] leading-relaxed">
                Seit über 29 Jahren lebe ich Musik — auf der Bühne, im Studio und im Unterrichtsraum. Meine Ausbildung habe ich an der{' '}
                <strong className="text-[#f5f0e8]">Future Music School</strong> absolviert, wo ich Schlagzeugstudien auf professionellem Niveau betrieben habe.
              </p>
              <p className="text-[#a09880] leading-relaxed">
                Ich habe in{' '}
                <strong className="text-[#f5f0e8]">Bands, Orchestern und Musicalproduktionen</strong> gespielt — diese Bühnenpraxis fließt direkt in meinen Unterricht ein. Mir geht es um echte Entwicklung:{' '}
                <em className="text-[#d4a843] not-italic">Ausdruck, Kontrolle, Sound</em>.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {['Schlagzeug', 'Klavier', 'Anfänger', 'Fortgeschrittene', 'Erwachsene', 'Kinder'].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#a09880] border border-[rgba(255,248,235,0.08)] px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. TrialProcess ──────────────────────────────────────────── */}
      <section className="py-24 bg-[#141210]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#d4a843] text-xs font-medium tracking-widest uppercase mb-4">Ablauf</p>
            <h2 className="text-display-md font-semibold text-[#f5f0e8]">Die erste Stunde — so einfach</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="relative text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-[rgba(212,168,67,0.07)] border border-[rgba(212,168,67,0.25)] flex items-center justify-center">
                  <span className="text-[#d4a843] font-semibold text-xl tracking-tight">{s.num}</span>
                </div>
                <h3 className="text-[#f5f0e8] font-semibold text-lg">{s.title}</h3>
                <p className="text-[#a09880] text-sm leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. FAQ ──────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#d4a843] text-xs font-medium tracking-widest uppercase mb-4">FAQ</p>
            <h2 className="text-display-md font-semibold text-[#f5f0e8]">Häufige Fragen</h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ── 11. RentalCTA ────────────────────────────────────────────── */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <a
            href="https://schlagzeugleihen.de"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl bg-[rgba(212,168,67,0.06)] border border-[rgba(212,168,67,0.2)] px-8 py-7 hover:bg-[rgba(212,168,67,0.1)] hover:border-[rgba(212,168,67,0.35)] transition-all"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
              <div>
                <p className="text-[#d4a843] text-xs font-medium uppercase tracking-widest mb-1">Tipp</p>
                <p className="text-[#f5f0e8] font-semibold text-lg">Schlagzeug oder Klavier mieten</p>
                <p className="text-[#a09880] text-sm mt-1">
                  Noch kein eigenes Instrument? Über{' '}
                  <strong className="text-[#f5f0e8]">schlagzeugleihen.de</strong> kannst du günstig und flexibel mieten.
                </p>
              </div>
              <span className="flex-shrink-0 inline-flex items-center gap-1 text-[#d4a843] text-sm font-medium group-hover:gap-2 transition-all">
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
      <section id="kontakt" className="py-24 bg-[#141210]">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#d4a843] text-xs font-medium tracking-widest uppercase mb-4">Kontakt</p>
            <h2 className="text-display-md font-semibold text-[#f5f0e8]">Probestunde anfragen</h2>
            <p className="text-[#a09880] text-sm mt-3">Kostenlos und unverbindlich. Ich melde mich innerhalb von 24 Stunden.</p>
          </div>
          <div className="bg-[rgba(255,248,235,0.03)] border border-[rgba(255,248,235,0.07)] rounded-2xl p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── 13. Footer ───────────────────────────────────────────────── */}
      <footer className="border-t border-[rgba(255,248,235,0.06)] py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#66604e]">
          <p>© 2025 Manuel Büttner · Dein Partner für musikalischen Erfolg</p>
          <div className="flex items-center gap-6">
            <a href="/impressum" className="hover:text-[#a09880] transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-[#a09880] transition-colors">Datenschutz</a>
          </div>
        </div>
      </footer>

    </div>
  )
}
