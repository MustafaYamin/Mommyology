import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Configure your SMTP transporter (use real credentials in production)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // e.g. 'yourgmail@gmail.com'
        pass: process.env.EMAIL_PASS, // app password only
      },
    });

    // Verify transporter connection before sending
    await transporter.verify();

    await transporter.sendMail({
      from: process.env.EMAIL_USER, // must match the authenticated user
      replyTo: email, // reply to the sender
      to: 'mustafayamin5@gmail.com',
      subject: `Contact from ${name}`,
      text: message,
      html: `<p><b>From:</b> ${name} (${email})</p><p>${message}</p>`
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
