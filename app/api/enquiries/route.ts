import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { buildInternalEnquiryEmail, buildUserConfirmationEmail } from '@/src/lib/emails';

// Initialise Resend with API key if available
const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy');

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Spam / Honeypot check
    if (data.companyWebsite) {
      // Silently accept spam bots without sending emails
      return NextResponse.json({ success: true });
    }

    // Required fields check
    const { fullName, email, phone, interest, terms } = data;
    
    if (!fullName || !email || !phone || !terms) {
      return NextResponse.json(
        { error: 'Please provide all required fields.' },
        { status: 400 }
      );
    }

    // Simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Enforce basic lengths to prevent abuse
    if (fullName.length > 120 || email.length > 180 || phone.length > 50 || (data.message && data.message.length > 2000)) {
      return NextResponse.json(
        { error: 'One or more fields exceed the maximum allowed length.' },
        { status: 400 }
      );
    }

    const internalEmail = process.env.RESEND_INTERNAL_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Tiyani Magomani <enquiries@tiyanimagomani.com>';
    const replyToEmail = process.env.RESEND_REPLY_TO_EMAIL || internalEmail;

    if (!process.env.RESEND_API_KEY) {
      console.warn('RESEND_API_KEY is not set. Simulation successful.');
      return NextResponse.json({ success: true, simulated: true });
    }
    
    if (!internalEmail) {
      console.error('RESEND_INTERNAL_EMAIL is not set.');
      return NextResponse.json(
        { error: 'Server configuration error.' },
        { status: 500 }
      );
    }

    const firstName = fullName.split(' ')[0];

    // Build the email payloads
    const emailData = {
      ...data,
      firstName,
      submittedAt: new Date().toLocaleString(),
    };

    const internalHtml = buildInternalEnquiryEmail(emailData);
    const userHtml = buildUserConfirmationEmail(emailData);

    // Send internal notification email
    await resend.emails.send({
      from: fromEmail,
      to: internalEmail,
      replyTo: email, // Reply-to client's email
      subject: data.calculatorType ? 'New Tiyani Magomani Calculator Enquiry' : 'New Tiyani Magomani Enquiry',
      html: internalHtml,
    });

    // Send user confirmation email
    await resend.emails.send({
      from: fromEmail,
      to: email,
      replyTo: replyToEmail, // Reply-to business email
      subject: 'We received your Tiyani Magomani enquiry',
      html: userHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending enquiry:', error);
    return NextResponse.json(
      { error: 'Something went wrong while sending your enquiry. Please try again.' },
      { status: 500 }
    );
  }
}
