import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Chatbot from '@/components/Chatbot'
import CustomCursor from '@/components/CustomCursor'

export const metadata: Metadata = {
  title: {
    default: 'Royal Metro EV 🚗 | Best E-Rickshaw in Muzaffarnagar | Electric Rickshaw Dealer | 100-150 KM Range',
    template: '%s | Royal Metro EV 🚗'
  },
  description: 'Royal Metro EV 🚗 - Best E Rickshaw in Muzaffarnagar. Leading Electric Rickshaw Dealer & Battery Rickshaw Showroom in Muzaffarnagar, UP. I-CAT Certified E-Rickshaws with 60V Battery, 100-150 KM Range, 3-4 Hrs Charging. Affordable E Rickshaw with warranty. Best price, best quality. Call +91 9520587777',
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
    title: 'Royal Metro EV 🚗 | Best E-Rickshaw Manufacturer in Muzaffarnagar, UP | 100-150 KM Range',
    description: 'Royal Metro EV 🚗 - Premium electric e-rickshaw manufacturer in Muzaffarnagar, UP. I-CAT Certified E-Rickshaws with 60V Battery, 100-150 KM Range, 3-4 Hrs Charging. Best quality e-rickshaws with warranty and excellent after-sales service.',
    url: 'https://royalmetroev.com',
    siteName: 'Royal Metro EV',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://royalmetroev.com/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Royal Metro EV 🚗 - Best E-Rickshaw Manufacturer in Muzaffarnagar',
      },
      {
        url: 'https://royalmetroev.com/slider.jpeg',
        width: 1200,
        height: 630,
        alt: 'Royal Metro EV E-Rickshaw - Green Energy, Great Journeys',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Royal Metro EV 🚗 | Best E-Rickshaw Manufacturer in Muzaffarnagar, UP',
    description: 'Royal Metro EV 🚗 - Premium electric e-rickshaw manufacturer in Muzaffarnagar, UP. I-CAT Certified with 60V Battery, 100-150 KM Range.',
    images: ['https://royalmetroev.com/logo.jpeg'],
    creator: '@royalmetroev',
    site: '@royalmetroev',
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
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Viewport and Mobile - Optimized for Perfect Mobile View */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Royal Metro EV 🚗" />
        <meta name="theme-color" content="#1a5f3f" />
        <meta name="msapplication-TileColor" content="#1a5f3f" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Mobile Optimization */}
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="320" />
        <meta name="format-detection" content="telephone=yes" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://royalmetroev.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://maps.google.com" />
        
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
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Royal Metro EV" />
        <meta name="copyright" content="Royal Metro EV" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="subject" content="Electric E-Rickshaw Manufacturer and Dealer" />
        <meta name="topic" content="E-Rickshaw, Electric Vehicle, Green Energy, Sustainable Transportation" />
        <meta name="summary" content="Royal Metro EV - Best E-Rickshaw Manufacturer in Muzaffarnagar, UP" />
        <meta name="classification" content="Automotive, Electric Vehicle, E-Rickshaw" />
        <meta name="category" content="Automotive" />
        <meta name="designer" content="Royal Metro EV" />
        <meta name="reply-to" content="royalmetroev@gmail.com" />
        <meta name="owner" content="Royal Metro EV" />
        <meta name="url" content="https://royalmetroev.com" />
        <meta name="identifier-URL" content="https://royalmetroev.com" />
        <meta name="directory" content="submission" />
        <meta name="pagename" content="Royal Metro EV - Best E-Rickshaw Manufacturer" />
        <meta name="category" content="Automotive, Electric Vehicle" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        
        {/* Social Media Meta Tags */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:secure_url" content="https://royalmetroev.com/logo.jpeg" />
        <meta property="og:locale:alternate" content="hi_IN" />
        <meta property="og:locale:alternate" content="en_US" />
        
        {/* Business Information */}
        <meta name="contact" content="royalmetroev@gmail.com" />
        <meta name="contact" content="+919520587777" />
        <meta name="contact" content="Hadi Industries, 100, Prempuri, Near Shamli Bus Stand, Muzaffarnagar (U.P.) 251002" />
        
        {/* Enhanced Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AutoDealer',
              '@id': 'https://royalmetroev.com/#organization',
              name: 'Royal Metro EV',
              alternateName: 'Royal Metro Electric Vehicle',
              description: 'Premium e-rickshaw manufacturer and dealer in Muzaffarnagar, Uttar Pradesh. I-CAT Certified E-Rickshaws with 60V Battery, 100-150 KM Range.',
              url: 'https://royalmetroev.com',
              logo: {
                '@type': 'ImageObject',
                url: 'https://royalmetroev.com/logo.jpeg',
                width: 512,
                height: 512,
              },
              image: [
                'https://royalmetroev.com/logo.jpeg',
                'https://royalmetroev.com/slider.jpeg',
              ],
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
                latitude: 29.4709,
                longitude: 77.7033,
              },
              areaServed: [
                {
                  '@type': 'State',
                  name: 'Uttar Pradesh',
                },
                {
                  '@type': 'City',
                  name: 'Muzaffarnagar',
                },
                {
                  '@type': 'Country',
                  name: 'India',
                },
              ],
              priceRange: '₹₹',
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '10:00',
                  closes: '16:00',
                },
              ],
              sameAs: [
                'https://www.facebook.com/royalmetroev',
                'https://www.instagram.com/royalmetroev',
                'https://www.twitter.com/royalmetroev',
                'https://www.linkedin.com/company/royalmetroev',
              ],
              makesOffer: {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Product',
                  name: 'E-Rickshaw',
                  description: 'Premium electric e-rickshaw with 60V battery, 100-150 KM range, I-CAT certified',
                  brand: {
                    '@type': 'Brand',
                    name: 'Royal Metro EV',
                  },
                },
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                reviewCount: '5000',
                bestRating: '5',
                worstRating: '1',
              },
            }),
          }}
        />
        {/* Structured Data - FAQPage */}
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
                {
                  '@type': 'Question',
                  name: 'Is test drive available?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Absolutely! We encourage test drives. Please call us at +91 9520587777 to schedule a convenient time.',
                  },
                },
              ],
            }),
          }}
        />
        
        {/* Structured Data - WebSite with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Royal Metro EV',
              url: 'https://royalmetroev.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://royalmetroev.com/search?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        
        {/* Structured Data - BreadcrumbList for Homepage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://royalmetroev.com',
                },
              ],
            }),
          }}
        />
        
        {/* Structured Data - Product for E-Rickshaw */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: 'Royal Metro EV E-Rickshaw',
              description: 'Premium electric e-rickshaw with 60V battery, 100-150 KM range, I-CAT certified. Available in Classic and Elite models.',
              brand: {
                '@type': 'Brand',
                name: 'Royal Metro EV',
              },
              manufacturer: {
                '@type': 'Organization',
                name: 'Royal Metro EV',
              },
              offers: {
                '@type': 'AggregateOffer',
                offerCount: '2',
                lowPrice: '150000',
                highPrice: '250000',
                priceCurrency: 'INR',
                availability: 'https://schema.org/InStock',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                reviewCount: '5000',
                bestRating: '5',
                worstRating: '1',
              },
              review: [
                {
                  '@type': 'Review',
                  reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                    bestRating: '5',
                  },
                  author: {
                    '@type': 'Person',
                    name: 'Happy Customer',
                  },
                  reviewBody: 'Excellent quality e-rickshaw with great range and performance. Highly recommended!',
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

