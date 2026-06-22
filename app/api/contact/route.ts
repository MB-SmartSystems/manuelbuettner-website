import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// kontakt-integrity DoD: Speicher-zuerst -> Notify -> Dead-Letter -> kein falsches "Danke".
// Eine Anfrage gilt nur als erfasst, wenn sie dauerhaft gespeichert ODER nachweislich an
// Manuel zugestellt wurde (E-Mail/Telegram mit voller Payload). Sonst Fehler an den Client.

const QUELLE = 'manuelbuettner.de'
const BASEROW = process.env.BASEROW_API_URL || 'https://baserow.mb-smartsystems.de'
const TABLE = process.env.BASEROW_LEADS_TABLE // z.B. "1007"
const BASEROW_TOKEN = process.env.BASEROW_TOKEN
const NOTIFY_URL = process.env.N8N_LEAD_NOTIFY_URL // n8n website-lead-notify (Telegram)

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// --- dauerhaft speichern (Baserow) ---
async function storeLead(row: Record<string, unknown>): Promise<boolean> {
  if (!TABLE || !BASEROW_TOKEN) return false
  const res = await fetch(
    `${BASEROW}/api/database/rows/table/${TABLE}/?user_field_names=true`,
    {
      method: 'POST',
      headers: { Authorization: `Token ${BASEROW_TOKEN}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(row),
    }
  )
  if (!res.ok) throw new Error(`Baserow ${res.status}`)
  return true
}

// --- Telegram-Notify via n8n ---
async function notifyTelegram(text: string): Promise<boolean> {
  if (!NOTIFY_URL) return false
  const res = await fetch(NOTIFY_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  })
  return res.ok
}

// --- E-Mail-Notify (SMTP) ---
async function notifyMail(subject: string, text: string): Promise<boolean> {
  if (!process.env.SMTP_HOST) return false
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  })
  await transporter.sendMail({
    from: `Kontaktformular <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_TO || 'info@mb-webdesign.de',
    subject,
    text,
  })
  return true
}

export async function POST(req: NextRequest) {
  let body: Record<string, string> = {}
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Ungueltige Anfrage.' }, { status: 400 })
  }

  const { vorname, nachname, email, phone, anliegen, _hp } = body

  if (!vorname || !nachname || !email || !anliegen) {
    return NextResponse.json({ error: 'Pflichtfelder fehlen.' }, { status: 400 })
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Ungueltige E-Mail.' }, { status: 400 })
  }

  // Honeypot: NICHT still verwerfen, sondern als Quarantaene speichern (DoD 5).
  const quarantine = Boolean(_hp && String(_hp).trim())

  const name = `${vorname} ${nachname}`
  const now = new Date()
  const nowIso = now.toISOString()

  // 1) SPEICHER ZUERST
  let stored = false
  try {
    await storeLead({
      Name: name,
      Email: email,
      Telefon: phone || '',
      Nachricht: anliegen,
      Quelle: QUELLE,
      Status: 'Neu',
      Quarantaene: quarantine,
      Eingang: nowIso,
      Raw_Payload: JSON.stringify(body),
    })
    stored = true
  } catch (e) {
    console.error('[contact] Baserow-Speicher fehlgeschlagen:', e)
  }

  // Quarantaene (Bot): gespeichert+markiert, KEINE Benachrichtigung, dem Bot "Erfolg" zeigen.
  if (quarantine) {
    return NextResponse.json({ success: true })
  }

  // 2) BENACHRICHTIGEN (E-Mail + Telegram). Bei Speicher-Fehler tragen diese die volle
  //    Payload als DEAD-LETTER, damit nichts verloren geht.
  const flag = stored ? '' : 'DEAD-LETTER (Speicher fehlgeschlagen) '
  const text =
    `${stored ? '📩' : '⚠️'} ${flag}Neue Anfrage [${QUELLE}]\n` +
    `${name}\n${email} / ${phone || '—'}\n\n${anliegen}\n\nEingang: ${now.toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}`
  const subject = `${stored ? '' : '[DEAD-LETTER] '}Neue Anfrage von ${name}`

  const mailOk = await notifyMail(subject, text).catch(() => false)
  const tgOk = await notifyTelegram(text).catch(() => false)

  // 3) KEIN FALSCHES "DANKE": Erfolg nur, wenn dauerhaft gespeichert ODER zugestellt.
  if (stored || mailOk || tgOk) {
    return NextResponse.json({ success: true })
  }
  return NextResponse.json(
    { error: 'Konnte nicht zugestellt werden. Bitte erneut versuchen.' },
    { status: 500 }
  )
}
