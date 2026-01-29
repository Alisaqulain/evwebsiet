'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 md:h-28 lg:h-32">
            {/* Logo Section */}
            <Link 
              href="/" 
              className="flex items-center space-x-3 group relative z-10 flex-shrink-0"
            >
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 transition-all duration-300 group-hover:scale-105">
                <Image
                  src="/logwithoutbg.png"
                  alt="Royal Metro EV Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 144px, 160px"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-dark-green to-light-green bg-clip-text text-transparent">
                    Royal Metro
                  </span>
                  <span className="text-light-blue ml-1">EV</span>
                </h1>
                <p className="text-sm md:text-base text-gray-500 font-medium -mt-0.5">
                  Electric Mobility
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-5 py-2.5 text-sm font-semibold transition-all duration-300 rounded-lg group ${
                      isActive
                        ? 'text-dark-green'
                        : 'text-gray-700 hover:text-dark-green'
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-dark-green/10 to-light-green/10 rounded-lg"></div>
                    )}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-dark-green to-light-green transition-all duration-300 group-hover:w-3/4"></div>
                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-dark-green to-light-green"></div>
                    )}
                  </Link>
                )
              })}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-gradient-to-r from-dark-green via-dark-green to-light-green text-white text-sm font-semibold rounded-lg shadow-lg shadow-dark-green/20 hover:shadow-xl hover:shadow-dark-green/30 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Get Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-light-green to-light-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden relative z-10 p-2 rounded-lg transition-all duration-300 ${
                isOpen
                  ? 'bg-dark-green text-white'
                  : 'text-dark-green hover:bg-dark-green/10'
              }`}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute top-0 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? 'rotate-45 top-2.5' : ''
                  }`}
                ></span>
                <span
                  className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span
                  className={`absolute top-5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? '-rotate-45 top-2.5' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pb-6 pt-2 border-t border-gray-100 bg-white/95 backdrop-blur-md">
            <div className="space-y-1 pt-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-dark-green/10 to-light-green/10 text-dark-green border-l-4 border-dark-green'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-dark-green hover:border-l-4 hover:border-gray-200'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 px-6 py-3.5 bg-gradient-to-r from-dark-green to-light-green text-white font-semibold rounded-lg text-center shadow-lg shadow-dark-green/20 hover:shadow-xl hover:shadow-dark-green/30 transition-all duration-300"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </nav>
      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-24 md:h-28 lg:h-32"></div>
    </>
  )
}
