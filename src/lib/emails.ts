function getPublicSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');

  if (configuredUrl && !/localhost|127\.0\.0\.1/i.test(configuredUrl)) {
    return configuredUrl;
  }

  const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProductionUrl) {
    return `https://${vercelProductionUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}`;
  }

  return 'https://tiyanimagomani.com';
}

export function buildInternalEnquiryEmail(data: any) {
  const {
    fullName,
    email,
    phone,
    interest,
    amount,
    contactMethod,
    message,
    sourcePage,
    submittedAt,
    term,
    interestType,
    productName,
    calculatedResult
  } = data;

  const siteUrl = getPublicSiteUrl();

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Tiyani Magomani Enquiry</title>
        <style>
          body { font-family: 'Arial', sans-serif; background-color: #F8F3ED; margin: 0; padding: 0; color: #111827; }
          .container { max-w-width: 600px; margin: 0 auto; background-color: #ffffff; }
          .header { background-color: #061D31; padding: 30px 20px; text-align: center; }
          .email-logo { color: #F8F3ED; font-family: Georgia, 'Times New Roman', serif; font-size: 30px; line-height: 1.2; margin: 0 auto 15px; }
          .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: normal; font-family: 'Times New Roman', serif; }
          .content { padding: 30px; }
          .section { margin-bottom: 25px; border-bottom: 1px solid #E5E7EB; padding-bottom: 20px; }
          .section:last-child { border-bottom: none; }
          .section-title { font-size: 16px; font-weight: bold; color: #061D31; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px; }
          .row { margin-bottom: 10px; }
          .label { font-weight: bold; font-size: 14px; color: #6B7280; display: block; margin-bottom: 3px; }
          .value { font-size: 16px; }
          .btn-container { text-align: center; margin-top: 30px; }
          .btn { display: inline-block; background-color: #061D31; color: #ffffff; text-decoration: none; padding: 14px 28px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase; font-size: 13px; }
          .footer { background-color: #F8F3ED; padding: 20px; text-align: center; font-size: 12px; color: #6B7280; border-top: 1px solid #E5E7EB; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="email-logo" style="color:#F8F3ED; font-family:Georgia, 'Times New Roman', serif; font-size:30px; line-height:1.2; margin:0 auto 15px;">Tiyani Magomani</div>
            <h1>New enquiry received</h1>
          </div>
          <div class="content">
            <p>A new enquiry has been submitted through the website.</p>
            
            <div class="section">
              <div class="section-title">Client Details</div>
              <div class="row"><span class="label">Name:</span><span class="value">${fullName}</span></div>
              <div class="row"><span class="label">Email:</span><span class="value">${email}</span></div>
              <div class="row"><span class="label">Phone:</span><span class="value">${phone}</span></div>
              <div class="row"><span class="label">Preferred Contact:</span><span class="value">${contactMethod || 'N/A'}</span></div>
            </div>

            <div class="section">
              <div class="section-title">Investment Details</div>
              <div class="row"><span class="label">Investment Interest:</span><span class="value">${interest || 'Not specified'}</span></div>
              <div class="row"><span class="label">Investment Amount:</span><span class="value">${amount || 'N/A'}</span></div>
              ${term ? `<div class="row"><span class="label">Term:</span><span class="value">${term}</span></div>` : ''}
              ${interestType ? `<div class="row"><span class="label">Interest Type:</span><span class="value">${interestType}</span></div>` : ''}
              ${productName ? `<div class="row"><span class="label">Product / Comparison Option:</span><span class="value">${productName}</span></div>` : ''}
              ${calculatedResult ? `<div class="row"><span class="label">Estimated Result Context:</span><span class="value">${calculatedResult}</span></div>` : ''}
            </div>

            <div class="section">
              <div class="section-title">Message</div>
              <div class="value">${message ? message.replace(/\n/g, '<br>') : 'No message provided.'}</div>
            </div>

            <div class="section">
              <div class="section-title">Submission Details</div>
              <div class="row"><span class="label">Source Page:</span><span class="value">${sourcePage || 'N/A'}</span></div>
              <div class="row"><span class="label">Submitted At:</span><span class="value">${submittedAt || new Date().toISOString()}</span></div>
            </div>

            <div class="btn-container">
              <a href="mailto:${email}" class="btn" style="color: #ffffff;">Reply to Client</a>
            </div>
          </div>
          <div class="footer">
            Tiyani Magomani<br>
            This email was sent because a user submitted an enquiry on the Tiyani Magomani website.
          </div>
        </div>
      </body>
    </html>
  `;
}

export function buildUserConfirmationEmail(data: any) {
  const { firstName } = data;
  const siteUrl = getPublicSiteUrl();

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>We received your Tiyani Magomani enquiry</title>
        <style>
          body { font-family: 'Arial', sans-serif; background-color: #F8F3ED; margin: 0; padding: 0; color: #111827; }
          .container { max-w-width: 600px; margin: 0 auto; background-color: #ffffff; }
          .header { background-color: #061D31; padding: 30px 20px; text-align: center; }
          .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: normal; font-family: 'Times New Roman', serif; }
          .email-logo { color: #F8F3ED; font-family: Georgia, 'Times New Roman', serif; font-size: 30px; line-height: 1.2; margin: 0 auto 15px; }
          .content { padding: 30px; line-height: 1.6; }
          .btn-container { text-align: center; margin-top: 30px; margin-bottom: 20px; }
          .btn { display: inline-block; background-color: #061D31; color: #ffffff; text-decoration: none; padding: 14px 28px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase; font-size: 13px; }
          .btn-secondary { display: inline-block; background-color: #ffffff; color: #061D31; text-decoration: none; padding: 14px 28px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase; font-size: 13px; border: 1px solid #E5E7EB; margin-top: 10px; }
          .footer { background-color: #F8F3ED; padding: 20px 30px; text-align: center; font-size: 11px; color: #6B7280; border-top: 1px solid #E5E7EB; line-height: 1.5; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="email-logo" style="color:#F8F3ED; font-family:Georgia, 'Times New Roman', serif; font-size:30px; line-height:1.2; margin:0 auto 15px;">Tiyani Magomani</div>
            <h1>Enquiry received</h1>
          </div>
          <div class="content">
            <p>Hi ${firstName || 'there'},</p>
            <p>Thank you for submitting your enquiry. We have received your details and the team will review your request.</p>
            <p>If your enquiry included calculator or comparison results, those figures are estimates based on the displayed assumptions and are subject to formal product documentation.</p>
            <p>The team will contact you using the details provided.</p>
            
            <div class="btn-container">
              <a href="${siteUrl}" class="btn" style="color: #ffffff;">Visit Website</a>
              <br>
              <a href="${siteUrl}/compare" class="btn-secondary" style="color: #061D31;">Compare Investments</a>
            </div>
          </div>
          <div class="footer">
            <p style="margin-bottom: 15px;">Any calculator or comparison results are estimates based on the information entered and the displayed product assumptions. They do not constitute financial advice or a guaranteed return. Final figures, risks, fees, tax treatment, eligibility requirements and terms are subject to formal product documentation.</p>
            Tiyani Magomani<br>
            This email was sent because you submitted an enquiry on the Tiyani Magomani website.
          </div>
        </div>
      </body>
    </html>
  `;
}
