import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Datenschutz — Manuel Büttner',
  robots: { index: false, follow: false },
}

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-[#1E2E34] text-[#CAD2C5]">
      {/* NavBar */}
      <header className="sticky top-0 z-50 bg-[rgba(30,46,52,0.92)] backdrop-blur-md border-b border-[rgba(202,210,197,0.08)]">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-semibold text-[#CAD2C5] tracking-tight text-sm">
            Manuel Büttner - Schlagzeuglehrer
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
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-display-md font-semibold text-[#CAD2C5] mb-10">Datenschutzerklärung</h1>

        <div className="space-y-10 text-[rgba(255,255,255,0.72)] text-sm leading-relaxed">

          {/* 1 */}
          <section>
            <h2 className="text-[#CAD2C5] font-semibold text-base mb-4">1. Datenschutz auf einen Blick</h2>

            <h3 className="text-[#84A98C] font-medium text-sm mb-2">Allgemeine Hinweise</h3>
            <p className="mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
              Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema
              Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h3 className="text-[#84A98C] font-medium text-sm mb-2">Datenerfassung auf dieser Website</h3>
            <p className="font-medium text-[#CAD2C5] mb-1">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
            <p className="mb-4">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
              können Sie dem Abschnitt &ldquo;Hinweis zur Verantwortlichen Stelle&rdquo; in dieser
              Datenschutzerklärung entnehmen.
            </p>

            <p className="font-medium text-[#CAD2C5] mb-1">Wie erfassen wir Ihre Daten?</p>
            <p className="mb-4">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich
              z.&nbsp;B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden
              automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem
              technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>

            <p className="font-medium text-[#CAD2C5] mb-1">Wofür nutzen wir Ihre Daten?</p>
            <p className="mb-4">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
              gewährleisten. Diese Website verwendet keine Tracking- oder Analyse-Tools.
            </p>

            <p className="font-medium text-[#CAD2C5] mb-1">Welche Rechte haben Sie bezüglich Ihrer Daten?</p>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung
              oder Löschung dieser Daten zu verlangen. Außerdem haben Sie das Recht, unter bestimmten
              Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des
              Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-[#CAD2C5] font-semibold text-base mb-4">2. Hosting</h2>

            <h3 className="text-[#84A98C] font-medium text-sm mb-2">Vercel</h3>
            <p className="mb-4">
              Wir hosten unsere Website bei Vercel. Anbieter ist die Vercel Inc., 340 Pine Street, Suite 701,
              San Francisco, CA 94104, USA (nachfolgend &ldquo;Vercel&rdquo;).
            </p>
            <p className="mb-4">
              Vercel betreibt für europäische Nutzer Serverinfrastruktur in der EU (Region Frankfurt/Main).
              Wenn Sie unsere Website besuchen, erfasst Vercel automatisch Serverlog-Daten inklusive Ihrer
              IP-Adresse. Einzelheiten entnehmen Sie der Datenschutzerklärung von Vercel:{' '}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#84A98C] hover:underline underline-offset-2"
              >
                https://vercel.com/legal/privacy-policy
              </a>
              .
            </p>
            <p className="mb-4">
              Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein
              berechtigtes Interesse an einer zuverlässigen und sicheren Darstellung unserer Website.
            </p>
            <p>
              Soweit eine Übertragung personenbezogener Daten in die USA erfolgt, stützt sich diese auf die
              Standardvertragsklauseln (SCC) der EU-Kommission. Vercel ist zudem unter dem EU-US Data Privacy
              Framework (DPF) zertifiziert:{' '}
              <a
                href="https://www.dataprivacyframework.gov/list"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#84A98C] hover:underline underline-offset-2"
              >
                https://www.dataprivacyframework.gov/list
              </a>
              .
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-[#CAD2C5] font-semibold text-base mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3 className="text-[#84A98C] font-medium text-sm mb-2">Datenschutz</h3>
            <p className="mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln
              Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="text-[#84A98C] font-medium text-sm mb-2 mt-6">Hinweis zur verantwortlichen Stelle</h3>
            <p className="mb-2">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <address className="not-italic mb-4">
              Manuel Büttner<br />
              Schlesierstraße 19a<br />
              64665 Alsbach-Hähnlein<br />
              Telefon: 0170-3648789<br />
              E-Mail: info@manuelbuettner.de
            </address>
            <p>
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit
              anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
            </p>

            <h3 className="text-[#84A98C] font-medium text-sm mb-2 mt-6">Datenschutzbeauftragter</h3>
            <p className="mb-4">
              Wir sind gemäß §&nbsp;38 BDSG nicht verpflichtet, einen Datenschutzbeauftragten zu bestellen,
              da wir nicht mehr als 20 Personen regelmäßig mit der automatisierten Verarbeitung
              personenbezogener Daten beschäftigen. Bei Fragen zum Datenschutz wenden Sie sich direkt an uns
              (Kontaktdaten im Impressum).
            </p>

            <h3 className="text-[#84A98C] font-medium text-sm mb-2 mt-6">Speicherdauer</h3>
            <p>
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde,
              verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung
              entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur
              Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich
              zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben.
            </p>

            <h3 className="text-[#84A98C] font-medium text-sm mb-2 mt-6">Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung</h3>
            <p>
              Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen
              Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO. Sind Ihre Daten zur Vertragserfüllung oder
              zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf
              Grundlage von Art. 6 Abs. 1 lit. b DSGVO. Die Datenverarbeitung kann ferner auf Grundlage
              unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen.
            </p>

            <h3 className="text-[#84A98C] font-medium text-sm mb-2 mt-6">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie
              können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis
              zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <h3 className="text-[#84A98C] font-medium text-sm mb-2 mt-6">
              Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung
              (Art. 21 DSGVO)
            </h3>
            <p>
              Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben
              Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen
              die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen. Die jeweilige
              Rechtsgrundlage, auf der eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung.
            </p>

            <h3 className="text-[#84A98C] font-medium text-sm mb-2 mt-6">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <p className="mb-2">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
              Aufsichtsbehörde zu. Für uns zuständig ist:
            </p>
            <address className="not-italic mb-2">
              Der Hessische Beauftragte für Datenschutz und Informationsfreiheit<br />
              Postfach 3163, 65021 Wiesbaden<br />
              Gustav-Stresemann-Ring 1, 65189 Wiesbaden<br />
              Telefon: +49 611 1408-0<br />
              E-Mail: poststelle@datenschutz.hessen.de<br />
              Web:{' '}
              <a
                href="https://datenschutz.hessen.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#84A98C] hover:underline underline-offset-2"
              >
                https://datenschutz.hessen.de
              </a>
            </address>

            <h3 className="text-[#84A98C] font-medium text-sm mb-2 mt-6">Recht auf Datenübertragbarkeit</h3>
            <p>
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines
              Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen,
              maschinenlesbaren Format aushändigen zu lassen.
            </p>

            <h3 className="text-[#84A98C] font-medium text-sm mb-2 mt-6">Auskunft, Berichtigung und Löschung</h3>
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
              unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und
              Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder
              Löschung dieser Daten.
            </p>

            <h3 className="text-[#84A98C] font-medium text-sm mb-2 mt-6">Recht auf Einschränkung der Verarbeitung</h3>
            <p>
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
              verlangen. Hierzu können Sie sich jederzeit an uns wenden.
            </p>

            <h3 className="text-[#84A98C] font-medium text-sm mb-2 mt-6">Automatisierte Entscheidungen im Einzelfall einschließlich Profiling</h3>
            <p>
              Sie haben das Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung —
              einschließlich Profiling — beruhenden Entscheidung unterworfen zu werden, die Ihnen gegenüber
              rechtliche Wirkung entfaltet oder Sie in ähnlicher Weise erheblich beeinträchtigt
              (Art. 22 DSGVO). Diese Website nimmt keine automatisierten Entscheidungen dieser Art vor.
            </p>

            <h3 className="text-[#84A98C] font-medium text-sm mb-2 mt-6">SSL- bzw. TLS-Verschlüsselung</h3>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte
              eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass
              die Adresszeile des Browsers von &ldquo;http&rdquo; auf &ldquo;https&rdquo; wechselt und an
              dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-[#CAD2C5] font-semibold text-base mb-4">4. Datenerfassung auf dieser Website</h2>

            <h3 className="text-[#84A98C] font-medium text-sm mb-2">Cookies und lokaler Speicher</h3>
            <p className="mb-4">
              Diese Website setzt keine Tracking-Cookies. Der Cookie-Hinweis-Banner speichert Ihre
              Bestätigung ausschließlich im lokalen Speicher Ihres Browsers (localStorage). Dabei werden
              keine personenbezogenen Daten erhoben oder an Dritte übermittelt. Der Eintrag im lokalen
              Speicher kann jederzeit über die Browser-Einstellungen gelöscht werden.
            </p>

            <h3 className="text-[#84A98C] font-medium text-sm mb-2 mt-6">Server-Log-Dateien</h3>
            <p className="mb-4">
              Der Provider der Seiten (Vercel) erhebt und speichert automatisch Informationen in sogenannten
              Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer-URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die
              Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
              Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung
              und der Optimierung seiner Website. Die Logs werden nach spätestens 30 Tagen gelöscht.
            </p>

            <h3 className="text-[#84A98C] font-medium text-sm mb-2 mt-6">Kontaktformular</h3>
            <p className="mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten (Name, E-Mail,
              Telefon, Anliegen) zwecks Bearbeitung der Anfrage bei uns gespeichert. Diese Daten geben
              wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mb-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern
              Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
              vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung
              auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten
              Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p>
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur
              Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die
              Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen — insbesondere
              Aufbewahrungsfristen — bleiben unberührt.
            </p>

            <h3 className="text-[#84A98C] font-medium text-sm mb-2 mt-6">Anfrage per E-Mail oder Telefon</h3>
            <p>
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus
              hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres
              Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
              Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
              lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt.
            </p>
          </section>

        </div>

        <p className="mt-16 text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>Stand: 14. April 2026</p>
      </main>
    </div>
  )
}
