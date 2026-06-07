import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { vorname, nachname, email, phone, anliegen } = body

    if (!vorname || !nachname || !email || !anliegen) {
      return NextResponse.json({ error: 'Pflichtfelder fehlen.' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false, // STARTTLS auf 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `Kontaktformular <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || 'info@mb-webdesign.de',
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

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[Contact Form] Unexpected error:', err)
    return NextResponse.json({ error: 'Serverfehler. Bitte erneut versuchen.' }, { status: 500 })
  }
}
