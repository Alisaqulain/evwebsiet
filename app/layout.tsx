import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Chatbot from '@/components/Chatbot'
import CustomCursor from '@/components/CustomCursor'

export const metadata: Metadata = {
  title: 'Best E Rickshaw in Muzaffarnagar | Electric Rickshaw Dealer | Royal Metro EV',
  description: 'Best E Rickshaw in Muzaffarnagar - Royal Metro EV. Leading Electric Rickshaw Dealer & Battery Rickshaw Showroom in Muzaffarnagar, UP. Affordable E Rickshaw with I-CAT certification. Best price, best quality. Call +91 9520587777',
  keywords: 'E Rickshaw in Muzaffarnagar, Electric Rickshaw dealer Muzaffarnagar, Best E Rickshaw in Muzaffarnagar, Battery Rickshaw showroom Muzaffarnagar, Affordable E Rickshaw in UP, E Rickshaw Muzaffarnagar, Electric Auto Muzaffarnagar, E Rickshaw price Muzaffarnagar, Best E Rickshaw manufacturer Muzaffarnagar, Royal Metro EV Muzaffarnagar',
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
    title: 'Royal Metro EV - Best E-Rickshaw Manufacturer in Uttar Pradesh',
    description: 'Premium electric e-rickshaw manufacturer in Muzaffarnagar, UP. Best quality e-rickshaws with warranty and excellent after-sales service.',
    url: 'https://royalmetroev.com',
    siteName: 'Royal Metro EV',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Royal Metro EV E-Rickshaw',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Royal Metro EV - Best E-Rickshaw Manufacturer in Uttar Pradesh',
    description: 'Premium electric e-rickshaw manufacturer in Muzaffarnagar, UP. Best quality e-rickshaws.',
    images: ['/logo.jpeg'],
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
        <link rel="canonical" href="https://royalmetroev.com" />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Muzaffarnagar" />
        <meta name="geo.position" content="29.4709;77.7033" />
        <meta name="ICBM" content="29.4709, 77.7033" />
        <meta name="language" content="Hindi, English" />
        <meta name="distribution" content="Uttar Pradesh, India" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
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

