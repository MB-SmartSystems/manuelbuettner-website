import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Impressum — Manuel Büttner',
  robots: { index: false, follow: false },
}

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[#1E2E34] text-white">
      {/* NavBar */}
      <header className="sticky top-0 z-50 bg-[rgba(30,46,52,0.92)] backdrop-blur-md border-b border-[rgba(202,210,197,0.08)]">
        <nav className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
          <Link href="/" className="font-semibold text-white tracking-tight text-sm whitespace-nowrap">
            <span className="sm:hidden">Manuel Büttner</span>
            <span className="hidden sm:inline">Manuel Büttner - Schlagzeuglehrer</span>
          </Link>
          <Link
            href="/"
            className="text-xs font-semibold text-[rgba(255,255,255,0.72)] hover:text-white transition-colors flex items-center gap-1"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M11 7H3M7 3l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Zurück zur Startseite
          </Link>
        </nav>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <h1 className="text-2xl sm:text-3xl md:text-display-md font-semibold text-white mb-8 md:mb-10">Impressum</h1>

        <div className="space-y-8 text-[rgba(255,255,255,0.72)] text-sm leading-relaxed">

          <section>
            <h2 className="text-white font-semibold text-base mb-3">Angaben gemäß § 5 DDG</h2>
            <p>Manuel Büttner<br />
            Einzelunternehmer<br />
            Schlesierstraße 19a<br />
            64665 Alsbach-Hähnlein<br />
            Deutschland</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">Kontakt</h2>
            <p>Telefon: 0170-3648789<br />
            E-Mail: info@manuelbuettner.de</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">Umsatzsteuer</h2>
            <p>Gemäß § 19 UStG wird keine Umsatzsteuer ausgewiesen (Kleinunternehmerregelung).</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">Redaktionell verantwortlich</h2>
            <p>Manuel Büttner (Anschrift wie oben)</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#84A98C] hover:underline underline-offset-2"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              <br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p>
              Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen.
            </p>
            <p className="mt-3">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
              erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
              Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
              entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
              Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
              mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar.
            </p>
            <p className="mt-3">
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
              Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
              nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p className="mt-3">
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
              gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
              bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>

          <p className="text-xs pt-4 border-t border-[rgba(202,210,197,0.08)]" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Stand: 14. April 2026
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[rgba(202,210,197,0.08)] py-10 mt-8">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
          <p>© {new Date().getFullYear()} Manuel Büttner · Dein Partner für musikalischen Erfolg</p>
          <div className="flex items-center gap-6">
            <Link href="/impressum" className="hover:text-[#84A98C] transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-[#84A98C] transition-colors">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
