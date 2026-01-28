'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

interface HeroSectionProps {
  modelPath?: string
}

/**
 * HeroSection Component
 * Main hero section with image slider showcasing Royal Metro EV e-rickshaws
 */
export default function HeroSection({ modelPath }: HeroSectionProps) {
  const images = [
    { src: '/1.png', alt: 'Royal Metro EV E-Rickshaw - Drive Change' },
    { src: '/2.png', alt: 'Royal Metro EV E-Rickshaw - Green Revolution' },
    { src: '/3.png', alt: 'Royal Metro EV E-Rickshaw - Eco-Friendly' },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [images.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <section className="w-full h-[90vh] relative overflow-hidden">
      {/* Image Slider */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 z-[-1]'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              quality={90}
            />
          </div>
        ))}
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20 z-[1]"></div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
        aria-label="Previous image"
      >
        <svg
          className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
        aria-label="Next image"
      >
        <svg
          className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slider Indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Dark overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-black/30 z-[1]"></div> */}
      
      {/* Animated background gradient overlay */}
      {/* <div className="absolute inset-0 bg-emerald-gradient opacity-20 animate-pulse z-[1]"></div> */}

      {/* Content container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Brand Text - Left Side */}
        <div className="flex-1 flex flex-col justify-center items-start lg:items-center text-left z-20 mb-8 lg:mb-0 lg:pr-8 pt-60 pb-60 absolute top-40 right-0 bottom-10">
          {/* <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-bold mb-4 tracking-tight">
            <span className="text-gradient glow-effect drop-shadow-lg">
              Royal Metro EV
            </span>
          </h1> */}
            {/* <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-light tracking-wide drop-shadow-lg">
              Driving the Future of Electric Mobility
            </p> */}
        </div>

        {/* 3D Model Container - Right Side
        <div className="flex-1 w-full lg:w-auto h-[50vh] sm:h-[60vh] lg:h-[80vh] max-w-4xl relative z-10">
        
        </div> */}

        {/* Decorative elements
        <div className="absolute top-20 left-4 lg:left-10 w-2 h-2 bg-dark-green rounded-full animate-ping opacity-75"></div>
        <div className="absolute bottom-20 right-4 lg:right-10 w-2 h-2 bg-light-blue rounded-full animate-ping opacity-75 delay-1000"></div>
        <div className="absolute top-1/2 left-2 lg:left-5 w-1 h-1 bg-light-green rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-4 lg:right-8 w-1 h-1 bg-light-blue rounded-full animate-pulse delay-500"></div> */}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-white text-sm mb-2 font-medium drop-shadow-lg">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

