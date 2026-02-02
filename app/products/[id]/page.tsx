'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params.id as string

  const products = {
    classic: {
      id: 'classic',
      name: 'Royal Metro Classic',
      description: 'The perfect entry-level electric e-rickshaw with essential features and reliable performance. Designed for everyday use with comfort and reliability in mind.',
      longDescription: 'The Royal Metro Classic is our entry-level model that doesn\'t compromise on quality. Built with a robust 60V battery system, this e-rickshaw offers exceptional value for money. Perfect for operators looking for a reliable, low-maintenance vehicle that delivers consistent performance day after day.',
      features: [
        '60V Battery System',
        'Comfortable Seating for 4+1 passengers',
        'LED Lighting System',
        'Digital Display Dashboard',
        'I-CAT Certified',
        'Heavy-Duty Chassis',
        '100% Spare Parts Availability',
        'Low Maintenance Design'
      ],
      specifications: {
        battery: '60V',
        range: '100-150 km',
        maxSpeed: '25-35 km/h',
        chargingTime: '3-4 hrs',
        seating: '4+1 passengers',
        weight: 'Heavy-Duty Chassis',
        certification: 'I-CAT Certified'
      },
      color: 'dark-green',
      image: '/classic.jpeg',
      detailImage: '/fff.jpeg'
    },
    elite: {
      id: 'elite',
      name: 'Royal Metro Elite',
      description: 'The ultimate luxury experience with cutting-edge technology and superior craftsmanship.',
      longDescription: 'The Royal Metro Elite represents the pinnacle of electric e-rickshaw engineering. With an advanced 60V battery system and luxury features, this top-tier model delivers unmatched performance, comfort, and style. Perfect for operators who demand the very best and want to stand out in the market with a premium vehicle.',
      features: [
        '60V Battery System',
        'Premium Leather Seats',
        'Touchscreen Display',
        'Fast Charging Technology',
        'I-CAT Certified',
        'Heavy-Duty Chassis',
        '100% Spare Parts Availability',
        'Advanced Safety Features',
        'Premium Sound System'
      ],
      specifications: {
        battery: '60V',
        range: '100-150 km',
        maxSpeed: '25-35 km/h',
        chargingTime: '3-4 hrs',
        seating: '4+1 passengers',
        weight: 'Heavy-Duty Chassis',
        certification: 'I-CAT Certified'
      },
      color: 'light-blue',
      image: '/feature.png',
      detailImage: '/WhatsApp Image 2026-01-27 at 2.18.25 PM.jpeg'
    }
  }

  const product = products[productId as keyof typeof products]

  if (!product) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/products" className="text-dark-green hover:text-light-green">
            Back to Products
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #1a5f3f 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-dark-green/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-light-green/10 to-transparent rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link href="/products" className="inline-flex items-center text-dark-green hover:text-light-green transition-colors mb-6">
              <span className="mr-2">←</span> Back to Products
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                product.color === 'dark-green' ? 'bg-dark-green/10 text-dark-green' :
                'bg-light-blue/10 text-light-blue'
              }`}>
                {product.id === 'classic' ? 'Classic' : 'Elite'}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                {product.name}
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                {product.longDescription}
              </p>
            </div>
            <div className="relative w-full fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative w-full aspect-square max-w-2xl mx-auto">
                <Image
                  src={product.detailImage}
                  alt={product.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <span className="inline-block px-4 py-2 bg-dark-green/10 text-dark-green rounded-full text-sm font-semibold mb-4">
              Features
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-dark-green hover:shadow-lg transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-dark-green/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-dark-green text-2xl">✓</span>
                  </div>
                  <span className="text-lg text-gray-700 font-medium">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-dark-green/5 via-white to-light-green/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-light-blue/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-dark-green/10 to-transparent rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <span className="inline-block px-4 py-2 bg-dark-green/10 text-dark-green rounded-full text-sm font-semibold mb-4">
              Specifications
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: 'Battery Capacity', value: product.specifications.battery, icon: '🔋' },
              { label: 'Range', value: product.specifications.range, icon: '📏' },
              { label: 'Max Speed', value: product.specifications.maxSpeed, icon: '⚡' },
              { label: 'Charging Time', value: product.specifications.chargingTime, icon: '⏱️' },
              { label: 'Seating Capacity', value: product.specifications.seating, icon: '💺' },
              { label: 'Certification', value: product.specifications.certification, icon: '✓' },
            ].map((spec, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-dark-green hover:shadow-xl text-center transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{spec.icon}</div>
                <div className="text-3xl font-bold text-dark-green mb-2">{spec.value}</div>
                <div className="text-gray-700 font-medium">{spec.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-dark-green to-light-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Interested in {product.name}?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today to learn more about this model and schedule a test drive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-dark-green font-bold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/919520587777"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white font-bold rounded-lg hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
