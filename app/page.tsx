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
          <div className="grid grid-cols-1 gap-8 lg:gap-12 items-center">
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

      {/* Key Features Section */}
      <section className="pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 md:pb-12 bg-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 fade-in-up">
            <span className="inline-block px-4 py-2 bg-dark-green/10 text-dark-green rounded-full text-sm font-semibold mb-3">
              ⚡ Our Features
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark-green">
              Key Features of Royal Metro EV
            </h2>
          </div>

          {/* Features Layout with Center Image */}
          <div className="relative min-h-[600px] sm:min-h-[700px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center">
            {/* Mobile: Stack cards vertically */}
            <div className="md:hidden w-full space-y-6">
              <div className="fade-in-up">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-dark-green to-light-green rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-green mb-3">Zero Emissions</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">Our e-rickshaws are 100% electric, meaning no emissions, no pollution, and a cleaner environment for everyone.</p>
                  </div>
                </div>
              </div>
              <div className="fade-in-up">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-dark-green to-light-green rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-green mb-3">Durability</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">Engineered with the highest quality materials, our vehicles are built to last, even on rough roads.</p>
                  </div>
                </div>
              </div>
              <div className="fade-in-up">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-dark-green to-light-green rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-green mb-3">Extended Battery Life</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">Travel further without worry—our e-rickshaws come with high-capacity batteries that deliver exceptional range.</p>
                  </div>
                </div>
              </div>
              <div className="fade-in-up">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-dark-green to-light-green rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-green mb-3">Comfort and Space</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">Spacious interiors with ergonomic seating provide maximum comfort for both drivers and passengers.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: Centered layout with image and cards */}
            <div className="hidden md:block relative w-full max-w-7xl mx-auto min-h-[550px] lg:min-h-[650px]">
              {/* Center Image - Perfectly Centered */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[450px] lg:w-[550px] xl:w-[650px] h-[450px] lg:h-[550px] xl:h-[650px] fade-in-up">
                <Image
                  src="/feature.png"
                  alt="Royal Metro EV E-Rickshaw"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 450px, (max-width: 1280px) 550px, 650px"
                  priority
                />
              </div>

              {/* Left Side Features */}
              <div className="absolute top-1/2 left-0 lg:left-4 xl:left-8 transform -translate-y-1/2 flex flex-col gap-4 lg:gap-6 z-20">
                {/* Top Left - Zero Emissions */}
                <div className="w-[280px] lg:w-[320px] xl:w-[360px] fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-dark-green to-light-green rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base lg:text-lg xl:text-xl font-bold text-dark-green mb-1.5 lg:mb-2">Zero Emissions</h3>
                      <p className="text-gray-700 leading-relaxed text-xs lg:text-sm">
                        Our e-rickshaws are 100% electric, meaning no emissions, no pollution, and a cleaner environment for everyone.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Left - Extended Battery Life */}
                <div className="w-[280px] lg:w-[320px] xl:w-[360px] fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-dark-green to-light-green rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base lg:text-lg xl:text-xl font-bold text-dark-green mb-1.5 lg:mb-2">Extended Battery Life</h3>
                      <p className="text-gray-700 leading-relaxed text-xs lg:text-sm">
                        Travel further without worry—our e-rickshaws come with high-capacity batteries that deliver exceptional range.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Features */}
              <div className="absolute top-1/2 right-0 lg:right-4 xl:right-8 transform -translate-y-1/2 flex flex-col gap-4 lg:gap-6 z-20">
                {/* Top Right - Durability */}
                <div className="w-[280px] lg:w-[320px] xl:w-[360px] fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-dark-green to-light-green rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base lg:text-lg xl:text-xl font-bold text-dark-green mb-1.5 lg:mb-2">Durability</h3>
                      <p className="text-gray-700 leading-relaxed text-xs lg:text-sm">
                        Engineered with the highest quality materials, our vehicles are built to last, even on rough roads.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Right - Comfort and Space */}
                <div className="w-[280px] lg:w-[320px] xl:w-[360px] fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-dark-green to-light-green rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base lg:text-lg xl:text-xl font-bold text-dark-green mb-1.5 lg:mb-2">Comfort and Space</h3>
                      <p className="text-gray-700 leading-relaxed text-xs lg:text-sm">
                        Spacious interiors with ergonomic seating provide maximum comfort for both drivers and passengers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
                    <p className="font-semibold text-dark-green">Royal Metro EV</p>
                    <p>100, Prempuri, Near Shamli Bus Stand</p>
                    <p>Muzaffarnagar (U.P.)</p>
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
                    title="Royal Metro EV Location - 100, Prempuri, Near Shamli Bus Stand, Muzaffarnagar (U.P.)"
                  ></iframe>
                </div>
                <div className="mt-4">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=100+Prempuri+Near+Shamli+Bus+Stand+Muzaffarnagar+Uttar+Pradesh"
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
