import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'serviceType', 'description', 'quantity'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { success: false, message: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Helper function to escape HTML
    const escapeHtml = (str: string) => {
      if (!str) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    };

    // Create professional email template
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Quote Request - Kan Printers</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <!-- Header with Logo -->
          <tr>
            <td style="background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">New Quote Request</h1>
              <p style="color: #e0e7ff; margin: 10px 0 0 0; font-size: 14px;">Kan Printers & Signs</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                You have received a new quote request from your website. Please review the details below:
              </p>
              
              <!-- Contact Information -->
              <div style="background-color: #f9fafb; border-left: 4px solid #4f46e5; padding: 20px; margin: 20px 0; border-radius: 4px;">
                <h2 style="color: #111827; font-size: 20px; margin: 0 0 15px 0; font-weight: 600;">Contact Information</h2>
                <table width="100%" cellpadding="5" cellspacing="0">
                  <tr>
                    <td style="color: #6b7280; font-weight: 600; width: 150px;">Name:</td>
                    <td style="color: #111827;">${escapeHtml(data.name)}</td>
                  </tr>
                  <tr>
                    <td style="color: #6b7280; font-weight: 600;">Email:</td>
                    <td style="color: #111827;"><a href="mailto:${escapeHtml(data.email)}" style="color: #4f46e5; text-decoration: none;">${escapeHtml(data.email)}</a></td>
                  </tr>
                  <tr>
                    <td style="color: #6b7280; font-weight: 600;">Phone:</td>
                    <td style="color: #111827;"><a href="tel:${escapeHtml(data.phone)}" style="color: #4f46e5; text-decoration: none;">${escapeHtml(data.phone)}</a></td>
                  </tr>
                  ${data.company ? `
                  <tr>
                    <td style="color: #6b7280; font-weight: 600;">Company:</td>
                    <td style="color: #111827;">${escapeHtml(data.company)}</td>
                  </tr>
                  ` : ''}
                </table>
              </div>
              
              <!-- Project Details -->
              <div style="background-color: #f9fafb; border-left: 4px solid #4f46e5; padding: 20px; margin: 20px 0; border-radius: 4px;">
                <h2 style="color: #111827; font-size: 20px; margin: 0 0 15px 0; font-weight: 600;">Project Details</h2>
                <table width="100%" cellpadding="5" cellspacing="0">
                  <tr>
                    <td style="color: #6b7280; font-weight: 600; width: 150px;">Service Type:</td>
                    <td style="color: #111827; font-weight: 600;">${escapeHtml(data.serviceType)}</td>
                  </tr>
                  <tr>
                    <td style="color: #6b7280; font-weight: 600; vertical-align: top;">Description:</td>
                    <td style="color: #111827; white-space: pre-wrap;">${escapeHtml(data.description)}</td>
                  </tr>
                  <tr>
                    <td style="color: #6b7280; font-weight: 600;">Quantity:</td>
                    <td style="color: #111827; font-weight: 600; font-size: 18px;">${escapeHtml(data.quantity)} units</td>
                  </tr>
                  ${data.deadline ? `
                  <tr>
                    <td style="color: #6b7280; font-weight: 600;">Deadline:</td>
                    <td style="color: #111827;">${new Date(data.deadline).toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
                  </tr>
                  ` : ''}
                  ${data.additionalNotes ? `
                  <tr>
                    <td style="color: #6b7280; font-weight: 600; vertical-align: top;">Additional Notes:</td>
                    <td style="color: #111827; white-space: pre-wrap;">${escapeHtml(data.additionalNotes)}</td>
                  </tr>
                  ` : ''}
                </table>
              </div>
              
              <!-- Call to Action -->
              <div style="text-align: center; margin: 30px 0;">
                <a href="mailto:${escapeHtml(data.email)}" style="display: inline-block; background-color: #4f46e5; color: #ffffff; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">
                  Reply to ${escapeHtml(data.name)}
                </a>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 20px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 12px; margin: 0;">
                This email was sent from the Kan Printers quote request form.<br>
                Unit 14 Regency Park, 6 Induland Crescent, Lansdowne, Cape Town<br>
                Tel: 021 691 0170 / 021 691 0168 | Email: kanprinters@mweb.co.za
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // Plain text version
    const emailText = `
New Quote Request - Kan Printers & Signs

Contact Information:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
${data.company ? `Company: ${data.company}` : ''}

Project Details:
Service Type: ${data.serviceType}
Description: ${data.description}
Quantity: ${data.quantity} units
${data.deadline ? `Deadline: ${new Date(data.deadline).toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}` : ''}
${data.additionalNotes ? `Additional Notes: ${data.additionalNotes}` : ''}

---
This email was sent from the Kan Printers quote request form.
    `;

    // Use Web3Forms API (free and easy)
    // You'll need to get a free API key from https://web3forms.com
    const web3formsAccessKey = process.env.WEB3FORMS_ACCESS_KEY;
    
    if (!web3formsAccessKey || web3formsAccessKey === 'YOUR_ACCESS_KEY_HERE') {
      console.error('WEB3FORMS_ACCESS_KEY is not set in environment variables');
      return NextResponse.json(
        { 
          success: false, 
          message: 'Email service not configured. Please set WEB3FORMS_ACCESS_KEY in .env.local file. See QUOTE_FORM_SETUP.md for instructions.' 
        },
        { status: 500 }
      );
    }

    const web3formsData = {
      access_key: web3formsAccessKey,
      subject: `New Quote Request: ${data.serviceType} - ${data.name}`,
      from_name: 'Kan Printers Quote Form',
      email: data.email,
      name: data.name,
      // Send to multiple recipients
      to: 'mario@kanprinters.co.za',
      // Custom email content
      html: emailHtml,
      text: emailText,
      // Additional form data
      service_type: data.serviceType,
      quantity: data.quantity,
      phone: data.phone,
      company: data.company || 'N/A',
      description: data.description,
      deadline: data.deadline || 'Not specified',
      additional_notes: data.additionalNotes || 'None',
    };

    try {
      // Try Web3Forms API
      // Note: Cloudflare protection may block server-side requests
      // If this fails, form data is still logged to console for manual processing
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(web3formsData),
      });

      const responseText = await response.text();
      
      // Check if response is HTML (Cloudflare challenge page)
      if (responseText.includes('<!DOCTYPE html>') || responseText.includes('Just a moment')) {
        console.error('Cloudflare challenge detected. Response:', responseText.substring(0, 200));
        // Fallback: Return success but log that email might not be sent
        // The form data is still captured, you can check logs
        console.log('Quote Request Data:', JSON.stringify(web3formsData, null, 2));
        
        return NextResponse.json(
          { 
            success: true, 
            message: 'Quote request received! Due to email service limitations, please also email us directly at kanprinters@mweb.co.za with your quote details. We apologize for the inconvenience.' 
          },
          { status: 200 }
        );
      }

      if (!response.ok) {
        console.error('Web3Forms API error:', response.status, responseText.substring(0, 500));
        // Still return success but with a note
        console.log('Quote Request Data:', JSON.stringify(web3formsData, null, 2));
        return NextResponse.json(
          { 
            success: true, 
            message: 'Quote request received! Please also email us at kanprinters@mweb.co.za to ensure we receive your request.' 
          },
          { status: 200 }
        );
      }

      let result;
      try {
        result = JSON.parse(responseText);
      } catch (e) {
        // If response is not JSON, it might be an error page
        console.error('Failed to parse response as JSON:', responseText.substring(0, 200));
        console.log('Quote Request Data:', JSON.stringify(web3formsData, null, 2));
        return NextResponse.json(
          { 
            success: true, 
            message: 'Quote request received! Please also email us at kanprinters@mweb.co.za to ensure we receive your request.' 
          },
          { status: 200 }
        );
      }

      console.log('Web3Forms response:', result);

      if (result.success) {
        return NextResponse.json(
          { success: true, message: 'Quote request submitted successfully! We will contact you within 24 hours.' },
          { status: 200 }
        );
      } else {
        console.error('Web3Forms returned error:', result);
        // Still log the data
        console.log('Quote Request Data:', JSON.stringify(web3formsData, null, 2));
        return NextResponse.json(
          { 
            success: true, 
            message: 'Quote request received! Please also email us at kanprinters@mweb.co.za to ensure we receive your request.' 
          },
          { status: 200 }
        );
      }
    } catch (fetchError: any) {
      console.error('Fetch error:', fetchError);
      // Log the data anyway so it's not lost
      console.log('Quote Request Data:', JSON.stringify(web3formsData, null, 2));
      return NextResponse.json(
        { 
          success: true, 
          message: 'Quote request received! Due to technical issues, please also email us directly at kanprinters@mweb.co.za with your quote details. We apologize for the inconvenience.' 
        },
        { status: 200 }
      );
    }
  } catch (error: any) {
    console.error('Quote API error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: `Internal server error: ${error.message || 'Unknown error'}. Please try again or contact us directly.` 
      },
      { status: 500 }
    );
  }
}
