import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Chatbot from '@/components/Chatbot'
import CustomCursor from '@/components/CustomCursor'

export const metadata: Metadata = {
  title: 'Best E Rickshaw in Muzaffarnagar | Electric Rickshaw Dealer | Royal Metro EV | 100-150 KM Range',
  description: 'Best E Rickshaw in Muzaffarnagar - Royal Metro EV. Leading Electric Rickshaw Dealer & Battery Rickshaw Showroom in Muzaffarnagar, UP. I-CAT Certified E-Rickshaws with 60V Battery, 100-150 KM Range, 3-4 Hrs Charging. Affordable E Rickshaw with warranty. Best price, best quality. Call +91 9520587777',
  keywords: 'E Rickshaw in Muzaffarnagar, Electric Rickshaw dealer Muzaffarnagar, Best E Rickshaw in Muzaffarnagar, Battery Rickshaw showroom Muzaffarnagar, Affordable E Rickshaw in UP, E Rickshaw Muzaffarnagar, Electric Auto Muzaffarnagar, E Rickshaw price Muzaffarnagar, Best E Rickshaw manufacturer Muzaffarnagar, Royal Metro EV Muzaffarnagar, 60V E Rickshaw, 100-150 KM Range E Rickshaw, I-CAT Certified E Rickshaw, E Rickshaw with warranty, Electric vehicle Muzaffarnagar, E Auto Muzaffarnagar, E Rickshaw dealer UP, Battery Rickshaw Muzaffarnagar',
  icons: {
    icon: '/logo.jpeg',
    apple: '/logo.jpeg',
    shortcut: '/logo.jpeg',
  },
  authors: [{ name: 'Royal Metro EV' }],
  creator: 'Royal Metro EV',
  publisher: 'Royal Metro EV',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://royalmetroev.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Royal Metro EV - Best E-Rickshaw Manufacturer in Muzaffarnagar, UP | 100-150 KM Range',
    description: 'Premium electric e-rickshaw manufacturer in Muzaffarnagar, UP. I-CAT Certified E-Rickshaws with 60V Battery, 100-150 KM Range, 3-4 Hrs Charging. Best quality e-rickshaws with warranty and excellent after-sales service.',
    url: 'https://royalmetroev.com',
    siteName: 'Royal Metro EV',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://royalmetroev.com/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Royal Metro EV - Best E-Rickshaw Manufacturer in Muzaffarnagar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Royal Metro EV - Best E-Rickshaw Manufacturer in Muzaffarnagar, UP',
    description: 'Premium electric e-rickshaw manufacturer in Muzaffarnagar, UP. I-CAT Certified with 60V Battery, 100-150 KM Range.',
    images: ['https://royalmetroev.com/logo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hi" dir="ltr">
      <head>
        {/* Favicon and Icons */}
        <link rel="icon" type="image/jpeg" href="/logo.jpeg" />
        <link rel="apple-touch-icon" href="/logo.jpeg" />
        <link rel="shortcut icon" href="/logo.jpeg" />
        <link rel="icon" sizes="32x32" href="/logo.jpeg" />
        <link rel="icon" sizes="16x16" href="/logo.jpeg" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Viewport and Mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Royal Metro EV" />
        <meta name="theme-color" content="#1a5f3f" />
        
        {/* SEO - Canonical */}
        <link rel="canonical" href="https://royalmetroev.com" />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Muzaffarnagar" />
        <meta name="geo.position" content="29.4709;77.7033" />
        <meta name="ICBM" content="29.4709, 77.7033" />
        <meta name="language" content="Hindi, English" />
        <meta name="distribution" content="Uttar Pradesh, India" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta name="format-detection" content="telephone=yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AutoDealer',
              name: 'Royal Metro EV',
              description: 'Premium e-rickshaw manufacturer and dealer in Muzaffarnagar, Uttar Pradesh',
              url: 'https://royalmetroev.com',
              logo: 'https://royalmetroev.com/logo.jpeg',
              image: 'https://royalmetroev.com/logo.jpeg',
              telephone: '+919520587777',
              email: 'royalmetroev@gmail.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Hadi Industries, 100, Prempuri, Near Shamli Bus Stand',
                addressLocality: 'Muzaffarnagar',
                addressRegion: 'Uttar Pradesh',
                postalCode: '251002',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '29.4709',
                longitude: '77.7033',
              },
              areaServed: {
                '@type': 'State',
                name: 'Uttar Pradesh',
              },
              priceRange: '$$',
              openingHours: 'Mo-Fr 09:00-18:00, Sa 10:00-16:00',
              makesOffer: {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Product',
                  name: 'E-Rickshaw',
                  description: 'Premium electric e-rickshaw with 60V battery, 100-150 KM range, I-CAT certified',
                },
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What is the range of Royal Metro EV e-rickshaws?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Our e-rickshaws offer a range of 100-150 km per charge, depending on the model and usage conditions.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How long does it take to charge?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Charging time is typically 3-4 hours for a full charge using our standard charger.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Do you provide warranty?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, we provide comprehensive warranty coverage. Our heavy-duty chassis comes with a 2-year warranty.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Are spare parts easily available?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, we ensure 100% spare parts availability for all our models through our extensive service network.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Do you offer financing options?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, we have partnerships with leading finance providers offering flexible EMI plans and competitive interest rates.',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="cursor-none">
        <CustomCursor />
        <Navigation />
        {children}
        <Footer />
        <WhatsAppButton />
        <Chatbot />
      </body>
    </html>
  )
}

