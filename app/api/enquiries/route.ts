import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { buildInternalEnquiryEmail, buildUserConfirmationEmail } from '@/src/lib/emails';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Spam / Honeypot check
    if (data.companyWebsite) {
      // Silently accept spam bots without sending emails
      console.warn('Enquiry rejected by the honeypot check.');
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

    const apiKey = process.env.RESEND_API_KEY?.trim();
    const internalEmail = process.env.RESEND_INTERNAL_EMAIL?.trim();
    const fromEmail = process.env.RESEND_FROM_EMAIL?.trim() || 'Tiyani Magomani <enquiries@tiyanimagomani.com>';
    const replyToEmail = process.env.RESEND_REPLY_TO_EMAIL?.trim() || internalEmail;

    if (!apiKey) {
      console.error('RESEND_API_KEY is not set. Email was not sent.');
      return NextResponse.json(
        { error: 'Email delivery is not configured yet. Please contact the site administrator.' },
        { status: 503 }
      );
    }
    
    if (!internalEmail) {
      console.error('RESEND_INTERNAL_EMAIL is not set.');
      return NextResponse.json(
        { error: 'Server configuration error.' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

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
    const internalResult = await resend.emails.send({
      from: fromEmail,
      to: internalEmail,
      replyTo: email, // Reply-to client's email
      subject: data.submissionType === 'product_calculator_enquiry' ? 'New Tiyani Magomani Calculator Enquiry' : 'New Tiyani Magomani Enquiry',
      html: internalHtml,
    });

    if (internalResult.error) {
      console.error('Resend failed to queue the internal enquiry email.', internalResult.error);
      return NextResponse.json(
        { error: 'We could not send your enquiry at this time. Please try again shortly.' },
        { status: 502 }
      );
    }

    console.info('Internal enquiry email queued.', { id: internalResult.data?.id });

    // Send user confirmation email
    const confirmationResult = await resend.emails.send({
      from: fromEmail,
      to: email,
      replyTo: replyToEmail, // Reply-to business email
      subject: 'We received your Tiyani Magomani enquiry',
      html: userHtml,
    });

    if (confirmationResult.error) {
      console.error('Resend failed to queue the enquiry confirmation email.', confirmationResult.error);
      return NextResponse.json(
        { error: 'Your enquiry was received, but we could not send the confirmation email.' },
        { status: 502 }
      );
    }

    console.info('Enquiry confirmation email queued.', { id: confirmationResult.data?.id });

    return NextResponse.json({
      success: true,
      emailIds: {
        internal: internalResult.data?.id,
        confirmation: confirmationResult.data?.id,
      },
    });
  } catch (error) {
    console.error('Error sending enquiry:', error);
    return NextResponse.json(
      { error: 'Something went wrong while sending your enquiry. Please try again.' },
      { status: 500 }
    );
  }
}
