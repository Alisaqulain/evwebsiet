import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fullName, email, mobileNumber } = body

    // Validate required fields
    if (!fullName || !email || !mobileNumber) {
      return NextResponse.json(
        { error: 'Full Name, Email, and Mobile Number are required' },
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

    // Mobile number validation (Indian format)
    const mobileRegex = /^[6-9]\d{9}$/
    const cleanMobile = mobileNumber.replace(/\D/g, '')
    if (cleanMobile.length !== 10 || !mobileRegex.test(cleanMobile)) {
      return NextResponse.json(
        { error: 'Please enter a valid 10-digit mobile number' },
        { status: 400 }
      )
    }

    // Prepare email content
    const emailSubject = `New Callback Request from ${fullName} - Royal Metro EV`
    const emailBody = `
New Callback Request

Full Name: ${fullName}
Email: ${email}
Mobile Number: ${mobileNumber}

---
This callback request was sent from the Royal Metro EV website.
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
            from: 'Royal Metro EV <onboarding@resend.dev>',
            to: ['royalmetroev@gmail.com'],
            replyTo: email,
            subject: emailSubject,
            text: emailBody,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #1a5f3f;">New Callback Request</h2>
                <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <p><strong>Full Name:</strong> ${fullName}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
                </div>
                <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                <p style="color: #666; font-size: 12px;">
                  This callback request was sent from the Royal Metro EV website.<br>
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
            message: 'Thank you! We will call you back soon.' 
          },
          { status: 200 }
        )
      } catch (resendError) {
        console.error('Resend error:', resendError)
      }
    }

    // Fallback: Log the callback request
    console.log('='.repeat(50))
    console.log('CALLBACK REQUEST TO: royalmetroev@gmail.com')
    console.log('SUBJECT:', emailSubject)
    console.log('BODY:', emailBody)
    console.log('='.repeat(50))

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you! We will call you back soon.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing callback request:', error)
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again later or call us at +91 9520587777' },
      { status: 500 }
    )
  }
}

