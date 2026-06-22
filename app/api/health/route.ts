import { NextResponse } from 'next/server'

// kontakt-integrity DoD 9: Dependency-Health der Kontakt-Strecke.
// Prueft, ob der dauerhafte Speicher (Baserow) erreichbar + Token gueltig ist und ob die
// Notify-/Mail-Konfiguration vorhanden ist. Vom n8n-Health-Watcher gepingt; Alarm nur bei 503.

const BASEROW = process.env.BASEROW_API_URL || 'https://baserow.mb-smartsystems.de'
const TABLE = process.env.BASEROW_LEADS_TABLE
const BASEROW_TOKEN = process.env.BASEROW_TOKEN

export async function GET() {
  const checks: Record<string, boolean> = {
    baserow_env: Boolean(TABLE && BASEROW_TOKEN),
    notify_url: Boolean(process.env.N8N_LEAD_NOTIFY_URL),
    smtp_env: Boolean(process.env.SMTP_HOST && process.env.SMTP_USER),
  }

  // Aktiver Speicher-Check: 1 Zeile lesen (Token gueltig + Baserow erreichbar)
  if (checks.baserow_env) {
    try {
      const res = await fetch(
        `${BASEROW}/api/database/rows/table/${TABLE}/?size=1`,
        { headers: { Authorization: `Token ${BASEROW_TOKEN}` }, cache: 'no-store' }
      )
      checks.baserow_reachable = res.ok
    } catch {
      checks.baserow_reachable = false
    }
  } else {
    checks.baserow_reachable = false
  }

  // Speicher ist die kritische Abhaengigkeit. Notify ist zusaetzliche Redundanz.
  const ok = checks.baserow_reachable
  return NextResponse.json(
    { ok, checks, ts: new Date().toISOString() },
    { status: ok ? 200 : 503 }
  )
}
