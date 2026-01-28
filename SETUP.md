# Royal Metro EV - Setup Guide

## Email Configuration

To enable email functionality for the contact form, you need to set up Resend (recommended for Vercel) or another email service.

### Option 1: Using Resend (Recommended for Vercel)

1. Sign up for a free account at [Resend](https://resend.com)
2. Get your API key from the Resend dashboard
3. Add it to your Vercel environment variables:
   - Go to your Vercel project settings
   - Navigate to Environment Variables
   - Add: `RESEND_API_KEY` = `your-resend-api-key`
4. Update the `from` email in `app/api/contact/route.ts` with your verified domain

### Option 2: Using Other Email Services

You can modify `app/api/contact/route.ts` to use:
- SendGrid
- Nodemailer with SMTP
- AWS SES
- Mailgun

## SEO Configuration

1. Update the domain in:
   - `app/layout.tsx` - Update `metadataBase` URL
   - `app/sitemap.ts` - Update `baseUrl`
   - `app/robots.ts` - Update `baseUrl`

2. Add Google Search Console verification code to `app/layout.tsx` in the `verification` section

## Performance Optimization

The website is optimized for Vercel free hosting with:
- GPU-accelerated animations
- Optimized image loading
- Smooth 3D rotations
- Mobile-first responsive design
- Reduced motion support for accessibility

## Features Implemented

✅ Smooth 3D auto-rotation animation
✅ WhatsApp floating button (+91 9520587777)
✅ Intelligent chatbot with 100+ responses
✅ Contact form with email integration
✅ Comprehensive SEO targeting Uttar Pradesh
✅ Mobile-optimized responsive design
✅ Smooth animations optimized for Vercel
✅ Modern UI/UX design

## Deployment

1. Push your code to GitHub
2. Connect to Vercel
3. Add environment variables (RESEND_API_KEY)
4. Deploy!

## Contact

For support: royalmetroev@gmail.com or +91 9520587777

