'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Toast from '@/components/Toast'

/**
 * Main Landing Page
 * Royal Metro EV - Premium E-Rickshaw Showcase
 */
export default function Home() {
  // Callback Form State
  const [callbackForm, setCallbackForm] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
  })
  const [isSubmittingCallback, setIsSubmittingCallback] = useState(false)
  const [callbackStatus, setCallbackStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [callbackMessage, setCallbackMessage] = useState('')
  const [showToast, setShowToast] = useState(false)
  const [toastType, setToastType] = useState<'success' | 'error'>('success')

  const handleCallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmittingCallback(true)
    setCallbackStatus('idle')
    setCallbackMessage('')

    try {
      const response = await fetch('/api/callback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(callbackForm),
      })

      const data = await response.json()

      if (response.ok) {
        setCallbackStatus('success')
        const successMsg = data.message || 'Thank you! We will call you back soon.'
        setCallbackMessage(successMsg)
        setToastType('success')
        setShowToast(true)
        setCallbackForm({ fullName: '', email: '', mobileNumber: '' })
        
        setTimeout(() => {
          setCallbackStatus('idle')
          setCallbackMessage('')
        }, 5000)
      } else {
        setCallbackStatus('error')
        const errorMsg = data.error || 'Something went wrong. Please try again.'
        setCallbackMessage(errorMsg)
        setToastType('error')
        setShowToast(true)
      }
    } catch (error) {
      setCallbackStatus('error')
      const errorMsg = 'Failed to submit request. Please try again or call us at +91 9520587777'
      setCallbackMessage(errorMsg)
      setToastType('error')
      setShowToast(true)
    } finally {
      setIsSubmittingCallback(false)
    }
  }

  const handleCallbackChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCallbackForm({
      ...callbackForm,
      [e.target.name]: e.target.value,
    })
  }

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
      {/* Hero Section with Slider Image */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/slider.jpeg"
            alt="Royal Metro EV - Green Energy, Great Journeys"
            fill
            className="object-contain object-center"
            priority
            quality={95}
            sizes="100vw"
          />
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 fade-in-up">
            <span className="inline-block px-4 py-2 bg-dark-green/10 text-dark-green rounded-full text-sm font-semibold mb-4">
              Our Products
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explore Our Premium E-Rickshaws
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our range of electric vehicles designed for exceptional performance and sustainability
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 hover:border-dark-green hover:shadow-2xl transition-all duration-300 overflow-hidden group hover-lift fade-in-up flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`relative h-80 overflow-hidden ${
                  product.color === 'dark-green' ? 'bg-gradient-to-br from-dark-green/10 to-dark-green/5' :
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
                      'bg-light-blue text-white'
                    }`}>
                      {product.color === 'dark-green' ? 'Classic' : 'Elite'}
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
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-dark-green to-light-green text-white font-bold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-dark-green/30"
            >
              View All Products
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Specifications Section */}
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
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Built for performance, designed for reliability
            </p>
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

      {/* About Us Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #1a5f3f 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="fade-in-up space-y-6">
              <div>
                <span className="inline-block px-4 py-2 bg-dark-green/10 text-dark-green rounded-full text-sm font-semibold mb-4">
                  Our Story
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Building the Future of Mobility
                </h2>
              </div>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Royal Metro EV is a Muzaffarnagar (U.P.) based manufacturer of e-rickshaws, e-bikes, and electric scooters built for Indian road conditions. We focus on what matters most to commercial EV buyers: <strong className="text-dark-green">structural strength</strong>, <strong className="text-dark-green">dependable performance</strong>, and <strong className="text-dark-green">certified manufacturing</strong>.
                </p>
                <p>
                  Our e-rickshaws are <strong className="text-dark-green">I-CAT certified</strong>, and every vehicle is designed with a strong frame and quality materials to deliver long service life and better value for money.
                </p>
                <p>
                  Beyond the vehicle, we simplify ownership. We support customers through RTO-linked registration assistance, partnerships with leading finance providers to reduce upfront burden, and top-of-the-line after-sales service—so operators can earn with confidence and minimal downtime.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-dark-green to-light-green text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Learn More About Us
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative w-full flex items-center justify-center">
                <div className="relative w-full max-w-full">
                  <Image
                    src="/Building the Future of Mobility.jpeg"
                    alt="Building the Future of Mobility - Royal Metro EV"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-dark-green/5 via-white to-light-green/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-light-blue/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-dark-green/10 to-transparent rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1 fade-in-up">
              <div className="relative w-full flex items-center justify-center">
                <div className="relative w-full max-w-full">
                  <Image
                    src="/ourmissionn.jpeg"
                    alt="Our Mission: Green Energy, Great Journeys"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 fade-in-up space-y-6" style={{ animationDelay: '0.2s' }}>
              <div>
                <span className="inline-block px-4 py-2 bg-light-blue/10 text-light-blue rounded-full text-sm font-semibold mb-4">
                  Our Mission
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Empowering Clean Mobility
                </h2>
              </div>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Our mission is simple: <strong className="text-dark-green">Green Energy, Great Journeys</strong>. We believe every driver deserves a vehicle that is low-maintenance, high-earning, and built for the future. With <strong className="text-dark-green">ICAT-certified safety</strong>, <strong className="text-dark-green">heavy-duty chassis designs</strong>, and <strong className="text-dark-green">100% spare parts availability</strong>, we ensure your ride is not just Silent, Smooth, and Sustainable, but also reliable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-light-green/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-dark-green/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-light-green/10 to-transparent rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 fade-in-up">
            <span className="inline-block px-4 py-2 bg-dark-green/10 text-dark-green rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Royal Metro <span className="bg-gradient-to-r from-dark-green to-light-blue bg-clip-text text-transparent">EV</span>?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of innovation, sustainability, and premium quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: '🔋',
                title: '150-200 KM Range',
                description: 'Non-stop earning with exceptional battery range. Travel longer distances without frequent charging.',
                gradient: 'from-dark-green/10 to-light-green/5',
                iconBg: 'bg-gradient-to-br from-dark-green to-light-green'
              },
              {
                icon: '⚡',
                title: 'Peak Performance',
                description: '1150W High-Torque motor designed for heavy loads. Powerful performance for commercial use.',
                gradient: 'from-light-green/10 to-light-blue/5',
                iconBg: 'bg-gradient-to-br from-light-green to-light-blue'
              },
              {
                icon: '✓',
                title: 'I-CAT Approved',
                description: 'Legal & safety assurance with I-CAT certification. Compliant with all regulatory standards.',
                gradient: 'from-dark-green/10 to-light-blue/5',
                iconBg: 'bg-gradient-to-br from-dark-green to-light-blue'
              },
              {
                icon: '📱',
                title: 'Digital Speedometer',
                description: 'Integrated multimedia system with digital display. Modern technology for enhanced experience.',
                gradient: 'from-light-blue/10 to-dark-green/5',
                iconBg: 'bg-gradient-to-br from-light-blue to-dark-green'
              },
              {
                icon: '🛡️',
                title: 'Heavy-Duty Chassis',
                description: 'SS/MS chassis with 2-year warranty. Built to last on Indian roads with robust construction.',
                gradient: 'from-dark-green/10 to-light-green/5',
                iconBg: 'bg-gradient-to-br from-dark-green to-light-green'
              },
              {
                icon: '🤝',
                title: 'Priority Support',
                description: 'Expert after-sales service & 100% spare parts availability. Complete support for your vehicle.',
                gradient: 'from-light-green/10 to-light-blue/5',
                iconBg: 'bg-gradient-to-br from-light-green to-light-blue'
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border-2 border-gray-200 hover:border-dark-green hover:shadow-2xl transition-all duration-300 group overflow-hidden hover-lift fade-in-up p-8"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-3xl text-white">{feature.icon}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-dark-green mb-3 group-hover:text-light-green transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request A Call Back Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-dark-green/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-light-green/5 to-transparent rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Callback Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 md:p-12 border border-gray-100 fade-in-up flex flex-col">
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-dark-green mb-2">
                  Request A Call Back
                </h2>
                <p className="text-gray-600">Fill in your details and we&apos;ll get back to you shortly</p>
              </div>
              <form onSubmit={handleCallbackSubmit} className="space-y-6 flex-1 flex flex-col">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={callbackForm.fullName}
                    onChange={handleCallbackChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-dark-green focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Id</label>
                  <input
                    type="email"
                    name="email"
                    value={callbackForm.email}
                    onChange={handleCallbackChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-dark-green focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={callbackForm.mobileNumber}
                    onChange={handleCallbackChange}
                    required
                    maxLength={10}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-dark-green focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                    placeholder="Enter 10-digit mobile number"
                  />
                </div>
                <div className="mt-auto">
                  <button
                    type="submit"
                    disabled={isSubmittingCallback}
                    className="w-full px-8 py-4 bg-gradient-to-r from-dark-green to-light-green text-white font-bold rounded-lg hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 shadow-lg shadow-dark-green/30"
                  >
                    {isSubmittingCallback ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>

            {/* Google Map Section */}
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 fade-in-up overflow-hidden flex flex-col" style={{ animationDelay: '0.2s' }}>
              <div className="p-8 sm:p-10 md:p-12 flex flex-col flex-1">
                <div className="mb-6">
                  <h2 className="text-3xl sm:text-4xl font-bold text-dark-green mb-2">
                    Visit Us
                  </h2>
                  <p className="text-gray-600 mb-4">Find us at our location</p>
                  <div className="space-y-2 text-gray-700">
                    <p className="font-semibold text-dark-green">Hadi Industries</p>
                    <p>100, Prempuri, Near Shamli Bus Stand</p>
                    <p>Muzaffarnagar (U.P.) 251002</p>
                  </div>
                </div>
                <div className="relative w-full flex-1 min-h-[300px] rounded-lg overflow-hidden border border-gray-200 shadow-lg">
                  <iframe
                    src="https://maps.google.com/maps?q=100+Prempuri+Near+Shamli+Bus+Stand+Muzaffarnagar+Uttar+Pradesh+India&output=embed&zoom=15"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                    title="Hadi Industries Location - 100, Prempuri, Near Shamli Bus Stand, Muzaffarnagar (U.P.) 251002"
                  ></iframe>
                </div>
                <div className="mt-4">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Hadi+Industries+100+Prempuri+Near+Shamli+Bus+Stand+Muzaffarnagar+Uttar+Pradesh+251002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-dark-green to-light-green text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white to-light-green/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/2.png"
            alt="Royal Metro EV"
            fill
            className="object-cover opacity-10"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark-green/5 to-light-blue/5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-green mb-4 sm:mb-6">
            Ready to Go Electric?
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made the switch to sustainable transportation. 
            Experience the future of mobility today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-dark-green to-light-green text-white font-bold rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-dark-green/30 text-sm sm:text-base"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-light-blue text-light-blue font-bold rounded-lg hover:bg-light-blue hover:text-white transition-all duration-300 text-sm sm:text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Modern Toast Notification */}
      <Toast
        message={callbackMessage}
        type={toastType}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
        duration={5000}
      />
    </main>
  )
}
