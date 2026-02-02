'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function ProductsPage() {
  const products = [
    {
      id: 'classic',
      name: 'Royal Metro Classic',
      description: 'The perfect entry-level electric e-rickshaw with essential features and reliable performance.',
      features: ['60V Battery System', 'Comfortable Seating', 'LED Lighting', 'Digital Display'],
      color: 'dark-green',
      image: '/classic.jpeg',
    },
    {
      id: 'elite',
      name: 'Royal Metro Elite',
      description: 'The ultimate luxury experience with cutting-edge technology and superior craftsmanship.',
      features: ['60V Battery System', 'Leather Seats', 'Touchscreen Display', 'Fast Charging'],
      color: 'light-blue',
      image: '/elite.jpeg',
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Modern Hero Section */}
      <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #1a5f3f 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-dark-green/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-light-green/10 to-transparent rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in-up">
            <span className="inline-block px-4 py-2 bg-dark-green/10 text-dark-green rounded-full text-sm font-semibold mb-6">
              Our Products
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gray-900">Our Products</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Discover our premium range of electric e-rickshaws, each designed to deliver exceptional performance, comfort, and sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 hover:border-dark-green hover:shadow-2xl transition-all duration-300 overflow-hidden group hover-lift fade-in-up flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`relative h-80 overflow-hidden ${
                  product.color === 'dark-green' ? 'bg-gradient-to-br from-dark-green/10 to-dark-green/5' :
                  product.color === 'light-green' ? 'bg-gradient-to-br from-light-green/10 to-light-green/5' :
                  'bg-gradient-to-br from-light-blue/10 to-light-blue/5'
                }`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      product.color === 'dark-green' ? 'bg-dark-green text-white' :
                      product.color === 'light-green' ? 'bg-light-green text-white' :
                      'bg-light-blue text-white'
                    }`}>
                      {product.color === 'dark-green' ? 'Classic' : product.color === 'light-green' ? 'Premium' : 'Elite'}
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-dark-green mb-3">{product.name}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-5 h-5 bg-dark-green/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-dark-green text-sm">✓</span>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6 border-t border-gray-200">
                    <Link
                      href={`/products/${product.id}`}
                      className="block w-full px-6 py-3 bg-gradient-to-r from-dark-green to-light-green text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
                    >
                      View More
                    </Link>
                  </div>
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
          <div className="text-center mb-12 sm:mb-16 fade-in-up">
            <span className="inline-block px-4 py-2 bg-dark-green/10 text-dark-green rounded-full text-sm font-semibold mb-4">
              Specifications
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Key Specifications
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Battery Capacity', value: '60V', icon: '🔋', color: 'dark-green' },
              { label: 'Range', value: '100-150 km', icon: '📏', color: 'light-green' },
              { label: 'Max Speed', value: '25-35 km/h', icon: '⚡', color: 'light-blue' },
              { label: 'Charging Time', value: '3-4 hrs', icon: '⏱️', color: 'dark-green' },
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

      {/* Product Showcase Gallery */}
      <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 fade-in-up">
            <span className="inline-block px-4 py-2 bg-dark-green/10 text-dark-green rounded-full text-sm font-semibold mb-4">
              Gallery
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Product Showcase
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: '/WhatsApp Image 2026-01-27 at 2.18.25 PM.jpeg', alt: 'Electric Vehicle Showcase', title: 'Elite Showcase' },
              { src: '/WhatsApp Image 2026-01-27 at 2.18.26 PM.jpeg', alt: 'Manufacturing Excellence', title: 'Quality Manufacturing' },
              { src: '/fff.jpeg', alt: 'Royal Metro EV', title: 'Premium Design' },
            ].map((image, index) => (
              <div
                key={index}
                className="group relative h-64 rounded-xl overflow-hidden border border-gray-200 hover:border-dark-green hover:shadow-xl transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-xl">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
