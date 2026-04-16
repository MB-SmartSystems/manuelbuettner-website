import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { vorname, nachname, email, phone, anliegen } = body

    if (!vorname || !nachname || !email || !anliegen) {
      return NextResponse.json({ error: 'Pflichtfelder fehlen.' }, { status: 400 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const { error } = await resend.emails.send({
      from: 'Kontaktformular <noreply@manuelbuettner.de>',
      to: ['info@mb-webdesign.de'],
      replyTo: email,
      subject: `Neue Anfrage von ${vorname} ${nachname}`,
      text: [
        `Name: ${vorname} ${nachname}`,
        `E-Mail: ${email}`,
        `Telefon: ${phone || '—'}`,
        '',
        `Anliegen:`,
        anliegen,
        '',
        `Zeitpunkt: ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}`,
      ].join('\n'),
    })

    if (error) {
      console.error('[Contact Form] Resend error:', error)
      return NextResponse.json({ error: 'E-Mail konnte nicht gesendet werden.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[Contact Form] Unexpected error:', err)
    return NextResponse.json({ error: 'Serverfehler. Bitte erneut versuchen.' }, { status: 500 })
  }
}
