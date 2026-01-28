'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Toast from '@/components/Toast'

/**
 * Main Landing Page
 * Royal Metro EV - Premium E-Rickshaw Showcase
 */
export default function Home() {
  // Hero Section - Image Slider State
  const heroImages = [
    { src: '/1.png', alt: 'Royal Metro EV E-Rickshaw - Drive Change' },
    { src: '/2.png', alt: 'Royal Metro EV E-Rickshaw - Green Revolution' },
    { src: '/3.png', alt: 'Royal Metro EV E-Rickshaw - Eco-Friendly' },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-play slider - 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [heroImages.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
  }

  // Stats Section State
  const [counts, setCounts] = useState({
    vehicles: 0,
    customers: 0,
    cities: 0,
    emissions: 0,
  })

  useEffect(() => {
    const targets = { vehicles: 5000, customers: 10000, cities: 50, emissions: 500 }
    const duration = 2000
    const steps = 60
    const increment = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      
      setCounts({
        vehicles: Math.floor(targets.vehicles * progress),
        customers: Math.floor(targets.customers * progress),
        cities: Math.floor(targets.cities * progress),
        emissions: Math.floor(targets.emissions * progress),
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setCounts(targets)
      }
    }, increment)

    return () => clearInterval(timer)
  }, [])

  // Features Data with actual product images
  const features = [
    {
      icon: '⚡',
      title: 'Electric Power',
      description: 'Zero emissions, eco-friendly transportation powered by advanced battery technology.',
      image: '/1.png',
      gradient: 'from-dark-green/20 to-light-green/10',
    },
    {
      icon: '🔋',
      title: 'Long Range',
      description: 'Extended battery life ensuring reliable daily commutes without frequent charging.',
      image: '/2.png',
      gradient: 'from-light-green/20 to-light-blue/10',
    },
    {
      icon: '🛡️',
      title: 'Safety First',
      description: 'Built with premium safety features and robust construction for peace of mind.',
      image: '/3.png',
      gradient: 'from-dark-green/20 to-light-blue/10',
    },
    {
      icon: '💚',
      title: 'Sustainable',
      description: 'Contributing to a greener future with every ride, reducing carbon footprint.',
      image: '/WhatsApp Image 2026-01-27 at 2.18.25 PM.jpeg',
      gradient: 'from-light-green/20 to-dark-green/10',
    },
    {
      icon: '🚀',
      title: 'Performance',
      description: 'Smooth acceleration and reliable performance for urban and suburban travel.',
      image: '/WhatsApp Image 2026-01-27 at 2.18.26 PM.jpeg',
      gradient: 'from-light-blue/20 to-light-green/10',
    },
    {
      icon: '👑',
      title: 'Premium Quality',
      description: 'Royal-grade craftsmanship with attention to detail and superior comfort.',
      image: '/fff.jpeg',
      gradient: 'from-dark-green/20 to-light-green/10',
    },
  ]

  // Gallery Images - Using actual product images
  const galleryImages = [
    {
      src: '/1.png',
      alt: 'Royal Metro EV E-Rickshaw Model 1',
      title: 'Premium E-Rickshaw',
    },
    {
      src: '/2.png',
      alt: 'Royal Metro EV E-Rickshaw Model 2',
      title: 'Eco-Friendly Design',
    },
    {
      src: '/3.png',
      alt: 'Royal Metro EV E-Rickshaw Model 3',
      title: 'Modern Electric Vehicle',
    },
    {
      src: '/WhatsApp Image 2026-01-27 at 2.18.25 PM.jpeg',
      alt: 'Royal Metro EV Elite Model',
      title: 'Elite Model',
    },
    {
      src: '/WhatsApp Image 2026-01-27 at 2.18.26 PM.jpeg',
      alt: 'Royal Metro EV Manufacturing',
      title: 'Quality Manufacturing',
    },
    {
      src: '/fff.jpeg',
      alt: 'Royal Metro EV Showcase',
      title: 'Showcase',
    },
  ]

  // Testimonials Data
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'E-Rickshaw Operator',
      location: 'Muzaffarnagar',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80',
      text: 'Royal Metro EV has changed my business completely. The vehicle is reliable, efficient, and the after-sales service is excellent. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Business Owner',
      location: 'Shamli',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80',
      text: 'I bought three e-rickshaws from Royal Metro EV. The quality is outstanding and my drivers love how comfortable they are. Great investment!',
      rating: 5,
    },
    {
      name: 'Amit Singh',
      role: 'Fleet Manager',
      location: 'Meerut',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80',
      text: 'The battery life and performance of Royal Metro EV vehicles exceed expectations. Our fleet has been running smoothly for over a year now.',
      rating: 5,
    },
  ]

  // Stats Data
  const stats = [
    { label: 'Vehicles Sold', value: counts.vehicles, suffix: '+', color: 'text-dark-green' },
    { label: 'Happy Customers', value: counts.customers, suffix: '+', color: 'text-light-green' },
    { label: 'Cities Served', value: counts.cities, suffix: '+', color: 'text-light-blue' },
    { label: 'CO₂ Saved (tons)', value: counts.emissions, suffix: '+', color: 'text-light-green' },
  ]

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

  return (
    <main className="min-h-screen bg-white">
      {/* Modern Hero Section with 3D Auto-Sliding Carousel */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* 3D Sliding Background Images Carousel */}
        <div className="absolute inset-0 z-0" style={{ perspective: '1500px' }}>
            {heroImages.map((image, index) => {
              const offset = index - currentIndex
              const isActive = index === currentIndex
              const isNext = offset === 1 || (currentIndex === heroImages.length - 1 && index === 0)
              const isPrev = offset === -1 || (currentIndex === 0 && index === heroImages.length - 1)
              
            // Calculate 3D transform for carousel effect
              let transform = ''
              let opacity = 0
              let zIndex = 0
            let scale = 0.9
              
              if (isActive) {
                transform = 'translateX(0) translateZ(0) rotateY(0deg)'
                opacity = 1
                zIndex = 10
                scale = 1
              } else if (isNext) {
              transform = 'translateX(30%) translateZ(-300px) rotateY(-25deg)'
                opacity = 0.3
                zIndex = 5
              scale = 0.85
              } else if (isPrev) {
              transform = 'translateX(-30%) translateZ(-300px) rotateY(25deg)'
                opacity = 0.3
                zIndex = 5
              scale = 0.85
              } else {
              transform = 'translateX(60%) translateZ(-600px) rotateY(-45deg)'
                opacity = 0
                zIndex = 1
              scale = 0.7
              }
              
              return (
                <div
                  key={index}
                className="absolute inset-0 transition-all duration-700 ease-in-out will-change-transform"
                  style={{
                    transform: `${transform} scale(${scale})`,
                    opacity: opacity,
                    zIndex: zIndex,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <Image
                    src={image.src}
                  alt={`Best E Rickshaw in Muzaffarnagar - Royal Metro EV ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  quality={95}
                  sizes="100vw"
                  />
                </div>
              )
            })}
          
          {/* Very subtle overlay only on left side for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent z-[11] pointer-events-none"></div>
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6 sm:space-y-8 fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                <span className="text-sm font-semibold text-white">🚀 Premium E-Rickshaw Manufacturer in Muzaffarnagar</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Green Energy,</span>
                <br />
                <span className="bg-gradient-to-r from-light-green via-light-blue to-light-green bg-clip-text text-transparent">
                  Great Journeys.
                </span>
              </h1>

              {/* Subheading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-light-green">
                Future of Mobility
              </h2>

              {/* Description Points */}
              <div className="space-y-3 text-lg sm:text-xl text-white/90">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-light-green rounded-full"></div>
                  <span>Eco-Friendly Rides, Powered by Innovation.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-light-green rounded-full"></div>
                  <span>Ride Smart, Go Green.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-light-blue rounded-full"></div>
                  <span>The Future of Clean Transportation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-light-green rounded-full"></div>
                  <span>Silent, Smooth, Sustainable.</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4">
                {['Sustainable', 'Eco-Friendly', 'Comfortable', 'Silent', 'Smart'].map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-sm font-medium text-white hover:bg-white/30 transition-colors"
                  >
                    {tag}
                  </span>
          ))}
        </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/products"
                  className="px-8 py-4 bg-gradient-to-r from-dark-green to-light-green text-white font-bold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center shadow-lg shadow-dark-green/30"
                >
                  Explore Products
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white/20 backdrop-blur-md border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/30 transition-all duration-300 text-center shadow-md"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right Side - Stats Cards Floating */}
            <div className="relative fade-in-up z-20" style={{ animationDelay: '0.2s' }}>
              {/* Floating Stats Cards */}
              <div className="flex flex-col items-end gap-4">
                <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-6 border border-white/50">
                  <div className="text-4xl font-bold bg-gradient-to-r from-dark-green to-light-green bg-clip-text text-transparent">5000+</div>
                  <div className="text-sm text-gray-700 font-medium">Vehicles Sold</div>
                </div>
                <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-6 border border-white/50">
                  <div className="text-4xl font-bold bg-gradient-to-r from-light-green to-light-blue bg-clip-text text-transparent">10000+</div>
                  <div className="text-sm text-gray-700 font-medium">Happy Customers</div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md rounded-full shadow-xl p-4 animate-bounce">
                <div className="w-16 h-16 bg-gradient-to-br from-dark-green to-light-green rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Indicators - Bottom Center */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center gap-4">
          <div className="flex gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-white shadow-lg'
                    : 'w-2 bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white/80 text-sm mb-2 font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Request A Call Back Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-dark-green/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-light-green/5 to-transparent rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Callback Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 md:p-12 border border-gray-100 fade-in-up">
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-dark-green mb-2">
                  Request A Call Back
                </h2>
                <p className="text-gray-600">Fill in your details and we&apos;ll get back to you shortly</p>
              </div>
              <form onSubmit={handleCallbackSubmit} className="space-y-6">
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
                <button
                  type="submit"
                  disabled={isSubmittingCallback}
                  className="w-full px-8 py-4 bg-gradient-to-r from-dark-green to-light-green text-white font-bold rounded-lg hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 shadow-lg shadow-dark-green/30"
                >
                  {isSubmittingCallback ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>

            {/* Marketing Content */}
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-dark-green/10 text-dark-green rounded-full text-sm font-semibold mb-4">
                  India&apos;s Leading EV Marketplace
                </span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  World&apos;s Largest EV Rickshaw Marketplace
                </h2>
                <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
                  Royal Metro EV, manufacturer of premium commercial electric vehicles, brings you the best in eco-friendly transportation. Experience quality, reliability, and innovation in every ride.
                </p>
              </div>
              
              {/* Feature Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-dark-green hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-dark-green/10 to-dark-green/5 rounded-xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-dark-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-dark-green mb-2">CONVENIENCE</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">Quality service, satisfaction, value, convenience, reliability.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-light-green hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-light-green/10 to-light-green/5 rounded-xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-light-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-light-green mb-2">ECO-FRIENDLY</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">Eco-Friendly Battery Operated E-Vehicle</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-light-green hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-light-green/10 to-light-green/5 rounded-xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-light-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-light-green mb-2">EXPERIENCED TEAM</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">Skilled crew equipped for excellence</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-light-green hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-light-green/10 to-light-green/5 rounded-xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-light-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-light-green mb-2">GREAT VALUE</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">Premium services at great prices</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #1a5f3f 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 fade-in-up">
            <span className="inline-block px-4 py-2 bg-dark-green/10 text-dark-green rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Why Choose Royal Metro <span className="bg-gradient-to-r from-dark-green to-light-blue bg-clip-text text-transparent">EV</span>?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of innovation, sustainability, and premium quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border-2 border-dark-green/30 hover:border-dark-green hover:shadow-2xl transition-all duration-300 group overflow-hidden hover-lift fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Upper Visual Section with Gradient Background */}
                <div className={`relative h-64 overflow-hidden bg-gradient-to-b ${feature.gradient || 'from-light-green/20 to-dark-green/10'}`}>
                  <Image
                    src={feature.image}
                    alt={`${feature.title} - Royal Metro EV E-Rickshaw in Muzaffarnagar`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-green/20 via-transparent to-transparent"></div>
                  
                  {/* Icon in white rounded square container - matching the design */}
                  <div className="absolute top-5 left-5 w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                </div>
                
                {/* Lower Text Section with White Background */}
                <div className="p-6 sm:p-8 bg-white">
                  <h3 className="text-xl sm:text-2xl font-bold text-dark-green mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-dark-green/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-bl from-light-green/5 to-transparent rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Video/Image Section */}
            <div className="relative fade-in-up">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-dark-green/10 to-light-green/10 group">
                <Image
                  src="/2.png"
                  alt="Royal Metro EV E-Rickshaw"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                {/* Video Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors cursor-pointer">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-dark-green to-light-green rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 border-4 border-white/20">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-sm font-semibold text-dark-green">Watch Our Story</span>
                </div>
              </div>
            </div>

            {/* Marketing Content */}
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-dark-green/10 text-dark-green rounded-full text-sm font-semibold mb-4">
                  Our Journey
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Our Journey in a Video
                </h2>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-dark-green to-light-green bg-clip-text text-transparent mb-8">
                Green Energy, Great Journeys.
              </h3>
              <div className="space-y-4 text-lg sm:text-xl text-gray-700">
                <div className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-100 hover:border-dark-green hover:shadow-md transition-all">
                  <div className="w-2 h-2 bg-dark-green rounded-full mt-2 flex-shrink-0"></div>
                  <span className="font-medium">Eco-Friendly Rides, Powered by Innovation.</span>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-100 hover:border-light-green hover:shadow-md transition-all">
                  <div className="w-2 h-2 bg-light-green rounded-full mt-2 flex-shrink-0"></div>
                  <span className="font-medium">Ride Smart, Go Green.</span>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-100 hover:border-light-blue hover:shadow-md transition-all">
                  <div className="w-2 h-2 bg-light-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span className="font-medium">The Future of Clean Transportation</span>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-100 hover:border-dark-green hover:shadow-md transition-all">
                  <div className="w-2 h-2 bg-dark-green rounded-full mt-2 flex-shrink-0"></div>
                  <span className="font-medium">Silent, Smooth, Sustainable.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-dark-green/10 to-light-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center fade-in-up scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`text-4xl sm:text-5xl md:text-6xl font-bold ${stat.color} mb-2`}>
                  {stat.value.toLocaleString()}{stat.suffix}
                </div>
                <div className="text-gray-600 text-sm sm:text-base md:text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-green mb-4">
              Our Gallery
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our premium e-rickshaws in action and see why thousands choose Royal Metro EV
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden border border-dark-green/20 hover:border-dark-green/40 transition-all duration-300 shadow-md hover:shadow-xl hover-lift fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-dark-green/10 to-light-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-green mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Don&apos;t just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-lg border border-dark-green/20 hover:border-dark-green/40 hover:shadow-xl transition-all duration-300 hover-lift fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-dark-green/20 mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark-green">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed italic">
                  &quot;{testimonial.text}&quot;
                </p>
              </div>
            ))}
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
