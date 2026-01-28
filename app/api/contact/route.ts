import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Prepare email content
    const emailSubject = `New Contact Form Submission from ${name} - Royal Metro EV`
    const emailBody = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}

---
This email was sent from the Royal Metro EV website contact form.
Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `.trim()

    // Try to use Resend if API key is configured
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    
    if (RESEND_API_KEY) {
      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'Royal Metro EV <onboarding@resend.dev>', // Update with your verified domain
            to: ['royalmetroev@gmail.com'],
            replyTo: email,
            subject: emailSubject,
            text: emailBody,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #1a5f3f;">New Contact Form Submission</h2>
                <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                </div>
                <div style="margin: 20px 0;">
                  <h3 style="color: #1a5f3f;">Message:</h3>
                  <p style="white-space: pre-wrap;">${message}</p>
                </div>
                <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                <p style="color: #666; font-size: 12px;">
                  This email was sent from the Royal Metro EV website contact form.<br>
                  Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
                </p>
              </div>
            `,
          }),
        })

        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.message || 'Failed to send email')
        }

        return NextResponse.json(
          { 
            success: true, 
            message: 'Thank you for your message! We will get back to you soon.' 
          },
          { status: 200 }
        )
      } catch (resendError) {
        console.error('Resend error:', resendError)
        // Fall through to logging method
      }
    }

    // Fallback: Log the email (for development or if Resend is not configured)
    // In production, you should configure Resend or another email service
    console.log('='.repeat(50))
    console.log('EMAIL TO: royalmetroev@gmail.com')
    console.log('SUBJECT:', emailSubject)
    console.log('BODY:', emailBody)
    console.log('='.repeat(50))

    // Return success even in fallback mode (for development)
    // In production, configure RESEND_API_KEY environment variable
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! We will get back to you soon.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again later or call us at +91 9520587777' },
      { status: 500 }
    )
  }
}
