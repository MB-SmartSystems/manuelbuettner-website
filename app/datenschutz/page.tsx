import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Datenschutz — Manuel Büttner',
  robots: { index: false, follow: false },
}

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-[#0d0c0a] text-[#f5f0e8]">
      {/* NavBar */}
      <header className="sticky top-0 z-50 bg-[rgba(13,12,10,0.92)] backdrop-blur-md border-b border-[rgba(255,248,235,0.06)]">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-semibold text-[#f5f0e8] tracking-tight text-sm">
            Manuel Büttner
            <span className="text-[#d4a843] ml-1">·</span>
          </Link>
          <Link
            href="/"
            className="text-xs font-semibold text-[#a09880] hover:text-[#f5f0e8] transition-colors flex items-center gap-1"
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
        <h1 className="text-display-md font-semibold text-[#f5f0e8] mb-10">Datenschutzerklärung</h1>

        <div className="space-y-10 text-[#a09880] text-sm leading-relaxed">

          {/* 1 */}
          <section>
            <h2 className="text-[#f5f0e8] font-semibold text-base mb-4">1. Datenschutz auf einen Blick</h2>

            <h3 className="text-[#d4a843] font-medium text-sm mb-2">Allgemeine Hinweise</h3>
            <p className="mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
              Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema
              Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h3 className="text-[#d4a843] font-medium text-sm mb-2">Datenerfassung auf dieser Website</h3>
            <p className="font-medium text-[#c8bfa8] mb-1">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
            <p className="mb-4">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
              Kontaktdaten können Sie dem Abschnitt &ldquo;Hinweis zur Verantwortlichen Stelle&rdquo; in
              dieser Datenschutzerklärung entnehmen.
            </p>

            <p className="font-medium text-[#c8bfa8] mb-1">Wie erfassen wir Ihre Daten?</p>
            <p className="mb-4">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es
              sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden
              automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme
              erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder
              Uhrzeit des Seitenaufrufs).
            </p>

            <p className="font-medium text-[#c8bfa8] mb-1">Wofür nutzen wir Ihre Daten?</p>
            <p className="mb-4">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
              gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <p className="font-medium text-[#c8bfa8] mb-1">Welche Rechte haben Sie bezüglich Ihrer Daten?</p>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck
              Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die
              Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
              Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft
              widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der
              Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
              Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-[#f5f0e8] font-semibold text-base mb-4">2. Hosting</h2>

            <h3 className="text-[#d4a843] font-medium text-sm mb-2">Onepage.io</h3>
            <p className="mb-4">
              Wir hosten unsere Website bei Onepage. Anbieter ist die Onepage GmbH, Neue Rothofstr. 13-19,
              60313 Frankfurt am Main (nachfolgend &ldquo;Onepage&rdquo;). Wenn Sie unsere Website besuchen,
              verarbeitet Onepage verschiedene Logfiles inklusive Ihrer IP-Adressen. Details entnehmen Sie
              der Datenschutzerklärung von Onepage:{' '}
              <a
                href="https://onepage.io/de/datenschutzerklarung"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4a843] hover:underline underline-offset-2"
              >
                https://onepage.io/de/datenschutzerklarung
              </a>
              .
            </p>
            <p className="mb-4">
              Die Verwendung von Onepage erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben
              ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.
              Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
              ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die
              Einwilligung ist jederzeit widerrufbar.
            </p>
            <p>Auftragsverarbeitung: Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen.</p>

            <h3 className="text-[#d4a843] font-medium text-sm mb-2 mt-5">Google Cloud CDN</h3>
            <p className="mb-4">
              Wir nutzen das Content Delivery Network Google Cloud CDN. Anbieter ist die Google Ireland
              Limited (&ldquo;Google&rdquo;), Gordon House, Barrow Street, Dublin 4, Irland. Google bietet
              ein weltweit verteiltes Content Delivery Network an. Dabei wird technisch der
              Informationstransfer zwischen Ihrem Browser und unserer Website über das Netzwerk von Google
              geleitet. Hierdurch können wir die weltweite Erreichbarkeit und die Leistungsfähigkeit
              unserer Website erhöhen.
            </p>
            <p className="mb-4">
              Der Einsatz von Google Cloud CDN beruht auf unserem berechtigten Interesse an einer möglichst
              fehlerfreien und sicheren Bereitstellung unseres Webangebots (Art. 6 Abs. 1 lit. f DSGVO).
              Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
              ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG.
            </p>
            <p>
              Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission
              gestützt. Details:{' '}
              <a
                href="https://cloud.google.com/terms/eu-model-contract-clause"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4a843] hover:underline underline-offset-2"
              >
                https://cloud.google.com/terms/eu-model-contract-clause
              </a>
              . Google ist unter dem EU-US Data Privacy Framework (DPF) zertifiziert:{' '}
              <a
                href="https://www.dataprivacyframework.gov/list"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4a843] hover:underline underline-offset-2"
              >
                https://www.dataprivacyframework.gov/list
              </a>
              . Weitere Informationen:{' '}
              <a
                href="https://cloud.google.com/terms/cloud-privacy-notice"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4a843] hover:underline underline-offset-2"
              >
                https://cloud.google.com/terms/cloud-privacy-notice
              </a>
              .
            </p>
            <p className="mt-3">Auftragsverarbeitung: Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen.</p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-[#f5f0e8] font-semibold text-base mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3 className="text-[#d4a843] font-medium text-sm mb-2">Datenschutz</h3>
            <p className="mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
              behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wir weisen darauf hin, dass die
              Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken
              aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
              möglich.
            </p>

            <h3 className="text-[#d4a843] font-medium text-sm mb-2">Hinweis zur verantwortlichen Stelle</h3>
            <p className="mb-4">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mb-4">
              Manuel Büttner<br />
              Schlesierstraße 19a<br />
              64665 Alsbach-Hähnlein<br />
              Telefon: 0170-3648789<br />
              E-Mail: info@manuelbuettner.de
            </p>
            <p className="mb-4">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam
              mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten
              entscheidet.
            </p>

            <h3 className="text-[#d4a843] font-medium text-sm mb-2">Speicherdauer</h3>
            <p className="mb-4">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde,
              verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung
              entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur
              Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich
              zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer-
              oder handelsrechtliche Aufbewahrungsfristen).
            </p>

            <h3 className="text-[#d4a843] font-medium text-sm mb-2">Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung</h3>
            <p className="mb-4">
              Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre
              personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO. Sofern Sie in die
              Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät eingewilligt
              haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die
              Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur
              Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf
              Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern
              diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind, auf Grundlage von
              Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres
              berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen.
            </p>

            <h3 className="text-[#d4a843] font-medium text-sm mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p className="mb-4">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie
              können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis
              zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <h3 className="text-[#d4a843] font-medium text-sm mb-2">
              Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)
            </h3>
            <p className="mb-4">
              Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt,
              haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben,
              gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch
              für ein auf diese Bestimmungen gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf der
              eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch
              einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei
              denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre
              Interessen, Rechte und Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung,
              Ausübung oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).
            </p>
            <p className="mb-4">
              Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie
              das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener
              Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es
              mit solcher Direktwerbung in Verbindung steht. Wenn Sie widersprechen, werden Ihre
              personenbezogenen Daten anschließend nicht mehr zum Zwecke der Direktwerbung verwendet
              (Widerspruch nach Art. 21 Abs. 2 DSGVO).
            </p>

            <h3 className="text-[#d4a843] font-medium text-sm mb-2">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <p className="mb-4">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
              Aufsichtsbehörde zu. Für uns zuständig ist:
            </p>
            <p className="mb-4">
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
                className="text-[#d4a843] hover:underline underline-offset-2"
              >
                https://datenschutz.hessen.de
              </a>
            </p>

            <h3 className="text-[#d4a843] font-medium text-sm mb-2">Recht auf Datenübertragbarkeit</h3>
            <p className="mb-4">
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines
              Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen,
              maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten
              an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar
              ist.
            </p>

            <h3 className="text-[#d4a843] font-medium text-sm mb-2">Auskunft, Berichtigung und Löschung</h3>
            <p className="mb-4">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
              unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und
              Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder
              Löschung dieser Daten.
            </p>

            <h3 className="text-[#d4a843] font-medium text-sm mb-2">Recht auf Einschränkung der Verarbeitung</h3>
            <p className="mb-4">
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
              verlangen. Hierzu können Sie sich jederzeit an uns wenden.
            </p>

            <h3 className="text-[#d4a843] font-medium text-sm mb-2">SSL- bzw. TLS-Verschlüsselung</h3>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
              Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
              daran, dass die Adresszeile des Browsers von &ldquo;http&rdquo; auf &ldquo;https&rdquo;
              wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-[#f5f0e8] font-semibold text-base mb-4">4. Datenerfassung auf dieser Website</h2>

            <h3 className="text-[#d4a843] font-medium text-sm mb-2">Cookies</h3>
            <p className="mb-4">
              Unsere Internetseiten verwenden so genannte &ldquo;Cookies&rdquo;. Cookies sind kleine
              Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder
              vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente
              Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs
              automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie
              diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
            </p>
            <p className="mb-4">
              Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung
              bestimmter, von Ihnen gewünschter Funktionen oder zur Optimierung der Website erforderlich
              sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert,
              sofern keine andere Rechtsgrundlage angegeben wird. Sofern eine Einwilligung zur Speicherung
              von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die
              Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO
              und § 25 Abs. 1 TDDDG); die Einwilligung ist jederzeit widerrufbar.
            </p>

            <h3 className="text-[#d4a843] font-medium text-sm mb-2">Einwilligung mit CookieConsent (Onepage)</h3>
            <p className="mb-4">
              Unsere Website nutzt die Einwilligungs-Technologie von CookieConsent, integriert über
              unseren Hosting-Anbieter Onepage GmbH, Neue Rothofstr. 13-19, 60313 Frankfurt am Main, um
              Ihre Einwilligung zur Speicherung bestimmter Cookies auf Ihrem Endgerät oder zum Einsatz
              bestimmter Technologien einzuholen und diese datenschutzkonform zu dokumentieren.
              Rechtsgrundlage für den Einsatz dieser Technologie ist Art. 6 Abs. 1 lit. c DSGVO.
            </p>
            <p className="mb-4">
              Wenn Sie unsere Website betreten, wird ein Consent-Cookie in Ihrem Browser gespeichert, in
              welchem die von Ihnen erteilten Einwilligungen oder der Widerruf dieser Einwilligungen
              gespeichert werden. Diese Daten werden nicht an den Anbieter der Consent-Technologie
              weitergegeben. Die erfassten Daten werden gespeichert, bis Sie uns zur Löschung auffordern
              bzw. das Consent-Cookie selbst löschen oder der Zweck für die Datenspeicherung entfällt.
              Zwingende gesetzliche Aufbewahrungspflichten bleiben unberührt.
            </p>

            <h3 className="text-[#d4a843] font-medium text-sm mb-2">Server-Log-Dateien</h3>
            <p className="mb-2">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
              Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mb-4">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die
              Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
              Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung
              und der Optimierung seiner Website.
            </p>

            <h3 className="text-[#d4a843] font-medium text-sm mb-2">Kontaktformular</h3>
            <p className="mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
              der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
              nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mb-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern
              Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
              vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung
              auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten
              Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a
              DSGVO) sofern diese abgefragt wurde.
            </p>

            <h3 className="text-[#d4a843] font-medium text-sm mb-2">Anfrage per E-Mail oder Telefon</h3>
            <p>
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus
              hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres
              Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
              Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
              lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
              Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht
              die Verarbeitung auf unserem berechtigten Interesse oder auf Ihrer Einwilligung.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-[#f5f0e8] font-semibold text-base mb-4">5. Analyse-Tools und Werbung</h2>

            <h3 className="text-[#d4a843] font-medium text-sm mb-2">Google Tag Manager</h3>
            <p className="mb-4">
              Wir setzen den Google Tag Manager ein. Anbieter ist die Google Ireland Limited, Gordon House,
              Barrow Street, Dublin 4, Irland. Der Google Tag Manager ist ein Tool, mit dessen Hilfe wir
              Tracking- oder Statistik-Tools und andere Technologien auf unserer Website einbinden können.
              Der Google Tag Manager selbst erstellt keine Nutzerprofile, speichert keine Cookies und
              nimmt keine eigenständigen Analysen vor. Er dient lediglich der Verwaltung und Ausspielung
              der über ihn eingebundenen Tools. Der Google Tag Manager erfasst jedoch Ihre IP-Adresse, die
              auch an das Mutterunternehmen von Google in die Vereinigten Staaten übertragen werden kann.
            </p>
            <p className="mb-4">
              Der Einsatz des Google Tag Managers erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
              Der Websitebetreiber hat ein berechtigtes Interesse an einer schnellen und unkomplizierten
              Einbindung und Verwaltung verschiedener Tools auf seiner Website. Sofern eine entsprechende
              Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von
              Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit
              widerrufbar.
            </p>
            <p className="mb-4">
              Das Unternehmen verfügt über eine Zertifizierung nach dem &ldquo;EU-US Data Privacy
              Framework&rdquo; (DPF):{' '}
              <a
                href="https://www.dataprivacyframework.gov/participant/5780"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4a843] hover:underline underline-offset-2"
              >
                https://www.dataprivacyframework.gov/participant/5780
              </a>
              .
            </p>

            <h3 className="text-[#d4a843] font-medium text-sm mb-2">Google Analytics</h3>
            <p className="mb-4">
              Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die
              Google Ireland Limited (&ldquo;Google&rdquo;), Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p className="mb-4">
              Google Analytics ermöglicht es dem Websitebetreiber, das Verhalten der Websitebesucher zu
              analysieren. Hierbei erhält der Websitebetreiber verschiedene Nutzungsdaten, wie z. B.
              Seitenaufrufe, Verweildauer, verwendete Betriebssysteme und Herkunft des Nutzers. Diese
              Daten werden in einer User-ID zusammengefasst und dem jeweiligen Endgerät des
              Websitebesuchers zugeordnet.
            </p>
            <p className="mb-4">
              Google Analytics verwendet Technologien, die die Wiedererkennung des Nutzers zum Zwecke der
              Analyse des Nutzerverhaltens ermöglichen (z. B. Cookies oder Device-Fingerprinting). Die
              von Google erfassten Informationen über die Benutzung dieser Website werden in der Regel an
              einen Server von Google in den USA übertragen und dort gespeichert.
            </p>
            <p className="mb-4">
              Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1
              lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Die
              Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission
              gestützt:{' '}
              <a
                href="https://privacy.google.com/businesses/controllerterms/mccs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4a843] hover:underline underline-offset-2"
              >
                https://privacy.google.com/businesses/controllerterms/mccs/
              </a>
              . Das Unternehmen verfügt über eine Zertifizierung nach dem &ldquo;EU-US Data Privacy
              Framework&rdquo; (DPF):{' '}
              <a
                href="https://www.dataprivacyframework.gov/participant/5780"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4a843] hover:underline underline-offset-2"
              >
                https://www.dataprivacyframework.gov/participant/5780
              </a>
              .
            </p>

            <h3 className="text-[#d4a843] font-medium text-sm mb-2">IP-Anonymisierung</h3>
            <p className="mb-4">
              Auf dieser Website ist die IP-Anonymisierung von Google Analytics aktiviert. Dadurch wird
              Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in
              anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der
              Übermittlung in die USA gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen
              Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser
              Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten,
              um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der
              Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem
              Websitebetreiber zu erbringen.
            </p>

            <h3 className="text-[#d4a843] font-medium text-sm mb-2">Browser-Plugin</h3>
            <p className="mb-4">
              Sie können die Erfassung und Verarbeitung Ihrer Daten durch Google verhindern, indem Sie
              das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren:{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout?hl=de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4a843] hover:underline underline-offset-2"
              >
                https://tools.google.com/dlpage/gaoptout?hl=de
              </a>
              . Weitere Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der
              Datenschutzerklärung von Google:{' '}
              <a
                href="https://support.google.com/analytics/answer/6004245?hl=de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4a843] hover:underline underline-offset-2"
              >
                https://support.google.com/analytics/answer/6004245?hl=de
              </a>
              .
            </p>

            <h3 className="text-[#d4a843] font-medium text-sm mb-2">Auftragsverarbeitung</h3>
            <p>
              Wir haben mit Google einen Vertrag zur Auftragsverarbeitung abgeschlossen und setzen die
              strengen Vorgaben der deutschen Datenschutzbehörden bei der Nutzung von Google Analytics
              vollständig um.
            </p>
          </section>

          <p className="text-[#66604e] text-xs pt-4 border-t border-[rgba(255,248,235,0.06)]">
            Stand: 14. April 2026
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[rgba(255,248,235,0.06)] py-10 mt-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#66604e]">
          <p>© 2025 Manuel Büttner · Dein Partner für musikalischen Erfolg</p>
          <div className="flex items-center gap-6">
            <Link href="/impressum" className="hover:text-[#a09880] transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-[#a09880] transition-colors">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
