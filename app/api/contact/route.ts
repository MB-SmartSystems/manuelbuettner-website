import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { vorname, nachname, email, phone, anliegen } = body

    if (!vorname || !nachname || !email || !anliegen) {
      return NextResponse.json({ error: 'Pflichtfelder fehlen.' }, { status: 400 })
    }

    // Server-side only — no secrets exposed to client
    // TODO: Replace with nodemailer / Resend / etc. and read credentials from env
    console.log('[Contact Form Submission]', {
      to: 'info@manuelbuettner.de',
      vorname,
      nachname,
      email,
      phone: phone || '—',
      anliegen,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Serverfehler. Bitte erneut versuchen.' }, { status: 500 })
  }
}
