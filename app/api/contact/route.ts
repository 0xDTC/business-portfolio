import { sendEmail } from '@/lib/nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, company, phone, message, budget } = body;

    // Validate required fields
    if (!firstName || !email || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.RECIPIENT_EMAIL || 'tanveersingh@0xdtc.com';

    // Email to you (admin)
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName || ''}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
        <hr />
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      </div>
    `;

    // Confirmation email to user
    const userEmailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2>Thank You for Reaching Out!</h2>
        <p>Hi ${firstName},</p>
        <p>Thank you for contacting us. We have received your message and will get back to you soon.</p>
        <hr />
        <p><strong>Your message details:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr />
        <p>Best regards,<br>Tanveer Singh</p>
      </div>
    `;

    // Send email to admin
    await sendEmail({
      to: recipientEmail,
      subject: `New Contact Form Submission from ${firstName}`,
      html: adminEmailHtml,
    });

    // Send confirmation email to user
    await sendEmail({
      to: email,
      subject: 'We received your message',
      html: userEmailHtml,
    });

    return Response.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
